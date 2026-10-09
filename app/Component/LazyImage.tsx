'use client'

import Image, { ImageProps } from 'next/image';
import { useEffect, useId, useRef } from 'react';
import { useImageLoadReporter } from './ImageLoadGate';

/**
 * LazyImage wraps Next.js Image.
 * Outside ImageLoadGate it lazy-loads. Inside the gate it loads immediately
 * and reports when the image has loaded or failed, so the page can wait.
 */
export default function LazyImage({ onLoad, onError, loading, ...props }: ImageProps) {
  const id = useId();
  const { active, onSettle, track } = useImageLoadReporter(id);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!track) return;
    return track();
  }, [track]);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) onSettle();
  }, [onSettle]);

  return (
    <Image
      ref={imgRef}
      {...props}
      loading={active ? "eager" : (loading ?? "lazy")}
      onLoad={(event) => {
        onLoad?.(event);
        onSettle();
      }}
      onError={(event) => {
        onError?.(event);
        onSettle();
      }}
    />
  );
}
