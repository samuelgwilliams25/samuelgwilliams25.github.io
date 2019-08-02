import React, { Component } from 'react'
import styled from 'styled-components';

import splash from '../assets/splash.gif';


const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  top:0px;
  left:0px;
  position:fixed;

  display: ${props => props.hasPlayed ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
`;

const SplashLogo = styled.img`

  max-height:300px;
  position:fixed;
  z-index:3;

  display: ${props => props.hasPlayed ? 'none' : 'block'};

`;

const LeftSlide = styled.div`
  @keyframes slideLeft{
    from{
      transform: translateX(0vw);
    }
    to{
      transform: translateX(-50vw);
    }

  }
  animation: slideLeft 1000ms linear 2990ms 1 normal none;

  height:100vh;
  width:50vw;
  display: ${props => props.hasPlayed ? 'none' : 'block'};
  border-right:1px solid black;
  background-color:white;
`;


const RightSlide = styled.div`
  @keyframes slideRight{
    from{
      transform: translateX(0vw);
    }
    to{
      transform: translateX(50vw);
    }

  }
  height:100vh;
  width:50vw;
  animation: slideRight 1000ms linear 2990ms 1 normal none;

  display: ${props => props.hasPlayed ? 'none' : 'block'};
  background-color:white;

  border-left: 1px solid black;


`;


class Splash extends Component {
  constructor(props){
    super(props);

    this.state = {
      imgHasPlayed:true,
      hasPlayed:true
    }


  }
  render() {
    setTimeout(() => {
      this.setState(prevState => ({
        imgHasPlayed: true
      }))
    },3000);
    setTimeout(() => {
      this.setState(prevState => ({
        hasPlayed: true
      }))
    },3900);


    return (
      <Wrapper hasPlayed={this.state.hasPlayed}>

        <LeftSlide hasPlayed={this.state.hasPlayed}></LeftSlide>
        <SplashLogo src={splash} hasPlayed={this.state.imgHasPlayed}/>
        <RightSlide hasPlayed={this.state.hasPlayed}></RightSlide>

      </Wrapper>
    )
  }
}

export default Splash;