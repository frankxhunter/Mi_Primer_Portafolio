import Particles from "particlesjs"
import "./BackgroundParticles.css"
import { useEffect } from "react";
export function BackgroundParticles() {

    useEffect(() => {
      Particles.init({
        selector: '.background',
        color: ['#ffffff'],
        maxParticles: 50,
        connectParticles: true,
      });
    }, []);

  return <div className="background_contains">
    <canvas className="background"></canvas>

  </div>
}