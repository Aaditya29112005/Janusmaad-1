import React, { useEffect, useRef } from 'react';

interface ServiceItem {
  id: string;
  label: string;
  spinZ: number;
  phase: number;
  tone: 'p' | 't';
  tabIndex?: number;
}

const SERVICES: ServiceItem[] = [
  { id: 'perf', label: 'Performance Marketing', spinZ: 14, phase: 0, tone: 't', tabIndex: 0 },
  { id: 'seo', label: 'SEO (Search Everywhere)', spinZ: 58, phase: 90, tone: 'p', tabIndex: 1 },
  { id: 'smm', label: 'SMM (Social Media)', spinZ: 102, phase: 180, tone: 't', tabIndex: 2 },
  { id: 'cro', label: 'CRO & Funnels', spinZ: 146, phase: 270, tone: 'p' },
];

const R = 210;
const TILT = 68;
const SPEED = 0.55;
const ZSPIN = 0.12;
const SWAY = 9;
const BASE_X = 18;
const F = 1500;
const C = 310;
const STEPS = 88;
const rad = Math.PI / 180;

interface MaadAtomStageProps {
  activeTab?: number;
  onSelectTab?: (tabIndex: number) => void;
}

export const MaadAtomStage: React.FC<MaadAtomStageProps> = ({ activeTab, onSelectTab }) => {
  const atomRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const behindRef = useRef<SVGSVGElement | null>(null);
  const infrontRef = useRef<SVGSVGElement | null>(null);
  const chipsHostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const atom = atomRef.current;
    const stage = stageRef.current;
    const behind = behindRef.current;
    const infront = infrontRef.current;
    const chipHost = chipsHostRef.current;
    if (!atom || !stage || !behind || !infront || !chipHost) return;

    behind.innerHTML = '';
    infront.innerHTML = '';
    chipHost.innerHTML = '';

    const createPath = (host: SVGSVGElement) => {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      host.appendChild(p);
      return p;
    };

    const rings = SERVICES.map((s) => {
      const chip = document.createElement('div');
      chip.className = `chip ${s.tabIndex !== undefined && activeTab === s.tabIndex ? 'active-chip' : ''}`;
      chip.dataset.tabIndex = s.tabIndex !== undefined ? String(s.tabIndex) : '';
      chip.style.position = 'absolute';
      chip.style.left = '0';
      chip.style.top = '0';
      chip.style.display = 'flex';
      chip.style.flexDirection = 'column';
      chip.style.alignItems = 'center';
      chip.style.gap = '6px';
      chip.style.whiteSpace = 'nowrap';
      chip.style.willChange = 'transform, opacity';
      chip.style.cursor = s.tabIndex !== undefined ? 'pointer' : 'default';
      chip.style.pointerEvents = 'auto';

      chip.innerHTML = `
        <i class="dot ${s.tone === 't' ? 't' : ''}"></i>
        <span class="txt">${s.label}</span>
      `;

      if (s.tabIndex !== undefined && onSelectTab) {
        chip.addEventListener('click', () => onSelectTab(s.tabIndex!));
      }

      chipHost.appendChild(chip);

      return {
        cfg: s,
        back: createPath(behind),
        front: createPath(infront),
        chip: chip,
        txt: chip.querySelector('.txt') as HTMLSpanElement,
      };
    });

    let wx = BASE_X, wy = 0, tx = 0, ty = 0, clock = 0, last = 0;
    let animId: number;

    const handlePointerMove = (e: PointerEvent) => {
      const b = atom.getBoundingClientRect();
      tx = -((e.clientY - b.top) / b.height - 0.5) * 14;
      ty = ((e.clientX - b.left) / b.width - 0.5) * 18;
    };

    const handlePointerLeave = () => {
      tx = 0;
      ty = 0;
    };

    atom.addEventListener('pointermove', handlePointerMove);
    atom.addEventListener('pointerleave', handlePointerLeave);

    function project(u: number, rz: number, cw: number, sw: number, cx: number, sx: number) {
      const ct = Math.cos(TILT * rad), st = Math.sin(TILT * rad);
      const cz = Math.cos(rz * rad), sz = Math.sin(rz * rad);
      const x0 = R * Math.cos(u), y0 = R * Math.sin(u);
      const y1 = y0 * ct, z1 = y0 * st;
      const x2 = x0 * cz - y1 * sz, y2 = x0 * sz + y1 * cz;
      const x3 = x2 * cw + z1 * sw, z3 = -x2 * sw + z1 * cw;
      const y4 = y2 * cx - z3 * sx, z4 = y2 * sx + z3 * cx;
      const k = F / (F - z4);
      return { x: C + x3 * k, y: C + y4 * k, z: z4 };
    }

    function frame(now: number) {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      clock += dt;

      const spinZ = clock * ZSPIN;
      const swayY = Math.sin(clock * 0.22) * SWAY;
      const swayX = Math.sin(clock * 0.17) * (SWAY * 0.35);

      wy += (ty + swayY - wy) * 0.07;
      wx += (tx + swayX + BASE_X - wx) * 0.07;

      const cw = Math.cos(wy * rad), sw = Math.sin(wy * rad);
      const cx = Math.cos(wx * rad), sx = Math.sin(wx * rad);

      for (let i = 0; i < rings.length; i++) {
        const r = rings[i];
        const s = r.cfg;
        const rz = s.spinZ + spinZ;
        let fp = '', bp = '';
        let wasFront: boolean | null = null;

        for (let n = 0; n <= STEPS; n++) {
          const p = project((n / STEPS) * Math.PI * 2, rz, cw, sw, cx, sx);
          const xy = `${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
          const isFront = p.z >= 0;
          if (isFront) {
            if (wasFront === false) bp += `L${xy}`;
            fp += `${wasFront === true ? 'L' : 'M'}${xy}`;
          } else {
            if (wasFront === true) fp += `L${xy}`;
            bp += `${wasFront === false ? 'L' : 'M'}${xy}`;
          }
          wasFront = isFront;
        }

        r.front.setAttribute('d', fp);
        r.back.setAttribute('d', bp);

        const e = project((s.phase + clock * SPEED) * rad, rz, cw, sw, cx, sx);
        const depth = e.z / R;
        r.chip.style.transform = `translate(${e.x.toFixed(1)}px, ${e.y.toFixed(1)}px) translate(-50%, -50%) scale(${(0.92 + depth * 0.12).toFixed(3)})`;
        r.chip.style.opacity = (0.7 + depth * 0.3).toFixed(3);
        r.chip.style.zIndex = depth >= 0 ? '9' : '2';

        const dist = Math.hypot(e.x - C, e.y - C);
        if (r.txt) {
          r.txt.style.opacity = Math.max(0, Math.min(1, (dist - 118) / 52)).toFixed(3);
        }
      }

      animId = requestAnimationFrame(frame);
    }

    animId = requestAnimationFrame(frame);

    const fit = () => {
      if (stage && atom) {
        stage.style.transform = `scale(${Math.min(1.15, atom.clientWidth / 620)})`;
      }
    };

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(atom);
    fit();

    return () => {
      cancelAnimationFrame(animId);
      atom.removeEventListener('pointermove', handlePointerMove);
      atom.removeEventListener('pointerleave', handlePointerLeave);
      resizeObserver.disconnect();
    };
  }, [activeTab, onSelectTab]);

  return (
    <div ref={atomRef} className="atom relative w-full aspect-square overflow-hidden touch-pan-y max-w-[620px] mx-auto select-none">
      <div ref={stageRef} className="stage absolute left-1/2 top-1/2 -ml-[310px] -mt-[310px] w-[620px] h-[620px] origin-center">
        {/* Growth Trace SVG Path */}
        <svg className="trace absolute inset-0 overflow-visible opacity-30 z-0 pointer-events-none" viewBox="0 0 620 620" aria-hidden="true">
          <path d="M 132 508 L 196 484 L 250 502 L 320 434 L 374 452 L 438 366" fill="none" stroke="#0E9C97" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path className="arrow" d="M 414 372 L 440 362 L 448 390" fill="none" stroke="#0E9C97" strokeWidth="1.8" />
        </svg>

        {/* Orbits behind */}
        <svg ref={behindRef} className="orbits behind absolute inset-0 overflow-visible z-1 opacity-30 pointer-events-none" viewBox="0 0 620 620" aria-hidden="true" />

        {/* Central Nucleus */}
        <div className="nucleus absolute left-1/2 top-1/2 w-[180px] h-[180px] -ml-[90px] -mt-[90px] rounded-full flex flex-col items-center justify-center gap-2 z-5 bg-radial from-white via-[#F6F3EC] to-[#EBE7DF] shadow-2xl border border-black/10">
          <div className="w-16 h-16 rounded-2xl bg-[#070B1A] flex items-center justify-center shadow-lg border border-teal/40 transform hover:scale-105 transition-transform duration-300">
            <span className="font-display font-extrabold text-2xl text-teal tracking-tighter">JM</span>
          </div>
          <span className="font-display font-bold text-xs tracking-widest text-ink uppercase">JANUSMAAD</span>
        </div>

        {/* Orbits infront */}
        <svg ref={infrontRef} className="orbits infront absolute inset-0 overflow-visible z-6 opacity-70 pointer-events-none" viewBox="0 0 620 620" aria-hidden="true" />

        {/* Floating Chips Host */}
        <div ref={chipsHostRef} className="chips-host absolute inset-0 pointer-events-auto z-10" />
      </div>

      <style>{`
        .orbits path {
          fill: none;
          stroke: #070B1A;
          stroke-width: 1.6px;
          stroke-linecap: round;
        }
        .chip .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #7B52A6;
          box-shadow: 0 0 0 6px rgba(123, 82, 166, 0.2);
        }
        .chip .dot.t {
          background: #0E9C97;
          box-shadow: 0 0 0 6px rgba(14, 156, 151, 0.22);
        }
        .chip .txt {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #070B1A;
          background: rgba(255, 255, 255, 0.92);
          padding: 4px 12px;
          border-radius: 12px;
          border: 1px solid rgba(7, 11, 26, 0.12);
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .chip.active-chip .txt {
          background: #070B1A;
          color: #FFFFFF;
          border-color: #0E9C97;
          box-shadow: 0 6px 20px rgba(14, 156, 151, 0.4);
          transform: scale(1.05);
        }
        .nucleus::after {
          content: "";
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          border: 1px solid rgba(14, 156, 151, 0.25);
          animation: nucleusBreathe 6s ease-in-out infinite;
        }
        @keyframes nucleusBreathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.06); opacity: 0.15; }
        }
      `}</style>
    </div>
  );
};
