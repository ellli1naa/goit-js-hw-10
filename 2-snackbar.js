import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as m}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form"),r=s.elements.delay;s.elements.state;function n(e,o){return new Promise((i,t)=>{setTimeout(()=>{o==="fulfilled"?i(e):t(e)},e)})}s.addEventListener("submit",e=>{e.preventDefault();const o=Number(r.value),i=s.state.value;n(o,i).then(t=>{m.success({message:`✅ Fulfilled promise in ${t}ms`,position:"topRight",timeout:5e3})}).catch(t=>{m.error({message:`❌ Rejected promise in ${t}ms`,position:"topRight",timeout:5e3})})});
//# sourceMappingURL=2-snackbar.js.map