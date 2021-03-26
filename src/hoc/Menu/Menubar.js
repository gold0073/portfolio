import React from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";

const Menu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 680px;
  background-color: #9999;
  height: 170px;
  left: 50%;
  padding: 15px 15px;
  padding-bottom: 10px;
  transform: translateX(-50%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  font-weight: bold;
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
      text: "GoLang PostgreDB SQLite3 HirokuCloud"
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
      text: "NodeJS RestApi MongoDB"
    },
    {
      icon: "sitemap",
      color: "#440EF8",
      text: "MicroService NodeJs,VueJS Maria,Postgre"
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