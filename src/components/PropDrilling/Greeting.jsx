import userEvent from "@testing-library/user-event";

const Greeting = ({ user, age }) => {
  return (
    <p style={{ backgroundColor: "#eee" }}>
      Hello my name is {user.name} and i'm {user.age} years old
    </p>
  );
};

export default Greeting;
