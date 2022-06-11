import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const CUBE = keyframes`
  0% {
    transform: rotateX(-20deg) rotateY(0);
  }
  50% {
    transform: rotateX(10deg) rotateY(180deg);
  }
  100% {
    transform: rotateX(-20deg) rotateY(360deg);
  }
`
const TITLE_ANI = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const TITLE_ANI_HIDDEN = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
export const CubeBox = styled('div') <{ deg: number }>`
  width: 90px;
  height: 90px;
  margin: 0 100px 0 100px;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  animation: ${CUBE} 4s linear infinite;
`
export const CubePlane = styled('div') <{ onoff: boolean }>`
  width: 100%;
  height: 100%;
  background-color: inherit;
  position: absolute;
  backface-visibility: ${props => !props.onoff ? 'hidden' : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: inset 0 0 10px 10px ${props => !props.onoff ? '#08D2F7' : '#0DF64D'};
  &:first-of-type {
    transition:all .5s ease-in-out ;
    transform: rotateX(90deg) 
              translateZ(${props => !props.onoff ? '50px' : '-100px'});
    opacity: ${props => !props.onoff ? 1 : .6};
  }
  &:nth-of-type(2) {
    transition: all .5s ease-in-out;
    transform: rotateX(270deg) 
              translateZ(${props => !props.onoff ? '50px' : '-100px'});
    opacity: ${props => !props.onoff ? 1 : .6};
  }
  &:nth-of-type(3) {
    transition: all .5s ease-in-out;
    transform: rotateY(0deg) 
              translateZ(${props => !props.onoff ? '50px' : '-100px'});
    opacity: ${props => !props.onoff ? 1 : .6};
  }
  &:nth-of-type(4) {
    transition: all .5s ease-in-out;
    transform: rotateY(90deg) 
              translateZ(${props => !props.onoff ? '50px' : '-100px'});
    opacity: ${props => !props.onoff ? 1 : .6};
  }
  &:nth-of-type(5) {
    transition: all .5s ease-in-out;
    transform: rotateY(180deg) 
              translateZ(${props => !props.onoff ? '50px' : '-100px'});
    opacity: ${props => !props.onoff ? 1 : .6};
  }
  &:nth-of-type(6) {
    transition: all .5s ease-in-out;
    transform: rotateY(270deg) 
              translateZ(${props => !props.onoff ? '50px' : '-100px'});
    opacity: ${props => !props.onoff ? 1 : .6};
  }
`
export const BlogTitle = styled('div') <{ onoff: boolean }>`
  transition: width 0.4s linear;
  width: ${props => !props.onoff ? 0 : '400px'};
  height: auto;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: ${props => !props.onoff ? TITLE_ANI_HIDDEN : TITLE_ANI} .4s linear forwards;
  /* position: absolute;
  top: 8.25vh; */
  h1 {
  width: 100%;
  height: 100px;
  display: inline-block;
  font-size: 40px;
  color: white;
  animation-delay: 1s;
  }
`
export const IdBox = styled('div')`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Identifier = styled('div')`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 1px solid white;
  border-radius: 10px;
  h2 {
  font-size: 25px;
  color: white;
  cursor: pointer;
}
`