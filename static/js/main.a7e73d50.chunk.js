(this.webpackJsonpbandhan=this.webpackJsonpbandhan||[]).push([[0],{117:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=(a(117),a(21)),s=(a.p,a(90)),l=a(91),d=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"filterArrayByString",value:function(e,t){var a=this;return""===t?e:(t=t.toLowerCase(),e.filter((function(e){return a.searchInObj(e,t)})))}},{key:"searchInObj",value:function(e,t){if(!e)return!1;for(var a=Object.keys(e),n=0;n<a.length;n+=1){var r=e[a[n]];if("string"===typeof r){if(this.searchInString(r,t))return!0}else if(Array.isArray(r)&&this.searchInArray(r,t))return!0;if("object"===typeof r&&this.searchInObj(r,t))return!0}return!1}},{key:"searchInArray",value:function(e,t){var a=this;return e.forEach((function(e){return!("string"!==typeof e||!a.searchInString(e,t))||!("object"!==typeof e||!a.searchInObj(e,t))})),!1}},{key:"searchInString",value:function(e,t){return e.toLowerCase().includes(t)}},{key:"descompareemail",value:function(e,t){var a=e.email.toUpperCase(),n=t.email.toUpperCase(),r=0;return a>n?r=1:a<n&&(r=-1),-1*r}},{key:"asccompareemail",value:function(e,t){var a=e.email.toUpperCase(),n=t.email.toUpperCase(),r=0;return a>n?r=1:a<n&&(r=-1),r}},{key:"descompareage",value:function(e,t){var a=e.dob.age,n=t.dob.age,r=0;return a>n?r=1:a<n&&(r=-1),-1*r}},{key:"asccompareage",value:function(e,t){var a=e.dob.age,n=t.dob.age,r=0;return a>n?r=1:a<n&&(r=-1),r}}]),e}(),u=a(92),j=a.n(u),b=a(39),f=a(13),g=a(97),h=a(194),m=a(198),p=a(197),O=a(193),x=a(199),v=a(195),y=a(212),w=a(196),C=a(218),S=a(4),P=a(51),k=a(219),N=(a(70),a(189),a(72),a(71),a(69),a(23),a(3)),A=a(192),R=Object(A.a)((function(e){return{text:{color:"black !important",fontWeight:"normal",fontSize:"1.2rem"},header:{fontWeight:"bold"},marginL:{marginLeft:-70,marginRight:10}}})),L=function(e){var t=e.columns,a=e.data,r=e.onRowClick,c=R(),i=Object(P.useTable)({columns:t,data:a,autoResetPage:!0},P.useGlobalFilter,P.useSortBy,P.usePagination,P.useRowSelect,(function(e){e.allColumns.push((function(e){return Object(g.a)(e)}))})),o=i.getTableProps,s=i.headerGroups,l=i.prepareRow,d=i.page,u=i.gotoPage,j=i.setPageSize,b=i.state,A=b.pageIndex,L=b.pageSize;Object(n.useEffect)((function(){j(5)}),[]);return Object(N.jsx)(O.a,{className:"min-h-full sm:border-1",children:Object(N.jsxs)(h.a,Object(f.a)(Object(f.a)({},o()),{},{children:[Object(N.jsx)(v.a,{children:s.map((function(e){return Object(N.jsx)(w.a,Object(f.a)(Object(f.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(N.jsxs)(p.a,Object(f.a)(Object(f.a)({className:Object(S.a)("whitespace-no-wrap p-12",c.header)},e.sortable?e.getHeaderProps(e.getSortByToggleProps()):e.getHeaderProps()),{},{children:[e.render("Header"),e.sortable?Object(N.jsx)(C.a,{active:e.isSorted,direction:e.isSortedDesc?"desc":"asc"}):null]}))}))}))}))}),Object(N.jsx)(m.a,{children:d.map((function(e,t){return l(e),Object(N.jsx)(w.a,Object(f.a)(Object(f.a)({},e.getRowProps()),{},{onClick:function(t){return r(t,e)},className:"truncate",children:e.cells.map((function(t){return console.log("row==========="),console.log(e),Object(N.jsx)(p.a,Object(f.a)(Object(f.a)({},t.getCellProps()),{},{children:"Profile Picture"===t.column.Header?Object(N.jsx)(k.a,{alt:"Remy Sharp",src:e.original.picture.thumbnail}):"Name"===t.column.Header?Object(N.jsx)("p",{children:e.original.name.title+" "+e.original.name.first+" "+e.original.name.last}):t.render("Cell")}))}))}))}))}),Object(N.jsx)(x.a,{children:Object(N.jsx)(w.a,{children:Object(N.jsx)(y.a,{classes:{root:"overflow-hidden",spacer:"w-0 max-w-0",float:"left"},rowsPerPageOptions:[5,10,25],colSpan:7,count:a.length,rowsPerPage:L,page:A,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!1,classes:c.marginL},onChangePage:function(e,t){u(t)},onChangeRowsPerPage:function(e){j(Number(e.target.value))}})})})]}))})},I=a(204),T=a(68),D=a.n(T),H=a(216),W=a(205),E=a(217),F=a(203),B=a(214),z=a(211),G="OPEN_DIALOG",M="CLOSE_DIALOG";function U(e){return{type:G,payload:e}}var q=Object(A.a)((function(e){return{margindiv:{marginLeft:"10%",marginRight:"10%",marginTop:"1%"},searchbox:{width:"100%",textAlign:"center",marginTop:"5%",marginBottom:"-5%"},searchbutton:{marginLeft:"5px",marginTop:"1px"},formControl:{margin:e.spacing(1),minWidth:120},Checkbox:{marginTop:"1%",marginLeft:"1%"}}}));var J,_,K,Q,V,X,Y,Z=function(e){var t=q(),a=Object(b.b)(),c=Object(n.useState)(null),i=Object(o.a)(c,2),s=i[0],l=i[1],u=Object(n.useState)(0),j=Object(o.a)(u,2),f=j[0],g=j[1],h=Object(n.useState)(!1),m=Object(o.a)(h,2),p=m[0],O=m[1],x=Object(n.useState)(e.userdata),v=Object(o.a)(x,2),y=v[0],w=v[1],C=Object(n.useState)(!1),S=Object(o.a)(C,2),P=S[0],k=S[1],A=Object(n.useState)(!1),R=Object(o.a)(A,2),T=(R[0],R[1],Object(n.useState)(!1)),G=Object(o.a)(T,2),M=G[0],J=G[1],_=r.a.useMemo((function(){return[{Header:"Profile Picture"},{Header:"Name",className:"font-bold",sortable:!0},{Header:"Email",accessor:"email",className:"font-bold",sortable:!0},{Header:"Gender",accessor:"gender",className:"font-bold",sortable:!0},{Header:"Age",accessor:"dob.age",className:"font-bold",sortable:!0}]}),[a]);return Object(n.useEffect)((function(){s&&""!=s||w(e.userdata)}),[s]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:t.searchbox,children:[Object(N.jsx)(H.a,{id:"outlined-basic",label:"Search",variant:"outlined",size:"small",onChange:function(e){l(e.target.value)}}),Object(N.jsxs)(I.a,{variant:"contained",color:"secondary",className:t.searchbutton,onClick:function(){if(s){var t=function(e,t){var a=Object.keys(e).map((function(t){return e[t]}));if(0===t.length)return a;return d.filterArrayByString(a,t)}(e.userdata,s);w(t)}},children:[Object(N.jsx)(D.a,{})," Search"]})]}),Object(N.jsxs)("div",{style:{marginLeft:"10%",marginTop:"1%"},children:[Object(N.jsxs)(F.a,{variant:"outlined",className:t.formControl,children:[Object(N.jsx)(E.a,{htmlFor:"outlined-age-native-simple",children:"Sort"}),Object(N.jsx)(z.a,{native:!0,value:f,onChange:function(t){switch(g(t.target.value),t.target.value){case"20":if(p){J(!1);var a=e.userdata.sort(d.asccompareemail);k(!0),w(a)}else{J(!1);var n=e.userdata.sort(d.descompareemail);k(!0),w(n)}break;case"40":if(p){k(!1);var r=e.userdata.sort(d.asccompareage);J(!0),w(r)}else{k(!1);var c=e.userdata.sort(d.descompareage);J(!0),w(c)}break;default:k(!1),J(!1),w(e.userdata)}},label:"Choose",inputProps:{name:"Choose",id:"outlined-Choose-native-simple"},children:[{name:"Select One",value:0},{name:"Email",value:20},{name:"Age",value:40}].map((function(e){return Object(N.jsx)("option",{value:e.value,children:e.name})}))})]}),Object(N.jsx)(W.a,{className:t.Checkbox,control:Object(N.jsx)(B.a,{checked:p,onChange:function(e){var t=e.target.checked;O(t)},name:"Ascending"}),label:"Ascending"})]}),P&&Object(N.jsx)("div",{className:t.margindiv,children:Object(N.jsx)(L,{columns:_,data:y,onRowClick:function(e,t){t&&a(U(t.original))}})}),M&&Object(N.jsx)("div",{className:t.margindiv,children:Object(N.jsx)(L,{columns:_,data:y,onRowClick:function(e,t){t&&a(U(t.original))}})}),!P&&!M&&Object(N.jsx)("div",{className:t.margindiv,children:Object(N.jsx)(L,{columns:_,data:y,onRowClick:function(e,t){t&&a(U(t.original))}})})]})},$=a(210),ee=a(215),te=a(209),ae=a(206),ne=a(207),re=a(208),ce=a(33),ie=a(34),oe=function(e){return Object(N.jsxs)(le,{children:[Object(N.jsx)("h1",{style:{color:"#f50057",textAlign:"center",marginTop:"-50px"},children:"Personal Infromation"}),Object(N.jsx)(de,{children:Object(N.jsxs)(je,{children:[Object(N.jsx)(ue,{}),Object(N.jsxs)(ue,{children:[Object(N.jsx)(fe,{children:"Medium"}),e.data.map((function(e){return Object(N.jsx)(be,{href:"#",children:Object(N.jsx)(se,{children:Object(N.jsxs)("div",{style:{fontWeight:"600",color:"#66c2ff"},children:[" ",e.attribute," "]})})})}))]}),Object(N.jsxs)(ue,{children:[Object(N.jsx)(fe,{children:"Details"}),e.data.map((function(e){return Object(N.jsx)(be,{href:"#",children:Object(N.jsx)("i",{className:"fab fa-facebook-f",children:Object(N.jsx)("span",{style:{marginLeft:"10px",fontWeight:"bold"},children:e.value})})})}))]})]})})]})},se=ie.a.div(J||(J=Object(ce.a)(["\n        text-align: center,\n\t\tjustify-content:center,\n\t\twidth:100%,\n\t\tfont-weight:400,\n\t\tmargin-top:1%,\n\t\tdisplay:flex,\n        flex-direction: row\n"]))),le=ie.a.div(_||(_=Object(ce.a)(["\n    padding: 80px 60px;\n    bottom: 0;\n    @media (max-width: 1000px) {\n        padding: 70px 30px;\n    }\n"]))),de=ie.a.div(K||(K=Object(ce.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmax-width: 1000px;\n    margin-top: -8%;\n\t/*margin: 0 auto;*/\n\t/* background: red; */\n\t@media (max-width:768px){\n\t\tdisplay : none;\n\t}\n"]))),ue=ie.a.div(Q||(Q=Object(ce.a)(["\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    margin-left: 60px;\n"]))),je=ie.a.div(V||(V=Object(ce.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill,\n                            minmax(185px, 1fr));\n    grid-gap: 10px;\n"]))),be=ie.a.a(X||(X=Object(ce.a)(['\n    color : black;\n    margin-bottom: 20px;\n    font-size: 15px;\n    text-decoration: none;\n    font-family:"Comic Sans MS"\n    &:hover {\n        color: green;\n        transition: 200ms ease-in;\n    }\n']))),fe=ie.a.p(Y||(Y=Object(ce.a)(['\n    font-size: 24px;\n    color: #fff;\n    margin-bottom: 40px;\n    font-weight: bold;\n    font-family:"Comic Sans MS"\n']))),ge=a(96),he=a.n(ge),me=Object(A.a)((function(e){return{location:{textAlign:"center",justifyContent:"center",width:"100%",ontWeight:"400",marginTop:"1%",display:"flex"}}}));var pe=function(e){var t=me();return Object(N.jsx)("div",{children:Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{style:{textAlign:"center",width:"100%"},children:Object(N.jsx)("img",{src:e.data.picture.large,alt:"Avatar",style:{width:"200px",borderRadius:"50%"}})}),Object(N.jsx)("div",{style:{textAlign:"center",width:"100%",fontWeight:"700",color:"#f50057"},children:e.data.name.title+" "+e.data.name.first+" "+e.data.name.last}),Object(N.jsx)("div",{style:{textAlign:"center",width:"100%",fontWeight:"700",color:"#66c2ff",marginTop:"1%"},children:e.data.email}),Object(N.jsxs)("div",{className:t.location,children:[Object(N.jsx)("div",{children:Object(N.jsx)(he.a,{})}),Object(N.jsxs)("div",{children:[" ",e.data.location.city+", "+e.data.location.country," "]})]})]})})},Oe=Object(A.a)((function(e){return{location:{textAlign:"center",justifyContent:"center",width:"100%",ontWeight:"400",marginTop:"1%",display:"flex"}}}));var xe=function(e){var t=Object(b.b)(),a=(Oe(),Object(b.c)((function(e){return e.protfolioReducer.todoRequiredDialog}))),r=Object(n.useState)(null),c=Object(o.a)(r,2),i=c[0],s=c[1];function l(){return t({type:M})}return Object(n.useEffect)((function(){if(a.data){var e=[],t=a.data,n=new Date(t.dob.date),r=new Date(t.registered.date);e.push({attribute:"User Name",value:t.login.username}),e.push({attribute:"Date of birth",value:n.toLocaleDateString("en-IN")}),e.push({attribute:"Age",value:t.dob.age}),e.push({attribute:"Phone No",value:t.phone}),e.push({attribute:"Cell Phone",value:t.cell}),e.push({attribute:"Registered",value:r.toLocaleDateString("en-IN")}),console.log("Details",e),s(e)}}),[a.data]),Object(N.jsxs)(ee.a,Object(f.a)(Object(f.a)({},a.props),{},{onClose:l,fullWidth:!0,maxWidth:"md",children:[Object(N.jsx)(ae.a,{style:{height:"50vh"},children:Object(N.jsx)(ne.a,{id:"alert-dialog-description",children:a.data&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(pe,{data:a.data}),Object(N.jsx)(re.a,{variant:"inset"}),Object(N.jsx)("br",{}),i&&Object(N.jsx)(oe,{data:i})]})})}),Object(N.jsx)(te.a,{children:Object(N.jsx)(I.a,{variant:"contained",color:"secondary",onClick:l,children:"Close"})})]}))},ve=(a(143),Object(A.a)((function(e){return{loader:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},searchbox:{width:"100%",textAlign:"center",marginTop:"5%",marginBottom:"-5%"},searchbutton:{marginLeft:"5px",marginTop:"1px"}}})));var ye=function(){var e=ve(),t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){j.a.get("https://randomuser.me/api/?results=20&seed=1").then((function(e){console.log(e.data.results),c(e.data.results)})).catch((function(e){console.log(e)}))}),[]),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{children:[r&&Object(N.jsx)(Z,{userdata:r}),!r&&Object(N.jsx)("div",{className:e.loader,children:Object(N.jsx)($.a,{color:"secondary",size:100})}),Object(N.jsx)(xe,{})]})})},we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,222)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},Ce=a(64),Se={todoRequiredDialog:{props:{open:!1},data:null}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(f.a)(Object(f.a)({},e),{},{todoRequiredDialog:{props:{open:!0},data:t.payload}});case M:return Object(f.a)(Object(f.a)({},e),{},{todoRequiredDialog:{props:{open:!1},data:null}});default:return e}},ke=Object(Ce.a)({protfolioReducer:Pe}),Ne=Object(Ce.b)(ke);i.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(b.a,{store:Ne,children:Object(N.jsx)(ye,{})})}),document.getElementById("root")),we()}},[[144,1,2]]]);
//# sourceMappingURL=main.a7e73d50.chunk.js.map