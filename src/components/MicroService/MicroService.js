import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { FlexBox } from "../reusuable/styles";

import microserviceimg from '../../img/msboard.jpg';


const IntroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  width: 650px;
  height: 420px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  .label {
    font-weight: bold;
    text-align: right;
    width: 280px;
  }
  .me {
    width: 95%;
    height: 300px;
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

class MicorService extends Component {
  render() {
    return (
      <div>
        <IntroContainer>
          <FlexBox>
            <div className="flex-4" style={{ padding: "25px" }}>
              <img 
              onClick={() => {window.open('https://vast-cliffs-67812.herokuapp.com/ ','_blank')}}
              className="me" 
              src={microserviceimg} />
            </div>
            <div className="flex-6" style={{ paddingTop: "30px" }}>
              <div className="job"></div>
              <div className="name">마이크로서비스 게시판</div>
              <br />
              <FlexBox>
                <div className="flex-2 label">개요</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">MicroService를 이용해 만드는 게시판
                서버는 NodeJs를 사용MSA를 이용해 분리 프론트는 VueJs, DB는 무료 MariaDB,PostgreDB 를 사용해서
                웹을 완성합니다.</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">강좌 링크</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('https://www.youtube.com/playlist?list=PLyjjOwsFAe8ITIDUNsU_x4XNbPJeOvs-b','_blank')}} >유트브 강좌 </a></div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">Site</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('http://localhost:8080/#/','_blank')}} >linkUrl</a></div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">서버 Source</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('https://github.com/gold0073/NodeMicroService.git','_blank')}} >MicroService(git-Source)</a></div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">프론트 Source</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('https://github.com/gold0073/node-btstrap-vue.git','_blank')}} >VueJs(git-Source)</a></div>
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

export default MicorService;