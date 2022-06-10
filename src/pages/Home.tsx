import React, { useEffect, useState } from "react";
import { Container, RotatePanelBox, Alert } from "../styles/Home/home";
import DimensionalPlane from "../components/Home/3dPlane";
import Cube from "../components/Home/3dCube";

export default function Home() {
  const [deg, setDeg] = useState<number>(window.scrollY);
  useEffect(() => {
    const perDeg = 360 / (window.innerHeight * 2);
    window.addEventListener('scroll', (e: Event) => {
      setDeg(window.scrollY * perDeg);
    });
  }, [])
  return (
    <Container>
      <RotatePanelBox>
        <Cube deg={deg} />
        <DimensionalPlane deg={deg} />
        {
          deg === 0
            ? <Alert>Scroll Down!</Alert>
            : deg === 360
              ? <Alert>Scroll Up!</Alert>
              : null
        }
      </RotatePanelBox>
    </Container>
  )
}