import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

const stages = [
  {
    id: "robot",
    label: "ROBOTICS / 01",
    title: "ROBOT BUILD",
    scene: "YOUR_ROBOT_SPLINE_URL",
  },
  {
    id: "rocket",
    label: "FLIGHT TEST / 02",
    title: "ORBIT / TEST",
    scene: "YOUR_ROCKET_SPLINE_URL",
  },
  {
    id: "research",
    label: "RESEARCH / 03",
    title: "RESEARCH MODEL",
    scene: "YOUR_RESEARCH_SPLINE_URL",
  },
];

export default function Hero3D() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = window.innerHeight;

      if (scroll < height * 0.45) {
        setStage(0);
      } else if (scroll < height * 0.9) {
        setStage(1);
      } else {
        setStage(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = stages[stage];

  return (
    <div className="hero-3d-stage">

      {/* TOP LABEL */}
      <div className="hero-3d-top">
        <span>{current.label}</span>
        <span>ROBOTICS · ORBIT · INQUIRY</span>
      </div>

      {/* 3D OBJECT */}
      <div className="hero-3d-object">
        <Spline scene={current.scene} />
      </div>

      {/* CENTER LABEL */}
      <div className="hero-3d-label">
        {current.title}
      </div>

      {/* STAGE INDICATOR */}
      <div className="hero-3d-indicator">
        <span className={stage === 0 ? "active" : ""}>AI MODELS</span>
        <span className={stage === 1 ? "active" : ""}>SECURITY</span>
        <span className={stage === 2 ? "active" : ""}>DATA SYSTEMS</span>
      </div>

      {/* STAGE DOTS */}
      <div className="hero-3d-dots">
        {stages.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              setStage(index);
              window.scrollTo({
                top: index * window.innerHeight * 0.45,
                behavior: "smooth",
              });
            }}
            className={stage === index ? "active" : ""}
          />
        ))}
      </div>

    </div>
  );

