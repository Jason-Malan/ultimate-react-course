import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
          {skills.map((skill) => (
            <Skill
              skill={skill.skill}
              level={skill.level}
              color={skill.color}
            ></Skill>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <span className="tag" style={{ backgroundColor: color }}>
      <span className="tag-text">
        {skill} {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </span>
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
