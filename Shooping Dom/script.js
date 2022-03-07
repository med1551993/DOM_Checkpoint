// ---------------change the color of the like button----------------- 

var like=document.getElementsByClassName("like");
for(let i=0; i<like.length; i++){
    let jaime=like[i];
   jaime.addEventListener("click", function(){
        if (jaime.style.color=="rgb(219, 155, 165)"){
            jaime.style.color="black"}
        else {jaime.style.color="rgb(219, 155, 165)"}
        }
         );    
    }


//-------------Adjust the quantity of each item through  “+” and “-” buttons-------------

var min=document.getElementsByClassName("minus-btn");
var plus=document.getElementsByClassName("plus-btn");
var qty=document.getElementsByClassName("Quant");
var price=document.getElementsByClassName("price");

for(let i=0; i<plus.length; i++){
   let p=plus[i];
   let q=qty[i];
   let pr=price[i];
    p.addEventListener("click",function(){
    q.value=Number(q.value)+1;
     pr.innerHTML=(Number(pr.innerHTML)*Number(q.value)) / (Number(q.value)-1);
    })
    p.addEventListener("click",Total_Price);  
}


for(let i=0; i<min.length; i++){
    let m=min[i];
    let q=qty[i];
    let pr=price[i];

    m.addEventListener("click",function(){
    if(Number(q.value)!=1){ 
    q.value=Number(q.value)-1;
    pr.innerHTML=(Number(pr.innerHTML)*Number(q.value)) / (Number(q.value)+1);
    }})
    m.addEventListener("click",Total_Price); 
} 




//----------------------------Delete items from the cart----------------------------


var del=document.getElementsByClassName("delete");
var item=document.getElementsByClassName("Item");

 for(i=0; i<del.length; i++){
     let ite=item[i];
    del[i].addEventListener("click",function(){
    ite.remove();})
    del[i].addEventListener("click",Total_Price);  

}

//----------------------- Calculate the Total Price---------------------------

function Total_Price(){
    var totalPrice=document.getElementById("finalPrice");
    totalPrice.value=0; 
    //let x = document.getElementById("mainItem");
    let x = document.getElementsByClassName("items");
    let y = x[0].getElementsByTagName("p");
      if (y.length=0){
        totalPrice.value=0;  
    }
    else{
    for (let i=0; i<(y.length)/2; i++){ 
    totalPrice.value = Number(totalPrice.value) + Number(y[2*i+1].innerHTML);}}
}   
