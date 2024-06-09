import Particles from "particlesjs"
import "./BackgroundParticles.css"
import { useEffect } from "react";
export function BackgroundParticles() {

    useEffect(() => {
      Particles.init({
        selector: '.background',
        color: ['#ffffff'],
        maxParticles: 30,
        speed: 0.2,
        connectParticles: true,
      });
    }, []);

  return <canvas className="background"></canvas>

}