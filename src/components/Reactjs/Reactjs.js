import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { FlexBox } from "../reusuable/styles";

import reactimg from '../../img/react.jpg';


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

class Golang extends Component {
  render() {
    return (
      <div>
        <IntroContainer>
          <FlexBox>
            <div className="flex-4" style={{ padding: "25px" }}>
              <img 
              className="me" 
              src={reactimg} />
            </div>
            <div className="flex-6" style={{ paddingTop: "30px" }}>
              <div className="job"></div>
              <div className="name">React로 만드는 포트폴리오</div>
              <br />
              <FlexBox>
                <div className="flex-2 label">개요</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">Framework React.JS를 사용해서 자신의 포트폴리오를 만들어 보겠습니다.
                 HTML,CSS 를 모르셔도 기본 프로그램을 아시면 충분히 따라오실수 있다고 생각합니다.</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">강좌 링크</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('https://www.youtube.com/playlist?list=PLHGvDasahwZPmRmNYhaJCoTFf1N9YQaia','_blank')}} >유트브 강좌 </a></div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">Source</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('https://github.com/gold0073/portfolio','_blank')}} >git-Sourcelink</a></div>
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

export default Golang;