(this["webpackJsonpghouls-goblins-hof"]=this["webpackJsonpghouls-goblins-hof"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"appDescription":"Vote for your favorite ghouls, goblins, and monsters to enter the esteemed ranks Dr. Frankenstein\'s Ghouls and Goblins Hall of Fame!","appHeader":"Hall of Fame","appTitle":"Ghouls and Goblins Hall of Fame Fan Vote","closeModal":"Go Back","emoji":"science","footerDescription":"Made with {emoji} by {link}","goBack":"Back","homeDescription":"Vote for your favorite ghouls and goblins to be inducted into our Hall of Fame! You can select up to {nominees} per user.","homeDescriptionNomineed":"3 Nominees","homeNominees":"Nominees","homeTitle":"Vote for your favorites!","logIn":"Sign In to Vote","loginAction":"Sign In!","loginInput":"Email address","loginTitle":"Enter your email address to vote","resultsTitle":"Results","spookyScary":"Spooky Scary!","spookySecret":"Click for something Spooky Scary!","submitVotes":"Submit My Vote","theLab":"Dr. Frankenstein\'s Laboratory of Technology"}')},26:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(23),o=a(46),s=a(2),l=a(3),r=a(5),c=a(4),i=a(6),m=a(0),u=a.n(m),h=a(16),d=a(12),g=a(45),p=a(17),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={focused:!1},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.handleOnClick,n=t.monster,o=t.selected,s="monster-".concat(n.id),l="ghoul-selector ".concat(o&&"ghoul-selected");return u.a.createElement("div",{className:"".concat(l," ").concat(this.state.focused&&"ghoul-focused"),onClick:a},u.a.createElement("div",{className:"ghoul-checkbox"},u.a.createElement("input",{onFocus:function(){e.setState({focused:!0})},onBlur:function(){e.setState({focused:!1})},type:"checkbox",className:"ghoul-checkbox-input",name:s,id:s,onChange:a}),u.a.createElement("div",{className:"ghoul-image",style:{backgroundImage:"url(".concat(n.image,")")}})),u.a.createElement("label",{htmlFor:s,className:"ghoul-name"},n.name))}}]),t}(m.Component);b.defaultProps={selected:!1};var f=b,E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).getEmojiText=function(){var e=a.props.spookyScary,t=u.a.createElement(g.a,{id:"emoji"});return u.a.createElement("span",{role:"img",className:"ghouls-emoji",onClick:e,"aria-label":t},"\ud83e\udddf")},a.getNameText=function(){return u.a.createElement(g.a,{id:"theLab"})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.spookyScary;return u.a.createElement(u.a.Fragment,null,u.a.createElement("footer",{className:"ghouls-footer"},u.a.createElement("p",null,u.a.createElement(g.a,{id:"footerDescription",values:{emoji:this.getEmojiText(),link:u.a.createElement("a",{href:"https://www.ryandudek.com",target:"new",className:"ghouls-footer-link"},this.getNameText())}})),u.a.createElement("button",{type:"button",className:"ghouls-button ghouls-secret-trigger",onClick:e},u.a.createElement(g.a,{id:"spookySecret"}))),u.a.createElement("div",{className:"ghouls-castle-bg"}))}}]),t}(m.Component),y=Object(p.c)(E),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).getSwapiText=function(){return u.a.createElement(g.a,{id:"swapi"})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.logoLink;return u.a.createElement("header",{className:"ghouls-header-container"},u.a.createElement("div",{className:"ghouls-header"},u.a.createElement("div",{className:"ghouls-content"},u.a.createElement("h1",{className:"ghouls-title ghouls-accessible-text"},u.a.createElement(g.a,{id:"appTitle"})),u.a.createElement(h.a,{to:e,className:"ghouls-link"},u.a.createElement("img",{src:"/assets/img/tombstone.svg",className:"ghouls-logo",alt:"","aria-hidden":"true"})),u.a.createElement("p",{className:"ghouls-description","aria-hidden":"true"},u.a.createElement(g.a,{id:"appHeader"})))))}}]),t}(m.Component),k=Object(p.c)(v),j=a(14),O=a(13),N=function(e,t){return e?t?e.setAttribute("inert",""):e.removeAttribute("inert"):null},w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleEscape=a.handleEscape.bind(Object(O.a)(a)),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"handleEscape",value:function(e){27===e.keyCode&&this.props.handleClose()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleEscape,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleEscape,!1)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.handleClose,n=e.id,o=e.inert;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{role:"button",className:"ghouls-modal-bg","aria-hidden":"true","aria-label":u.a.createElement(g.a,{id:"closeModal"}),onClick:a}),u.a.createElement("aside",{className:"ghouls-modal",ref:function(e){return N(e,o)},id:n},u.a.createElement("button",{className:"ghouls-modal-close",onClick:a},u.a.createElement("span",{className:"ghouls-accessible-text"},u.a.createElement(g.a,{id:"closeModal"}))),t))}}]),t}(m.Component);w.defaultProps={children:null,id:"",inert:!1};var x=Object(p.c)(w),C=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleClose,a=e.handleLogin,n=e.inert;return u.a.createElement(x,{handleClose:t,inert:n,id:"ghouls-login-modal"},u.a.createElement("h1",{className:"ghouls-modal-heading"},u.a.createElement(g.a,{id:"loginTitle"})),u.a.createElement("form",null,u.a.createElement("div",{className:"ghouls-input-container"},u.a.createElement("label",{htmlFor:"ghouls-vote-login",className:"ghouls-label"},u.a.createElement(g.a,{id:"loginInput"})),u.a.createElement("input",{type:"email",id:"ghouls-vote-login",name:"ghouls-vote-login",className:"ghouls-input"})),u.a.createElement("div",{className:"ghouls-button-row"},u.a.createElement("button",{className:"ghouls-button",type:"button",onClick:a},u.a.createElement(g.a,{id:"loginAction"})))))}}]),t}(m.Component);C.defaultProps={inert:!1};var M=Object(p.c)(C),V=function(){var e=Math.floor(666),t=Math.ceil(99468);return Math.floor(Math.random()*(e-t+1))+t},S=[{id:1,image:"/assets/img/frankenstein.jpg",name:"Frankenstein's Monster",votes:V()},{id:2,image:"/assets/img/bride-frankenstein.jpg",name:"Bride of Frankenstein",votes:V()},{id:3,image:"/assets/img/chucky.jpg",name:"Charles Lee Ray",votes:V()},{id:4,image:"/assets/img/freddy.jpg",name:"Freddy Krueger",votes:V()},{id:5,image:"/assets/img/thing.jpg",name:"The Thing",votes:V()},{id:6,image:"/assets/img/pennywise.jpg",name:"Pennywise",votes:V()},{id:7,image:"/assets/img/dracula.jpg",name:"Dracula",votes:V()},{id:8,image:"/assets/img/creature.jpg",name:"Creature from the Black Lagoon",votes:V()},{id:9,image:"/assets/img/wolfman.jpg",name:"Wolfman",votes:V()},{id:10,image:"/assets/img/blob.jpg",name:"The Blob",votes:V()},{id:11,image:"/assets/img/predator.jpg",name:"Predator",votes:V()},{id:12,image:"/assets/img/pale-man.jpg",name:"The Pale Man",votes:V()},{id:13,image:"/assets/img/xenomorph.jpg",name:"Xenomorph",votes:V()}],B=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleOnClick,a=e.monster,n=e.selected,o="monster-".concat(a.id),s="ghoul-selector ".concat(n&&"ghoul-selected");return u.a.createElement("div",{className:s,onClick:t},u.a.createElement("div",{className:"ghoul-checkbox"},u.a.createElement("div",{className:"ghoul-checkbox-input ghoul-checkbox-no-hover",id:o,onChange:t}),u.a.createElement("div",{className:"ghoul-image",style:{backgroundImage:"url(".concat(a.image,")")}})),u.a.createElement("p",{className:"ghoul-name"},a.name))}}]),t}(m.Component);B.defaultProps={selected:!1};var T=B,F=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleClose,a=e.inert;return u.a.createElement(x,{handleClose:t,inert:a,id:"ghouls-login-modal"},u.a.createElement("h1",{className:"ghouls-modal-heading"},u.a.createElement(g.a,{id:"spookyScary"})),u.a.createElement("div",{style:{height:"315px"}},u.a.createElement("iframe",{title:"Werewolf Bar Mitz Vah music video",width:"560",height:"315",src:"https://www.youtube.com/embed/A6V2oCX3Hn4",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))}}]),t}(m.Component);F.defaultProps={inert:!1};var L=Object(p.c)(F),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).selectNominee=function(e){var t=a.state,n=t.selections,o=t.count;n.indexOf(e)>=0?a.setState({count:o-1,selections:n.filter((function(t){return t!==e}))}):o>=3||a.setState({count:o+1,selections:[].concat(Object(d.a)(n),[e])})},a.renderNominees=function(){var e=a.props.keyboard,t=a.state.selections;return u.a.createElement("ul",{className:"ghouls-nominee-list"},S.map((function(n,o){var s=n.id;return e?u.a.createElement(f,{monster:n,key:"monster-".concat(s),selected:t.indexOf(s)>=0,handleOnClick:function(){return a.selectNominee(s)}}):u.a.createElement(T,{monster:n,key:"monster-".concat(s),selected:t.indexOf(s)>=0,handleOnClick:function(){return a.selectNominee(s)}})})))},a.getButtonText=function(){return a.state.isAuthenticated?u.a.createElement(g.a,{id:"submitVotes"}):u.a.createElement(g.a,{id:"logIn"})},a.toggleLoginModal=function(){var e=a.state.loginModalVisible;a.setState({loginModalVisible:!e})},a.handleLogin=function(){var e=a.state.isAuthenticated;a.setState({isAuthenticated:!e,loginModalVisible:!1})},a.submitData=function(){var e=a.state,t=e.selections,n=e.errorModalVisible;console.log(t,n)},a.renderButton=function(){var e=a.state.isAuthenticated?a.submitData:a.toggleLoginModal;return u.a.createElement("button",{type:"button",className:"ghouls-button",onClick:e},a.getButtonText())},a.renderModal=function(){var e=a.state,t=e.errorModalVisible,n=e.werewolfBarMitzVah;if(!t)return n?u.a.createElement(L,{handleClose:a.werewolfBarMitzVah}):u.a.createElement(M,{handleClose:a.toggleLoginModal,handleLogin:a.handleLogin});console.log("there is an error")},a.werewolfBarMitzVah=function(){var e=a.state.werewolfBarMitzVah;a.setState({werewolfBarMitzVah:!e})},a.state={count:0,isAuthenticated:!1,selections:[],loginModalVisible:!1,errorModalVisible:!1,werewolfBarMitzVah:!1},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.errorModalVisible,a=e.loginModalVisible,n=e.werewolfBarMitzVah,o=this.props,s=o.keyboard,l=o.inert,r=o.location,c=o.styles,i=o.next,m=r.search&&r.search.substr(1,14),h=t||a||n,d=!!l&&h;return u.a.createElement(u.a.Fragment,null,u.a.createElement(j.Helmet,{defer:!1},u.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/".concat(c,".css")}),"reduced-motion"===m&&u.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/ghouls--reduced-motion.css"}),l&&u.a.createElement("script",{src:"/inert-polyfill.min.js"})),u.a.createElement("main",{ref:function(e){return N(e,d)},className:"ghouls-main",id:"ghouls-main"},u.a.createElement(k,{logoLink:i}),u.a.createElement("section",{className:"ghouls-content ghouls-body-content"},u.a.createElement("header",{className:"ghouls-section-header"},u.a.createElement("h2",{className:"ghouls-heading ghouls-section-heading"},u.a.createElement(g.a,{id:"homeTitle"})),this.renderButton()),u.a.createElement("div",{className:"ghouls-section-header"},u.a.createElement("p",{className:"ghouls-section-description"},u.a.createElement(g.a,{id:"homeDescription",values:{nominees:u.a.createElement("strong",null,u.a.createElement(g.a,{id:"homeDescriptionNomineed"}))}}))),u.a.createElement("div",{className:"ghouls-section-header ghouls-selections"}),u.a.createElement("h3",{className:"ghouls-heading ghouls-accessible-text"},u.a.createElement(g.a,{id:"homeNominees"})),this.renderNominees(),s&&u.a.createElement("div",{className:"ghouls-button-row"},this.renderButton())),u.a.createElement(y,{spookyScary:this.werewolfBarMitzVah})),h&&this.renderModal())}}]),t}(m.Component);A.defaultProps={inert:!1,keyboard:!1};var D=Object(p.c)(A),z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).renderResults=function(){console.log(S)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.location,a=e.styles,n=e.next,o=t.search&&t.search.substr(1,14);return u.a.createElement(u.a.Fragment,null,u.a.createElement("main",null,u.a.createElement(j.Helmet,{defer:!1},u.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/".concat(a,".css")}),"reduced-motion"===o&&u.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/ghouls--reduced-motion.css"})),u.a.createElement(k,{logoLink:n}),u.a.createElement("section",{className:"ghouls-content"},u.a.createElement("h2",{className:"ghouls-heading"},u.a.createElement(g.a,{id:"resultsTitle"})),this.renderResults()),u.a.createElement(y,null)))}}]),t}(m.Component),H=Object(p.c)(z),I=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"ghouls-app"},u.a.createElement(h.b,null,u.a.createElement(D,{exact:!0,path:"/",next:"/home",styles:"default"}),u.a.createElement(D,{path:"/home",next:"/contrast",styles:"default"}),u.a.createElement(D,{path:"/contrast",next:"/keyboard",styles:"contrast"}),u.a.createElement(D,{path:"/keyboard",next:"/inert",styles:"keyboard",keyboard:!0}),u.a.createElement(D,{path:"/inert",next:"/dark",styles:"keyboard",keyboard:!0,inert:!0}),u.a.createElement(D,{path:"/dark",next:"/high-contrast",styles:"dark",keyboard:!0,inert:!0}),u.a.createElement(D,{path:"/high-contrast",next:"/high-contrast-light",styles:"hc-dark",keyboard:!0,inert:!0}),u.a.createElement(D,{path:"/high-contrast-light",next:"/users",styles:"hc-light",keyboard:!0,inert:!0}),u.a.createElement(D,{path:"/users",next:"/results",styles:"users",keyboard:!0,inert:!0}),u.a.createElement(H,{path:"/results",next:"/results-dark",styles:"users",keyboard:!0,inert:!0})))}}]),t}(m.Component),P=a(25),G=a.n(P),R=document.getElementById("ghouls-goblins-hof");R&&G.a.render(u.a.createElement(o.a,{locale:"en",messages:n},u.a.createElement(I,null)),R)}},[[26,1,2]]]);
//# sourceMappingURL=main.a1ebca92.chunk.js.map