import*as a from"three";var We=[()=>{},t=>{t.beginPath(),t.arc(.5,.5,.09,0,7),t.fill()},t=>{t.fillRect(.44,.3,.12,.4),t.fillRect(.3,.44,.4,.12)},t=>{t.beginPath(),t.moveTo(.32,.32),t.lineTo(.68,.68),t.moveTo(.68,.32),t.lineTo(.32,.68),t.stroke()},t=>{t.beginPath(),t.arc(.5,.5,.22,0,7),t.stroke()},t=>{t.beginPath(),t.arc(.18,.5,.26,-.9,.9),t.stroke(),t.beginPath(),t.arc(.82,.5,.26,Math.PI-.9,Math.PI+.9),t.stroke()},t=>{t.beginPath(),t.moveTo(.5,.2),t.lineTo(.8,.5),t.lineTo(.5,.8),t.lineTo(.2,.5),t.closePath(),t.stroke()},t=>{t.beginPath(),t.ellipse(.5,.5,.22,.17,0,0,7),t.stroke(),t.beginPath(),t.moveTo(.5,.18),t.lineTo(.5,.82),t.stroke()},t=>{t.beginPath(),t.arc(.5,.56,.12,0,7),t.fill(),t.beginPath(),t.moveTo(.5,.44),t.lineTo(.5,.16),t.moveTo(.4,.62),t.lineTo(.18,.82),t.moveTo(.6,.62),t.lineTo(.82,.82),t.stroke()},t=>{t.beginPath(),t.moveTo(.24,.22),t.lineTo(.76,.22),t.lineTo(.5,.5),t.closePath(),t.moveTo(.24,.78),t.lineTo(.76,.78),t.lineTo(.5,.5),t.closePath(),t.fill()},t=>{t.beginPath(),t.moveTo(.24,.24),t.quadraticCurveTo(.24,.58,.5,.58),t.quadraticCurveTo(.76,.58,.76,.24),t.moveTo(.5,.18),t.lineTo(.5,.84),t.moveTo(.36,.84),t.lineTo(.64,.84),t.stroke()},t=>{t.beginPath(),t.moveTo(.5,.86),t.lineTo(.5,.52),t.lineTo(.26,.24),t.moveTo(.5,.52),t.lineTo(.74,.24),t.stroke(),t.beginPath(),t.arc(.26,.22,.08,0,7),t.arc(.74,.22,.08,0,7),t.fill(),t.beginPath(),t.arc(.5,.52,.08,0,7),t.fill()},t=>{t.beginPath(),t.moveTo(.22,.22),t.lineTo(.42,.22),t.lineTo(.5,.32),t.lineTo(.58,.22),t.lineTo(.78,.22),t.lineTo(.78,.78),t.lineTo(.58,.78),t.lineTo(.5,.68),t.lineTo(.42,.78),t.lineTo(.22,.78),t.closePath(),t.fill()},t=>{t.beginPath(),t.moveTo(.5,.14),t.lineTo(.86,.5),t.lineTo(.5,.86),t.lineTo(.14,.5),t.closePath(),t.fill()},t=>{t.beginPath();for(let x=0;x<8;x++){let V=x/8*Math.PI*2,T=x%2?.14:.4;t.lineTo(.5+Math.cos(V)*T,.5+Math.sin(V)*T)}t.closePath(),t.fill()},t=>{t.beginPath(),t.moveTo(.26,.14),t.arcTo(.86,.14,.86,.86,.12),t.arcTo(.86,.86,.14,.86,.12),t.arcTo(.14,.86,.14,.14,.12),t.arcTo(.14,.14,.86,.14,.12),t.closePath(),t.fill()}],gt=We.length;function Pt(t,x,V,T,f,p=.085){t.save(),t.translate(V,T),t.scale(f,f),t.lineWidth=p,t.lineCap="round",t.lineJoin="round",We[x](t),t.restore()}function at(t){let x=document.createElement("canvas");x.width=t*We.length,x.height=t;let V=x.getContext("2d");V.fillStyle="#fff",V.strokeStyle="#fff";let T=t<12?.13:.1;for(let f=0;f<We.length;f++)Pt(V,f,f*t,0,t,T);return x}function yt(t=24){let x=at(t),V=x.getContext("2d").getImageData(0,0,x.width,x.height).data;return We.map((f,p)=>{let H=0;for(let o=0;o<t;o++)for(let z=0;z<t;z++)H+=V[(o*x.width+p*t+z)*4+3];return[p,H]}).sort((f,p)=>f[1]-p[1]).map(f=>f[0])}var He=Math.PI*2,Ke=40,Oe=320,je=24;function st(t){return()=>{t|=0,t=t+1831565813|0;let x=Math.imul(t^t>>>15,1|t);return x=x+Math.imul(x^x>>>7,61|x)^x,((x^x>>>14)>>>0)/4294967296}}function St(t,x=!1,V=!1){let T=st(t),f=(d,h)=>d+(h-d)*T(),p=(d,h,c)=>new a.Vector3(d,h,c),H=[],o=[],z=new a.CatmullRomCurve3([p(-.82,-.34,4.6),p(-.7,-.28,2.2),p(-.1,-.7,-1.2),p(.9,-1.5,-4.6),p(-.3,-2.3,-8.4),p(.7,-3.2,-12.2),p(-.4,-4.2,-16.2),p(-.8,-4.9,-19.6),p(-1.6,-5.1,-21.6)],!1,"centripetal",.5),K=(d,h,c,i,R,C,A,O)=>{let k=o.length;return o.push({a:h,b:c,len:h.distanceTo(c),w0:i,w1:R,d0:C,d1:C+h.distanceTo(c),nrn:d.id,parent:A,kids:[],axon:O,cap0:A<0?1:0,cap1:1}),A>=0&&(o[A].kids.push(k),o[A].cap1=0),k},te=d=>{let h=T()*He,c=(T()*2-1)*d,i=Math.sqrt(Math.max(0,1-c*c));return p(Math.cos(h)*i,Math.sin(h)*i,c).normalize()};function ae(d,h,c,i,R,C,A,O,k){let Y=.055*d.scale,$=Math.max(2,Math.round(i/Y)),j=h.clone(),re=c.clone(),q=p(f(-1,1),f(-1,1),f(-1,1)*k).multiplyScalar(.06),D=O;for(let U=0;U<$;U++){re.add(p(f(-1,1),f(-1,1),f(-1,1)*k).multiplyScalar(.2)).add(q).normalize();let P=j.clone().addScaledVector(re,i/$),se=U/$,Q=(U+1)/$;D=K(d,j,P,R*(1-.42*se),R*(1-.42*Q),A,D,!1),A+=i/$,j=P}if(d.maxD=Math.max(d.maxD,A),C>0){let U=T()<.2?3:2;for(let P=0;P<U;P++){let se=p(0,0,0).crossVectors(re,te(1)).normalize(),Q=re.clone().applyAxisAngle(se,f(.32,.78)*(P%2?1:-1));ae(d,j,Q,i*f(.6,.8),R*f(.58,.72),C-1,A,D,k)}}else d.tips.push(D)}function y(d,h){let c={id:H.length,soma:d.clone(),scale:h.scale,hue:h.hue,maxD:0,roots:[],tips:[],axonRoot:-1,axonTips:[],target:-1,v:T()*.6,refr:0,flash:99,delay:h.delay,tonic:h.tonic||0,somaHue:h.somaHue??h.hue,far:!!h.far};H.push(c);let i=h.flat??.55,R=h.primaries,C=T()*He;for(let A=0;A<R;A++){let O=C+A/R*He+f(-.35,.35),k=f(-1,1)*i,Y=p(Math.cos(O),Math.sin(O),k).normalize(),$=c.soma.clone().addScaledVector(Y,.07*c.scale),j=o.length;ae(c,$,Y,f(.5,.85)*c.scale,f(.011,.017)*c.scale,h.depth,0,-1,i),c.roots.push(j)}return c}function E(d,h){let c=d.soma.clone(),i=h.soma.clone().add(p(f(-.5,.5),f(-.5,.5),f(-.3,.3)).multiplyScalar(h.scale*.6)),R=c.clone().lerp(i,.5).add(p(f(-1,1),f(-1,1),f(-1,1)).multiplyScalar(c.distanceTo(i)*.22)),C=new a.QuadraticBezierCurve3(c,R,i),A=C.getLength(),O=Math.max(6,Math.round(A/.09)),k=-1,Y=0,$=C.getPoint(0),j=.0045*d.scale;for(let q=1;q<=O;q++){let D=C.getPoint(q/O).add(p(f(-1,1),f(-1,1),f(-1,1)).multiplyScalar(.012)),U=K(d,$,D,j,j,Y,k,!0);q===1&&(d.axonRoot=U),Y+=$.distanceTo(D),$=D,k=U}let re=k;for(let q=0;q<3;q++){let D=$.clone(),U=te(1),P=re;for(let se=0;se<4;se++){U.add(te(1).multiplyScalar(.4)).normalize();let Q=D.clone().addScaledVector(U,.06*h.scale);P=K(d,D,Q,j*.8,j*.7,Y+se*.06,P,!0),D=Q}d.axonTips.push(P)}d.target=h.id}let oe=y(p(0,0,0),{scale:1.75,hue:0,primaries:7,depth:x?4:5,delay:.15,tonic:.5}),ne=y(p(2.5,-2,-1.6),{scale:1.25,hue:1,somaHue:4,primaries:6,depth:4,delay:.6}),m=[],M=V?8:x?13:19;for(let d=0;d<M;d++){let h=.1+d/(M-1)*.82,c=z.getPointAt(h),i=z.getTangentAt(h),R=p(0,1,0).cross(i).normalize(),C=i.clone().cross(R).normalize(),A=f(0,He),O=f(1.35,2.7),k=c.clone().addScaledVector(R,Math.cos(A)*O*1.25).addScaledVector(C,Math.sin(A)*O*.9).addScaledVector(i,f(-.8,.8));m.push(y(k,{scale:f(.95,1.45),hue:T()<.7?0:T()<.6?1:2,somaHue:T()<.12?4:void 0,primaries:5+(T()*2|0),depth:x?3:T()<.5?4:3,delay:.9+h*1.6,tonic:.08}))}for(let d=0;d<(x?6:V?9:12);d++){let h=T(),c=z.getPointAt(h),i=f(0,He),R=f(6,12);y(c.clone().add(p(Math.cos(i)*R*1.3,Math.sin(i)*R*.8,f(-6,-2))),{scale:f(1.4,2.2),hue:T()<.5?1:3,primaries:6,depth:2,delay:.5+T(),far:!0,tonic:.12})}let F={id:H.length,soma:p(0,-5.2,-27.2),scale:1.9,hue:0,maxD:0,roots:[],tips:[],axonRoot:-1,axonTips:[],target:-1,v:0,refr:0,flash:99,delay:1.2,tonic:.2,somaHue:0,far:!1,logo:!0};H.push(F),At(F,K),E(oe,ne),E(ne,m[0]);for(let d=0;d<m.length-1;d++)E(m[d],m[d+1]);E(m[m.length-1],F);for(let d of H)if(d.far){let h=null,c=1e9;for(let i of H)if(i!==d&&!i.logo){let R=i.soma.distanceTo(d.soma);R<c&&(c=R,h=i)}h&&E(d,h)}let b=[oe.id,ne.id,...m.map(d=>d.id),F.id];return{neurons:H,segs:o,route:z,logo:F,chain:b}}function At(t,x){let V=[[47,42],[97,42],[210,42],[260,42],[110,333],[196,333]],T=2.5/369,f=152,p=238,H=(E,oe)=>new a.Vector3((E-f)*T,-(oe-p)*T,0).add(t.soma),o=.009,z=(E,oe,ne,m)=>{let M=oe,F=ne,b=-1;for(let d=0;d<E.length-1;d++){let h=H(...E[d]),c=H(...E[d+1]),i=Math.max(1,Math.round(h.distanceTo(c)/.05));for(let R=0;R<i;R++){let C=h.clone().lerp(c,R/i),A=h.clone().lerp(c,(R+1)/i);M=x(t,C,A,m,m,F,M,!1),b<0&&(b=M),F+=C.distanceTo(A)}}return t.maxD=Math.max(t.maxD,F),{first:b,last:M,d:F}},K=z([[152,212],[152,162]],-1,0,o*1.4),te=z([[152,162],[100,112],[100,95]],K.last,K.d,o),ae=z([[153,162],[207,112],[207,95]],K.last,K.d,o);for(let E of[[60,58],[98,59]])t.tips.push(z([[100,95],E],te.last,te.d,o*.85).last);for(let E of[[247,58],[209,59]])t.tips.push(z([[207,95],E],ae.last,ae.d,o*.85).last);let y=z([[152,264],[152,292]],-1,0,o*1.4);for(let E of[[122,320],[184,320]])t.tips.push(z([[152,292],E],y.last,y.d,o).last);t.roots.push(K.first,y.first);for(let[E,oe]of V){let ne=H(E,oe),m=17*T,M=16,F=-1;for(let b=0;b<M;b++){let d=b/M*He,h=(b+1)/M*He;F=x(t,ne.clone().add(new a.Vector3(Math.cos(d)*m,Math.sin(d)*m,0)),ne.clone().add(new a.Vector3(Math.cos(h)*m,Math.sin(h)*m,0)),o*.9,o*.9,t.maxD*.97,F,!1)}}}var xt=`
uniform vec2 uRes;
uniform float uPx, uFocus, uAperture, uTime, uGrow, uGain, uNear, uProbeR, uMouseOn, uDusk;
uniform vec2 uMouse;
uniform vec4 uPulse[${je}];
uniform float uFlash[${Ke}];
uniform float uDelay[${Ke}];
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
  for (int k = 0; k < ${je}; k++) { vec3 d = p - uPulse[k].xyz; s += uPulse[k].w * exp(-dot(d, d) * 70.0); }
  return s;
}
`,zt=`
${xt}
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
`,Ht=`
${xt}
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
`;function bt(t,{onSpike:x,onArrive:V,quality:T=1,grown:f=!1,mode:p="page"}={}){let H=p==="game",o;try{o=new a.WebGLRenderer({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1})}catch{return null}if(!o.capabilities.isWebGL2)return o.dispose(),null;o.setClearColor(0,0),o.autoClear=!1;let z=matchMedia("(prefers-reduced-motion: reduce)").matches,K=matchMedia("(pointer: coarse)").matches,te=K||(navigator.hardwareConcurrency||8)<=4,ae=St(919,te,H),{neurons:y,segs:E,route:oe,chain:ne}=ae;H&&ne.forEach(e=>{y[e].locked=!0,y[e].tonic=0});let m=new Float32Array(y.length);E.forEach(e=>{e.axon&&(m[e.nrn]=Math.max(m[e.nrn],e.d1))});let M=y[0],F=new a.Scene,b=new a.PerspectiveCamera(50,1,.05,80);F.add(b);let d=Array.from({length:je},()=>new a.Vector4(0,0,0,0)),h=new Float32Array(Ke).fill(99),c=new Float32Array(Ke).fill(0);y.forEach(e=>c[e.id]=e.delay);let i={uRes:{value:new a.Vector2(1,1)},uPx:{value:800},uFocus:{value:4.6},uAperture:{value:26},uTime:{value:0},uGrow:{value:z?99:0},uGain:{value:1},uNear:{value:.06},uProbeR:{value:150},uMouseOn:{value:0},uMouse:{value:new a.Vector2(-9999,-9999)},uDusk:{value:0},uPulse:{value:d},uFlash:{value:h},uDelay:{value:c}},R={transparent:!0,depthTest:!1,depthWrite:!1,blending:a.CustomBlending,blendEquation:a.AddEquation,blendSrc:a.OneFactor,blendDst:a.OneFactor,blendSrcAlpha:a.OneFactor,blendDstAlpha:a.OneFactor};{let e=E.length,s=new Float32Array(e*3),n=new Float32Array(e*3),l=new Float32Array(e*2),v=new Float32Array(e*3),g=new Float32Array(e*4),G=st(77),_=new Float32Array(y.length);E.forEach(L=>{L.axon&&(_[L.nrn]=Math.max(_[L.nrn],L.d1))}),E.forEach((L,J)=>{let Ue=y[L.nrn];s.set([L.a.x,L.a.y,L.a.z],J*3),n.set([L.b.x,L.b.y,L.b.z],J*3),l[J*2]=L.w0,l[J*2+1]=L.w1;let Ve=.5*(L.d0+L.d1);v[J*3]=Ve,v[J*3+1]=L.axon?Math.min(1,Ve/(_[L.nrn]||1)):Ue.maxD>0?Math.min(1,Ve/Ue.maxD):0,v[J*3+2]=L.cap0+2*L.cap1,g[J*4]=L.nrn,g[J*4+1]=L.axon?1:Ue.hue,g[J*4+2]=G(),g[J*4+3]=L.axon?1:0});let S=new a.InstancedBufferGeometry;S.setAttribute("position",new a.BufferAttribute(new Float32Array([0,-1,0,0,1,0,1,-1,0,1,1,0]),3)),S.setIndex([0,2,1,1,2,3]),S.setAttribute("iA",new a.InstancedBufferAttribute(s,3)),S.setAttribute("iB",new a.InstancedBufferAttribute(n,3)),S.setAttribute("iW",new a.InstancedBufferAttribute(l,2)),S.setAttribute("iD",new a.InstancedBufferAttribute(v,3)),S.setAttribute("iInfo",new a.InstancedBufferAttribute(g,4)),S.instanceCount=e;let ee=new a.ShaderMaterial({uniforms:i,vertexShader:zt,fragmentShader:Ft,...R}),we=new a.Mesh(S,ee);we.frustumCulled=!1,F.add(we)}let C=(e,s,n,l,v=!1)=>{let g=new a.BufferGeometry,G=new a.BufferAttribute(e,3),_=new a.BufferAttribute(s,4),S=new a.BufferAttribute(n,2);v&&(G.setUsage(a.DynamicDrawUsage),S.setUsage(a.DynamicDrawUsage)),g.setAttribute("position",G),g.setAttribute("aInfo",_),g.setAttribute("aSize",S);let ee=new a.ShaderMaterial({uniforms:{...i,uKind:{value:l}},vertexShader:Ht,fragmentShader:Ct,...R}),we=new a.Points(g,ee);return we.frustumCulled=!1,F.add(we),we};{let e=st(5),s=[],n=[],l=[];for(let _ of E){if(_.axon&&e()<.6)continue;let S=y[_.nrn],ee=S.far?e()<.25?1:0:(e()<.8?1:0)+(e()<.45?1:0)+(e()<.15?1:0);for(let we=0;we<ee;we++){let L=e(),J=_.a.clone().lerp(_.b,L),Ue=new a.Vector3(e()-.5,e()-.5,e()-.5).multiplyScalar(.09*S.scale*(e()<.7?.4:1.4));J.add(Ue),s.push(J.x,J.y,J.z);let Ve=_.d0+L*_.len;n.push(_.nrn,S.hue,e(),S.maxD?Math.min(1,Ve/S.maxD):0),l.push(.005+e()*.009,.7+e()*1.4)}}C(new Float32Array(s),new Float32Array(n),new Float32Array(l),0);let v=[],g=[],G=[];for(let _=0;_<1400;_++){let S=e(),ee=oe.getPointAt(S);v.push(ee.x+(e()-.5)*16,ee.y+(e()-.5)*10,ee.z+(e()-.5)*8),g.push(-1,e()<.7?0:1,e(),0),G.push(.004+e()*.008,.25+e()*.5)}C(new Float32Array(v),new Float32Array(g),new Float32Array(G),1)}let A=new Float32Array(y.length*3),O=new Float32Array(y.length*4),k=new Float32Array(y.length*2);y.forEach((e,s)=>{A.set([e.soma.x,e.soma.y,e.soma.z],s*3),O.set([e.id,e.somaHue,s/y.length,0],s*4),k.set([.045*e.scale,1],s*2)});let Y=C(A,O,k,2,!0),$=new Float32Array(Oe*4*3),j=new Float32Array(Oe*4*4),re=new Float32Array(Oe*4*2);for(let e=0;e<Oe*4;e++)j.set([-1,0,0,0],e*4);let q=C($,j,re,3,!0);q.geometry.setDrawRange(0,0);let D=null,U=o.extensions.has("EXT_color_buffer_float")||o.extensions.has("EXT_color_buffer_half_float")?a.HalfFloatType:a.UnsignedByteType,P=null,se=12,Q=new a.ShaderMaterial({uniforms:{tScene:{value:null},tGlyph:{value:null},uRes:i.uRes,uCell:{value:12},uGlyphN:{value:gt},uTime:i.uTime,uExposure:{value:1},uPixel:{value:.85},uFade:{value:0},uGrain:{value:.05},uDebug:{value:0}},vertexShader:Lt,fragmentShader:Dt,depthTest:!1,depthWrite:!1}),Te=new a.Scene,le=new a.BufferGeometry;le.setAttribute("position",new a.BufferAttribute(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let Ee=new a.Mesh(le,Q);Ee.frustumCulled=!1,Te.add(Ee);let Me=new a.OrthographicCamera(-1,1,1,-1,0,1);function Ie(e){let s=at(e),n=yt(e),l=document.createElement("canvas");l.width=s.width,l.height=s.height;let v=l.getContext("2d");n.forEach((g,G)=>v.drawImage(s,g*e,0,e,e,G*e,0,e,e)),P&&P.dispose(),P=new a.CanvasTexture(l),P.magFilter=a.NearestFilter,P.minFilter=a.NearestFilter,P.generateMipmaps=!1,Q.uniforms.tGlyph.value=P,Q.uniforms.uCell.value=e}let W=Math.min(window.devicePixelRatio||1,K?1.5:1.6)*T,ke=W,Z=1,ie=1;function de(){Z=window.innerWidth,ie=window.innerHeight,o.setPixelRatio(W),o.setSize(Z,ie,!1);let e=Math.max(1,Math.round(Z*W)),s=Math.max(1,Math.round(ie*W));D?D.setSize(e,s):D=new a.WebGLRenderTarget(e,s,{type:U,depthBuffer:!1,stencilBuffer:!1,minFilter:a.LinearFilter,magFilter:a.LinearFilter}),Q.uniforms.tScene.value=D.texture,i.uRes.value.set(e,s),b.aspect=Z/ie,b.fov=Z/ie<.8?62:50,b.updateProjectionMatrix(),i.uPx.value=s/(2*Math.tan(a.MathUtils.degToRad(b.fov)/2)),i.uAperture.value=22*W,i.uProbeR.value=150*W;let n=Math.max(8,Math.round((Z<700?8:10)*W));(n!==se||!P)&&(se=n,Ie(n))}de(),window.addEventListener("resize",de);let Ce=new a.Vector3,pe=new a.Vector3,ce=new a.Vector3,ve=new a.Vector3,Re=0,Ge=0,ue=0,ge=0,ye=0,he=0,Qe=new a.Vector3(-.82,-.34,0),xe=new a.Vector3(-.82,-.34,4.6),fe=new a.Vector3(-.82,-.34,0),Pe=fe.clone();function Xe(e){let s=1-Math.exp(-e*2.4);pe.copy(b.position).lerp(xe,s),Pe.lerp(fe,s),ye+=(ue-ye)*(1-Math.exp(-e*2.5)),he+=(ge-he)*(1-Math.exp(-e*2.5)),b.position.copy(pe),b.lookAt(ve.copy(Pe).add(ce.set(ye*.15,-he*.1,0))),b.updateMatrixWorld()}function Ye(e){if(H)return Xe(e);Re+=(Ge-Re)*(1-Math.exp(-e*3.2));let s=a.MathUtils.clamp(Re,0,1);oe.getPointAt(s,pe),oe.getPointAt(Math.min(1,s+.035),ce);let n=a.MathUtils.smoothstep(s,0,.06);Ce.copy(Qe).lerp(ce,n);let l=a.MathUtils.smoothstep(s,.86,1),v=Z/ie<.8?0:1.6;Ce.lerp(ve.set(ae.logo.soma.x-v,ae.logo.soma.y-(v?.55:.1),ae.logo.soma.z),l),Z/ie<.8&&(pe.z+=1.6*(1-n),pe.y-=.3*(1-n)),ye+=(ue-ye)*(1-Math.exp(-e*2.5)),he+=(ge-he)*(1-Math.exp(-e*2.5)),b.position.copy(pe),b.lookAt(Ce),b.translateX(ye*.22),b.translateY(-he*.14),b.lookAt(ve.copy(Ce).add(new a.Vector3(ye*.1,-he*.06,0))),b.updateMatrixWorld()}let Se=.85,$e=.85,_e=1,Ae=0,r=0,w=z,u=z?99:0,I=performance.now(),B=[],me=(e,s,n,l,v)=>{if(B.length>=Oe)return null;let g={seg:e,t:s>0?0:1,dir:s,kind:n,speed:l,I:v,age:0};return B.push(g),g},N=null;function X(e,s=!1,n=!1){if(e.refr>0&&!s)return;e.flash=0,e.v=0,e.refr=.45+Math.random()*.35,Ae++,x&&x(Ae,e.id),e.axonRoot>=0&&!n&&!e.locked&&me(e.axonRoot,1,"axon",2.4,1.6);let l=s?8:2;for(let v=0;v<l;v++)e.roots.length&&me(e.roots[Math.random()*e.roots.length|0],1,"out",1.7,s?1.3:.8)}function ze(e){for(let s=B.length-1;s>=0;s--){let n=B[s];n.age+=e;let l=n.speed*e,v=!0;for(;l>0&&v;){let g=E[n.seg];if(n.dir>0){let G=(1-n.t)*g.len;if(l<G)n.t+=l/g.len,l=0;else if(l-=G,g.kids.length)n.seg=g.kids[Math.random()*g.kids.length|0],n.t=0;else if(v=!1,n.kind==="axon"){let _=y[g.nrn],S=y[_.target];n===N?(N=null,V&&V(_.target)):S&&!S.locked&&(S.v+=.62+Math.random()*.3)}}else{let G=n.t*g.len;l<G?(n.t-=l/g.len,l=0):(l-=G,g.parent>=0?(n.seg=g.parent,n.t=1):(v=!1,y[g.nrn].v+=.2))}}(!v||n.age>12)&&(n===N&&(N=null),B.splice(s,1))}}let Fe=e=>e.soma.distanceTo(b.position);function wt(e){let s=Se*(z?0:1);for(let n of y)n.flash+=e,n.refr-=e,Fe(n)<16&&n.tips.length&&Math.random()<e*s*(n.far?.5:1.6)*(n===M?2.2:1)&&me(n.tips[Math.random()*n.tips.length|0],-1,"in",.9+Math.random()*.6,.9),n.v+=e*n.tonic*s,n.v>=1&&!n.locked&&X(n),h[n.id]=n.flash}let Be=new a.Vector3,Ne=e=>(Be.copy(e).project(b),{x:(Be.x*.5+.5)*Z,y:(1-(Be.y*.5+.5))*ie,front:Be.z<1&&Be.z>-1}),it=0,rt=-1,lt=-1,Je=!1;function ct(e){rt=e.clientX,lt=e.clientY,Je=!0,ue=e.clientX/Z*2-1,ge=e.clientY/ie*2-1,i.uMouse.value.set(e.clientX*W,(ie-e.clientY)*W),e.pointerType==="mouse"&&(i.uMouseOn.value=1)}window.addEventListener("pointermove",ct,{passive:!0}),document.addEventListener("pointerleave",()=>{i.uMouseOn.value=0,ue=ge=0});function Tt(e){if(!Je||e-it<.09||K)return;it=e,Je=!1;let s=-1,n=90*90;for(let l of y)if(!(l.far||Fe(l)>11))for(let v=0;v<10;v++){let g=l.tips[Math.random()*l.tips.length|0];if(g===void 0)break;let G=Ne(E[g].b);if(!G.front)continue;let _=G.x-rt,S=G.y-lt,ee=_*_+S*S;ee<n&&(n=ee,s=g)}s>=0&&me(s,-1,"in",1.1,1.1)}function Et(e,s){let n=null,l=1/0;for(let v of y){if(v.far)continue;let g=Fe(v);if(g>14)continue;let G=Ne(v.soma);if(!G.front)continue;let _=G.x-e,S=G.y-s,ee=Math.sqrt(_*_+S*S)+g*18;ee<l&&(l=ee,n=v)}return n?(X(n,!0),Ne(n.soma)):null}let Ze=q.geometry.attributes.position.array,ut=q.geometry.attributes.aSize.array,be=new a.Vector3;function kt(){let e=0,s=[];for(let n of B){let l=E[n.seg];for(let v=0;v<4;v++){let g=a.MathUtils.clamp(n.t-n.dir*v*(.05/l.len),0,1);be.copy(l.a).lerp(l.b,g),Ze[e*3]=be.x,Ze[e*3+1]=be.y,Ze[e*3+2]=be.z,ut[e*2]=(n===N?.034:n.kind==="axon"?.016:.012)*(1-v*.22),ut[e*2+1]=n.I*(1-v*.28)*Math.min(1,n.age*6),e++}be.copy(l.a).lerp(l.b,n.t),s.push({x:be.x,y:be.y,z:be.z,I:n.I,d:be.distanceToSquared(b.position)})}q.geometry.setDrawRange(0,e),q.geometry.attributes.position.needsUpdate=!0,q.geometry.attributes.aSize.needsUpdate=!0,s.sort((n,l)=>n.d-l.d);for(let n=0;n<je;n++){let l=s[n];l?d[n].set(l.x,l.y,l.z,l.I):d[n].set(0,0,0,0)}}let ft=Y.geometry.attributes.aSize.array;function Mt(){for(let e of y){let s=e.flash<2?Math.exp(-e.flash*2.2):0;ft[e.id*2]=.045*e.scale*(1+s*.7),ft[e.id*2+1]=(.75+s*3)*(e.far?.7:1)}Y.geometry.attributes.aSize.needsUpdate=!0}let dt=new a.Vector3;function Rt(){b.getWorldDirection(dt);let e=4.6,s=-1/0;for(let n of y){if(n.far)continue;ce.copy(n.soma).sub(b.position);let l=ce.length();if(l<.8||l>12)continue;let v=ce.dot(dt)/l;if(v<.55)continue;let g=v*3-l*.35;g>s&&(s=g,e=l)}return e}H&&b.position.copy(xe);let et=0,Le=0,tt=!1,De=0,qe=0,pt=0,ot=!1;function ht(e){if(et=requestAnimationFrame(ht),window.__s9mFrameGap&&Le&&e-Le<window.__s9mFrameGap)return;let s=Math.min(.05,Le?(e-Le)/1e3:.016);Le=e,r+=s,pt++,w&&u<50&&(u=(performance.now()-I)/1e3),i.uTime.value=r,i.uGrow.value=u,Se+=($e-Se)*(1-Math.exp(-s*1.5)),i.uGain.value+=(_e*(.75+.35*Se)-i.uGain.value)*(1-Math.exp(-s*2)),w&&(Q.uniforms.uFade.value=Math.min(1,(performance.now()-I)/900)),Ye(s),i.uFocus.value+=((H?b.position.distanceTo(Pe):Rt())-i.uFocus.value)*(1-Math.exp(-s*2.2)),w&&(wt(s),ze(s),Tt(r)),kt(),Mt(),o.setRenderTarget(D),o.clear(),o.render(F,b),o.setRenderTarget(null),o.render(Te,Me),!window.__s9mFrameGap&&pt>30&&(s>.026?(De+=s,qe=0):s<.013?(qe+=s,De=0):De=Math.max(0,De-s),De>1.2&&W>.6?(W=Math.max(.6,W*.8),De=0,de()):qe>4&&W<ke&&(W=Math.min(ke,W*1.15),qe=0,de()))}function mt(){!ot&&!tt&&!document.hidden&&(tt=!0,Le=0,et=requestAnimationFrame(ht))}function nt(){tt=!1,cancelAnimationFrame(et)}let vt=()=>document.hidden?nt():mt();return document.addEventListener("visibilitychange",vt),t.addEventListener("webglcontextlost",e=>{e.preventDefault(),nt(),!ot&&!H&&document.documentElement.classList.add("no-gl")}),mt(),{start(){w||(w=!0,I=performance.now(),u=f?99:0,H||setTimeout(()=>X(M,!0),f?100:2100))},setProgress(e){Ge=e},snap(){Re=Ge},setActivity(e,s={}){$e=e,_e=s.gain??1,i.uDusk.value=s.dusk??0},fireAt:Et,burst(e=6){y.filter(n=>!n.far&&Fe(n)<12).sort(()=>Math.random()-.5).slice(0,e).forEach((n,l)=>setTimeout(()=>X(n,!0),l*140))},get spikes(){return Ae},_comp:Q,chain:ne,frame(e,s,n=!1){let l=y[e].soma,v=y[s].soma;fe.copy(l).lerp(v,.55);let g=l.distanceTo(v),G=Z/ie<.8;xe.copy(fe).add(ce.set(0,.5,Math.max(4.4,g*(G?1.7:1.05)+2.2))),n&&(b.position.copy(xe),Pe.copy(fe)),i.uFocus.value=xe.distanceTo(fe)},frameOne(e,s=5,n=0){let l=y[e].soma;fe.copy(l).add(ce.set(0,-n,0)),xe.copy(fe).add(ce.set(0,.3,s))},fireGame(e,s){let n=y[e];if(X(n,!0,!0),N){let l=B.indexOf(N);l>=0&&B.splice(l,1)}N=n.axonRoot>=0?me(n.axonRoot,1,"axon",m[e]/s,3.2):null},fireCell(e){X(y[e],!0,!0)},killGamePulse(){if(N){let e=B.indexOf(N);e>=0&&B.splice(e,1),N=null}},project(e){return Ne(y[e].soma)},screen(e){return Ne(e)},axonPath(e){let s=y[e],n=[s.soma.clone()],l=s.axonRoot;for(;l>=0;)n.push(E[l].b.clone()),l=E[l].kids.length===1?E[l].kids[0]:-1;return s.target>=0&&n.push(y[s.target].soma.clone()),n},celebrate(){y.filter(e=>!e.far).forEach((e,s)=>setTimeout(()=>X(e,!0,!0),60*s))},dispose(){ot=!0,nt(),window.removeEventListener("resize",de),window.removeEventListener("pointermove",ct),document.removeEventListener("visibilitychange",vt),F.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),D&&D.dispose(),P&&P.dispose(),o.dispose(),o.forceContextLoss&&o.forceContextLoss()},info:()=>({segments:E.length,neurons:y.length,pulses:B.length,pr:W,focus:i.uFocus.value})}}function Nt({onClose:t}={}){let x=document.documentElement,V=matchMedia("(pointer: coarse)").matches,T=V?"Tap":"Click",f=document.createElement("div");f.className="game",f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-label","Fire the network"),f.innerHTML=`
    <canvas class="g-gl" aria-hidden="true"></canvas>
    <canvas class="g-fx" aria-hidden="true"></canvas>
    <div class="g-top">
      <span class="g-brand"><i class="mark"></i><span>s9m LABS</span></span>
      <span class="g-name">Fire the network</span>
      <button type="button" class="g-exit">Exit <span aria-hidden="true">\u2715</span></button>
    </div>
    <div class="g-track" hidden>
      <p class="g-where">Cell <b class="g-cell">1</b> of <b class="g-total">10</b></p>
      <div class="g-nodes"></div>
    </div>
    <p class="g-say" aria-live="polite" hidden></p>
    <div class="g-pop" aria-live="polite"></div>
    <div class="g-stats" hidden>
      <span>Score <b class="g-score">0</b></span>
      <span class="g-lives" aria-label="Three tries"><i></i><i></i><i></i></span>
    </div>
    <div class="g-card g-start">
      <p class="g-kicker">Fire the network</p>
      <h2>Get the spike to s9m.</h2>
      <p>Neurons talk by passing spikes from cell to cell. This one has to cross <b class="g-n">ten</b> cells to reach us.</p>
      <div class="g-how">
        <svg viewBox="0 0 240 64" aria-hidden="true">
          <path d="M14 40 C 60 40, 70 18, 112 22 S 168 38, 190 32" fill="none" stroke="rgba(159,228,255,.45)" stroke-width="1.6" stroke-dasharray="2 6" stroke-linecap="round"/>
          <circle cx="14" cy="40" r="6" fill="none" stroke="rgba(159,228,255,.4)" stroke-width="1.2"/>
          <path d="M84 21 C 98 19, 106 20, 118 23" fill="none" stroke="#dff6ff" stroke-width="2.4" stroke-linecap="round" opacity=".55"/>
          <circle cx="122" cy="24" r="9" fill="rgba(76,203,255,.25)"/><circle cx="122" cy="24" r="4" fill="#fff"/>
          <circle cx="196" cy="32" r="17" fill="none" stroke="#9fe4ff" stroke-width="1.8"/>
          <text x="196" y="60" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" letter-spacing="2" fill="#9fe4ff">${T.toUpperCase()}</text>
        </svg>
        <p>A pulse travels along the dotted line to the next cell. <b>${T} while it's inside the ring</b> and that cell fires, sending it on.</p>
      </div>
      <p class="g-small">${V?"Tap anywhere on the screen.":"Click anywhere, or press Space."} Three misses and the signal fades.</p>
      <div class="g-btns"><button type="button" class="box g-go">Start</button><button type="button" class="line-btn g-leave">Back to the site</button></div>
    </div>
    <div class="g-card g-end" hidden></div>`,document.body.appendChild(f),x.classList.add("in-game");let p=r=>f.querySelector(r),H=p(".g-fx"),o=H.getContext("2d"),z=p(".g-pop"),K=p(".g-say"),te=p(".g-end"),ae=p(".g-start"),y=p(".g-cell"),E=p(".g-score"),oe=p(".g-lives"),ne=p(".g-nodes"),m=bt(p(".g-gl"),{mode:"game"});m||(ae.innerHTML='<h2>Fire the network</h2><p>This game needs WebGL 2, which this browser does not offer. Try it in a recent Chrome, Safari or Firefox.</p><div class="g-btns"><button type="button" class="line-btn g-leave">Back to the site</button></div>');let M=m?m.chain:[],F=Math.max(1,M.length-1);p(".g-n").textContent=String(F),p(".g-total").textContent=String(F),ne.innerHTML=Array.from({length:F},()=>"<i></i>").join("")+'<span class="g-goal"><i class="mark"></i></span>',m&&(m.setActivity(.16,{gain:1}),m.frame(M[0],M[1],!0),m.start());let b=window.__s9mGameSlow||1,d=r=>b*(r===0?2.3:Math.max(1,1.8-r*.085)),h=r=>b*(r===0?.9:Math.max(.24,.42-r*.018)),c="intro",i=0,R=3,C=0,A=0,O=0,k=!0,Y=0,$=2,j=0,re=[],q=0,D=!1,U=[],P=[],se=1,Q=null,Te=[],le=(r,w)=>{let u=setTimeout(r,w);return re.push(u),u},Ee=()=>{re.forEach(clearTimeout),re=[]},Me=0,Ie=0,W=1,ke=()=>Me<640?27:32;function Z(){W=Math.min(2,devicePixelRatio||1),Me=innerWidth,Ie=innerHeight,H.width=Math.round(Me*W),H.height=Math.round(Ie*W)}Z(),addEventListener("resize",Z);function ie(r){U=m.axonPath(M[r]),P=[0];for(let w=1;w<U.length;w++)P.push(P[w-1]+U[w].distanceTo(U[w-1]));se=P[P.length-1]||1,Q=U[0].clone()}function de(r){let w=Math.max(0,Math.min(1,r))*se,u=1;for(;u<P.length-1&&P[u]<w;)u++;let I=(w-P[u-1])/Math.max(1e-6,P[u]-P[u-1]);return Q.lerpVectors(U[u-1],U[u],I),m.screen(Q)}let Ce=r=>c==="flying"?Math.min(1,(r-Y)/($*1e3)):c==="aim"?0:1;function pe(r){let w=m.project(M[Math.min(i+1,M.length-1)]),u=Ce(r),I=c==="aim"?null:de(u),B=I?Math.hypot(I.x-w.x,I.y-w.y):1/0;return{dst:w,k:u,p:I,dist:B,inside:c==="window"||c==="flying"&&B<=ke()*1.1}}function ce(r){if(o.setTransform(W,0,0,W,0,0),o.clearRect(0,0,Me,Ie),(c==="aim"||c==="flying"||c==="window"||c==="resolving")&&U.length){let u=pe(r),I=ke();o.save(),o.setLineDash([2,7]),o.lineCap="round",o.lineWidth=2,o.strokeStyle="rgba(159, 228, 255, 0.62)",o.shadowColor="rgba(3, 8, 16, 0.9)",o.shadowBlur=4,o.beginPath();for(let N=0;N<=40;N++){let X=de(N/40);N?o.lineTo(X.x,X.y):o.moveTo(X.x,X.y)}o.stroke(),o.restore(),o.shadowBlur=0;let B=de(0);o.strokeStyle="rgba(159, 228, 255, 0.35)",o.lineWidth=1.2,o.beginPath(),o.arc(B.x,B.y,9,0,6.283),o.stroke();let me=u.inside&&c!=="resolving";if(o.lineWidth=2,o.strokeStyle=me?"#ffffff":"rgba(159, 228, 255, 0.9)",o.shadowColor="rgba(76, 203, 255, 0.9)",o.shadowBlur=me?26:12,o.beginPath(),o.arc(u.dst.x,u.dst.y,I,0,6.283),o.stroke(),o.shadowBlur=0,me&&(o.fillStyle="rgba(76, 203, 255, 0.16)",o.beginPath(),o.arc(u.dst.x,u.dst.y,I,0,6.283),o.fill()),c==="flying"&&u.k>.25){let N=(u.k-.25)/.75;o.strokeStyle=`rgba(159, 228, 255, ${(.55*N).toFixed(3)})`,o.lineWidth=1,o.beginPath(),o.arc(u.dst.x,u.dst.y,I*(1+1.6*(1-N)),0,6.283),o.stroke()}if(c==="window"){let N=1-Math.min(1,(r-j)/(h(i)*1e3));o.strokeStyle="#ffffff",o.lineWidth=3,o.beginPath(),o.arc(u.dst.x,u.dst.y,I+7,-1.5708,-1.5708+6.283*N),o.stroke()}if(u.p&&c!=="resolving"){for(let ze=10;ze>=1;ze--){let Fe=de(u.k-ze*.012);o.fillStyle=`rgba(159, 228, 255, ${(.5*(1-ze/11)).toFixed(3)})`,o.beginPath(),o.arc(Fe.x,Fe.y,2.6*(1-ze/14),0,6.283),o.fill()}let N=c==="window"?1+.25*Math.sin(r/60):1,X=o.createRadialGradient(u.p.x,u.p.y,0,u.p.x,u.p.y,20*N);X.addColorStop(0,"rgba(255, 255, 255, 0.95)"),X.addColorStop(.25,"rgba(159, 228, 255, 0.6)"),X.addColorStop(1,"rgba(76, 203, 255, 0)"),o.fillStyle=X,o.beginPath(),o.arc(u.p.x,u.p.y,20*N,0,6.283),o.fill(),o.fillStyle="#fff",o.beginPath(),o.arc(u.p.x,u.p.y,4.2,0,6.283),o.fill()}me&&(k||i<2)&&(o.font=`600 ${Me<640?11:12}px "JetBrains Mono", monospace`,o.textAlign="center",o.fillStyle="#ffffff",o.fillText(T.toUpperCase(),u.dst.x,u.dst.y-I-14))}for(let u=Te.length-1;u>=0;u--){let I=Te[u],B=(r-I.t0)/600;if(B>=1){Te.splice(u,1);continue}o.strokeStyle=I.ok?`rgba(223, 246, 255, ${(1-B).toFixed(3)})`:`rgba(255, 120, 160, ${(1-B).toFixed(3)})`,o.lineWidth=I.ok?2.5*(1-B)+.5:2,o.beginPath(),o.arc(I.x,I.y,ke()*(I.ok?1+1.8*B:1-.4*B),0,6.283),o.stroke()}}function ve(){y.textContent=String(Math.min(i+1,F)),E.textContent=String(C),[...oe.children].forEach((r,w)=>r.classList.toggle("lost",w>=R)),[...ne.querySelectorAll(":scope > i")].forEach((r,w)=>{r.classList.toggle("done",w<i),r.classList.toggle("now",w===i)})}function Re(r,w){let u=m.project(M[Math.min(i+1,M.length-1)]);z.style.transform=`translate(${u.x.toFixed(1)}px, ${(u.y-ke()-44).toFixed(1)}px)`,z.textContent=r,z.className="g-pop",z.offsetWidth,z.className="g-pop show "+(w||"")}let Ge=`${T} when the pulse is inside the ring${V?"":" (or press Space)"}`;function ue(r,w=!1){K.textContent=r,K.hidden=!r,K.classList.toggle("dim",w)}function ge(){D||(c="aim",ie(i),m.frame(M[i],M[i+1]),ve(),ue(k?"Watch the pulse. It will travel along the dotted line.":Ge,!k),le(()=>{D||($=d(k?0:i),Y=performance.now(),c="flying",m.fireGame(M[i],$),k&&ue(`${T} when the pulse is inside the ring.`))},k?1300:i===0?900:650))}function ye(r){c="window",j=r,k&&ue(`Now! ${T}!`),le(()=>{c==="window"&&xe("Missed",k?`Too late. ${T} while the pulse is in the ring.`:"")},h(k?0:i)*1e3)}function he(){if(c!=="flying"&&c!=="window")return;let r=performance.now();if(pe(r).inside){let u=c==="flying"?(Y+$*1e3-r)/1e3:0,I=c==="window"?(r-j)/1e3:0;Qe(u<.09&&I<.12)}else xe("Too early",k?"A bit early. Wait until the pulse is inside the ring.":"")}function Qe(r){Ee(),c="resolving",m.killGamePulse(),O++,r&&A++,C+=(r?100:60)+Math.min(O-1,5)*10;let w=m.project(M[i+1]);Te.push({x:w.x,y:w.y,t0:performance.now(),ok:!0}),Re(r?"Perfect":"Good","ok"),m.fireCell(M[i+1]);let u=k;if(k&&(k=!1,ue("That cell fired and passed it on. Keep going.")),i++,ve(),i>=F){le(Pe,300);return}le(ge,u?1800:700)}function xe(r,w){Ee(),c="resolving",m.killGamePulse(),O=0;let u=m.project(M[i+1]);if(Te.push({x:u.x,y:u.y,t0:performance.now(),ok:!1}),Re(r,"bad"),k){ue(w||""),le(ge,1600);return}if(R--,ve(),R<=0){le(Xe,900);return}le(ge,1100)}function fe(r,w=""){te.innerHTML=r,te.hidden=!1,te.className="g-card g-end "+w,p(".g-stats").hidden=!0,p(".g-track").hidden=!0,ue("");let u=te.querySelector(".g-again");u&&u.focus()}function Pe(){c="won",ve(),m.frameOne(M[M.length-1],8,1.6),m.celebrate(),le(()=>fe(`
      <p class="g-kicker">Signal delivered</p>
      <h2>You fired the network.</h2>
      <p>${A} perfect of ${F} \xB7 score ${C}</p>
      <p class="g-note">That is what every neuron does, all day. We measure exactly how, and build machines that learn the same way. We\u2019re hiring.</p>
      <div class="g-btns"><a class="box" href="https://cal.com/s9mlabs" target="_blank" rel="noopener">Book a call</a><button type="button" class="line-btn g-again">Play again</button><button type="button" class="line-btn g-leave">Back to the site</button></div>`,"win"),1500)}function Xe(){c="lost",fe(`
      <p class="g-kicker">Signal lost</p>
      <h2>It faded at cell ${i+1} of ${F}.</h2>
      <p>In a real circuit, timing is everything. A spike that arrives a few milliseconds off doesn\u2019t get passed on.</p>
      <div class="g-btns"><button type="button" class="box g-again">Try again</button><button type="button" class="line-btn g-leave">Back to the site</button></div>`)}function Ye(){Ee(),i=0,R=3,C=0,A=0,O=0,k=!0,ae.hidden=!0,te.hidden=!0,p(".g-stats").hidden=!1,p(".g-track").hidden=!1,m&&m.frame(M[0],M[1]),ve(),ge()}function Se(){if(q=requestAnimationFrame(Se),!m)return;let r=performance.now();c==="flying"&&r>=Y+$*1e3&&ye(r),ce(r)}q=requestAnimationFrame(Se);function $e(r){r.target.closest("button, a")||(c==="flying"||c==="window")&&(r.preventDefault(),he())}function _e(r){if(r.key==="Escape"){Ae();return}(r.key===" "||r.key==="Enter")&&(c==="flying"||c==="window")&&(r.preventDefault(),he())}f.addEventListener("pointerdown",$e),window.addEventListener("keydown",_e),f.addEventListener("click",r=>{r.target.closest(".g-go, .g-again")?Ye():r.target.closest(".g-leave, .g-exit")&&Ae()});function Ae(){D||(D=!0,Ee(),cancelAnimationFrame(q),window.removeEventListener("keydown",_e),removeEventListener("resize",Z),f.classList.add("out"),setTimeout(()=>{m&&m.dispose(),f.remove()},450),x.classList.remove("in-game"),t&&t())}return setTimeout(()=>{let r=p(".g-go");r&&r.focus()},50),window.__s9mGame={get state(){return c},get cell(){return i},get lives(){return R},get practice(){return k},info:()=>{let r=pe(performance.now());return{state:c,k:r.k,inside:r.inside,dist:r.dist,r:ke(),dst:r.dst,p:r.p}},win:()=>{Ee(),Pe()},net:m},{close:Ae}}export{Nt as openGame};
