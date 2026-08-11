'use client';

const particles = [
  { left: '8%', top: '18%', size: '3px', delay: '0s', duration: '8s' },
  { left: '17%', top: '70%', size: '2px', delay: '1s', duration: '10s' },
  { left: '28%', top: '35%', size: '4px', delay: '2s', duration: '12s' },
  { left: '39%', top: '80%', size: '2px', delay: '0.5s', duration: '9s' },
  { left: '52%', top: '16%', size: '3px', delay: '3s', duration: '11s' },
  { left: '61%', top: '62%', size: '2px', delay: '1.5s', duration: '13s' },
  { left: '74%', top: '28%', size: '3px', delay: '2.5s', duration: '9s' },
  { left: '86%', top: '73%', size: '4px', delay: '0.8s', duration: '12s' },
  { left: '93%', top: '12%', size: '2px', delay: '4s', duration: '10s' },
];

export default function ParticlesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="hero-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
