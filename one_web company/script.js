console.log("Salom dunyo");

const Wrapper = document.getElementById("hello")

function funcjson(){
    Wrapper.innerText="Salom mening ismim Hojiakbar"
    console.log("Doston");
}

fetch(`https://dummyjson.com/products/`).then((res)=>{
    return res.json()
}).then((s)=> {
     Wrapper.innerHTML = s.products[1] 
    console.log(s.products[1]);
}).then((g)=>{
    console.log(g);
})

