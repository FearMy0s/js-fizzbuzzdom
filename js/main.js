
const container = document.querySelector(".container");

for(let i = 1; i<=100; i++){
    let element= document.createElement("div")
    element.classList.add("box")
    if(i%3===0) 
        element.classList.add("fizz")
    if(i%5===0) 
        element.classList.add("buzz")
    element.innerText = i ;
    container.append(element);
}
