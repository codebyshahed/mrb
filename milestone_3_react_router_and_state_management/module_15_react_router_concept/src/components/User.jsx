import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const userStyle = {
    border: "2px solid yellow",
    margin: "10px 0",
  };

  return (
    <div style={userStyle}>
      <h4>{name}</h4>

      <p>Email: {email}</p>

      <p>
        <small>Phone: {phone}</small>
      </p>

      <Link to={`users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
