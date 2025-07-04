import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import Astronaut from "../components/Astronaut";
import { useMediaQuery } from "react-responsive";
import { Float, OrbitControls } from "@react-three/drei";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 855 });
  return (
    <section
      className="flex items-start justify-center  
    md:items-start md:justify-start min-h-screen
    overflow-hidden c-space"
    id="home"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
          </Suspense>
          <OrbitControls />
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
export default Hero;
