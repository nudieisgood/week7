import{r as i,a as E,h as f,o as d,c as r,i as n,b as e,F as $,j as L,e as M,d as p,m as N,k as C,f as w,v as I,q as b}from"./index-KgTiI9a3.js";import{a as _}from"./axios-G2rPRu76.js";const D={class:"container"},R={class:"mt-4"},S={class:"text-end"},T={key:0,class:"fas fa-spinner fa-pulse"},z={key:1},O={class:"table align-middle"},P=e("thead",null,[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量/單位"),e("th",null,"單價")])],-1),A=["onClick"],G={key:0,class:"fas fa-spinner fa-pulse"},H={key:1},J=e("div",{class:"text-success"},"已套用優惠券",-1),K={class:"input-group input-group-sm"},Q={class:"input-group mb-3"},W=["onUpdate:modelValue","onBlur","disabled"],X={class:"input-group-text",id:"basic-addon2"},Y={class:"text-end"},Z=e("small",{class:"text-success"},"折扣價：",-1),ee=e("td",{colspan:"3",class:"text-end"},"總計",-1),se={class:"text-end"},ae=e("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),te={class:"text-end text-success"},le={class:"my-5 row justify-content-center"},oe={class:"mb-3"},ne=e("label",{for:"email",class:"form-label"},"Email",-1),de={class:"mb-3"},re=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),ce={class:"mb-3"},ie=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),ue={class:"mb-3"},me=e("label",{for:"address",class:"form-label"},"收件人地址",-1),pe={class:"mb-3"},_e=e("label",{for:"message",class:"form-label"},"留言",-1),ve=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1),ge={__name:"CartView",setup(he){const c=i({loadingItem:""}),g=i(!1),y=i(!1),u=i({}),k=i(null),l=i({user:{name:"",email:"",tel:"",address:""},message:""}),q=async()=>{g.value=!0;try{const a=await _.delete("https://vue3-course-api.hexschool.io/v2/api/jeremychan/carts");alert(a.data.message),m()}catch(a){alert(a.response.data.message)}g.value=!1},F=async a=>{c.value.loadingItem=a;try{const s=await _.delete(`https://vue3-course-api.hexschool.io/v2/api/jeremychan/cart/${a}`);alert(s.data.message),m()}catch(s){alert(s.response.data.message)}c.value.loadingItem=""},j=async a=>{c.value.loadingItem=a.id;const s={product_id:a.product_id,qty:a.qty};try{await _.put(`https://vue3-course-api.hexschool.io/v2/api/jeremychan/cart/${a.id}`,{data:s}),c.value.loadingItem="",m()}catch(x){alert(x.response.data.message)}},m=async()=>{y.value=!0;try{const a=await _.get("https://vue3-course-api.hexschool.io/v2/api/jeremychan/cart");u.value=a.data.data}catch(a){alert(a.response.data.message)}y.value=!1},U=async()=>{const a=l.value;try{const s=await _.post("https://vue3-course-api.hexschool.io/v2/api/jeremychan/order",{data:a});alert(s.data.message),k.value.resetForm(),m()}catch(s){alert(s.response.data.message)}};return E(()=>{m()}),(a,s)=>{const x=f("loadingVue"),v=f("VField"),h=f("ErrorMessage"),B=f("VForm");return d(),r($,null,[n(x,{active:y.value},null,8,["active"]),e("div",D,[e("div",R,[e("div",S,[e("button",{class:"btn btn-outline-danger",type:"button",onClick:q},[g.value?(d(),r("i",T)):(d(),r("span",z,"清空購物車"))])]),e("table",O,[P,e("tbody",null,[u.value.carts?(d(!0),r($,{key:0},L(u.value.carts,(t,o)=>(d(),r("tr",{key:o},[e("td",null,[e("button",{onClick:V=>F(t.id),type:"button",class:"btn btn-outline-danger btn-sm"},[c.value.loadingItem===t.id?(d(),r("i",G)):(d(),r("span",H,"x"))],8,A)]),e("td",null,[C(p(t.product.title)+" ",1),J]),e("td",null,[e("div",K,[e("div",Q,[w(e("input",{"onUpdate:modelValue":V=>t.qty=V,onBlur:V=>j(t),disabled:c.value.loadingItem===t.id,min:"1",type:"number",class:"form-control"},null,40,W),[[I,t.qty,void 0,{number:!0}]]),e("span",X,p(t.product.unit),1)])])]),e("td",Y,[Z,C(" "+p(t.final_total),1)])]))),128)):M("",!0)]),e("tfoot",null,[e("tr",null,[ee,e("td",se,p(u.value.total),1)]),e("tr",null,[ae,e("td",te,p(u.value.final_total),1)])])])]),e("div",le,[n(B,{ref_key:"formRef",ref:k,class:"col-md-6",onSubmit:U},{default:N(({errors:t})=>[e("div",oe,[ne,n(v,{id:"email",name:"email",type:"email",class:b(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.value.user.email,"onUpdate:modelValue":s[0]||(s[0]=o=>l.value.user.email=o)},null,8,["class","modelValue"]),n(h,{name:"email",class:"invalid-feedback"})]),e("div",de,[re,n(v,{id:"name",name:"姓名",type:"text",class:b(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.value.user.name,"onUpdate:modelValue":s[1]||(s[1]=o=>l.value.user.name=o)},null,8,["class","modelValue"]),n(h,{name:"姓名",class:"invalid-feedback"})]),e("div",ce,[ie,n(v,{id:"tel",name:"電話",type:"text",class:b(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:"required",modelValue:l.value.user.tel,"onUpdate:modelValue":s[2]||(s[2]=o=>l.value.user.tel=o)},null,8,["class","modelValue"]),n(h,{name:"電話",class:"invalid-feedback"})]),e("div",ue,[me,n(v,{id:"address",name:"地址",type:"text",class:b(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.value.user.address,"onUpdate:modelValue":s[3]||(s[3]=o=>l.value.user.address=o)},null,8,["class","modelValue"]),n(h,{name:"地址",class:"invalid-feedback"})]),e("div",pe,[_e,w(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=o=>l.value.message=o)},null,512),[[I,l.value.message]])]),ve]),_:1},512)])])],64)}}};export{ge as default};