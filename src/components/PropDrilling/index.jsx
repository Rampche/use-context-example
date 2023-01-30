import Hello from "./Hello";

const PropDrilling = () => {
  const user = {
    name: "Joana Serra",
    age: 26,
  };

  return (
    <div style={{ backgroundColor: "darkred", padding: 20 }}>
      <Hello user={user} />
    </div>
  );
};

export default PropDrilling;
