import{_ as f,g as h,r as c,c as d,b as e,d as v,e as w,s as g,f as l,v as p,o as u,p as b,k as x}from"./index-jCLrbeBf.js";import{a as k}from"./axios-G2rPRu76.js";const r=n=>(b("data-v-6843e2af"),n=n(),x(),n),y={class:"container"},V={class:"row justify-content-center"},S=r(()=>e("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1)),I={key:0,class:"text-danger"},B={class:"col-8"},D={class:"form-floating mb-3"},M=r(()=>e("label",{for:"username"},"Email address",-1)),$={class:"form-floating"},q=r(()=>e("label",{for:"password"},"Password",-1)),E=r(()=>e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1)),L={__name:"LoginView",setup(n){const m=h(),o=c({username:"",password:""}),i=c(""),_=async()=>{k.post("https://vue3-course-api.hexschool.io/v2/admin/signin",o.value).then(t=>{const s=t.data.token,a=t.data.expired;document.cookie=`token=${s}`,document.cookie=`expDate=${a}`,m.push("/admin/products")}).catch(t=>{i.value=t.data.message})};return(t,s)=>(u(),d("div",y,[e("div",V,[S,i.value?(u(),d("h3",I,v(i.value),1)):w("",!0),e("div",B,[e("form",{id:"form",class:"form-signin",onSubmit:g(_,["prevent"])},[e("div",D,[l(e("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=a=>o.value.username=a)},null,512),[[p,o.value.username]]),M]),e("div",$,[l(e("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":s[1]||(s[1]=a=>o.value.password=a)},null,512),[[p,o.value.password]]),q]),E],32)])])]))}},U=f(L,[["__scopeId","data-v-6843e2af"]]);export{U as default};
