"use client";

import { Canvas } from "@react-three/fiber";
import { Moon } from "@/components/moon/Moon";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Forest from "./Forest"; // <-- add

export default function IntroScene() {
  return (
    <div className="fixed inset-0 bg-black">

      <Canvas
        style={{
          width: "100%",
          height: "100%",
        }}
       camera={{
  position: [0, 0, 40],
  fov: 25,
}}
      >
        <Moon />

        <EffectComposer>
          <Bloom
            intensity={0.8}
            luminanceThreshold={0.75}
            luminanceSmoothing={1}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>

      {/* Forest Overlay */}
      <Forest />

    </div>
  );
}