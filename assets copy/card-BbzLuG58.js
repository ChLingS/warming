import{_ as n,a as s,b as c,d as t,t as r,g as o,j as l}from"./index-Dad-jVFN.js";const u={class:"card"},g={class:"image-container"},_=["src"],m={class:"card-body"},p=["href"],h={key:0,class:"card-date"},f={__name:"card",props:{title:{type:String,required:!0},perpar_url:{type:String,required:!1},description:{type:String,required:!0},imageUrl:{type:String,required:!0},date:{type:String,required:!0}},setup(e){const{proxy:i}=l(),d=a=>{a.target.src=i.$defaultImage};return(a,y)=>(s(),c("div",u,[t("div",g,[t("img",{src:e.imageUrl,onError:d},null,40,_)]),t("div",m,[t("h3",null,[t("a",{href:e.perpar_url,class:"card-title"},r(e.title),9,p)]),t("p",null,r(e.description),1),e.date?(s(),c("div",h,"Date: "+r(e.date),1)):o("",!0)])]))}},q=n(f,[["__scopeId","data-v-ce4200f9"]]);export{q as c};
