"use client";

import { Canvas } from "@react-three/fiber";
import { Moon } from "./Moon";

export default function MoonScene() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas
   camera={{
    position:[0,0,60],
    fov:10
}}
    gl={{
        antialias:true,
        alpha:true
    }}
>
      <ambientLight intensity={0.35} />

<directionalLight
  position={[6, 5, 8]}
  intensity={3}
/>

<directionalLight
  position={[-6, 3, 2]}
  intensity={0.5}
/>
<Moon />
      </Canvas>
    </div>
  );
}