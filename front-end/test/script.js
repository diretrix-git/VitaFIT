function loadinganimation() {
  gsap.from(".page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
}
loadinganimation();
gsap.from("#page1 #video-container", {
  scale: 0.9,
  opacity: 0,
  delay: 1.3,
  duration: 0.5,
});

  document.querySelector(".page1").addEventListener("mouseenter",function(){

  })

  document.querySelector(".page1").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
      transform: 'translate(-50%,-50%) scale(0)'
    })
  })
