import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const themeColors = {
  light: { accent: "#28745d", secondary: "#b35e43", muted: "#637169" },
  dark: { accent: "#86c5a0", secondary: "#efa77d", muted: "#aab9ae" },
  cyber: { accent: "#67ddc1", secondary: "#f3b968", muted: "#a9beb4" },
};

function captureMaterials(group) {
  const seen = new Set();
  const states = [];

  group.traverse((object) => {
    const materials = Array.isArray(object.material)
      ? object.material
      : object.material ? [object.material] : [];
    materials.forEach((material) => {
      if (seen.has(material)) return;
      seen.add(material);
      states.push({ material, opacity: material.opacity });
      material.transparent = true;
      material.depthWrite = false;
    });
  });

  return states;
}

function setGroupOpacity(states, opacity) {
  states.forEach(({ material, opacity: baseOpacity }) => {
    material.opacity = baseOpacity * opacity;
  });
}

export default function ResearchScene({ mode = "light", onReady, playing = false }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const activeStageRef = useRef(-1);
  const playingRef = useRef(playing);
  const sequenceStartedAtRef = useRef(null);
  playingRef.current = playing;
  const [stage, setStage] = useState({
    label: "ROBOTICS / 01",
    title: "ROBOT ASSEMBLY",
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;

    const colors = themeColors[mode] || themeColors.light;
    const accent = new THREE.Color(colors.accent);
    const secondary = new THREE.Color(colors.secondary);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40);
    camera.position.set(0, 0, 6.15);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      onReady?.();
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    let loadedImages = 0;
    let renderedFirstFrame = false;
    let readyNotified = false;
    const notifyReady = () => {
      if (!renderedFirstFrame || loadedImages < 2 || readyNotified) return;
      readyNotified = true;
      onReady?.();
    };
    const markImageLoaded = () => {
      loadedImages += 1;
      notifyReady();
    };
    const textureLoader = new THREE.TextureLoader();
    const robotTexture = textureLoader.load(
      "/research-robot.jpg",
      markImageLoaded,
      undefined,
      markImageLoaded
    );
    const rocketTexture = textureLoader.load(
      "/research-rocket.jpg",
      markImageLoaded,
      undefined,
      markImageLoaded
    );
    robotTexture.colorSpace = THREE.SRGBColorSpace;
    rocketTexture.colorSpace = THREE.SRGBColorSpace;

    scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const keyLight = new THREE.PointLight(accent, 2.6, 16);
    keyLight.position.set(2.8, 3.5, 4.5);
    scene.add(keyLight);

    const world = new THREE.Group();
    scene.add(world);

    const starPositions = [];
    for (let index = 0; index < 180; index += 1) {
      const seed = (value) => {
        const random = Math.sin(value * 127.1 + 311.7) * 43758.5453;
        return random - Math.floor(random);
      };
      starPositions.push(
        (seed(index) - 0.5) * 11,
        (seed(index + 1) - 0.5) * 7,
        -2 - seed(index + 2) * 5
      );
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPositions, 3)
    );
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        color: colors.muted,
        size: 0.025,
        transparent: true,
        opacity: 0.72,
        sizeAttenuation: true,
      })
    );
    world.add(stars);

    const network = new THREE.Group();
    network.scale.setScalar(0.84);
    world.add(network);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.72, 2),
      new THREE.MeshStandardMaterial({
        color: accent,
        emissive: accent,
        emissiveIntensity: 0.2,
        roughness: 0.28,
        metalness: 0.58,
        flatShading: true,
      })
    );
    network.add(core);

    const coreWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.94, 1),
      new THREE.MeshBasicMaterial({
        color: accent,
        wireframe: true,
        transparent: true,
        opacity: 0.64,
      })
    );
    network.add(coreWire);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: secondary,
      transparent: true,
      opacity: 0.55,
    });
    const rings = [
      { radius: 1.46, rotation: [0.92, 0.2, 0.42] },
      { radius: 1.78, rotation: [1.26, 0.72, -0.34] },
      { radius: 2.08, rotation: [0.26, -0.58, 0.14] },
    ];

    rings.forEach(({ radius, rotation }) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.007, 6, 160),
        ringMaterial
      );
      ring.rotation.set(...rotation);
      network.add(ring);
    });

    const nodeGeometry = new THREE.IcosahedronGeometry(0.045, 1);
    const accentMaterial = new THREE.MeshBasicMaterial({ color: accent });
    const secondaryMaterial = new THREE.MeshBasicMaterial({ color: secondary });
    const nodes = [];
    const count = 32;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let index = 0; index < count; index += 1) {
      const y = 1 - (index / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = goldenAngle * index;
      const position = new THREE.Vector3(
        Math.cos(angle) * radius * 2,
        y * 2,
        Math.sin(angle) * radius * 2
      );
      const mesh = new THREE.Mesh(
        nodeGeometry,
        index % 7 === 0 ? secondaryMaterial : accentMaterial
      );
      mesh.position.copy(position);
      mesh.scale.setScalar(index % 7 === 0 ? 1.65 : 1);
      network.add(mesh);
      nodes.push(position);
    }

    const edgePositions = [];
    nodes.forEach((position, index) => {
      if (index % 2 === 0) edgePositions.push(0, 0, 0, ...position.toArray());
      let nearby = 0;
      for (let other = index + 1; other < nodes.length && nearby < 3; other += 1) {
        if (position.distanceTo(nodes[other]) < 1.16) {
          edgePositions.push(...position.toArray(), ...nodes[other].toArray());
          nearby += 1;
        }
      }
    });

    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(edgePositions, 3)
    );
    const edges = new THREE.LineSegments(
      edgeGeometry,
      new THREE.LineBasicMaterial({
        color: accent,
        transparent: true,
        opacity: 0.25,
      })
    );
    network.add(edges);
    const networkMaterials = captureMaterials(network);
    network.visible = false;
    setGroupOpacity(networkMaterials, 0);

    const createPhotoPlane = (texture) => {
      const group = new THREE.Group();
      const width = 3.8;
      const height = 2.52;
      const frame = new THREE.Mesh(
        new THREE.PlaneGeometry(width + 0.14, height + 0.14),
        new THREE.MeshBasicMaterial({
          color: colors.accent,
          transparent: true,
          opacity: 0.72,
          side: THREE.DoubleSide,
        })
      );
      frame.position.z = -0.035;
      group.add(frame);

      const photograph = new THREE.Mesh(
        new THREE.PlaneGeometry(width, height),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide,
          depthWrite: false,
          toneMapped: false,
        })
      );
      group.add(photograph);

      const outline = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.PlaneGeometry(width, height)),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 })
      );
      outline.position.z = 0.015;
      group.add(outline);
      return group;
    };

    const robotGroup = createPhotoPlane(robotTexture);
    robotGroup.position.set(0, -0.02, 0.15);
    world.add(robotGroup);
    const robotMaterials = captureMaterials(robotGroup);
    robotGroup.visible = false;
    setGroupOpacity(robotMaterials, 0);

    const rocketGroup = createPhotoPlane(rocketTexture);
    rocketGroup.scale.setScalar(0.94);
    world.add(rocketGroup);
    const rocketMaterials = captureMaterials(rocketGroup);
    rocketGroup.visible = false;
    setGroupOpacity(rocketMaterials, 0);

    const pointer = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stageSequence = [
      { label: "ROBOTICS / 01", title: "ROBOT BUILD" },
      { label: "FLIGHT TEST / 02", title: "ORBIT / TEST" },
      { label: "RESEARCH / 03", title: "RESEARCH MODEL" },
    ];
    let frame = 0;
    let previousTime = 0;
    let visible = true;

    if (reducedMotion) {
      activeStageRef.current = 2;
      setStage(stageSequence[2]);
      network.visible = true;
      setGroupOpacity(networkMaterials, 1);
    } else {
      robotGroup.visible = true;
    }

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.position.z = width < 520 ? 7.6 : 6.15;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.render(scene, camera);
      renderedFirstFrame = true;
      notifyReady();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const handlePointerMove = (event) => {
      const bounds = container.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
      targetRotation.set(pointer.y * 0.11, pointer.x * 0.18);
    };

    const resetPointer = () => targetRotation.set(0, 0);
    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", resetPointer);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    visibilityObserver.observe(container);

    const clamp = (value) => Math.max(0, Math.min(1, value));
    const smoothstep = (start, end, value) => {
      const amount = clamp((value - start) / (end - start));
      return amount * amount * (3 - 2 * amount);
    };

    const animate = (time) => {
      frame = window.requestAnimationFrame(animate);
      if (!visible) return;

      const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.04) : 0;
      previousTime = time;
      if (playingRef.current && sequenceStartedAtRef.current === null) {
        sequenceStartedAtRef.current = time;
      }
      const elapsed = reducedMotion
        ? 11.4
        : sequenceStartedAtRef.current === null
          ? 0
          : (time - sequenceStartedAtRef.current) / 1000;
      const stageIndex = elapsed < 4.2 ? 0 : elapsed < 10.6 ? 1 : 2;

      if (stageIndex !== activeStageRef.current) {
        activeStageRef.current = stageIndex;
        setStage(stageSequence[stageIndex]);
      }

      const robotOpacity =
        smoothstep(0, 0.45, elapsed) * (1 - smoothstep(3.7, 4.5, elapsed));
      robotGroup.visible = robotOpacity > 0.01;
      robotGroup.scale.setScalar(0.92 + robotOpacity * 0.08);
      setGroupOpacity(robotMaterials, robotOpacity);

      const rocketProgress = smoothstep(4, 4.75, elapsed);
      const rocketFade = 1 - smoothstep(9.9, 10.7, elapsed);
      const rocketOpacity = rocketProgress * rocketFade;
      rocketGroup.visible = rocketOpacity > 0.01;
      setGroupOpacity(rocketMaterials, rocketOpacity);

      const flight = smoothstep(4.5, 9.9, elapsed);
      rocketGroup.position.set(
        -0.48 + flight * 0.96,
        -0.42 + flight * 0.16 + Math.sin(flight * Math.PI) * 0.7,
        0.12 + Math.sin(flight * Math.PI) * 0.28
      );
      rocketGroup.rotation.z = -0.1 + flight * 0.2;
      rocketGroup.rotation.y = Math.sin(flight * Math.PI * 2) * 0.09;

      const networkOpacity = smoothstep(10.2, 11.3, elapsed);
      network.visible = networkOpacity > 0.01;
      setGroupOpacity(networkMaterials, networkOpacity);

      if (!reducedMotion) {
        world.rotation.x += (targetRotation.x - world.rotation.x) * 0.035;
        world.rotation.y += (targetRotation.y - world.rotation.y) * 0.035;
        network.rotation.y += delta * 0.075;
        const pulse = 1 + Math.sin(time * 0.0012) * 0.018;
        core.scale.setScalar(pulse);
        robotGroup.rotation.y = Math.sin(time * 0.0008) * 0.045;
        stars.rotation.y += delta * (stageIndex === 1 ? 0.055 : 0.012);
      }

      renderer.render(scene, camera);
    };

    resize();
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", resetPointer);
      scene.traverse((object) => {
        if (!object.isMesh && !object.isLineSegments && !object.isPoints) return;
        object.geometry?.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material?.dispose();
        }
      });
      renderer.dispose();
    };
  }, [mode, onReady]);

  return (
    <div
      ref={containerRef}
      className="researchScene"
      role="img"
      aria-label="Animated 3D sequence showing robot assembly, a rocket in flight, and a final research network"
    >
      <canvas ref={canvasRef} className="researchSceneCanvas" aria-hidden="true" />
      <div className="researchSceneHeading" aria-hidden="true">
        <span>{stage.label}</span>
        <span>ROBOTICS · ORBIT · INQUIRY</span>
      </div>
      <div className="researchSceneLegend" aria-hidden="true">
        <span><i className="legendModel" /> AI MODELS</span>
        <span><i className="legendSecurity" /> SECURITY</span>
        <span><i className="legendData" /> DATA SYSTEMS</span>
      </div>
      <div className="researchSceneCoreLabel" aria-hidden="true">{stage.title}</div>
    </div>
  );
}
