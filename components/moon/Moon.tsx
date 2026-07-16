"use client";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useAppStore } from "@/stores/app.store";
import { gsap } from "gsap";

export function Moon() {
  const moonRef = useRef<THREE.Sprite>(null!);

  const setMoonLoaded = useAppStore(
    (state) => state.setMoonLoaded
  );

  const moonTexture = useLoader(
  THREE.TextureLoader,
  "/textures/moon/moon.png"
);
  useEffect(() => {
    moonTexture.colorSpace = THREE.SRGBColorSpace;
    moonTexture.anisotropy = 16;

    setMoonLoaded(true);
  }, [moonTexture, setMoonLoaded]);

 useEffect(() => {
  moonRef.current.position.y = -18;

  gsap.to(moonRef.current.position, {
   // Option 1 (Meri recommendation)
// Option 2
y: -3.6,          // <-- niche stop hoga
    duration: 5,
    ease: "power2.out",
    delay: 0.5,
  });
}, []);

  return (
    
   <sprite
   
  ref={moonRef}
  
scale={[
  (moonTexture.image.width / moonTexture.image.height) * 15.2,
  14.8,
  1,
]}
>
 <spriteMaterial
  map={moonTexture}
  transparent
  toneMapped={false}
  color="#d7dde2"
  opacity={0.93}
/>
    </sprite>
  );
}