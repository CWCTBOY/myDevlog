import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled('div')`
  width: 100vw;
  height: 300vh;
`
export const RotatePanelBox = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 1300px;
  position: fixed;
`
const ALERT = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const Alert = styled('h1')`
  position: absolute;
  top: 80vh;
  font-size: 60px;
  color: white;
  animation: ${ALERT} 1.3s linear forwards;
`