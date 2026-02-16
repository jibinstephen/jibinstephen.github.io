'use client';

import { useEffect, useRef } from "react";

type Props = {
  src: string;
};

export const AutoVideo = ({ src }: Props) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    // video.playsInline = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
        //   video.pause();
        video.play()
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="auto"
      className="block w-full h-auto scale-[1.01]"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};