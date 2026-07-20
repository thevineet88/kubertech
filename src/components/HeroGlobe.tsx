"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* Wireframe icosphere + particle globe. Ambient rotation only, no pointer
   interaction. Grows and fades into a persistent ambient wireframe border
   as the user scrolls past the hero, then holds. Fixed full-viewport
   canvas that stays behind every later section. */

const POINT_VERT = `
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aSeed;
  uniform float uPixelRatio;
  uniform float uTime;
  uniform float uPointFade;
  uniform vec3 uHover;
  uniform float uHoverActive;
  uniform vec3 uRippleOrigin;
  uniform float uRippleTime;
  uniform vec3 uCollOrigin[3];
  uniform float uCollT[3];
  varying vec3 vColor;
  varying float vAlpha;
  varying float vGlow;
  void main(){
    vec3 flow = vec3(
      sin(uTime * 0.45 + aSeed * 6.28),
      cos(uTime * 0.37 + aSeed * 7.1),
      sin(uTime * 0.31 + aSeed * 5.3)
    ) * 0.045;
    vec3 p = position + flow;
    float twinkle = 0.85 + 0.2 * sin(uTime * 1.6 + position.x * 4.0 + position.y * 3.0);
    vColor = aColor;
    vAlpha = twinkle * uPointFade;

    float hoverGlow = uHoverActive * smoothstep(0.9, 0.0, distance(p, uHover));
    float rippleGlow = 0.0;
    if (uRippleTime >= 0.0 && uRippleTime < 1.6) {
      float ringR = uRippleTime * 3.0;
      float rd = abs(distance(p, uRippleOrigin) - ringR);
      rippleGlow = smoothstep(0.35, 0.0, rd) * (1.0 - uRippleTime / 1.6);
    }

    // collision events: bright flash at the impact point, then an expanding
    // shell of glow washing through nearby particles
    float collGlow = 0.0;
    for (int i = 0; i < 3; i++) {
      float ct = uCollT[i];
      if (ct >= 0.0 && ct < 1.4) {
        float d = distance(p, uCollOrigin[i]);
        float flash = smoothstep(0.55, 0.0, d) * smoothstep(0.45, 0.0, ct);
        float shellR = ct * 2.2;
        float shell = smoothstep(0.3, 0.0, abs(d - shellR)) * (1.0 - ct / 1.4);
        collGlow += flash * 1.6 + shell * 0.9;
      }
    }
    vGlow = hoverGlow * 0.9 + rippleGlow * 1.3 + collGlow;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = aSize * uPixelRatio * (46.0 / -mv.z) * (1.0 + vGlow * 0.6);
    gl_Position = projectionMatrix * mv;
  }`;
const POINT_FRAG = `
  varying vec3 vColor;
  varying float vAlpha;
  varying float vGlow;
  void main(){
    float d = length(gl_PointCoord - 0.5);
    float core = smoothstep(0.25, 0.0, d);
    float halo = smoothstep(0.5, 0.08, d);
    float a = pow(halo, 0.55);
    if (a <= 0.001) discard;
    a = min(1.0, a * (1.0 + vGlow * 1.6));
    vec3 col = vColor + core * 0.9 + vGlow * vec3(0.55, 0.42, 0.95) * 0.85;
    gl_FragColor = vec4(col, a * vAlpha);
  }`;
const LINE_VERT = `
  varying vec3 vPos;
  void main(){
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;
const LINE_FRAG = `
  uniform float uBase;
  uniform float uGlow;
  uniform vec3 uCollOrigin[3];
  uniform float uCollT[3];
  varying vec3 vPos;
  void main(){
    vec3 base = vec3(0.62, 0.72, 0.88);

    // skeleton lights up locally around each collision, then fades out
    float local = 0.0;
    for (int i = 0; i < 3; i++) {
      float ct = uCollT[i];
      if (ct >= 0.0 && ct < 1.4) {
        float d = distance(vPos, uCollOrigin[i]);
        local += smoothstep(1.5, 0.0, d) * sin(min(1.0, ct / 1.4) * 3.14159) ;
      }
    }
    float a = uBase + uGlow * 0.55 + local * 0.5;
    vec3 col = base + local * vec3(0.35, 0.28, 0.6);
    gl_FragColor = vec4(col, a);
  }`;

export default function HeroGlobe() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const POINT_COUNT = isMobile ? 1400 : 9000;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 9.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    const pr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.35 : 2);
    renderer.setPixelRatio(pr);
    host.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block";

    const group = new THREE.Group();
    scene.add(group);

    const RADIUS = 2.3;
    const ico = new THREE.IcosahedronGeometry(RADIUS, 3);
    const wireGeo = new THREE.WireframeGeometry(ico);
    const collOrigins = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
    const collTimes = new Float32Array([-1, -1, -1]);

    const wireMat = new THREE.ShaderMaterial({
      uniforms: {
        uBase: { value: 0.05 },
        uGlow: { value: 0 },
        uCollOrigin: { value: collOrigins },
        uCollT: { value: collTimes },
      },
      vertexShader: LINE_VERT,
      fragmentShader: LINE_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    group.add(new THREE.LineSegments(wireGeo, wireMat));

    const hotCol = new THREE.Color(0xff5a3c);
    const hotCol2 = new THREE.Color(0xffb020);
    const hotspots = [
      { dir: new THREE.Vector3(0.55, 0.62, 0.4).normalize(), r: 0.85, col: hotCol },
      { dir: new THREE.Vector3(-0.6, -0.35, 0.55).normalize(), r: 0.55, col: hotCol2 },
    ];
    const tintNear = (v3: THREE.Vector3, baseColor: THREE.Color) => {
      let color = baseColor;
      for (const h of hotspots) {
        const d = v3.distanceTo(h.dir);
        if (d < h.r) color = color.clone().lerp(h.col, Math.pow(1 - d / h.r, 1.4));
      }
      return color;
    };

    const N = POINT_COUNT;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const siz = new Float32Array(N);
    const seed = new Float32Array(N);
    const bright = new THREE.Color(0xffffff);
    const mid = new THREE.Color(0xf1f1f4);
    const v = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      const u = Math.random();
      const w = Math.random();
      const r = RADIUS * 0.92 * Math.cbrt(Math.random());
      const th = u * Math.PI * 2;
      const ph = Math.acos(2 * w - 1);
      const x = r * Math.sin(ph) * Math.cos(th);
      const y = r * Math.sin(ph) * Math.sin(th);
      const z = r * Math.cos(ph);
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      v.set(x, y, z).normalize();
      const isSparkle = Math.random() > 0.8;
      const baseC = Math.random() > 0.4 ? bright : mid;
      const c = tintNear(v, baseC);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
      siz[i] = isSparkle ? 1.0 + Math.random() * 0.85 : 0.35 + Math.random() * 0.45;
      seed[i] = Math.random();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(siz, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    const pmat = new THREE.ShaderMaterial({
      uniforms: {
        uPixelRatio: { value: pr },
        uTime: { value: 0 },
        uPointFade: { value: 1 },
        uHover: { value: new THREE.Vector3() },
        uHoverActive: { value: 0 },
        uRippleOrigin: { value: new THREE.Vector3() },
        uRippleTime: { value: -1 },
        uCollOrigin: { value: collOrigins },
        uCollT: { value: collTimes },
      },
      vertexShader: POINT_VERT,
      fragmentShader: POINT_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
    group.add(new THREE.Points(geo, pmat));

    // Reusable expanding halo rings: camera-facing circles born at the globe's
    // silhouette that sweep outward around the entire sphere and fade.
    const RING_POOL = 4;
    const ringPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 96; i++) {
      const a = (i / 96) * Math.PI * 2;
      ringPts.push(new THREE.Vector3(Math.cos(a), Math.sin(a), 0));
    }
    const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPts);
    interface Ring {
      line: THREE.Line;
      mat: THREE.LineBasicMaterial;
      born: number;
    }
    const rings: Ring[] = [];
    for (let i = 0; i < RING_POOL; i++) {
      const mat = new THREE.LineBasicMaterial({
        color: 0x9f7cf6,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const line = new THREE.Line(ringGeo, mat);
      line.visible = false;
      // rings live on the scene (not the rotating group) so they stay a clean
      // halo around the whole globe regardless of its rotation
      scene.add(line);
      rings.push({ line, mat, born: -1 });
    }
    const RING_LIFE = 2.4;
    let ringCursor = 0;
    const emitRing = () => {
      const r = rings[ringCursor];
      ringCursor = (ringCursor + 1) % RING_POOL;
      r.born = performance.now();
      r.line.visible = true;
    };

    // Roamer particles: a handful of particles that genuinely travel through
    // the globe. When two pass close to each other, that IS the collision —
    // flash, local skeleton glow, halo ring. Nothing is on a timer.
    const ROAMERS = 24;
    const ROAM_R = RADIUS * 0.88;
    const roamPos: THREE.Vector3[] = [];
    const roamVel: THREE.Vector3[] = [];
    for (let i = 0; i < ROAMERS; i++) {
      roamPos.push(new THREE.Vector3().randomDirection().multiplyScalar(ROAM_R * Math.cbrt(Math.random())));
      roamVel.push(new THREE.Vector3().randomDirection().multiplyScalar(0.55 + Math.random() * 0.5));
    }
    const COLLIDE_DIST = 0.24;
    const collStarts = new Float32Array([-1, -1, -1]);
    let collCursor = 0;
    const registerCollision = (at: THREE.Vector3) => {
      collOrigins[collCursor].copy(at);
      collStarts[collCursor] = performance.now();
      collCursor = (collCursor + 1) % 3;
      emitRing();
    };
    const tmpV = new THREE.Vector3();
    let nextCollAllowedAt = performance.now() + 1500;

    // roamers ride the tail of the particle buffer: bigger, brighter points
    for (let i = 0; i < ROAMERS; i++) {
      const idx = N - ROAMERS + i;
      siz[idx] = 1.5 + Math.random() * 0.7;
      col[idx * 3] = 0.85;
      col[idx * 3 + 1] = 0.78;
      col[idx * 3 + 2] = 1.0;
      pos[idx * 3] = roamPos[i].x;
      pos[idx * 3 + 1] = roamPos[i].y;
      pos[idx * 3 + 2] = roamPos[i].z;
    }
    geo.attributes.aSize.needsUpdate = true;
    geo.attributes.aColor.needsUpdate = true;
    geo.attributes.position.needsUpdate = true;

    // invisible sphere used purely for raycasting hover/click against the globe
    const hitSphere = new THREE.Mesh(
      new THREE.SphereGeometry(RADIUS, 24, 24),
      new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }),
    );
    group.add(hitSphere);

    const raycaster = new THREE.Raycaster();
    const pointerNDC = new THREE.Vector2(0, 0);
    let hoverLocal: THREE.Vector3 | null = null;
    let rippleOrigin: THREE.Vector3 | null = null;
    let rippleStart = -1;

    const castAt = (clientX: number, clientY: number) => {
      pointerNDC.x = (clientX / window.innerWidth) * 2 - 1;
      pointerNDC.y = -(clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(pointerNDC, camera);
      const hit = raycaster.intersectObject(hitSphere)[0];
      if (!hit) return null;
      return hitSphere.worldToLocal(hit.point.clone());
    };

    const onMove = (e: MouseEvent) => {
      hoverLocal = castAt(e.clientX, e.clientY);
    };
    const onClick = (e: MouseEvent) => {
      const hit = castAt(e.clientX, e.clientY);
      if (hit) {
        rippleOrigin = hit;
        rippleStart = performance.now();
        clickBoostUntil = performance.now() + 2500;
      }
    };
    if (!isMobile) {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("click", onClick, { passive: true });
    }

    const resize = () => {
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    let visible = true;
    const onVisibility = () => {
      visible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);

    const SCROLL_SPAN = () => window.innerHeight * 1.3;
    const start = performance.now();
    let raf = 0;
    let settled = false;
    let lastT = start;
    let rotY = 0;
    let rotAngle = 0;
    let flowTime = 0;
    let wireGlow = 0;
    let clickBoostUntil = -1;
    let nextAutoPulse = performance.now() + 3000 + Math.random() * 2500;
    let autoPulseStart = -1;
    const AUTO_PULSE_DURATION = 2200;
    const AUTO_PULSE_PEAK = 0.4;

    const tick = () => {
      const now = performance.now();
      const dt = (now - lastT) / 1000;
      lastT = now;

      const scrollProgress = Math.min(1, Math.max(0, window.scrollY / SCROLL_SPAN()));
      const scale = 1 + scrollProgress * (isMobile ? 1.05 : 2.4);
      group.scale.setScalar(scale);
      pmat.uniforms.uPointFade.value = Math.max(0, 1 - scrollProgress * 1.05);
      wireMat.uniforms.uBase.value = 0.04 + scrollProgress * 0.06;

      // rotation slows to near-still as the globe settles into its ambient skeleton state
      const speedFactor = 1 - scrollProgress * 0.97;
      if (!reduced) {
        rotY += dt * 0.05 * speedFactor;
        rotAngle += dt * 0.03 * speedFactor;
      }
      const parallaxY = reduced || isMobile ? 0 : pointerNDC.x * 0.08;
      const parallaxX = reduced || isMobile ? 0 : -pointerNDC.y * 0.05;
      group.rotation.y = rotY + parallaxY;
      group.rotation.x = Math.sin(rotAngle) * 0.06 + parallaxX;

      if (!reduced) flowTime += dt * 1.15;
      pmat.uniforms.uTime.value = reduced ? 0 : flowTime;

      // roamer physics: free flight inside the sphere, bounce off the shell —
      // constant natural speed, never altered by collision events
      if (!reduced) {
        const step = Math.min(dt, 0.05) * 0.85;
        for (let i = 0; i < ROAMERS; i++) {
          roamPos[i].addScaledVector(roamVel[i], step);
          const len = roamPos[i].length();
          if (len > ROAM_R) {
            tmpV.copy(roamPos[i]).divideScalar(len);
            roamVel[i].addScaledVector(tmpV, -2 * roamVel[i].dot(tmpV));
            roamPos[i].setLength(ROAM_R);
          }
        }
        // Detect a crossing only to trigger the visual — never touch position
        // or velocity here. Roamers keep drifting exactly as they were; the
        // "collision" is purely an observed event, not a physics response.
        // Gated to one collision globally every ~2-3s so effects never overlap.
        if (now >= nextCollAllowedAt && pmat.uniforms.uPointFade.value > 0.15) {
          outer: for (let i = 0; i < ROAMERS; i++) {
            for (let j = i + 1; j < ROAMERS; j++) {
              tmpV.subVectors(roamPos[i], roamPos[j]);
              if (tmpV.length() < COLLIDE_DIST) {
                registerCollision(tmpV.copy(roamPos[i]).add(roamPos[j]).multiplyScalar(0.5));
                nextCollAllowedAt = now + 2000 + Math.random() * 1000;
                break outer;
              }
            }
          }
        }
        // roamers are the tail of the particle buffer — write their positions back
        const posAttr = geo.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < ROAMERS; i++) {
          const idx = N - ROAMERS + i;
          posAttr.setXYZ(idx, roamPos[i].x, roamPos[i].y, roamPos[i].z);
        }
        posAttr.needsUpdate = true;
      }
      for (let i = 0; i < 3; i++) {
        collTimes[i] = collStarts[i] < 0 ? -1 : (now - collStarts[i]) / 1000;
        if (collTimes[i] > 1.4) {
          collStarts[i] = -1;
          collTimes[i] = -1;
        }
      }

      // expanding rings emitted at each collision
      for (const r of rings) {
        if (r.born < 0) continue;
        const life = (now - r.born) / 1000 / RING_LIFE;
        if (life >= 1) {
          r.born = -1;
          r.line.visible = false;
          r.mat.opacity = 0;
          continue;
        }
        const eased = 1 - Math.pow(1 - life, 2.2);
        // halo spans the whole globe: born at the silhouette, sweeps outward
        r.line.scale.setScalar((RADIUS + eased * RADIUS * 1.35) * group.scale.x);
        r.mat.opacity = 0.35 * (1 - life) * pmat.uniforms.uPointFade.value;
      }

      if (hoverLocal) {
        pmat.uniforms.uHover.value.copy(hoverLocal);
        pmat.uniforms.uHoverActive.value = 1;
      } else {
        pmat.uniforms.uHoverActive.value = 0;
      }
      if (rippleOrigin && rippleStart >= 0) {
        const rt = (performance.now() - rippleStart) / 1000;
        if (rt < 1.6) {
          pmat.uniforms.uRippleOrigin.value.copy(rippleOrigin);
          pmat.uniforms.uRippleTime.value = rt;
        } else {
          pmat.uniforms.uRippleTime.value = -1;
          rippleStart = -1;
        }
      }

      // whole-skeleton glow: snaps up on hover or click, holds and fades over a few seconds
      let ambientGlow = 0;
      if (!reduced) {
        if (autoPulseStart < 0 && now >= nextAutoPulse) {
          autoPulseStart = now;
          nextAutoPulse = now + 5000 + Math.random() * 4000;
        }
        if (autoPulseStart >= 0) {
          const pt = now - autoPulseStart;
          if (pt < AUTO_PULSE_DURATION) {
            const k = pt / AUTO_PULSE_DURATION;
            ambientGlow = AUTO_PULSE_PEAK * Math.sin(k * Math.PI);
          } else {
            autoPulseStart = -1;
          }
        }
      }
      if (clickBoostUntil > 0 && now < clickBoostUntil) {
        wireGlow = 1;
      } else {
        clickBoostUntil = -1;
        const target = hoverLocal ? 1 : ambientGlow;
        const rate = target > wireGlow ? 8 : 0.35;
        wireGlow += (target - wireGlow) * Math.min(1, dt * rate);
      }
      wireMat.uniforms.uGlow.value = wireGlow;

      if (visible) renderer.render(scene, camera);

      // once settled (scroll maxed + reduced motion, nothing changes) skip further frames
      settled = reduced && scrollProgress >= 1;
      if (!settled) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (!isMobile) {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("click", onClick);
      }
      renderer.dispose();
      ringGeo.dispose();
      for (const r of rings) r.mat.dispose();
      geo.dispose();
      wireGeo.dispose();
      pmat.dispose();
      wireMat.dispose();
      hitSphere.geometry.dispose();
      (hitSphere.material as THREE.Material).dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
