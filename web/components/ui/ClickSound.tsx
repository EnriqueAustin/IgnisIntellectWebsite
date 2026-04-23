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
    const DELAY_MS = 250; // small delay before the sound fires

    const scheduleThock = () => {
      setTimeout(() => {
        const ctx = getCtx();
        const now = ctx.currentTime;

        // --- slight random variation ---
        const pitchVar = 0.95 + Math.random() * 0.1;  // 0.95 – 1.05
        const gainVar  = 0.5 + Math.random() * 0.2;   // 0.5 – 0.7  (softer)

        // ---- 1. Noise burst (the "click") – shorter & higher ----
        const bufferLen = Math.floor(ctx.sampleRate * 0.025); // 25 ms (was 60)
        const noiseBuffer = ctx.createBuffer(1, bufferLen, ctx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferLen; i++) {
          data[i] = (Math.random() * 2 - 1) * (1 - i / bufferLen);
        }

        const noiseSrc = ctx.createBufferSource();
        noiseSrc.buffer = noiseBuffer;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = "bandpass";
        noiseFilter.frequency.value = 5500 * pitchVar; // higher centre freq
        noiseFilter.Q.value = 1.2;

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.15 * gainVar, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

        noiseSrc.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        noiseSrc.start(now);
        noiseSrc.stop(now + 0.025);

        // ---- 2. Subtle mid-tone tap (reduced low-end) ----
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = 320 * pitchVar; // was 120 – much less bass

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.08 * gainVar, now); // was 0.45 – way quieter
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        osc.connect(oscGain);
        oscGain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.03);

        // ---- 3. High-frequency "tick" – crisp snap ----
        const tick = ctx.createOscillator();
        tick.type = "triangle"; // softer than square
        tick.frequency.value = 6000 * pitchVar; // higher pitch

        const tickGain = ctx.createGain();
        tickGain.gain.setValueAtTime(0.06 * gainVar, now);
        tickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.01);

        tick.connect(tickGain);
        tickGain.connect(ctx.destination);
        tick.start(now);
        tick.stop(now + 0.01);
      }, DELAY_MS);
    };

    window.addEventListener("mousedown", scheduleThock);
    return () => window.removeEventListener("mousedown", scheduleThock);
  }, [getCtx]);

  return null; // renders nothing — purely behavioural
}
