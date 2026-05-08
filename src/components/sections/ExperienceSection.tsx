import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'

function Sphere() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={4}>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial color="#4fd1ff" emissive="#4fd1ff" emissiveIntensity={2} />
      </mesh>
    </Float>
  )
}

export default function ExperienceSection() {
  return (
    <section className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={4} />
        <Sphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  )
}
