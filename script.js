document.addEventListener("DOMContentLoaded", () => {
  const faces = document.querySelectorAll('.comet-animation .comet');

  let angles = [-45, 135];  
  let speed = -0.3;

  function animate() {
    faces.forEach((comet, i) => {
      angles[i] += speed; 
      comet.style.transform = `rotate(${angles[i]}deg)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
});
