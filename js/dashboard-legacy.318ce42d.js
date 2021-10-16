"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[966],{4791:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});n(8309);var l=n(6252),a=(0,l.Uk)("Panel de Control"),u={class:"grid grid-cols-1 xl:grid-cols-2 gap-3 mb-6"},r={class:"flex flex-col justify-between"},i={class:"flex flex-col justify-between overflow-auto h-96"};function o(e,t,n,o,c,s){var d=(0,l.up)("title-bar"),m=(0,l.up)("hero-bar"),p=(0,l.up)("card-widget"),g=(0,l.up)("card-client-bar"),b=(0,l.up)("title-sub-bar"),f=(0,l.up)("employees-table"),h=(0,l.up)("card-component"),v=(0,l.up)("main-section");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(d,{"title-stack":o.titleStack},null,8,["title-stack"]),(0,l.Wm)(m,null,{default:(0,l.w5)((function(){return[a]})),_:1}),(0,l.Wm)(v,null,{default:(0,l.w5)((function(){return[(0,l._)("div",u,[(0,l._)("div",r,[(0,l.Wm)(p,{trend:"12%","trend-type":"up",color:"text-green-500",class:"mb-3",icon:o.mdiAccountMultiple,number:512,label:"Presentes"},null,8,["icon"]),(0,l.Wm)(p,{trend:"12%","trend-type":"down",color:"text-blue-500",icon:o.mdiAccountMultiple,number:7770,label:"Ausentes"},null,8,["icon"])]),(0,l._)("div",i,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.employeesBarItems,(function(e){return(0,l.wg)(),(0,l.j4)(g,{key:e.id,name:e.name,login:e.login,date:e.created,progress:e.progress},null,8,["name","login","date","progress"])})),128))])]),(0,l.Wm)(b,{icon:o.mdiAccountMultiple,title:"Empleados"},null,8,["icon"]),(0,l.Wm)(h,{icon:o.mdiMonitorCellphone,"has-table":""},{default:(0,l.w5)((function(){return[(0,l.Wm)(f)]})),_:1},8,["icon"])]})),_:1})],64)}n(7042);var c=n(2262),s=n(4250),d=n(5317),m=n(8729),p=n(1477),g=n(7182),b=n(6978),f=n(5436),h=n(3577),v={key:0},k=(0,l._)("th",null,null,-1),w=(0,l._)("th",null,"Nombre(s)",-1),_=(0,l._)("th",null,"Apellido(s)",-1),y=(0,l._)("th",null,"Dirección",-1),C=(0,l._)("th",null,"Fecha",-1),x=(0,l._)("th",null,null,-1),M={class:"image-cell"},H={"data-label":"FirstName"},D={"data-label":"LastName"},P={"data-label":"Direction"},Z={key:0,class:"bg-green-500 text-white rounded-xl px-3 py-1"},A={key:1,class:"bg-red-500 text-white rounded-xl px-3 py-1"},W={"data-label":"Created"},F=["title"],B={class:"table-pagination"};function j(e,t,n,a,u,r){var i=(0,l.up)("checkbox-cell"),o=(0,l.up)("user-avatar"),c=(0,l.up)("jb-button"),s=(0,l.up)("jb-buttons"),d=(0,l.up)("level");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("table",null,[(0,l._)("thead",null,[(0,l._)("tr",null,[n.checkable?((0,l.wg)(),(0,l.iD)("th",v)):(0,l.kq)("",!0),k,w,_,y,C,x])]),(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.itemsPaginated,(function(e){return(0,l.wg)(),(0,l.iD)("tr",{key:e.id},[n.checkable?((0,l.wg)(),(0,l.j4)(i,{key:0,onChecked:function(t){return a.checked(t,e)}},null,8,["onChecked"])):(0,l.kq)("",!0),(0,l._)("td",M,[(0,l.Wm)(o,{username:e.firstName,class:"image"},null,8,["username"])]),(0,l._)("td",H,(0,h.zw)(e.firstName),1),(0,l._)("td",D,(0,h.zw)(e.lastName),1),(0,l._)("td",P,[-1*e.nextDirection>0?((0,l.wg)(),(0,l.iD)("span",Z," Presente ")):((0,l.wg)(),(0,l.iD)("span",A," Ausente "))]),(0,l._)("td",W,[(0,l._)("small",{class:"text-gray-500 dark:text-gray-400",title:e.createdAt},(0,h.zw)(e.createdAt),9,F)])])})),128))])]),(0,l._)("div",B,[(0,l.Wm)(d,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(s,null,{default:(0,l.w5)((function(){return[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pagesList,(function(e){return(0,l.wg)(),(0,l.j4)(c,{key:e,active:e===a.currentPage,label:e+1,outline:a.darkMode,small:"",onClick:function(t){return a.currentPage=e}},null,8,["active","label","outline","onClick"])})),128))]})),_:1}),(0,l._)("small",null,"Página "+(0,h.zw)(a.currentPageHuman)+" de "+(0,h.zw)(a.numPages),1)]})),_:1})])],64)}n(4747);var z=n(7428),N=n(7234),S=n(5841),T=n(5155),E=n(8133),K={name:"EmployeesTable",components:{CheckboxCell:z.Z,Level:N.Z,JbButtons:S.Z,JbButton:T.Z,UserAvatar:E.Z},props:{checkable:Boolean},setup:function(){var e=(0,s.oR)(),t=(0,c.Fl)((function(){return e.state.darkMode})),n=(0,c.Fl)((function(){return e.state.employees})),l=(0,c.iH)(!1),a=(0,c.iH)(!1),u=(0,c.iH)(10),r=(0,c.iH)(0),i=(0,c.iH)([]),o=(0,c.Fl)((function(){return n.value.slice(u.value*r.value,u.value*(r.value+1))})),m=(0,c.Fl)((function(){return Math.ceil(n.value.length/u.value)})),p=(0,c.Fl)((function(){return r.value+1})),g=(0,c.Fl)((function(){for(var e=[],t=0;t<m.value;t++)e.push(t);return e})),b=function(e,t){var n=[];return e.forEach((function(e){t(e)||n.push(e)})),n},f=function(e,t){e?i.value.push(t):i.value=b(i.value,(function(e){return e.id===t.id}))};return{darkMode:t,isModalActive:l,isModalDangerActive:a,currentPage:r,currentPageHuman:p,numPages:m,checkedRows:i,itemsPaginated:o,pagesList:g,checked:f,mdiEye:d.rgx,mdiTrashCan:d.QGK}}},L=n(3744);const Y=(0,L.Z)(K,[["render",j]]);var R=Y,q=n(3476),J=n(129),O={name:"Home",components:{TitleSubBar:J.Z,MainSection:m.Z,EmployeesTable:R,CardComponent:f.Z,CardWidget:b.Z,HeroBar:g.Z,TitleBar:p.Z,CardClientBar:q.Z},setup:function(){var e=(0,s.oR)(),t=(0,c.iH)(["Admin","Dashboard"]),n=(0,c.Fl)((function(){return e.state.clients.slice(0,5)})),l=(0,c.Fl)((function(){return e.state.darkMode}));return{titleStack:t,employeesBarItems:n,darkMode:l,mdiAccountMultiple:d.zr,mdiCartOutline:d.JKU,mdiChartTimelineVariant:d.M7S,mdiFinance:d.bwl,mdiMonitorCellphone:d.qOQ,mdiReload:d.vS,mdiGithub:d.LcO,mdiChartPie:d.Cld}}};const U=(0,L.Z)(O,[["render",o]]);var G=U}}]);
//# sourceMappingURL=dashboard-legacy.318ce42d.js.map