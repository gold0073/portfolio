import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { FlexBox } from "../reusuable/styles";

import introimg from '../../img/Intro.jpg';
import reqctimg from '../../img/react.jpg';


const IntroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  width: 620px;
  height: 420px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  .label {
    font-weight: bold;
    text-align: right;
  }
  .me {
    width: 90%;
    height: 250px;
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
    width: 90%;
  }
`;

const IconsBox = styled.div`
  position: absolute;
  bottom: 0;
  height: 70px;
  background-color: #555;
  width: 100%;
  padding: 20px 0;
  .myicon {
    cursor: pointer;
    transition: 0.5s;
  }
  .github:hover {
    color: #302f2f !important;
  }
  .naver:hover {
    color: #4064ac !important;
  }
  .linkedin:hover {
    color: #2464ad !important;
  }
  .youtube:hover {
    color: #ff0000 !important;
  }
  .google:hover {
    color: #ad2f20 !important;
  }
`;

class Intro extends Component {
  render() {
    return (
      <div>
        <IntroContainer>
          <FlexBox>
            <div className="flex-4" style={{ padding: "25px" }}>
              <img className="me" src={introimg} />
            </div>
            <div className="flex-6" style={{ paddingTop: "30px" }}>
              <div className="job">Study PortFolio</div>
              <div className="name">Jy Park</div>
              <br />
              <FlexBox>
                <div className="flex-2 label">School</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">Good School</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "7px" }}>
                <div className="flex-2 label">Phone</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">010-111-1111</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "7px" }}>
                <div className="flex-2 label">Email</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">aa@aa.aa</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "7px" }}>
                <div className="flex-2 label">Adress</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">Seoul</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "7px" }}>
                <div className="flex-2 label">Job</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">...</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "7px" }}>
                <div className="flex-2 label">Happy</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">Virus</div>
              </FlexBox>
            </div>
          </FlexBox>
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
        </IntroContainer>
      </div>
    );
  }
}

export default Intro;