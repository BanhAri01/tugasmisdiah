gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('jVYSCN9C0DYPCfr1y');
  const steps = ['step-1','step-2','step-3','step-4']
  .map(id => document.getElementById(id));
const [step1, step2, step3, step4] = steps;
const deadlineInput = document.getElementById('project-deadline');
const flexibleCheckbox = document.getElementById('flexible-deadline');
const selectedTypeSpan = document.getElementById('selected-type');

// navigation
document.getElementById('to-step-2').onclick = () => {
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
};
document.getElementById('back-to-1').onclick = () => {
  step2.classList.add('hidden');
  step1.classList.remove('hidden');
};
document.getElementById('back-to-2').onclick = () => {
  step3.classList.add('hidden');
  step2.classList.remove('hidden');
};
document.getElementById('to-step-4').onclick = () => {
  step3.classList.add('hidden');
  step4.classList.remove('hidden');
};
document.getElementById('back-to-3').onclick = () => {
  step4.classList.add('hidden');
  step3.classList.remove('hidden');
};

document.querySelectorAll('.type-card').forEach(card => {
  card.onclick = () => {
    selectedTypeSpan.textContent = card.dataset.type;
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
  };
});

// flexible deadline toggle
flexibleCheckbox.onchange = () => {
  deadlineInput.disabled = flexibleCheckbox.checked;
  if (flexibleCheckbox.checked) deadlineInput.value = '';
};

document.getElementById('send-final').onclick = (e) => {
  e.preventDefault();


  const userName       = document.getElementById('user-name').value.trim();
  const userWA         = document.getElementById('user-wa').value.trim();
  const projectType    = selectedTypeSpan.textContent     || 'Belum dipilih';
  const projectDetails = document.getElementById('project-details').value.trim();
  const isFlexible     = flexibleCheckbox.checked;
  const projectDeadline= isFlexible
                           ? 'Fleksibel'
                           : (deadlineInput.value || 'Belum diisi');


  const data = {
    user_name:       userName,        
    user_whatsapp:   userWA,           
    project_type:    projectType,     
    project_details: projectDetails,  
    project_deadline: projectDeadline, 

    request_time:    new Date().toISOString()
  };

  emailjs.send('service_51onrie', 'template_z3ygnvk', data)
  .then(() => {
    Swal.fire({
      icon: 'success',
      title: 'Pesan terkirim!',
      text: 'tunggu chat dari kami.',
      confirmButtonText: 'OK'
    });
  })
  .catch(err => {
    Swal.fire({
      icon: 'error',
      title: 'Gagal kirim',
      text: ` Terjadi kesalahan: ${err.text}`,
      confirmButtonText: 'Coba lagi'
    });
  });

};
});

 


const footer = document.getElementById('footer');

const images = [
  'assets/img/arduino.png',
  'assets/img/canva.png',
  'assets/img/laravel-removebg-preview.png',
  'assets/img/react-removebg-preview.png',
  'assets/img/php.png'
];

let lastTime = 0;

footer.addEventListener('mousemove', e => {
  const now = Date.now();
  if (now - lastTime < 400) return;
  if (e.target.closest('#form-container,#info')) return;
  lastTime = now;

  if (!footer.contains(e.target)) return;

  const imgSrc = images[Math.floor(Math.random() * images.length)];
  const img = document.createElement('img');
  img.src = imgSrc;
  img.className = 'absolute w-[100px] h-[100px] pointer-events-none select-none z-20';

  const rect = footer.getBoundingClientRect();
  const x = e.clientX - rect.left - 50; 
  const y = e.clientY - rect.top - 50;

  img.style.left = x + 'px';
  img.style.top = y + 'px';

  footer.appendChild(img);

  gsap.to(img, {
    duration: 1,
    y: 150,
    delay: 1,
    opacity: 0,
    scale: 1.2,
    ease: "power1.out",
    onComplete: () => img.remove()
  });
});




function copyEmail() {
  const email = document.getElementById("emailText").innerText;
  const copyBtn = document.getElementById("copyBtn");
  const container = document.getElementById("emailContainer");

  navigator.clipboard.writeText(email).then(() => {
    copyBtn.innerText = "Copied";
    container.classList.add("bg-green-100");

    setTimeout(() => {
      copyBtn.innerText = "Copy";
      container.classList.remove("bg-green-100");
    }, 2000);
  });
}

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
let isOpen = false;
    function togglePanel() {
      const panel = document.getElementById('panel');
      const card2 = document.getElementById('card2');
      isOpen = !isOpen;

      if (isOpen) {
   
        panel.classList.replace('scale-x-0', 'scale-x-100');

    
        const rect = card2.getBoundingClientRect();
        const distance = (window.innerWidth - rect.left) + rect.width;
        card2.style.transition = 'transform 0.3s ease';
        card2.style.transform = `translateX(${distance}px)`;
      } else {
   
        panel.classList.replace('scale-x-100', 'scale-x-0');

      
        card2.style.transform = '';
      }
    }

    function showSection(id) {
      const allSections = document.querySelectorAll('#produk section');
      allSections.forEach(section => section.classList.add('hidden'));

      const target = document.getElementById(id);
      if (target) {
        target.classList.remove('hidden');
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function closeSection(id) {
      const sec = document.getElementById(id);
      if (sec) sec.classList.add('hidden');
      document.getElementById('monitor').scrollIntoView({ behavior: 'smooth' });
    }

    let isOpen2Canva = false;
    function togglePanel2Canva() {
      const panel2  = document.getElementById('panel2-canva');
      const card1   = document.getElementById('card-canva');
      const card2   = document.getElementById('card2-canva');
      const section = document.getElementById('section-canva');
      isOpen2Canva = !isOpen2Canva;
    
      if (isOpen2Canva) {
        panel2.classList.replace('scale-x-0', 'scale-x-100');
    
        const r1    = card1.getBoundingClientRect();
        const dist1 = r1.left + r1.width;
        card1.style.transition = 'transform 0.3s ease';
        card1.style.transform  = `translateX(-${dist1}px)`;
    
        const secRect = section.getBoundingClientRect();
        const r2      = card2.getBoundingClientRect();
        const delta   = r2.left - secRect.left;
        card2.style.transition = 'transform 0.3s ease';
        card2.style.transform  = `translateX(-30px)`;
      } else {
        panel2.classList.replace('scale-x-100', 'scale-x-0');
        card1.style.transform = '';
        card2.style.transform = '';
      }
    }
    

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
      scaleX: 2,
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
        markers:false,
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
        scrollTrigger: {
          trigger: "#skill",
          start: "center center",
          end: "+=3000",
          pin: true,
          scrub: 2,
          markers: false,
          onLeave: () => {
            // Matikan scroll
            document.body.style.overflow = 'hidden';
      
            // Hidupkan scroll lagi setelah 1 detik
            setTimeout(() => {
              document.body.style.overflow = '';
            }, 2000); // 1000ms = 1 detik
          }
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


  