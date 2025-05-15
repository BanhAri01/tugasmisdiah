gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
let currentScroll = 0;
let isScrollingDown = true;
let arrow = document.querySelectorAll(".arrow");

let tween = gsap.to(".marquee_inner", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear"
}).totalProgress(0.5);
gsap.set(".marquee_inner",{xPercent: -50});
window.addEventListener("scroll", function(){
    if(window.pageYOffset > currentScroll){
        isScrollingDown = true;
    }else{
        isScrollingDown =false;
    }
    gsap.to(tween,{
        timeScale: isScrollingDown ?1:-1,

    });
    arrow.forEach((arrow)=>{
        if(isScrollingDown){
            arrow.classList.remove("active");
        }else {
            arrow.classList.add("active");
        }
    });

    currentScroll = window.pageYOffset;
});


const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "center center",
      end: "+=500",
      scrub: 3,
      pin: true, 
      pinSpacing: true,
      markers: false
    }
  })
  
  tl.fromTo(
    "#heroBox", 
    {
      scaleY: 0.02,
      scaleX: 0.6,
      transformOrigin: "center",
    }, 
    {
      scaleY: 1,
      scaleX: 1,
      ease: "power2.out",
      duration: 3
    }
  );
  tl.from("#text1",{
    y: 140,
    ease: "power2.out",
    scale: 2,
    duration: 3
  },0)
  tl.from("#text2",{
    y:-140,
    ease:"power2.out",
    scale:2,
    duration:3
  },0)
  tl.to("#text1",{
    y: 150,       
    opacity: 0,
    filter: "blur(4px)",
    ease: "power2.in",
    duration: 3
  })
  tl.to("#text2",{
    y: -150,
    opacity:0,
    filter:"blur(4px)",
    ease: "power2.in",
    duration: 3
  },"<");
const tl2 =gsap.timeline({
    scrollTrigger:{
        trigger:"#aboutme",
        start:"center center",
        end:"+=1000",
        pin:true,
        scrub:3
    }
})

tl2.from("#about",{
    x:-35,
    duration:1
},"<")
tl2.from("#deskripsi",{
    x:-35,
    duration:1
},"<")
tl2.from("#company",{
    x:35,
    duration:1
},"<")
tl2.to("#about",{
    x:45,
    duration:1,
    opacity:0
})
tl2.to("#deskripsi",{
    x:-35,
    duration:1,
    opacity:0
},"<")
tl2.to("#company",{
    scale:280,
    ease: "power1.inOut",
    duration:5
},"<")
tl2.to("body",{
    backgroundColor:'#000000',
    duration:2
},"<")

tl2.from("#aboutme",{
    opacity:1,
    duration:1
});

const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#aboutme",
        start: "top+=400 center",
        end:"+=200",
        pin:true,
        scrub:2,
        markers:false,
        pinSpacing: true
    }
})
tl3.from("#ourteam",{
    opacity:0
})
tl3.from("#ourteamh2",{
    x:32
},"<")
tl3.from("#ourteamp",{
    x:-32
},"<")
tl3.from("#img1",{
    y:35
},"<")

const tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#aboutme",
        start: "top+=405 center",
        end:"+=3000",
        pin:true,
        scrub:2,
        // markers:true,
    }
})


tl4.from("#img2",{x:100, y:700,duration:1,rotation:45,opacity:0})
.from("#img3",{x:100, y:700,duration:1,rotation:45,opacity:0})



const tl5 = gsap.timeline({
        scrollTrigger:{
        trigger:"#skill",
        start: "top-=400 top",
        end:"+=1000",
        scrub:2,
        markers:true,
      }
    }
  );
  
  

  tl5
    .fromTo("#reactimg", 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.5 }
    )
    .fromTo("#laravelimg", 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.5 }
    )
    .fromTo("#reactimg", 
      { x: -1000, y: -500 },
      { 
        delay: 1,
        rotation: 360,
        duration: 3,
        ease: "power1.inOut",
        motionPath: {
          path: [
            { x: -700, y: -200 },
            { x: -500, y: -200 },
            { x: -600, y: -100 },
            { x: -700, y: -200 },
            { x: -400, y: -200 },
            { x:   0, y:    0 },
          ],
          autoRotate: false
        },
        opacity: 0
      }
    )
  
 
    .fromTo("#flash", 
      { 
        scale: 0.8, 
        opacity: 0, 
        boxShadow: "0px 0px 0px rgba(255,255,255,0)" 
      },
      { 
        scale: 1.2, 
        opacity: 1, 
        duration: 0.2, 
        ease: "power1.out",
        boxShadow: "0px 0px 80px rgba(255,255,255,1)"
      }
    )
    .to("#flash", { 
        scale: 1, 
        opacity: 0, 
        duration: 0.2, 
        ease: "power1.in" 
      }
    )


    .fromTo("#laravelimg", 
        { x: -800, y: -300 },
        { 
          rotation: 360,
          duration: 3,
          ease: "power1.inOut",
          motionPath: {
            path: [
              { x: -700, y: -200 },
              { x: -500, y: -200 },
              { x: -600, y: -100 },
              { x: -700, y: -200 },
              { x: -400, y: -200 },
              { x:    0, y:    0 },
            ],
            autoRotate: false
          },
          opacity: 0
        }
      )
    
     
      .fromTo("#flash",
        { scale: 0.8, opacity: 0, boxShadow: "0px 0px   0px rgba(255,255,255,0)" },
        { 
          scale: 1.3,
          opacity: 1,
          duration: 0.1,
          ease: "power1.out",
          boxShadow: "0px 0px 100px rgba(255,255,255,1)"
        }
      )
      .to("#flash",
        { scale: 1, opacity: 0, duration: 0.2, ease: "power1.in" }
      )
    
   
      .to({}, { duration: 0.1 })
    
     
      .fromTo("#flash",
        { scale: 0.8, opacity: 0, boxShadow: "0px 0px   0px rgba(255,255,255,0)" },
        { 
          scale: 1.3,
          opacity: 1,
          duration: 0.1,
          ease: "power1.out",
          boxShadow: "0px 0px 100px rgba(255,255,255,1)"
        }
      )
      .to("#flash",
        { scale: 1, opacity: 0, duration: 0.2, ease: "power1.in" }
      )
      .fromTo("#phpimg", 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5 }
      )

      .fromTo("#phpimg", 
        { x: -1000, y: 400 },
        { 
          rotation: 360,
          duration: 3,
          ease: "power1.inOut",
          motionPath: {
            path: [
              { x: -700, y: 200 },
              { x: -500, y: 200 },
              { x: -600, y: 100 },
              { x: -700, y: 200 },
              { x: -400, y: 200 },
              { x:    0, y:    0 },
            ],
            autoRotate: false
          },
          opacity: 0
        }
      )

      .fromTo("#flash",
        { scale: 0.8, opacity: 0, boxShadow: "0px 0px   0px rgba(255,255,255,0)" },
        { 
          scale: 1.3,
          opacity: 1,
          duration: 0.1,
          ease: "power1.out",
          boxShadow: "0px 0px 100px rgba(255,255,255,1)"
        }
      )
      .to("#flash",
        { scale: 1, opacity: 0, duration: 0.2, ease: "power1.in" }
      )
    
   
      .to({}, { duration: 0.1 })
    
     
      .fromTo("#flash",
        { scale: 0.8, opacity: 0, boxShadow: "0px 0px   0px rgba(255,255,255,0)" },
        { 
          scale: 1.3,
          opacity: 1,
          duration: 0.1,
          ease: "power1.out",
          boxShadow: "0px 0px 100px rgba(255,255,255,1)"
        }
      )
      .to("#flash",
        { scale: 1, opacity: 0, duration: 0.2, ease: "power1.in" }
      )
      .to({}, { duration: 0.1 })
    
     
      .fromTo("#flash",
        { scale: 0.8, opacity: 0, boxShadow: "0px 0px   0px rgba(255,255,255,0)" },
        { 
          scale: 1.3,
          opacity: 1,
          duration: 0.1,
          ease: "power1.out",
          boxShadow: "0px 0px 100px rgba(255,255,255,1)"
        }
      )
      .to("#flash",
        { scale: 1, opacity: 0, duration: 0.2, ease: "power1.in" }
      )

      const blinkArduino = gsap.timeline({
        repeat: -1,      
        repeatDelay: 0.1, 
        paused: true      
      });
      
      blinkArduino
        .fromTo(
          "#flash",
          { scale: 0.8, opacity: 0, boxShadow: "0px 0px 0px rgba(255,255,255,0)" },
          {
            scale: 1.3,
            opacity: 1,
            duration: 0.1,
            ease: "power1.out",
            boxShadow: "0px 0px 100px rgba(255,255,255,1)"
          }
        )
      
    
      tl5.add(() => blinkArduino.play(), "+=0")
    
      
      
         

const tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#skill",
        start: "center center",
        end:"+=3000",
        pin:true,
        scrub:2,
        markers:true,
    }
})

.fromTo("#arduinoimg", 
  { opacity: 0 }, 
  { opacity: 1, duration: 0.5 }
)  
.fromTo("#arduinoimg", 
  { x: -800, y: -200 },
  { 
    rotation: 360,
    duration: 3,
    ease: "power1.inOut",
    motionPath: {
      path: [
        { x: -700, y: -200 },
        { x: -500, y: -200 },
        { x: -600, y: -100 },
        { x: -700, y: -200 },
        { x: -400, y: -200 },
        { x:    0, y:    0 },
      ],
      autoRotate: false
    },
    opacity: 0
  }
)


  .fromTo("#canvaimg", 
    { x: -1300, y: -200 },
    { 
      rotation: 360,
      duration: 3,
      ease: "power1.inOut",
      motionPath: {
        path: [
          { x: -700, y: -200 },
          { x: -500, y: -200 },
          { x: -600, y: -100 },
          { x: -700, y: -200 },
          { x: -400, y: -200 },
          { x:    0, y:    0 },
        ],
        autoRotate: false
      },
      opacity: 0
    },"<"
  )
  .fromTo("#figmaimg", 
    { x: -1400, y: -200 },
    { 
      rotation: 360,
      duration: 3,
      ease: "power1.inOut",
      motionPath: {
        path: [
          { x: -700, y: -200 },
          { x: -500, y: -200 },
          { x: -600, y: -100 },
          { x: -700, y: -200 },
          { x: -400, y: -200 },
          { x:    0, y:    0 },
        ],
        autoRotate: false
      },
      opacity: 0
    },"<"
  )
  .fromTo("#wpimg", 
    { x: -1600, y: -200 },
    { 
      rotation: 360,
      duration: 3,
      ease: "power1.inOut",
      motionPath: {
        path: [
          { x: -700, y: -200 },
          { x: -500, y: -200 },
          { x: -600, y: -100 },
          { x: -700, y: -200 },
          { x: -400, y: -200 },
          { x:    0, y:    0 },
        ],
        autoRotate: false
      },
      opacity: 0
    },"<"
 )
 .to("#monitor", {
  x: -500,
  duration: 2,
  ease: "power1.inOut"
})
.to("#ourskill", {
  x:50,
  opacity:0
 })
 .to("#ourskillp", {
  x:-50,
  opacity:0
 },"<")
.to("#monitor", {
  keyframes: [
    { x: -505, y:  5, rotation: -2, duration: 0.1 },
    { x: -495, y: -5, rotation:  2, duration: 0.1 },
    { x: -505, y:  5, rotation: -1, duration: 0.1 },
    { x: -495, y: -5, rotation:  1, duration: 0.1 },
    { x: -500, y:  0, rotation:  0, duration: 0.1 }
  ],
  ease: "power1.inOut"
})
.call(() => {
  blinkArduino.pause();
})
  .to("#monitor",{
    scale:3,
    duration:3,
  })
  .to("#flash",{
    opacity:0
  },"<")
  .to("#isilayar",{
    opacity:1
  },"<")
  .fromTo("#loading",{
    opacity:1
  },{
    opacity:0
  })
