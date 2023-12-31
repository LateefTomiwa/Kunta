// Select search and select product name
const search = document.getElementById("search")
const products = document.querySelectorAll('.products h4')
const submit=document.getElementById("submit")
search.addEventListener("keyup", mySearch)

// Create a function called my search
function mySearch(e) {
    e.preventDefault();
    const myText = e.target.value.toLowerCase()
    console.log(myText);

// Loop through the array
products.forEach((item)=>{
    // console.log(item.textContent.toLowerCase());
    if(item.textContent.toLowerCase().indexOf(myText) !== -1){
        item.parentElement.style.display = "block"
    }
    else{
        item.parentElement.style.display = "none"
    }
})
}


