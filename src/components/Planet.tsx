import React, { useRef, type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type ModelProps = JSX.IntrinsicElements["group"]; // allow all <group> props

export function Model(props: ModelProps) {
  const shapeContainer = useRef(null);
  const shereContainer = useRef(null);
  const ringContainer = useRef(null);

  const { nodes, materials } = useGLTF("/models/Planet.glb") as any;

  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(shapeContainer.current.position, {
      y:5,
      duration: 2,
      ease: "power2.out",
    })
    tl.from(ringContainer.current.position, {
      y:5,
      duration: 1,
      ease: "power2.out",
    })
    tl.from(ringContainer.current.rotation, {
      x:0.8,
      y:0,
      z:0,
      duration: 5,
      ease: "power1.inOut",
    })
    tl.from(shereContainer.current.rotation, {
      x:0,
      y:Math.PI,
      z:-Math.PI,
      duration: 5,
      ease: "power1.inOut",
    },"-=25%");
  })
  return (
    <group ref={shapeContainer} {...props} dispose={null}>
      <group ref={shereContainer}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.002"]}
          rotation={[0, 0, 0.741]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2.geometry}
          material={materials["Material.001"]}
          position={[0.647, 1.03, -0.724]}
          rotation={[0, 0, 0.741]}
          scale={0.223}
        />
      </group>

      <mesh
        ref={ringContainer}
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials["Material.001"]}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
    </group>
  );
}

useGLTF.preload("/models/Planet.glb");
