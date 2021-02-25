import React, { Component } from 'react'
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { FlexBox } from "../../components/reusuable/styles";

const IconsBox = styled.div`
  position: ;
  bottom: 0;
  background-color: #555;
  height :70px;
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

class BodyBottom extends Component {
    render() {
        return (
        <IconsBox>
            <FlexBox>
            <div>
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
            </div>
            </FlexBox>
          </IconsBox>
          
        )
    }
}

export default BodyBottom;
