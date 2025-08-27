const text = "Front-end Web Developer";
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 200);
      }
    }
    window.onload = typeWriter;
    document.getElementById('year').textContent = new Date().getFullYear();
      AOS.init({
    duration: 800, // animation ki speed
    
    once: true   ,   // sirf 1 dafa animation hoga
     
  });

  ScrollReveal().reveal('.card, .service, .portfolio-item, .socials a', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  interval: 200
});
document.getElementById("hamburger").addEventListener("click",()=>{
  document.getElementById("menu").classList.toggle("show");
});
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
  document.getElementById("year").textContent = new Date().getFullYear();