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
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
export const Header = styled('div')`
  width: 100%;
  height: 35vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1300px;
`
export const ArtWork = styled('div')`
  width: 100%;
  height: 45vh;
  display:flex ;
  justify-content: center;
  align-items: center;
  perspective: 1300px;
`
export const AlertBox = styled('div')`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
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