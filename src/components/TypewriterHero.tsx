import Typewriter from 'typewriter-effect';

export default function TypewriterHero() {
  return (
    <div className="h-24 md:h-32 flex items-center justify-center">
      <div className="text-2xl md:text-4xl font-medium">
        <span className="bg-gradient-to-r from-[#ff1cf7] via-[#b249f8] to-[#7928ca] text-transparent bg-clip-text">
          <Typewriter
            options={{
              strings: ['Web Developer', 'Blockchain Enthusiast', 'AI Enthusiast'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              wrapperClassName: "bg-gradient-to-r from-[#ff1cf7] via-[#b249f8] to-[#7928ca] text-transparent bg-clip-text"
            }}
          />
        </span>
      </div>
    </div>
  );
}