import { AxisPlane } from "../../styles/Home/3dPlane";
import { Plane } from "../../styles/Home/3dPlane";

const panelSize = [1, 2, 3, 4, 5, 6, 7, 8];

export default function DimensionalPlane({ deg }: { deg: number }) {
  return (
    <AxisPlane deg={deg}>
      {panelSize.map((item, index) => <Plane>{`artwork ${index + 1}`}</Plane>)}
    </AxisPlane>
  )
}