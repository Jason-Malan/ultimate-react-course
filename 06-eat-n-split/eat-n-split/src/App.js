import "./App.css";
import { useState } from "react";

export default function App() {
  const [addFriendOpen, setAddFriendOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriendId, setSelectedFriendId] = useState("");
  const isSplitBillOpen = !!selectedFriendId;
  const selectedFriend = friends.find((f) => f.id === selectedFriendId);

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

  function handleSelectFriend(id) {
    setSelectedFriendId(selectedFriendId === id ? "" : id);
    setAddFriendOpen(false);
  }

  function updateFriendBalance(id, balance) {
    setFriends((friends) =>
      friends.map((f) => (f.id === id ? { ...f, balance } : f))
    );
    setSelectedFriendId("");
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelect={handleSelectFriend}
          selectedFriendId={selectedFriendId}
        />

        {addFriendOpen && <FormAddFriend onAdd={AddFriend} />}
        <Button onClick={toggleAddFriendForm}>
          {addFriendOpen ? "Close" : "Add friend"}
        </Button>
      </div>

      {isSplitBillOpen && (
        <FormSplitBill
          friend={selectedFriend}
          updateFriendBalance={updateFriendBalance}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function FriendList({ friends, onSelect, selectedFriendId }) {
  return (
    <ul>
      {friends.map((f) => (
        <Friend
          friend={f}
          key={f.id}
          onSelect={onSelect}
          selectedFriendId={selectedFriendId}
        ></Friend>
      ))}
    </ul>
  );
}

function Friend({ friend, onSelect, selectedFriendId }) {
  const isSelected = selectedFriendId === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
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

      <Button onClick={() => onSelect(friend.id)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAdd }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ name: name, imgUrl: img });
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit}>
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

function FormSplitBill({ friend, updateFriendBalance }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [paying, setPaying] = useState("");
  const friendExpense = bill - userExpense;

  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        e.preventDefault();
        let friendBalance = friend.balance;
        paying === "user"
          ? (friendBalance += bill - userExpense)
          : (friendBalance -= bill - friendExpense);
        updateFriendBalance(friend.id, friendBalance);
      }}
    >
      <h2>Split a bill with {friend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>👨‍🎤 Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(+e.target.value > bill ? userExpense : +e.target.value)
        }
      />

      <label>🤼 {friend.name} expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>🤑 Who is paying</label>
      <select value={paying} onChange={(e) => setPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
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
