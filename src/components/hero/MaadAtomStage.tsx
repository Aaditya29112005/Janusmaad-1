import React, { useEffect, useRef } from 'react';

/**
 * M.A.A.D Atom: hero right-hand visual from MaadAtom.jsx
 */

interface ServiceItem {
  label: string;
  spinZ: number;
  phase: number;
  tone: 'p' | 't';
}

const SERVICES: ServiceItem[] = [
  { label: "Marketing",     spinZ: 0,   phase: 0,   tone: "p" },
  { label: "Advertising",   spinZ: 36,  phase: 72,  tone: "t" },
  { label: "Analytics",     spinZ: 72,  phase: 144, tone: "p" },
  { label: "Data",          spinZ: 108, phase: 216, tone: "t" },
  { label: "AI Automation", spinZ: 144, phase: 288, tone: "p" },
];

const R = 222;      // orbit radius
const TILT = 60;    // how far each ring leans out of the screen
const SPEED = 24;   // degrees per second the electrons travel
const ZSPIN = 6;    // degrees per second the whole atom pinwheels
const BASE_X = -8;  // how far we look down on the atom
const SWAY = 9;     // degrees of gentle 3D sway either side
const F = 1500;     // perspective distance
const C = 310;      // centre of the 620px stage
const STEPS = 88;   // points sampled per ring
const RAD = Math.PI / 180;

const CSS = `
.maad-atom{position:relative;width:100%;max-width:760px;margin-inline:auto;aspect-ratio:1/1;overflow:visible;touch-action:pan-y;
  --ink:#0D1526;--cream:#F5F1E8;--teal:#48BE9C;--purple:#7B52A6;--orbit:#0D1526;
  font-family:"Space Grotesk",Inter,system-ui,sans-serif}
.maad-atom .stage{position:absolute;left:50%;top:50%;margin:-310px 0 0 -310px;width:620px;height:620px;transform-origin:center}

.maad-atom .orbits{position:absolute;inset:0;overflow:visible}
.maad-atom .orbits path{fill:none;stroke:var(--orbit);stroke-width:1.5;stroke-linecap:round}
.maad-atom .orbits.behind{z-index:1;opacity:.28}
.maad-atom .orbits.infront{z-index:6;opacity:.6}

.maad-atom .trace{position:absolute;inset:0;overflow:visible;opacity:.28;z-index:0}
.maad-atom .trace path{fill:none;stroke:var(--teal);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;
  stroke-dasharray:640;stroke-dashoffset:640;animation:maad-draw 12s ease-in-out infinite}
.maad-atom .trace .arrow{opacity:0;animation:maad-tip 12s ease-in-out infinite}
@keyframes maad-draw{0%{stroke-dashoffset:640;opacity:1}45%{stroke-dashoffset:0}82%{stroke-dashoffset:0;opacity:1}100%{stroke-dashoffset:0;opacity:0}}
@keyframes maad-tip{0%,44%{opacity:0}54%,82%{opacity:1}100%{opacity:0}}

.maad-atom .nucleus{position:absolute;left:50%;top:50%;width:196px;height:196px;margin:-98px 0 0 -98px;
  border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;z-index:5;
  background:radial-gradient(circle at 50% 38%, #FFFDF8 0%, var(--cream) 70%);
  box-shadow:0 0 0 1px rgba(13,21,38,.12), 0 26px 60px -30px rgba(13,21,38,.6)}
.maad-atom .nucleus::after{content:"";position:absolute;inset:-22px;border-radius:50%;
  border:1px solid rgba(13,21,38,.14);animation:maad-breathe 7s ease-in-out infinite}
@keyframes maad-breathe{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.05);opacity:.14}}
.maad-atom .nucleus .mark{width:74px;height:64px;object-fit:contain}
.maad-atom .nucleus .word{width:144px;object-fit:contain}

.maad-atom .chip{position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;gap:9px;
  white-space:nowrap;will-change:transform,opacity}
.maad-atom .chip i{width:15px;height:15px;border-radius:50%;background:var(--purple);box-shadow:0 0 0 6px rgba(123,82,166,.15)}
.maad-atom .chip i.t{background:var(--teal);box-shadow:0 0 0 6px rgba(72,190,156,.17)}
.maad-atom .chip span{font-size:22px;font-weight:600;letter-spacing:-.015em;color:var(--ink)}

@media (prefers-reduced-motion: reduce){
  .maad-atom .trace path{animation:none;stroke-dashoffset:0}
  .maad-atom .trace .arrow{animation:none;opacity:1}
  .maad-atom .nucleus::after{animation:none}}
`;

function project(u: number, rz: number, cw: number, sw: number, cx: number, sx: number) {
  const ct = Math.cos(TILT * RAD), st = Math.sin(TILT * RAD);
  const cz = Math.cos(rz * RAD), sz = Math.sin(rz * RAD);
  const x0 = R * Math.cos(u), y0 = R * Math.sin(u);
  const y1 = y0 * ct, z1 = y0 * st;
  const x2 = x0 * cz - y1 * sz, y2 = x0 * sz + y1 * cz;
  const x3 = x2 * cw + z1 * sw, z3 = -x2 * sw + z1 * cw;
  const y4 = y2 * cx - z3 * sx, z4 = y2 * sx + z3 * cx;
  const k = F / (F - z4);
  return { x: C + x3 * k, y: C + y4 * k, z: z4 };
}

interface MaadAtomProps {
  markSrc?: string;
  wordmarkSrc?: string;
  alt?: string;
  showTrace?: boolean;
}

export const MaadAtomStage: React.FC<MaadAtomProps> = ({
  markSrc = "/janusmaad-mark.png",
  wordmarkSrc = "/janusmaad-wordmark.png",
  alt = "Janusmaad Digital",
  showTrace = true,
}) => {
  const box = useRef<HTMLDivElement | null>(null);
  const stage = useRef<HTMLDivElement | null>(null);
  const backPaths = useRef<(SVGPathElement | null)[]>([]);
  const frontPaths = useRef<(SVGPathElement | null)[]>([]);
  const chips = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const fit = () => {
      if (stage.current) stage.current.style.transform = `scale(${Math.min(1.5, (el.clientWidth / 620) * 1.35)})`;
    };
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    fit();

    let wx = BASE_X, wy = 0, tx = 0, ty = 0, clock = 0, last = 0, raf = 0;

    const move = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      tx = -((e.clientY - b.top) / b.height - 0.5) * 14;
      ty = ((e.clientX - b.left) / b.width - 0.5) * 18;
    };
    const leave = () => { tx = 0; ty = 0; };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);

    const frame = (now: number) => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      if (!reduce) clock += dt;

      const spinZ = reduce ? 0 : clock * ZSPIN;
      const swayY = reduce ? 0 : Math.sin(clock * 0.22) * SWAY;
      const swayX = reduce ? 0 : Math.sin(clock * 0.17) * (SWAY * 0.35);
      wy += ((ty + swayY) - wy) * 0.07;
      wx += ((tx + swayX + BASE_X) - wx) * 0.07;

      const cw = Math.cos(wy * RAD), sw = Math.sin(wy * RAD);
      const cx = Math.cos(wx * RAD), sx = Math.sin(wx * RAD);

      SERVICES.forEach((s, i) => {
        const rz = s.spinZ + spinZ;
        let fp = "", bp = "", wasFront: boolean | null = null;
        for (let n = 0; n <= STEPS; n++) {
          const p = project((n / STEPS) * Math.PI * 2, rz, cw, sw, cx, sx);
          const xy = `${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
          const isFront = p.z >= 0;
          if (isFront) {
            if (wasFront === false) bp += `L${xy}`;
            fp += (wasFront === true ? "L" : "M") + xy;
          } else {
            if (wasFront === true) fp += `L${xy}`;
            bp += (wasFront === false ? "L" : "M") + xy;
          }
          wasFront = isFront;
        }
        frontPaths.current[i]?.setAttribute("d", fp);
        backPaths.current[i]?.setAttribute("d", bp);

        const e2 = project((s.phase + (reduce ? 0 : clock * SPEED)) * RAD, rz, cw, sw, cx, sx);
        const depth = e2.z / R;
        const chip = chips.current[i];
        if (chip) {
          chip.style.transform =
            `translate(${e2.x.toFixed(1)}px,${e2.y.toFixed(1)}px) translate(-50%,-50%) scale(${(0.92 + depth * 0.12).toFixed(3)})`;
          chip.style.opacity = (0.7 + depth * 0.3).toFixed(3);
          chip.style.zIndex = depth >= 0 ? '9' : '2';
          const dist = Math.hypot(e2.x - C, e2.y - C);
          if (chip.lastChild) {
            (chip.lastChild as HTMLElement).style.opacity = Math.max(0, Math.min(1, (dist - 118) / 52)).toFixed(3);
          }
        }
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="maad-atom" ref={box}>
      <style>{CSS}</style>
      <div className="stage" ref={stage}>

        {showTrace && (
          <svg className="trace" viewBox="0 0 620 620" aria-hidden="true">
            <path d="M 132 508 L 196 484 L 250 502 L 320 434 L 374 452 L 438 366" />
            <path className="arrow" d="M 414 372 L 440 362 L 448 390" />
          </svg>
        )}

        <svg className="orbits behind" viewBox="0 0 620 620" aria-hidden="true">
          {SERVICES.map((s, i) => <path key={s.label} ref={(n) => { backPaths.current[i] = n; }} />)}
        </svg>

        <div className="nucleus">
          <img className="mark" src={markSrc} alt="" />
          <img className="word" src={wordmarkSrc} alt={alt} />
        </div>

        <svg className="orbits infront" viewBox="0 0 620 620" aria-hidden="true">
          {SERVICES.map((s, i) => <path key={s.label} ref={(n) => { frontPaths.current[i] = n; }} />)}
        </svg>

        {SERVICES.map((s, i) => (
          <div className="chip" key={s.label} ref={(n) => { chips.current[i] = n; }}>
            <i className={s.tone === "t" ? "t" : undefined} />
            <span>{s.label}</span>
          </div>
        ))}

      </div>
    </div>
  );
};
