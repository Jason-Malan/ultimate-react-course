import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="app">
      <ProfileCard />
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="card">
      <div className="img-box">
        <img src="girl.jpg" alt="girl" className="img"></img>
      </div>
      <div className="content">
        <div className="detail">
          <h3 className="header">Mary Lou</h3>
          <div className="description">
            Passionate React and C# developer with a track record of crafting
            seamless user experiences. Expert in front-end React development and
            robust back-end solutions with C#. Committed to innovation and
            teamwork. Let's connect and bring your projects to life!
          </div>
        </div>
        <div className="tags">
          <ProfileTag text="HTML+CSS 💪" bgColor="blue" />
          <ProfileTag text="JavaScript 💪" bgColor="yellow" />
          <ProfileTag text="Web Design 💪" bgColor="lightgreen" />
          <ProfileTag text="Git and GitHub 👍" bgColor="darkred" />
          <ProfileTag text="React 💪❤" bgColor="lightblue" />
          <ProfileTag text="Svelte 😔" bgColor="red" />
        </div>
      </div>
    </div>
  );
}

function ProfileTag(props) {
  return (
    <span className="tag" style={{ backgroundColor: props.bgColor }}>
      <span className="tag-text">{props.text}</span>
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
