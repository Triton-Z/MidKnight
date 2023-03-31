const canvas=(e,n)=>{for(let t=0;t<n;t++){for(let l=0;l<e;l++){let a=document.createElement("span");a.innerHTML="E",a.id=`${l} ${t}`,document.body.appendChild(a)}let d=document.createElement("br");document.body.appendChild(d)}};

window.onload = canvas(200, 200);
