"use client";

import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useAppStore } from "@/stores/app.store";


export function Moon() {
  const moonRef = useRef<THREE.Mesh>(null!);

useFrame((_, delta) => {
  moonRef.current.rotation.y += delta * 0.08;
});
  const setMoonLoaded = useAppStore(
    (state) => state.setMoonLoaded
  );
  

  const colorMap = useLoader(
    THREE.TextureLoader,
    "/textures/moon/moon_color.jpg"
  );

  const displacementMap = useLoader(
    THREE.TextureLoader,
    "/textures/moon/moon_displacement.png"
  );

  useEffect(() => {
    if (colorMap && displacementMap) {
      setMoonLoaded(true);
    }
  }, [colorMap, displacementMap, setMoonLoaded]);

  colorMap.colorSpace = THREE.SRGBColorSpace;

  colorMap.anisotropy = 16;
  displacementMap.anisotropy = 16;

  return (
<mesh
  ref={moonRef}
  castShadow
  receiveShadow
>
      <sphereGeometry args={[3, 256, 256]} />

      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        displacementScale={0.05}
        bumpMap={displacementMap}
        bumpScale={0.04}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}