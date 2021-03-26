import styled from "styled-components";



export const FlexBox = styled.div`
  display: flex;
  .flex-1 {
    flex: 1;
  }
  .flex-2 {
    flex: 2;
  }
  .flex-3 {
    flex: 3;
  }
  .flex-4 {
    flex: 4;
  }
  .flex-5 {
    flex: 5;
  }
  .flex-6 {
    flex: 6;
  }
  .flex-7 {
    flex: 7;
  }
  .flex-8 {
    flex: 8;
  }
  .flex-9 {
    flex: 9;
  }
`;


export const IntroContainerBox = styled.div`
  position : inherit
  margin-top: 200px;
`;

export const IntroContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 620px;
  height: 350px;
  background-color: #F5F5F5;
  padding-bottom: 50px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
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

export const IconsBox = styled.div`
  position: absolute;
  bottom: 80;
  height: 75px;
  background-color: #555;
  width: 85%;
  padding: 20px 20px;
  transform: translateX(12%);
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
