(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{29:function(e,t,a){},59:function(e,t,a){e.exports=a(99)},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),i=a(44),o=a(45),s=a(57),m=a(56),u=(a(29),a(35)),p=(a(64),a(65),a(66),a(67),a(11)),d=a.n(p);function h(e){var t=e.questions;return r.a.createElement("div",{className:"questions"},t.map((function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Q",e.num,"- ",e.qName),r.a.createElement("p",null,e.content),r.a.createElement("hr",null))})))}var f=[[{week:2,qName:"Print String",content:"Write a Python program to print the following string in a specific formatbhukjkjknjknm"},{week:2,qName:"Print",content:" Write a Python program to display the current date and time"}],[{week:1,qName:"Print String",content:"Write a Python program to print the following string in a specific formatbhukjkjknjknm"},{week:1,qName:"Print",content:" Write a Python program to display the current date and time"}]],E=[{qName:"Print String",content:"Write a Python program to print the following string in a specific formatbhukjkjknjknm"},{qName:"Print",content:" Write a Python program to display the current date and time"}],g=a(46),b=a.n(g);a(84),a(85);try{p.initializeApp({apiKey:"AIzaSyBQLxaTvjqJKTLeNEae1J2ZeufVUpQfnLM",authDomain:"cfp-code-submitter.firebaseapp.com",databaseURL:"https://cfp-code-submitter.firebaseio.com",projectId:"cfp-code-submitter",storageBucket:"cfp-code-submitter.appspot.com",messagingSenderId:"483775167429",appId:"1:483775167429:web:6c0f89494372bc871829ac",measurementId:"G-L6BZEQ6ZJ9"}),p.analytics()}catch(O){}var v=p.firestore();function y(e){var t=e.name,a=Object(n.useState)('def main():\n  pass\nif __name__ == "__main__":\n  main()'),l=Object(u.a)(a,2),c=l[0],i=l[1],o=Object(n.useState)(E[0].qName),s=Object(u.a)(o,2),m=s[0],p=s[1];return r.a.createElement("div",null,r.a.createElement(h,{questions:E,className:"currentQs"}),r.a.createElement("form",{className:"codeSubmission"},r.a.createElement("p",null,"Select the problem"),E.map((function(e){return r.a.createElement("div",{onChange:function(e){console.log(e.target.value,t,c),p(e.target.value)}},r.a.createElement("input",{type:"radio",value:e.qName,name:"problem"}),r.a.createElement("label",null,e.qName),r.a.createElement("br",null))})),r.a.createElement(b.a,{className:"theEditor",placeholder:"Insert your Python code",mode:"python",theme:"monokai",name:"blah2",onChange:function(e){return i(e)},fontSize:20,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:c,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2}}),r.a.createElement("button",{type:"button",className:"send-button",onClick:function(){console.log("I am clicked"),v.collection(t).doc(m).set({code:c}).then((function(){alert("Code Sent successfully")})).catch((function(e){alert("Error sending, please contact Hatem")}))}},"Send Code")))}var k=a(47),I=a.n(k),S=a(102),N=a(103);try{d.a.initializeApp({apiKey:"AIzaSyAW7-NGHjYyEOUWZL9eIvSp-glELUXuq0E",authDomain:"inclass-qs.firebaseapp.com",databaseURL:"https://inclass-qs.firebaseio.com",projectId:"inclass-qs",storageBucket:"inclass-qs.appspot.com",messagingSenderId:"76230869433",appId:"1:76230869433:web:de34cca5ec6ecc92457668",measurementId:"G-151K89PMKH"})}catch(O){}function P(e){var t=e.name,a=e.signedIn;return r.a.createElement(S.a,null,r.a.createElement(S.a.Brand,null,"Code for Palestine Online Submitter"),r.a.createElement(S.a.Toggle,null),r.a.createElement(N.a.Link,{href:"/main"},"Current Week's Problems"),r.a.createElement(N.a.Link,{href:"/pastproblems"},"Past Problems"),r.a.createElement(S.a.Collapse,{className:"justify-content-end"},r.a.createElement(S.a.Text,null,a?r.a.createElement("a",null,"signed in as ",t):r.a.createElement("a",null,"You are not signed in"),a?r.a.createElement("a",{className:"singout-button",onClick:function(){return d.a.auth().signOut()}},"Sign out"):null)))}a(96);var j=a(54),q=a(6),A=a(101);function w(){return r.a.createElement("div",null,f.map((function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Week ",e[0].week),r.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Problem"),r.a.createElement("th",null,"Details"))),e.map((function(e,t){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.qName),r.a.createElement("td",null,e.content)))}))))})))}try{d.a.initializeApp({apiKey:"AIzaSyBQLxaTvjqJKTLeNEae1J2ZeufVUpQfnLM",authDomain:"cfp-code-submitter.firebaseapp.com",databaseURL:"https://cfp-code-submitter.firebaseio.com",projectId:"cfp-code-submitter",storageBucket:"cfp-code-submitter.appspot.com",messagingSenderId:"483775167429",appId:"1:483775167429:web:6c0f89494372bc871829ac",measurementId:"G-L6BZEQ6ZJ9"}),d.a.analytics()}catch(O){}var L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInOptions:[d.a.auth.GoogleAuthProvider.PROVIDER_ID,d.a.auth.GithubAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=d.a.auth().onAuthStateChanged((function(t){return e.setState({isSignedIn:!!t})}))}},{key:"componentWillUnmount",value:function(){this.unregisterAuthObserver()}},{key:"render",value:function(){return this.state.isSignedIn?r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement("div",null,r.a.createElement(P,{name:d.a.auth().currentUser.displayName,signedIn:!0}),r.a.createElement(q.c,null,r.a.createElement(q.a,{path:"/main"},r.a.createElement(y,{name:d.a.auth().currentUser.displayName})),r.a.createElement(q.a,{path:"/pastproblems"},r.a.createElement(w,null)),r.a.createElement(q.a,{path:"/"},r.a.createElement(y,{name:d.a.auth().currentUser.displayName})))))):r.a.createElement("div",null,r.a.createElement(P,{name:"hatem",signedIn:!1}),r.a.createElement("h1",{className:"welcome-msg"},"Welcome to All Code for Palestine Students, TAs, and Instructors"),r.a.createElement("p",{className:"signin-msg"},"Please sign-in:"),r.a.createElement(I.a,{uiConfig:this.uiConfig,firebaseAuth:d.a.auth()}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.c951af99.chunk.js.map