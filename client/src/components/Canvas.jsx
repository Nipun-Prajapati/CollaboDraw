import Toolbar from "./Toolbar";
import { useEffect, useRef } from "react"

const Canvas = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
    })

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full z-10">
        <Toolbar />
      </div>
        <canvas 
           ref={canvasRef}
           className="border border-black h-dvh w-dvw"
        />
    </div>
  )
}

export default Canvas