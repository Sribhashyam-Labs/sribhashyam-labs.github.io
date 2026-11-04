import*as n from"three";var we=[()=>{},t=>{t.beginPath(),t.arc(.5,.5,.09,0,7),t.fill()},t=>{t.fillRect(.44,.3,.12,.4),t.fillRect(.3,.44,.4,.12)},t=>{t.beginPath(),t.moveTo(.32,.32),t.lineTo(.68,.68),t.moveTo(.68,.32),t.lineTo(.32,.68),t.stroke()},t=>{t.beginPath(),t.arc(.5,.5,.22,0,7),t.stroke()},t=>{t.beginPath(),t.arc(.18,.5,.26,-.9,.9),t.stroke(),t.beginPath(),t.arc(.82,.5,.26,Math.PI-.9,Math.PI+.9),t.stroke()},t=>{t.beginPath(),t.moveTo(.5,.2),t.lineTo(.8,.5),t.lineTo(.5,.8),t.lineTo(.2,.5),t.closePath(),t.stroke()},t=>{t.beginPath(),t.ellipse(.5,.5,.22,.17,0,0,7),t.stroke(),t.beginPath(),t.moveTo(.5,.18),t.lineTo(.5,.82),t.stroke()},t=>{t.beginPath(),t.arc(.5,.56,.12,0,7),t.fill(),t.beginPath(),t.moveTo(.5,.44),t.lineTo(.5,.16),t.moveTo(.4,.62),t.lineTo(.18,.82),t.moveTo(.6,.62),t.lineTo(.82,.82),t.stroke()},t=>{t.beginPath(),t.moveTo(.24,.22),t.lineTo(.76,.22),t.lineTo(.5,.5),t.closePath(),t.moveTo(.24,.78),t.lineTo(.76,.78),t.lineTo(.5,.5),t.closePath(),t.fill()},t=>{t.beginPath(),t.moveTo(.24,.24),t.quadraticCurveTo(.24,.58,.5,.58),t.quadraticCurveTo(.76,.58,.76,.24),t.moveTo(.5,.18),t.lineTo(.5,.84),t.moveTo(.36,.84),t.lineTo(.64,.84),t.stroke()},t=>{t.beginPath(),t.moveTo(.5,.86),t.lineTo(.5,.52),t.lineTo(.26,.24),t.moveTo(.5,.52),t.lineTo(.74,.24),t.stroke(),t.beginPath(),t.arc(.26,.22,.08,0,7),t.arc(.74,.22,.08,0,7),t.fill(),t.beginPath(),t.arc(.5,.52,.08,0,7),t.fill()},t=>{t.beginPath(),t.moveTo(.22,.22),t.lineTo(.42,.22),t.lineTo(.5,.32),t.lineTo(.58,.22),t.lineTo(.78,.22),t.lineTo(.78,.78),t.lineTo(.58,.78),t.lineTo(.5,.68),t.lineTo(.42,.78),t.lineTo(.22,.78),t.closePath(),t.fill()},t=>{t.beginPath(),t.moveTo(.5,.14),t.lineTo(.86,.5),t.lineTo(.5,.86),t.lineTo(.14,.5),t.closePath(),t.fill()},t=>{t.beginPath();for(let h=0;h<8;h++){let S=h/8*Math.PI*2,E=h%2?.14:.4;t.lineTo(.5+Math.cos(S)*E,.5+Math.sin(S)*E)}t.closePath(),t.fill()},t=>{t.beginPath(),t.moveTo(.26,.14),t.arcTo(.86,.14,.86,.86,.12),t.arcTo(.86,.86,.14,.86,.12),t.arcTo(.14,.86,.14,.14,.12),t.arcTo(.14,.14,.86,.14,.12),t.closePath(),t.fill()}],ft=we.length;function Pt(t,h,S,E,l,x=.085){t.save(),t.translate(S,E),t.scale(l,l),t.lineWidth=x,t.lineCap="round",t.lineJoin="round",we[h](t),t.restore()}function je(t){let h=document.createElement("canvas");h.width=t*we.length,h.height=t;let S=h.getContext("2d");S.fillStyle="#fff",S.strokeStyle="#fff";let E=t<12?.13:.1;for(let l=0;l<we.length;l++)Pt(S,l,l*t,0,t,E);return h}function dt(t=24){let h=je(t),S=h.getContext("2d").getImageData(0,0,h.width,h.height).data;return we.map((l,x)=>{let P=0;for(let p=0;p<t;p++)for(let z=0;z<t;z++)P+=S[(p*h.width+x*t+z)*4+3];return[x,P]}).sort((l,x)=>l[1]-x[1]).map(l=>l[0])}var ue=Math.PI*2,Ie=40,ge=320,Ge=24;function Qe(t){return()=>{t|=0,t=t+1831565813|0;let h=Math.imul(t^t>>>15,1|t);return h=h+Math.imul(h^h>>>7,61|h)^h,((h^h>>>14)>>>0)/4294967296}}function zt(t,h=!1,S=!1){let E=Qe(t),l=(s,c)=>s+(c-s)*E(),x=(s,c,m)=>new n.Vector3(s,c,m),P=[],p=[],z=new n.CatmullRomCurve3([x(-.82,-.34,4.6),x(-.7,-.28,2.2),x(-.1,-.7,-1.2),x(.9,-1.5,-4.6),x(-.3,-2.3,-8.4),x(.7,-3.2,-12.2),x(-.4,-4.2,-16.2),x(-.8,-4.9,-19.6),x(-1.6,-5.1,-21.6)],!1,"centripetal",.5),U=(s,c,m,i,b,H,g,L)=>{let D=p.length;return p.push({a:c,b:m,len:c.distanceTo(m),w0:i,w1:b,d0:H,d1:H+c.distanceTo(m),nrn:s.id,parent:g,kids:[],axon:L,cap0:g<0?1:0,cap1:1}),g>=0&&(p[g].kids.push(D),p[g].cap1=0),D},ae=s=>{let c=E()*ue,m=(E()*2-1)*s,i=Math.sqrt(Math.max(0,1-m*m));return x(Math.cos(c)*i,Math.sin(c)*i,m).normalize()};function Z(s,c,m,i,b,H,g,L,D){let Q=.055*s.scale,O=Math.max(2,Math.round(i/Q)),B=c.clone(),re=m.clone(),I=x(l(-1,1),l(-1,1),l(-1,1)*D).multiplyScalar(.06),k=L;for(let W=0;W<O;W++){re.add(x(l(-1,1),l(-1,1),l(-1,1)*D).multiplyScalar(.2)).add(I).normalize();let A=B.clone().addScaledVector(re,i/O),ee=W/O,K=(W+1)/O;k=U(s,B,A,b*(1-.42*ee),b*(1-.42*K),g,k,!1),g+=i/O,B=A}if(s.maxD=Math.max(s.maxD,g),H>0){let W=E()<.2?3:2;for(let A=0;A<W;A++){let ee=x(0,0,0).crossVectors(re,ae(1)).normalize(),K=re.clone().applyAxisAngle(ee,l(.32,.78)*(A%2?1:-1));Z(s,B,K,i*l(.6,.8),b*l(.58,.72),H-1,g,k,D)}}else s.tips.push(k)}function d(s,c){let m={id:P.length,soma:s.clone(),scale:c.scale,hue:c.hue,maxD:0,roots:[],tips:[],axonRoot:-1,axonTips:[],target:-1,v:E()*.6,refr:0,flash:99,delay:c.delay,tonic:c.tonic||0,somaHue:c.somaHue??c.hue,far:!!c.far};P.push(m);let i=c.flat??.55,b=c.primaries,H=E()*ue;for(let g=0;g<b;g++){let L=H+g/b*ue+l(-.35,.35),D=l(-1,1)*i,Q=x(Math.cos(L),Math.sin(L),D).normalize(),O=m.soma.clone().addScaledVector(Q,.07*m.scale),B=p.length;Z(m,O,Q,l(.5,.85)*m.scale,l(.011,.017)*m.scale,c.depth,0,-1,i),m.roots.push(B)}return m}function y(s,c){let m=s.soma.clone(),i=c.soma.clone().add(x(l(-.5,.5),l(-.5,.5),l(-.3,.3)).multiplyScalar(c.scale*.6)),b=m.clone().lerp(i,.5).add(x(l(-1,1),l(-1,1),l(-1,1)).multiplyScalar(m.distanceTo(i)*.22)),H=new n.QuadraticBezierCurve3(m,b,i),g=H.getLength(),L=Math.max(6,Math.round(g/.09)),D=-1,Q=0,O=H.getPoint(0),B=.0045*s.scale;for(let I=1;I<=L;I++){let k=H.getPoint(I/L).add(x(l(-1,1),l(-1,1),l(-1,1)).multiplyScalar(.012)),W=U(s,O,k,B,B,Q,D,!0);I===1&&(s.axonRoot=W),Q+=O.distanceTo(k),O=k,D=W}let re=D;for(let I=0;I<3;I++){let k=O.clone(),W=ae(1),A=re;for(let ee=0;ee<4;ee++){W.add(ae(1).multiplyScalar(.4)).normalize();let K=k.clone().addScaledVector(W,.06*c.scale);A=U(s,k,K,B*.8,B*.7,Q+ee*.06,A,!0),k=K}s.axonTips.push(A)}s.target=c.id}let q=d(x(0,0,0),{scale:1.75,hue:0,primaries:7,depth:h?4:5,delay:.15,tonic:.5}),j=d(x(2.5,-2,-1.6),{scale:1.25,hue:1,somaHue:4,primaries:6,depth:4,delay:.6}),F=[],N=S?8:h?13:19;for(let s=0;s<N;s++){let c=.1+s/(N-1)*.82,m=z.getPointAt(c),i=z.getTangentAt(c),b=x(0,1,0).cross(i).normalize(),H=i.clone().cross(b).normalize(),g=l(0,ue),L=l(1.35,2.7),D=m.clone().addScaledVector(b,Math.cos(g)*L*1.25).addScaledVector(H,Math.sin(g)*L*.9).addScaledVector(i,l(-.8,.8));F.push(d(D,{scale:l(.95,1.45),hue:E()<.7?0:E()<.6?1:2,somaHue:E()<.12?4:void 0,primaries:5+(E()*2|0),depth:h?3:E()<.5?4:3,delay:.9+c*1.6,tonic:.08}))}for(let s=0;s<(h?6:S?9:12);s++){let c=E(),m=z.getPointAt(c),i=l(0,ue),b=l(6,12);d(m.clone().add(x(Math.cos(i)*b*1.3,Math.sin(i)*b*.8,l(-6,-2))),{scale:l(1.4,2.2),hue:E()<.5?1:3,primaries:6,depth:2,delay:.5+E(),far:!0,tonic:.12})}let C={id:P.length,soma:x(0,-5.2,-27.2),scale:1.9,hue:0,maxD:0,roots:[],tips:[],axonRoot:-1,axonTips:[],target:-1,v:0,refr:0,flash:99,delay:1.2,tonic:.2,somaHue:0,far:!1,logo:!0};P.push(C),Ht(C,U),y(q,j),y(j,F[0]);for(let s=0;s<F.length-1;s++)y(F[s],F[s+1]);y(F[F.length-1],C);for(let s of P)if(s.far){let c=null,m=1e9;for(let i of P)if(i!==s&&!i.logo){let b=i.soma.distanceTo(s.soma);b<m&&(m=b,c=i)}c&&y(s,c)}let v=[q.id,j.id,...F.map(s=>s.id),C.id];return{neurons:P,segs:p,route:z,logo:C,chain:v}}function Ht(t,h){let S=[[47,42],[97,42],[210,42],[260,42],[110,333],[196,333]],E=2.5/369,l=152,x=238,P=(y,q)=>new n.Vector3((y-l)*E,-(q-x)*E,0).add(t.soma),p=.009,z=(y,q,j,F)=>{let N=q,C=j,v=-1;for(let s=0;s<y.length-1;s++){let c=P(...y[s]),m=P(...y[s+1]),i=Math.max(1,Math.round(c.distanceTo(m)/.05));for(let b=0;b<i;b++){let H=c.clone().lerp(m,b/i),g=c.clone().lerp(m,(b+1)/i);N=h(t,H,g,F,F,C,N,!1),v<0&&(v=N),C+=H.distanceTo(g)}}return t.maxD=Math.max(t.maxD,C),{first:v,last:N,d:C}},U=z([[152,212],[152,162]],-1,0,p*1.4),ae=z([[152,162],[100,112],[100,95]],U.last,U.d,p),Z=z([[153,162],[207,112],[207,95]],U.last,U.d,p);for(let y of[[60,58],[98,59]])t.tips.push(z([[100,95],y],ae.last,ae.d,p*.85).last);for(let y of[[247,58],[209,59]])t.tips.push(z([[207,95],y],Z.last,Z.d,p*.85).last);let d=z([[152,264],[152,292]],-1,0,p*1.4);for(let y of[[122,320],[184,320]])t.tips.push(z([[152,292],y],d.last,d.d,p).last);t.roots.push(U.first,d.first);for(let[y,q]of S){let j=P(y,q),F=17*E,N=16,C=-1;for(let v=0;v<N;v++){let s=v/N*ue,c=(v+1)/N*ue;C=h(t,j.clone().add(new n.Vector3(Math.cos(s)*F,Math.sin(s)*F,0)),j.clone().add(new n.Vector3(Math.cos(c)*F,Math.sin(c)*F,0)),p*.9,p*.9,t.maxD*.97,C,!1)}}}var pt=`
uniform vec2 uRes;
uniform float uPx, uFocus, uAperture, uTime, uGrow, uGain, uNear, uProbeR, uMouseOn, uDusk;
uniform vec2 uMouse;
uniform vec4 uPulse[${Ge}];
uniform float uFlash[${Ie}];
uniform float uDelay[${Ie}];
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
  for (int k = 0; k < ${Ge}; k++) { vec3 d = p - uPulse[k].xyz; s += uPulse[k].w * exp(-dot(d, d) * 70.0); }
  return s;
}
`,At=`
${pt}
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
`,Ft=`
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
`,kt=`
${pt}
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
`,St=`
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
`;function _t(t,{onSpike:h,onArrive:S,quality:E=1,grown:l=!1,mode:x="page"}={}){let P=x==="game",p;try{p=new n.WebGLRenderer({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1})}catch{return null}if(!p.capabilities.isWebGL2)return p.dispose(),null;p.setClearColor(0,0),p.autoClear=!1;let z=matchMedia("(prefers-reduced-motion: reduce)").matches,U=matchMedia("(pointer: coarse)").matches,ae=U||(navigator.hardwareConcurrency||8)<=4,Z=zt(919,ae,P),{neurons:d,segs:y,route:q,chain:j}=Z;P&&j.forEach(e=>{d[e].locked=!0,d[e].tonic=0});let F=new Float32Array(d.length);y.forEach(e=>{e.axon&&(F[e.nrn]=Math.max(F[e.nrn],e.d1))});let N=d[0],C=new n.Scene,v=new n.PerspectiveCamera(50,1,.05,80);C.add(v);let s=Array.from({length:Ge},()=>new n.Vector4(0,0,0,0)),c=new Float32Array(Ie).fill(99),m=new Float32Array(Ie).fill(0);d.forEach(e=>m[e.id]=e.delay);let i={uRes:{value:new n.Vector2(1,1)},uPx:{value:800},uFocus:{value:4.6},uAperture:{value:26},uTime:{value:0},uGrow:{value:z?99:0},uGain:{value:1},uNear:{value:.06},uProbeR:{value:150},uMouseOn:{value:0},uMouse:{value:new n.Vector2(-9999,-9999)},uDusk:{value:0},uPulse:{value:s},uFlash:{value:c},uDelay:{value:m}},b={transparent:!0,depthTest:!1,depthWrite:!1,blending:n.CustomBlending,blendEquation:n.AddEquation,blendSrc:n.OneFactor,blendDst:n.OneFactor,blendSrcAlpha:n.OneFactor,blendDstAlpha:n.OneFactor};{let e=y.length,a=new Float32Array(e*3),o=new Float32Array(e*3),r=new Float32Array(e*2),u=new Float32Array(e*3),f=new Float32Array(e*4),R=Qe(77),M=new Float32Array(d.length);y.forEach(w=>{w.axon&&(M[w.nrn]=Math.max(M[w.nrn],w.d1))}),y.forEach((w,_)=>{let Ee=d[w.nrn];a.set([w.a.x,w.a.y,w.a.z],_*3),o.set([w.b.x,w.b.y,w.b.z],_*3),r[_*2]=w.w0,r[_*2+1]=w.w1;let be=.5*(w.d0+w.d1);u[_*3]=be,u[_*3+1]=w.axon?Math.min(1,be/(M[w.nrn]||1)):Ee.maxD>0?Math.min(1,be/Ee.maxD):0,u[_*3+2]=w.cap0+2*w.cap1,f[_*4]=w.nrn,f[_*4+1]=w.axon?1:Ee.hue,f[_*4+2]=R(),f[_*4+3]=w.axon?1:0});let T=new n.InstancedBufferGeometry;T.setAttribute("position",new n.BufferAttribute(new Float32Array([0,-1,0,0,1,0,1,-1,0,1,1,0]),3)),T.setIndex([0,2,1,1,2,3]),T.setAttribute("iA",new n.InstancedBufferAttribute(a,3)),T.setAttribute("iB",new n.InstancedBufferAttribute(o,3)),T.setAttribute("iW",new n.InstancedBufferAttribute(r,2)),T.setAttribute("iD",new n.InstancedBufferAttribute(u,3)),T.setAttribute("iInfo",new n.InstancedBufferAttribute(f,4)),T.instanceCount=e;let V=new n.ShaderMaterial({uniforms:i,vertexShader:At,fragmentShader:Ft,...b}),ne=new n.Mesh(T,V);ne.frustumCulled=!1,C.add(ne)}let H=(e,a,o,r,u=!1)=>{let f=new n.BufferGeometry,R=new n.BufferAttribute(e,3),M=new n.BufferAttribute(a,4),T=new n.BufferAttribute(o,2);u&&(R.setUsage(n.DynamicDrawUsage),T.setUsage(n.DynamicDrawUsage)),f.setAttribute("position",R),f.setAttribute("aInfo",M),f.setAttribute("aSize",T);let V=new n.ShaderMaterial({uniforms:{...i,uKind:{value:r}},vertexShader:kt,fragmentShader:Ct,...b}),ne=new n.Points(f,V);return ne.frustumCulled=!1,C.add(ne),ne};{let e=Qe(5),a=[],o=[],r=[];for(let M of y){if(M.axon&&e()<.6)continue;let T=d[M.nrn],V=T.far?e()<.25?1:0:(e()<.8?1:0)+(e()<.45?1:0)+(e()<.15?1:0);for(let ne=0;ne<V;ne++){let w=e(),_=M.a.clone().lerp(M.b,w),Ee=new n.Vector3(e()-.5,e()-.5,e()-.5).multiplyScalar(.09*T.scale*(e()<.7?.4:1.4));_.add(Ee),a.push(_.x,_.y,_.z);let be=M.d0+w*M.len;o.push(M.nrn,T.hue,e(),T.maxD?Math.min(1,be/T.maxD):0),r.push(.005+e()*.009,.7+e()*1.4)}}H(new Float32Array(a),new Float32Array(o),new Float32Array(r),0);let u=[],f=[],R=[];for(let M=0;M<1400;M++){let T=e(),V=q.getPointAt(T);u.push(V.x+(e()-.5)*16,V.y+(e()-.5)*10,V.z+(e()-.5)*8),f.push(-1,e()<.7?0:1,e(),0),R.push(.004+e()*.008,.25+e()*.5)}H(new Float32Array(u),new Float32Array(f),new Float32Array(R),1)}let g=new Float32Array(d.length*3),L=new Float32Array(d.length*4),D=new Float32Array(d.length*2);d.forEach((e,a)=>{g.set([e.soma.x,e.soma.y,e.soma.z],a*3),L.set([e.id,e.somaHue,a/d.length,0],a*4),D.set([.045*e.scale,1],a*2)});let Q=H(g,L,D,2,!0),O=new Float32Array(ge*4*3),B=new Float32Array(ge*4*4),re=new Float32Array(ge*4*2);for(let e=0;e<ge*4;e++)B.set([-1,0,0,0],e*4);let I=H(O,B,re,3,!0);I.geometry.setDrawRange(0,0);let k=null,W=p.extensions.has("EXT_color_buffer_float")||p.extensions.has("EXT_color_buffer_half_float")?n.HalfFloatType:n.UnsignedByteType,A=null,ee=12,K=new n.ShaderMaterial({uniforms:{tScene:{value:null},tGlyph:{value:null},uRes:i.uRes,uCell:{value:12},uGlyphN:{value:ft},uTime:i.uTime,uExposure:{value:1},uPixel:{value:.85},uFade:{value:0},uGrain:{value:.05},uDebug:{value:0}},vertexShader:St,fragmentShader:Dt,depthTest:!1,depthWrite:!1}),Xe=new n.Scene,Ye=new n.BufferGeometry;Ye.setAttribute("position",new n.BufferAttribute(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let $e=new n.Mesh(Ye,K);$e.frustumCulled=!1,Xe.add($e);let mt=new n.OrthographicCamera(-1,1,1,-1,0,1);function ht(e){let a=je(e),o=dt(e),r=document.createElement("canvas");r.width=a.width,r.height=a.height;let u=r.getContext("2d");o.forEach((f,R)=>u.drawImage(a,f*e,0,e,e,R*e,0,e,e)),A&&A.dispose(),A=new n.CanvasTexture(r),A.magFilter=n.NearestFilter,A.minFilter=n.NearestFilter,A.generateMipmaps=!1,K.uniforms.tGlyph.value=A,K.uniforms.uCell.value=e}let G=Math.min(window.devicePixelRatio||1,U?1.5:1.6)*E,Je=G,X=1,Y=1;function he(){X=window.innerWidth,Y=window.innerHeight,p.setPixelRatio(G),p.setSize(X,Y,!1);let e=Math.max(1,Math.round(X*G)),a=Math.max(1,Math.round(Y*G));k?k.setSize(e,a):k=new n.WebGLRenderTarget(e,a,{type:W,depthBuffer:!1,stencilBuffer:!1,minFilter:n.LinearFilter,magFilter:n.LinearFilter}),K.uniforms.tScene.value=k.texture,i.uRes.value.set(e,a),v.aspect=X/Y,v.fov=X/Y<.8?62:50,v.updateProjectionMatrix(),i.uPx.value=a/(2*Math.tan(n.MathUtils.degToRad(v.fov)/2)),i.uAperture.value=22*G,i.uProbeR.value=150*G;let o=Math.max(8,Math.round((X<700?8:10)*G));(o!==ee||!A)&&(ee=o,ht(o))}he(),window.addEventListener("resize",he);let Re=new n.Vector3,fe=new n.Vector3,te=new n.Vector3,_e=new n.Vector3,Me=0,Le=0,Pe=0,ze=0,ie=0,le=0,vt=new n.Vector3(-.82,-.34,0),de=new n.Vector3(-.82,-.34,4.6),se=new n.Vector3(-.82,-.34,0),He=se.clone();function xt(e){let a=1-Math.exp(-e*2.4);fe.copy(v.position).lerp(de,a),He.lerp(se,a),ie+=(Pe-ie)*(1-Math.exp(-e*2.5)),le+=(ze-le)*(1-Math.exp(-e*2.5)),v.position.copy(fe),v.lookAt(_e.copy(He).add(te.set(ie*.15,-le*.1,0))),v.updateMatrixWorld()}function yt(e){if(P)return xt(e);Me+=(Le-Me)*(1-Math.exp(-e*3.2));let a=n.MathUtils.clamp(Me,0,1);q.getPointAt(a,fe),q.getPointAt(Math.min(1,a+.035),te);let o=n.MathUtils.smoothstep(a,0,.06);Re.copy(vt).lerp(te,o);let r=n.MathUtils.smoothstep(a,.86,1),u=X/Y<.8?0:1.6;Re.lerp(_e.set(Z.logo.soma.x-u,Z.logo.soma.y-(u?.55:.1),Z.logo.soma.z),r),X/Y<.8&&(fe.z+=1.6*(1-o),fe.y-=.3*(1-o)),ie+=(Pe-ie)*(1-Math.exp(-e*2.5)),le+=(ze-le)*(1-Math.exp(-e*2.5)),v.position.copy(fe),v.lookAt(Re),v.translateX(ie*.22),v.translateY(-le*.14),v.lookAt(_e.copy(Re).add(new n.Vector3(ie*.1,-le*.06,0))),v.updateMatrixWorld()}let Ae=.85,Ze=.85,et=1,Ve=0,Ue=0,ve=z,Fe=z?99:0,Ne=performance.now(),$=[],xe=(e,a,o,r,u)=>{if($.length>=ge)return null;let f={seg:e,t:a>0?0:1,dir:a,kind:o,speed:r,I:u,age:0};return $.push(f),f},J=null;function ce(e,a=!1,o=!1){if(e.refr>0&&!a)return;e.flash=0,e.v=0,e.refr=.45+Math.random()*.35,Ve++,h&&h(Ve,e.id),e.axonRoot>=0&&!o&&!e.locked&&xe(e.axonRoot,1,"axon",2.4,1.6);let r=a?8:2;for(let u=0;u<r;u++)e.roots.length&&xe(e.roots[Math.random()*e.roots.length|0],1,"out",1.7,a?1.3:.8)}function Tt(e){for(let a=$.length-1;a>=0;a--){let o=$[a];o.age+=e;let r=o.speed*e,u=!0;for(;r>0&&u;){let f=y[o.seg];if(o.dir>0){let R=(1-o.t)*f.len;if(r<R)o.t+=r/f.len,r=0;else if(r-=R,f.kids.length)o.seg=f.kids[Math.random()*f.kids.length|0],o.t=0;else if(u=!1,o.kind==="axon"){let M=d[f.nrn],T=d[M.target];o===J?(J=null,S&&S(M.target)):T&&!T.locked&&(T.v+=.62+Math.random()*.3)}}else{let R=o.t*f.len;r<R?(o.t-=r/f.len,r=0):(r-=R,f.parent>=0?(o.seg=f.parent,o.t=1):(u=!1,d[f.nrn].v+=.2))}}(!u||o.age>12)&&(o===J&&(J=null),$.splice(a,1))}}let ke=e=>e.soma.distanceTo(v.position);function Et(e){let a=Ae*(z?0:1);for(let o of d)o.flash+=e,o.refr-=e,ke(o)<16&&o.tips.length&&Math.random()<e*a*(o.far?.5:1.6)*(o===N?2.2:1)&&xe(o.tips[Math.random()*o.tips.length|0],-1,"in",.9+Math.random()*.6,.9),o.v+=e*o.tonic*a,o.v>=1&&!o.locked&&ce(o),c[o.id]=o.flash}let ye=new n.Vector3,Te=e=>(ye.copy(e).project(v),{x:(ye.x*.5+.5)*X,y:(1-(ye.y*.5+.5))*Y,front:ye.z<1&&ye.z>-1}),tt=0,ot=-1,nt=-1,Oe=!1;function at(e){ot=e.clientX,nt=e.clientY,Oe=!0,Pe=e.clientX/X*2-1,ze=e.clientY/Y*2-1,i.uMouse.value.set(e.clientX*G,(Y-e.clientY)*G),e.pointerType==="mouse"&&(i.uMouseOn.value=1)}window.addEventListener("pointermove",at,{passive:!0}),document.addEventListener("pointerleave",()=>{i.uMouseOn.value=0,Pe=ze=0});function bt(e){if(!Oe||e-tt<.09||U)return;tt=e,Oe=!1;let a=-1,o=90*90;for(let r of d)if(!(r.far||ke(r)>11))for(let u=0;u<10;u++){let f=r.tips[Math.random()*r.tips.length|0];if(f===void 0)break;let R=Te(y[f].b);if(!R.front)continue;let M=R.x-ot,T=R.y-nt,V=M*M+T*T;V<o&&(o=V,a=f)}a>=0&&xe(a,-1,"in",1.1,1.1)}function wt(e,a){let o=null,r=1/0;for(let u of d){if(u.far)continue;let f=ke(u);if(f>14)continue;let R=Te(u.soma);if(!R.front)continue;let M=R.x-e,T=R.y-a,V=Math.sqrt(M*M+T*T)+f*18;V<r&&(r=V,o=u)}return o?(ce(o,!0),Te(o.soma)):null}let Be=I.geometry.attributes.position.array,rt=I.geometry.attributes.aSize.array,oe=new n.Vector3;function gt(){let e=0,a=[];for(let o of $){let r=y[o.seg];for(let u=0;u<4;u++){let f=n.MathUtils.clamp(o.t-o.dir*u*(.05/r.len),0,1);oe.copy(r.a).lerp(r.b,f),Be[e*3]=oe.x,Be[e*3+1]=oe.y,Be[e*3+2]=oe.z,rt[e*2]=(o===J?.034:o.kind==="axon"?.016:.012)*(1-u*.22),rt[e*2+1]=o.I*(1-u*.28)*Math.min(1,o.age*6),e++}oe.copy(r.a).lerp(r.b,o.t),a.push({x:oe.x,y:oe.y,z:oe.z,I:o.I,d:oe.distanceToSquared(v.position)})}I.geometry.setDrawRange(0,e),I.geometry.attributes.position.needsUpdate=!0,I.geometry.attributes.aSize.needsUpdate=!0,a.sort((o,r)=>o.d-r.d);for(let o=0;o<Ge;o++){let r=a[o];r?s[o].set(r.x,r.y,r.z,r.I):s[o].set(0,0,0,0)}}let st=Q.geometry.attributes.aSize.array;function Rt(){for(let e of d){let a=e.flash<2?Math.exp(-e.flash*2.2):0;st[e.id*2]=.045*e.scale*(1+a*.7),st[e.id*2+1]=(.75+a*3)*(e.far?.7:1)}Q.geometry.attributes.aSize.needsUpdate=!0}let it=new n.Vector3;function Mt(){v.getWorldDirection(it);let e=4.6,a=-1/0;for(let o of d){if(o.far)continue;te.copy(o.soma).sub(v.position);let r=te.length();if(r<.8||r>12)continue;let u=te.dot(it)/r;if(u<.55)continue;let f=u*3-r*.35;f>a&&(a=f,e=r)}return e}P&&v.position.copy(de);let We=0,pe=0,Ce=!1,me=0,Se=0,lt=0,Ke=!1;function ct(e){if(We=requestAnimationFrame(ct),window.__s9mFrameGap&&pe&&e-pe<window.__s9mFrameGap)return;let a=Math.min(.05,pe?(e-pe)/1e3:.016);pe=e,Ue+=a,lt++,ve&&Fe<50&&(Fe=(performance.now()-Ne)/1e3),i.uTime.value=Ue,i.uGrow.value=Fe,Ae+=(Ze-Ae)*(1-Math.exp(-a*1.5)),i.uGain.value+=(et*(.75+.35*Ae)-i.uGain.value)*(1-Math.exp(-a*2)),ve&&(K.uniforms.uFade.value=Math.min(1,(performance.now()-Ne)/900)),yt(a),i.uFocus.value+=((P?v.position.distanceTo(He):Mt())-i.uFocus.value)*(1-Math.exp(-a*2.2)),ve&&(Et(a),Tt(a),bt(Ue)),gt(),Rt(),p.setRenderTarget(k),p.clear(),p.render(C,v),p.setRenderTarget(null),p.render(Xe,mt),!window.__s9mFrameGap&&lt>30&&(a>.026?(me+=a,Se=0):a<.013?(Se+=a,me=0):me=Math.max(0,me-a),me>1.2&&G>.6?(G=Math.max(.6,G*.8),me=0,he()):Se>4&&G<Je&&(G=Math.min(Je,G*1.15),Se=0,he()))}function qe(){!Ke&&!Ce&&!document.hidden&&(Ce=!0,pe=0,We=requestAnimationFrame(ct))}function De(){Ce=!1,cancelAnimationFrame(We)}let ut=()=>document.hidden?De():qe();return document.addEventListener("visibilitychange",ut),t.addEventListener("webglcontextlost",e=>{e.preventDefault(),De(),!Ke&&!P&&document.documentElement.classList.add("no-gl")}),qe(),{start(){ve||(ve=!0,Ne=performance.now(),Fe=l?99:0,P||setTimeout(()=>ce(N,!0),l?100:2100))},setProgress(e){Le=e},snap(){Me=Le},setActivity(e,a={}){Ze=e,et=a.gain??1,i.uDusk.value=a.dusk??0},fireAt:wt,burst(e=6){d.filter(o=>!o.far&&ke(o)<12).sort(()=>Math.random()-.5).slice(0,e).forEach((o,r)=>setTimeout(()=>ce(o,!0),r*140))},get spikes(){return Ve},_comp:K,chain:j,frame(e,a,o=!1){let r=d[e].soma,u=d[a].soma;se.copy(r).lerp(u,.55);let f=r.distanceTo(u),R=X/Y<.8;de.copy(se).add(te.set(0,.5,Math.max(4.4,f*(R?1.7:1.05)+2.2))),o&&(v.position.copy(de),He.copy(se)),i.uFocus.value=de.distanceTo(se)},frameOne(e,a=5,o=0){let r=d[e].soma;se.copy(r).add(te.set(0,-o,0)),de.copy(se).add(te.set(0,.3,a))},fireGame(e,a){let o=d[e];if(ce(o,!0,!0),J){let r=$.indexOf(J);r>=0&&$.splice(r,1)}J=o.axonRoot>=0?xe(o.axonRoot,1,"axon",F[e]/a,3.2):null},fireCell(e){ce(d[e],!0,!0)},killGamePulse(){if(J){let e=$.indexOf(J);e>=0&&$.splice(e,1),J=null}},project(e){return Te(d[e].soma)},screen(e){return Te(e)},axonPath(e){let a=d[e],o=[a.soma.clone()],r=a.axonRoot;for(;r>=0;)o.push(y[r].b.clone()),r=y[r].kids.length===1?y[r].kids[0]:-1;return a.target>=0&&o.push(d[a.target].soma.clone()),o},celebrate(){d.filter(e=>!e.far).forEach((e,a)=>setTimeout(()=>ce(e,!0,!0),60*a))},pause(){De()},resume(){qe()},get running(){return Ce},dispose(){Ke=!0,De(),window.removeEventListener("resize",he),window.removeEventListener("pointermove",at),document.removeEventListener("visibilitychange",ut),C.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),k&&k.dispose(),A&&A.dispose(),p.dispose(),p.forceContextLoss&&p.forceContextLoss()},info:()=>({segments:y.length,neurons:d.length,pulses:$.length,pr:G,focus:i.uFocus.value})}}export{_t as initNeural};
