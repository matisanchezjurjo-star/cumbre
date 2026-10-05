export function SectionWave({
  fill,
  flip = false,
}: {
  fill: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block w-full h-[46px] sm:h-[70px]"
      >
        <path
          d="M0,32 C240,70 420,0 720,18 C1020,36 1200,78 1440,28 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
