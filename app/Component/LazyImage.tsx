import Image, { ImageProps } from 'next/image';

/**
 * LazyImage - a thin wrapper around Next.js Image component that enforces lazy loading.
 * It forwards all ImageProps to the underlying Image component and sets the
 * `loading` attribute to "lazy". This ensures that images are only fetched when
 * they approach the viewport, improving initial page load performance.
 */
export default function LazyImage(props: ImageProps) {
  return <Image loading="lazy" {...props} />;
}
