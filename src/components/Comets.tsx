import { useEffect, useRef } from 'react';

interface Comet {
  x: number;
  y: number;
  size: number;
  speed: number;
  active: boolean;
  delay: number;
}

export default function Comets() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Fixed 45-degree angle in radians
    const angle = Math.PI / 4;

    // Create 3 comets with wider spacing
    const comets: Comet[] = Array.from({ length: 3 }, (_, index) => ({
      x: (index * canvas.width / 2) - 100, // Spread comets across the width
      y: -20,
      size: 2.5, // Consistent size
      speed: 3, // Consistent speed
      active: false,
      delay: index * 3000 // 3 second delay between each comet
    }));

    let lastTime = 0;
    const interval = 8000; // 8 seconds between comet groups

    function drawComet(comet: Comet) {
      if (!ctx || !comet.active) return;

      const tailLength = 80; // Longer tail
      const gradient = ctx.createLinearGradient(
        comet.x,
        comet.y,
        comet.x - tailLength * Math.cos(angle),
        comet.y - tailLength * Math.sin(angle)
      );

      gradient.addColorStop(0, 'rgba(255, 28, 247, 0.8)');
      gradient.addColorStop(0.4, 'rgba(255, 28, 247, 0.3)');
      gradient.addColorStop(1, 'rgba(121, 40, 202, 0)');

      ctx.beginPath();
      ctx.moveTo(comet.x, comet.y);
      ctx.lineTo(
        comet.x - tailLength * Math.cos(angle),
        comet.y - tailLength * Math.sin(angle)
      );
      ctx.strokeStyle = gradient;
      ctx.lineWidth = comet.size;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    function animate(currentTime: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check if it's time to start a new group of comets
      if (currentTime - lastTime >= interval) {
        comets.forEach((comet, index) => {
          comet.active = false;
          // Spread starting positions evenly across the width
          comet.x = (index * canvas.width / 2) - 100;
          comet.y = -20;
          comet.delay = index * 3000;
        });
        lastTime = currentTime;
      }

      comets.forEach(comet => {
        // Activate comet after its delay
        if (!comet.active && currentTime - lastTime >= comet.delay) {
          comet.active = true;
        }

        if (comet.active) {
          // Move at 45-degree angle
          comet.x += comet.speed * Math.cos(angle);
          comet.y += comet.speed * Math.sin(angle);

          // Reset comet if it goes off screen
          if (comet.y > canvas.height || comet.x > canvas.width) {
            comet.active = false;
          }

          drawComet(comet);
        }
      });

      requestAnimationFrame(animate);
    }

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  );
}