const soundMorph = (item1, time, item2) => {
    let tl = new TimelineMax();
    tl.to(item1, time, {
      morphSVG: item2,
      transformOrigin: "center center",
      ease: Power1.easeOut,
      yoyo: true,
      repeat: -1,
      scaleY: 0,
      opacity: 1
    });
    return tl;
  };
  const bars = () => {
    let tl = new TimelineMax() 
    tl.staggerTo('.line', 0.2, {
          scaleY: 0,
          transformOrigin: 'center center',
          yoyo: true,
          repeat: -1,
          ease: RoughEase.ease.config({ template:
  Power0.easeNone,
  strength:
  1,
  points:
  20,
  taper:
  "both",
  randomize: false,
  clamp: false
  }),
       stagger: {
          from: "start",
          amount: 1
        }
      })
      return tl;
  }
  const master = new TimelineMax();
  master
    .add("start")
  .add(bars(),"start")
  .add(soundMorph("#Vector", 1, "#Vector_2"), "start")
  .add(soundMorph("#Vector_2", 1.5, "#Vector"), "start")
    
  
  const pauseBtn = document.getElementById("pause")
  
  pauseBtn.onclick = function() {
    master.paused(!master.paused());
  }
  const playBtn = document.getElementById("play")
  
  playBtn.onclick = function() {
    master.play(!master.play());
  }
  