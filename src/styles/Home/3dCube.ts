import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const CUBE = keyframes`
  0% {
    transform: rotateX(0) rotateY(0) rotateY(0);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateY(360deg);
  }
`
export const CubeBox = styled('div') <{ deg: number }>`
  width: 90px;
  height: 90px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1s linear;
  animation: ${CUBE} 10s linear infinite;
`
export const CubePlane = styled('div')`
  width: 100%;
  height: 100%;
  background-color: inherit;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: inset 0 0 10px 10px #08D2F7;
  &:first-of-type {
    transform: rotateX(90deg) translateZ(50px);
  }
  &:nth-of-type(2) {
    transform: rotateX(270deg) translateZ(50px);
  }
  &:nth-of-type(3) {
    transform: rotateY(0deg) translateZ(50px);
  }
  &:nth-of-type(4) {
    transform: rotateY(90deg) translateZ(50px);
  }
  &:nth-of-type(5) {
    transform: rotateY(180deg) translateZ(50px);
  }
  &:nth-of-type(6) {
    transform: rotateY(270deg) translateZ(50px);
  }
`