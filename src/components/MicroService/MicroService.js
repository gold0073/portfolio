import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { FlexBox } from "../reusuable/styles";
import { IntroContainerBox } from "../reusuable/styles";
import { IntroContainer } from "../reusuable/styles";
import { IconsBox } from "../reusuable/styles";


import microserviceimg from '../../img/msboard.jpg';
import meactBoardImg from '../../img/reactBoard.JPG';

class MicorService extends Component {
  render() {
    return (
      <div style={{ paddingTop: "170px", paddingBottom: "100px" }}>
        <IntroContainer>
          <FlexBox>
            <div className="flex-4" style={{ padding: "25px" }}>
              <img 
              onClick={() => {window.open('http://localhost:8080/#/','_blank')}}
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
                서버는 NodeJs를 사용MSA를 이용해 분리 프론트는 VueJs, DB는 무료 MariaDB,PostgreDB 를 사용.</div>
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
        </IntroContainer>
        
        <IntroContainer>
          <FlexBox>
            <div className="flex-4" style={{ padding: "25px" }}>
              <img 
              onClick={() => {window.open('http://localhost:3010/','_blank')}}
              className="me" 
              src={meactBoardImg} />
            </div>
            <div className="flex-6" style={{ paddingTop: "30px" }}>
              <div className="job"></div>
              <div className="name">마이크로서비스(React) 게시판</div>
              <br />
              <FlexBox>
                <div className="flex-2 label">개요</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">MicroService를 이용해 만드는 게시판
                서버는 NodeJs를 사용MSA를 이용해 분리 프론트는 ReactJs, DB는 무료 MariaDB사용.</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">강좌 링크</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('https://www.youtube.com/playlist?list=PLRx0vPvlEmdCED62ZIWCbI-6G_jcwmuFB','_blank')}} >유트브 강좌 </a></div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">Site</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('http://localhost:3010/','_blank')}} >linkUrl</a></div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">서버 Source</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('https://github.com/gold0073/NodeMicroService.git','_blank')}} >MicroService(git-Source)</a></div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">프론트Source</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('https://github.com/gold0073/reactBoard','_blank')}} >ReactJS(git-Source)</a></div>
              </FlexBox>
            </div>
          </FlexBox>
        </IntroContainer>
      </div>
    );
  }
}

export default MicorService;