(()=>{"use strict";var t,n,e=function(){function t(t){this.experiencesController=t.experiencesController,this.interestsController=t.interestsController,this.languagesController=t.languagesController,this.titlesController=t.titlesController}return t.prototype.update=function(){this.experiencesController.update(),this.interestsController.update(),this.languagesController.update(),this.titlesController.update()},t}(),r=function(){function t(t){this.experiencesTitleFatherId="experiences-title",this.experiencesMainSection=t.getExperiences.call(),this.experiencesRender=t.experiencesRender,this.titleRender=t.titleRender}return t.prototype.update=function(){var t=this.experiencesMainSection.content,n=this.experiencesMainSection.title;this.experiencesRender.build(t),this.titleRender.build({text:n.locale,fatherId:this.experiencesTitleFatherId})},t}(),o=function(){function t(){}return t.createDiv=function(n){return t._create({tagName:"div",renderParams:n})},t.createI=function(n){return t._create({tagName:"i",renderParams:n})},t.createParagraph=function(n){return t._create({tagName:"p",renderParams:n})},t.createText=function(t){return document.createTextNode(t)},t._create=function(t){var n,e=document.createElement(t.tagName),r=t.renderParams;return null!=(null==r?void 0:r.classes)&&(n=e.classList).add.apply(n,null==r?void 0:r.classes),null!=(null==r?void 0:r.children)&&e.append.apply(e,null==r?void 0:r.children),e},t.removeAllChildren=function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},t}(),i=function(){},u=(t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return u(n,t),n.prototype.append=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=this._getFatherElement();o.removeAllChildren(e),e.append.apply(e,t)},n.prototype._getFatherElement=function(){var t=document.getElementById(this.fatherId);if(null===t)throw Error("Could not find father element.");return t},n}(i),a=function(){function t(){}return t.asideColor="gray",t.mainSectionTextColor="dark-blue",t.marginBottom2="mb-2",t.paddingStart2="ps-2",t.noMarginBottom="mb-0",t.noHorizontalMargin="mx-0",t.noPadding="p-0",t.noPaddingEnd="pe-0",t.alignItemsCenter="align-items-center",t.mainSectionContent="content",t.displayFlex="d-flex",t.justifyContentCenter="justify-content-center",t.row="row",t}(),s=function(){function t(){}return t.prototype.classes=function(){return[]},t.prototype._getClassesWith=function(t){var n=this.classes();return void 0!==t&&n.push.apply(n,t),n},t}(),l=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),p=function(t){function n(n){var e=t.call(this)||this;return e.content=e.build(n),e}return l(n,t),n.prototype.build=function(t){return o.createDiv({classes:this._getClasses({classes:t.classes,size:t.size}),children:t.children})},n.prototype._getClasses=function(t){var n=this._getClassesWith(t.classes),e=this._columnSize(t.size);return n.push(e),n},n.prototype._columnSize=function(t){return"col-".concat(t)},n}(s),f=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),h=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return f(n,t),n.prototype._getClasses=function(n){var e,r=[a.paddingStart2,a.noPaddingEnd];return null!==n.classes?null===(e=n.classes)||void 0===e||e.push.apply(e,r):n.classes=r,t.prototype._getClasses.call(this,n)},n}(p),y=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),d=function(t){function n(n){var e=t.call(this)||this;return e.content=e.build(n),e}return y(n,t),n.prototype.build=function(t){return o.createDiv({classes:this._getClassesWith(t.classes),children:t.children})},n.prototype.classes=function(){return[a.row]},n}(s),_=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),w=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.additionalClasses=[a.mainSectionTextColor,a.mainSectionContent],n}return _(n,t),n.prototype.classes=function(){var n=t.prototype.classes.call(this);return n.push.apply(n,this.additionalClasses),n},n}(d),g=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),v=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.fatherId="experiences",n}return g(n,t),n.prototype.build=function(t){var n=new h({size:3,children:[]}),e=new w({children:[n.content]});this.append(e.content)},n}(c),O=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),b=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return O(n,t),n.prototype.build=function(t){this.fatherId=t.fatherId,this.append(t.text)},n}(c),m=function(){return new b},C=function(t){this.title=t.title,this.content=t.content},T=function(){function t(t){this.params=t}return t.prototype.call=function(){return new C({title:this.params.title,content:[this.params.startaideia,this.params.eagle,this.params.firstTable,this.params.emotus,this.params.petSocialMedia,this.params.d3Energy]})},t}();!function(t){t[t.PT_BR=0]="PT_BR",t[t.EN_US=1]="EN_US"}(n||(n={}));var S,E=function(){function t(){}return t.milisecondsToYears=function(t){var n=t/31536e6;return Math.round(n)},t}(),P=function(){function t(t){this.location=this._experienceLocationFromCountry(t)}return t.prototype.getDuration=function(){var t,n,e=this.initialDate.getTime(),r=null!==(n=null===(t=this.endDate)||void 0===t?void 0:t.getTime())&&void 0!==n?n:(new Date).getTime();return E.milisecondsToYears(r-e)},t}(),R=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),j=function(t){function n(n){var e=t.call(this,n.country)||this;return e.title=n.position.locale(),e}return R(n,t),n}(P),A=function(t){this.city=t.city,this.company=t.company,this.country=t.country.locale},I=function(){function t(){}return t.PORTO_ALEGRE="Porto Alegre",t.PELOTAS="Pelotas",t}(),x=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),L=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.endDate=new Date(2020,11),n.initialDate=new Date(2019,6),n}return x(n,t),n.prototype._experienceLocationFromCountry=function(t){var n=I.PORTO_ALEGRE;return new A({city:n,company:"D3 Energia",country:t})},n}(j),D=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.responsabilities=["Adição de novas funcionalidades do software da empresa.Houve ainda foco em transformar o software de proceduralpara orientação em objetos","Realizar o back-up de e-mails, arquivos do sistema e bancode dados","Criação e manutenção no website da empresa","Dimensionar, analisar a viabilidade, projetar, coordenar ainstalação e manutenção de sistemas solares"],n}return x(n,t),n}(L),N=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.responsabilities=["Development of new functionalities for the company software. That was a concern in changing the software from procedural to object oriented","Doing the back-up of emails, files and database","Creation and maintenance of the company website","Sizing, checking viability, projecting, coordinating the installation and maintenance of solar systems"],n}return x(n,t),n}(L),U=function(){},B=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),M=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Brasil",n}return B(n,t),n}(U),F=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Brasil",n}return B(n,t),n}(U),z=function(t){switch(t){case n.EN_US:return new M;case n.PT_BR:return new F}},G=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),H=function(){},Y=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return G(n,t),n.prototype.locale=function(){return"".concat(this.position," ").concat(this.typeOfTech," ").concat(this.with," ").concat(this.tech)},n}(H),J=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),W=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return J(n,t),n}(H),k=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return J(n,t),n.prototype.locale=function(){return"Web developer and engineer intern"},n}(W),V=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return J(n,t),n.prototype.locale=function(){return"Web developer e estágio em engenharia"},n}(W),X=function(t){switch(t){case n.EN_US:return new k;case n.PT_BR:return new V}},q=function(t){var e={position:X(t),country:z(t)};switch(t){case n.EN_US:return new N(e);case n.PT_BR:return new D(e)}},K=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Q=function(t){function n(n){var e=t.call(this,n)||this;return e.endDate=new Date(2021,7),e.initialDate=new Date(2020,11),e}return K(n,t),n.prototype._experienceLocationFromCountry=function(t){var n=I.PELOTAS;return new A({city:n,company:"Eagle",country:t})},n}(j),Z=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.responsabilities=["Manutenção e desenvolvimento de funcionalidades direto no código fonte do website da empresa","Manutenção nos SPA que a empresa possui e adição de novas funcionalidades","Desenvolvimento completo de Single Page Application"],n}return K(n,t),n}(Q),$=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.responsabilities=["Maintenance and development of new functionalities for the company website source code","Maintenance of the existent SPA and development of new functionalities","Development of new SPA in partnership with the company's development team"],n}return K(n,t),n}(Q),tt=function(){function t(){}return t.position="Desenvolvedor",t.with="com",t}(),nt=function(){function t(){}return t.position="Developer",t.with="with",t}(),et=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),rt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.typeOfTech="front-end",n.tech="React JS",n}return et(n,t),n}(Y),ot=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.position=tt.position,n.with=tt.with,n}return et(n,t),n}(rt),it=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.position=nt.position,n.with=nt.with,n}return et(n,t),n}(rt),ut=function(t){switch(t){case n.EN_US:return new it;case n.PT_BR:return new ot}},ct=function(t){var e={position:ut(t),country:z(t)};switch(t){case n.EN_US:return new $(e);case n.PT_BR:return new Z(e)}},at=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),st=function(t){function n(n){var e=t.call(this,n)||this;return e.endDate=new Date(2021,7),e.initialDate=new Date(2020,11),e}return at(n,t),n.prototype._experienceLocationFromCountry=function(t){var n=I.PELOTAS;return new A({city:n,company:"Emotus",country:t})},n}(j),lt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.responsabilities=["SPA development to integrate commercial distributor, installer and final client using JavaScript, JS Linter with the Airbnb style guide, React JS using function components, Styled-Components, React Testing Library and React Router"],n}return at(n,t),n}(st),pt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.responsabilities=["Desenvolvimento de SPA para integração entre distribuidor, instalador e cliente final utilizando JavaScript, JS Linter com o guia de estilo do Airbnb, React JS com function components, Styled-Components, React Testing Library e React Router"],n}return at(n,t),n}(st),ft=function(t){var e={position:ut(t),country:z(t)};switch(t){case n.EN_US:return new lt(e);case n.PT_BR:return new pt(e)}},ht=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),yt=function(t){function n(n){var e=t.call(this,n)||this;return e.endDate=new Date(2021,12),e.initialDate=new Date(2021,4),e}return ht(n,t),n.prototype._experienceLocationFromCountry=function(t){var n=I.PELOTAS;return new A({city:n,company:"Primeira Mesa",country:t})},n}(j),dt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.responsabilities=["Manutenção no aplicativo da empresa e adição de novas funcionalidades","Responsável por ensinar e orientar o novo time de desenvolvedores"],n}return ht(n,t),n}(yt),_t=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.responsabilities=["SPA development to integrate commercial distributor, installer and final client using JavaScript, JS Linter with the Airbnb style guide, React JS using function components, Styled-Components, React Testing Library and React Router"],n}return ht(n,t),n}(yt),wt=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),gt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.typeOfTech="mobile",n.tech="Flutter",n}return wt(n,t),n}(Y),vt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.position=tt.position,n.with=tt.with,n}return wt(n,t),n}(gt),Ot=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.position=nt.position,n.with=nt.with,n}return wt(n,t),n}(gt),bt=function(t){switch(t){case n.EN_US:return new Ot;case n.PT_BR:return new vt}},mt=function(t){var e={position:bt(t),country:z(t)};switch(t){case n.EN_US:return new _t(e);case n.PT_BR:return new dt(e)}},Ct=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Tt=function(t){function n(n){var e=t.call(this,n)||this;return e.endDate=new Date(2021,3),e.initialDate=new Date(2020,11),e}return Ct(n,t),n.prototype._experienceLocationFromCountry=function(t){var n=this.company,e=I.PELOTAS;return new A({city:e,company:n,country:t})},n}(j),St=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.company="Independente",n.responsabilities=["Desenvolvimento do front-end de uma rede social para mobile, utilizando Flutter e Android Studio. Dentre as habilidades utilizadas, estão: formulários controlados, video player, timeline e chat"],n}return Ct(n,t),n}(Tt),Et=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.company="Self Employed",n.responsabilities=["Front-end development of a social media for mobile devices, using Flutter and Android Studio. The abilities that was used: control forms, video player, timeline and chat"],n}return Ct(n,t),n}(Tt),Pt=function(t){var e={position:bt(t),country:z(t)};switch(t){case n.EN_US:return new Et(e);case n.PT_BR:return new St(e)}},Rt=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),jt=function(t){function n(n){var e=t.call(this,n)||this;return e.endDate=null,e.initialDate=new Date(2021,7),e}return Rt(n,t),n.prototype._experienceLocationFromCountry=function(t){var n=I.PELOTAS;return new A({city:n,company:"Startaideia",country:t})},n}(j),At=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.responsabilities=["Desenvolvimento de novos aplicativos multiplataforma (Web, Android e iOS)","Definir padrões de projeto e testes automatizados (unitários) utilizando TDD e Clean Architecture","Implementar mudanças de hábitos, cultura CI/CD e automatização"],n}return Rt(n,t),n}(jt),It=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.responsabilities=["Development of multiplataform applications (Web, Android and iOS)","Definition of project patterns and creation of unit tests using TDD and Clean Architecture","Implementation of changes in habits, CI/CD culture and automation"],n}return Rt(n,t),n}(jt),xt=function(t){var e={position:bt(t),country:z(t)};switch(t){case n.EN_US:return new It(e);case n.PT_BR:return new At(e)}};!function(t){t[t.CONTACT=0]="CONTACT",t[t.EDUCATION=1]="EDUCATION",t[t.EXPERIENCE=2]="EXPERIENCE",t[t.INTERESTS=3]="INTERESTS",t[t.LANGUAGES=4]="LANGUAGES",t[t.OTHERS=5]="OTHERS"}(S||(S={}));var Lt,Dt,Nt=function(){},Ut=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Bt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=S.EXPERIENCE,n}return Ut(n,t),n}(Nt),Mt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Experiência",n}return Ut(n,t),n}(Bt),Ft=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Experience",n}return Ut(n,t),n}(Bt),zt=function(t){switch(t){case n.EN_US:return new Ft;case n.PT_BR:return new Mt}},Gt=function(t){return new T({title:zt(t),d3Energy:q(t),eagle:ct(t),emotus:ft(t),firstTable:mt(t),petSocialMedia:Pt(t),startaideia:xt(t)})},Ht=function(t){return new r({experiencesRender:new v,getExperiences:Gt(t),titleRender:m()})},Yt=function(){function t(t){this.interests=t.getInterests.call(),this.interestsRender=t.interestsRender}return t.prototype.update=function(){this.interestsRender.build(this.interests)},t}();!function(t){t.PHYSICAL_ACTIVITY="physicalActivity",t.MUSIC="music"}(Lt||(Lt={})),function(t){t.EMPTY_CIRCLE="far fa-circle",t.FILLED_CIRCLE="fas fa-circle",t.BIKING="fas fa-biking gray",t.MUSIC="fas fa-music gray"}(Dt||(Dt={}));var Jt=function(){function t(t){this.content=this.build(t)}return t.prototype.build=function(t){var n,e=o.createI(),r=t.icon.split(" ");return(n=e.classList).add.apply(n,r),e},t}(),Wt=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),kt=function(t){function n(n){var e=t.call(this)||this;return e.fatherId="interests",e.interestRender=n.interestRender,e}return Wt(n,t),n.prototype.build=function(t){this.append.apply(this,[this.interestRender.build({icon:Dt.BIKING,text:t.get(Lt.PHYSICAL_ACTIVITY)}),this.interestRender.build({icon:Dt.MUSIC,text:t.get(Lt.MUSIC)})])},n}(c),Vt=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Xt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Vt(n,t),n.prototype.classes=function(){var n=t.prototype.classes.call(this);return n.push(a.asideColor),n},n}(d),qt=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Kt=function(t){function n(n){var e=t.call(this)||this;return e.paragraphRender=n.paragraphRender,e}return qt(n,t),n.prototype.build=function(t){var n=new Jt({icon:t.icon}),e=new p({size:1,classes:this.iconColumnAdditionalClasses(),children:[n.content]}),r=new p({size:11,classes:this.textColumnAdditionalClasses(),children:[this.paragraphRender.build({withoutMarginBottom:!0,text:t.text})]});return new Xt({classes:this.asideRowAdditionalClasses(),children:[e.content,r.content]}).content},n.prototype.asideRowAdditionalClasses=function(){return[a.noHorizontalMargin,a.marginBottom2]},n.prototype.iconColumnAdditionalClasses=function(){return[a.noPadding,a.displayFlex,a.alignItemsCenter,a.justifyContentCenter]},n.prototype.textColumnAdditionalClasses=function(){return[]},n}(i),Qt=function(){function t(){}return t.prototype.build=function(t){return o.createParagraph({classes:[t.withoutMarginBottom?a.noMarginBottom:""],children:[o.createText(t.text)]})},t}(),Zt=function(){return new Qt},$t=function(){function t(t){this.interests=t}return t.prototype.call=function(){return this.interests.getInterests()},t}(),tn=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),nn=function(){function t(){}return t.prototype.getInterests=function(){return new Map([[Lt.PHYSICAL_ACTIVITY,this.PHYSICAL_ACTIVITY],[Lt.MUSIC,this.MUSIC]])},t}(),en=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.PHYSICAL_ACTIVITY="Physical Activity",n.MUSIC="Music",n}return tn(n,t),n}(nn),rn=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.PHYSICAL_ACTIVITY="Atividade Física",n.MUSIC="Música",n}return tn(n,t),n}(nn),on=function(t){return new $t(function(t){switch(t){case n.EN_US:return new en;case n.PT_BR:return new rn}}(t))},un=function(t){return new Yt({getInterests:on(t),interestsRender:new kt({interestRender:new Kt({paragraphRender:Zt()})})})},cn=function(){function t(t){this.getLanguages=t.getLanguages,this.languagesRender=t.languagesRender,this.languages=this.getLanguages.call()}return t.prototype.update=function(){this.languagesRender.build(this.languages)},t}(),an=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),sn=function(t){function n(n){var e=t.call(this)||this;return e.fatherId="languages",e.languageRender=n.languageRender,e}return an(n,t),n.prototype.build=function(t){for(var n=0;n<t.length;n+=2){var e=new Xt({children:this._rowBuilder({userLanguages:t,index:n})});this.append(e.content)}},n.prototype._rowBuilder=function(t){var n=t.userLanguages,e=t.index,r=[];return r.push(this.languageRender.build(n[e])),void 0!==n[e+1]&&r.push(this.languageRender.build(n[e+1])),r},n}(c),ln=function(){function t(){}return t.prototype.build=function(t){for(var n=[],e=0;e<5;e++)n[e]=this._buildLevel(e,t);return n},t.prototype._buildLevel=function(t,n){var e=t<n?Dt.FILLED_CIRCLE:Dt.EMPTY_CIRCLE;return new Jt({icon:e}).content},t}(),pn=function(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))},fn=function(){function t(t){this.circlesRender=t.circlesRender,this.paragraphRender=t.paragraphRender}return t.prototype.build=function(t){return new p({size:6,children:pn([this.paragraphRender.build({text:t.language,withoutMarginBottom:!0})],this.circlesRender.build(t.level),!0)}).content},t}(),hn=function(){function t(t){this.languages=t}return t.prototype.call=function(){return this.languages.getLanguages()},t}(),yn=function(t){this.language=t.language,this.level=t.level},dn=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),_n=function(){function t(){this.PORTUGUESE=new yn({language:"",level:5}),this.ENGLISH=new yn({language:"",level:3})}return t.prototype._setLocales=function(){this._setPortugueseLocale(),this._setEnglishLocale()},t.prototype._setPortugueseLocale=function(){this.PORTUGUESE.language=this.portugueseLocale},t.prototype._setEnglishLocale=function(){this.ENGLISH.language=this.englishLocale},t.prototype.getLanguages=function(){return[this.PORTUGUESE,this.ENGLISH]},t}(),wn=function(t){function n(){var n=t.call(this)||this;return n.portugueseLocale="Portuguese",n.englishLocale="English",n._setLocales(),n}return dn(n,t),n}(_n),gn=function(t){function n(){var n=t.call(this)||this;return n.portugueseLocale="Português",n.englishLocale="Inglês",n._setLocales(),n}return dn(n,t),n}(_n),vn=function(t){return new hn(function(t){switch(t){case n.EN_US:return new wn;case n.PT_BR:return new gn}}(t))},On=function(t){return new cn({getLanguages:vn(t),languagesRender:new sn({languageRender:new fn({circlesRender:new ln,paragraphRender:Zt()})})})},bn=function(){function t(t){this.contactId="contact-title",this.interestsId="interests-title",this.languagesId="languages-title",this.othersId="others-title",this.getTitles=t.getTitles,this.titleRender=t.titleRender,this.titles=this.getTitles.call()}return t.prototype.update=function(){var t=this;this.titles.forEach((function(n){t.titleRender.build({text:n.locale,fatherId:t._getIdByType(n.type)})}))},t.prototype._getIdByType=function(t){switch(t){case S.CONTACT:return this.contactId;case S.INTERESTS:return this.interestsId;case S.LANGUAGES:return this.languagesId;case S.OTHERS:return this.othersId;default:throw Error("Unnimplemented father id for type: ".concat(t))}},t}(),mn=function(){function t(t){this.params=t}return t.prototype.call=function(){return[this.params.contactTitle,this.params.interestsTitle,this.params.languagesTitle,this.params.othersTitle]},t}(),Cn=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Tn=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=S.CONTACT,n}return Cn(n,t),n}(Nt),Sn=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Contato",n}return Cn(n,t),n}(Tn),En=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Contact",n}return Cn(n,t),n}(Tn),Pn=function(t){switch(t){case n.EN_US:return new En;case n.PT_BR:return new Sn}},Rn=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),jn=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=S.INTERESTS,n}return Rn(n,t),n}(Nt),An=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Interesses",n}return Rn(n,t),n}(jn),In=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Interests",n}return Rn(n,t),n}(jn),xn=function(t){switch(t){case n.EN_US:return new In;case n.PT_BR:return new An}},Ln=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Dn=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=S.LANGUAGES,n}return Ln(n,t),n}(Nt),Nn=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Idiomas",n}return Ln(n,t),n}(Dn),Un=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Languages",n}return Ln(n,t),n}(Dn),Bn=function(t){switch(t){case n.EN_US:return new Un;case n.PT_BR:return new Nn}},Mn=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Fn=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=S.OTHERS,n}return Mn(n,t),n}(Nt),zn=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Outros",n}return Mn(n,t),n}(Fn),Gn=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.locale="Others",n}return Mn(n,t),n}(Fn),Hn=function(t){switch(t){case n.EN_US:return new Gn;case n.PT_BR:return new zn}},Yn=function(t){return new mn({contactTitle:Pn(t),interestsTitle:xn(t),languagesTitle:Bn(t),othersTitle:Hn(t)})},Jn=function(t){return new bn({getTitles:Yn(t),titleRender:m()})},Wn=new(function(){function t(){this.language=n.PT_BR}return t.prototype.toggleLanguage=function(){var t=this.newLanguage();return this.language=t,t},t.prototype.newLanguage=function(){switch(this.language){case n.EN_US:return n.PT_BR;case n.PT_BR:return n.EN_US}},t}()),kn=function(t){var n=function(t){return new e({experiencesController:Ht(t),interestsController:un(t),languagesController:On(t),titlesController:Jn(t)})}(t);n.update()};kn(Wn.language);var Vn=document.getElementById("changeLanguage");null!==Vn&&(Vn.onclick=function(){Wn.toggleLanguage(),kn(Wn.language)})})();