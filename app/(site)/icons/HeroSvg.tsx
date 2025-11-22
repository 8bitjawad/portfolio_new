export default function HeroSvg() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 600"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-40"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffffff" />
          <stop offset="50%" stopColor="#03000a08" />
          <stop offset="100%" stopColor="#1c1b24" />
        </linearGradient>
      </defs>

      <path
        d="M0,100 C300,200 600,0 900,100 C1200,200 1440,50 1440,50 L1440,600 L0,600 Z"
        fill="url(#grad)"
      />
    </svg>
  );
}