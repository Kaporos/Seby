const ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};ie();var A,d,q,z,x,G,H,V,O={},K=[],ue=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(t,e){for(var n in e)t[n]=e[n];return t}function J(t){var e=t.parentNode;e&&e.removeChild(t)}function D(t,e,n){var l,o,r,i={};for(r in e)r=="key"?l=e[r]:r=="ref"?o=e[r]:i[r]=e[r];if(arguments.length>2&&(i.children=arguments.length>3?A.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)i[r]===void 0&&(i[r]=t.defaultProps[r]);return P(t,i,l,o,null)}function P(t,e,n,l,o){var r={type:t,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o==null?++q:o};return o==null&&d.vnode!=null&&d.vnode(r),r}function ce(){return{current:null}}function E(t){return t.children}function S(t,e){this.props=t,this.context=e}function C(t,e){if(e==null)return t.__?C(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?C(t):null}function Q(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Q(t)}}function M(t){(!t.__d&&(t.__d=!0)&&x.push(t)&&!T.__r++||H!==d.debounceRendering)&&((H=d.debounceRendering)||G)(T)}function T(){for(var t;T.__r=x.length;)t=x.sort(function(e,n){return e.__v.__b-n.__v.__b}),x=[],t.some(function(e){var n,l,o,r,i,f;e.__d&&(i=(r=(n=e).__v).__e,(f=n.__P)&&(l=[],(o=b({},r)).__v=r.__v+1,F(f,r,o,n.__n,f.ownerSVGElement!==void 0,r.__h!=null?[i]:null,l,i==null?C(r):i,r.__h),te(l,r),r.__e!=i&&Q(r)))})}function X(t,e,n,l,o,r,i,f,p,a){var _,h,c,u,s,k,v,y=l&&l.__k||K,m=y.length;for(n.__k=[],_=0;_<e.length;_++)if((u=n.__k[_]=(u=e[_])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?P(null,u,null,null,u):Array.isArray(u)?P(E,{children:u},null,null,null):u.__b>0?P(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=n,u.__b=n.__b+1,(c=y[_])===null||c&&u.key==c.key&&u.type===c.type)y[_]=void 0;else for(h=0;h<m;h++){if((c=y[h])&&u.key==c.key&&u.type===c.type){y[h]=void 0;break}c=null}F(t,u,c=c||O,o,r,i,f,p,a),s=u.__e,(h=u.ref)&&c.ref!=h&&(v||(v=[]),c.ref&&v.push(c.ref,null,u),v.push(h,u.__c||s,u)),s!=null?(k==null&&(k=s),typeof u.type=="function"&&u.__k===c.__k?u.__d=p=Y(u,p,t):p=ee(t,u,c,y,s,p),typeof n.type=="function"&&(n.__d=p)):p&&c.__e==p&&p.parentNode!=t&&(p=C(c))}for(n.__e=k,_=m;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=C(l,_+1)),re(y[_],y[_]));if(v)for(_=0;_<v.length;_++)ne(v[_],v[++_],v[++_])}function Y(t,e,n){for(var l,o=t.__k,r=0;o&&r<o.length;r++)(l=o[r])&&(l.__=t,e=typeof l.type=="function"?Y(l,e,n):ee(n,l,l,o,l.__e,e));return e}function Z(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){Z(n,e)}):e.push(t)),e}function ee(t,e,n,l,o,r){var i,f,p;if(e.__d!==void 0)i=e.__d,e.__d=void 0;else if(n==null||o!=r||o.parentNode==null)e:if(r==null||r.parentNode!==t)t.appendChild(o),i=null;else{for(f=r,p=0;(f=f.nextSibling)&&p<l.length;p+=2)if(f==o)break e;t.insertBefore(o,r),i=r}return i!==void 0?i:o.nextSibling}function se(t,e,n,l,o){var r;for(r in n)r==="children"||r==="key"||r in e||L(t,r,null,n[r],l);for(r in e)o&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===e[r]||L(t,r,e[r],n[r],l)}function I(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||ue.test(e)?n:n+"px"}function L(t,e,n,l,o){var r;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)n&&e in n||I(t.style,e,"");if(n)for(e in n)l&&n[e]===l[e]||I(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?l||t.addEventListener(e,r?B:R,r):t.removeEventListener(e,r?B:R,r);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function R(t){this.l[t.type+!1](d.event?d.event(t):t)}function B(t){this.l[t.type+!0](d.event?d.event(t):t)}function F(t,e,n,l,o,r,i,f,p){var a,_,h,c,u,s,k,v,y,m,w,g=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,f=e.__e=n.__e,e.__h=null,r=[f]),(a=d.__b)&&a(e);try{e:if(typeof g=="function"){if(v=e.props,y=(a=g.contextType)&&l[a.__c],m=a?y?y.props.value:a.__:l,n.__c?k=(_=e.__c=n.__c).__=_.__E:("prototype"in g&&g.prototype.render?e.__c=_=new g(v,m):(e.__c=_=new S(v,m),_.constructor=g,_.render=pe),y&&y.sub(_),_.props=v,_.state||(_.state={}),_.context=m,_.__n=l,h=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),g.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=b({},_.__s)),b(_.__s,g.getDerivedStateFromProps(v,_.__s))),c=_.props,u=_.state,h)g.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,m),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,m)===!1||e.__v===n.__v){_.props=v,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(N){N&&(N.__=e)}),_.__h.length&&i.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,m),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,u,s)})}_.context=m,_.props=v,_.state=_.__s,(a=d.__r)&&a(e),_.__d=!1,_.__v=e,_.__P=t,a=_.render(_.props,_.state,_.context),_.state=_.__s,_.getChildContext!=null&&(l=b(b({},l),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(s=_.getSnapshotBeforeUpdate(c,u)),w=a!=null&&a.type===E&&a.key==null?a.props.children:a,X(t,Array.isArray(w)?w:[w],e,n,l,o,r,i,f,p),_.base=e.__e,e.__h=null,_.__h.length&&i.push(_),k&&(_.__E=_.__=null),_.__e=!1}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=fe(n.__e,e,n,l,o,r,i,p);(a=d.diffed)&&a(e)}catch(N){e.__v=null,(p||r!=null)&&(e.__e=f,e.__h=!!p,r[r.indexOf(f)]=null),d.__e(N,e,n)}}function te(t,e){d.__c&&d.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(l){l.call(n)})}catch(l){d.__e(l,n.__v)}})}function fe(t,e,n,l,o,r,i,f){var p,a,_,h=n.props,c=e.props,u=e.type,s=0;if(u==="svg"&&(o=!0),r!=null){for(;s<r.length;s++)if((p=r[s])&&"setAttribute"in p==!!u&&(u?p.localName===u:p.nodeType===3)){t=p,r[s]=null;break}}if(t==null){if(u===null)return document.createTextNode(c);t=o?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,c.is&&c),r=null,f=!1}if(u===null)h===c||f&&t.data===c||(t.data=c);else{if(r=r&&A.call(t.childNodes),a=(h=n.props||O).dangerouslySetInnerHTML,_=c.dangerouslySetInnerHTML,!f){if(r!=null)for(h={},s=0;s<t.attributes.length;s++)h[t.attributes[s].name]=t.attributes[s].value;(_||a)&&(_&&(a&&_.__html==a.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(se(t,c,h,o,f),_)e.__k=[];else if(s=e.props.children,X(t,Array.isArray(s)?s:[s],e,n,l,o&&u!=="foreignObject",r,i,r?r[0]:n.__k&&C(n,0),f),r!=null)for(s=r.length;s--;)r[s]!=null&&J(r[s]);f||("value"in c&&(s=c.value)!==void 0&&(s!==t.value||u==="progress"&&!s||u==="option"&&s!==h.value)&&L(t,"value",s,h.value,!1),"checked"in c&&(s=c.checked)!==void 0&&s!==t.checked&&L(t,"checked",s,h.checked,!1))}return t}function ne(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(l){d.__e(l,n)}}function re(t,e,n){var l,o;if(d.unmount&&d.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||ne(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){d.__e(r,e)}l.base=l.__P=null}if(l=t.__k)for(o=0;o<l.length;o++)l[o]&&re(l[o],e,typeof t.type!="function");n||t.__e==null||J(t.__e),t.__e=t.__d=void 0}function pe(t,e,n){return this.constructor(t,n)}function j(t,e,n){var l,o,r;d.__&&d.__(t,e),o=(l=typeof n=="function")?null:n&&n.__k||e.__k,r=[],F(e,t=(!l&&n||e).__k=D(E,null,[t]),o||O,O,e.ownerSVGElement!==void 0,!l&&n?[n]:o?null:e.firstChild?A.call(e.childNodes):null,r,!l&&n?n:o?o.__e:e.firstChild,l),te(r,t)}function _e(t,e){j(t,e,_e)}function ae(t,e,n){var l,o,r,i=b({},t.props);for(r in e)r=="key"?l=e[r]:r=="ref"?o=e[r]:i[r]=e[r];return arguments.length>2&&(i.children=arguments.length>3?A.call(arguments,2):n),P(t.type,i,l||t.key,o||t.ref,null)}function de(t,e){var n={__c:e="__cC"+V++,__:t,Consumer:function(l,o){return l.children(o)},Provider:function(l){var o,r;return this.getChildContext||(o=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.some(M)},this.sub=function(i){o.push(i);var f=i.componentWillUnmount;i.componentWillUnmount=function(){o.splice(o.indexOf(i),1),f&&f.call(i)}}),l.children}};return n.Provider.__=n.Consumer.contextType=n}A=K.slice,d={__e:function(t,e,n,l){for(var o,r,i;e=e.__;)if((o=e.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(t)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,l||{}),i=o.__d),i)return o.__E=o}catch(f){t=f}throw t}},q=0,z=function(t){return t!=null&&t.constructor===void 0},S.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof t=="function"&&(t=t(b({},n),this.props)),t&&b(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),M(this))},S.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),M(this))},S.prototype.render=E,x=[],G=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,T.__r=0,V=0;var he=Object.freeze(Object.defineProperty({__proto__:null,render:j,hydrate:_e,createElement:D,h:D,Fragment:E,createRef:ce,get isValidElement(){return z},Component:S,cloneElement:ae,createContext:de,toChildArray:Z,get options(){return d}},Symbol.toStringTag,{value:"Module"}));function ve(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var l=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,l.get?l:{enumerable:!0,get:function(){return t[n]}})}),e}var ye=ve(he),oe,le,U=ye,me=0;function ge(t,e,n,l,o){var r,i,f={};for(i in e)i=="ref"?r=e[i]:f[i]=e[i];var p={type:t,props:f,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--me,__source:o,__self:l};if(typeof t=="function"&&(r=t.defaultProps))for(i in r)f[i]===void 0&&(f[i]=r[i]);return U.options.vnode&&U.options.vnode(p),p}le=U.Fragment,oe=ge;const $=oe,be=le;function ke(){alert("CHEATING !")}function Ce(){return $(be,{children:$("button",{onClick:ke,children:"CHEAT"})})}let W=document.createElement("div");W.id="seby";document.body.appendChild(W);j($(Ce,{}),W);
