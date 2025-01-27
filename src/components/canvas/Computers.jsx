// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";  // empty canvas 
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";    // lets you draw on canvas

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   // imports 3d model from public folder; will have to go back and change it 
//   // const computer = useGLTF('./desktop_pc/scene.gltfm');
//   const computer = useGLTF('./2021_czinger_21c/scene.gltf');

//   return (
//     <mesh>
//       {/* create a light on the canvas */}
//       <hemisphereLight intensity={4.5} groundColor='black' />
//       <pointLight intensity={10} />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <primitive
//         // controls the position of the computer 
//         object={computer.scene}
//         // checks if is mobile 
//         // scale={isMobile ? 0.7 : 0.75}
//         scale={isMobile ? 250.0 : 255.0}
//         position={isMobile ? [2, -2.50, -2] : [2, -2.75, -1.5]}
//         rotation={[-0.01, -0.2, -0.01]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   // Checks if its on a mobile device
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       // camera={{ position: [20, 3, 5], fov: 25 }}
//       camera={{ position: [-20, 15, 10], fov: 18 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       {/* shows a loader element  */}
//       <Suspense fallback={<CanvasLoader />}>
//         {/* Limits how you can rotate the element */}
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;