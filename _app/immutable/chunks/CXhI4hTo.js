import{S as N,y as C,z as G,A as P,B as K,g as c,U as l,C as y,D as x,F as j,G as z,H as V,I as Z,L as $,J as F,K as H,l as J,P as Q,f as M,M as W,b as U,N as X,O as k,Q as p,R as ee,T as re,V as ne}from"./1eVAW--X.js";function h(a,v=null,S){if(typeof a!="object"||a===null||N in a)return a;const I=V(a);if(I!==C&&I!==G)return a;var f=new Map,g=Z(a),o=P(0);g&&f.set("length",P(a.length));var m;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&z();var t=f.get(e);return t===void 0?(t=P(r.value),f.set(e,t)):y(t,h(r.value,m)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,P(l));else{if(g&&typeof e=="string"){var t=f.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&y(t,n)}y(r,l),q(o)}return!0},get(i,e,r){var d;if(e===N)return a;var t=f.get(e),n=e in i;if(t===void 0&&(!n||(d=x(i,e))!=null&&d.writable)&&(t=P(h(n?i[e]:l,m)),f.set(e,t)),t!==void 0){var u=c(t);return u===l?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var t=f.get(e);t&&(r.value=c(t))}else if(r===void 0){var n=f.get(e),u=n==null?void 0:n.v;if(n!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===N)return!0;var r=f.get(e),t=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||j!==null&&(!t||(u=x(i,e))!=null&&u.writable)){r===void 0&&(r=P(t?h(i[e],m):l),f.set(e,r));var n=c(r);if(n===l)return!1}return t},set(i,e,r,t){var w;var n=f.get(e),u=e in i;if(g&&e==="length")for(var d=r;d<n.v;d+=1){var R=f.get(d+"");R!==void 0?y(R,l):d in i&&(R=P(l),f.set(d+"",R))}n===void 0?(!u||(w=x(i,e))!=null&&w.writable)&&(n=P(void 0),y(n,h(r,m)),f.set(e,n)):(u=n.v!==l,y(n,h(r,m)));var _=Reflect.getOwnPropertyDescriptor(i,e);if(_!=null&&_.set&&_.set.call(t,r),!u){if(g&&typeof e=="string"){var A=f.get("length"),D=Number(e);Number.isInteger(D)&&D>=A.v&&y(A,D+1)}q(o)}return!0},ownKeys(i){c(o);var e=Reflect.ownKeys(i).filter(n=>{var u=f.get(n);return u===void 0||u.v!==l});for(var[r,t]of f)t.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){K()}})}function q(a,v=1){y(a,a.v+v)}let E=!1;function te(a){var v=E;try{return E=!1,[a(),E]}finally{E=v}}function Y(a){var v;return((v=a.ctx)==null?void 0:v.d)??!1}function ie(a,v,S,I){var B;var f=(S&ne)!==0,g=!J||(S&Q)!==0,o=(S&W)!==0,m=(S&re)!==0,i=!1,e;o?[e,i]=te(()=>a[v]):e=a[v];var r=N in a||H in a,t=o&&(((B=x(a,v))==null?void 0:B.set)??(r&&v in a&&(s=>a[v]=s)))||void 0,n=I,u=!0,d=!1,R=()=>(d=!0,u&&(u=!1,m?n=U(I):n=I),n);e===void 0&&I!==void 0&&(t&&g&&X(),e=R(),t&&t(e));var _;if(g)_=()=>{var s=a[v];return s===void 0?R():(u=!0,d=!1,s)};else{var A=(f?M:F)(()=>a[v]);A.f|=$,_=()=>{var s=c(A);return s!==void 0&&(n=void 0),s===void 0?n:s}}if((S&k)===0)return _;if(t){var D=a.$$legacy;return function(s,O){return arguments.length>0?((!g||!O||D||i)&&t(O?_():s),s):_()}}var w=!1,L=ee(e),b=M(()=>{var s=_(),O=c(L);return w?(w=!1,O):L.v=s});return o&&c(b),f||(b.equals=p),function(s,O){if(arguments.length>0){const T=O?c(b):g&&o?h(s):s;if(!b.equals(T)){if(w=!0,y(L,T),d&&n!==void 0&&(n=T),Y(b))return s;U(()=>c(b))}return s}return Y(b)?b.v:c(b)}}export{h as a,ie as p};
