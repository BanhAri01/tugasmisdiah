gsap.registerPlugin(ScrollTrigger);


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
        end:"+=1000",
        pin:true,
        scrub:2,
        markers:true,
    }
})


tl4.from("#img2",{x:100, y:700,duration:1,rotation:45,opacity:0})
.from("#img3",{x:100, y:700,duration:1,rotation:45,opacity:0})




  