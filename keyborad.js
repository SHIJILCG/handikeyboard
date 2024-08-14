let thedelaytime=400;
let setimer=null;
let i=0;
let j=0;
let k=0;
let childvalue;
let arr=[];
let arr2=[];
let flag=1;
let leftclicker=0;
let clickcount=0;
let shower=document.getElementById('theaddress');
fetch('data.json')
 .then( (response)=> response.json())
 .then((data=>{
      creatingbutton(data.mainbody.keyboradValues);
      mainfuncion(data.mainbody.keyboradValues);
      
      
 }))
 function creatingbutton(items){
       flag = flag === 0 ?  flag = 1 : flag = 0;
        const parent=document.getElementsByClassName('keyborad-inner')[0];
        parent.innerHTML='';
        for(let item of items){
            parent.innerHTML +=` 
                    <div class="keyborad-button-parent">
                        <button id="mybutton">${item}</button>
                    </div>
            `;
        }
        mainfuncion()
 }
 function mainfuncion(){
     let buttonparent=document.getElementsByClassName('keyborad-button-parent');
     for(let item of buttonparent){
        let itemnearby =item.textContent.trim();
        if(itemnearby === ""){
            item.style.width='50%'
            item.style.margin='5px auto'
        }
        if(itemnearby === "⌫"){
            item.style.width='10%'
            item.style.margin='5px auto'
        }
        if(itemnearby === "⇪"){
            item.style.width='9.9%'
            item.style.margin='5px auto'
        }
        if(itemnearby === "send ➤" || itemnearby === "SEND ➤"){
            item.style.width='9.9%'
            item.style.margin='5px auto'
        }
     }
     
 }

function handleClick(event){
    clickcount++
    if(setimer !== null){
        clearTimeout(setimer);
        setimer=null;
        
    }

        setimer=setTimeout(()=>{
            if(clickcount == 2){
                dubbleclickhandling(event);
            }else if(clickcount == 1){
                singleclickhandlling(event);
            }else{
                trippleclickhandlling(event);
            }
            clickcount= 0;
        },thedelaytime)
   
}

function dubbleclickhandling(){
    console.log("doubbleclick")
    let val= childvalue[0];
    let valu2=val.innerHTML;
    if(valu2 === "↵ Enter"){
        makeanenter()

    }else if(valu2 === "⌫"){
        makeanbackspace()
    }
    else if(valu2 === "⇪"){
        makeancapeslock()
    }
    else if(valu2 === ""){
        makeanspace()
    }
    else if(valu2 === "Send ➤" || valu2 === "send ➤"){
        // sendthemessage()
    }
    else if(valu2 === "⇦"){
        movingleft()
    }  
    else if(valu2 === "⇧"){
         movingup()
    }
    else if(valu2 === "⇨"){
       
    }
    else if(valu2 === "⇩"){
        movingdown()
    }
    else{
       shower.innerHTML +=`${val.innerHTML}`;
    }
    

}
function singleclickhandlling(){
    console.log(i);
    console.log("singleclick")
    let keyboraditemes=document.getElementsByClassName('keyborad-button-parent');
    for(let keyitem of keyboraditemes){
       keyitem.style.background='rgb(228, 235, 235';
       for(let item of keyitem.children){
          item.style.background='rgb(228, 235, 235';
       }
    }
      if(i<=51){
        keyboraditemes[i].style.background='#6f6161';
        childvalue=keyboraditemes[i].children;
        childvalue[0].style.background='#6f6161';
        
      }else{
        i=0;
        singleclickhandlling();
      }
      i++;
}
function trippleclickhandlling(){
    let keyboraditemes=document.getElementsByClassName('keyborad-button-parent');
    for(let keyitem of keyboraditemes){
        keyitem.style.background='rgb(228, 235, 235';
        for(let item of keyitem.children){
           item.style.background='rgb(228, 235, 235';
        }
     }

    if(j===0){
        i=17;
        keyboraditemes[16].style.background='#6f6161';
        childvalue=keyboraditemes[16].children;
        childvalue[0].style.background='#6f6161';    
        
    }else if(j===1){
        
        i=35;
        keyboraditemes[34].style.background='#6f6161';
        childvalue=keyboraditemes[34].children;
        childvalue[0].style.background='#6f6161';   

    }
    else if(j===2){
        
        i=0;
        keyboraditemes[51].style.background='#6f6161';
        childvalue=keyboraditemes[51].children;
        childvalue[0].style.background='#6f6161';  

    }
    else if(j===3){
        
        i=51;
        keyboraditemes[50].style.background='#6f6161';
        childvalue=keyboraditemes[50].children;
        childvalue[0].style.background='#6f6161';  

    }
    else if(j===4){
        
        i=34;
        keyboraditemes[33].style.background='#6f6161';
        childvalue=keyboraditemes[33].children;
        childvalue[0].style.background='#6f6161';  

    }
    else if(j===5){
        
        i=16;
        keyboraditemes[15].style.background='#6f6161';
        childvalue=keyboraditemes[15].children;
        childvalue[0].style.background='#6f6161';     

    }
    else{ 
        
        i=1;
        keyboraditemes[0].style.background='#6f6161';
        childvalue=keyboraditemes[0].children;
        childvalue[0].style.background='#6f6161';   

    }

    if(j<=6){
        j++;
    }else{
        j=0;
    }
    
}
function makeanbackspace(){
    console.log("kjfkgjrj")
    let showerdata=document.getElementById('theaddress');
    let showedatacontent=showerdata.innerHTML;
    if(showedatacontent.length >0){
       let text=showedatacontent.slice(0,-1);
       console.log(text)
       showerdata.innerHTML=text;
    }
}
function makeancapeslock(){
    console.log(flag)
      if(flag === 0){
        let item=document.querySelectorAll('#mybutton');
        arr.length=0;
        for(it of item){
          arr.push(it.innerHTML.toUpperCase());
        }
        creatingbutton(arr);
        let keyboraditemes=document.getElementsByClassName('keyborad-button-parent');
        keyboraditemes[0].style.background='#6f6161';
        childvalue=keyboraditemes[0].children;
        childvalue[0].style.background='#6f6161';
     }else{  
        let item=document.querySelectorAll('#mybutton');
        arr.length=0;
        for(it of item){
             arr.push(it.innerHTML.toLowerCase());
        }
        creatingbutton(arr);
        let keyboraditemes=document.getElementsByClassName('keyborad-button-parent');
        keyboraditemes[0].style.background='#6f6161';
        childvalue=keyboraditemes[0].children;
        childvalue[0].style.background='#6f6161';
     }

}
function makeanenter(){
    shower.innerHTML+=`<br>`;
}
function makeanspace(){
    shower.innerHTML+=`&nbsp;`;
}
function movingup(){
    
    if(j===0){
        console.log("Enter the content");
        shower=document.getElementById('textshower');    
    }else if(j===1){
        
        console.log("Enter the  subject");
        shower=document.getElementById('thesubject'); 

    }else{ 
        
        console.log("Enter the receiver address");
        shower=document.getElementById('theaddress');
    }

    if(j<=3){
        j++;
    }else{
        j=0;
    }
}
function movingdown(){
   
    if(j===0){
        console.log("Enter the receiver address");
        shower=document.getElementById('theaddress');   
        
    }else if(j===1){
        
        console.log("Enter the  subject");
        shower=document.getElementById('thesubject'); 

    }else{ 
        
        console.log("Enter the content");
        shower=document.getElementById('textshower'); 

    }

    if(j<=3){
        j++;
    }else{
        j=0;
    }

}
function movingleft(){
     leftclicker++;
     arr2.length=0;
    arr2=[...shower.innerHTML];
    arr2.reverse();
    console.log(arr2[leftclicker-1]);
}
