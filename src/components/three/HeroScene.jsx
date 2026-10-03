import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

function Shapes() {
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.4, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.25, 0.05)
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
        <mesh position={[2.2, 0.6, 0]}>
          <icosahedronGeometry args={[1.1, 16]} />
          <MeshDistortMaterial color="#fe5f00" roughness={0.15} metalness={0.3} distort={0.35} speed={2} />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-2.4, -0.8, -1]} rotation={[0.6, 0.4, 0]}>
          <torusGeometry args={[0.8, 0.28, 32, 96]} />
          <meshStandardMaterial color="#128807" roughness={0.2} metalness={0.4} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.8}>
        <RoundedBox args={[1, 1, 1]} radius={0.18} smoothness={6} position={[0.4, -1.7, -0.5]} rotation={[0.4, 0.6, 0]}>
          <meshStandardMaterial color="#00007f" roughness={0.25} metalness={0.5} />
        </RoundedBox>
      </Float>

      <Float speed={2.4} floatIntensity={2.5}>
        <mesh position={[-1.2, 1.6, -1.5]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#ffa43a" roughness={0.1} metalness={0.6} />
        </mesh>
      </Float>

      <Float speed={2.2} floatIntensity={2}>
        <mesh position={[3.4, -1.6, -2]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color="#1fa811" roughness={0.1} metalness={0.6} />
        </mesh>
      </Float>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[-5, -3, 2]} intensity={30} color="#fe5f00" />
      <pointLight position={[4, 3, -2]} intensity={20} color="#128807" />
      <Shapes />
    </Canvas>
  )
}