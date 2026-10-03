import React, { useMemo, useRef, useEffect } from 'react'
import * as THREE from 'three'
import {
  createCommercialProductCurve,
  createSystemsCurve,
  createClinicalSidingCurve,
  BIFURCATION_2020_NODE,
  TNNUA_TURNOUT_NODE,
} from './trackMath'

interface RailwayTrackProps {
  productCurve?: THREE.CatmullRomCurve3
  systemsCurve?: THREE.CatmullRomCurve3
  clinicalSidingCurve?: THREE.CatmullRomCurve3
  curve?: THREE.CatmullRomCurve3
  bypassCurve?: THREE.CatmullRomCurve3
}

interface ConduitGeometryData {
  bedGeometry: THREE.BufferGeometry
  leftRailGeometry: THREE.BufferGeometry
  rightRailGeometry: THREE.BufferGeometry
  luminescentCoreGeometry: THREE.BufferGeometry
}

function buildConduitGeometries(
  curve: THREE.CatmullRomCurve3,
  samples: number = 100
): ConduitGeometryData {
  const leftPoints: THREE.Vector3[] = []
  const rightPoints: THREE.Vector3[] = []
  const centerPoints: THREE.Vector3[] = []
  const up = new THREE.Vector3(0, 1, 0)
  const halfGauge = 0.065

  const bedPositions: number[] = []
  const bedIndices: number[] = []
  const halfWidthBottom = 0.18
  const halfWidthTop = 0.12
  const heightTop = 0.005
  const heightBottom = 0.001
  const railHeight = 0.02

  for (let i = 0; i <= samples; i++) {
    const t = i / samples
    const point = curve.getPointAt(t)
    const tangent = curve.getTangentAt(t).normalize()
    const normal = new THREE.Vector3().crossVectors(tangent, up).normalize()

    leftPoints.push(
      new THREE.Vector3(
        point.x - normal.x * halfGauge,
        railHeight,
        point.z - normal.z * halfGauge
      )
    )
    rightPoints.push(
      new THREE.Vector3(
        point.x + normal.x * halfGauge,
        railHeight,
        point.z + normal.z * halfGauge
      )
    )
    centerPoints.push(new THREE.Vector3(point.x, 0.012, point.z))

    bedPositions.push(
      point.x - normal.x * halfWidthBottom,
      heightBottom,
      point.z - normal.z * halfWidthBottom
    )
    bedPositions.push(
      point.x - normal.x * halfWidthTop,
      heightTop,
      point.z - normal.z * halfWidthTop
    )
    bedPositions.push(
      point.x + normal.x * halfWidthTop,
      heightTop,
      point.z + normal.z * halfWidthTop
    )
    bedPositions.push(
      point.x + normal.x * halfWidthBottom,
      heightBottom,
      point.z + normal.z * halfWidthBottom
    )
  }

  for (let i = 0; i < samples; i++) {
    const row1 = i * 4
    const row2 = (i + 1) * 4

    bedIndices.push(row1 + 0, row1 + 1, row2 + 0)
    bedIndices.push(row1 + 1, row2 + 1, row2 + 0)
    bedIndices.push(row1 + 1, row1 + 2, row2 + 1)
    bedIndices.push(row1 + 2, row2 + 2, row2 + 1)
    bedIndices.push(row1 + 2, row1 + 3, row2 + 2)
    bedIndices.push(row1 + 3, row2 + 3, row2 + 2)
  }

  const bedGeom = new THREE.BufferGeometry()
  bedGeom.setAttribute('position', new THREE.Float32BufferAttribute(bedPositions, 3))
  bedGeom.setIndex(bedIndices)
  bedGeom.computeVertexNormals()

  const leftCurve = new THREE.CatmullRomCurve3(leftPoints)
  const rightCurve = new THREE.CatmullRomCurve3(rightPoints)
  const spineCurve = new THREE.CatmullRomCurve3(centerPoints)

  const leftRail = new THREE.TubeGeometry(
    leftCurve,
    Math.max(30, Math.floor(samples * 0.9)),
    0.0055,
    8,
    false
  )
  const rightRail = new THREE.TubeGeometry(
    rightCurve,
    Math.max(30, Math.floor(samples * 0.9)),
    0.0055,
    8,
    false
  )
  const luminescentCore = new THREE.TubeGeometry(
    spineCurve,
    Math.max(30, Math.floor(samples * 0.9)),
    0.009,
    8,
    false
  )

  return {
    bedGeometry: bedGeom,
    leftRailGeometry: leftRail,
    rightRailGeometry: rightRail,
    luminescentCoreGeometry: luminescentCore,
  }
}

export const RailwayTrack: React.FC<RailwayTrackProps> = ({
  productCurve: externalProductCurve,
  systemsCurve: externalSystemsCurve,
  clinicalSidingCurve: externalSidingCurve,
  curve: legacyCurve,
  bypassCurve: legacyBypassCurve,
}) => {
  const productCurve = useMemo(
    () => externalProductCurve || legacyCurve || createCommercialProductCurve(),
    [externalProductCurve, legacyCurve]
  )
  const systemsCurve = useMemo(
    () => externalSystemsCurve || legacyBypassCurve || createSystemsCurve(),
    [externalSystemsCurve, legacyBypassCurve]
  )
  const sidingCurve = useMemo(
    () => externalSidingCurve || createClinicalSidingCurve(),
    [externalSidingCurve]
  )

  const productData = useMemo(() => buildConduitGeometries(productCurve, 140), [productCurve])
  const systemsData = useMemo(() => buildConduitGeometries(systemsCurve, 90), [systemsCurve])
  const sidingData = useMemo(() => buildConduitGeometries(sidingCurve, 50), [sidingCurve])

  // Cross ties for conduits
  const productRibsRef = useRef<THREE.InstancedMesh>(null)
  const systemsRibsRef = useRef<THREE.InstancedMesh>(null)
  const sidingRibsRef = useRef<THREE.InstancedMesh>(null)

  const productRibCount = 110
  const systemsRibCount = 70
  const sidingRibCount = 28
  const ribGeometry = useMemo(() => new THREE.BoxGeometry(0.2, 0.006, 0.028), [])

  useEffect(() => {
    if (!productRibsRef.current) return
    const dummy = new THREE.Object3D()
    for (let i = 0; i < productRibCount; i++) {
      const t = i / (productRibCount - 1)
      const pt = productCurve.getPointAt(t)
      const tangent = productCurve.getTangentAt(t).normalize()
      const angleY = Math.atan2(tangent.x, tangent.z) + Math.PI / 2
      dummy.position.set(pt.x, 0.011, pt.z)
      dummy.rotation.set(0, angleY, 0)
      dummy.updateMatrix()
      productRibsRef.current.setMatrixAt(i, dummy.matrix)
    }
    productRibsRef.current.instanceMatrix.needsUpdate = true
  }, [productCurve, productRibCount])

  useEffect(() => {
    if (!systemsRibsRef.current) return
    const dummy = new THREE.Object3D()
    for (let i = 0; i < systemsRibCount; i++) {
      const t = i / (systemsRibCount - 1)
      const pt = systemsCurve.getPointAt(t)
      const tangent = systemsCurve.getTangentAt(t).normalize()
      const angleY = Math.atan2(tangent.x, tangent.z) + Math.PI / 2
      dummy.position.set(pt.x, 0.011, pt.z)
      dummy.rotation.set(0, angleY, 0)
      dummy.updateMatrix()
      systemsRibsRef.current.setMatrixAt(i, dummy.matrix)
    }
    systemsRibsRef.current.instanceMatrix.needsUpdate = true
  }, [systemsCurve, systemsRibCount])

  useEffect(() => {
    if (!sidingRibsRef.current) return
    const dummy = new THREE.Object3D()
    for (let i = 0; i < sidingRibCount; i++) {
      const t = i / (sidingRibCount - 1)
      const pt = sidingCurve.getPointAt(t)
      const tangent = sidingCurve.getTangentAt(t).normalize()
      const angleY = Math.atan2(tangent.x, tangent.z) + Math.PI / 2
      dummy.position.set(pt.x, 0.011, pt.z)
      dummy.rotation.set(0, angleY, 0)
      dummy.updateMatrix()
      sidingRibsRef.current.setMatrixAt(i, dummy.matrix)
    }
    sidingRibsRef.current.instanceMatrix.needsUpdate = true
  }, [sidingCurve, sidingRibCount])

  // Forward optical horizon beacons indicating open future progression along product line
  const forwardBeacons = useMemo(() => {
    const points: THREE.Vector3[] = []
    const beaconTs = [0.93, 0.95, 0.97, 0.99]
    beaconTs.forEach((t) => {
      const p = productCurve.getPointAt(t)
      points.push(new THREE.Vector3(p.x, 0.025, p.z))
    })
    return points
  }, [productCurve])

  return (
    <group>
      {/* 1. Commercial Product Line (Warm Amber #e65c00) */}
      <mesh geometry={productData.bedGeometry} receiveShadow>
        <meshStandardMaterial color="#ebe7df" roughness={0.96} metalness={0.0} />
      </mesh>
      <instancedMesh ref={productRibsRef} args={[ribGeometry, undefined, productRibCount]}>
        <meshStandardMaterial color="#222226" roughness={0.7} metalness={0.4} />
      </instancedMesh>
      <mesh geometry={productData.leftRailGeometry} receiveShadow>
        <meshStandardMaterial color="#52525a" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh geometry={productData.rightRailGeometry} receiveShadow>
        <meshStandardMaterial color="#52525a" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh geometry={productData.luminescentCoreGeometry}>
        <meshStandardMaterial
          color="#e65c00"
          emissive="#e65c00"
          emissiveIntensity={2.4}
          roughness={0.2}
        />
      </mesh>

      {/* 2. Applied AI & Systems Line (Technical Cyan #0071e3 / #38bdf8) */}
      <mesh geometry={systemsData.bedGeometry} receiveShadow>
        <meshStandardMaterial color="#ebe7df" roughness={0.96} metalness={0.0} />
      </mesh>
      <instancedMesh ref={systemsRibsRef} args={[ribGeometry, undefined, systemsRibCount]}>
        <meshStandardMaterial color="#222226" roughness={0.7} metalness={0.4} />
      </instancedMesh>
      <mesh geometry={systemsData.leftRailGeometry} receiveShadow>
        <meshStandardMaterial color="#52525a" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh geometry={systemsData.rightRailGeometry} receiveShadow>
        <meshStandardMaterial color="#52525a" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh geometry={systemsData.luminescentCoreGeometry}>
        <meshStandardMaterial
          color="#0071e3"
          emissive="#38bdf8"
          emissiveIntensity={2.4}
          roughness={0.2}
        />
      </mesh>

      {/* 3. Clinical Diagnostic Siding (Emerald #10b981) */}
      <mesh geometry={sidingData.bedGeometry} receiveShadow>
        <meshStandardMaterial color="#ebe7df" roughness={0.96} metalness={0.0} />
      </mesh>
      <instancedMesh ref={sidingRibsRef} args={[ribGeometry, undefined, sidingRibCount]}>
        <meshStandardMaterial color="#222226" roughness={0.7} metalness={0.4} />
      </instancedMesh>
      <mesh geometry={sidingData.leftRailGeometry} receiveShadow>
        <meshStandardMaterial color="#52525a" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh geometry={sidingData.rightRailGeometry} receiveShadow>
        <meshStandardMaterial color="#52525a" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh geometry={sidingData.luminescentCoreGeometry}>
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={2.4}
          roughness={0.2}
        />
      </mesh>

      {/* Interchange Node 1: 2020 Bifurcation Node (x=-3.5, y=0.015, z=-0.5) */}
      <group position={[BIFURCATION_2020_NODE.x, 0.012, BIFURCATION_2020_NODE.z]}>
        <mesh receiveShadow>
          <cylinderGeometry args={[0.22, 0.22, 0.016, 24]} />
          <meshStandardMaterial color="#dedcd4" roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
          <torusGeometry args={[0.18, 0.012, 12, 32]} />
          <meshStandardMaterial
            color="#e65c00"
            emissive="#e65c00"
            emissiveIntensity={2.5}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Interchange Node 2: TNNUA Lateral Turnout Node (x=2.5, y=0.015, z=1.8) */}
      <group position={[TNNUA_TURNOUT_NODE.x, 0.012, TNNUA_TURNOUT_NODE.z]}>
        <mesh receiveShadow>
          <cylinderGeometry args={[0.18, 0.18, 0.016, 24]} />
          <meshStandardMaterial color="#dedcd4" roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
          <torusGeometry args={[0.14, 0.01, 12, 32]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={2.5}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Forward optical horizon beacons indicating open progression beyond MRKE */}
      {forwardBeacons.map((pos, idx) => (
        <mesh key={idx} position={[pos.x, pos.y, pos.z]}>
          <boxGeometry args={[0.025, 0.015, 0.025]} />
          <meshStandardMaterial
            color="#e65c00"
            emissive="#e65c00"
            emissiveIntensity={2.6}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

