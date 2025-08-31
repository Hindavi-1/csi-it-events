"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import "../styles/Background.css";

export default function Background() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#0d1117" }, // fallback background
        },
        fpsLimit: 60,
        particles: {
          number: { value: 70, density: { enable: true, area: 800 } },
          color: { value: ["#00ADB5", "#9b59b6"] },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 4 } },
          links: {
            enable: true,
            distance: 150,
            color: "#00ADB5",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.6 } },
            push: { quantity: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}