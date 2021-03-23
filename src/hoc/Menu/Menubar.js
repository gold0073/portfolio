import React from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";

const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 650px;
  background-color: #efefef;
  height: 155px;
  left: 50%;
  padding: 15px 15px;
  padding-bottom: 10px;
  transform: translateX(-50%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

class Menubar extends React.Component {
  menus = [
    {
      icon: "user",
      color: "black",
      text: "Intro"
    },
    {
      icon: "meh",
      color: "#DE6800",
      text: "GoLang PostgraDB SQLite3"
    },    
    {
      icon: "react",
      color: "#5CD3F3",
      text: "ReactJS"
    },
    {
      icon: "node",
      color: "#87BF00",
      text: "NodeJS"
    },
    {
      icon: "node js",
      color: "#FF28A7",
      text: "NodeJS RestApi (MongoDB)"
    },
    {
      icon: "sitemap",
      color: "#440EF8",
      text: "MicroService VueJS Maria,Postgre"
    },
    
  ];
  renderMenus = arr => {
    return arr.map((a, index) => {
      return (
        <MenuButton
          showPage={this.props.showPage}
          index={index}
          key={index}
          icon={a.icon}
          color={a.color}
          text={a.text}
        />
      );
    });
  };

  render() {
    return <Menu>{this.renderMenus(this.menus)}</Menu>;
  }
}

export default Menubar;