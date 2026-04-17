"use client";

/**
 * Decorative tulip border/divider placed between sections.
 * Features 3 stylized tulips (center larger, sides smaller)
 * with ornamental curves extending to both edges.
 */

interface Props {
  /** Background the divider sits on — adjusts line colors */
  on?: "cream" | "white" | "dark";
  className?: string;
}

export default function TulipDivider({ on = "cream", className = "" }: Props) {
  // Tulip petal color — warm orange for "tulipani arancioni"
  const petal = "#f37366";
  const petalHighlight = "#f89890";
  const stem = "#7db87d";
  const stemDark = "#5a9a5a";

  // Decorative line color
  const line =
    on === "dark" ? "rgba(255,255,255,0.12)" : on === "white" ? "#ebd8bc" : "#dcc9a8";
  const lineLight =
    on === "dark" ? "rgba(255,255,255,0.06)" : on === "white" ? "#f5ede0" : "#ebd8bc";

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto max-h-[70px] md:max-h-[90px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ---- decorative curved lines ---- */}
        {/* left line */}
        <path
          d="M 0 45 Q 150 45 250 42 Q 350 38 430 42 Q 470 44 500 43"
          stroke={line}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 0 48 Q 120 50 220 46 Q 340 40 440 45 Q 480 47 505 46"
          stroke={lineLight}
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        {/* right line */}
        <path
          d="M 700 43 Q 730 44 770 42 Q 850 38 950 42 Q 1050 45 1200 45"
          stroke={line}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 695 46 Q 720 47 760 45 Q 860 40 980 46 Q 1080 50 1200 48"
          stroke={lineLight}
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* ---- small decorative dots/leaves along lines ---- */}
        <circle cx="280" cy="41" r="1.8" fill={lineLight} />
        <circle cx="920" cy="41" r="1.8" fill={lineLight} />

        {/* ---- LEFT TULIP (smaller, at x=530) ---- */}
        <g transform="translate(530, 16) scale(0.7)">
          {/* stem */}
          <path
            d="M 15 42 L 15 70"
            stroke={stem}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* small leaf left */}
          <path
            d="M 15 56 Q 6 50 4 44"
            stroke={stem}
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* left petal */}
          <path
            d="M 15 42 Q 14 32 6 22 Q 2 16 4 10 Q 6 4 10 2 Q 13 0 15 6"
            fill={petal}
          />
          {/* right petal */}
          <path
            d="M 15 42 Q 16 32 24 22 Q 28 16 26 10 Q 24 4 20 2 Q 17 0 15 6"
            fill={petal}
          />
          {/* center highlight petal */}
          <path
            d="M 15 38 Q 14 28 11 18 Q 10 12 12 6 Q 14 2 15 5 Q 16 2 18 6 Q 20 12 19 18 Q 16 28 15 38"
            fill={petalHighlight}
            opacity="0.6"
          />
        </g>

        {/* ---- CENTER TULIP (larger, at x=580) ---- */}
        <g transform="translate(580, 4)">
          {/* stem */}
          <path
            d="M 20 50 L 20 82"
            stroke={stemDark}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* leaf right */}
          <path
            d="M 20 66 Q 30 58 34 48"
            stroke={stem}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* leaf left */}
          <path
            d="M 20 62 Q 10 55 7 46"
            stroke={stem}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* left petal */}
          <path
            d="M 20 50 Q 18 38 8 26 Q 3 18 5 11 Q 7 4 12 1 Q 16 -1 20 8"
            fill={petal}
          />
          {/* right petal */}
          <path
            d="M 20 50 Q 22 38 32 26 Q 37 18 35 11 Q 33 4 28 1 Q 24 -1 20 8"
            fill={petal}
          />
          {/* center petal (highlight) */}
          <path
            d="M 20 44 Q 18 32 14 20 Q 12 12 15 5 Q 18 0 20 4 Q 22 0 25 5 Q 28 12 26 20 Q 22 32 20 44"
            fill={petalHighlight}
            opacity="0.55"
          />
        </g>

        {/* ---- RIGHT TULIP (smaller, at x=640) ---- */}
        <g transform="translate(640, 16) scale(0.7)">
          {/* stem */}
          <path
            d="M 15 42 L 15 70"
            stroke={stem}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* small leaf right */}
          <path
            d="M 15 56 Q 24 50 26 44"
            stroke={stem}
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* left petal */}
          <path
            d="M 15 42 Q 14 32 6 22 Q 2 16 4 10 Q 6 4 10 2 Q 13 0 15 6"
            fill={petal}
          />
          {/* right petal */}
          <path
            d="M 15 42 Q 16 32 24 22 Q 28 16 26 10 Q 24 4 20 2 Q 17 0 15 6"
            fill={petal}
          />
          {/* center highlight */}
          <path
            d="M 15 38 Q 14 28 11 18 Q 10 12 12 6 Q 14 2 15 5 Q 16 2 18 6 Q 20 12 19 18 Q 16 28 15 38"
            fill={petalHighlight}
            opacity="0.6"
          />
        </g>

        {/* ---- tiny accent dots near tulips ---- */}
        <circle cx="520" cy="50" r="1.5" fill={petal} opacity="0.3" />
        <circle cx="680" cy="50" r="1.5" fill={petal} opacity="0.3" />
        <circle cx="508" cy="44" r="1" fill={stem} opacity="0.3" />
        <circle cx="692" cy="44" r="1" fill={stem} opacity="0.3" />
      </svg>
    </div>
  );
}
