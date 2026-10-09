'use client'

type LoadingScreenProps = {
  progress: number;
  hidden: boolean;
};

export default function LoadingScreen({ progress, hidden }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-[80] flex flex-col items-center justify-center overflow-hidden bg-[#ff0000] transition-opacity duration-500 ${hidden ? "pointer-events-none opacity-0" : "opacity-100"}`}
      aria-hidden={hidden}
      aria-label={hidden ? undefined : "Loading"}
      role="status"
    >
      <style>{`
        @keyframes monk-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.28) 1px, transparent 1px)",
          backgroundSize: "33.333% 50%",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.5) 0.7px, transparent 0.8px)",
          backgroundSize: "4px 4px",
          maskImage: "radial-gradient(circle at 50% 42%, #000 0%, transparent 62%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 42%, #000 0%, transparent 62%)",
        }}
      />
      <img
        src="/monk-loader.png"
        alt=""
        className="relative w-[min(32vw,150px)] h-auto select-none"
        style={{ animation: "monk-float 2.8s ease-in-out infinite" }}
      />
      <div className="relative mt-2 h-[3px] w-40 overflow-hidden bg-black/20">
        <div
          className="h-full bg-black transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
