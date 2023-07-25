(()=>{"use strict";var e=document.querySelector(".cyrcle__container"),t=document.querySelectorAll(".faq__item"),o=(document.querySelector(".menu-burger"),document.querySelector(".header"),document.querySelector(".root"),document.querySelector(".footer")),i=(o.querySelectorAll(".footer__link_type_upper-menu"),o.querySelector(".footer__current-data"),document.querySelector(".service-list__body"),document.querySelectorAll('a[href*="signIn"]'),document.querySelectorAll(".custom-counter")),n="".concat("https://cdn.rawgit.com/bread2077/temp/main","/images"),r="".concat(n,"/socials"),c="".concat(n,"/services"),s={friends:{img:"".concat(c,"/friends-icon.svg"),name:"Друзья"},likes:{img:"".concat(c,"/likes-icon.svg"),name:"Лайки"},listenings:{img:"".concat(c,"/listenings-icon.svg"),name:"Прослушивания плейлиста"},reposts:{img:"".concat(c,"/reposts-icon.svg"),name:"Репосты"},views:{img:"".concat(c,"/views-icon.svg"),name:"Просмотры"},followers:{img:"".concat(c,"/followers-icon.svg"),name:"Подписчики"},autoviews:{img:"".concat(c,"/autoviews-icon.svg"),name:"Автопросмотры"},comments:{img:"".concat(c,"/comments-icon.svg"),name:"Комментарии"},reactions:{img:"".concat(c,"/likes-icon.svg"),name:"Реакции"},autolikes:{img:"".concat(c,"/autolikes-icon.svg"),name:"Автореакции"},polls:{img:"".concat(c,"/polls-icon.svg"),name:"Опросы"},stories:{img:"".concat(c,"/stories-icon.svg"),name:"Просмотры stories"},coverages:{img:"".concat(c,"/coverages-icon.svg"),name:"Охваты"},conservations:{img:"".concat(c,"/conservations-icon.svg"),name:"Сохранения"},retweets:{img:"".concat(c,"/reposts-icon.svg"),name:"Ретвиты"},audience:{img:"".concat(c,"/views-icon.svg"),name:"Зрители"},plays:{img:"".concat(c,"/listenings-icon.svg"),name:"Проигрывания"},reels:{img:"".concat(c,"/views-icon.svg"),name:"Просмотры reels/видео"},autoreels:{img:"".concat(c,"/autoviews-icon.svg"),name:"Авторосмотры reels/видео"},visitors:{img:"".concat(c,"/views-icon.svg"),name:"Посещения"}},a={telegram:{name:"Телеграм",img:"".concat(r,"/telegram-icon.svg"),services:{autoviews:{cost:1,amount:1e3},reactions:{cost:4,amount:1e3},reposts:{cost:34,amount:1e3},comments:{cost:3,amount:1},views:{cost:1,amount:1e3},followers:{cost:40,amount:1e3},autolikes:{cost:4,amount:1e3},polls:{cost:32,amount:1e3}}},vk:{name:"Вконтакте",img:"".concat(r,"/vk-icon.svg"),services:{likes:{cost:45,amount:1e3},friends:{cost:90,amount:1e3},listenings:{cost:13,amount:10},reposts:{cost:165,amount:1e3},views:{cost:3.2,amount:1e3},followers:{cost:90,amount:1e3},autoviews:{cost:2.5,amount:1e3},comments:{cost:3,amount:1},polls:{cost:650,amount:1e3}}},instagram:{name:"Инстаграмм",img:"".concat(r,"/instagram-icon.svg"),services:{followers:{cost:12,amount:1e3},views:{cost:1.5,amount:1e3},comments:{cost:3.5,amount:10},stories:{cost:15,amount:1e3},reposts:{cost:13,amount:1e3},likes:{cost:3,amount:1e3},autolikes:{cost:3,amount:1e3},autoreels:{cost:1.5,amount:1e3},coverages:{cost:5,amount:1e3},conservations:{cost:6,amount:1e3},polls:{cost:155,amount:1e3}}},tiktok:{name:"ТикТок",img:"".concat(r,"/tiktok-icon.svg"),services:{followers:{cost:260,amount:1e3},reposts:{cost:21,amount:1e3},views:{cost:1,amount:1e3},likes:{cost:59,amount:1e3},conservations:{cost:31,amount:1e3},comments:{cost:3500,amount:1e3}}},youtube:{name:"Ютуб",img:"".concat(r,"/youtube-icon.svg"),services:{views:{cost:90,amount:1e3},followers:{cost:890,amount:1e3},comments:{cost:780,amount:1e3},likes:{cost:240,amount:1e3}}},twitter:{name:"Твиттер",img:"".concat(r,"/twitter-icon.svg"),services:{likes:{cost:280,amount:1e3},retweets:{cost:250,amount:1e3},followers:{cost:430,amount:1e3}}},spotify:{name:"Спотифай",img:"".concat(r,"/spotify-icon.svg"),services:{listenings:{cost:40,amount:1e3}}},ok:{name:"Одноклассники",img:"".concat(r,"/ok-icon.svg"),services:{}},facebook:{name:"Фейсбук",img:"".concat(r,"/facebook-icon.svg"),services:{followers:{cost:58,amount:1e3},comments:{cost:3.5,amount:1},likes:{cost:55,amount:1e3}}},internet:{name:"Интернет",img:"".concat(r,"/internet-icon.svg"),services:{visitors:{cost:12,amount:1e3}}},soundcloud:{name:"Саундклауд",img:"".concat(r,"/soundcloud-icon.svg"),services:{plays:{cost:6,amount:1e3},followers:{cost:200,amount:1e3},comments:{cost:1.2,amount:1},likes:{cost:155,amount:1e3}}}};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==l(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,"string");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===l(n)?n:String(n)),i)}var n}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function _(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==m(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,"string");if("object"!==m(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===m(n)?n:String(n)),i)}var n}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}const v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(c,e);var t,o,i,n,r=(i=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(i);if(n){var o=f(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),r.call(this,e)}return t=c,(o=[{key:"renderSocials",value:function(){for(var e in a)this._choiceList.append(this._createChoiceItemWithImage(e,a[e].img,e,"culc-template-text",a[e].name))}}])&&_(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._choiceSelector=t,this._choiceBlock=document.getElementById(t),this._choiceList=this._choiceBlock.querySelector(".culc__list"),this._choiceSubList=this._choiceBlock.querySelector(".culc__sublist"),this._choiceAmount=this._choiceBlock.querySelector(".culc__amount"),this._choiceCost=this._choiceBlock.querySelector(".culc__cost"),this._containerChoiceServices=this._choiceBlock.querySelector(".choice__services"),this._containerChoiceDescription=this._choiceBlock.querySelector(".choice__description")}var t,o;return t=e,(o=[{key:"_getChoiceItem",value:function(e){return document.getElementById(e).content.querySelector(".".concat(e,"-container")).cloneNode(!0)}},{key:"_createChoiceItemWithImage",value:function(e,t,o,i,n){var r=this._getChoiceItem(i);r.querySelector(".culc__image").src=t,r.querySelector(".culc__image").dataset.name=e,r.querySelector(".culc__image").dataset.sevice=o;var c=r.querySelector(".culc__text");return n&&(c.textContent=n),r}},{key:"_createChoiceItemWithText",value:function(e,t,o,i){var n=this._createChoiceItemWithImage(e,t,o,i);return n.querySelector(".culc__image").classList.add("culc__image_type_service"),n.querySelector(".culc__text").textContent=s[o].name,n}},{key:"_renderServices",value:function(e){for(var t in a[e.target.dataset.name].services)this._choiceSubList.append(this._createChoiceItemWithText(e.target.dataset.name,s[t].img,t,"culc-template-text"))}},{key:"_cleanText",value:function(e){e.textContent=""}},{key:"_cleanCheckService",value:function(e){var t=e.querySelector(".culc__image-container_active");t&&t.classList.remove("culc__image-container_active")}},{key:"_setCheckService",value:function(e){e.target.closest(".culc__image-container").classList.add("culc__image-container_active")}},{key:"_choiceService",value:function(e,t){this._cleanCheckService(t),this._setCheckService(e)}},{key:"_showServices",value:function(e){e.target.classList.contains("culc__image")&&(this._choiceService(e,this._choiceList),this._cleanText(this._choiceSubList),this._containerChoiceDescription.classList.add("choice__description_hided"),this._containerChoiceServices.classList.remove("choice__services_hided"),this._renderServices(e))}},{key:"_showDescriptionService",value:function(e){var t=e.target.closest(".culc__item");if(this._choiceService(e,this._choiceSubList),t){var o=t.querySelector(".culc__image"),i=a[o.dataset.name].services[o.dataset.sevice];this._choiceAmount.textContent=i.amount,this._choiceCost.textContent=i.cost,this._containerChoiceDescription.classList.remove("choice__description_hided")}}},{key:"setEventListeners",value:function(){var e=this;this._choiceList.addEventListener("click",(function(t){return e._showServices(t)})),this._choiceSubList.addEventListener("click",(function(t){return e._showDescriptionService(t)}))}}])&&u(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}());function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function p(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==y(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,"string");if("object"!==y(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===y(n)?n:String(n)),i)}var n}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._faqBlock=t,this._descriptionBlock=this._faqBlock.querySelector(".faq__description"),this._announceBlock=this._faqBlock.querySelector(".faq__announce"),this._descriptionText=this._faqBlock.querySelector(".faq__text"),this._button=this._faqBlock.querySelector(".faq__button")}var t,o;return t=e,(o=[{key:"_toggleDescription",value:function(){this._descriptionBlock.classList.toggle("faq__description_closed"),this._descriptionText.classList.toggle("faq__text_closed"),this._announceBlock.classList.toggle("faq__announce_opened")}},{key:"setEventListeners",value:function(){var e=this;this._button.addEventListener("click",(function(){e._toggleDescription(),e._button.classList.toggle("faq__button_type_close")}))}}])&&p(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function b(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==g(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,"string");if("object"!==g(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===g(n)?n:String(n)),i)}var n}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._swiperBlock=document.querySelector(t),this._swiperElements=this._swiperBlock.querySelectorAll(".advantages__item_type_phone"),this._incrementWidth=this._swiperElements[0].offsetWidth*(this._swiperElements.length/2-1),this._blockHalfWidth=this._swiperElements[0].offsetWidth/2+this._incrementWidth,this._elementWidth=this._swiperElements[0].offsetWidth,this._initialWidth=this._blockHalfWidth,this._n=0,this._touchCoord={x:0},this._DETECT_TRESHHOLD=70,this._swiperActiveClass="advantages__item_active"}var t,o;return t=e,(o=[{key:"_swipeRight",value:function(){this._initialWidth=this._initialWidth-this._elementWidth,this._swiperBlock.style.transform="translate(".concat(this._initialWidth,"px)"),this._swiperElements[this._n+1].classList.add(this._swiperActiveClass),this._swiperElements[this._n].classList.remove(this._swiperActiveClass),this._n++,this._touchCoord.x=this._xUp}},{key:"_swipeLeft",value:function(){this._initialWidth=this._initialWidth+this._elementWidth,this._swiperBlock.style.transform="translate(".concat(this._initialWidth,"px)"),this._swiperElements[this._n].classList.remove(this._swiperActiveClass),this._swiperElements[this._n-1].classList.add(this._swiperActiveClass),this._n--,this._touchCoord.x=this._xUp}},{key:"_handleTouchStart",value:function(e){this._touchCoord.x=e.touches[0].clientX}},{key:"_handleTouchMove",value:function(e){this._xUp=e.touches[0].clientX,Math.abs(this._xUp-this._touchCoord.x)>this._DETECT_TRESHHOLD&&this._n>=0&&this._n<this._swiperElements.length&&(this._xUp>this._touchCoord.x&&this._n>0?this._swipeLeft():this._xUp<this._touchCoord.x&&this._n<this._swiperElements.length-1&&this._swipeRight())}},{key:"_setEventListeners",value:function(){var e=this;this._swiperBlock.addEventListener("touchstart",(function(t){return e._handleTouchStart(t)})),this._swiperBlock.addEventListener("touchmove",(function(t){return e._handleTouchMove(t)}))}},{key:"initializeSwiper",value:function(){this._swiperBlock.style.transform="translate(".concat(this._blockHalfWidth,"px)"),this._setEventListeners()}}])&&b(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==w(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,"string");if("object"!==w(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===w(n)?n:String(n)),i)}var n}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._counterElement=t,this._start=Number(this._counterElement.dataset.start),this._stop=Number(this._counterElement.dataset.stop),this._step=(this._stop-this._start)/70,this._timerStep=10}var t,o;return t=e,(o=[{key:"startTimer",value:function(){var e=this,t=this._start,o=setInterval((function(){(t+=e._step)>=e._stop&&clearInterval(o),e._counterElement.textContent=Math.floor(t)}),this._timerStep)}}])&&k(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function L(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==q(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,"string");if("object"!==q(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===q(n)?n:String(n)),i)}var n}var C=function(){function e(t,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t,this._form=document.querySelector(".".concat(t)),this._link=this._form.querySelector(".freeservices__input_type_link"),this._select=this._form.querySelector(".freeservices__input_type_select"),this._submit=this._form.querySelector(".freeservices__submit"),this._waiting=this._form.querySelector(".freeservices__waiting"),this._response=this._form.querySelector(".freeservices__response"),this._timer=this._form.querySelector(".freeservices__time"),this._MIN_TIMER=o,this._MAX_TIMER=i}var t,o;return t=e,(o=[{key:"_getRandomInt",value:function(){return this._MIN_TIMER=Math.ceil(this._MIN_TIMER),this._MAX_TIMER=Math.floor(this._MAX_TIMER),Math.floor(Math.random()*(this._MAX_TIMER-this._MIN_TIMER))+this._MIN_TIMER}},{key:"_fetchFreeService",value:function(e){fetch("https://smmprime.com/api/v2?key=679d351793eb6ebf7a8fb1d1ac2ad1cb&action=add&service=".concat(this._select.value,"&link=").concat(this._link.value,"&quantity=").concat(e)).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))}},{key:"_choiceAmountFreeService",value:function(){switch(Number(this._select.value)){case 708:case 764:case 753:this._fetchFreeService(100);break;case 869:case 499:this._fetchFreeService(10);break;default:console.log("что-то пошло не так")}}},{key:"_startFreeService",value:function(){var e=this,t=this._getRandomInt(5,6),o=window.setInterval((function(){--t<=0?(window.clearInterval(o),e._waiting.classList.add("freeservices__waiting_hidden"),e._submit.classList.remove("btn_disabled")):e._timer.textContent=t}),1e3)}},{key:"_sendFreeService",value:function(e){e.preventDefault(),this._response.classList.remove("freeservices__responce_hidden"),this._submit.classList.add("btn_disabled"),this._choiceAmountFreeService()}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){return e._sendFreeService(t)})),window.addEventListener("load",(function(){return e._startFreeService()}))}}])&&L(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T=new v("third-culc");T.renderSocials(),T.setEventListeners(),t.forEach((function(e){new d(e).setEventListeners()}));var x=new S(".advantages__phones");document.documentElement.clientWidth<700&&x.initializeSwiper();var j=e.querySelectorAll(".cyrcle__item");j.forEach((function(e,t){e.style.transform="rotate(calc(".concat(360*(t+1)/j.length,"deg))"),e.querySelector(".cyrcle__image").style.transform="rotate(calc(-".concat(360*(t+1)/j.length,"deg))")})),i.forEach((function(e){new E(e).startTimer()})),new C("freeservices__form",90,120).setEventListeners()})();