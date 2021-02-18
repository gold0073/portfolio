import React, { Component } from "react";
import styled from "styled-components";
import Menubar from "./hoc/Menu/Menubar";

class App extends Component {
  state = {
    page: 0
  };
  showPage = no => {
    alert(no);
    this.setState({ page: no });
  };

  render() {
    return (
      <div>
        <Menubar showPage={this.showPage} />
      </div>
    );
  }
}

export default App;