import React, { Component } from "react";
import Intro from "../../components/Intro/Intro";
import Reactjs from "../../components/Reactjs/Reactjs";
import Nodejs from "../../components/Nodejs/Nodejs";
import Golang from "../../components/Golang/Golang";

class Page extends Component {
  displayPage = no => {
    switch (no) {
      case 0:
        return <Intro />;
      case 1:
        return <Reactjs />;
      case 2:
        return <Nodejs />;  
      case 3:
        return <Golang />;   
      default:
        return <Intro />;
    }
  };

  render() {
    return <div>{this.displayPage(this.props.page)}</div>;
  }
}

export default Page;