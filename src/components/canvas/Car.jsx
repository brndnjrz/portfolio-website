import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const CarCanvas = ( isMobile ) => {
  const mountRef = useRef(null); // Reference to mount Three.js canvas

  useEffect(() => {
    // ✅ 1️⃣ Setup Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000); // Background color
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Append renderer to div instead of document.body
    mountRef.current.appendChild(renderer.domElement);

    // ✅ 2️⃣ Setup Scene
    const scene = new THREE.Scene();

    // ✅ 3️⃣ Setup Camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(4, 5, 11);

    // ✅ 4️⃣ Setup Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.5;
    controls.target.set(0, 1, 0);
    controls.update();

    // ✅ 5️⃣ Add Ground Plane
    const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x555555, side: THREE.DoubleSide });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // ✅ 6️⃣ Add Spotlight
    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 25, 0);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    // ✅ 7️⃣ Load GLTF Model
    const loader = new GLTFLoader().setPath("./2021_czinger_21c/");
    loader.load(
      "scene.gltf",
      (gltf) => {
        console.log("Model loaded successfully");
        const mesh = gltf.scene;

        // Enable shadows on the model
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        mesh.scale.set(175, 175, 175);
        // mesh.scale.set(1, 1, 1);  // Try 1:1:1 scale first

        mesh.position.set(0, 1, 0);
        scene.add(mesh);
      },
      (xhr) => {
        console.log(`Loading model: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}%`);
      },
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    // ✅ 8️⃣ Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ✅ 9️⃣ Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // ✅ 🔟 Cleanup on Component Unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-[-1]" />;
};

export default CarCanvas;




// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// let scene, camera, renderer, controls;

// // 1️⃣ Initialize Scene
// function init() {
//   // Create Renderer
//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setClearColor(0x000000); // Set background color to black
//   renderer.shadowMap.enabled = true;
//   renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//   document.body.appendChild(renderer.domElement);

//   // Create Scene
//   scene = new THREE.Scene();

//   // Set Camera
//   camera = new THREE.PerspectiveCamera(
//     45,
//     window.innerWidth / window.innerHeight,
//     1,
//     1000
//   );
//   camera.position.set(4, 5, 11); // Positioning the camera
//   scene.add(camera);

//   // Set Controls
//   controls = new OrbitControls(camera, renderer.domElement);
//   controls.enableDamping = true;
//   controls.enablePan = false;
//   controls.minDistance = 5;
//   controls.maxDistance = 20;
//   controls.minPolarAngle = 0.5;
//   controls.maxPolarAngle = 1.5;
//   controls.update();

//   // Add Ground Plane
//   const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
//   groundGeometry.rotateX(-Math.PI / 2);
//   const groundMaterial = new THREE.MeshStandardMaterial({
//     color: 0x555555,
//     side: THREE.DoubleSide,
//   });
//   const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
//   groundMesh.receiveShadow = true;
//   scene.add(groundMesh);

//   // Add Lights
//   const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
//   spotLight.position.set(0, 25, 0);
//   spotLight.castShadow = true;
//   spotLight.shadow.bias = -0.0001;
//   scene.add(spotLight);

//   // Load Model
//   loadModel();

//   // Handle Window Resize
//   window.addEventListener("resize", onWindowResize);

//   // Start Animation Loop
//   animate();
// }

// // 2️⃣ Load 3D Model
// function loadModel() {
//   const loader = new GLTFLoader().setPath("./2021_czinger_21c/");
//   loader.load(
//     "scene.gltf",
//     (gltf) => {
//       const model = gltf.scene;
//       model.traverse((child) => {
//         if (child.isMesh) {
//           child.castShadow = true;
//           child.receiveShadow = true;
//         }
//       });

//       model.scale.set(175, 175, 175);
//       model.position.set(0, 1, 0);
//       scene.add(model);
//     },
//     (xhr) => {
//       console.log(`Loading Model: ${xhr.loaded / xhr.total * 100}%`);
//     },
//     (error) => {
//       console.error("Error loading model:", error);
//     }
//   );
// }

// // 3️⃣ Resize Function
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// // 4️⃣ Animation Loop
// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// // 5️⃣ Run Initialization
// init();
