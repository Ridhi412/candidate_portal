(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[11],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s}));var a=n(23),r=n.n(a);n(82);r.a.initializeApp({apiKey:"AIzaSyCnB6bVU3l1o6NSim96hYMqVYQXT8p-1ek",authDomain:"stet-d84bf.firebaseapp.com",databaseURL:"https://stet-d84bf.firebaseio.com",projectId:"stet-d84bf",storageBucket:"stet-d84bf.appspot.com",messagingSenderId:"851022538939",appId:"1:851022538939:web:6314530885f6b6dadb619e",measurementId:"G-9SNP6LVLN7"}),r.a.firestore().settings({cacheSizeBytes:r.a.firestore.CACHE_SIZE_UNLIMITED}),r.a.firestore().enablePersistence().then(e=>{console.log("offline Mode Enabale")}).catch((function(e){("failed-precondition"===e.code||"unimplemented"===e.code)&&console.log(e)}));const c=r.a.firestore(),o=r.a.auth(),s=r.a.storage();t.c=r.a},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));const a="INIT_MENU",r="INIT_MENU_SUCCESS",c="CHANGE_ACTIVE_MENU_FROM_LOCATION",o="CHANGE_ACTIVE_MENU_FROM_LOCATION_SUCCESS"},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return l})),n.d(t,"i",(function(){return d}));const a="vertical",r="topnav",c="fluid",o="boxed",s="default",u="dark",i="fixed",l="condensed",d="scrollable"},25:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"i",(function(){return u})),n.d(t,"h",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var a=n(8);const r=(e,t)=>({type:a.d,payload:{username:e,password:t}}),c=e=>({type:a.f,payload:e}),o=e=>({type:a.e,payload:e}),s=(e,t,n)=>({type:a.h,payload:{fullname:e,email:t,password:n}}),u=e=>({type:a.j,payload:e}),i=e=>({type:a.i,payload:e}),l=e=>({type:a.g,payload:{history:e}}),d=e=>({type:a.c,payload:e}),p=e=>({type:a.b,payload:e})},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));var a=n(2),r=n.n(a),c=n(42),o=(n(65),n(89)),s=n(10);s.b.settings({cacheSizeBytes:s.c.firestore.CACHE_SIZE_UNLIMITED});const u=()=>{const e=i();return console.log(e),!(!e||null===e)&&(console.log("here true"),!0)},i=()=>{new o.a;var e=null;if(console.log("username",localStorage.getItem("username")),null!==localStorage.getItem("username")&&null!==localStorage.getItem("uid")){var t=localStorage.getItem("username");e={uid:localStorage.getItem("uid"),username:t,password:"test",firstName:"Test",lastName:"User",role:"Admin"}}else e=null;return e?"object"==typeof e?e:JSON.parse(e):null},l=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("sendData",t,n),e.prev=1,e.next=4,s.c.auth().signInWithEmailAndPassword(t,n);case 4:console.log(s.c.auth().currentUser.uid),a=s.b.collection("users").doc(s.c.auth().currentUser.uid),console.log("Name",a),localStorage.setItem("username",s.c.auth().currentUser.email),localStorage.setItem("uid",s.c.auth().currentUser.uid),localStorage.setItem("Name",a),a.get().then((function(e){e.exists?(console.log("Document data:",e.data()),localStorage.setItem("Name",e.data().fname)):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)})),setTimeout(()=>{window.location.reload(!1)},2e3),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),alert(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c,o){var u,i,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,c),e.prev=1,e.next=4,s.c.auth().createUserWithEmailAndPassword(t,c);case 4:return u=e.sent,console.log(u),i=s.b.collection("users").doc(s.c.auth().currentUser.uid),e.next=9,i.set({fname:a,email:t,phone:n,applicationNumber:o,createdAt:Date.now()});case 9:return l=s.c.firestore.FieldValue.increment(1),d=s.b.collection("Global_Variables").doc("currentApplicationNumber"),e.next=13,d.update({current:l});case 13:alert("user created successfully"),localStorage.setItem("username",s.c.auth().currentUser.email),localStorage.setItem("uid",s.c.auth().currentUser.uid),localStorage.setItem("Name",a),window.location.reload(),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(1),console.log("here"),console.log(e.t0),alert(e.t0.message);case 25:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t,n,a,r,c){return e.apply(this,arguments)}}()},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return i}));var a=n(9);const r=e=>({type:a.a,payload:e}),c=e=>({type:a.b,payload:e}),o=e=>({type:a.c,payload:e}),s=e=>({type:a.d,payload:e}),u=()=>({type:a.f,payload:null}),i=()=>({type:a.e,payload:null})},39:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var a=n(19);const r=()=>({type:a.c,payload:{}}),c=e=>({type:a.d,payload:{menuItems:e}}),o=()=>({type:a.a,payload:{}}),s=e=>({type:a.b,payload:{activatedMenuItemIds:e}})},55:function(e,t,n){e.exports=n(85)},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"h",(function(){return o})),n.d(t,"j",(function(){return s})),n.d(t,"i",(function(){return u})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p}));const a="LOGIN_USER",r="LOGIN_USER_SUCCESS",c="LOGIN_USER_FAILED",o="REGISTER_USER",s="REGISTER_USER_SUCCESS",u="REGISTER_USER_FAILED",i="LOGOUT_USER",l="FORGET_PASSWORD",d="FORGET_PASSWORD_SUCCESS",p="FORGET_PASSWORD_FAILED"},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),o=n.n(c),s=n(35),u=n(32),i=n(12),l=n(33),d=n(26),p=n(22);const b=r.a.lazy(()=>n.e(40).then(n.bind(null,638))),m=r.a.lazy(()=>n.e(33).then(n.bind(null,639))),f=r.a.lazy(()=>n.e(32).then(n.bind(null,640)));var h=e=>{const t=class extends a.Component{constructor(...e){super(...e),this.getLayout=()=>{if(!Object(d.b)())return b;let e=m;switch(this.props.layout.layoutType){case p.a:e=f;break;default:e=m}return e}}render(){const t=this.getLayout();return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(t,this.props,r.a.createElement(e,this.props)))}};return Object(l.b)(e=>({layout:e.Layout}),null)(t)},O=n(53),y=n(91),j=n(92),w=n(93),g=n(10);const v=r.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(30)]).then(n.bind(null,641))),x=r.a.lazy(()=>n.e(17).then(n.bind(null,643))),I=r.a.lazy(()=>n.e(39).then(n.bind(null,644))),S=r.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(31)]).then(n.bind(null,645))),k=r.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(35)]).then(n.bind(null,646))),E=r.a.lazy(()=>n.e(25).then(n.bind(null,647))),N=r.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,661))),A=r.a.lazy(()=>Promise.all([n.e(6),n.e(34)]).then(n.bind(null,648))),R=r.a.lazy(()=>n.e(26).then(n.bind(null,649))),T=r.a.lazy(()=>n.e(19).then(n.bind(null,650))),C=r.a.lazy(()=>n.e(18).then(n.bind(null,651))),U=r.a.lazy(()=>Promise.all([n.e(5),n.e(22)]).then(n.bind(null,652))),_=r.a.lazy(()=>Promise.all([n.e(5),n.e(21)]).then(n.bind(null,653))),J=r.a.lazy(()=>n.e(20).then(n.bind(null,654))),W=r.a.lazy(()=>n.e(28).then(n.bind(null,655))),G=r.a.lazy(()=>Promise.all([n.e(6),n.e(37)]).then(n.bind(null,656))),z=r.a.lazy(()=>n.e(41).then(n.t.bind(null,657,7))),L=r.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(23)]).then(n.bind(null,660))),D=r.a.lazy(()=>Promise.all([n.e(14),n.e(38)]).then(n.bind(null,658))),V=r.a.lazy(()=>n.e(27).then(n.bind(null,659))),P=r.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,662))),B=e=>{let t=e.component,n=e.roles,a=Object(O.a)(e,["component","roles"]);return r.a.createElement(i.b,Object.assign({},a,{render:e=>{if(!Object(d.b)())return r.a.createElement(i.a,{to:{pathname:"/account/login",state:{from:e.location}}});const a=Object(d.a)();return n&&-1===n.indexOf(a.role)?r.a.createElement(i.a,{to:{pathname:"/"}}):r.a.createElement(t,e)}}))},F={path:"/",exact:!0,component:()=>r.a.createElement(i.a,{to:"/dashboard"}),route:B},M={path:"/dashboard",name:"Dashboard",icon:y.a,header:"Navigation",badge:{variant:"success",text:"1"},component:N,roles:["Admin"],route:B},H=[{path:"/candidate/ApplicationForm",name:"Application Form",header:"",icon:j.a,component:A,route:B,roles:["Admin"]},{path:"/candidate/UploadDocuments",name:"Upload Documents",header:"",icon:j.a,component:x,route:B,roles:["Admin"]},{path:"/candidate/payment",name:"Payment",icon:j.a,component:R,route:B,roles:["Admin"]},{path:"/candidate/AppFormView",name:"Application View",icon:j.a,component:T,route:B,roles:["Admin"]},{path:"/candidate/AdmitCard",name:"Admit Card",icon:j.a,component:C,route:B,roles:["Admin"]},{path:"/candidate/QuestionPaper",name:"Question Paper",icon:j.a,component:U,route:B,roles:["Admin"]},{path:"/candidate/KeyAnswers",name:"Key Answers",icon:j.a,component:_,route:B,roles:["Admin"]},{path:"/candidate/Result",name:"Result",icon:j.a,component:J,route:B,roles:["Admin"]},{path:"/candidate/Notification",name:"Notification",icon:j.a,component:W,route:B,roles:["Admin"]},{path:"/candidate/ReportIssue",name:"Report Issue",icon:j.a,component:G,route:B,roles:["Admin"]},{path:"/candidate/CandidateLogout",name:"Logout",icon:j.a,component:z,route:B,roles:["Admin"]}],Y={path:"/ui",name:"UI Elements",header:"Components",icon:w.a,children:[{path:"/ui/bscomponents",name:"Bootstrap UI",component:L,route:B,roles:["Admin"]},{path:"/ui/icons",name:"Icons",children:[{path:"/ui/icons/feather",name:"Feather Icons",component:D,route:B,roles:["Admin"]},{path:"/ui/icons/unicons",name:"Unicons Icons",component:V,route:B,roles:["Admin"]}]},{path:"/ui/widgets",name:"Widgets",component:P,route:B,roles:["Admin"]}]},X={path:"/account",name:"Auth",children:[{path:"/account/login",name:"Login",component:v,route:i.b},{path:"/account/upload",name:"Login",component:Image,route:i.b},{path:"/account/logout",name:"Logout",component:I,route:i.b},{path:"/account/register",name:"Register",component:S,route:i.b},{path:"/account/confirm",name:"Confirm",component:E,route:i.b},{path:"/account/forget-password",name:"Forget Password",component:k,route:i.b}]},Q=e=>{let t=[];return(e=e||[]).forEach(e=>{t.push(e),"undefined"!==typeof e.children&&(t=[...t,...Q(e.children)])}),t},Z=[F,M,...H,Y,X],K=[M,...H,Y],q=Q(Z);var $=()=>{const e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),d=l[0],p=(l[1],Object(a.useState)(!1)),b=Object(s.a)(p,2),m=b[0],f=b[1];return Object(a.useEffect)(()=>{g.b.collection("Global_Variables").doc("keyAnswersAvailable").get().then((function(e){e.exists?c(e.data().isKeyAnswerAvailable):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)})),g.b.collection("Global_Variables").doc("admitCardAvailable").get().then((function(e){e.exists?(console.log("Document data:",e.data().isKeyAnswerAvailable),d(e.data().isAdmitCardAvailable)):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)})),g.b.collection("Global_Variables").doc("keyAnswersAvailable").get().then((function(e){e.exists?(console.log("Document data:",e.data().isResultAvailable),f(e.data().isResultAvailable)):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))},[]),r.a.createElement(u.a,null,r.a.createElement(i.d,null,q.map((e,t)=>"Key Answers"===e.name&&!1===n||"Admit Card"===e.name&&!1===n||"Result"===e.name&&!1===m?!e.children&&r.a.createElement(e.route,{key:t,path:e.path,roles:e.roles,exact:e.exact,component:h(e=>r.a.createElement("h1",null,"Opps! No Data Found "))}):!e.children&&r.a.createElement(e.route,{key:t,path:e.path,roles:e.roles,exact:e.exact,component:h(t=>r.a.createElement(e.component,t))}))))};n(84);!function(){let e=[{id:1,username:"test",password:"test",firstName:"Test",lastName:"User",role:"Admin"}],t=window.fetch;window.fetch=function(n,a){return new Promise((r,c)=>{setTimeout(()=>{if(n.endsWith("/users/authenticate")&&"POST"===a.method){let t=JSON.parse(a.body),n=e.filter(e=>e.username===t.username&&e.password===t.password);if(n.length){let e=n[0],t={id:e.id,username:e.username,firstName:e.firstName,lastName:e.lastName,role:"Admin",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RlcnRoZW1lIiwiaWF0IjoxNTU1NjgyNTc1LCJleHAiOjE1ODcyMTg1NzUsImF1ZCI6ImNvZGVydGhlbWVzLmNvbSIsInN1YiI6InRlc3QiLCJmaXJzdG5hbWUiOiJIeXBlciIsImxhc3RuYW1lIjoiVGVzdCIsIkVtYWlsIjoidGVzdEBoeXBlci5jb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4ifQ.8qHJDbs5nw4FBTr3F8Xc1NJYOMSJmGnRma7pji0YwB4"};r({ok:!0,json:()=>t})}else c("Username or password is incorrect")}else if(n.endsWith("/users/register")&&"POST"===a.method){let t=JSON.parse(a.body),n=t.fullname.split(" "),c=n.firstName,o=n.lastName,s={id:e.length+1,username:c,password:t.password,firstName:c,lastName:o,role:"Admin"};e.push({newUser:s});let u={id:s.id,username:s.username,firstName:s.firstName,lastName:s.lastName,role:s.role,token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RlcnRoZW1lIiwiaWF0IjoxNTU1NjgyNTc1LCJleHAiOjE1ODcyMTg1NzUsImF1ZCI6ImNvZGVydGhlbWVzLmNvbSIsInN1YiI6InRlc3QiLCJmaXJzdG5hbWUiOiJIeXBlciIsImxhc3RuYW1lIjoiVGVzdCIsIkVtYWlsIjoidGVzdEBoeXBlci5jb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4ifQ.8qHJDbs5nw4FBTr3F8Xc1NJYOMSJmGnRma7pji0YwB4"};r({ok:!0,json:()=>u})}else if(n.endsWith("/users/password-reset")&&"POST"===a.method){let t=JSON.parse(a.body);if(e.filter(e=>e.username===t.username).length){let e={message:"We've sent you a link to reset password to your registered email."};r({ok:!0,json:()=>e})}else c("Sorry, we could not find any registered user with entered username")}else n.endsWith("/users")&&"GET"===a.method?a.headers&&"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RlcnRoZW1lIiwiaWF0IjoxNTU1NjgyNTc1LCJleHAiOjE1ODcyMTg1NzUsImF1ZCI6ImNvZGVydGhlbWVzLmNvbSIsInN1YiI6InRlc3QiLCJmaXJzdG5hbWUiOiJIeXBlciIsImxhc3RuYW1lIjoiVGVzdCIsIkVtYWlsIjoidGVzdEBoeXBlci5jb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4ifQ.8qHJDbs5nw4FBTr3F8Xc1NJYOMSJmGnRma7pji0YwB4"===a.headers.Authorization?r({ok:!0,json:()=>e}):c("Unauthorised"):t(n,a).then(e=>r(e))},500)})}}();class ee extends a.Component{render(){return r.a.createElement($,null)}}var te=ee;const ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}var re=n(21),ce=n(52),oe=n(5),se=n(9);const ue={layoutType:p.b,layoutWidth:p.d,leftSideBarTheme:p.f,leftSideBarType:p.h,showRightSidebar:!1};var ie=(e=ue,t)=>{switch(t.type){case se.a:return Object(oe.a)(Object(oe.a)({},e),{},{layoutType:t.payload});case se.b:return Object(oe.a)(Object(oe.a)({},e),{},{layoutWidth:t.payload});case se.c:return Object(oe.a)(Object(oe.a)({},e),{},{leftSideBarTheme:t.payload});case se.d:return Object(oe.a)(Object(oe.a)({},e),{},{leftSideBarType:t.payload});case se.g:return Object(oe.a)(Object(oe.a)({},e),{},{showRightSidebar:!e.showRightSidebar});case se.f:return Object(oe.a)(Object(oe.a)({},e),{},{showRightSidebar:!0});case se.e:return Object(oe.a)(Object(oe.a)({},e),{},{showRightSidebar:!1});default:return e}},le=n(8);const de={user:Object(d.a)(),loading:!1};var pe=(e=de,t)=>{switch(t.type){case le.d:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case le.f:return Object(oe.a)(Object(oe.a)({},e),{},{user:t.payload,loading:!1,error:null});case le.e:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.payload,loading:!1});case le.h:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case le.j:return Object(oe.a)(Object(oe.a)({},e),{},{user:t.payload,loading:!1,error:null});case le.i:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.payload,loading:!1});case le.g:return Object(oe.a)(Object(oe.a)({},e),{},{user:null});case le.a:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case le.c:return Object(oe.a)(Object(oe.a)({},e),{},{passwordResetStatus:t.payload,loading:!1,error:null});case le.b:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.payload,loading:!1});default:return Object(oe.a)({},e)}},be=n(19);var me=(e={},t)=>{switch(t.type){case be.c:return t.payload;case be.d:return Object(oe.a)(Object(oe.a)({},e),t.payload);case be.a:return Object(oe.a)({},e);case be.b:return Object(oe.a)(Object(oe.a)({},e),t.payload);default:return e}},fe=Object(re.c)({Auth:pe,AppMenu:me,Layout:ie}),he=n(2),Oe=n.n(he),ye=n(3),je=n(89);const we=(e,t={})=>fetch(e,t).then(e=>{if(200===!e.status)throw e.json();return e.json()}).then(e=>e).catch(e=>{throw e});var ge=n(25),ve=Oe.a.mark(Ce),xe=Oe.a.mark(Ue),Ie=Oe.a.mark(_e),Se=Oe.a.mark(Je),ke=Oe.a.mark(We),Ee=Oe.a.mark(Ge),Ne=Oe.a.mark(ze),Ae=Oe.a.mark(Le),Re=Oe.a.mark(De);const Te=e=>{let t=new je.a;e?t.set("user",JSON.stringify(e),{path:"/"}):t.remove("user",{path:"/"})};function Ce({payload:{username:e,password:t}}){var n,a,r;return Oe.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n={body:JSON.stringify({username:e,password:t}),method:"POST",headers:{"Content-Type":"application/json"}},c.prev=1,c.next=4,Object(ye.b)(we,"/users/authenticate",n);case 4:return a=c.sent,Te(a),c.next=8,Object(ye.d)(Object(ge.e)(a));case 8:c.next=23;break;case 10:c.prev=10,c.t0=c.catch(1),c.t1=c.t0.status,c.next=500===c.t1?15:401===c.t1?17:19;break;case 15:return r="Internal Server Error",c.abrupt("break",20);case 17:return r="Invalid credentials",c.abrupt("break",20);case 19:r=c.t0;case 20:return c.next=22,Object(ye.d)(Object(ge.d)(r));case 22:Te(null);case 23:case"end":return c.stop()}}),ve,null,[[1,10]])}function Ue({payload:{history:e}}){return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Te(null),t.next=4,Object(ye.b)(()=>{e.push("/account/login")});case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),xe,null,[[0,6]])}function _e({payload:{fullname:e,email:t,password:n}}){var a,r,c;return Oe.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return a={body:JSON.stringify({fullname:e,email:t,password:n}),method:"POST",headers:{"Content-Type":"application/json"}},o.prev=1,o.next=4,Object(ye.b)(we,"/users/register",a);case 4:return r=o.sent,o.next=7,Object(ye.d)(Object(ge.i)(r));case 7:o.next=21;break;case 9:o.prev=9,o.t0=o.catch(1),o.t1=o.t0.status,o.next=500===o.t1?14:401===o.t1?16:18;break;case 14:return c="Internal Server Error",o.abrupt("break",19);case 16:return c="Invalid credentials",o.abrupt("break",19);case 18:c=o.t0;case 19:return o.next=21,Object(ye.d)(Object(ge.h)(c));case 21:case"end":return o.stop()}}),Ie,null,[[1,9]])}function Je({payload:{username:e}}){var t,n,a;return Oe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={body:JSON.stringify({username:e}),method:"POST",headers:{"Content-Type":"application/json"}},r.prev=1,r.next=4,Object(ye.b)(we,"/users/password-reset",t);case 4:return n=r.sent,r.next=7,Object(ye.d)(Object(ge.b)(n.message));case 7:r.next=21;break;case 9:r.prev=9,r.t0=r.catch(1),r.t1=r.t0.status,r.next=500===r.t1?14:401===r.t1?16:18;break;case 14:return a="Internal Server Error",r.abrupt("break",19);case 16:return a="Invalid credentials",r.abrupt("break",19);case 18:a=r.t0;case 19:return r.next=21,Object(ye.d)(Object(ge.a)(a));case 21:case"end":return r.stop()}}),Se,null,[[1,9]])}function We(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(le.d,Ce);case 2:case"end":return e.stop()}}),ke)}function Ge(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(le.g,Ue);case 2:case"end":return e.stop()}}),Ee)}function ze(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(le.h,_e);case 2:case"end":return e.stop()}}),Ne)}function Le(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(le.a,Je);case 2:case"end":return e.stop()}}),Ae)}function De(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.c)(We),Object(ye.c)(Ge),Object(ye.c)(ze),Object(ye.c)(Le)]);case 2:case"end":return e.stop()}}),Re)}var Ve=De,Pe=n(30),Be=Oe.a.mark(ot),Fe=Oe.a.mark(st),Me=Oe.a.mark(ut),He=Oe.a.mark(it),Ye=Oe.a.mark(lt),Xe=Oe.a.mark(dt),Qe=Oe.a.mark(pt),Ze=Oe.a.mark(bt),Ke=Oe.a.mark(mt),qe=Oe.a.mark(ft),$e=Oe.a.mark(ht),et=Oe.a.mark(Ot),tt=Oe.a.mark(yt),nt=Oe.a.mark(jt),at=Oe.a.mark(wt);function rt(e,t){return document.body&&document.body.setAttribute(e,t),!0}function ct(e,t="toggle"){switch(t){case"add":document.body&&document.body.classList.add(e);break;case"remove":document.body&&document.body.classList.remove(e);break;default:document.body&&document.body.classList.toggle(e)}return!0}function ot({payload:e}){return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ye.b)(rt,"data-layout",e);case 3:if(e!==p.b){t.next=8;break}return t.next=6,Object(ye.d)(Object(Pe.c)(p.f));case 6:return t.next=8,Object(ye.d)(Object(Pe.d)(p.h));case 8:if(e!==p.a){t.next=13;break}return t.next=11,Object(ye.d)(Object(Pe.c)(p.f));case 11:return t.next=13,Object(ye.d)(Object(Pe.d)(p.h));case 13:t.next=17;break;case 15:t.prev=15,t.t0=t.catch(0);case 17:case"end":return t.stop()}}),Be,null,[[0,15]])}function st({payload:e}){return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e!==p.c){t.next=8;break}return t.next=4,Object(ye.b)(ct,"left-side-menu-condensed","add");case 4:return t.next=6,Object(ye.b)(ct,"boxed-layout","add");case 6:t.next=12;break;case 8:return t.next=10,Object(ye.b)(ct,"left-side-menu-condensed","remove");case 10:return t.next=12,Object(ye.b)(ct,"boxed-layout","remove");case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),Fe,null,[[0,14]])}function ut({payload:e}){return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e!==p.e){t.next=6;break}return t.next=4,Object(ye.b)(ct,"left-side-menu-dark","add");case 4:t.next=8;break;case 6:return t.next=8,Object(ye.b)(ct,"left-side-menu-dark","remove");case 8:t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),Me,null,[[0,10]])}function it({payload:e}){return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,t.t0=e,t.next=t.t0===p.g?4:t.t0===p.i?7:12;break;case 4:return t.next=6,Object(ye.b)(ct,"left-side-menu-condensed","add");case 6:return t.abrupt("break",17);case 7:return t.next=9,Object(ye.b)(ct,"left-side-menu-condensed","remove");case 9:return t.next=11,Object(ye.b)(ct,"scrollable-layout","add");case 11:return t.abrupt("break",17);case 12:return t.next=14,Object(ye.b)(ct,"left-side-menu-condensed","remove");case 14:return t.next=16,Object(ye.b)(ct,"scrollable-layout","remove");case 16:return t.abrupt("break",17);case 17:t.next=21;break;case 19:t.prev=19,t.t1=t.catch(0);case 21:case"end":return t.stop()}}),He,null,[[0,19]])}function lt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ye.b)(ct,"right-bar-enabled");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),Ye,null,[[0,5]])}function dt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ye.b)(ct,"right-bar-enabled","add");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),Xe,null,[[0,5]])}function pt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ye.b)(ct,"right-bar-enabled","remove");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),Qe,null,[[0,5]])}function bt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(se.a,ot);case 2:case"end":return e.stop()}}),Ze)}function mt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(se.b,st);case 2:case"end":return e.stop()}}),Ke)}function ft(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(se.c,ut);case 2:case"end":return e.stop()}}),qe)}function ht(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(se.d,it);case 2:case"end":return e.stop()}}),$e)}function Ot(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(se.g,lt);case 2:case"end":return e.stop()}}),et)}function yt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(se.f,dt);case 2:case"end":return e.stop()}}),tt)}function jt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(se.e,pt);case 2:case"end":return e.stop()}}),nt)}function wt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.c)(bt),Object(ye.c)(mt),Object(ye.c)(ft),Object(ye.c)(ht),Object(ye.c)(Ot),Object(ye.c)(yt),Object(ye.c)(jt)]);case 2:case"end":return e.stop()}}),at)}var gt=wt,vt=n(51);let xt=1;const It=(e,t)=>{(e=e||[]).forEach(e=>{const n=e.id||xt;xt+=1,e.id=n,e.parentId=e.parentId||t,e.active=!1,"undefined"!==typeof e.children&&It(e.children,n)})};var St=e=>(It(e),e),kt=n(39),Et=Oe.a.mark(Ut),Nt=Oe.a.mark(_t),At=Oe.a.mark(Jt),Rt=Oe.a.mark(Wt),Tt=Oe.a.mark(Gt);const Ct=e=>{var t,n=[],a=Object(vt.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;0===window.location.pathname.indexOf(r.path)&&n.push(r.id),"undefined"!==typeof r.children&&(n=[...n,...Ct(r.children)])}}catch(c){a.e(c)}finally{a.f()}return n};function Ut(){var e;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=St(K),t.next=4,Object(ye.d)(Object(kt.d)(e));case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),Et,null,[[0,6]])}function _t(){var e,t;return Oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=St(K),n.next=4,Object(ye.b)(Ct,e);case 4:return t=n.sent,n.next=7,Object(ye.d)(Object(kt.b)(t));case 7:n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),Nt,null,[[0,9]])}function Jt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(be.c,Ut);case 2:case"end":return e.stop()}}),At)}function Wt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(be.a,_t);case 2:case"end":return e.stop()}}),Rt)}function Gt(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.c)(Jt),Object(ye.c)(Wt)]);case 2:case"end":return e.stop()}}),Tt)}var zt=Gt,Lt=Oe.a.mark(Dt);function Dt(e){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Ve(),gt(),zt()]);case 2:case"end":return e.stop()}}),Lt)}const Vt=Object(ce.a)(),Pt=[Vt];o.a.render(r.a.createElement(l.a,{store:function(e){const t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,n=Object(re.e)(fe,e,t(Object(re.a)(...Pt)));return Vt.run(Dt),n}()},r.a.createElement(te,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("","/service-worker.js");ne?(!function(e,t){fetch(e).then(n=>{const a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):ae(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ae(t,e)})}}()},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return i}));const a="CHANGE_LAYOUT",r="CHANGE_LAYOUT_WIDTH",c="CHANGE_SIDEBAR_THEME",o="CHANGE_SIDEBAR_TYPE",s="TOGGLE_RIGHT_SIDEBAR",u="SHOW_RIGHT_SIDEBAR",i="HIDE_RIGHT_SIDEBAR"}},[[55,12,13]]]);
//# sourceMappingURL=main.d765e20f.chunk.js.map