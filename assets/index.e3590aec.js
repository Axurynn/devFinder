var x=Object.defineProperty;var f=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var _=(n,r,e)=>r in n?x(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e,h=(n,r)=>{for(var e in r||(r={}))N.call(r,e)&&_(n,e,r[e]);if(f)for(var e of f(r))b.call(r,e)&&_(n,e,r[e]);return n};import{j as w,r as o,R as I,a as z}from"./vendor.7f4bae42.js";const S=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))m(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function e(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(l){if(l.ep)return;l.ep=!0;const s=e(l);fetch(l.href,s)}};S();const A="_app_ed2jx_1";var C={app:A};function u(n){localStorage.setItem("devFinder-theme",n),document.documentElement.className=n}function E(){localStorage.getItem("devFinder-theme")?localStorage.getItem("devFinder-theme")==="theme-light"?u("theme-light"):u("theme-dark"):u("theme-light")}const a=w.exports.jsx,c=w.exports.jsxs,k=o.exports.createContext(),y=({children:n})=>{const[r,e]=o.exports.useState("light");return a(k.Provider,{value:{changeTheme:r,setChangeTheme:e},children:n})},M="_home_1kuua_1",T="_inputContainer_1kuua_5",F="_searchIcon_1kuua_15",L="_input_1kuua_5",$="_button_1kuua_35",D="_card_1kuua_42",j="_profile_1kuua_49",q="_avatar_1kuua_56",H="_userInfos_1kuua_62",B="_name_1kuua_62",O="_login_1kuua_65",R="_text_1kuua_68",V="_userBio_1kuua_71",P="_notAvailable_1kuua_71",U="_accountDetails_1kuua_74",G="_info_1kuua_84",J="_networks_1kuua_93",K="_network_1kuua_93",W="_networkIcon_1kuua_97";var t={home:M,inputContainer:T,searchIcon:F,input:L,button:$,card:D,profile:j,avatar:q,userInfos:H,name:B,login:O,text:R,userBio:V,notAvailable:P,accountDetails:U,info:G,networks:J,network:K,networkIcon:W};function Q(n){return o.exports.createElement("svg",h({height:20,width:20,xmlns:"http://www.w3.org/2000/svg"},n),o.exports.createElement("g",{fill:"#4b6a9b"},o.exports.createElement("path",{d:"M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"})))}function X(n){return o.exports.createElement("svg",h({height:20,width:20,xmlns:"http://www.w3.org/2000/svg"},n),o.exports.createElement("path",{d:"M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z",fill:"#4b6a9b"}))}function Y(n){return o.exports.createElement("svg",h({height:24,width:25,xmlns:"http://www.w3.org/2000/svg"},n),o.exports.createElement("path",{d:"M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z",fill:"#0079ff"}))}function Z(n){return o.exports.createElement("svg",h({height:20,width:20,xmlns:"http://www.w3.org/2000/svg"},n),o.exports.createElement("path",{d:"M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z",fill:"#4b6a9b"}))}function ee(n){return o.exports.createElement("svg",h({height:20,width:20,xmlns:"http://www.w3.org/2000/svg"},n),o.exports.createElement("g",{fill:"#4b6a9b"},o.exports.createElement("path",{d:"M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"}),o.exports.createElement("path",{d:"M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"})))}const te=()=>{const[n,r]=o.exports.useState("octocat"),[e,m]=o.exports.useState({});o.exports.useEffect(()=>{l()},[]);const l=async()=>{try{const d=await(await fetch(`https://api.github.com/users/${n}`)).json();m(d),r("")}catch(i){console.log(i)}},s=[{name:"location",Icon:X},{name:"blog",Icon:ee},{name:"twitter_username",Icon:Z},{name:"company",Icon:Q}];return c("main",{className:t.home,children:[c("form",{className:t.inputContainer,onSubmit:i=>{i.preventDefault(),l()},children:[a("span",{className:t.searchIcon,children:a(Y,{})}),a("input",{type:"text",placeholder:"Search GitHub username...",className:t.input,value:n,onChange:i=>r(i.target.value)}),a("button",{type:"submit",className:t.button,children:"Search"})]}),e.message?c("div",{className:t.card,children:[c("div",{className:t.profile,children:[a("img",{className:t.avatar,src:e==null?void 0:e.avatar_url,alt:""}),a("div",{className:t.userInfos,children:a("h1",{className:t.name,children:"User not found"})})]}),a("p",{className:t.userBio,children:"'This profile has no bio'"}),c("div",{className:t.accountDetails,children:[c("p",{className:t.info,children:["repos ",a("span",{children:"?"})]}),c("p",{className:t.info,children:["followers ",a("span",{children:"?"})]}),c("p",{className:t.info,children:["following ",a("span",{children:"?"})]})]}),a("div",{className:t.networks,children:s.map(({name:i,Icon:d},g)=>c("p",{className:`${t.network} ${e[i]?null:t.notAvailable}`,children:[a("span",{className:t.networkIcon,children:a(d,{})}),e[i]?e[i]:"Not Available"]},g))})]}):c("div",{className:t.card,children:[c("div",{className:t.profile,children:[a("img",{className:t.avatar,src:e==null?void 0:e.avatar_url,alt:""}),c("div",{className:t.userInfos,children:[a("h1",{className:t.name,children:e==null?void 0:e.name}),c("a",{className:t.login,href:`https://github.com/${e==null?void 0:e.login}`,children:["@",e==null?void 0:e.login]}),c("p",{className:t.text,children:["Joined"," ",new Date(e==null?void 0:e.created_at).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}).split("v.").join("")]})]})]}),a("p",{className:`${t.userBio} ${e.bio?null:t.notAvailable}`,children:(e==null?void 0:e.bio)===null?"This profile has no bio":e==null?void 0:e.bio}),c("div",{className:t.accountDetails,children:[c("p",{className:t.info,children:["repos ",a("span",{children:e==null?void 0:e.public_repos})]}),c("p",{className:t.info,children:["followers ",a("span",{children:e==null?void 0:e.followers})]}),c("p",{className:t.info,children:["following ",a("span",{children:e==null?void 0:e.following})]})]}),a("div",{className:t.networks,children:s.map(({name:i,Icon:d},g)=>c("p",{className:`${t.network} ${e[i]?null:t.notAvailable}`,children:[a("span",{className:t.networkIcon,children:a(d,{})}),e[i]?e[i]:"Not Available"]},g))})]})]})},ae="_headerContainer_1h7qp_34",ne="_headerTitle_1h7qp_40";var v={"theme-light":"_theme-light_1h7qp_2","theme-dark":"_theme-dark_1h7qp_14",headerContainer:ae,headerTitle:ne};const oe="_container_i8qty_34",re="_icon_i8qty_43";var p={"theme-light":"_theme-light_i8qty_2","theme-dark":"_theme-dark_i8qty_14",container:oe,icon:re};function ce(n){return o.exports.createElement("svg",h({width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n),o.exports.createElement("g",{fill:"#FFF",fillRule:"nonzero"},o.exports.createElement("path",{d:"M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"})))}function le(n){return o.exports.createElement("svg",h({width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n),o.exports.createElement("path",{d:"M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z",fill:"#697C9A",fillRule:"nonzero"}))}function se(){const[n,r]=o.exports.useState("dark");let e=localStorage.getItem("devFinder-theme");const{changeTheme:m,setChangeTheme:l}=o.exports.useContext(k),s=()=>{localStorage.getItem("devFinder-theme")==="theme-dark"?(u("theme-light"),r("light")):(u("theme-dark"),r("dark"))};return o.exports.useEffect(()=>{localStorage.getItem("devFinder-theme")==="theme-dark"?(r("dark"),l(!0)):(r("light"),l(!1))},[e]),c("div",{className:p.container,children:[a("span",{onClick:s,className:p.switchTheme,children:localStorage.getItem("devFinder-theme")==="theme-dark"?"Light":"Dark"}),localStorage.getItem("devFinder-theme")==="theme-dark"?a(ce,{className:p.icon,onClick:s}):a(le,{className:p.icon,onClick:s})]})}const ie=()=>c("header",{className:v.headerContainer,children:[a("h1",{className:v.headerTitle,children:"devFinder"}),a(se,{})]});function he(){return o.exports.useEffect(()=>{E()},[]),a("div",{className:C.app,children:c(y,{children:[a(ie,{}),a(te,{})]})})}I.render(a(z.StrictMode,{children:a(he,{})}),document.getElementById("root"));
