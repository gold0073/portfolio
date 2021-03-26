import React from "react";
import styled from "styled-components";

import { Icon } from "semantic-ui-react";
import { FlexBox } from "../../components/reusuable/styles";
import { IntroContainer } from "../../components/reusuable/styles";
import { IconsBox } from "../../components/reusuable/styles";

const Menu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 680px;
  background-color: #555;
  height: 75px;
  left: 50%;
  padding: 10px 10px;
  padding-bottom: 0px;
  transform: translateX(-50%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  font-weight: bold;
`;

const bottomContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  width: 680px;
  background-color: #F5F5F5;
  .label {
    font-weight: bold;
    text-align: right;
    width: 280px;
  }
  .me {
    width: 95%;
    height: 250px;
    cursor: pointer;
  }
  .job {
    color: #aaa;
    font-size: 18px;
    letter-spacing: 1.5px;
  }
  .name {
    font-size: 24px;
    font-weight: bold;
    margin-top: 5px;
    border-bottom: 0.5px solid black;
    padding-bottom: 10px;
    width: 95%;
  }
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

  render() {
    return <Menu>
       <bottomContainer>
          <IconsBox>
            <FlexBox>
              <div className="flex-1" />
              <div className="flex-1">
                  <Icon
                    onClick={() => {window.open('http://github.com/gold0073','_blank')}}
                    className="myicon github"
                    name="github"
                    size="big"
                    style={{ color: "white" }}
                  />
              </div>
              <div className="flex-1">
                <Icon
                 onClick={() => {window.open('http://www.naver.com','_blank')}}   
                  className="myicon naver"
                  name="globe"
                  size="big"
                  style={{ color: "white" }}
                />
              </div>
              <div className="flex-1">
                <Icon
                  className="myicon linkedin"
                  name="linkedin"
                  size="big"
                  style={{ color: "white" }}
                />
              </div>
              <div className="flex-1">
                <Icon
                  onClick={() => {window.open('http://google.com','_blank')}}
                  className="myicon google"
                  name="google plus"
                  size="big"
                  style={{ color: "white" }}
                />
              </div>
              <div className="flex-1">
                <Icon
                  onClick={() => {window.open('http://youtube.com','_blank')}}
                  className="myicon youtube"
                  name="youtube"
                  size="big"
                  style={{ color: "white" }}
                />
              </div>
              <div className="flex-1" />
            </FlexBox>
          </IconsBox>
        </bottomContainer>
      </Menu>;
  }
}

export default Menubar;