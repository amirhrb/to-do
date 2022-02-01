
const addBtn=document.querySelector(".add-btn");

const mainDiv=document.querySelector(".main-div");
const innerItem=document.querySelector(".item1");
const inp=document.querySelector(".inputtodo");
const removeAllBtn=document.querySelector(".removeAll")
let removeBtnEl=document.querySelectorAll(".removebtn");;
let items=null;
let itemCount=1;

let arrItems=[];
let itemDivs=[];
let removeButtons=[];
let checkButtons=[];
let clickonremoveevent=null;
// item.appendChild()
addBtn.addEventListener("click",addfunc)

function addfunc(){
    if(inp.value=="")return;
    
    let item =document.createElement("div");
    item.classList.add("items");
    
    item.innerHTML=`<button class="removebtn item-btn">
    <i class="fas fa-minus-circle"></i></button>
    <span class="toDoText">${inp.value}</span>
    <button class="fa-checkBtn"><i class="fas fa-check">
    </i></button>
    `;
    itemCount++;
    inp.value="";
    mainDiv.appendChild(item);

    items=document.querySelectorAll(".items");
     itemDivs=[...items]
     checkButtons.push(itemDivs[itemDivs.length-1].children[2])
     removeButtons.push(itemDivs[itemDivs.length-1].children[0])
 }    
    


document.addEventListener("click",()=>{
    removeButtons.forEach(e=>e.addEventListener("click",()=>{e.parentElement.remove();
    }))
    
   checkButtons.forEach(e=>{
    e.addEventListener("click",
    ()=>{  
         if( e.parentElement.style.textDecoration=="line-through"){
   e.parentElement.style.textDecoration="none"}
        else{e.parentElement.style.textDecoration="line-through"}
     })})
    }
)



removeAllBtn.addEventListener("click",()=>items.forEach(e=>e.remove()))

    


    // e.remove()  
// }

// const itemsClassList=
// document.getElementsByClassName(".items");

// itemsClassList[0].style.color="red"
