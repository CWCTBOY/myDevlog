import { useEffect, useState } from "react";
import {
  Container,
  RotatePanelBox,
  Alert,
  ArtWork,
  AlertBox,
} from "../styles/home/home";
import DimensionalPlane from "../components/home/3dPlane";
import Cube from "../components/home/3dCube";
import { Header } from "../styles/home/home";

export default function Home() {
  const [deg, setDeg] = useState<number>(window.scrollY);
  useEffect(() => {
    const perDeg = 360 / (window.innerHeight * 2);
    window.addEventListener("scroll", (e: Event) => {
      setDeg(window.scrollY * perDeg);
    });
  }, []);
  return (
    <Container>
      <RotatePanelBox>
        <Header>
          <Cube deg={deg} />
        </Header>
        <ArtWork>
          <DimensionalPlane deg={deg} />
        </ArtWork>
        <AlertBox>
          {deg === 0 ? (
            <Alert>Scroll Down!</Alert>
          ) : deg === 360 ? (
            <Alert>Scroll Up!</Alert>
          ) : null}
        </AlertBox>
      </RotatePanelBox>
    </Container>
  );
}
