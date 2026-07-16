"use client";

import { Canvas } from "@react-three/fiber";
import { Moon } from "./Moon";

export default function MoonScene() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas
    camera={{
        position:[0,0,20],
        fov:25
    }}
    gl={{
        antialias:true,
        alpha:true
    }}
>
       <ambientLight intensity={0.03} />

      <directionalLight
    position={[8, 4, 6]}
    intensity={4}
    castShadow
/>

       <Moon position={[2,0,0]} />
      </Canvas>
    </div>
  );
}