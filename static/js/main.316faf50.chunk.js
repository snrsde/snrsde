(this.webpackJsonpsnreng=this.webpackJsonpsnreng||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(9),s=n.n(i),o=(n(96),n(97),n(26)),l=n(27),j=n(31),d=n(28),h=n(43),b=n(80),p=n(64),x=n(4),u=n(171),O=n(16),m=n(189),g=n(174),f=n(176),v=n(177),y=n(180),w=n(55),k=n(179),S=n(178),N=n(74),D=n.n(N),C=n(75),A=n.n(C),B=n(76),I=n.n(B),z=n(135),L=n(181),P=n.p+"static/media/snrsde.a0844e7a.svg",E=240,F=Object(u.a)((function(e){return{root:{display:"flex",backgroundColor:"#3f4041",minHeight:"100vh"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(E,"px)"),marginLeft:E,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:E,flexShrink:0},drawerPaper:{width:E},drawerHeader:Object(p.a)(Object(p.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),backgroundColor:"#3f4041",minheight:"120vh",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},link:{color:"black",textDecoration:"none"}}}));function G(e){var t=F(),n=Object(O.a)(),r=c.a.useState(!1),i=Object(b.a)(r,2),s=i[0],o=i[1];return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(g.a,{}),Object(a.jsx)(f.a,{position:"fixed",className:Object(x.a)(t.appBar,Object(h.a)({},t.appBarShift,s)),children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(S.a,{color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},edge:"start",className:Object(x.a)(t.menuButton,s&&t.hide),children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(w.a,{variant:"h6",noWrap:!0,children:"Snr Engineer"})]})}),Object(a.jsxs)(m.a,{className:t.drawer,variant:"persistent",anchor:"left",open:s,classes:{paper:t.drawerPaper},children:[Object(a.jsx)("div",{className:t.drawerHeader,children:Object(a.jsx)(S.a,{onClick:function(){o(!1)},children:"ltr"===n.direction?Object(a.jsx)(A.a,{}):Object(a.jsx)(I.a,{})})}),Object(a.jsx)(k.a,{}),Object(a.jsx)(y.a,{children:[{k:"System Design",v:"/system_design"},{k:"Coding/DS/Algos",v:"/algo"},{k:"Object Oriented Design",v:"/ood"},{k:"Ambiguity",v:"/ambiguity"}].map((function(e,n){return Object(a.jsx)("a",{className:t.link,href:"/snrsde"+e.v,children:Object(a.jsx)(z.a,{button:!0,children:Object(a.jsx)(L.a,{primary:e.k})},e.k)})}))}),Object(a.jsx)(k.a,{}),Object(a.jsx)(y.a,{children:[{k:"Home",v:"/"},{k:"SDE Premium Support",v:"/premium"}].map((function(e,n){return Object(a.jsx)("a",{className:t.link,href:e.v,children:Object(a.jsx)(z.a,{button:!0,children:Object(a.jsx)(L.a,{primary:e.k})},e.k)})}))}),Object(a.jsx)(k.a,{}),Object(a.jsx)(y.a,{children:[{k:"Donate",v:"/donate"}].map((function(e,n){return Object(a.jsx)("a",{className:t.link,href:e.v,children:Object(a.jsx)(z.a,{button:!0,children:Object(a.jsx)(L.a,{primary:e.k})},e.k)})}))})]}),Object(a.jsxs)("main",{className:Object(x.a)(t.content,Object(h.a)({},t.contentShift,s)),children:[Object(a.jsx)("div",{className:t.drawerHeader}),Object(a.jsx)("img",{src:P,style:{height:100,width:600},alt:"website logo"}),e.children]})]})}var H=n(6),T=n(182),M=n(183),q=n(184),W=n(33),R=n.n(W),Y=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={data:e.data},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.data,r="/post/"+n.id;return Object(a.jsx)(T.a,{className:t.root,elevation:20,children:Object(a.jsx)("a",{className:t.link,href:r,children:Object(a.jsx)(M.a,{children:Object(a.jsxs)(q.a,{children:[Object(a.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n.title}),Object(a.jsxs)(w.a,{gutterBottom:!0,children:["Date: ",n.date]}),Object(a.jsxs)(w.a,{gutterBottom:!0,children:["Level: ",n.level]}),Object(a.jsx)(w.a,{variant:"body2",color:"textSecondary",component:"p",children:R()(""+n.description)})]})})})})}}]),n}(r.Component),_=Object(H.a)((function(e){return{root:{},media:{height:140},link:{color:"black",textDecoration:"none"}}}))(Y),J=n(185),U=n(187),V=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(o.a)(this,n),(a=t.call(this,e)).getData=function(){var e=a.state.id;fetch("./resources/indexes/"+e+".json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){a.setState({data:e})}))};var r={id:e.id,posts:[]};return a.state={data:r,sortBy:"none",id:e.id,title:e.title},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"Updating",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.state.data,n=function(t){var n=e.state.data.posts;"earliest"===t?n.sort((function(e,t){return t.date.localeCompare(e.date)})):"lvlBeg"===t?n.sort((function(e,t){return e.level-t.level})):"lvlExp"===t&&n.sort((function(e,t){return t.level-e.level}));var a={id:e.state.id,posts:n};e.setState({data:a})};return Object(a.jsxs)(G,{children:[Object(a.jsxs)("div",{style:{marginBottom:"15px",color:"white"},children:[Object(a.jsx)(w.a,{paragraph:!0,children:Object(a.jsx)("h1",{children:this.state.title})}),"Sort By : ",Object(a.jsxs)(U.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:this.state.sortBy,onChange:function(t){n(t.target.value),e.setState({sortBy:t.target.value}),n()},style:{marginBottom:"15px",backgroundColor:"#5d737e",color:"white"},children:[Object(a.jsx)(J.a,{value:"none",children:"None"}),Object(a.jsx)(J.a,{value:"earliest",children:"Latest"}),Object(a.jsx)(J.a,{value:"lvlExp",children:"Level Expert"}),Object(a.jsx)(J.a,{value:"lvlBeg",children:"Level Beginner"})]})]}),t.posts.map((function(e,t){return Object(a.jsx)(w.a,{paragraph:!0,children:Object(a.jsx)(_,{data:e},t)},t)}))]})}}]),n}(r.Component),K=n(77);var Q=function(e){var t=e.videoId,n=e.vidDesc;return Object(a.jsxs)("div",{children:[Object(a.jsx)(w.a,{variant:"body1",component:"p",children:R()(""+n)}),Object(a.jsx)(K.a,{videoId:t,opts:{height:"390",width:"640",playerVars:{autoplay:1}},onReady:!1})]})},X=n(82),Z=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={data:e.data},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.data;return Object(a.jsx)(T.a,{className:t.root,elevation:20,children:Object(a.jsxs)(q.a,{children:[Object(a.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n.title}),Object(a.jsxs)(w.a,{gutterBottom:!0,children:["Level: ",n.level]}),Object(a.jsx)(w.a,{variant:"body2",color:"textSecondary",component:"p",children:R()(""+n.description)}),Object(a.jsx)(k.a,{}),null!=n.vidDesc&&Object(a.jsx)(Q,{videoId:n.videoId,vidDesc:n.vidDesc}),Object(a.jsx)(w.a,{variant:"body1",component:"p",children:R()(""+n.body)}),null!=n.pdfLink&&Object(a.jsx)("object",{width:"100%",height:"800",data:n.pdfLink+"#view=FitH",type:"application/pdf"}),null!=n.endText&&Object(a.jsx)(w.a,{variant:"body1",component:"p",children:R()(""+n.endText)}),Object(a.jsx)(X.a,{className:t.paper,children:Object(a.jsx)("div",{style:{color:"white",fontSize:"20px"},children:Object(a.jsxs)("p",{children:["Want to suggest improvements? Suggest some content please write to us at ",Object(a.jsx)("b",{children:Object(a.jsx)("em",{style:{color:"black"},children:"snrsofteng@gmail.com"})}),Object(a.jsx)("br",{}),"You can send your donations at ",Object(a.jsx)("b",{children:Object(a.jsx)("em",{style:{color:"black"},children:"snrsofteng@gmail.com"})}),Object(a.jsx)("br",{}),"Patreon :",Object(a.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"https://www.patreon.com/snreng",children:Object(a.jsx)("b",{children:Object(a.jsx)("em",{children:" https://www.patreon.com/snreng"})})})]})})})]})})}}]),n}(r.Component),$=Object(H.a)((function(e){return{root:{},media:{height:140},paper:{padding:e.spacing(2),backgroundColor:"#5d737e",textAlign:"center",color:"white"}}}))(Z),ee=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(o.a)(this,n),(a=t.call(this,e)).getData=function(){var e=a.state.id;fetch("/resources/post/"+e+".json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return console.log(e),e.json()})).then((function(e){return a.setState({data:e})}))};var r={id:e.id,posts:[]};return a.state={data:r,id:e.match.params.id},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.data;return Object(a.jsx)(G,{children:Object(a.jsx)(w.a,{paragraph:!0,children:Object(a.jsx)($,{data:e})})})}}]),n}(r.Component),te=n(63),ne=n(11),ae=n(186),re=Object(u.a)((function(e){return{root:{backgroundColor:"#3f4041",flexGrow:1,minHeight:"100vh"},paper:{padding:e.spacing(2),backgroundColor:"#5d737e",textAlign:"center",color:"white"},sect:{padding:e.spacing(2),backgroundColor:"#3f4041",textAlign:"center",color:e.palette.text.secondary}}}));var ce=function(){var e=re();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(G,{children:Object(a.jsxs)(ae.a,{container:!0,spacing:3,children:[Object(a.jsx)(ae.a,{item:!0,xs:12,children:Object(a.jsx)(X.a,{className:e.paper,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{style:{fontSize:"70px",color:"white"},children:"Snr Eng"}),Object(a.jsx)("h1",{style:{color:"white"},children:"CHA collection of resources for 5+ yr engineers to learn and prep"}),Object(a.jsx)("h1",{style:{fontSize:"20px",color:"white"},children:"-From an anonymous FAANG eng to all"})]})})}),Object(a.jsx)(ae.a,{item:!0,xs:12,children:Object(a.jsx)("div",{style:{color:"white",fontSize:"20px"},children:Object(a.jsxs)("p",{children:["Whether you are an avid learner or someone who is preparing for interviews at FAANG.",Object(a.jsx)("br",{}),"Most posts will be focused in the sense of Interview prepration.",Object(a.jsx)("br",{}),"All my post will be focused on posting only the best content I find in my learnings.",Object(a.jsx)("br",{}),"If you want to contribute send me your writeup and i'll add to the collection."]})})}),Object(a.jsx)(ae.a,{item:!0,xs:12,children:Object(a.jsx)(X.a,{className:e.paper,children:Object(a.jsx)("div",{style:{color:"white",fontSize:"20px"},children:Object(a.jsxs)("p",{children:["If you like the content or this helped you prep for interviews. Please consider ",Object(a.jsx)("a",{style:{color:"blue",textDecoration:"none"},href:"/donate",children:"donating"}),", it takes a lot of effort to curate this content. I hope enjoy learning."]})})})})]})})})},ie=Object(u.a)((function(e){return{root:{backgroundColor:"#3f4041",flexGrow:1,minheight:"100vh"},paper:{padding:e.spacing(2),backgroundColor:"#5d737e",textAlign:"center",color:"white"},sect:{padding:e.spacing(2),backgroundColor:"#3f4041",textAlign:"center",color:"white"}}}));var se=function(){var e=ie();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(G,{children:Object(a.jsxs)(ae.a,{container:!0,spacing:3,children:[Object(a.jsx)(ae.a,{item:!0,xs:12,children:Object(a.jsx)(X.a,{className:e.paper,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{style:{fontSize:"70px",color:"white"},children:"Premium Services"}),Object(a.jsx)("h1",{style:{color:"white"},children:"Want help with Interviews at high end Tech companies?"}),Object(a.jsx)("h1",{style:{color:"white"},children:"Dont worry, charges are just to compensate for the time I spend. Nothing Extra"})]})})}),Object(a.jsx)(ae.a,{item:!0,xs:12,children:Object(a.jsx)("div",{style:{color:"white",fontSize:"20px"},children:Object(a.jsxs)("p",{children:[Object(a.jsx)(X.a,{className:e.paper,children:Object(a.jsxs)("div",{children:["Practice in Mock Interviews FAANG Style with me (on New questions). Get a complete assessement report afterwards",Object(a.jsx)("br",{})]})}),Object(a.jsx)("div",{className:e.sect,children:"Get more questions with some advanced concepts."}),Object(a.jsx)(X.a,{className:e.paper,children:Object(a.jsx)("div",{children:"Become a Patreon get subscription to SDE Reads list. Our list of selected reading articles covering advanced concepts."})}),Object(a.jsx)("div",{className:e.sect,children:"Consultations/Improvements about your System Designs for your startup/office project"})]})})}),Object(a.jsx)(ae.a,{item:!0,xs:12,children:Object(a.jsx)(X.a,{className:e.paper,children:Object(a.jsx)("div",{style:{color:"white",fontSize:"20px"},children:Object(a.jsxs)("p",{children:["If you'd like to get in touch please feel free to drop us a mail at ",Object(a.jsx)("em",{style:{color:"black"},children:"srnsofteng@gmail.com"})]})})})})]})})})},oe=Object(u.a)((function(e){return{root:{backgroundColor:"#3f4041",flexGrow:1,height:"100vh"},paper:{padding:e.spacing(2),backgroundColor:"#5d737e",textAlign:"center",color:"white"},sect:{padding:e.spacing(2),backgroundColor:"#3f4041",textAlign:"center",color:e.palette.text.secondary}}}));var le=function(){var e=oe();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(G,{children:Object(a.jsxs)(ae.a,{container:!0,spacing:3,children:[Object(a.jsx)(ae.a,{item:!0,xs:12,children:Object(a.jsx)(X.a,{className:e.paper,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{style:{fontSize:"60px",color:"white"},children:"Donate & Support Us"}),Object(a.jsx)("h1",{style:{color:"white"},children:"This initiative requires your support!"}),Object(a.jsx)("h1",{style:{fontSize:"20px",color:"white"},children:"If you like our work please support by becoming a pateron or one time donations"})]})})}),Object(a.jsx)(ae.a,{item:!0,xs:12,children:Object(a.jsx)("div",{style:{color:"white",fontSize:"20px"},children:Object(a.jsxs)("p",{children:["It takes a lot of hours for me to find and create some of the best questions and articles",Object(a.jsx)("br",{}),"You can become a ",Object(a.jsx)("a",{style:{textDecoration:"none"},href:"https://www.patreon.com/snreng",children:Object(a.jsx)("b",{children:Object(a.jsx)("em",{style:{color:"yellow"},children:"pateron "})})}),"with anything you like.",Object(a.jsx)("br",{}),"Even donations in form of ",Object(a.jsx)("b",{children:Object(a.jsx)("em",{style:{color:"yellow"},children:"google play/Amazon gift cards"})})," are also highly appreciated.",Object(a.jsx)("br",{}),"Help me in keeping this initiative afloat. If you like our work please support us.",Object(a.jsx)("br",{})]})})}),Object(a.jsx)(ae.a,{item:!0,xs:12,children:Object(a.jsx)(X.a,{className:e.paper,children:Object(a.jsx)("div",{style:{color:"white",fontSize:"20px"},children:Object(a.jsxs)("p",{children:["You can send your donations at ",Object(a.jsx)("b",{children:Object(a.jsx)("em",{style:{color:"black"},children:"snrsofteng@gmail.com"})}),Object(a.jsx)("br",{}),"Patreon :",Object(a.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"https://www.patreon.com/snreng",children:Object(a.jsx)("b",{children:Object(a.jsx)("em",{children:" https://www.patreon.com/snreng"})})})]})})})})]})})})};var je=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(te.a,{basename:"/",children:[Object(a.jsx)(ne.a,{path:"/system_design/",render:function(e){return Object(a.jsx)(V,{id:"system_design",title:"System Design"})},exact:!0}),Object(a.jsx)(ne.a,{path:"/snrsde/ood/",render:function(e){return Object(a.jsx)(V,{id:"ood",title:"Object Oriented Design"})},exact:!0}),Object(a.jsx)(ne.a,{path:"/snrsde/algo",render:function(e){return Object(a.jsx)(V,{id:"algo",title:"Algo/DS"})}}),Object(a.jsx)(ne.a,{path:"/snrsde/ambiguity",render:function(e){return Object(a.jsx)(V,{id:"ambiguity",title:"Ambiguity"})}}),Object(a.jsx)(ne.a,{path:"/",component:ce,exact:!0}),Object(a.jsx)(ne.a,{path:"/snrsde/premium",component:se,exact:!0}),Object(a.jsx)(ne.a,{path:"/snrsde/donate",component:le,exact:!0}),Object(a.jsx)(ne.a,{path:"/snrsde/post/:id",component:ee,exact:!0})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,191)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(je,{})}),document.getElementById("root")),de()},96:function(e,t,n){},97:function(e,t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.316faf50.chunk.js.map