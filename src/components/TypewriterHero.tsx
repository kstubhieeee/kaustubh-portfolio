import Typewriter from 'typewriter-effect';

export default function TypewriterHero() {
  return (
    <div className="h-24 md:h-32 flex items-center justify-center">
      <div className="text-2xl md:text-4xl font-medium text-emerald-400">
        <Typewriter
          options={{
            strings: ['Web Developer', 'Blockchain Enthusiast', 'AI Enthusiast'],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
}