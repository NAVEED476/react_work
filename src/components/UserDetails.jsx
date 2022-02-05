//Props: Properties


import "./userdetails.css";

export const UserDetails = ({ name, age, isMarried, add }) => {
  return (
    <div>
      <h2 className="username">Username: {name}</h2>
      <p>Address: {add || "Delhi"}</p>
      <p>age: {age}</p>
      <p>is married?: {isMarried ? "Yes" : "No"}</p>
    </div>
  );
};
