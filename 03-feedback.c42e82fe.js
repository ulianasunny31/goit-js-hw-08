function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,u=setTimeout(S,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function S(){var e=m();if(j(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?d(n,o-(e-l)):n}(e))}function T(e){return u=void 0,p&&r?b(e):(r=i=void 0,a)}function w(){var e=m(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?v(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},w.flush=function(){return void 0===u?a:T(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),h=b.querySelector('input[name="email"]'),j=b.querySelector('textarea[name="message"]');let S=JSON.parse(localStorage.getItem("feedback-form-state"))||{};S&&(j.value=S.message||"",h.value=S.email||""),b.addEventListener("input",(function(){T()}));b.addEventListener("submit",(e=>{if(e.preventDefault(),""===h.value&&""===j.value||console.log({message:j.value,email:h.value}),""===h.value||""===j.value)return alert("Please fill in all the fields of the form!");localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),S={}}));const T=e(t)((()=>{""===h.value&&""===j.value||(S={email:h.value,message:j.value}),localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500);
//# sourceMappingURL=03-feedback.c42e82fe.js.map