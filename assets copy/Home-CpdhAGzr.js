import{r as m,o as v,_ as p,c as b,a as c,b as d,d as t,F as w,e as y,w as k,u as n,f as s,g as S,t as x,h as o,n as N}from"./index-Dad-jVFN.js";import{c as I}from"./card-BbzLuG58.js";import{v as $,s as i,a as u}from"./vue-kinesis.esm-BNjanORW.js";function C(){const _=m([]);return v(async()=>{try{const a=await fetch("/warming/Json/liveData.json");if(!a.ok)throw new Error("Network response was not ok");const r=await a.json();_.value=r}catch(a){console.error("Error fetching papers:",a)}}),{papers:_}}const D={class:"centered-list"},T={key:0,class:"load-more"},L={__name:"live",setup(_){const{papers:l}=C(),a=m(10),r=b(()=>l.value.slice(0,a.value)),e=()=>{a.value+=10};return(U,g)=>(c(),d("div",null,[g[0]||(g[0]=t("div",{class:"title"},[t("h2",null,"动态"),t("div",{style:{width:"80%",height:"2px","background-color":"#ccc",margin:"20px auto 0","border-radius":"1px"}})],-1)),t("ul",D,[(c(!0),d(w,null,y(r.value,(f,h)=>k((c(),d("li",{key:h,class:"centered-item"},[s(I,{title:f.title,description:f.abstract,imageUrl:f.image_url,date:f.date},null,8,["title","description","imageUrl","date"])])),[[n($)]])),128))]),n(l).length>r.value.length?(c(),d("div",T,[t("button",{onClick:e,class:"arrow-button"},"⬇️")])):S("",!0)]))}},j=p(L,[["__scopeId","data-v-5241d9d8"]]),B={class:"date"},M={__name:"getTime",setup(_){const l=m(""),a=()=>{const r=new Date,e={hour:"2-digit",minute:"2-digit"};l.value=r.toLocaleDateString("zh-CN",e)};return v(()=>{a(),setInterval(a,6e4)}),(r,e)=>(c(),d("div",B,[t("span",null,x(l.value),1)]))}},P=p(M,[["__scopeId","data-v-e7aebdd7"]]),V="/warming/assets/back-NA2fG_LB.jpg",z={class:"container"},E={class:"content"},H={style:{display:"flex",gap:"0.5rem","align-items":"center","justify-content":"center"}},F={class:"date"},G={__name:"Home",setup(_){const l=m(null),a=()=>{l.value.scrollIntoView({behavior:"smooth"})};return(r,e)=>(c(),d("div",z,[t("figure",{style:N({backgroundImage:`url(${n(V)})`}),class:"background-image"},[t("div",E,[t("div",H,[s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[0]||(e[0]=[t("h1",null,"M",-1)])),_:1})]),_:1}),s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[1]||(e[1]=[t("h1",null,"i",-1)])),_:1})]),_:1}),s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[2]||(e[2]=[t("h1",null,"n",-1)])),_:1})]),_:1}),s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[3]||(e[3]=[t("h1",null,"L",-1)])),_:1})]),_:1}),s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[4]||(e[4]=[t("h1",null,"a",-1)])),_:1})]),_:1}),s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[5]||(e[5]=[t("h1",null,"b",-1)])),_:1})]),_:1})]),e[6]||(e[6]=t("div",{style:{"font-family":"SourceHanSerifCN","font-size":"1.1rem"}},[t("span",{style:{"font-family":"'NovecentoSansWide', sans-serif"}},"MinLab"),t("span",null,"是一个江西师范大学地理与环境学院的"),t("span",{style:{"font-family":"'NovecentoSansWide', sans-serif"}},"GIS"),t("span",null,"研究团队")],-1))]),t("div",{class:"arrow-container"},[t("div",{class:"arrow",onClick:a})]),t("div",F,[s(P)])],4),t("div",{class:"target",ref_key:"targetSection",ref:l},null,512),s(j)]))}},q=p(G,[["__scopeId","data-v-c053bb8e"]]);export{q as default};
