import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../assets/3d/spaceman.glb";
import CanvasLoader from "./Loader";

const Spaceman = ({ scale, position }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);
  const [hovered, setHovered] = useState(false);
  const [targetRotation, setTargetRotation] = useState([0, 2.2, 0]);
  const [currentRotation, setCurrentRotation] = useState([0, 2.2, 0]);
  const [targetPosition, setTargetPosition] = useState(position);
  const [currentPosition, setCurrentPosition] = useState(position);

  useEffect(() => {
    actions["Idle"].play();
  }, [actions]);

  useEffect(() => {
    const lerp = (start, end, alpha) => start + (end - start) * alpha;

    const smoothMove = () => {
      setCurrentRotation((prev) => [
        lerp(prev[0], targetRotation[0], 0.05),
        lerp(prev[1], targetRotation[1], 0.05),
        lerp(prev[2], targetRotation[2], 0.05),
      ]);
      setCurrentPosition((prev) => [
        lerp(prev[0], targetPosition[0], 0.05),
        lerp(prev[1], targetPosition[1], 0.05),
        lerp(prev[2], targetPosition[2], 0.05),
      ]);
    };

    const interval = setInterval(smoothMove, 16); // Runs every ~16ms (~60 FPS)
    return () => clearInterval(interval);
  }, [targetRotation, targetPosition]);

  const handlePointerMove = (e) => {
    if (!hovered) return;

    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;

    setTargetRotation([y * 0.5, 2.2 + x * 0.5, 0]);
    setTargetPosition([position[0] + x * 0.1, position[1] - y * 0.1, position[2]]);
  };

  return (
    <mesh
      ref={spacemanRef}
      position={currentPosition}
      scale={scale}
      rotation={currentRotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMove={handlePointerMove}
    >
      <primitive object={scene} />
    </mesh>
  );
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [scale, setScale] = useState([2, 2, 2]);
  const [position, setPosition] = useState([0.2, -0.7, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]);
        setPosition([0.2, -0.1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.33, 1.33, 1.33]);
        setPosition([0.2, -0.3, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0.2, -0.4, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([1.66, 1.66, 1.66]);
        setPosition([0.2, -0.5, 0]);
      } else {
        setScale([2, 2, 2]);
        setPosition([0.2, -0.7, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas className={`w-full h-screen bg-transparent z-10`} camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Spaceman scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
