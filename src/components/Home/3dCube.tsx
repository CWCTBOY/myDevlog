import { useState } from "react";
import { Link } from "react-router-dom";
import { BlogTitle, CubeBox, CubePlane, IdBox, Identifier } from "../../styles/Home/3dCube"

const planeSize = [1, 2, 3, 4, 5, 6];

export default function Cube({ deg }: { deg: number }) {
  const [onoff, setOnoff] = useState(false);
  const onClick = () => {
    setOnoff(prev => !prev);
  };
  return (
    <>
      <CubeBox deg={deg} onClick={onClick}>
        {planeSize.map(item => <CubePlane onoff={onoff} />)}
      </CubeBox>
      <BlogTitle onoff={onoff} >
        <h1>CWCTBOY<br />Devlog</h1>
        <IdBox>
          <Identifier><h2>Admin</h2></Identifier>
          <Identifier><h2>Audience</h2></Identifier>
        </IdBox>
      </BlogTitle>
    </>
  )
}