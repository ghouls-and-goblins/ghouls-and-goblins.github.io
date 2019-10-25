(this["webpackJsonpghouls-goblins-hof"]=this["webpackJsonpghouls-goblins-hof"]||[]).push([[0],{25:function(e){e.exports=JSON.parse('{"appDescription":"Vote for your favorite ghouls, goblins, and monsters to enter the esteemed ranks Dr. Frankenstein\'s Ghouls and Goblins Hall of Fame!","appHeader":"Hall of Fame","appTitle":"Ghouls and Goblins Hall of Fame Fan Vote","closeModal":"Go Back","emoji":"science","footerDescription":"Made with {emoji} by {link}","goBack":"Back","homeDescription":"Vote for your favorite ghouls and goblins to be inducted into our Hall of Fame! You can select up to {nominees} per user.","homeDescriptionNomineed":"3 Nominees","homeNominees":"Nominees","homeTitle":"Vote for your favorites!","logIn":"Sign In to Vote","loginAction":"Sign In!","loginInput":"Email address","loginTitle":"Enter your email address to vote","resultsTitle":"Results","spookyScary":"Spooky Scary!","spookySecret":"Click for something Spooky Scary!","submitVotes":"Submit My Vote","theLab":"Dr. Frankenstein\'s Laboratory of Technology","voteCount":"{count} of {total} votes!"}')},33:function(e,t,a){e.exports=a(51)},51:function(e,t,a){"use strict";a.r(t);var n=a(25),o=a(20),s=a(2),l=a(3),r=a(5),i=a(4),c=a(6),u=a(0),m=a.n(u),h=a(11),d=a(14),g=a(23),p=a(7),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={focused:!1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.handleOnClick,n=t.monster,o=t.selected,s="monster-".concat(n.id),l="ghoul-selector ghoul-animation is-hidden ".concat(o&&"ghoul-selected");return m.a.createElement("div",{className:"".concat(l," ").concat(this.state.focused&&"ghoul-focused"),onClick:a},m.a.createElement("div",{className:"ghoul-checkbox"},m.a.createElement("input",{onFocus:function(){e.setState({focused:!0})},onBlur:function(){e.setState({focused:!1})},type:"checkbox",className:"ghoul-checkbox-input",name:s,id:s,onChange:a}),m.a.createElement("div",{className:"ghoul-image",style:{backgroundImage:"url(".concat(n.image,")")}})),m.a.createElement("label",{htmlFor:s,className:"ghoul-name"},n.name))}}]),t}(u.Component);f.defaultProps={selected:!1};var b=f,E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).getEmojiText=function(){var e=a.props.spookyScary,t=m.a.createElement(g.a,{id:"emoji"});return m.a.createElement("span",{role:"img",className:"ghouls-emoji",onClick:e,"aria-label":t},"\ud83e\udddf")},a.getNameText=function(){return m.a.createElement(g.a,{id:"theLab"})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.spookyScary;return m.a.createElement(m.a.Fragment,null,m.a.createElement("footer",{className:"ghouls-footer"},m.a.createElement("p",null,m.a.createElement(g.a,{id:"footerDescription",values:{emoji:this.getEmojiText(),link:m.a.createElement("a",{href:"https://www.ryandudek.com",target:"new",className:"ghouls-footer-link"},this.getNameText())}})),m.a.createElement("button",{type:"button",className:"ghouls-button ghouls-secret-trigger",onClick:e},m.a.createElement(g.a,{id:"spookySecret"}))),m.a.createElement("div",{className:"ghouls-castle-bg"}))}}]),t}(u.Component),v=Object(p.c)(E),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).getSwapiText=function(){return m.a.createElement(g.a,{id:"swapi"})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.logoLink;return m.a.createElement("header",{className:"ghouls-header-container"},m.a.createElement("div",{className:"ghouls-header"},m.a.createElement("div",{className:"ghouls-content"},m.a.createElement("h1",{className:"ghouls-title ghouls-accessible-text"},m.a.createElement(g.a,{id:"appTitle"})),m.a.createElement(h.a,{to:e,className:"ghouls-link"},m.a.createElement("img",{src:"/assets/img/tombstone.svg",className:"ghouls-logo",alt:"","aria-hidden":"true"})),m.a.createElement("p",{className:"ghouls-description","aria-hidden":"true"},m.a.createElement(g.a,{id:"appHeader"})))))}}]),t}(u.Component),k=Object(p.c)(y),j=a(16),O=a(15),N=function(e,t){return e?t?e.setAttribute("inert",""):e.removeAttribute("inert"):null},w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).handleEscape=a.handleEscape.bind(Object(O.a)(a)),a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"handleEscape",value:function(e){27===e.keyCode&&this.props.handleClose()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleEscape,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleEscape,!1)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.handleClose,n=e.id,o=e.inert;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{role:"button",className:"ghouls-modal-bg","aria-hidden":"true","aria-label":m.a.createElement(g.a,{id:"closeModal"}),onClick:a}),m.a.createElement("aside",{className:"ghouls-modal",ref:function(e){return N(e,o)},id:n},m.a.createElement("button",{className:"ghouls-modal-close",onClick:a},m.a.createElement("span",{className:"ghouls-accessible-text"},m.a.createElement(g.a,{id:"closeModal"}))),t))}}]),t}(u.Component);w.defaultProps={children:null,id:"",inert:!1};var x=Object(p.c)(w),M=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleClose,a=e.handleLogin,n=e.inert;return m.a.createElement(x,{handleClose:t,inert:n,id:"ghouls-login-modal"},m.a.createElement("h1",{className:"ghouls-modal-heading"},m.a.createElement(g.a,{id:"loginTitle"})),m.a.createElement("form",null,m.a.createElement("div",{className:"ghouls-input-container"},m.a.createElement("label",{htmlFor:"ghouls-vote-login",className:"ghouls-label"},m.a.createElement(g.a,{id:"loginInput"})),m.a.createElement("input",{type:"email",id:"ghouls-vote-login",name:"ghouls-vote-login",className:"ghouls-input"})),m.a.createElement("div",{className:"ghouls-button-row"},m.a.createElement("button",{className:"ghouls-button",type:"button",onClick:a},m.a.createElement(g.a,{id:"loginAction"})))))}}]),t}(u.Component);M.defaultProps={inert:!1};var C=Object(p.c)(M),V=function(){var e=Math.floor(666),t=Math.ceil(99468);return Math.floor(Math.random()*(e-t+1))+t},B=[{id:1,image:"/assets/img/frankenstein.jpg",name:"Frankenstein's Monster",votes:V()},{id:2,image:"/assets/img/bride-frankenstein.jpg",name:"Bride of Frankenstein",votes:V()},{id:3,image:"/assets/img/chucky.jpg",name:"Charles Lee Ray",votes:V()},{id:4,image:"/assets/img/freddy.jpg",name:"Freddy Krueger",votes:V()},{id:5,image:"/assets/img/thing.jpg",name:"The Thing",votes:V()},{id:6,image:"/assets/img/pennywise.jpg",name:"Pennywise",votes:V()},{id:7,image:"/assets/img/dracula.jpg",name:"Dracula",votes:V()},{id:8,image:"/assets/img/creature.jpg",name:"Creature from the Black Lagoon",votes:V()},{id:9,image:"/assets/img/wolfman.jpg",name:"Wolfman",votes:V()},{id:10,image:"/assets/img/blob.jpg",name:"The Blob",votes:V()},{id:11,image:"/assets/img/predator.jpg",name:"Predator",votes:V()},{id:12,image:"/assets/img/pale-man.jpg",name:"The Pale Man",votes:V()},{id:13,image:"/assets/img/xenomorph.jpg",name:"Xenomorph",votes:V()}],S=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleOnClick,a=e.monster,n=e.selected,o="monster-".concat(a.id),s="ghoul-selector ghoul-animation is-hidden ".concat(n?"ghoul-selected":"");return m.a.createElement("div",{className:s,onClick:t},m.a.createElement("div",{className:"ghoul-checkbox"},m.a.createElement("div",{className:"ghoul-checkbox-input ghoul-checkbox-no-hover",id:o,onChange:t}),m.a.createElement("div",{className:"ghoul-image",style:{backgroundImage:"url(".concat(a.image,")")}})),m.a.createElement("p",{className:"ghoul-name"},a.name))}}]),t}(u.Component);S.defaultProps={selected:!1};var T=S,L=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleClose,a=e.inert;return m.a.createElement(x,{handleClose:t,inert:a,id:"ghouls-login-modal"},m.a.createElement("h1",{className:"ghouls-modal-heading"},m.a.createElement(g.a,{id:"spookyScary"})),m.a.createElement("div",{style:{height:"315px"}},m.a.createElement("iframe",{title:"Werewolf Bar Mitz Vah music video",width:"560",height:"315",src:"https://www.youtube.com/embed/A6V2oCX3Hn4",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))}}]),t}(u.Component);L.defaultProps={inert:!1};var F=Object(p.c)(L),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).selectNominee=function(e){var t=a.state,n=t.selections,o=t.count;n.indexOf(e)>=0?a.setState({count:o-1,selections:n.filter((function(t){return t!==e}))}):o>=3||a.setState({count:o+1,selections:[].concat(Object(d.a)(n),[e])})},a.renderNominees=function(){var e=a.props.keyboard,t=a.state.selections;return m.a.createElement("ul",{className:"ghouls-nominee-list"},B.map((function(n,o){var s=n.id;return e?m.a.createElement(b,{monster:n,key:"monster-".concat(s),selected:t.indexOf(s)>=0,handleOnClick:function(){return a.selectNominee(s)}}):m.a.createElement(T,{monster:n,key:"monster-".concat(s),selected:t.indexOf(s)>=0,handleOnClick:function(){return a.selectNominee(s)}})})))},a.getButtonText=function(){return a.state.isAuthenticated?m.a.createElement(g.a,{id:"submitVotes"}):m.a.createElement(g.a,{id:"logIn"})},a.toggleLoginModal=function(){var e=a.state.loginModalVisible;a.setState({loginModalVisible:!e})},a.handleLogin=function(){var e=a.state.isAuthenticated;a.setState({isAuthenticated:!e,loginModalVisible:!1})},a.renderButton=function(){return a.state.isAuthenticated?m.a.createElement(h.a,{className:"ghouls-button",to:"/results"},a.getButtonText()):m.a.createElement("button",{type:"button",className:"ghouls-button",onClick:a.toggleLoginModal},a.getButtonText())},a.renderModal=function(){var e=a.state,t=e.errorModalVisible,n=e.werewolfBarMitzVah;if(!t)return n?m.a.createElement(F,{handleClose:a.werewolfBarMitzVah}):m.a.createElement(C,{handleClose:a.toggleLoginModal,handleLogin:a.handleLogin});console.log("there is an error")},a.werewolfBarMitzVah=function(){var e=a.state.werewolfBarMitzVah;a.setState({werewolfBarMitzVah:!e})},a.state={count:0,isAuthenticated:!1,selections:[],loginModalVisible:!1,errorModalVisible:!1,werewolfBarMitzVah:!1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){for(var e=document.querySelectorAll(".ghoul-animation.is-hidden"),t=function(t){setTimeout((function(){e[t].classList.remove("is-hidden"),e[t].classList.add("is-shown")}),150*t+1)},a=0;a<e.length;a++)t(a)}},{key:"render",value:function(){var e=this.state,t=e.errorModalVisible,a=e.loginModalVisible,n=e.werewolfBarMitzVah,o=this.props,s=o.keyboard,l=o.inert,r=o.location,i=o.styles,c=o.next,u=r.search&&r.search.substr(1,14),h=t||a||n,d=!!l&&h;return m.a.createElement(m.a.Fragment,null,m.a.createElement(j.Helmet,{defer:!1},m.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/".concat(i,".css")}),"reduced-motion"===u&&m.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/ghouls--reduced-motion.css"}),l&&m.a.createElement("script",{src:"/inert-polyfill.min.js"})),m.a.createElement("main",{ref:function(e){return N(e,d)},className:"ghouls-main",id:"ghouls-main"},m.a.createElement(k,{logoLink:c}),m.a.createElement("section",{className:"ghouls-content ghouls-body-content"},m.a.createElement("header",{className:"ghouls-section-header"},m.a.createElement("h2",{className:"ghouls-heading ghouls-section-heading"},m.a.createElement(g.a,{id:"homeTitle"})),this.renderButton()),m.a.createElement("div",{className:"ghouls-section-header"},m.a.createElement("p",{className:"ghouls-section-description"},m.a.createElement(g.a,{id:"homeDescription",values:{nominees:m.a.createElement("strong",null,m.a.createElement(g.a,{id:"homeDescriptionNomineed"}))}}))),m.a.createElement("div",{className:"ghouls-section-header ghouls-selections"}),m.a.createElement("h3",{className:"ghouls-heading ghouls-accessible-text"},m.a.createElement(g.a,{id:"homeNominees"})),this.renderNominees(),s&&m.a.createElement("div",{className:"ghouls-button-row"},this.renderButton())),m.a.createElement(v,{spookyScary:this.werewolfBarMitzVah})),h&&this.renderModal())}}]),t}(u.Component);z.defaultProps={inert:!1,keyboard:!1};var A=Object(p.c)(z),D=a(9),H=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.totalVotes;return m.a.createElement("li",{className:"ghouls-results-item  ghoul-animation is-hidden"},m.a.createElement("div",{className:"ghouls-results-img-container"},m.a.createElement("img",{src:t.image,className:"ghouls-result-img",alt:""})),m.a.createElement("p",{className:"ghouls-result-name"},t.name,m.a.createElement("span",{className:"ghouls-result-votes"},m.a.createElement(g.a,{id:"voteCount",values:{count:m.a.createElement(D.a,{value:t.votes}),total:m.a.createElement(D.a,{value:a})}}))))}}]),t}(u.Component),I=Object(p.c)(H),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).sortedResults=function(){return B.sort((function(e,t){return t.votes-e.votes}))},a.renderResults=function(){var e=a.sortedResults(),t=e.reduce((function(e,t){return e+t.votes}),0);return m.a.createElement("ol",{className:"ghouls-results-list"},e.map((function(e){return m.a.createElement(I,{data:e,totalVotes:t,key:"vote-tally-".concat(e.id)})})))},a.werewolfBarMitzVah=function(){var e=a.state.werewolfBarMitzVah;a.setState({werewolfBarMitzVah:!e})},a.state={werewolfBarMitzVah:!1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){for(var e=document.querySelectorAll(".ghoul-animation.is-hidden"),t=function(t){setTimeout((function(){e[t].classList.remove("is-hidden"),e[t].classList.add("is-shown")}),150*t+1)},a=0;a<e.length;a++)t(a)}},{key:"render",value:function(){var e=this.props,t=e.location,a=e.styles,n=e.next,o=t.search&&t.search.substr(1,14);return m.a.createElement(m.a.Fragment,null,m.a.createElement("main",null,m.a.createElement(j.Helmet,{defer:!1},m.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/".concat(a,".css")}),"reduced-motion"===o&&m.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/ghouls--reduced-motion.css"})),m.a.createElement(k,{logoLink:n}),m.a.createElement("section",{className:"ghouls-content"},m.a.createElement("header",{className:"ghouls-section-header"},m.a.createElement("h2",{className:"ghouls-heading ghouls-section-heading"},m.a.createElement(g.a,{id:"resultsTitle"}))),this.renderResults()),m.a.createElement(v,{spookyScary:this.werewolfBarMitzVah})))}}]),t}(u.Component),R=Object(p.c)(P),G=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"ghouls-app"},m.a.createElement(h.b,null,m.a.createElement(A,{exact:!0,path:"/",next:"/home",styles:"default"}),m.a.createElement(A,{path:"/home",next:"/contrast",styles:"default"}),m.a.createElement(A,{path:"/contrast",next:"/keyboard",styles:"contrast"}),m.a.createElement(A,{path:"/keyboard",next:"/inert",styles:"keyboard",keyboard:!0}),m.a.createElement(A,{path:"/inert",next:"/dark",styles:"keyboard",keyboard:!0,inert:!0}),m.a.createElement(A,{path:"/dark",next:"/high-contrast",styles:"dark",keyboard:!0,inert:!0}),m.a.createElement(A,{path:"/high-contrast",next:"/high-contrast-light",styles:"hc-dark",keyboard:!0,inert:!0}),m.a.createElement(A,{path:"/high-contrast-light",next:"/users",styles:"hc-light",keyboard:!0,inert:!0}),m.a.createElement(A,{path:"/users",next:"/results",styles:"users",keyboard:!0,inert:!0}),m.a.createElement(R,{path:"/results",next:"/users",styles:"users",keyboard:!0,inert:!0})))}}]),t}(u.Component),J=a(27),W=a.n(J),q=document.getElementById("ghouls-goblins-hof");q&&W.a.render(m.a.createElement(o.a,{locale:"en",messages:n},m.a.createElement(G,null)),q)}},[[33,1,2]]]);
//# sourceMappingURL=main.c6978c9e.chunk.js.map