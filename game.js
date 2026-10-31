import*as n from"three";var Me=[()=>{},e=>{e.beginPath(),e.arc(.5,.5,.09,0,7),e.fill()},e=>{e.fillRect(.44,.3,.12,.4),e.fillRect(.3,.44,.4,.12)},e=>{e.beginPath(),e.moveTo(.32,.32),e.lineTo(.68,.68),e.moveTo(.68,.32),e.lineTo(.32,.68),e.stroke()},e=>{e.beginPath(),e.arc(.5,.5,.22,0,7),e.stroke()},e=>{e.beginPath(),e.arc(.18,.5,.26,-.9,.9),e.stroke(),e.beginPath(),e.arc(.82,.5,.26,Math.PI-.9,Math.PI+.9),e.stroke()},e=>{e.beginPath(),e.moveTo(.5,.2),e.lineTo(.8,.5),e.lineTo(.5,.8),e.lineTo(.2,.5),e.closePath(),e.stroke()},e=>{e.beginPath(),e.ellipse(.5,.5,.22,.17,0,0,7),e.stroke(),e.beginPath(),e.moveTo(.5,.18),e.lineTo(.5,.82),e.stroke()},e=>{e.beginPath(),e.arc(.5,.56,.12,0,7),e.fill(),e.beginPath(),e.moveTo(.5,.44),e.lineTo(.5,.16),e.moveTo(.4,.62),e.lineTo(.18,.82),e.moveTo(.6,.62),e.lineTo(.82,.82),e.stroke()},e=>{e.beginPath(),e.moveTo(.24,.22),e.lineTo(.76,.22),e.lineTo(.5,.5),e.closePath(),e.moveTo(.24,.78),e.lineTo(.76,.78),e.lineTo(.5,.5),e.closePath(),e.fill()},e=>{e.beginPath(),e.moveTo(.24,.24),e.quadraticCurveTo(.24,.58,.5,.58),e.quadraticCurveTo(.76,.58,.76,.24),e.moveTo(.5,.18),e.lineTo(.5,.84),e.moveTo(.36,.84),e.lineTo(.64,.84),e.stroke()},e=>{e.beginPath(),e.moveTo(.5,.86),e.lineTo(.5,.52),e.lineTo(.26,.24),e.moveTo(.5,.52),e.lineTo(.74,.24),e.stroke(),e.beginPath(),e.arc(.26,.22,.08,0,7),e.arc(.74,.22,.08,0,7),e.fill(),e.beginPath(),e.arc(.5,.52,.08,0,7),e.fill()},e=>{e.beginPath(),e.moveTo(.22,.22),e.lineTo(.42,.22),e.lineTo(.5,.32),e.lineTo(.58,.22),e.lineTo(.78,.22),e.lineTo(.78,.78),e.lineTo(.58,.78),e.lineTo(.5,.68),e.lineTo(.42,.78),e.lineTo(.22,.78),e.closePath(),e.fill()},e=>{e.beginPath(),e.moveTo(.5,.14),e.lineTo(.86,.5),e.lineTo(.5,.86),e.lineTo(.14,.5),e.closePath(),e.fill()},e=>{e.beginPath();for(let x=0;x<8;x++){let G=x/8*Math.PI*2,y=x%2?.14:.4;e.lineTo(.5+Math.cos(G)*y,.5+Math.sin(G)*y)}e.closePath(),e.fill()},e=>{e.beginPath(),e.moveTo(.26,.14),e.arcTo(.86,.14,.86,.86,.12),e.arcTo(.86,.86,.14,.86,.12),e.arcTo(.14,.86,.14,.14,.12),e.arcTo(.14,.14,.86,.14,.12),e.closePath(),e.fill()}],pt=Me.length;function Pt(e,x,G,y,r,v=.085){e.save(),e.translate(G,y),e.scale(r,r),e.lineWidth=v,e.lineCap="round",e.lineJoin="round",Me[x](e),e.restore()}function Je(e){let x=document.createElement("canvas");x.width=e*Me.length,x.height=e;let G=x.getContext("2d");G.fillStyle="#fff",G.strokeStyle="#fff";let y=e<12?.13:.1;for(let r=0;r<Me.length;r++)Pt(G,r,r*e,0,e,y);return x}function mt(e=24){let x=Je(e),G=x.getContext("2d").getImageData(0,0,x.width,x.height).data;return Me.map((r,v)=>{let A=0;for(let f=0;f<e;f++)for(let C=0;C<e;C++)A+=G[(f*x.width+v*e+C)*4+3];return[v,A]}).sort((r,v)=>r[1]-v[1]).map(r=>r[0])}var pe=Math.PI*2,Ge=40,ke=320,_e=24;function Ze(e){return()=>{e|=0,e=e+1831565813|0;let x=Math.imul(e^e>>>15,1|e);return x=x+Math.imul(x^x>>>7,61|x)^x,((x^x>>>14)>>>0)/4294967296}}function At(e,x=!1,G=!1){let y=Ze(e),r=(i,u)=>i+(u-i)*y(),v=(i,u,h)=>new n.Vector3(i,u,h),A=[],f=[],C=new n.CatmullRomCurve3([v(-.82,-.34,4.6),v(-.7,-.28,2.2),v(-.1,-.7,-1.2),v(.9,-1.5,-4.6),v(-.3,-2.3,-8.4),v(.7,-3.2,-12.2),v(-.4,-4.2,-16.2),v(-.8,-4.9,-19.6),v(-1.6,-5.1,-21.6)],!1,"centripetal",.5),q=(i,u,h,l,T,R,E,w)=>{let M=f.length;return f.push({a:u,b:h,len:u.distanceTo(h),w0:l,w1:T,d0:R,d1:R+u.distanceTo(h),nrn:i.id,parent:E,kids:[],axon:w,cap0:E<0?1:0,cap1:1}),E>=0&&(f[E].kids.push(M),f[E].cap1=0),M},ae=i=>{let u=y()*pe,h=(y()*2-1)*i,l=Math.sqrt(Math.max(0,1-h*h));return v(Math.cos(u)*l,Math.sin(u)*l,h).normalize()};function te(i,u,h,l,T,R,E,w,M){let W=.055*i.scale,K=Math.max(2,Math.round(l/W)),$=u.clone(),se=h.clone(),N=v(r(-1,1),r(-1,1),r(-1,1)*M).multiplyScalar(.06),D=w;for(let U=0;U<K;U++){se.add(v(r(-1,1),r(-1,1),r(-1,1)*M).multiplyScalar(.2)).add(N).normalize();let I=$.clone().addScaledVector(se,l/K),ee=U/K,j=(U+1)/K;D=q(i,$,I,T*(1-.42*ee),T*(1-.42*j),E,D,!1),E+=l/K,$=I}if(i.maxD=Math.max(i.maxD,E),R>0){let U=y()<.2?3:2;for(let I=0;I<U;I++){let ee=v(0,0,0).crossVectors(se,ae(1)).normalize(),j=se.clone().applyAxisAngle(ee,r(.32,.78)*(I%2?1:-1));te(i,$,j,l*r(.6,.8),T*r(.58,.72),R-1,E,D,M)}}else i.tips.push(D)}function g(i,u){let h={id:A.length,soma:i.clone(),scale:u.scale,hue:u.hue,maxD:0,roots:[],tips:[],axonRoot:-1,axonTips:[],target:-1,v:y()*.6,refr:0,flash:99,delay:u.delay,tonic:u.tonic||0,somaHue:u.somaHue??u.hue,far:!!u.far};A.push(h);let l=u.flat??.55,T=u.primaries,R=y()*pe;for(let E=0;E<T;E++){let w=R+E/T*pe+r(-.35,.35),M=r(-1,1)*l,W=v(Math.cos(w),Math.sin(w),M).normalize(),K=h.soma.clone().addScaledVector(W,.07*h.scale),$=f.length;te(h,K,W,r(.5,.85)*h.scale,r(.011,.017)*h.scale,u.depth,0,-1,l),h.roots.push($)}return h}function c(i,u){let h=i.soma.clone(),l=u.soma.clone().add(v(r(-.5,.5),r(-.5,.5),r(-.3,.3)).multiplyScalar(u.scale*.6)),T=h.clone().lerp(l,.5).add(v(r(-1,1),r(-1,1),r(-1,1)).multiplyScalar(h.distanceTo(l)*.22)),R=new n.QuadraticBezierCurve3(h,T,l),E=R.getLength(),w=Math.max(6,Math.round(E/.09)),M=-1,W=0,K=R.getPoint(0),$=.0045*i.scale;for(let N=1;N<=w;N++){let D=R.getPoint(N/w).add(v(r(-1,1),r(-1,1),r(-1,1)).multiplyScalar(.012)),U=q(i,K,D,$,$,W,M,!0);N===1&&(i.axonRoot=U),W+=K.distanceTo(D),K=D,M=U}let se=M;for(let N=0;N<3;N++){let D=K.clone(),U=ae(1),I=se;for(let ee=0;ee<4;ee++){U.add(ae(1).multiplyScalar(.4)).normalize();let j=D.clone().addScaledVector(U,.06*u.scale);I=q(i,D,j,$*.8,$*.7,W+ee*.06,I,!0),D=j}i.axonTips.push(I)}i.target=u.id}let P=g(v(0,0,0),{scale:1.75,hue:0,primaries:7,depth:x?4:5,delay:.15,tonic:.5}),O=g(v(2.5,-2,-1.6),{scale:1.25,hue:1,somaHue:4,primaries:6,depth:4,delay:.6}),z=[],B=G?8:x?13:19;for(let i=0;i<B;i++){let u=.1+i/(B-1)*.82,h=C.getPointAt(u),l=C.getTangentAt(u),T=v(0,1,0).cross(l).normalize(),R=l.clone().cross(T).normalize(),E=r(0,pe),w=r(1.35,2.7),M=h.clone().addScaledVector(T,Math.cos(E)*w*1.25).addScaledVector(R,Math.sin(E)*w*.9).addScaledVector(l,r(-.8,.8));z.push(g(M,{scale:r(.95,1.45),hue:y()<.7?0:y()<.6?1:2,somaHue:y()<.12?4:void 0,primaries:5+(y()*2|0),depth:x?3:y()<.5?4:3,delay:.9+u*1.6,tonic:.08}))}for(let i=0;i<(x?6:G?9:12);i++){let u=y(),h=C.getPointAt(u),l=r(0,pe),T=r(6,12);g(h.clone().add(v(Math.cos(l)*T*1.3,Math.sin(l)*T*.8,r(-6,-2))),{scale:r(1.4,2.2),hue:y()<.5?1:3,primaries:6,depth:2,delay:.5+y(),far:!0,tonic:.12})}let L={id:A.length,soma:v(0,-5.2,-27.2),scale:1.9,hue:0,maxD:0,roots:[],tips:[],axonRoot:-1,axonTips:[],target:-1,v:0,refr:0,flash:99,delay:1.2,tonic:.2,somaHue:0,far:!1,logo:!0};A.push(L),Ft(L,q),c(P,O),c(O,z[0]);for(let i=0;i<z.length-1;i++)c(z[i],z[i+1]);c(z[z.length-1],L);for(let i of A)if(i.far){let u=null,h=1e9;for(let l of A)if(l!==i&&!l.logo){let T=l.soma.distanceTo(i.soma);T<h&&(h=T,u=l)}u&&c(i,u)}let b=[P.id,O.id,...z.map(i=>i.id),L.id];return{neurons:A,segs:f,route:C,logo:L,chain:b}}function Ft(e,x){let G=[[47,42],[97,42],[210,42],[260,42],[110,333],[196,333]],y=2.5/369,r=152,v=238,A=(c,P)=>new n.Vector3((c-r)*y,-(P-v)*y,0).add(e.soma),f=.009,C=(c,P,O,z)=>{let B=P,L=O,b=-1;for(let i=0;i<c.length-1;i++){let u=A(...c[i]),h=A(...c[i+1]),l=Math.max(1,Math.round(u.distanceTo(h)/.05));for(let T=0;T<l;T++){let R=u.clone().lerp(h,T/l),E=u.clone().lerp(h,(T+1)/l);B=x(e,R,E,z,z,L,B,!1),b<0&&(b=B),L+=R.distanceTo(E)}}return e.maxD=Math.max(e.maxD,L),{first:b,last:B,d:L}},q=C([[152,212],[152,162]],-1,0,f*1.4),ae=C([[152,162],[100,112],[100,95]],q.last,q.d,f),te=C([[153,162],[207,112],[207,95]],q.last,q.d,f);for(let c of[[60,58],[98,59]])e.tips.push(C([[100,95],c],ae.last,ae.d,f*.85).last);for(let c of[[247,58],[209,59]])e.tips.push(C([[207,95],c],te.last,te.d,f*.85).last);let g=C([[152,264],[152,292]],-1,0,f*1.4);for(let c of[[122,320],[184,320]])e.tips.push(C([[152,292],c],g.last,g.d,f).last);e.roots.push(q.first,g.first);for(let[c,P]of G){let O=A(c,P),z=17*y,B=16,L=-1;for(let b=0;b<B;b++){let i=b/B*pe,u=(b+1)/B*pe;L=x(e,O.clone().add(new n.Vector3(Math.cos(i)*z,Math.sin(i)*z,0)),O.clone().add(new n.Vector3(Math.cos(u)*z,Math.sin(u)*z,0)),f*.9,f*.9,e.maxD*.97,L,!1)}}}var ht=`
uniform vec2 uRes;
uniform float uPx, uFocus, uAperture, uTime, uGrow, uGain, uNear, uProbeR, uMouseOn, uDusk;
uniform vec2 uMouse;
uniform vec4 uPulse[${_e}];
uniform float uFlash[${Ge}];
uniform float uDelay[${Ge}];
vec3 hueCol(float h) {
  if (h < 0.5) return vec3(0.08, 0.62, 1.0);   // cyan
  if (h < 1.5) return vec3(0.1, 0.36, 1.0);    // electric blue
  if (h < 2.5) return vec3(0.05, 0.9, 0.85);   // teal
  if (h < 3.5) return vec3(0.34, 0.3, 1.0);    // violet blue
  return vec3(1.0, 0.36, 0.62);                // magenta
}
float growOf(float nid) {
  float g = clamp((uGrow - uDelay[int(nid + 0.5)]) / 1.8, 0.0, 1.0);
  return 1.0 - pow(1.0 - g, 3.0);
}
float flashOf(float nid, float dist) {
  float ft = uFlash[int(nid + 0.5)];
  if (ft > 3.0) return 0.0;
  float front = ft * 2.6;
  return exp(-pow((dist - front) * 4.0, 2.0)) * exp(-ft * 0.8) * 3.0 + exp(-ft * 3.0) * 0.8;
}
float pulseNear(vec3 p) {
  float s = 0.0;
  for (int k = 0; k < ${_e}; k++) { vec3 d = p - uPulse[k].xyz; s += uPulse[k].w * exp(-dot(d, d) * 70.0); }
  return s;
}
`,zt=`
${ht}
attribute vec3 iA; attribute vec3 iB; attribute vec2 iW; attribute vec3 iD; attribute vec4 iInfo;
varying vec2 vQ; varying vec2 vCap; varying float vL, vR, vI, vF; varying vec3 vC;
void main() {
  float nid = iInfo.x;
  float g = growOf(nid);
  float dn = iD.y;
  if (g * 1.03 < dn) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  float front = exp(-pow((g * 1.03 - dn) * 16.0, 2.0)) * (1.0 - smoothstep(0.96, 1.0, g));
  vec4 va = modelViewMatrix * vec4(iA, 1.0), vb = modelViewMatrix * vec4(iB, 1.0);
  float za = -va.z, zb = -vb.z;
  if (za < uNear && zb < uNear) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  if (za < uNear) { va = mix(va, vb, (uNear - za) / (zb - za)); za = uNear; }
  if (zb < uNear) { vb = mix(vb, va, (uNear - zb) / (za - zb)); zb = uNear; }
  vec4 ca = projectionMatrix * va, cb = projectionMatrix * vb;
  vec2 sa = (ca.xy / ca.w * 0.5 + 0.5) * uRes, sb = (cb.xy / cb.w * 0.5 + 0.5) * uRes;
  float end = position.x;
  float z = end < 0.5 ? za : zb;
  float core = clamp((end < 0.5 ? iW.x : iW.y) * uPx / z, 0.6, 7.0);
  float coc = min(uAperture * abs(z - uFocus) / z, 30.0);
  float R = sqrt(core * core + 0.22 * coc * coc);
  float sharpness = (core * core) / (R * R);
  float H = R * mix(2.6, 5.0, smoothstep(0.3, 0.85, sharpness)) + 1.5;
  vec2 dir = sb - sa; float L = length(dir);
  dir = L > 1e-3 ? dir / L : vec2(1.0, 0.0);
  vec2 nrm = vec2(-dir.y, dir.x);
  vec2 sp = (end < 0.5 ? sa - dir * H : sb + dir * H) + nrm * position.y * H;
  vQ = vec2(dot(sp - sa, dir), position.y * H);
  vL = L; vR = R; vCap = vec2(mod(iD.z, 2.0), floor(iD.z / 2.0));
  float zn = end < 0.5 ? ca.z / ca.w : cb.z / cb.w;
  gl_Position = vec4(sp / uRes * 2.0 - 1.0, clamp(zn, -1.0, 1.0), 1.0);
  // light in front of the focal plane stays smooth (bokeh); light behind it becomes pixel glyphs
  vF = mix(1.0, (core * core) / (R * R), smoothstep(uFocus * 0.85, uFocus * 1.2, z));
  float nearFade = smoothstep(0.2, 1.3, z);
  vec3 mid = 0.5 * (iA + iB);
  float pb = pulseNear(mid);
  float fl = flashOf(nid, iD.x);
  vec2 m = 0.5 * (sa + sb) - uMouse;
  float probe = uMouseOn * exp(-dot(m, m) / (uProbeR * uProbeR));
  float base = 0.42 + 0.58 * smoothstep(0.003, 0.03, 0.5 * (iW.x + iW.y));
  float energy = core / R;
  vI = uGain * base * energy * nearFade * (0.7 + 0.3 * iInfo.z) * (1.0 + pb * 3.2 + fl + probe * 1.3 + front * 4.0);
  vC = mix(hueCol(iInfo.y), vec3(0.85, 0.96, 1.0), clamp(pb * 0.6 + fl * 0.25 + front, 0.0, 0.85));
  vC = mix(vC, vec3(0.35, 0.3, 1.0), uDusk * 0.45);
}
`,Ht=`
varying vec2 vQ; varying vec2 vCap; varying float vL, vR, vI, vF; varying vec3 vC;
void main() {
  // round caps at the free ends; feathered, overlapping joints everywhere else
  float e = max(0.75, min(vR, vL * 0.5));
  float wA = vCap.x > 0.5 ? 1.0 : smoothstep(-e, e, vQ.x);
  float wB = vCap.y > 0.5 ? 1.0 : smoothstep(vL + e, vL - e, vQ.x);
  float dx = (vCap.x > 0.5 ? max(-vQ.x, 0.0) : 0.0) + (vCap.y > 0.5 ? max(vQ.x - vL, 0.0) : 0.0);
  float d2 = dx * dx + vQ.y * vQ.y, r2 = vR * vR;
  float a = (exp(-d2 / r2 * 2.4) * 1.15 + 0.12 * vF * exp(-d2 / (r2 * 5.5)) + 0.05 * exp(-d2 / (r2 * 2.0))) * vI * wA * wB;
  if (a < 0.0004) discard;
  float l = dot(vC, vec3(0.2126, 0.7152, 0.0722));
  gl_FragColor = vec4(vC * a, a * l * vF);
}
`,St=`
${ht}
attribute vec4 aInfo;   // nrn, hue, phase, dn
attribute vec2 aSize;   // world size, intensity
uniform float uKind;    // 0 sparkle \xB7 1 dust \xB7 2 soma \xB7 3 spike
varying float vI, vF, vHard; varying vec3 vC;
void main() {
  vec3 p = position;
  float nid = aInfo.x;
  float g = uKind < 1.5 && nid >= 0.0 ? growOf(nid) : 1.0;
  if (uKind < 0.5 && g * 1.03 < aInfo.w) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
  if (uKind > 0.5 && uKind < 1.5) p += vec3(sin(uTime * 0.11 + aInfo.z * 7.0), cos(uTime * 0.09 + aInfo.z * 5.0), sin(uTime * 0.07 + aInfo.z * 3.0)) * 0.12;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float z = -mv.z;
  if (z < uNear) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
  gl_Position = projectionMatrix * mv;
  float core = clamp(aSize.x * uPx / z, uKind > 1.5 ? 1.5 : 0.9, uKind > 1.5 ? 26.0 : 5.0);
  float coc = min(uAperture * abs(z - uFocus) / z, uKind > 1.5 ? (uKind > 2.5 ? 20.0 : 40.0) : 14.0);
  float R = sqrt(core * core + 0.25 * coc * coc);
  float size = R * (uKind > 1.5 ? 6.0 : 3.2) + 2.0;
  gl_PointSize = min(size, 140.0);
  vF = mix(1.0, (core * core) / (R * R), smoothstep(uFocus * 0.85, uFocus * 1.2, z));
  float nearFade = smoothstep(0.2, 1.3, z);
  float tw = uKind < 0.5 ? 0.45 + 0.55 * pow(0.5 + 0.5 * sin(uTime * (0.8 + fract(aInfo.z * 13.0) * 2.6) + aInfo.z * 40.0), 3.0) : 1.0;
  float fl = (uKind < 1.5 && nid >= 0.0) ? flashOf(nid, aInfo.w * 3.0) * 0.6 : 0.0;
  float pb = uKind < 0.5 ? pulseNear(p) * 1.5 : 0.0;
  vI = uGain * aSize.y * tw * nearFade * (core / R) * (core / R) * (1.0 + fl + pb) * (uKind < 0.5 ? smoothstep(aInfo.w, aInfo.w + 0.05, g * 1.03) : 1.0);
  vHard = uKind > 1.5 ? 0.0 : 1.0;
  vC = uKind > 2.5 ? vec3(0.8, 0.95, 1.0) : mix(hueCol(aInfo.y), vec3(0.9, 0.97, 1.0), uKind > 1.5 ? 0.35 : 0.15);
  vC = mix(vC, vec3(0.35, 0.3, 1.0), uDusk * 0.4);
}
`,Ct=`
varying float vI, vF, vHard; varying vec3 vC;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(q, q);
  if (d2 > 1.0) discard;
  float edge = (1.0 - d2) * (1.0 - d2);
  float a = vHard > 0.5 ? exp(-d2 * 9.0) : (exp(-d2 * 34.0) * 1.4 + exp(-d2 * 7.0) * 0.32 + exp(-d2 * 2.2) * 0.07);
  a *= vI * edge;
  if (a < 0.0004) discard;
  float l = dot(vC, vec3(0.2126, 0.7152, 0.0722));
  gl_FragColor = vec4(vC * a, a * l * vF);
}
`,Lt=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Dt=`
uniform sampler2D tScene; uniform sampler2D tGlyph;
uniform vec2 uRes; uniform float uCell, uGlyphN, uTime, uExposure, uPixel, uFade, uGrain, uDebug;
varying vec2 vUv;
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
vec3 tone(vec3 c) { return vec3(1.0) - exp(-c * uExposure); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  vec2 fc = gl_FragCoord.xy;
  vec4 s = texture2D(tScene, vUv);
  float E = max(luma(s.rgb), 1e-5);
  float foc = clamp(s.a / E, 0.0, 1.0);
  vec3 sharp = tone(s.rgb * foc);
  vec3 soft = tone(s.rgb * (1.0 - foc));
  // pixel glyphs for the light that is out of focus
  vec2 cid = floor(fc / uCell);
  vec4 sc = texture2D(tScene, (cid + 0.5) * uCell / uRes);
  float Ec = max(luma(sc.rgb), 1e-5);
  float fc2 = clamp(sc.a / Ec, 0.0, 1.0);
  vec3 far = tone(sc.rgb * (1.0 - fc2) * 1.35);
  float lv = clamp(pow(luma(far), 0.55) * 1.55, 0.0, 0.8);
  float gi = floor(lv * (uGlyphN - 1.0) + 0.5);
  vec2 lc = fract(fc / uCell);
  float ink = texture2D(tGlyph, vec2((gi + lc.x) / uGlyphN, lc.y)).a;
  vec3 hue = far / max(max(far.r, max(far.g, far.b)), 1e-4);
  vec3 glyph = mix(hue * vec3(0.45, 0.8, 1.0), vec3(0.85, 0.96, 1.0), lv * lv) * ink * smoothstep(0.1, 0.32, lv) * (0.12 + 0.7 * lv);
  vec3 col = sharp + soft * (1.0 - uPixel * 0.62) + glyph * uPixel;
  if (uDebug > 0.5) col = uDebug > 3.5 ? vec3(lv) : uDebug > 2.5 ? vec3(texture2D(tGlyph, vUv).a) : uDebug > 1.5 ? vec3(ink) : glyph * 3.0;
  // deep-water background
  vec2 p = vUv - vec2(0.6, 0.62);
  vec3 bg = mix(vec3(0.004, 0.012, 0.03), vec3(0.016, 0.05, 0.1), smoothstep(1.0, 0.0, length(p * vec2(0.9, 1.3))));
  col += bg;
  float vig = smoothstep(1.3, 0.3, length((vUv - 0.5) * vec2(1.1, 1.0)));
  col *= mix(0.5, 1.0, vig);
  col += (hash(fc + fract(uTime * 7.31) * 100.0) - 0.5) * uGrain;
  gl_FragColor = vec4(max(col, 0.0) * uFade, 1.0);
}
`;function vt(e,{onSpike:x,onArrive:G,quality:y=1,grown:r=!1,mode:v="page"}={}){let A=v==="game",f;try{f=new n.WebGLRenderer({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1})}catch{return null}if(!f.capabilities.isWebGL2)return f.dispose(),null;f.setClearColor(0,0),f.autoClear=!1;let C=matchMedia("(prefers-reduced-motion: reduce)").matches,q=matchMedia("(pointer: coarse)").matches,ae=q||(navigator.hardwareConcurrency||8)<=4,te=At(919,ae,A),{neurons:g,segs:c,route:P,chain:O}=te;A&&O.forEach(t=>{g[t].locked=!0,g[t].tonic=0});let z=new Float32Array(g.length);c.forEach(t=>{t.axon&&(z[t.nrn]=Math.max(z[t.nrn],t.d1))});let B=g[0],L=new n.Scene,b=new n.PerspectiveCamera(50,1,.05,80);L.add(b);let i=Array.from({length:_e},()=>new n.Vector4(0,0,0,0)),u=new Float32Array(Ge).fill(99),h=new Float32Array(Ge).fill(0);g.forEach(t=>h[t.id]=t.delay);let l={uRes:{value:new n.Vector2(1,1)},uPx:{value:800},uFocus:{value:4.6},uAperture:{value:26},uTime:{value:0},uGrow:{value:C?99:0},uGain:{value:1},uNear:{value:.06},uProbeR:{value:150},uMouseOn:{value:0},uMouse:{value:new n.Vector2(-9999,-9999)},uDusk:{value:0},uPulse:{value:i},uFlash:{value:u},uDelay:{value:h}},T={transparent:!0,depthTest:!1,depthWrite:!1,blending:n.CustomBlending,blendEquation:n.AddEquation,blendSrc:n.OneFactor,blendDst:n.OneFactor,blendSrcAlpha:n.OneFactor,blendDstAlpha:n.OneFactor};{let t=c.length,a=new Float32Array(t*3),o=new Float32Array(t*3),s=new Float32Array(t*2),p=new Float32Array(t*3),m=new Float32Array(t*4),H=Ze(77),S=new Float32Array(g.length);c.forEach(F=>{F.axon&&(S[F.nrn]=Math.max(S[F.nrn],F.d1))}),c.forEach((F,Y)=>{let Ee=g[F.nrn];a.set([F.a.x,F.a.y,F.a.z],Y*3),o.set([F.b.x,F.b.y,F.b.z],Y*3),s[Y*2]=F.w0,s[Y*2+1]=F.w1;let Re=.5*(F.d0+F.d1);p[Y*3]=Re,p[Y*3+1]=F.axon?Math.min(1,Re/(S[F.nrn]||1)):Ee.maxD>0?Math.min(1,Re/Ee.maxD):0,p[Y*3+2]=F.cap0+2*F.cap1,m[Y*4]=F.nrn,m[Y*4+1]=F.axon?1:Ee.hue,m[Y*4+2]=H(),m[Y*4+3]=F.axon?1:0});let k=new n.InstancedBufferGeometry;k.setAttribute("position",new n.BufferAttribute(new Float32Array([0,-1,0,0,1,0,1,-1,0,1,1,0]),3)),k.setIndex([0,2,1,1,2,3]),k.setAttribute("iA",new n.InstancedBufferAttribute(a,3)),k.setAttribute("iB",new n.InstancedBufferAttribute(o,3)),k.setAttribute("iW",new n.InstancedBufferAttribute(s,2)),k.setAttribute("iD",new n.InstancedBufferAttribute(p,3)),k.setAttribute("iInfo",new n.InstancedBufferAttribute(m,4)),k.instanceCount=t;let J=new n.ShaderMaterial({uniforms:l,vertexShader:zt,fragmentShader:Ht,...T}),le=new n.Mesh(k,J);le.frustumCulled=!1,L.add(le)}let R=(t,a,o,s,p=!1)=>{let m=new n.BufferGeometry,H=new n.BufferAttribute(t,3),S=new n.BufferAttribute(a,4),k=new n.BufferAttribute(o,2);p&&(H.setUsage(n.DynamicDrawUsage),k.setUsage(n.DynamicDrawUsage)),m.setAttribute("position",H),m.setAttribute("aInfo",S),m.setAttribute("aSize",k);let J=new n.ShaderMaterial({uniforms:{...l,uKind:{value:s}},vertexShader:St,fragmentShader:Ct,...T}),le=new n.Points(m,J);return le.frustumCulled=!1,L.add(le),le};{let t=Ze(5),a=[],o=[],s=[];for(let S of c){if(S.axon&&t()<.6)continue;let k=g[S.nrn],J=k.far?t()<.25?1:0:(t()<.8?1:0)+(t()<.45?1:0)+(t()<.15?1:0);for(let le=0;le<J;le++){let F=t(),Y=S.a.clone().lerp(S.b,F),Ee=new n.Vector3(t()-.5,t()-.5,t()-.5).multiplyScalar(.09*k.scale*(t()<.7?.4:1.4));Y.add(Ee),a.push(Y.x,Y.y,Y.z);let Re=S.d0+F*S.len;o.push(S.nrn,k.hue,t(),k.maxD?Math.min(1,Re/k.maxD):0),s.push(.005+t()*.009,.7+t()*1.4)}}R(new Float32Array(a),new Float32Array(o),new Float32Array(s),0);let p=[],m=[],H=[];for(let S=0;S<1400;S++){let k=t(),J=P.getPointAt(k);p.push(J.x+(t()-.5)*16,J.y+(t()-.5)*10,J.z+(t()-.5)*8),m.push(-1,t()<.7?0:1,t(),0),H.push(.004+t()*.008,.25+t()*.5)}R(new Float32Array(p),new Float32Array(m),new Float32Array(H),1)}let E=new Float32Array(g.length*3),w=new Float32Array(g.length*4),M=new Float32Array(g.length*2);g.forEach((t,a)=>{E.set([t.soma.x,t.soma.y,t.soma.z],a*3),w.set([t.id,t.somaHue,a/g.length,0],a*4),M.set([.045*t.scale,1],a*2)});let W=R(E,w,M,2,!0),K=new Float32Array(ke*4*3),$=new Float32Array(ke*4*4),se=new Float32Array(ke*4*2);for(let t=0;t<ke*4;t++)$.set([-1,0,0,0],t*4);let N=R(K,$,se,3,!0);N.geometry.setDrawRange(0,0);let D=null,U=f.extensions.has("EXT_color_buffer_float")||f.extensions.has("EXT_color_buffer_half_float")?n.HalfFloatType:n.UnsignedByteType,I=null,ee=12,j=new n.ShaderMaterial({uniforms:{tScene:{value:null},tGlyph:{value:null},uRes:l.uRes,uCell:{value:12},uGlyphN:{value:pt},uTime:l.uTime,uExposure:{value:1},uPixel:{value:.85},uFade:{value:0},uGrain:{value:.05},uDebug:{value:0}},vertexShader:Lt,fragmentShader:Dt,depthTest:!1,depthWrite:!1}),ge=new n.Scene,xe=new n.BufferGeometry;xe.setAttribute("position",new n.BufferAttribute(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let ye=new n.Mesh(xe,j);ye.frustumCulled=!1,ge.add(ye);let Ne=new n.OrthographicCamera(-1,1,1,-1,0,1);function Ve(t){let a=Je(t),o=mt(t),s=document.createElement("canvas");s.width=a.width,s.height=a.height;let p=s.getContext("2d");o.forEach((m,H)=>p.drawImage(a,m*t,0,t,t,H*t,0,t,t)),I&&I.dispose(),I=new n.CanvasTexture(s),I.magFilter=n.NearestFilter,I.minFilter=n.NearestFilter,I.generateMipmaps=!1,j.uniforms.tGlyph.value=I,j.uniforms.uCell.value=t}let V=Math.min(window.devicePixelRatio||1,q?1.5:1.6)*y,Pe=V,Z=1,X=1;function d(){Z=window.innerWidth,X=window.innerHeight,f.setPixelRatio(V),f.setSize(Z,X,!1);let t=Math.max(1,Math.round(Z*V)),a=Math.max(1,Math.round(X*V));D?D.setSize(t,a):D=new n.WebGLRenderTarget(t,a,{type:U,depthBuffer:!1,stencilBuffer:!1,minFilter:n.LinearFilter,magFilter:n.LinearFilter}),j.uniforms.tScene.value=D.texture,l.uRes.value.set(t,a),b.aspect=Z/X,b.fov=Z/X<.8?62:50,b.updateProjectionMatrix(),l.uPx.value=a/(2*Math.tan(n.MathUtils.degToRad(b.fov)/2)),l.uAperture.value=22*V,l.uProbeR.value=150*V;let o=Math.max(8,Math.round((Z<700?8:10)*V));(o!==ee||!I)&&(ee=o,Ve(o))}d(),window.addEventListener("resize",d);let _=new n.Vector3,Q=new n.Vector3,re=new n.Vector3,Be=new n.Vector3,Ae=0,Ue=0,Fe=0,ze=0,ue=0,fe=0,gt=new n.Vector3(-.82,-.34,0),me=new n.Vector3(-.82,-.34,4.6),ce=new n.Vector3(-.82,-.34,0),He=ce.clone();function xt(t){let a=1-Math.exp(-t*2.4);Q.copy(b.position).lerp(me,a),He.lerp(ce,a),ue+=(Fe-ue)*(1-Math.exp(-t*2.5)),fe+=(ze-fe)*(1-Math.exp(-t*2.5)),b.position.copy(Q),b.lookAt(Be.copy(He).add(re.set(ue*.15,-fe*.1,0))),b.updateMatrixWorld()}function yt(t){if(A)return xt(t);Ae+=(Ue-Ae)*(1-Math.exp(-t*3.2));let a=n.MathUtils.clamp(Ae,0,1);P.getPointAt(a,Q),P.getPointAt(Math.min(1,a+.035),re);let o=n.MathUtils.smoothstep(a,0,.06);_.copy(gt).lerp(re,o);let s=n.MathUtils.smoothstep(a,.86,1),p=Z/X<.8?0:1.6;_.lerp(Be.set(te.logo.soma.x-p,te.logo.soma.y-(p?.55:.1),te.logo.soma.z),s),Z/X<.8&&(Q.z+=1.6*(1-o),Q.y-=.3*(1-o)),ue+=(Fe-ue)*(1-Math.exp(-t*2.5)),fe+=(ze-fe)*(1-Math.exp(-t*2.5)),b.position.copy(Q),b.lookAt(_),b.translateX(ue*.22),b.translateY(-fe*.14),b.lookAt(Be.copy(_).add(new n.Vector3(ue*.1,-fe*.06,0))),b.updateMatrixWorld()}let Se=.85,et=.85,tt=1,Oe=0,We=0,be=C,Ce=C?99:0,qe=performance.now(),oe=[],we=(t,a,o,s,p)=>{if(oe.length>=ke)return null;let m={seg:t,t:a>0?0:1,dir:a,kind:o,speed:s,I:p,age:0};return oe.push(m),m},ne=null;function de(t,a=!1,o=!1){if(t.refr>0&&!a)return;t.flash=0,t.v=0,t.refr=.45+Math.random()*.35,Oe++,x&&x(Oe,t.id),t.axonRoot>=0&&!o&&!t.locked&&we(t.axonRoot,1,"axon",2.4,1.6);let s=a?8:2;for(let p=0;p<s;p++)t.roots.length&&we(t.roots[Math.random()*t.roots.length|0],1,"out",1.7,a?1.3:.8)}function bt(t){for(let a=oe.length-1;a>=0;a--){let o=oe[a];o.age+=t;let s=o.speed*t,p=!0;for(;s>0&&p;){let m=c[o.seg];if(o.dir>0){let H=(1-o.t)*m.len;if(s<H)o.t+=s/m.len,s=0;else if(s-=H,m.kids.length)o.seg=m.kids[Math.random()*m.kids.length|0],o.t=0;else if(p=!1,o.kind==="axon"){let S=g[m.nrn],k=g[S.target];o===ne?(ne=null,G&&G(S.target)):k&&!k.locked&&(k.v+=.62+Math.random()*.3)}}else{let H=o.t*m.len;s<H?(o.t-=s/m.len,s=0):(s-=H,m.parent>=0?(o.seg=m.parent,o.t=1):(p=!1,g[m.nrn].v+=.2))}}(!p||o.age>12)&&(o===ne&&(ne=null),oe.splice(a,1))}}let Le=t=>t.soma.distanceTo(b.position);function wt(t){let a=Se*(C?0:1);for(let o of g)o.flash+=t,o.refr-=t,Le(o)<16&&o.tips.length&&Math.random()<t*a*(o.far?.5:1.6)*(o===B?2.2:1)&&we(o.tips[Math.random()*o.tips.length|0],-1,"in",.9+Math.random()*.6,.9),o.v+=t*o.tonic*a,o.v>=1&&!o.locked&&de(o),u[o.id]=o.flash}let Te=new n.Vector3,De=t=>(Te.copy(t).project(b),{x:(Te.x*.5+.5)*Z,y:(1-(Te.y*.5+.5))*X,front:Te.z<1&&Te.z>-1}),ot=0,nt=-1,at=-1,Ke=!1;function st(t){nt=t.clientX,at=t.clientY,Ke=!0,Fe=t.clientX/Z*2-1,ze=t.clientY/X*2-1,l.uMouse.value.set(t.clientX*V,(X-t.clientY)*V),t.pointerType==="mouse"&&(l.uMouseOn.value=1)}window.addEventListener("pointermove",st,{passive:!0}),document.addEventListener("pointerleave",()=>{l.uMouseOn.value=0,Fe=ze=0});function Tt(t){if(!Ke||t-ot<.09||q)return;ot=t,Ke=!1;let a=-1,o=90*90;for(let s of g)if(!(s.far||Le(s)>11))for(let p=0;p<10;p++){let m=s.tips[Math.random()*s.tips.length|0];if(m===void 0)break;let H=De(c[m].b);if(!H.front)continue;let S=H.x-nt,k=H.y-at,J=S*S+k*k;J<o&&(o=J,a=m)}a>=0&&we(a,-1,"in",1.1,1.1)}function Et(t,a){let o=null,s=1/0;for(let p of g){if(p.far)continue;let m=Le(p);if(m>14)continue;let H=De(p.soma);if(!H.front)continue;let S=H.x-t,k=H.y-a,J=Math.sqrt(S*S+k*k)+m*18;J<s&&(s=J,o=p)}return o?(de(o,!0),De(o.soma)):null}let $e=N.geometry.attributes.position.array,rt=N.geometry.attributes.aSize.array,ie=new n.Vector3;function Rt(){let t=0,a=[];for(let o of oe){let s=c[o.seg];for(let p=0;p<4;p++){let m=n.MathUtils.clamp(o.t-o.dir*p*(.05/s.len),0,1);ie.copy(s.a).lerp(s.b,m),$e[t*3]=ie.x,$e[t*3+1]=ie.y,$e[t*3+2]=ie.z,rt[t*2]=(o===ne?.034:o.kind==="axon"?.016:.012)*(1-p*.22),rt[t*2+1]=o.I*(1-p*.28)*Math.min(1,o.age*6),t++}ie.copy(s.a).lerp(s.b,o.t),a.push({x:ie.x,y:ie.y,z:ie.z,I:o.I,d:ie.distanceToSquared(b.position)})}N.geometry.setDrawRange(0,t),N.geometry.attributes.position.needsUpdate=!0,N.geometry.attributes.aSize.needsUpdate=!0,a.sort((o,s)=>o.d-s.d);for(let o=0;o<_e;o++){let s=a[o];s?i[o].set(s.x,s.y,s.z,s.I):i[o].set(0,0,0,0)}}let it=W.geometry.attributes.aSize.array;function Mt(){for(let t of g){let a=t.flash<2?Math.exp(-t.flash*2.2):0;it[t.id*2]=.045*t.scale*(1+a*.7),it[t.id*2+1]=(.75+a*3)*(t.far?.7:1)}W.geometry.attributes.aSize.needsUpdate=!0}let lt=new n.Vector3;function kt(){b.getWorldDirection(lt);let t=4.6,a=-1/0;for(let o of g){if(o.far)continue;re.copy(o.soma).sub(b.position);let s=re.length();if(s<.8||s>12)continue;let p=re.dot(lt)/s;if(p<.55)continue;let m=p*3-s*.35;m>a&&(a=m,t=s)}return t}A&&b.position.copy(me);let je=0,he=0,Qe=!1,ve=0,Ie=0,ct=0,Ye=!1;function ut(t){if(je=requestAnimationFrame(ut),window.__s9mFrameGap&&he&&t-he<window.__s9mFrameGap)return;let a=Math.min(.05,he?(t-he)/1e3:.016);he=t,We+=a,ct++,be&&Ce<50&&(Ce=(performance.now()-qe)/1e3),l.uTime.value=We,l.uGrow.value=Ce,Se+=(et-Se)*(1-Math.exp(-a*1.5)),l.uGain.value+=(tt*(.75+.35*Se)-l.uGain.value)*(1-Math.exp(-a*2)),be&&(j.uniforms.uFade.value=Math.min(1,(performance.now()-qe)/900)),yt(a),l.uFocus.value+=((A?b.position.distanceTo(He):kt())-l.uFocus.value)*(1-Math.exp(-a*2.2)),be&&(wt(a),bt(a),Tt(We)),Rt(),Mt(),f.setRenderTarget(D),f.clear(),f.render(L,b),f.setRenderTarget(null),f.render(ge,Ne),!window.__s9mFrameGap&&ct>30&&(a>.026?(ve+=a,Ie=0):a<.013?(Ie+=a,ve=0):ve=Math.max(0,ve-a),ve>1.2&&V>.6?(V=Math.max(.6,V*.8),ve=0,d()):Ie>4&&V<Pe&&(V=Math.min(Pe,V*1.15),Ie=0,d()))}function ft(){!Ye&&!Qe&&!document.hidden&&(Qe=!0,he=0,je=requestAnimationFrame(ut))}function Xe(){Qe=!1,cancelAnimationFrame(je)}let dt=()=>document.hidden?Xe():ft();return document.addEventListener("visibilitychange",dt),e.addEventListener("webglcontextlost",t=>{t.preventDefault(),Xe(),!Ye&&!A&&document.documentElement.classList.add("no-gl")}),ft(),{start(){be||(be=!0,qe=performance.now(),Ce=r?99:0,A||setTimeout(()=>de(B,!0),r?100:2100))},setProgress(t){Ue=t},snap(){Ae=Ue},setActivity(t,a={}){et=t,tt=a.gain??1,l.uDusk.value=a.dusk??0},fireAt:Et,burst(t=6){g.filter(o=>!o.far&&Le(o)<12).sort(()=>Math.random()-.5).slice(0,t).forEach((o,s)=>setTimeout(()=>de(o,!0),s*140))},get spikes(){return Oe},_comp:j,chain:O,frame(t,a,o=!1){let s=g[t].soma,p=g[a].soma;ce.copy(s).lerp(p,.55);let m=s.distanceTo(p),H=Z/X<.8;me.copy(ce).add(re.set(0,.5,Math.max(4.4,m*(H?1.7:1.05)+2.2))),o&&(b.position.copy(me),He.copy(ce)),l.uFocus.value=me.distanceTo(ce)},frameOne(t,a=5,o=0){let s=g[t].soma;ce.copy(s).add(re.set(0,-o,0)),me.copy(ce).add(re.set(0,.3,a))},fireGame(t,a){let o=g[t];if(de(o,!0,!0),ne){let s=oe.indexOf(ne);s>=0&&oe.splice(s,1)}ne=o.axonRoot>=0?we(o.axonRoot,1,"axon",z[t]/a,3.2):null},fireCell(t){de(g[t],!0,!0)},killGamePulse(){if(ne){let t=oe.indexOf(ne);t>=0&&oe.splice(t,1),ne=null}},project(t){return De(g[t].soma)},celebrate(){g.filter(t=>!t.far).forEach((t,a)=>setTimeout(()=>de(t,!0,!0),60*a))},dispose(){Ye=!0,Xe(),window.removeEventListener("resize",d),window.removeEventListener("pointermove",st),document.removeEventListener("visibilitychange",dt),L.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}),D&&D.dispose(),I&&I.dispose(),f.dispose(),f.forceContextLoss&&f.forceContextLoss()},info:()=>({segments:c.length,neurons:g.length,pulses:oe.length,pr:V,focus:l.uFocus.value})}}function Vt({onClose:e}={}){let x=document.documentElement,G=matchMedia("(pointer: coarse)").matches,y=document.createElement("div");y.className="game",y.setAttribute("role","dialog"),y.setAttribute("aria-modal","true"),y.setAttribute("aria-label","Fire the network"),y.innerHTML=`
    <canvas class="g-gl" aria-hidden="true"></canvas>
    <div class="g-top">
      <span class="g-brand"><i class="mark"></i><span>s9m LABS</span></span>
      <span class="g-name">Fire the network</span>
      <button type="button" class="g-exit">Exit <span aria-hidden="true">\u2715</span></button>
    </div>
    <div class="g-stats" hidden>
      <span>Cell <b class="g-cell">1</b> / <b class="g-total">10</b></span>
      <span>Score <b class="g-score">0</b></span>
      <span class="g-lives" aria-label="Three tries"><i></i><i></i><i></i></span>
    </div>
    <div class="g-ring" aria-hidden="true"><i></i></div>
    <div class="g-pop" aria-live="polite"></div>
    <p class="g-hint" hidden>${G?"Tap":"Click or press Space"} as the ring closes</p>
    <div class="g-card g-start">
      <p class="g-kicker">A game about how neurons talk</p>
      <h2>Fire the network</h2>
      <p>A spike has to cross <b class="g-n">ten</b> cells to reach s9m. Each time it arrives at the next cell, ${G?"tap":"click"} as the ring closes and that cell fires. Three misses and the signal fades.</p>
      <div class="g-btns"><button type="button" class="box g-go">Start</button><button type="button" class="line-btn g-leave">Back to the site</button></div>
    </div>
    <div class="g-card g-end" hidden></div>`,document.body.appendChild(y),x.classList.add("in-game");let r=d=>y.querySelector(d),v=r(".g-ring"),A=r(".g-pop"),f=r(".g-end"),C=r(".g-start"),q=r(".g-cell"),ae=r(".g-total"),te=r(".g-score"),g=r(".g-lives"),c="intro",P=0,O=3,z=0,B=0,L=0,b=0,i=1.6,u=0,h=[],l=0,T=!1,R=(d,_)=>{let Q=setTimeout(d,_);return h.push(Q),Q},E=()=>{h.forEach(clearTimeout),h=[]},w=vt(r(".g-gl"),{mode:"game",onArrive:I});w||(C.innerHTML='<h2>Fire the network</h2><p>This game needs WebGL 2, which this browser does not offer. Try it in a recent Chrome, Safari or Firefox.</p><div class="g-btns"><button type="button" class="line-btn g-leave">Back to the site</button></div>');let M=w?w.chain:[],W=Math.max(1,M.length-1);r(".g-n")&&(r(".g-n").textContent=String(W)),ae.textContent=String(W),w&&(w.setActivity(.3,{gain:1}),w.frame(M[0],M[1],!0),w.start());let K=d=>Math.max(.95,1.7-d*.075),$=d=>Math.max(.2,.34-d*.012),se=.2;function N(){q.textContent=String(Math.min(P+1,W)),te.textContent=String(z),[...g.children].forEach((d,_)=>d.classList.toggle("lost",_>=O))}function D(d,_){A.textContent=d,A.className="g-pop show "+(_||""),R(()=>{A.className="g-pop"},900)}function U(){T||(c="aim",v.className="g-ring on",w.frame(M[P],M[P+1]),R(()=>{T||(i=K(P),b=performance.now(),c="flying",w.fireGame(M[P],i))},P===0?900:650))}function I(d){c!=="flying"||d!==M[P+1]||(c="window",u=performance.now(),v.classList.add("now"),R(()=>{c==="window"&&ge("Missed")},$(P)*1e3))}function ee(){if(c==="flying"){let d=(b+i*1e3-performance.now())/1e3;d<=se?j(-d):ge("Too early")}else c==="window"&&j((performance.now()-u)/1e3)}function j(d){E(),c="resolving",w.killGamePulse();let _=Math.abs(d)<=.09;if(L++,_&&B++,z+=(_?100:60)+Math.min(L-1,5)*10,D(_?"Perfect":"Good","ok"),v.className="g-ring on hit",w.fireCell(M[P+1]),P++,N(),P>=W){R(ye,300);return}R(U,700)}function ge(d){if(E(),c="resolving",w.killGamePulse(),L=0,O--,D(d,"bad"),v.className="g-ring on miss",N(),O<=0){R(Ne,900);return}R(U,1100)}function xe(d,_=""){f.innerHTML=d,f.hidden=!1,f.className="g-card g-end "+_,r(".g-stats").hidden=!0,r(".g-hint").hidden=!0,v.className="g-ring";let Q=f.querySelector(".g-again");Q&&Q.focus()}function ye(){c="won",w.frameOne(M[M.length-1],8,1.6),w.celebrate(),R(()=>xe(`
      <p class="g-kicker">Signal delivered</p>
      <h2>You fired the network.</h2>
      <p>${B} perfect of ${W} \xB7 score ${z}</p>
      <p class="g-note">That is what every neuron does, all day. We measure exactly how, and build machines that learn the same way. We\u2019re hiring.</p>
      <div class="g-btns"><a class="box" href="https://cal.com/s9mlabs" target="_blank" rel="noopener">Book a call</a><button type="button" class="line-btn g-again">Play again</button><button type="button" class="line-btn g-leave">Back to the site</button></div>`,"win"),1500)}function Ne(){c="lost",xe(`
      <p class="g-kicker">Signal lost</p>
      <h2>It faded at cell ${P+1}.</h2>
      <p>In a circuit, timing is everything. A few milliseconds early or late and nothing fires.</p>
      <div class="g-btns"><button type="button" class="box g-again">Try again</button><button type="button" class="line-btn g-leave">Back to the site</button></div>`)}function Ve(){E(),P=0,O=3,z=0,B=0,L=0,C.hidden=!0,f.hidden=!0,r(".g-stats").hidden=!1,r(".g-hint").hidden=!1,N(),U()}function V(){if(l=requestAnimationFrame(V),!w||c!=="aim"&&c!=="flying"&&c!=="window"&&c!=="resolving")return;let d=M[Math.min(P+1,M.length-1)],_=w.project(d);v.style.transform=`translate(${_.x.toFixed(1)}px, ${_.y.toFixed(1)}px)`;let Q=0;c==="flying"?Q=Math.min(1,(performance.now()-b)/(i*1e3)):(c==="window"||c==="resolving")&&(Q=1),v.style.setProperty("--s",(1+2.4*(1-Q)).toFixed(3)),A.style.transform=`translate(${_.x.toFixed(1)}px, ${(_.y-64).toFixed(1)}px)`}l=requestAnimationFrame(V);function Pe(d){d.target.closest("button, a")||(c==="flying"||c==="window")&&(d.preventDefault(),ee())}function Z(d){if(d.key==="Escape"){X();return}(d.key===" "||d.key==="Enter")&&(c==="flying"||c==="window")&&(d.preventDefault(),ee())}y.addEventListener("pointerdown",Pe),window.addEventListener("keydown",Z),y.addEventListener("click",d=>{d.target.closest(".g-go, .g-again")?Ve():d.target.closest(".g-leave, .g-exit")&&X()});function X(){T||(T=!0,E(),cancelAnimationFrame(l),window.removeEventListener("keydown",Z),y.classList.add("out"),setTimeout(()=>{w&&w.dispose(),y.remove()},450),x.classList.remove("in-game"),e&&e())}return setTimeout(()=>{let d=r(".g-go");d&&d.focus()},50),window.__s9mGame={get state(){return c},get cell(){return P},get lives(){return O},win:()=>{E(),ye()},net:w},{close:X}}export{Vt as openGame};
