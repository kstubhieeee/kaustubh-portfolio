import { useEffect, useRef } from "react";

const CUSTOM_LAYOUTS = {
  60: [Math.PI / 4],
  100: [-Math.PI / 6, Math.PI / 2],
  140: [0, -Math.PI / 2.5, (2 * Math.PI) / 3],
  180: [-Math.PI / 2, Math.PI / 2.5, (5 * Math.PI) / 4, (3 * Math.PI) / 1.5],
  220: [
    Math.PI / 6,
    -Math.PI / 1.5,
    (2 * Math.PI) / 2.5,
    Math.PI,
    (5 * Math.PI) / 3,
  ],
};

const OrbitingIcon = ({ angle, radius, icon, size = 45 }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.style.left = `calc(50% + ${Math.cos(angle) * radius}px)`;
      iconRef.current.style.top = `calc(50% + ${Math.sin(angle) * radius}px)`;
    }
  }, [angle, radius]);

  return (
    <div
      ref={iconRef}
      className="absolute transition-all duration-500"
      style={{
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        src={`https://skillicons.dev/icons?i=${icon}`}
        alt={icon}
        className="w-full h-full rounded-full bg-black/50 p-1.5 hover:scale-110 transition-transform"
      />
    </div>
  );
};

const OrbitRing = ({ radius }) => (
  <div
    className="absolute border border-white/10 rounded-full animate-pulse"
    style={{
      width: radius * 2,
      height: radius * 2,
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    }}
  />
);

export default function SkillsSection() {
  const skills = [
    { icon: "react", radius: 60 },
    { icon: "js", radius: 100 },
    { icon: "nodejs", radius: 100 },
    { icon: "css", radius: 140 },
    { icon: "ts", radius: 140 },
    { icon: "express", radius: 180 },
    { icon: "nextjs", radius: 180 },
    { icon: "mongodb", radius: 180 },
    { icon: "mysql", radius: 220 },
    { icon: "firebase", radius: 220 },
    { icon: "bootstrap", radius: 220 },
    { icon: "tailwind", radius: 220 },
    { icon: "redux", radius: 220 },
  ];

  const rings = [60, 100, 140, 180, 220];
  const groupedSkills = rings.map((radius) =>
    skills.filter((skill) => skill.radius === radius)
  );

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center bg-transparent mt-[-50px]">
      {rings.map((radius, index) => (
        <OrbitRing key={index} radius={radius} />
      ))}

      <div className="relative z-10 bg-gradient-to-r from-[#ff1cf7] via-[#b249f8] to-[#7928ca] rounded-full p-2 backdrop-blur-sm border border-white/10 animate-pulse">
        <div className="w-10 h-10"></div>
      </div>

      {groupedSkills.map((skillsOnRing, ringIndex) => {
        const radius = rings[ringIndex];
        const customAngles = CUSTOM_LAYOUTS[radius];

        return skillsOnRing.map((skill, i) => (
          <OrbitingIcon
            key={`${skill.icon}-${ringIndex}-${i}`}
            radius={radius}
            angle={customAngles[i]}
            icon={skill.icon}
          />
        ));
      })}
    </div>
  );
}
