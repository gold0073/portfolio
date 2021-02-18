import React,{component} from "react";
import styled from "styled-components";
import './App.css';
import Menu from "./components/Menu/Menu.js"

const Container = styled.div`
  text-align: center;
`;

//stateful component
//stateless component
const MyComponent = function(props){
  return (
    <h1>Welcome to my React Cource <br />
      {props.text}
    </h1>
    );
}


function App() {
  //text-align:center
  return (
    <Container>
      
      <div className="intro" style={{backgroundColor:"red"}} >
      <MyComponent text={"ABC"} />
        JY Park
        <Menu></Menu>
      </div>
    </Container>
  );
}

export default App;
