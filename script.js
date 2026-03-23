/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow")

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"

})



/* PROJECT SLIDER */

const slider = document.querySelector(".projects-slider")
const next = document.getElementById("next")
const prev = document.getElementById("prev")

next.onclick = () =>{
slider.scrollBy({
left:320,
behavior:"smooth"
})
}

prev.onclick = () =>{
slider.scrollBy({
left:-320,
behavior:"smooth"
})
}

document.getElementById("see-projects").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// Select all project buttons
const projectButtons = document.querySelectorAll('.project-btn');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const videoUrl = button.getAttribute('data-video');
    window.open(videoUrl, '_blank'); // Opens the YouTube link in a new tab
  });
});