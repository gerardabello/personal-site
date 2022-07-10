(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{29:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(1),o=n(26),d=n.n(o);const a=c.c.div`
  background-color: #ffffff;
  position: fixed;
  overflow: hidden;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;t.default=()=>{const[e,t]=(()=>{const[e,t]=Object(i.useState)([0,0]);return Object(i.useEffect)(()=>{const e=e=>{const n=e.accelerationIncludingGravity.y,i=-e.accelerationIncludingGravity.x;t([i,n])};return window.addEventListener("devicemotion",e,!1),()=>{window.removeEventListener("devicemotion",e)}},[]),e})(),n=Object(i.useRef)(),c=Object(i.useRef)();return n.current&&(n.current.world.gravity.y=t/5,n.current.world.gravity.x=e/5),Object(i.useEffect)(()=>(n.current=(e=>{const t=window.innerWidth,n=window.innerHeight,i=d.a.Render,r=d.a.World,c=d.a.Bodies,o=d.a.Engine.create(),a=i.create({element:e,engine:o,options:{wireframes:!1,width:t,height:n,background:"#FFFFFF"}}),l=[c.rectangle(t/2-20,25,100,100,{density:.1,friction:.1,render:{fillStyle:"#EEEEEE",lineWidth:0}}),c.rectangle(t/2+20,120,80,80,{density:.1,friction:.1,render:{fillStyle:"#EEEEEE",lineWidth:0}}),c.rectangle(t/2-20,235,60,60,{density:.1,friction:.1,render:{fillStyle:"#EEEEEE",lineWidth:0}}),c.rectangle(t/2+20,320,120,120,{density:.1,friction:.1,render:{fillStyle:"#EEEEEE",lineWidth:0}})],f=c.rectangle(t/2,n+25,t,50,{isStatic:!0,friction:.1}),E=c.rectangle(t/2,-25,t,50,{isStatic:!0,friction:.1}),s=c.rectangle(-25,n/2,50,n,{isStatic:!0,friction:.1}),u=c.rectangle(t+25,n/2,50,n,{isStatic:!0,friction:.1});return r.add(o.world,[...l,f,u,E,s]),d.a.Engine.run(o),i.run(a),o})(c.current),()=>{}),[]),r.a.createElement(a,{ref:c})}}}]);
//# sourceMappingURL=physicsBG-10e5c8e2044b8870ec5e.js.map