import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { FlexBox } from "../reusuable/styles";
import { IntroContainerBottom } from "../reusuable/styles";
import { IntroContainer } from "../reusuable/styles";
import { IconsBox } from "../reusuable/styles";


import nodejsmongoimg from '../../img/nodejsMongo.jpg';


class NodeJs extends Component {
  render() {
    return (
      <div style={{ paddingTop: "180px" }}>
        <IntroContainer>
          <FlexBox>
            <div className="flex-4" style={{ padding: "25px" }}>
              <img 
              className="me" 
              src={nodejsmongoimg} />
            </div>
            <div className="flex-6" style={{ paddingTop: "30px" }}>
              <div className="job"></div>
              <div className="name">NodeJS ,MongoDB RestAPI</div>
              <br />
              <FlexBox>
                <div className="flex-2 label">개요</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">NodeJs , MongoDB를 사용해서 RestApi 만들어 본다</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">강좌 링크</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('https://www.youtube.com/playlist?list=PL9mhQYIlKEhfedWZfhcP6JCb83gDo1T9r','_blank')}} >유트브 강좌 </a></div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">Site</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">PostMan localhost:3002 번을 이용하여 테스트</div>
              </FlexBox>
              <FlexBox style={{ marginTop: "20px" }}>
                <div className="flex-2 label">Source</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6"><a onClick={() => {window.open('https://github.com/gold0073/NodeMongoDB ','_blank')}} >git-Sourcelink</a></div>
              </FlexBox>
            </div>
          </FlexBox>
          
        </IntroContainer>
      </div>
    );
  }
}

export default NodeJs;