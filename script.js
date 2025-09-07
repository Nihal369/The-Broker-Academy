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


window.addEventListener("load", () => {
  document.querySelector(".sky-section").classList.add("show");
  document.querySelector(".house-of").classList.add("show");
  document.querySelector(".launch").classList.add("show");
  document.querySelector(".comet-animation").classList.add("show");
});

