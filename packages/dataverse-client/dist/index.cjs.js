"use strict";var e=require("axios");const t="";function r(e){switch(typeof e){case"string":if(!e.startsWith("?"))throw new Error("Query option must start with ?");return e;case"object":return function(e){const{select:r,filters:n,top:u,expands:c}=e,d=s(r),l=function(e=[]){const r=e.map((e=>function(e){const{type:t="and",conditions:r}=e,n=[];for(const e of r){const{operator:t="eq"}=e;a.includes(t)?n.push(i(e)):n.push(o(e))}return`(${n.join(` ${t} `)})`}(e)));return r.length>0?`$filter=${r.join(" and ")}`:t}(n),h=function(e=[]){const r=e.map((e=>`${e.attribute}(${s(e.select)})`));return r.length>0?`$expand=${r.join(",")}`:t}(c),p=function(e=[]){const r=e.map((e=>`${e.attribute} ${e.order??"asc"}`));return r.length>0?`$orderby=${r.join(",")}`:t}(e.orders),$=u?`$top=${u}`:null,f=[];d&&f.push(d);l&&f.push(l);$&&f.push($);h&&f.push(h);p&&f.push(p);return f.length>0?`?${f.join("&")}`:t}(e);case"undefined":return t;default:throw new Error("Invalid retrieve multiple options")}}function n(e){return r(e)}const a=["eq","ne","gt","ge","lt","le"];function s(e=[]){return e.length>0?`$select=${e.join(",")}`:t}function o(e){const{attribute:r,operator:n="eq",value:a}=e;let s=t;if(void 0!==a)if(Array.isArray(a)){s=`,PropertyValues=[${a.map((e=>`'${e}'`)).join(",")}]`}else s=`,PropertyValue='${a}'`;return`Microsoft.Dynamics.CRM.${n}(PropertyName='${r}'${s})`}function i(e){const{attribute:t,operator:r,value:n}=e;return`${t} ${r} ${"string"==typeof n?`'${n}'`:`${n}`}`}class u{constructor(t){this.client=e.create(t)}setTokenProvider(e){this.client.interceptors.request.use((async t=>{const r=await e.getToken();return null!=r&&null!=t.headers&&(t.headers.Authorization=`Bearer ${r}`),t}))}async request(e){try{return await this.client.request(e)}catch(e){if(e.isAxiosError){const t=e.response.data;if(null!=t.error){const e=t.error;throw new Error(e.message)}}throw new Error(e.message)}}}exports.DataverseClient=class{constructor(e,t){this.defaultHeaders={"OData-Version":"4.0","OData-MaxVersion":"4.0",Accept:"application/json","Content-Type":"application/json; charset=utf-8",Prefer:"odata.include-annotations=*"},this.preferRepresentationHeaders={Prefer:"return=representation"},this.options={apiVersion:"9.0",...t};const r=`${e.url}/api/data/v${this.options.apiVersion}/`;this.client=new u({baseURL:r}),this.client.setTokenProvider(e)}getMaxPageSizeHeader(e){return{Prefer:`odata.maxpagesize=${e}`}}async request(e){const{method:t,url:r,data:n,headers:a}=e;try{return await this.client.request({method:t,url:r,data:n,headers:{...this.defaultHeaders,...a}})}catch(e){throw new Error(e)}}async retrieveRecord(e,t,r){return(await this.request({method:"get",url:`${e}(${t})${n(r)}`})).data}async retrieveMultipleRecords(e,t,n){const a=await this.request({method:"get",url:`${e}${r(t)}`,headers:null==n?void 0:this.getMaxPageSizeHeader(n)});return{entities:a.data.value,nextLink:a.data["@odata.nextLink"]?.replace(/.+\?/,"?")}}async createRecord(e,t){return(await this.request({method:"post",url:e,data:t,headers:this.preferRepresentationHeaders})).data}async updateRecord(e,t,r){return(await this.request({method:"patch",url:`${e}(${t})`,data:r,headers:this.preferRepresentationHeaders})).data}async deleteRecord(e,t){await this.request({method:"delete",url:`${e}(${encodeURIComponent(t)})`})}async executeAction(e,t){return await this.request({method:"post",url:e,data:t})}};
