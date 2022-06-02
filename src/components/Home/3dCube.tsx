import { CubeBox, CubePlane } from "../../styles/Home/3dCube"

const planeSize = [1, 2, 3, 4, 5, 6];

export default function Cube({ deg }: { deg: number }) {
  return (
    <CubeBox deg={deg}>
      {planeSize.map(item => <CubePlane />)}
    </CubeBox>
  )
}