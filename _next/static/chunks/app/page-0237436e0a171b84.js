(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4875:function(e,t,o){Promise.resolve().then(o.bind(o,443))},443:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return x},exportToExcel:function(){return f}});var r=o(3827);o(703);var s=o(8792),a=o(6142),n=o(9191),l=o(7207),c=o.n(l);let d=(0,a.ZF)({apiKey:"AIzaSyA_5J5o0BG-sxcLQPZAmBow7wngUY59Wew",authDomain:"sitegoldenpsycho.firebaseapp.com",projectId:"sitegoldenpsycho",storageBucket:"sitegoldenpsycho.appspot.com",messagingSenderId:"525071402442",appId:"1:525071402442:web:be8d1035e43d506181fb33"}),i=(0,n.ad)(d),u=async()=>(console.log("object"),{props:{documents:(await (0,n.PL)((0,n.hJ)(i,"data"))).docs.map(e=>({id:e.id,data:e.data()}))}});var m=o(2599),h=o(4090);o(7907);var p=e=>{let{isOpen:t,onClose:o,onConfirm:s}=e,[a,n]=(0,h.useState)("");return(0,r.jsx)("div",{style:{display:t?"flex":"none",flexDirection:"column"},children:(0,r.jsxs)("div",{className:" justify-center items-center flex flex-col mt-3 [&>*]:m-1",children:[(0,r.jsx)("h2",{children:"Mot de passe"}),(0,r.jsx)("input",{type:"password",value:a,onChange:e=>n(e.target.value),className:" text-black rounded-md"}),(0,r.jsxs)("div",{className:"[&>*]:m-2",children:[(0,r.jsx)("button",{onClick:()=>{"er8iws3;qf"===a?s():alert("Incorrect password!")},children:"Confirmer"}),(0,r.jsx)("button",{onClick:o,children:"Annuler"})]})]})})};let f=e=>{let t=new(c()).Workbook,o=t.addWorksheet("Trouve"),r=t.addWorksheet("Erreur"),s=t.addWorksheet("Score");console.log(e);let a=["ID",...Array.from({length:30},(e,t)=>(t+1).toString())];o.addRow(a),o.addRow([]),o.addRow(["Trouves"]),e.props.documents.forEach(e=>{console.log("items",e);let t=[e.id,...Array.from({length:30},(t,o)=>e.data.stats[o+1].founds+"/"+e.data.stats[o+1].tbf||0)];o.addRow(t).eachCell(e=>{e.alignment={horizontal:"center",vertical:"middle"}})}),r.addRow(a),r.addRow(["Erreurs"]),e.props.documents.forEach(e=>{let t=[e.id,...Array.from({length:30},(t,o)=>e.data.stats[o+1].errors||0)];r.addRow(t).eachCell(e=>{e.alignment={horizontal:"center",vertical:"middle"}})}),s.addRow(a),s.addRow(["Scores"]),e.props.documents.forEach(e=>{let t=[e.id,...Array.from({length:30},(t,o)=>e.data.stats[o+1].score||0)],o=t.slice(1).reduce((e,t)=>e+t,0);t.push(o),s.addRow(t).eachCell(e=>{e.alignment={horizontal:"center",vertical:"middle"}})}),t.xlsx.writeBuffer().then(e=>{let t=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,m.saveAs)(t,"stats.xlsx")}).catch(e=>{console.error("Error exporting to Excel:",e)})};function x(){let[e,t]=(0,h.useState)(!1),[o,a]=(0,h.useState)(""),[n,l]=(0,h.useState)(!1);return(0,r.jsxs)("main",{className:"flex flex-col items-center justify-center p-24 h-screen [&>*]:m-4 ",children:[(0,r.jsx)("h1",{className:" text-5xl pb-24",children:"Accueuil"}),(0,r.jsx)("input",{type:"text",value:o,placeholder:"Nom",onChange:e=>a(e.target.value),className:" text-black rounded-md p-2"}),(0,r.jsx)(s.default,{href:{pathname:"/testing",query:{pseudo:o}},className:" bg-green-500 p-3 rounded-md",children:"Commencer"}),(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,r.jsx)("button",{onClick:()=>{l(!0)},children:"Download Data"}),(0,r.jsx)(p,{isOpen:n,onClose:()=>{l(!1)},onConfirm:()=>{u().then(e=>{console.log("docs",e),t(!0),f(e),t(!1)}).catch(e=>{console.error("Error fetching data:",e)}),console.log("Password confirmed"),l(!1)}})]})]})}}},function(e){e.O(0,[113,837,769,971,69,744],function(){return e(e.s=4875)}),_N_E=e.O()}]);