import Greeting from "./Greeting";

const Hello = ({user, age}) => {
  return (
    <div style={{backgroundColor: '#ccc', padding: 20}}>
        <h2>Component Hello</h2>
        <Greeting user={user}/>
    </div>
  );
};

export default Hello;
