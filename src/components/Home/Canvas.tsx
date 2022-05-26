import { useRef, useEffect } from "react";
import { Note } from "../../styles/Home/canvas";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    const ctx = canvas?.getContext('2d');
    if (ctx) {

    }
  }, [])
  return (
    <Note ref={canvasRef} />
  )
}