import{o,f as u,w as s,a as l,t as d,g as _,b as f,u as t,_ as n,h as c,d as h,O as m,R as x,c as w}from"./index-701bb48c.js";const p={class:"center h-full w-full flex-col"},y={class:"center w-full flex-col rounded-t-3xl bg-red-500 py-3 pt-5 text-2xl font-black text-white"},g={class:"center w-full flex-col p-5"},k={class:"center mt-3 w-full"},v={name:"VueAlert"},V=Object.assign(v,{props:{title:{type:String,default:"測試用"},isOther:{type:Boolean,defalut:!1},otherText:{type:String,default:""},otherFunc:{type:Function,default:()=>{}}},setup(e){return(a,i)=>(o(),u(t(m),{name:"VueAlert","content-transition":"vfm-fade","overlay-transition":"vfm-fade",class:"center flex-col","content-class":"w-4/5 max-w-xl bg-white rounded-3xl"},{default:s(()=>[l("div",p,[l("div",y,d(e.title),1),l("div",g,[_(a.$slots,"default"),l("div",k,[f(t(n),{class:"w-full",color:"slate"},{default:s(()=>[c(" 返回 ")]),_:1}),e.isOther?(o(),u(t(n),{key:0,class:"ml-3 w-full",color:"red",onClick:e.otherFunc},{default:s(()=>[c(d(e.otherText),1)]),_:1},8,["onClick"])):h("",!0)])])])]),_:3}))}}),b={class:"flex h-full w-full items-center justify-evenly"},B={name:"Home",data(){return{a:1}},computed:{isShowBack(){return this.$route.matched.length>=3}},watch:{},mounted(){},methods:{}},$=Object.assign(B,{setup(e){const{open:a}=x({component:V,slots:{default:"test"}});return(i,r)=>(o(),w("div",b,[f(t(n),{onClick:r[0]||(r[0]=()=>t(a)())},{default:s(()=>[c(" Test VFM ")]),_:1})]))}});export{$ as default};
