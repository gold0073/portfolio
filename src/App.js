import React, { Component } from "react";
import styled from "styled-components";
import Menubar from "./hoc/Menu/Menubar";
import Page from "./hoc/Page/Page";
import BodyBottom from "./hoc/BodyBottom/BodyBottom";

class App extends Component {
  state = {
    page: 0
  };
  showPage = no => {
    this.setState({ page: no });
  };
  render() {
    return (
      <div>
        <Menubar showPage={this.showPage} />
   		  <div style={{ marginTop: "15%"}}></div>
        <Page page={this.state.page} />
        <BodyBottom page={this.state.page} />
      </div>
    );
  }
}

export default App;