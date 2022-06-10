import { Link } from "react-router-dom";
import { CubeBox, CubePlane } from "../../styles/Home/3dCube"

const planeSize = [1, 2, 3, 4, 5, 6];

export default function Cube({ deg }: { deg: number }) {
  return (
    <Link to='/cwctboy_devlog'>
      <CubeBox deg={deg}>
        {planeSize.map(item => <CubePlane>Blog</CubePlane>)}
      </CubeBox>
    </Link>
  )
}