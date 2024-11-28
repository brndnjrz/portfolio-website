// Code creates a 3D starfield effect
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  // the ref is attached to the Points component, which represents the stars; letting you directly access/modify the properties like rotating
  const ref = useRef();
  const [sphere] = useState(() =>
     // initializes the sphere state and creates 5000 points distributed randomly with sphere radius 1.2 
    random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  // this hook runs every frame to update the scene and makes starfield rotate slowly over time
  // delta represents the time passed between frames, ensuring smooth and consistent animation
    useFrame((state, delta) => {
    // control the rotation of the starfield around the x and y axes
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    // this groups the stars and applies an initial rotation to the whole group
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref}
        // passes the generated random star positions to the Points component 
        positions={sphere}
        // tells Points to use 3 values (x, y, z) form the sphere array for each point
        stride={3}
        // an optimization to only render stars that are within the camera's view and avoiding rendering stars off screen
        frustumCulled {...props}
        >
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          // ensures that stars get smaller when they are farther away from the camera
          sizeAttenuation={true}
          //ensures that stars always appear visible in the background 
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;