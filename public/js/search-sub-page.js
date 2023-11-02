/*  connect the next page with search bar */


document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".searchbar");
    searchForm.addEventListener("submit", handleSearchSubmit);
  });
  
  function handleSearchSubmit(event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput").value;
    if (searchInput.trim() !== "") {
      // Encode the search query to handle special characters in the URL
      const encodedSearchQuery = encodeURIComponent(searchInput);
      const newPageURL = `results.html?query=${encodedSearchQuery}`;
      window.location.href = newPageURL;
    }
  }



  /*  product filter with search  */
/*
 
 const search = () => {
   const searchbox = document.getElementById("searchInput");
  const storeitems = document.getElementById("detail-box");
   const product = document.querySelectorAll(".book-box");
   const pname = storeitems.getElementsByTagName("h2");


  for (var i=0; i<pname.length; i++) {

    let match = product [i].getElementsByTagName('h2') [0] ;

       if (match)  {
         let textvalue = match.textContent || match.innerHTML
             if (textvalue.toUpperCase().indexOf(searchbox) > -1 ) {

             product[i].style.display = "block ";
             }

            else{

               product[i].style.display = "none";

             }

       }


   }

}

*/

/* product filtration 

const boxes = document.querySelectorAll('.box');
const search = document.querySelector("#searchInput");
  
search.addEventListener('keyup',(e)=>{
searchText=e.target.value.toLowerCase().trim();
boxes.forEach((box)=>{
 
  //console.log(box)
   const data=box.dataset-item; 
   if (data.includes(searchText)){
     box.style.display="block";
   }
   else{
     box.style.display="none";
   }


});
 
})


*/
 // product filter
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const bookBoxes = document.querySelectorAll(".book-box");

  searchInput.addEventListener("keyup", function () {
      const searchKeyword = searchInput.value.toLowerCase();

      bookBoxes.forEach(function (bookBox) {
          const bookName = bookBox.querySelector(".product-name h2").textContent.toLowerCase();
          const shouldShow = bookName.includes(searchKeyword);

          if (shouldShow) {
              bookBox.style.display = "block";
          } else {
              bookBox.style.display = "none";
          }
      });
  });
});


/* add to cart 



const btncart=document.querySelector ('#cart-icon')
const cart=document.querySelector ('.ad-cart')
const btnclose=document.querySelector ('#cart-close');

btncart.addEventListener('click',()=>{
    cart.classList.add('cart-active')
});

btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
})


document.addEventListener('DOMContentLoaded',loadfood)

function loadfood(){
  loadcontent()
 //console.log("calling")
}

function loadcontent(){

  let btnremove =document.querySelectorAll('.cart-remove');
 btnremove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });


  //product change count
  let qtyElement =document.querySelectorAll('.cart-quantity')
  qtyElement.forEach((input)=>{
    input.addEventListener('change',changeQty)
  })

//add the food to card  
let cartbtn=document.querySelectorAll('.add-cart')
console.log(cartbtn)
cartbtn.forEach((carts)=>{
  carts.addEventListener('click',addcart)
})


}

// remove item

function  removeItem(){
  if(confirm("Are You Sure to Remove")){

    let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
itemList=itemList.filter(el=>el.title!=title);

  this.parentElement.remove();

  loadcontent()


}

}


*/

// add to cart function 

const btncart=document.querySelector ('#cart-icon')
const cart=document.querySelector ('.ad-cart')
const btnclose=document.querySelector ('#cart-close');

btncart.addEventListener('click',()=>{
  cart.classList.add('cart-active')
});

btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
})


document.addEventListener('DOMContentLoaded',loadfood)

function loadfood(){
  loadcontent()
 //console.log("calling")
}

function loadcontent(){

  let btnremove =document.querySelectorAll('.cart-remove');
 btnremove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });


  
//product change count
 
let qtyElement =document.querySelectorAll('.cart-quantity')
qtyElement.forEach((input)=>{
  input.addEventListener('change',changeQty)
})


//add the food to card  
let cartbtn=document.querySelectorAll('.add-cart')
console.log(cartbtn)
cartbtn.forEach((carts)=>{
  carts.addEventListener('click',addcart)
})



}

// remove item


function  removeItem(){

  if(confirm("Are You Sure to Remove")){

  this.parentElement.remove();

  }
  //console.log('click')
}


//change qty

function changeQty (){
   
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }

}

// add cart 
function addcart (){

  let food = this.parentElement;
  //console.log('check')
  let title =food.querySelector('.book-title').innerHTML;
  let rate= food.querySelector('.price').innerHTML;
  let images= food.querySelector('.book-image').src;
  //console.log(food,title,rate,images)

  let newProductElement= createcartproduct(title,rate,images);
  let element=document.createElement('div');  //2*
  element.innerHTML=newProductElement;           //3*
 
  let  cartBasket=document.querySelector('.cart-content');
  cartBasket.append(element);    //(newProductElement *)
  loadcontent();   // recall 
}
  

function createcartproduct(title,rate,images){

return ` <div class="cart-box">

              <div class="cart-image"><img src="${images}" alt="Book Image" id="cart-image"></div>
              <div class="cart-detail">

               <div class="book-name">${title}</div> 
                 <div class="book-amt">

                   <div class="amt-1">${rate}</div>
                   <div class="amt-2">${rate}</div>

                 </div>
                <div class="count"><input  type="number"  value="1"   class="cart-quantity"></div>
 
              </div> 
              <ion-icon name="trash"   class="cart-remove"  style="margin-left: 10px;" ></ion-icon>
         
              </div> `

}

