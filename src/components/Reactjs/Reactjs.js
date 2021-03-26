import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { FlexBox } from "../reusuable/styles";
import { IntroContainerBottom } from "../reusuable/styles";
import { IntroContainer } from "../reusuable/styles";
import { IconsBox } from "../reusuable/styles";

import reactimg from '../../img/react.jpg';
import XPreactimg from '../../img/XPReact.JPG';


class Golang extends Component {
  render() {
    return (
      <div style={{ paddingTop: "170px", paddingBottom: "100px" }}>
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
        </IntroContainer>  

        <IntroContainer>
          <FlexBox>
            <div className="flex-4" style={{ padding: "25px" }}>
              <img 
              className="me" 
              src={XPreactimg} />
            </div>
            <div className="flex-6" style={{ paddingTop: "30px" }}>
              <div className="job"></div>
              <div className="name">소개 : React - windowXP</div>
              <br />
              <FlexBox>
                <div className="flex-2 label">개요</div>
                <div className="flex-1"></div>
                <div className="flex-6">신기하네...나중에 분석 해보자....</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">실행 페이지</div>
                <div className="flex-1"></div>
                <div className="flex-6"><a onClick={() => {window.open('https://winxp.now.sh','_blank')}} >LinkURL </a></div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">Source</div>
                <div className="flex-1"></div>
                <div className="flex-6"><a onClick={() => {window.open('https://github.com/ShizukuIchi/winXP','_blank')}} >git-Sourcelink</a></div>
              </FlexBox>
            </div>
          </FlexBox>
        </IntroContainer>  
      </div>
    );
  }
}

export default Golang;