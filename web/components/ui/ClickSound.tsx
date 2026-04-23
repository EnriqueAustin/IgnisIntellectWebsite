"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * ClickSound – plays a synthesised mechanical-keyboard "thock" on every
 * mousedown anywhere on the page.  Uses the Web Audio API so no external
 * sound file is required.
 *
 * How the thock is built:
 *  1. A short noise burst (filtered low-pass) gives the "body" of the key hit.
 *  2. A quick sine-wave blip at ~120 Hz gives the low-end "thock".
 *  3. Both decay very quickly (~80 ms total) so it never feels intrusive.
 *
 * We add slight random pitch / gain variation so repeated clicks don't
 * sound robotic.
 */
export default function ClickSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    return ctxRef.current;
  }, []);

  useEffect(() => {
    const playThock = () => {
      const ctx = getCtx();
      const now = ctx.currentTime;

      // --- slight random variation ---
      const pitchVar = 0.9 + Math.random() * 0.2;   // 0.9 – 1.1
      const gainVar = 0.7 + Math.random() * 0.3;    // 0.7 – 1.0

      // ---- 1. Noise burst (the "clack") ----
      const bufferLen = Math.floor(ctx.sampleRate * 0.06); // 60 ms
      const noiseBuffer = ctx.createBuffer(1, bufferLen, ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferLen; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferLen); // decay envelope baked in
      }

      const noiseSrc = ctx.createBufferSource();
      noiseSrc.buffer = noiseBuffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.value = 3500 * pitchVar;
      noiseFilter.Q.value = 0.8;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.35 * gainVar, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      noiseSrc.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noiseSrc.start(now);
      noiseSrc.stop(now + 0.06);

      // ---- 2. Low sine "thock" ----
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = 120 * pitchVar;

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.45 * gainVar, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);

      // ---- 3. High-frequency "tick" layer ----
      const tick = ctx.createOscillator();
      tick.type = "square";
      tick.frequency.value = 4000 * pitchVar;

      const tickGain = ctx.createGain();
      tickGain.gain.setValueAtTime(0.08 * gainVar, now);
      tickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

      tick.connect(tickGain);
      tickGain.connect(ctx.destination);
      tick.start(now);
      tick.stop(now + 0.015);
    };

    window.addEventListener("mousedown", playThock);
    return () => window.removeEventListener("mousedown", playThock);
  }, [getCtx]);

  return null; // renders nothing — purely behavioural
}
