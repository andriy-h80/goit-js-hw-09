!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON"),a={startCreatePromisesBtn:document.querySelector(".form"),firstDelay:document.querySelector('[name="delay"]'),delayStep:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function u(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}a.startCreatePromisesBtn.addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(a.firstDelay.value),o=Number(a.delayStep.value),r=Number(a.amount.value),l=1;l<=r;l+=1){u(l,n+o*l).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.1e24c640.js.map
