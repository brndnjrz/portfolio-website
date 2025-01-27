import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// loads a 3D earth model using useGLTF
const SpaceStation = () => {
  // const earth = useGLTF("./planet/scene.gltf");
  const spaceStation = useGLTF("./space_station_3/scene.gltf");

  // primitive component is special element that allows you to add raw Three.js objects
  return (
    <mesh>
      <ambientLight 
      color={0xa6b1f7}
      intensity={2.35}
      />
      <primitive object={spaceStation.scene} scale={.75} position-y={0} rotation-y={0} />
    </mesh>
      );
};

const SpaceStationCanvas = () => {
  return (
    // Sets up the 3D scene environment
    <Canvas
      // Enables shadow rendering
      shadows
      // only renders where there are changes 
      frameloop='demand'
      // Sets pixex ratio for better rendering on high-resolution screens
      dpr={[1, 2]}
      // prevents canvas from being cleared between frames
      gl={{ preserveDrawingBuffer: true }}
      // configures the camera's field of view 
      camera={{
        // "field of view" sets how wide the camera's view is 
        fov: 45,
        // closest distance from the camera that objects are rendered
        near: 0.1,
        // farthest distance from the camera that objects are still rendered
        far: 200,
        // sets the camera's starting position in 3D space (x, y, z)
        position: [-4, 3, 6],
      }}
    >
      {/* Handles the loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* adds user controls for rotating the camera view */}
        <OrbitControls
          // makes the earth automatically rotate
          autoRotate
          autoRotateSpeed={-1}
          // prevents zooming in or out when set to false
          enableZoom={false}
          // restricts the camera's movement so that it can only rotate horizontally
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SpaceStation />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpaceStationCanvas;