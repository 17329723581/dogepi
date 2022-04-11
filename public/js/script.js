function init(){
  let w, h, particles, 
      ctx = canvas.getContext('2d');

  resize();
  init();
  requestAnimationFrame(draw);
  addEventListener('resize', resize)
  addEventListener('click', init)

  function init(){
      ctx.clearRect(0,0,w,h);
      particles = Array(h/10|0)
          .fill(0)
          .map((e,i) => newParticle())
  }

  function draw(t) {
    requestAnimationFrame(draw);
      
    if (particles.length > 3000)
      return

    t /= 1000;

    particles.forEach(p => {
      p.cooldown -= 0.1
        
      // if (Math.random()>0.99){
      //    p.dx = Math.random()*2-1
      //     p.dy = Math.random()*2-1
      // }  
      p.x += p.dx;
      p.y += p.dy;
      if (Math.abs(p.x) > w/2)  {
          p.x = -p.x;
          p.y = -Math.sign(p.y) * Math.abs(p.y);
          p.dy = -Math.sign(p.dy) * Math.abs(p.dy);
      }
      if (Math.abs(p.y) > h/2)  
        p.y = -p.y;  
      if (!p.fill)
          p.fill = `hsl(${p.color},55%,55%)`;
      ctx.fillStyle = p.fill;  
      ctx.fillRect(w/2+p.x-1, h/2+p.y-1, 3, 3);
    });

    for (let i = 0; i< particles.length-1; i++) {
      for (let j = i+1; j< particles.length; j++) {
        collide(particles[i], particles[j]);
      }
    }
  
    ctx.fillStyle = "#0001";
    ctx.fillRect(0,0,w,h);
  }

  function collide(a,b){
  if (a.cooldown>0||b.cooldown>0)
    return
  let dx = a.x-b.x
  let dy = a.y-b.y

    if (dx*dx + dy*dy >1)
    return
    
    a.cooldown = b.cooldown = 1;
    particles.push(newParticle(a.x,b.y, (a.color+b.color)/2))

    let dir = Math.random()*6.283
    a.dx = Math.cos(dir)
    a.dy = Math.sin(dir)

    dir = Math.random()*6.283
    b.dx = Math.cos(dir)
    b.dy = Math.sin(dir)

    ctx.beginPath()
    ctx.fillStyle = "#fff";
    ctx.arc(w/2+a.x,h/2+b.y,5,0,6.283)
    ctx.fill()
  }

  function newParticle(x,y,color) {
    let dir = Math.random()*6.283
    let speed = 1 + Math.random();
    return {
      x: x || (Math.random()*w - w/2),
      y: y || (Math.random()*h - h/2),
      dx: Math.cos(dir)*speed,
      dy: Math.sin(dir)*speed,
      cooldown: 1,
      color: color || Math.random()*360
    }
  }

  function resize(){
    if (w !== innerWidth || h !== innerHeight) {
      h = canvas.height = innerHeight;
      w = canvas.width = innerWidth;
    }
  }
}