import "./App.css";
import { useState } from "react";

export default function App() {
  const [addFriendOpen, setAddFriendOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState("");

  function AddFriend({ name, imgUrl }) {
    setFriends((friends) => [
      ...friends,
      { id: new Date().getTime(), name, image: imgUrl, balance: 0 },
    ]);
    toggleAddFriendForm();
  }

  function toggleAddFriendForm() {
    setAddFriendOpen((o) => !o);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelect={(id) => setSelectedFriend(id)}
        />

        {addFriendOpen && <FormAddFriend onAdd={AddFriend} />}
        <Button onClick={toggleAddFriendForm}>
          {addFriendOpen ? "Close" : "Add friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendList({ friends, onSelect }) {
  return (
    <ul>
      {friends.map((f) => (
        <Friend friend={f} key={f.id} onSelect={onSelect}></Friend>
      ))}
    </ul>
  );
}

function Friend({ friend, onSelect }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelect(friend.id)}>Select</Button>
    </li>
  );
}

function FormAddFriend({ onAdd }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  return (
    <form
      className="form-add-friend"
      onSubmit={(e) => {
        e.preventDefault();
        onAdd({ name: name, imgUrl: img });
      }}
    >
      <label>🤼 Friend</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📸 Image URL</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>👨‍🎤 Your expense</label>
      <input type="text" />

      <label>🤼 X's expense</label>
      <input type="text" />

      <label>🤑 Who is paying</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
