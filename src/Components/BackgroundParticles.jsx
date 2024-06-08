import Particles from "particlesjs"
import "./BackgroundParticles.css"

export function BackgroundParticles() {

  window.onload = function () {
    Particles.init({
      selector: '.background',
      color: ['#ffffff'],
      maxParticles: 50,
      connectParticles: true,
    });
  };


  return <div className="background_contains">
    <canvas className="background"></canvas>

  </div>
}