import React from 'react';

const Logo = ({ size = 'md', dark = false }) => {
  const textColor = dark ? '#ffffff' : '#1f2937';
  const subColor = dark ? '#d8b4fe' : '#a855f7';

  const scales = {
    sm: { svg: 28, text: '1rem', sub: '0.55rem' },
    md: { svg: 36, text: '1.25rem', sub: '0.6rem' },
    lg: { svg: 48, text: '1.6rem', sub: '0.75rem' },
  };
  const s = scales[size] || scales.md;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', userSelect: 'none' }}>
      {/* SVG Icon — Lotus with glow */}
      <svg
        width={s.svg}
        height={s.svg}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Water / base ripple */}
        <ellipse cx="32" cy="54" rx="20" ry="4" fill="url(#logoGrad)" opacity="0.18" />
        <ellipse cx="32" cy="54" rx="13" ry="2.5" fill="url(#logoGrad)" opacity="0.22" />

        {/* Stem */}
        <path
          d="M32 54 Q30 44 32 36"
          stroke="url(#logoGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Left outer petal */}
        <path
          d="M32 36 Q18 30 16 18 Q24 22 32 36Z"
          fill="url(#logoGrad)"
          opacity="0.55"
          filter="url(#glow)"
        />
        {/* Right outer petal */}
        <path
          d="M32 36 Q46 30 48 18 Q40 22 32 36Z"
          fill="url(#logoGrad)"
          opacity="0.55"
          filter="url(#glow)"
        />
        {/* Left middle petal */}
        <path
          d="M32 36 Q20 26 22 12 Q28 20 32 36Z"
          fill="url(#logoGrad)"
          opacity="0.75"
          filter="url(#glow)"
        />
        {/* Right middle petal */}
        <path
          d="M32 36 Q44 26 42 12 Q36 20 32 36Z"
          fill="url(#logoGrad)"
          opacity="0.75"
          filter="url(#glow)"
        />
        {/* Center petal (brightest) */}
        <path
          d="M32 36 Q26 20 32 8 Q38 20 32 36Z"
          fill="url(#logoGrad)"
          filter="url(#glow)"
        />

        {/* Center dot */}
        <circle cx="32" cy="36" r="3" fill="#7c3aed" />
        <circle cx="32" cy="36" r="1.5" fill="#f3e8ff" />
      </svg>

      {/* Text block */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: '"Merriweather", serif',
            fontWeight: 700,
            fontSize: s.text,
            color: textColor,
            letterSpacing: '-0.02em',
          }}
        >
          DLight<span style={{ color: '#a855f7' }}>.</span>
        </span>
        <span
          style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            fontSize: s.sub,
            color: subColor,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Spa &amp; Wellness
        </span>
      </div>
    </div>
  );
};

export default Logo;
