import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Box(props) {
  const meshRef = useRef();

  // const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) =>
    active
      ? (meshRef.current.rotation.x += delta)
      : (meshRef.current.rotation.z += delta)
  );

  const texture = useLoader(TextureLoader, "images/dramatic_pikachu.jpg");
  // const textureLoader = new TextureLoader();
  // const texture = textureLoader.load("../public/dramatic_pikachu.jpg");

  return (
    <mesh
      {...props}
      ref={meshRef}
      // scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        map={texture}
        // color={hovered ? "red" : "lime"}
      />
    </mesh>
  );
}

function ThreeScene() {
  return (
    <Canvas style={{ width: "90%", height: "90%" }}>
      <ambientLight intensity={Math.PI / 5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[3, 1, 0]} />
      <Box position={[-3.5, 0, 0]} />
      <Box position={[0, -3, -3]} />
    </Canvas>
  );
}

export default ThreeScene;
