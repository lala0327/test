import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{o as s,c as r,a as l,b as n,n as c,d as m,F as d,r as g,e as u,t as w}from"./index-d95f00d2.js";const v={name:"Bar",data(){return{isOpenBurger:!1,burgerList:[{title:"test",path:"/test"}]}},computed:{isShowBack(){return this.$route.path!=="/home"&&this.$route.matched.length>=2}},watch:{},methods:{}},_={class:"center relative h-full w-full flex-col overflow-hidden"},k={class:"flex h-10 w-full items-center justify-between bg-sky-800 px-2 py-1"},B={class:"h-full w-full"},b=["onClick"];function x(i,t,y,C,e,p){const a=u("font-awesome-icon"),f=u("router-view");return s(),r("div",_,[l("div",k,[n(a,{icon:"fa-chevron-left",class:c(["h-full text-white",p.isShowBack?"cursor-pointer opacity-100":"pointer-events-none cursor-default opacity-0"]),onClick:t[0]||(t[0]=()=>i.$router.back())},null,8,["class"]),n(a,{icon:"fa-bars",class:"h-full cursor-pointer text-white",onClick:t[1]||(t[1]=()=>e.isOpenBurger=!e.isOpenBurger)})]),l("div",B,[n(f)]),e.isOpenBurger?(s(),r("div",{key:0,class:"absolute right-0 top-0 h-full w-full",onClick:t[2]||(t[2]=()=>e.isOpenBurger=!1)})):m("",!0),l("div",{class:c(["absolute top-0 h-full w-52 bg-slate-300 pt-10 transition-all",e.isOpenBurger?"right-0":"-right-52"])},[(s(!0),r(d,null,g(e.burgerList,o=>(s(),r("div",{key:o,class:"flex h-10 w-full cursor-pointer items-center justify-start px-3 text-xl font-black hover:bg-slate-200 active:bg-slate-100 active:opacity-80",onClick:()=>{e.isOpenBurger=!1,i.$router.push(o.path)}},w(o.title),9,b))),128))],2)])}const N=h(v,[["render",x]]);export{N as default};
