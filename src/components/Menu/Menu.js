import React ,{Component, component} from "react";

class Menu extends Component{
    state = {
        text: "I am a Text"
    };

    render(){
        return (
            <div>
                <button onClick={() => alert("Button1")}>Button1</button>
                <button onClick={() => alert("Button2")}>Button2</button>
                <br></br>
                <h1>{this.state.text}</h1>
            </div>
        );
    };
};

export default Menu;