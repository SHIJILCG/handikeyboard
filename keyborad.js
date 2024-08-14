let thedelaytime=400;
let setimer=null;
let i=0;
let j=0;
let q=0;
let childvalue;
let arr=[];
let flag=1;
let flag2=0;
let clickcount=0;
let shower=document.getElementById('theaddress');
const setintervalid=setInterval(mainfuncion,100);
fetch('data.json')
 .then( (response)=> response.json())
 .then((data=>{
      creatingbutton(data.mainbody.keyboradValues);   
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
        if(flag2===0){
            cursoradder();
            flag2=1;
        }
        
 }
 function mainfuncion(){
      if (window.innerWidth > 1033){
        let buttonparent=document.getElementsByClassName('keyborad-button-parent');
      for(let item of buttonparent){
        let itemnearby =item.textContent.trim();
        if(itemnearby === ""){
            applystyle(item,'50%','5px auto')
        }
        if(itemnearby === "⌫"){
            applystyle(item,'10%','5px auto')
        }
        if(itemnearby === "⇪"){
            applystyle(item,'9.9%','5px auto')
        }
        if(itemnearby === "send ➤" || itemnearby === "SEND ➤"){
            applystyle(item,'9.9%','5px auto')
        }
     }
    }else if(window.innerWidth < 1033 && window.innerWidth > 800){

        let buttonparent=document.getElementsByClassName('keyborad-button-parent');
        for(let item of buttonparent){
          let itemnearby =item.textContent.trim();
          if(itemnearby === ""){
            applystyle(item,'50%','5px auto')
          }
          if(itemnearby === "⌫"){
            applystyle(item,'10%','5px auto')
          }
          if(itemnearby === "⇪"){
            applystyle(item,'9.8%','5px auto')
          }
          if(itemnearby === "send ➤" || itemnearby === "SEND ➤"){
            applystyle(item,'9.9%','5px auto')
          }
       }
    }else if(window.innerWidth < 800){
        let buttonparent=document.getElementsByClassName('keyborad-button-parent');
        for(let item of buttonparent){
          let itemnearby =item.textContent.trim();
          if(itemnearby === ""){
            applystyle(item,'59%')
          }
          if(itemnearby === "⌫"){
            applystyle(item,'30px%','5px auto')
          }
          if(itemnearby === "⇪"){
            applystyle(item,'30px','5px auto')
          }
          if(itemnearby === "send ➤" || itemnearby === "SEND ➤"){
            applystyle(item,'30px','5px auto')
          }
       }  
    }
    
 }
function applystyle(item,value1,valu2){
     item.style.width=value1;
    item.style.margin=valu2;
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
    j=0;
    console.log("doubbleclick")
    let cursorsplace=document.getElementById('cursor')
    let val= childvalue[0];
    let valu2=val.innerHTML;
    if(valu2 === "↵ Enter" || valu2 === "↵ ENTER" ||  valu2 === "↵ enter"){
        makeanenter();

    }else if(valu2 === "⌫"){
        makeanbackspace();
    }
    else if(valu2 === "⇪"){
        makeancapeslock();
    }
    else if(valu2 === ""){
        makeanspace();
    }
    else if(valu2 === "Send ➤" || valu2 === "send ➤" || valu2 === "SEND ➤"){
        // sendthemessage()
    }
    else if(valu2 === "⇦"){
        movingleft();
    }  
    else if(valu2 === "⇧"){
         movingup();
    }
    else if(valu2 === "⇨"){
       movingright();
    }
    else if(valu2 === "⇩"){
        movingdown();
    }
    else{
      let textContent=document.createTextNode('p');
      textContent.textContent=valu2;
      shower.insertBefore(textContent,cursorsplace);
    }
    

}
function singleclickhandlling(){
    j=0;
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
    if(window.innerWidth > 800){
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
    }else{
        let keyboraditemes=document.getElementsByClassName('keyborad-button-parent');
        for(let keyitem of keyboraditemes){
            keyitem.style.background='rgb(228, 235, 235';
            for(let item of keyitem.children){
               item.style.background='rgb(228, 235, 235';
            }
         }
    
        if(j===0){
            i=9;
            keyboraditemes[8].style.background='#6f6161';
            childvalue=keyboraditemes[8].children;
            childvalue[0].style.background='#6f6161';    
            
        }else if(j===1){
            
            i=17;
            keyboraditemes[16].style.background='#6f6161';
            childvalue=keyboraditemes[16].children;
            childvalue[0].style.background='#6f6161';   
    
        }
        else if(j===2){
            
            i=25;
            keyboraditemes[24].style.background='#6f6161';
            childvalue=keyboraditemes[24].children;
            childvalue[0].style.background='#6f6161';  
    
        }
        else if(j===3){
            
            i=33;
            keyboraditemes[32].style.background='#6f6161';
            childvalue=keyboraditemes[32].children;
            childvalue[0].style.background='#6f6161';  
    
        }
        else if(j===4){
            
            i=41;
            keyboraditemes[40].style.background='#6f6161';
            childvalue=keyboraditemes[40].children;
            childvalue[0].style.background='#6f6161';  
    
        }
        else if(j===5){
            
            i=49;
            keyboraditemes[48].style.background='#6f6161';
            childvalue=keyboraditemes[48].children;
            childvalue[0].style.background='#6f6161';     
    
        }
        else if(j===6){
            
            i=48;
            keyboraditemes[47].style.background='#6f6161';
            childvalue=keyboraditemes[47].children;
            childvalue[0].style.background='#6f6161';     
    
        }
        else if(j===7){
            
            i=40;
            keyboraditemes[39].style.background='#6f6161';
            childvalue=keyboraditemes[39].children;
            childvalue[0].style.background='#6f6161';     
    
        }
        else if(j===8){
            
            i=32;
            keyboraditemes[31].style.background='#6f6161';
            childvalue=keyboraditemes[31].children;
            childvalue[0].style.background='#6f6161';     
    
        }
        else if(j===9){
            
            i=24;
            keyboraditemes[23].style.background='#6f6161';
            childvalue=keyboraditemes[23].children;
            childvalue[0].style.background='#6f6161';     
    
        }
        else if(j===10){
            
            i=16;
            keyboraditemes[15].style.background='#6f6161';
            childvalue=keyboraditemes[15].children;
            childvalue[0].style.background='#6f6161';     
    
        }
        else if(j===11){
            
            i=8;
            keyboraditemes[7].style.background='#6f6161';
            childvalue=keyboraditemes[7].children;
            childvalue[0].style.background='#6f6161';     
    
        }
        else{ 
            
            i=1;
            keyboraditemes[0].style.background='#6f6161';
            childvalue=keyboraditemes[0].children;
            childvalue[0].style.background='#6f6161';   
    
        }
    
        if(j<=12){
            j++;
        }else{
            j=0;
        }
    }

    
}
function makeanbackspace(){
    console.log("Back space triggerd")
    let cursoritemcontent=document.getElementById('cursor')
    if(shower.childNodes.length > 1){
        let elementBeforeCursor = cursor.previousSibling;
        if (elementBeforeCursor && elementBeforeCursor !== cursoritemcontent && elementBeforeCursor.textContent !=='Subject:' && elementBeforeCursor.textContent !=='To:'){
            shower.removeChild(elementBeforeCursor);
        }
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
    console.log("Enter triggerd");
     let cursorsplace=document.getElementById('cursor')
     let entervalue = document.createElement('br');
     shower.insertBefore(entervalue,cursorsplace);
     shower.insertBefore(cursorsplace, entervalue.nextSibling);

}
function makeanspace(){
    shower.innerHTML+=`&nbsp;`;
}
function movingup(){
    shower.removeChild(cursor);
    console.log('cursor removed');
    if(q===0){
        console.log("Enter the content");
        shower=document.getElementById('textshower'); 
        cursoradder()   
    }else if(q===1){
        
        console.log("Enter the  subject");
        shower=document.getElementById('thesubject'); 
        cursoradder()

    }else{ 
        
        console.log("Enter the receiver address");
        shower=document.getElementById('theaddress');
        cursoradder()
    }

    if(q<=1){
        q++;
    }else{
        q=0;
    }
}
function movingdown(){
    shower.removeChild(cursor);
    console.log('cursor removed');
    if(q===0){
        console.log("Enter the receiver address");
        shower=document.getElementById('theaddress');   
        cursoradder()
        
    }else if(q===1){
        console.log("Enter the  subject");
        shower=document.getElementById('thesubject'); 
        cursoradder()
    }else{ 
        console.log("Enter the content");
        shower=document.getElementById('textshower'); 
        cursoradder()
    }

    if(q<=1){
        q++;
    }else{
        q=0;
    }
    
}
function cursoradder(){
   shower.innerHTML+=`<span id="cursor"></span>`;
   cursorblinkibg();
}
function cursorblinkibg(){
    let cursor=document.getElementById('cursor');
    setInterval(() => {
        cursor.style.backgroundColor=cursor.style.backgroundColor === 'black' ? 'white' : 'black';
           
    }, 600);
    
}
function movingleft(){
    let curseritem=document.getElementById('cursor');
    shower.insertBefore(curseritem,curseritem.previousSibling);     
}
function movingright(){  
    let curseritem=document.getElementById('cursor');
    shower.insertBefore(curseritem,curseritem.nextElementSibling);   

}
