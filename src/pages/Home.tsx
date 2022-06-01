import { Container } from "../styles/Home/home";
import { RotatePanelBox } from "../styles/Home/home";
import DimensionalPlane from "../components/Home/3dPlane";

export default function Home() {
  return (
    <Container>
      <RotatePanelBox>
        <DimensionalPlane />
      </RotatePanelBox>
      <div style={{
        width: '100vw',
        height: '100vh'
      }}></div>{/*temporal*/}
    </Container>
  )
}