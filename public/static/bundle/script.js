(()=>{"use strict";var t,n,e,r=function(){function t(t){this.interestsController=t.interestsController,this.languagesController=t.languagesController,this.titlesController=t.titlesController}return t.prototype.update=function(){this.interestsController.update(),this.languagesController.update(),this.titlesController.update()},t}(),o=function(){function t(t){this.getInterests=t.getInterests,this.interestsRender=t.interestsRender,this.interests=this.getInterests.call()}return t.prototype.update=function(){this.interestsRender.build(this.interests)},t}(),i=function(){},u=(t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t){function n(n){var e=t.call(this)||this;return e.render=n,e}return u(n,t),n.prototype.append=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=this._getFatherElement();this.render.removeAllChildren(e),e.append.apply(e,t)},n.prototype._getFatherElement=function(){var t=document.getElementById(this.fatherId);if(null===t)throw Error("Could not find father element.");return t},n}(i);!function(t){t.PHYSICAL_ACTIVITY="physicalActivity",t.MUSIC="music"}(n||(n={})),function(t){t.EMPTY_CIRCLE="far fa-circle",t.FILLED_CIRCLE="fas fa-circle",t.BIKING="fas fa-biking gray",t.MUSIC="fas fa-music gray"}(e||(e={}));var c,a=function(){function t(t){this.render=t}return t.prototype.build=function(t){var n,e=this.render.createI(),r=t.split(" ");return(n=e.classList).add.apply(n,r),e},t}(),l=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),p=function(t){function r(n){var e=t.call(this,n.render)||this;return e.fatherId="interests",e.interestRender=n.interestRender,e}return l(r,t),r.prototype.build=function(t){this.append.apply(this,[this.interestRender.build({icon:e.BIKING,text:t.get(n.PHYSICAL_ACTIVITY)}),this.interestRender.build({icon:e.MUSIC,text:t.get(n.MUSIC)})])},r}(s),f=function(){function t(){}return t.prototype.createDiv=function(t){return this._create({tagName:"div",renderParams:t})},t.prototype.createI=function(t){return this._create({tagName:"i",renderParams:t})},t.prototype.createParagraph=function(t){return this._create({tagName:"p",renderParams:t})},t.prototype.createText=function(t){return document.createTextNode(t)},t.prototype.createTitle=function(t){return this._create({tagName:"h5",renderParams:t})},t.prototype._create=function(t){var n,e=document.createElement(t.tagName),r=t.renderParams;return null!=(null==r?void 0:r.classes)&&(n=e.classList).add.apply(n,null==r?void 0:r.classes),null!=(null==r?void 0:r.children)&&e.append.apply(e,null==r?void 0:r.children),e},t.prototype.removeAllChildren=function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},t}(),h=function(){return new f},d=function(){function t(){}return t.asideColor="gray",t.marginBottom2="mb-2",t.noMarginBottom="mb-0",t.noHorizontalMargin="mx-0",t.noPadding="p-0",t.alignItemsCenter="align-items-center",t.displayFlex="d-flex",t.justifyContentCenter="justify-content-center",t.row="row",t}(),y=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),g=function(t){function n(n){var e=t.call(this)||this;return e.asideRowRender=n.asideRowRender,e.columnRender=n.columnRender,e.iconRender=n.iconRender,e.paragraphRender=n.paragraphRender,e}return y(n,t),n.prototype.build=function(t){return this.asideRowRender.build({classes:this.asideRowAdditionalClasses(),children:[this.columnRender.build({size:1,classes:this.iconColumnAdditionalClasses(),children:[this.iconRender.build(t.icon)]}),this.columnRender.build({size:11,classes:this.textColumnAdditionalClasses(),children:[this.paragraphRender.build({withoutMarginBottom:!0,text:t.text})]})]})},n.prototype.asideRowAdditionalClasses=function(){return[d.noHorizontalMargin,d.marginBottom2]},n.prototype.iconColumnAdditionalClasses=function(){return[d.noPadding,d.displayFlex,d.alignItemsCenter,d.justifyContentCenter]},n.prototype.textColumnAdditionalClasses=function(){return[]},n}(i),_=function(){function t(){}return t.prototype.classes=function(){return[]},t.prototype._getClassesWith=function(t){var n=this.classes();return void 0!==t&&n.push.apply(n,t),n},t}(),w=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),v=function(t){function n(n){var e=t.call(this)||this;return e.render=n,e}return w(n,t),n.prototype.build=function(t){return this.render.createDiv({classes:this._getClassesWith(t.classes),children:t.children})},n.prototype.classes=function(){return[d.row,d.asideColor]},n}(_),C=function(){return new v(h())},R=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),T=function(t){function n(n){var e=t.call(this)||this;return e.render=n,e}return R(n,t),n.prototype.build=function(t){return this.render.createDiv({classes:this._getClasses({classes:t.classes,size:t.size}),children:t.children})},n.prototype._getClasses=function(t){var n=this._getClassesWith(t.classes),e=this._columnSize(t.size);return n.push(e),n},n.prototype._columnSize=function(t){return"col-".concat(t)},n}(_),O=function(){return new T(h())},I=function(){return new a(h())},E=function(){function t(t){this.render=t}return t.prototype.build=function(t){return this.render.createParagraph({classes:[t.withoutMarginBottom?d.noMarginBottom:""],children:[this.render.createText(t.text)]})},t}(),b=function(){return new E(h())},P=function(){function t(t){this.interests=t}return t.prototype.call=function(){return this.interests.getInterests()},t}();!function(t){t[t.PT_BR=0]="PT_BR",t[t.EN_US=1]="EN_US"}(c||(c={}));var m,S=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),A=function(){function t(){}return t.prototype.getInterests=function(){return new Map([[n.PHYSICAL_ACTIVITY,this.PHYSICAL_ACTIVITY],[n.MUSIC,this.MUSIC]])},t}(),L=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.PHYSICAL_ACTIVITY="Physical Activity",n.MUSIC="Music",n}return S(n,t),n}(A),j=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.PHYSICAL_ACTIVITY="Atividade Física",n.MUSIC="Música",n}return S(n,t),n}(A),N=function(t){return new P(function(t){switch(t){case c.EN_US:return new L;case c.PT_BR:return new j}}(t))},x=function(t){return new o({getInterests:N(t),interestsRender:new p({interestRender:new g({asideRowRender:C(),columnRender:O(),iconRender:I(),paragraphRender:b()}),render:h()})})},U=function(){function t(t){this.getLanguages=t.getLanguages,this.languagesRender=t.languagesRender,this.languages=this.getLanguages.call()}return t.prototype.update=function(){this.languagesRender.build(this.languages)},t}(),B=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),M=function(t){function n(n){var e=t.call(this,n.render)||this;return e.fatherId="languages",e.asideRowRender=n.asideRowRender,e.languageRender=n.languageRender,e.render=n.render,e}return B(n,t),n.prototype.build=function(t){for(var n=0;n<t.length;n+=2)this.append(this.asideRowRender.build({children:this._rowBuilder({userLanguages:t,index:n})}))},n.prototype._rowBuilder=function(t){var n=t.userLanguages,e=t.index,r=[];return r.push(this.languageRender.build(n[e])),void 0!==n[e+1]&&r.push(this.languageRender.build(n[e+1])),r},n}(s),G=function(){function t(t){this.iconRender=t}return t.prototype.build=function(t){for(var n=[],e=0;e<5;e++)n[e]=this._buildLevel(e,t);return n},t.prototype._buildLevel=function(t,n){var r=t<n?e.FILLED_CIRCLE:e.EMPTY_CIRCLE;return this.iconRender.build(r)},t}(),H=function(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))},Y=function(){function t(t){this.circlesRender=t.circlesRender,this.columnRender=t.columnRender,this.paragraphRender=t.paragraphRender}return t.prototype.build=function(t){return this.columnRender.build({size:6,children:H([this.paragraphRender.build({text:t.language,withoutMarginBottom:!0})],this.circlesRender.build(t.level),!0)})},t}(),z=function(){function t(t){this.languages=t}return t.prototype.call=function(){return this.languages.getLanguages()},t}(),D=function(t){this.language=t.language,this.level=t.level},F=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),V=function(){function t(){this.PORTUGUESE=new D({language:"",level:5}),this.ENGLISH=new D({language:"",level:3})}return t.prototype._setLocales=function(){this._setPortugueseLocale(),this._setEnglishLocale()},t.prototype._setPortugueseLocale=function(){this.PORTUGUESE.language=this.portugueseLocale},t.prototype._setEnglishLocale=function(){this.ENGLISH.language=this.englishLocale},t.prototype.getLanguages=function(){return[this.PORTUGUESE,this.ENGLISH]},t}(),W=function(t){function n(){var n=t.call(this)||this;return n.portugueseLocale="Portuguese",n.englishLocale="English",n._setLocales(),n}return F(n,t),n}(V),k=function(t){function n(){var n=t.call(this)||this;return n.portugueseLocale="Português",n.englishLocale="Inglês",n._setLocales(),n}return F(n,t),n}(V),K=function(t){return new z(function(t){switch(t){case c.EN_US:return new W;case c.PT_BR:return new k}}(t))},X=function(t){return new U({getLanguages:K(t),languagesRender:new M({asideRowRender:C(),languageRender:new Y({circlesRender:new G(I()),columnRender:O(),paragraphRender:b()}),render:h()})})};!function(t){t[t.CONTACT=0]="CONTACT",t[t.EDUCATION=1]="EDUCATION",t[t.EXPERIENCE=2]="EXPERIENCE",t[t.INTERESTS=3]="INTERESTS",t[t.LANGUAGES=4]="LANGUAGES",t[t.OTHERS=5]="OTHERS"}(m||(m={}));var q=function(){},J=function(){function t(t){this.contactId="contact-title",this.interestsId="interests-title",this.languagesId="languages-title",this.othersId="others-title",this.getTitles=t.getTitles,this.titleRender=t.titleRender,this.titles=this.getTitles.call()}return t.prototype.update=function(){var t=this;this.titles.forEach((function(n){t.titleRender.build({text:n.locale,fatherId:t._getIdByType(n.type)})}))},t.prototype._getIdByType=function(t){switch(t){case m.CONTACT:return this.contactId;case m.INTERESTS:return this.interestsId;case m.LANGUAGES:return this.languagesId;case m.OTHERS:return this.othersId;default:throw Error("Unnimplemented father id for type: ".concat(t))}},t}(),Q=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Z=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Q(n,t),n.prototype.build=function(t){this.fatherId=t.fatherId,this.append(t.text)},n}(s),$=function(){function t(t){this.params=t}return t.prototype.call=function(){return[this.params.contactTitle,this.params.interestsTitle,this.params.languagesTitle,this.params.othersTitle]},t}(),tt=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),nt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=m.CONTACT,n}return tt(n,t),n}(q),et=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Contato",n}return tt(n,t),n}(nt),rt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Contact",n}return tt(n,t),n}(nt),ot=function(t){switch(t){case c.EN_US:return new rt;case c.PT_BR:return new et}},it=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),ut=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=m.INTERESTS,n}return it(n,t),n}(q),st=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Interesses",n}return it(n,t),n}(ut),ct=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Interests",n}return it(n,t),n}(ut),at=function(t){switch(t){case c.EN_US:return new ct;case c.PT_BR:return new st}},lt=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),pt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=m.LANGUAGES,n}return lt(n,t),n}(q),ft=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Idiomas",n}return lt(n,t),n}(pt),ht=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Languages",n}return lt(n,t),n}(pt),dt=function(t){switch(t){case c.EN_US:return new ht;case c.PT_BR:return new ft}},yt=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),gt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=m.OTHERS,n}return yt(n,t),n}(q),_t=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Outros",n}return yt(n,t),n}(gt),wt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Others",n}return yt(n,t),n}(gt),vt=function(t){switch(t){case c.EN_US:return new wt;case c.PT_BR:return new _t}},Ct=function(t){return new $({contactTitle:ot(t),interestsTitle:at(t),languagesTitle:dt(t),othersTitle:vt(t)})},Rt=function(t){return new J({getTitles:Ct(t),titleRender:new Z(h())})},Tt=new(function(){function t(){this.language=c.PT_BR}return t.prototype.toggleLanguage=function(){var t=this.newLanguage();return this.language=t,t},t.prototype.newLanguage=function(){switch(this.language){case c.EN_US:return c.PT_BR;case c.PT_BR:return c.EN_US}},t}()),Ot=function(t){var n=function(t){return new r({interestsController:x(t),languagesController:X(t),titlesController:Rt(t)})}(t);n.update()};Ot(Tt.language);var It=document.getElementById("changeLanguage");null!==It&&(It.onclick=function(){Tt.toggleLanguage(),Ot(Tt.language)})})();