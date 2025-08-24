import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import { useScroll, motion } from "framer-motion";
import ShinyText from "./ShinyTexts/ShinyText";
import "./PageTwo.css";

// =========================
// Rotating wrapper for models
// =========================
function RotatingModel({ children, speed = 0.01 }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed; // Rotate around Y-axis
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

// =========================
// Moving Canvas wrapper
// =========================
function MovingCanvas({ children, direction = "left", speedFactor = 900 }) {
  const { scrollYProgress } = useScroll();
  const [xPosition, setXPosition] = useState(direction === "left" ? -200 : 200);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const moveDistance = latest * speedFactor;
      setXPosition(direction === "left" ? -200 + moveDistance : 200 - moveDistance);
    });

    return () => unsubscribe();
  }, [scrollYProgress, direction, speedFactor]);

  return (
    <motion.div
      animate={{ x: xPosition }}
      transition={{ duration: 0.1, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}

// =========================
// Generic model loader
// =========================
function Model({ url, scale = 1, position = [0, 0, 0] }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} position={position} />;
}

// =========================
// Preload Models
// =========================
const MODEL_URLS = {
  om: "https://res.cloudinary.com/dst3yuj1w/image/upload/v1756030176/om_symbol_w2votg.glb",
  khanda: "https://res.cloudinary.com/dst3yuj1w/image/upload/v1756030169/khanda_xis84u.glb",
  quran: "https://res.cloudinary.com/dst3yuj1w/image/upload/v1756030170/quran_bzjhfc.glb",
  cross: "https://res.cloudinary.com/dst3yuj1w/image/upload/v1756030170/cross_mwancw.glb",
};

useGLTF.preload(MODEL_URLS.om);
useGLTF.preload(MODEL_URLS.khanda);
useGLTF.preload(MODEL_URLS.quran);
useGLTF.preload(MODEL_URLS.cross);

export default function PageTwo() {
  return (
    <div
      data-scroll
      data-scroll-translate="0 -100"
      data-scroll-speed="0.9"
      className="Page2 "
    >
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="./Assets/background_black.mp4" type="video/mp4" />
      </video>

      <div className="CanvasContainer">
        {/* Om Symbol (Moves Left to Right) */}
        <MovingCanvas direction="left">
          <div className="om hidden md:block">
            <Canvas camera={{ position: [0, 0, 18], fov: 75 }}>
              <ambientLight intensity={1} />
              <directionalLight position={[0, 5, 10]} intensity={7.5} />
              <OrbitControls enableZoom={false} />
              <Suspense fallback={null}>
                <RotatingModel>
                  <Model url={MODEL_URLS.om} scale={1.5} />
                </RotatingModel>
              </Suspense>
            </Canvas>
          </div>
        </MovingCanvas>

<ShinyText
  text="We follow an ancient path rooted in Dharma (righteousness), Karma (actions), and Moksha (liberation). Our faith values devotion, respect for all beings, and harmony with nature. Festivals like Diwali, Holi, and Navratri bring joy and community, guided by sacred texts like the Vedas, Upanishads, and Bhagavad Gita."
  disabled={false}
  speed={3}
  className="custom-class  transform -translate-y-[50px] sm:pt-[180px]"
/>


        {/* Khanda Symbol (Moves Right to Left) */}
<MovingCanvas direction="right">
  <div className="khanda hidden md:block">
    <Canvas camera={{ position: [0, 0, 1.5], fov: 75 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, 10]} intensity={7.5} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <RotatingModel>
          <Model
            url={MODEL_URLS.khanda}
            scale={3.5}
            position={[0, -0.4, 0]}
          />
        </RotatingModel>
      </Suspense>
    </Canvas>
  </div>
</MovingCanvas>
<ShinyText
  text="We follow the path of Guru Nanak and the ten Sikh Gurus, embracing selfless service (Seva), devotion (Naam Japna), and honest living (Kirat Karni). Guru Granth Sahib guides us, Gurdwaras welcome all, and festivals like Gurpurab and Baisakhi celebrate faith, courage, and unity."
  disabled={false}
  speed={3}
  className="custom-class transform -translate-y-[130px] sm:pt-[380px]"
/>


{/* Kuran Symbol (Moves Left to Right) */}
<MovingCanvas direction="left">
  <div className="quran hidden md:block tranform -translate-y-1/2">
    <Canvas camera={{ position: [0, 1, 0], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, 10]} intensity={7.5} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <RotatingModel>
          <Model url={MODEL_URLS.quran} scale={3} />
        </RotatingModel>
      </Suspense>
    </Canvas>
  </div>
</MovingCanvas>
<ShinyText
  text="We follow the teachings of the Holy Quran and Prophet Muhammad (peace be upon him). Our faith rests on the five pillars—Shahada, Salah, Zakat, Sawm, and Hajj. Ramadan, Eid-ul-Fitr, and Eid-ul-Adha bring reflection, gratitude, and celebration, while brotherhood, humility, and service guide our lives."
  disabled={false}
  speed={3}
  className="custom-class transform -translate-y-[190px] sm:pt-[380px]"
/>


{/* Cross Symbol (Moves Right to Left) */}
<MovingCanvas direction="right">
  <div className="cross hidden md:block tranform -translate-y-[200px]">
    <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, 10]} intensity={7.5} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <RotatingModel>
          <Model url={MODEL_URLS.cross} scale={2.5} />
        </RotatingModel>
      </Suspense>
    </Canvas>
  </div>
</MovingCanvas>
<ShinyText
  text="We follow the path of love, compassion, and forgiveness as taught by Jesus Christ. The Bible guides us to serve, be kind, and spread peace. Christmas and Easter remind us of giving, sacrifice, and hope, while we support communities through education, healthcare, and charity."
  disabled={false}
  speed={3}
  className="custom-class transform -translate-y-[260px] sm:pt-[380px]"
/>


      </div>
    </div>
  );
}
