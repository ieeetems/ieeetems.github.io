(this.webpackJsonpieeetems=this.webpackJsonpieeetems||[]).push([[0],{103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){},123:function(e,a,t){},125:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t(0),i=t.n(n),c=t(11),r=t.n(c),o=(t(103),t(66)),l=(t(104),t.p+"static/media/logo.f509c70b.png"),m=t(89),j=(t(105),t.p+"static/media/learn.f1d202a8.svg"),d=t.p+"static/media/progress.059dbc91.svg",h=t.p+"static/media/lead.fb54f1be.svg",b=t(84),u=t.n(b),x=t(83),O=t.n(x),g=t(163);function p(){localStorage.setItem("isFirstVisitor",!0);var e=Object(n.useState)(1),a=Object(m.a)(e,2),t=a[0],i=a[1],c=1===t?j:2===t?d:h,r=1===t?"LEARN":2===t?"PROGRESS":"LEAD",o={controls:{color:2===t?"#FFFFFF":"#3F3D56",fontSize:"50"},controlLeft:{display:1===t?"none":"block"},controlRight:{display:3===t?"none":"block"},onBoard:{backgroundColor:2===t?"#006C54":"#E3E6DA"},caption:{color:2===t?"#FFFFFF":"#3F3D56"}};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"onBoard",style:o.onBoard,id:"mission",children:[Object(s.jsx)("img",{src:c,alt:"learn",className:"imgOnBoard"}),Object(s.jsx)("h1",{className:"caption",style:o.caption,children:r}),Object(s.jsx)("div",{className:"control-left",style:o.controlLeft,onClick:function(){return i(t-1)},children:Object(s.jsx)(g.a,{children:Object(s.jsx)(O.a,{style:o.controls})})}),Object(s.jsx)("div",{className:"control-right",style:o.controlRight,onClick:function(){return i(t+1)},children:Object(s.jsx)(g.a,{children:Object(s.jsx)(u.a,{style:o.controls})})})]})})}var f=t(167),v=t(184),w=t(28);t(117);var k=function(e){return Object(s.jsxs)(v.a,{maxItems:2,"aria-label":"breadcrumb",className:"navbar",children:[Object(s.jsx)(w.Link,{className:"link",underline:"none",to:"about",spy:!0,smooth:!0,duration:500,children:"About"}),Object(s.jsx)(w.Link,{className:"link",underline:"none",to:"domains",spy:!0,smooth:!0,duration:500,children:"Domains"}),Object(s.jsx)(w.Link,{className:"link",underline:"none",to:"events",spy:!0,smooth:!0,duration:500,children:"Events"}),Object(s.jsx)(w.Link,{className:"link",underline:"none",to:"board",spy:!0,smooth:!0,duration:1e3,children:"Team"}),Object(s.jsx)(w.Link,{className:"link",underline:"none",to:"contact",spy:!0,smooth:!0,duration:1e3,children:"Contact"})]})};t(118);function N(){return Object(s.jsxs)(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:"aboutContainer",id:"about",children:[Object(s.jsx)(f.a,{item:!0,children:Object(s.jsx)(k,{})}),Object(s.jsx)(f.a,{item:!0,children:Object(s.jsx)("img",{src:l,className:"navLogo",alt:"logo"})}),Object(s.jsxs)(f.a,{container:!0,children:[Object(s.jsx)(f.a,{item:!0,xs:1}),Object(s.jsxs)(f.a,{item:!0,className:"bannerContainer",xs:10,children:[Object(s.jsx)("h1",{className:"bannerTitle",children:"BRIDGING DIVERSE PRINCIPLES"}),Object(s.jsxs)("p",{className:"bannerCaption",children:["Encapsulating technology and engineering management principles.",Object(s.jsx)("br",{})," We (IEEE Technology & Engineering Management Society) aim to advance, enhance, and improve essential management and leadership skills of people."]})]}),Object(s.jsx)(f.a,{item:!0,xs:1})]})]})}t(119);var C=t(85);function y(){function e(e,a,t,s){if(a!==t)var n=t-a,i=a,c=t>a?1:-1,r=Math.abs(Math.floor(s/n)),o=document.getElementById(e),l=setInterval((function(){i+=c,o.innerHTML=i+"+",i===t&&clearInterval(l)}),r)}var a=!1;return Object(s.jsx)(C.a,{onEnter:function(){a||(e("eventCount",0,70,3e3),e("megaEventCount",0,7,3e3),e("coreMemberCount",0,100,3e3),a=!0)},bottomOffset:"30%",children:Object(s.jsxs)(f.a,{container:!0,className:"statsContainer",id:"stats",children:[Object(s.jsx)(f.a,{item:!0,xs:1}),Object(s.jsxs)(f.a,{container:!0,item:!0,xs:10,children:[Object(s.jsx)(f.a,{container:!0,item:!0,xs:12,justify:"center",children:Object(s.jsx)("div",{className:"section-heading",children:"The premier resource of essential interpersonal Skills"})}),Object(s.jsxs)(f.a,{container:!0,item:!0,xs:12,justify:"center",children:[Object(s.jsxs)(f.a,{item:!0,xs:12,md:3,className:"statItem",children:[Object(s.jsx)("div",{className:"counter",id:"coreMemberCount",children:"0"}),Object(s.jsx)("div",{className:"sub-heading",children:"Members"}),Object(s.jsx)("div",{className:"content",children:"A community of people from different branches & domains "})]}),Object(s.jsxs)(f.a,{item:!0,xs:12,md:3,className:"statItem",children:[Object(s.jsx)("div",{className:"counter",id:"eventCount",children:"0"}),Object(s.jsx)("div",{className:"sub-heading",children:"Events"}),Object(s.jsx)("div",{className:"content",children:"Classroom and online sessions with multiple outreach programs"})]}),Object(s.jsxs)(f.a,{item:!0,xs:12,md:3,className:"statItem",children:[Object(s.jsx)("div",{className:"counter",id:"megaEventCount",children:"0"}),Object(s.jsx)("div",{className:"sub-heading",children:"Mega Events"}),Object(s.jsx)("div",{className:"content",children:"Includes technical & Non-technical workshops, Value added programs & many more!"})]}),Object(s.jsxs)(f.a,{item:!0,xs:12,md:3,className:"statItem",children:[Object(s.jsx)("div",{className:"counter",children:"Many"}),Object(s.jsx)("div",{className:"sub-heading",children:"Collaborations"}),Object(s.jsx)("div",{className:"content",children:"Experts from tech giants sharing their expertise"})]})]})]}),Object(s.jsx)(f.a,{item:!0,xs:1})]})})}var E=t(185),S=(t(120),t(44)),I=t.n(S),B=[{label:"Blog Writing",className:"contentWriting"},{label:"Social Media Content",className:"contentWriting"},{label:"Digital Posters",className:"creative"},{label:"Video Editing",className:"creative"},{label:"Photography",className:"creative"},{label:"Classroom Sessions",className:"mgmt"},{label:"Online Events",className:"mgmt"},{label:"Workshops",className:"mgmt"},{label:"Collaborations",className:"mgmt"},{label:"Outreach programs",className:"mgmt"},{label:"Projects",className:"tech"},{label:"Tech-blogs",className:"tech"},{label:"Conferences",className:"tech"},{label:"Research Articles",className:"tech"},{label:"Hackathons",className:"tech"},{label:"Value Added Programs",className:"tech"}];function M(){return Object(s.jsxs)(f.a,{container:!0,className:"domainContainer",id:"domains",children:[Object(s.jsx)(f.a,{item:!0,xs:1,md:2}),Object(s.jsxs)(f.a,{container:!0,item:!0,xs:10,md:8,justify:"center",children:[Object(s.jsx)(f.a,{item:!0,className:"section-heading",children:"Inter-domain involvement of our members lays the foundation of IEEE TEMS!"}),Object(s.jsx)(f.a,{container:!0,justify:"space-evenly",item:!0,xs:12,children:B.map((function(e){return Object(s.jsx)(E.a,{label:e.label,className:"domainChip "+e.className},e.label)}))}),Object(s.jsxs)(f.a,{container:!0,item:!0,xs:12,className:"domainLegend",children:[Object(s.jsx)(f.a,{item:!0,xs:12,sm:3,children:Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(I.a,{style:{color:"#94C997"}}),"Content Writing"]})}),Object(s.jsx)(f.a,{item:!0,xs:12,sm:3,children:Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(I.a,{style:{color:"#058065a3"}}),"Creative"]})}),Object(s.jsx)(f.a,{item:!0,xs:12,sm:3,children:Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(I.a,{style:{color:" #006650f3"}}),"Management"]})}),Object(s.jsx)(f.a,{item:!0,xs:12,sm:3,children:Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(I.a,{style:{color:"#023d32"}}),"Tech"]})})]})]}),Object(s.jsx)(f.a,{item:!0,xs:1,md:2})]})}var T=t(168);t(121);function P(e){return Object(s.jsxs)(f.a,{container:!0,className:"boardItem",children:[Object(s.jsx)(f.a,{item:!0,xs:1}),Object(s.jsxs)(f.a,{item:!0,xs:10,children:[Object(s.jsxs)("div",{className:"itemContainer",children:[Object(s.jsx)("div",{className:"overlay",children:Object(s.jsx)("a",{href:e.linkedInProfile,children:Object(s.jsx)(T.a,{className:"linkedInIcon",style:{color:"white"}})})}),Object(s.jsx)("img",{src:e.imageSrc,alt:"nithish",className:"boardImage"})]}),Object(s.jsxs)("div",{className:"itemSubText",children:[Object(s.jsx)("div",{className:"memberName",children:e.name}),Object(s.jsx)("div",{className:"memberDesignation",children:e.designation})]})]}),Object(s.jsx)(f.a,{item:!0,xs:1})]})}var F=t.p+"static/media/nithish.af1b21dd.png",A=t.p+"static/media/harsha.1ea34617.jpg",V=t.p+"static/media/param.54bb97a1.jpg",L=t.p+"static/media/karthik.9913f023.jpg",R=t.p+"static/media/akhil.4e7a1c11.jpg",D=t.p+"static/media/ravi.6e023a65.jpg",W=t.p+"static/media/dhanush.654a8eda.jpg",K=t.p+"static/media/vaibhav.cfb9f111.jpg",H=t.p+"static/media/kuldeep.815da04f.jpg",z=t.p+"static/media/chandraShekar.46cc5ef0.jpg",q=[{designation:"Chairperson",name:"Sai Nithish Mucherla",linkedInProfile:"https://www.linkedin.com/in/sai-nithish-mucherla",imageSrc:F},{designation:"Co-Chairperson",name:"Ravi Kumar",linkedInProfile:"https://www.linkedin.com/in/murapala-ravikumar-434694160",imageSrc:D},{designation:"Secretary",name:"GSSR Akhil",linkedInProfile:"https://www.linkedin.com/in/g-s-s-r-akhil-a400b8152",imageSrc:R},{designation:"Co-Secretary",name:"Karthik Vajja",linkedInProfile:"https://www.linkedin.com/in/karthik-vajja-72295a188",imageSrc:L},{designation:"Program Chair",name:"Kuldeep Sai",linkedInProfile:"https://www.linkedin.com/in/kuldeep-sai-kancharla-47b75018b",imageSrc:H},{designation:"Tech Chair",name:"KRM Parameswar",linkedInProfile:"https://www.linkedin.com/in/parameswar-kanuparthi-268881189",imageSrc:V},{designation:"Publicity Chair",name:"DHS Sumanth",linkedInProfile:"https://www.linkedin.com/in/harsha-sri-sumanth-885700189",imageSrc:A},{designation:"Creative Chair",name:"Dhanush Vishnu",linkedInProfile:"https://www.linkedin.com/in/dhanush-vishnu-36032b152",imageSrc:W},{designation:"Documentation Chair",name:"KVS Vishnu",linkedInProfile:"https://www.linkedin.com/in/vishnu-kvs-69aa25151/",imageSrc:t.p+"static/media/vishnukvs.9b8536f1.jpg"},{designation:"Finance Chair",name:"Singuru Chandra Shekar",linkedInProfile:"https://www.linkedin.com/in/chandra-sekhar-sekhar-ab5966182/",imageSrc:z},{designation:"Logistics Chair",name:"Bejgam Vaibhav",linkedInProfile:"https://www.linkedin.com/in/vaibhavbejgam",imageSrc:K}],G=t.p+"static/media/venugopal.63ead73a.jpg",_=t.p+"static/media/subashini.23ba6718.jpg";function J(){var e=function(){for(var e=[],a=q.length,t=0;t<a;t++)e.push(Object(s.jsx)(f.a,{item:!0,xs:12,sm:t<3?4:3,children:Object(s.jsx)(P,{designation:q[t].designation,name:q[t].name,imageSrc:q[t].imageSrc,linkedInProfile:q[t].linkedInProfile})},t));return e}();return Object(s.jsxs)(f.a,{container:!0,justify:"center",className:"boardContainer",id:"board",children:[Object(s.jsx)(f.a,{item:!0,xs:1}),Object(s.jsxs)(f.a,{container:!0,item:!0,xs:8,justify:"space-evenly",alignItems:"center",children:[Object(s.jsxs)(f.a,{item:!0,xs:12,className:"head",children:[Object(s.jsx)("h1",{children:"TEAM"}),Object(s.jsx)("p",{className:"subhead",children:"Board - 2020"})]}),Object(s.jsx)(f.a,{container:!0,item:!0,xs:12,className:"boardRow",children:e.slice(0,3)}),Object(s.jsx)(f.a,{container:!0,item:!0,xs:12,className:"boardRow",children:e.slice(3,7)}),Object(s.jsx)(f.a,{container:!0,item:!0,xs:12,className:"boardRow",children:e.slice(7)}),Object(s.jsxs)(f.a,{container:!0,item:!0,xs:12,className:"facultyRow",children:[Object(s.jsx)(f.a,{item:!0,xs:12,sm:3}),Object(s.jsx)(f.a,{item:!0,xs:12,sm:3,children:Object(s.jsx)(P,{designation:"Faculty Coordinator",name:"Dr. Venugopal P",imageSrc:G,linkedInProfile:"https://www.linkedin.com/in/dr-pulidindi-venugopal-65230337/"})}),Object(s.jsx)(f.a,{item:!0,xs:12,sm:3,children:Object(s.jsx)(P,{designation:"Faculty Coordinator",name:"Subashini R",imageSrc:_,linkedInProfile:"https://www.linkedin.com/in/subashini-rajagopal-b97319139/"})}),Object(s.jsx)(f.a,{item:!0,xs:12,sm:3})]})]}),Object(s.jsx)(f.a,{item:!0,xs:1})]})}t(122);function Z(){return Object(s.jsxs)(f.a,{container:!0,className:"eventsContainer",direction:"column",id:"events",children:[Object(s.jsxs)(f.a,{container:!0,item:!0,children:[Object(s.jsx)(f.a,{item:!0,xs:1,md:2}),Object(s.jsx)(f.a,{item:!0,xs:10,md:8,className:"section-heading",children:"A few mile stones of our journey!"}),Object(s.jsx)(f.a,{item:!0,xs:1,md:2})]}),Object(s.jsx)(f.a,{item:!0,className:"eventItem",children:Object(s.jsx)("div",{className:"fb-post","data-href":"https://www.facebook.com/temsvitu/posts/3767321359961361","data-width":"700","data-show-text":"true",children:Object(s.jsxs)("blockquote",{cite:"https://www.facebook.com/temsvitu/posts/3767321359961361",className:"fb-xfbml-parse-ignore",children:["Posted by ",Object(s.jsx)("a",{href:"https://www.facebook.com/temsvitu/",children:"IEEE TEMS VIT"})," on\xa0",Object(s.jsx)("a",{href:"https://www.facebook.com/temsvitu/posts/3767321359961361",children:"Wednesday, 5 August 2020"})]})})}),Object(s.jsx)(f.a,{item:!0,className:"eventItem",children:Object(s.jsx)("div",{className:"fb-post","data-href":"https://www.facebook.com/temsvitu/posts/3232521540108015","data-width":"700","data-show-text":"true",children:Object(s.jsxs)("blockquote",{cite:"https://www.facebook.com/temsvitu/posts/3232521540108015",className:"fb-xfbml-parse-ignore",children:[Object(s.jsx)("p",{children:"The outreach program 'Make the world a Better place' from IEEE TEMS in association with Leo club turned out to a..."}),"Posted by",Object(s.jsx)("a",{href:"https://www.facebook.com/temsvitu/",children:"IEEE TEMS VIT"})," on\xa0",Object(s.jsx)("a",{href:"https://www.facebook.com/temsvitu/posts/3232521540108015",children:"Friday, 10 January 2020"})]})})}),Object(s.jsx)(f.a,{item:!0,className:"eventItem",children:Object(s.jsx)("div",{className:"fb-post","data-href":"https://www.facebook.com/temsvitu/posts/3045921905434647","data-width":"700","data-show-text":"true",children:Object(s.jsxs)("blockquote",{cite:"https://www.facebook.com/temsvitu/posts/3045921905434647",className:"fb-xfbml-parse-ignore",children:[Object(s.jsx)("p",{children:'"No one can whistle a symphony. It takes a whole orchestra to play it." . . . In a journey to success, it\'s "WE" that...'}),"Posted by",Object(s.jsx)("a",{href:"https://www.facebook.com/temsvitu/",children:"IEEE TEMS VIT"})," on\xa0",Object(s.jsx)("a",{href:"https://www.facebook.com/temsvitu/posts/3045921905434647",children:"Wednesday, 23 October 2019"})]})})}),Object(s.jsx)(f.a,{item:!0,className:"eventItem",children:Object(s.jsx)("div",{className:"fb-post","data-href":"https://www.facebook.com/temsvitu/posts/2666314926728682","data-width":"700","data-show-text":"true",children:Object(s.jsxs)("blockquote",{cite:"https://www.facebook.com/temsvitu/posts/2666314926728682",className:"fb-xfbml-parse-ignore",children:[Object(s.jsx)("p",{children:"Glimpses of Henry Harvin Education's 'Certified Python Business Analyst' (CPBA) Course - PYTHON BASED DATA ANALYSIS..."}),"Posted by",Object(s.jsx)("a",{href:"https://www.facebook.com/temsvitu/",children:"IEEE TEMS VIT"})," on\xa0",Object(s.jsx)("a",{href:"https://www.facebook.com/temsvitu/posts/2666314926728682",children:"Sunday, 7 April 2019"})]})})}),Object(s.jsx)(f.a,{item:!0,children:Object(s.jsx)(E.a,{label:"Click to follow our journey",className:"moreButton",onClick:function(){return window.open("https://www.facebook.com/temsvitu")}})})]})}var Y=t(37),$=t(86),U=t(87),Q=t(43),X=t(91),ee=t(90),ae=t(183),te=t(170),se=(t(79),t(5)),ne=function(e){Object(X.a)(t,e);var a=Object(ee.a)(t);function t(e){var s;return Object($.a)(this,t),(s=a.call(this,e)).CssTextField=Object(se.a)({root:{"& label.Mui-focused":{color:"#ffffff",fontFamily:"Lato"},"& .MuiInput-underline:after":{borderBottomColor:"#ffffff",fontFamily:"Lato"}}})(ae.a),s.state={name:{error:"",value:""},email:{error:"",value:""},message:{error:"",value:""},isValid:!0,successMessage:""},s.handleChange=s.handleChange.bind(Object(Q.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(Q.a)(s)),s}return Object(U.a)(t,[{key:"handleChange",value:function(e){var a,t=e.target,s=t.name,n=t.value;this.setState((a={},Object(Y.a)(a,s,{error:"",value:n}),Object(Y.a)(a,"isValid",!0),Object(Y.a)(a,"successMessage",""),a))}},{key:"handleSubmit",value:function(e){var a=this.state.name.value,t=this.state.email.value,s=this.state.message.value;if(a.trim())if(t.trim())if(s.trim())if(t.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)){if(this.state.isValid){this.sendFeedback("template_pzqrm3g",{message_html:this.state.message.value,from_name:this.state.name.value,from_mail:this.state.email.value}),this.setState({name:{error:"",value:""},email:{error:"",value:""},message:{error:"",value:""},isValid:!0}),this.setState({successMessage:"Hey! thanks for responding, have a nice day!"})}}else this.setState({email:{error:"Please enter a valid email",value:t},isValid:!1});else this.setState({message:{error:"Message can't be empty",value:s},isValid:!1});else this.setState({email:{error:"Email can't be empty",value:t},isValid:!1});else this.setState({name:{error:"Name can't be empty",value:a},isValid:!1})}},{key:"sendFeedback",value:function(e,a){window.emailjs.send("gmail",e,a).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){return Object(s.jsxs)(i.a.Fragment,{children:[Object(s.jsx)("div",{className:"successMessage",children:this.state.successMessage}),Object(s.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(s.jsx)(this.CssTextField,{label:"Name",name:"name",value:this.state.name.value,onChange:this.handleChange,error:!(""===this.state.name.error),helperText:this.state.name.error,required:!0,fullWidth:!0,margin:"normal",style:{fontFamily:"Lato"}}),Object(s.jsx)(this.CssTextField,{label:"Email",name:"email",value:this.state.email.value,onChange:this.handleChange,error:!(""===this.state.email.error),helperText:this.state.email.error,required:!0,size:"medium",fullWidth:!0,margin:"normal"}),Object(s.jsx)(this.CssTextField,{label:"Message",name:"message",value:this.state.message.value,onChange:this.handleChange,error:!(""===this.state.message.error),helperText:this.state.message.error,required:!0,size:"medium",fullWidth:!0,margin:"normal",multiline:!0,rows:4}),Object(s.jsx)(te.a,{variant:"contained",className:"submitButton",fullWidth:!0,onClick:this.handleSubmit,children:"Send"})]})]})}}]),t}(i.a.Component),ie=t(171),ce=t(172);var re=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(f.a,{container:!0,justify:"center",className:"contactContainer",id:"contact",children:[Object(s.jsx)(f.a,{item:!0,xs:12,className:"contactHead",children:Object(s.jsx)("p",{children:"Contact"})}),Object(s.jsx)(f.a,{item:!0,xs:2,sm:4}),Object(s.jsx)(f.a,{item:!0,xs:8,sm:4,children:Object(s.jsx)(ne,{})}),Object(s.jsx)(f.a,{item:!0,xs:2,sm:4})]}),Object(s.jsxs)(f.a,{container:!0,justify:"center",className:"bottomNav",children:[Object(s.jsx)(f.a,{item:!0,children:Object(s.jsx)(g.a,{children:Object(s.jsx)("a",{href:"https://www.instagram.com/ieeetemsvit/",rel:"noopener",children:Object(s.jsx)(ie.a,{style:{color:"white"}})})})}),Object(s.jsx)(f.a,{item:!0,children:Object(s.jsx)(g.a,{children:Object(s.jsx)("a",{href:"https://www.facebook.com/temsvitu",rel:"noopener",children:Object(s.jsx)(ce.a,{style:{color:"white"}})})})}),Object(s.jsx)(f.a,{item:!0,children:Object(s.jsx)(g.a,{children:Object(s.jsx)("a",{href:"https://www.linkedin.com/company/ieee-tems-vit-vellore",rel:"noopener",children:Object(s.jsx)(T.a,{style:{color:"white"}})})})}),Object(s.jsx)(f.a,{item:!0,children:Object(s.jsx)(g.a,{children:Object(s.jsx)("a",{href:"https://medium.com/@ieeetems",rel:"noopener",children:Object(s.jsx)("i",{className:"fa fa-medium",style:{color:"white"}})})})})]}),Object(s.jsx)(f.a,{container:!0,justify:"center",children:Object(s.jsxs)("p",{className:"credits",children:["ieeetemsvitu@gmail.com ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"IEEE TEMS ",Object(s.jsx)("br",{}),"VIT Vellore"]})})]})},oe=(t(123),t(174)),le=t(178),me=t(177),je=t(173),de=t(175),he=t(176),be=t(169),ue=[{sno:1,name:"G prasanjay",reg:"19BBS0093"},{sno:2,name:"Kalluri sai tanmy",reg:"19BBS0206"},{sno:3,name:"Varun ch",reg:"19BCB0062"},{sno:4,name:"Chaitanya",reg:"19BCE0047"},{sno:5,name:"Chama jahnavi",reg:"19BCE0428"},{sno:6,name:"Niranjan venkatesan",reg:"19BCE0569"},{sno:7,name:"Sai teja",reg:"19BCE0570"},{sno:8,name:"P. saipranavi",reg:"19BCE0732"},{sno:9,name:"Sri harshitha uppaala",reg:"19BCE0770"},{sno:10,name:"Harshit mishra",reg:"19BCE0799"},{sno:11,name:"Ajith bonda",reg:"19BCE0802"},{sno:12,name:"Potula sri rupin",reg:"19BCE0825"},{sno:13,name:"Penke lohith sasi anvesh",reg:"19BCE2069"},{sno:14,name:"Alokam nikhitha",reg:"19BCE2555"},{sno:15,name:"Kothamasu karthik",reg:"19BCI0141"},{sno:16,name:"M. sai praneeth",reg:"19BCI0177"},{sno:17,name:"Sadusukesh",reg:"19BCT0087"},{sno:18,name:"Nikhil reddy m",reg:"19BCT0108"},{sno:19,name:"Kocherlakota vinay rama raju",reg:"19BCT0129"},{sno:20,name:"Syed ruhid b",reg:"19BCT0130"},{sno:21,name:"M dheeraj kumar",reg:"19BCT0146"},{sno:22,name:"Ladi rohit",reg:"19BDS0096"},{sno:23,name:"Kona shravan",reg:"19BDS0121"},{sno:24,name:"Anirudh paramkusam",reg:"19BEC0045"},{sno:25,name:"Ajay lumar",reg:"19BEC0118"},{sno:26,name:"Indugula uma satya prakash",reg:"19BEC0119"},{sno:27,name:"Mahidhar rayapati",reg:"19BEC0204"},{sno:28,name:"D.jagan",reg:"19BEC0255"},{sno:29,name:"K.srinivasa manjunath",reg:"19BEC0287"},{sno:30,name:"Dinesh hanumath kumar",reg:"19BEC0355"},{sno:31,name:"Booragadda dheeraj",reg:"19BEC0406"},{sno:32,name:"Basava pavan sri ram",reg:"19BEC0423"},{sno:33,name:"Ujwala rekapalli",reg:"19BEC0478"},{sno:34,name:"Kondeti venkatakiran",reg:"19BEC0583"},{sno:35,name:"Gujjula yaswanth kumar reddy",reg:"19BEC0821"},{sno:36,name:"M.bhanu prakash",reg:"19BEC0851"},{sno:37,name:"S gurudaya varshni",reg:"19BEE0252"},{sno:38,name:"Potta sowmya",reg:"19BIT0152"},{sno:39,name:"Ishma banu",reg:"19BIT0186"},{sno:40,name:"Venkat vinay velaga",reg:"19BIT0339"},{sno:41,name:"Kushal kumar p",reg:"19BME0821"},{sno:42,name:"Kadium farheen nawazi",reg:"19MID0032"},{sno:43,name:"A .sai pranav",reg:"19MIS0105"},{sno:44,name:"Panasa yamini rama pavani",reg:"19MIS0120"},{sno:45,name:"Katkam shanmukh akul",reg:"19MIS0130"},{sno:46,name:"G. hinduja",reg:"19MIS0348"},{sno:47,name:"M.jaswanth kumar",reg:"19MIS0364"},{sno:48,name:"Rohit birelli",reg:"19MIS0370"}];function xe(){var e=ue;return Object(s.jsxs)(f.a,{container:!0,className:"resultsContainer",children:[Object(s.jsx)(f.a,{item:!0,xs:12,children:Object(s.jsx)("a",{href:"https://ieeetemsvit.org",children:Object(s.jsx)("img",{src:l,className:"logoSmall",alt:"logo"})})}),Object(s.jsx)(f.a,{xs:1}),Object(s.jsxs)(f.a,{item:!0,xs:10,children:[Object(s.jsxs)("h1",{className:"resultHead",children:["WELCOME ABOARD! ",Object(s.jsx)("br",{})," CORE COMMITTEE 2021"]}),Object(s.jsx)("p",{className:"resultSubHead",children:"Looking forward for a wonderful journey ahead!"})]}),Object(s.jsx)(f.a,{item:!0,xs:1}),Object(s.jsx)(f.a,{item:!0,xs:2}),Object(s.jsx)(f.a,{item:!0,xs:8,children:Object(s.jsx)(je.a,{component:be.a,className:"resultTable",children:Object(s.jsxs)(oe.a,{size:"small","aria-label":"a dense table",children:[Object(s.jsx)(de.a,{className:"thead",children:Object(s.jsxs)(he.a,{children:[Object(s.jsx)(me.a,{align:"center",children:"Name"}),Object(s.jsx)(me.a,{align:"center",children:"Reg. No."})]})}),Object(s.jsx)(le.a,{children:e.map((function(e){return Object(s.jsxs)(he.a,{className:"trow",children:[Object(s.jsx)(me.a,{align:"center",scope:"row",children:e.name}),Object(s.jsx)(me.a,{align:"center",scope:"row",children:e.reg})]},e.id)}))})]})})}),Object(s.jsx)(f.a,{item:!0,xs:2})]})}var Oe=t(179),ge=t(180),pe=t(181),fe=t(182),ve=t(88),we=t.n(ve),ke=t(68),Ne=t(12);var Ce=function(e){var a=function(){document.querySelector("#app").classList.add("fade")};Object(n.useEffect)((function(){return setTimeout(a,1500)}));var t=Object(Oe.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(3),right:e.spacing(5)}}}));function i(e){var a=e.children,n=t(),i=Object(ge.a)({disableHysteresis:!0,threshold:100});return Object(s.jsx)(pe.a,{in:i,children:Object(s.jsx)("div",{onClick:function(e){w.animateScroll.scrollToTop()},role:"presentation",className:n.root,children:a})})}return Object(s.jsxs)(ke.a,{children:[Object(s.jsx)("div",{className:"temsSplash",id:"app",children:Object(s.jsx)("img",{src:l,className:"logo",alt:"hi"})}),Object(s.jsxs)(Ne.c,{children:[Object(s.jsx)(Ne.a,{path:"/temsvit",children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("span",{id:"back-to-top-anchor"}),Object(s.jsx)(N,{}),Object(s.jsx)("div",{className:"recruitmentResults",children:Object(s.jsx)(ke.b,{to:"/results",className:"resultsLink",children:Object(s.jsx)(E.a,{clickable:!0,className:"recruitmentResultsButton",label:"Recruitment Results"})})}),Object(s.jsx)(y,{}),Object(s.jsx)(p,{}),Object(s.jsx)(M,{}),Object(s.jsx)(Z,{}),Object(s.jsx)(J,{}),Object(s.jsx)(re,{}),Object(s.jsx)(i,Object(o.a)(Object(o.a)({},e),{},{children:Object(s.jsx)(fe.a,{style:{color:"white"},size:"medium","aria-label":"scroll back to top",children:Object(s.jsx)(we.a,{style:{color:"#006C54"}})})}))]})}),Object(s.jsx)(Ne.a,{to:"/results",children:Object(s.jsx)(xe,{})})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,186)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),s(e),n(e),i(e),c(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(Ce,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ye()},79:function(e,a,t){}},[[125,1,2]]]);
//# sourceMappingURL=main.1af77cd5.chunk.js.map