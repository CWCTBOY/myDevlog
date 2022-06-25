import { AxisPlane } from "../../styles/home/3dPlane";
import { Plane } from "../../styles/home/3dPlane";

const artWorks = [1, 2, 3, 4, 5, 6, 7, 8];

export default function DimensionalPlane({ deg }: { deg: number }) {
  return (
    <AxisPlane deg={deg}>
      {artWorks.map((item, index) => (
        <Plane>{`artwork ${index + 1}`}</Plane>
      ))}
    </AxisPlane>
  );
}
