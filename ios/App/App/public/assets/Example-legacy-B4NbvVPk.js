System.register(["./index-legacy-BVht0oRT.js"],(function(l,e){"use strict";var n,a,t,o,u,d,i,r,s,f,c,_,m,p,b,h,g,C,k,v,x,y,M,w,E,H,L;return{setters:[l=>{n=l.d,a=l.B,t=l.o,o=l.C,u=l.j,d=l.w,i=l.D,r=l.b,s=l.a,f=l.E,c=l.k,_=l.c,m=l.e,p=l.p,b=l.F,h=l.g,g=l.G,C=l.H,k=l.r,v=l.i,x=l.l,y=l.J,M=l.I,w=l.y,E=l.z,H=l.A,L=l.f}],execute:function(){const e=n({__name:"Modal",setup(l){const e=a(),n=()=>C.dismiss(null,"cancel"),k=()=>C.dismiss(e.value,"confirm");return(l,a)=>(t(),o(g,null,[u(i(m),null,{default:d((()=>[u(i(r),null,{default:d((()=>[u(i(s),{slot:"start"},{default:d((()=>[u(i(f),{color:"medium",onClick:n},{default:d((()=>a[1]||(a[1]=[c("Cancel")]))),_:1})])),_:1}),u(i(_),null,{default:d((()=>a[2]||(a[2]=[c("Modal")]))),_:1}),u(i(s),{slot:"end"},{default:d((()=>[u(i(f),{onClick:k,strong:!0},{default:d((()=>a[3]||(a[3]=[c("Confirm")]))),_:1})])),_:1})])),_:1})])),_:1}),u(i(h),{class:"ion-padding"},{default:d((()=>[u(i(p),null,{default:d((()=>[u(i(b),{"label-placement":"stacked",label:"Enter your name",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),placeholder:"Your name"},null,8,["modelValue"])])),_:1})])),_:1})],64))}});l("default",n({__name:"Example",setup(l){const n=a("This modal example uses the modalController to present and dismiss modals."),o=async()=>{const l=await C.create({component:e});l.present();const{data:a,role:t}=await l.onWillDismiss();"confirm"===t&&(n.value=`Hello, ${a}!`)};return(l,e)=>{const a=k("ion-router-outlet"),s=k("ion-icon"),p=k("ion-label"),b=k("ion-tab-button"),g=k("ion-tab-bar"),C=k("ion-tabs"),P=k("ion-footer");return t(),v(i(L),null,{default:d((()=>[u(i(m),null,{default:d((()=>[u(i(r),null,{default:d((()=>[u(i(M),{slot:"start"}),u(i(_),null,{default:d((()=>e[0]||(e[0]=[c("Modal")]))),_:1})])),_:1})])),_:1}),u(i(h),{class:"ion-padding"},{default:d((()=>[u(i(f),{expand:"block",onClick:o},{default:d((()=>e[1]||(e[1]=[c("Open Modal")]))),_:1}),x("p",null,y(n.value),1)])),_:1}),u(P,null,{default:d((()=>[u(i(r),null,{default:d((()=>[u(C,null,{default:d((()=>[u(a),u(g,{slot:"bottom"},{default:d((()=>[u(b,{tab:"home",href:"/home"},{default:d((()=>[u(s,{"aria-hidden":"true",icon:i(w)},null,8,["icon"]),u(p,null,{default:d((()=>e[2]||(e[2]=[c("Home")]))),_:1})])),_:1}),u(b,{tab:"Login",href:"/Login"},{default:d((()=>[u(s,{"aria-hidden":"true",icon:i(E)},null,8,["icon"]),u(p,null,{default:d((()=>e[3]||(e[3]=[c("Log-in Screen")]))),_:1})])),_:1}),u(b,{tab:"Profile",href:"/Profile"},{default:d((()=>[u(s,{"aria-hidden":"false",icon:i(H)},null,8,["icon"]),u(p,null,{default:d((()=>e[4]||(e[4]=[c("Profile Screen")]))),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}))}}}));