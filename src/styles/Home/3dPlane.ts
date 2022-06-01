import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rotate = keyframes`
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  `
export const AxisPlane = styled('div')`
  width: 400px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotate} 10s linear infinite;
`
export const Plane = styled('div')`
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.4);
  position: absolute;
  border-radius: 20px;
  &:first-of-type {
    transform: rotateY(0deg) translateZ(600px);
  }
  &:nth-of-type(2) {
    transform: rotateY(45deg) translateZ(600px);
  }
  &:nth-of-type(3) {
    transform: rotateY(90deg) translateZ(600px);
  }
  &:nth-of-type(4) {
    transform: rotateY(135deg) translateZ(600px);
  }
  &:nth-of-type(5) {
    transform: rotateY(180deg) translateZ(600px);
  }
  &:nth-of-type(6) {
    transform: rotateY(225deg) translateZ(600px);
  }
  &:nth-of-type(7) {
    transform: rotateY(270deg) translateZ(600px);
  }
  &:nth-of-type(8) {
    transform: rotateY(315deg) translateZ(600px);
  }
`