import React, { Component } from "react";
import Intro from "../../components/Intro/Intro";
import Reactjs from "../../components/Reactjs/Reactjs";
import Nodejs from "../../components/Nodejs/Nodejs";
import NodejsMongo from "../../components/NodejsMongo/NodejsMongo";
import Golang from "../../components/Golang/Golang";
import MicroService from "../../components/MicroService/MicroService";

class Page extends Component {
  displayPage = no => {
    switch (no) {
      case 0:
        return <Intro />;
      case 1:
        return <MicroService />;  
      case 2:
        return <Reactjs />;
      case 3:
        return <Nodejs />;  
      case 4:
        return <NodejsMongo />;    
      case 5:
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