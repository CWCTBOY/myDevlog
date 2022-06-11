import styled from "@emotion/styled";

export const AxisPlane = styled('div') <{ deg: number }>`
  width: 180px;
  height: 130px;
  position: relative;
  transform-style: preserve-3d;
  margin: 180px;
  transform: rotateY(${props => `-${props.deg}deg`}) ;
`
export const Plane = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0);
  position: absolute;
  color: #08D2F7;
  box-shadow: inset 0 0 3px 3px #08D2F7;
  border: 1px solid #08D2F7;
  border-radius: 10px;
  &:first-of-type {
    transform: rotateY(0deg) translateZ(370px);
  }
  &:nth-of-type(2) {
    transform: rotateY(45deg) translateZ(370px);
  }
  &:nth-of-type(3) {
    transform: rotateY(90deg) translateZ(370px);
  }
  &:nth-of-type(4) {
    transform: rotateY(135deg) translateZ(370px);
  }
  &:nth-of-type(5) {
    transform: rotateY(180deg) translateZ(370px);
  }
  &:nth-of-type(6) {
    transform: rotateY(225deg) translateZ(370px);
  }
  &:nth-of-type(7) {
    transform: rotateY(270deg) translateZ(370px);
  }
  &:nth-of-type(8) {
    transform: rotateY(315deg) translateZ(370px);
  }
`