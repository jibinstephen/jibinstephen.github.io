'use client'

import { createContext, useCallback, useContext, useMemo, useRef } from "react";

export type ImageLoadState = {
  loaded: number;
  total: number;
  ready: boolean;
};

type Gate = {
  track: (id: string) => void;
  untrack: (id: string) => void;
  settle: (id: string) => void;
};

const ImageLoadContext = createContext<Gate | null>(null);

export function useImageLoadReporter(id: string) {
  const gate = useContext(ImageLoadContext);

  const onSettle = useCallback(() => {
    gate?.settle(id);
  }, [gate, id]);

  const track = useCallback(() => {
    if (!gate) return;
    gate.track(id);
    return () => gate.untrack(id);
  }, [gate, id]);

  return {
    active: gate !== null,
    onSettle,
    track: gate ? track : null,
  };
}

export default function ImageLoadGate({
  children,
  onChange,
}: {
  children: React.ReactNode;
  onChange: (state: ImageLoadState) => void;
}) {
  const tracked = useRef(new Set<string>());
  const settled = useRef(new Set<string>());
  const onChangeRef = useRef(onChange);
  const publishQueued = useRef(false);
  onChangeRef.current = onChange;

  const gate = useMemo<Gate>(() => {
    const publish = () => {
      if (publishQueued.current) return;
      publishQueued.current = true;
      queueMicrotask(() => {
        publishQueued.current = false;
        const total = tracked.current.size;
        let loaded = 0;
        settled.current.forEach((id) => {
          if (tracked.current.has(id)) loaded += 1;
        });
        onChangeRef.current({
          loaded,
          total,
          ready: total > 0 && loaded >= total,
        });
      });
    };

    return {
      track(id: string) {
        tracked.current.add(id);
        publish();
      },
      untrack(id: string) {
        tracked.current.delete(id);
        settled.current.delete(id);
        publish();
      },
      settle(id: string) {
        settled.current.add(id);
        publish();
      },
    };
  }, []);

  return (
    <ImageLoadContext.Provider value={gate}>
      {children}
    </ImageLoadContext.Provider>
  );
}
