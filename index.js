const quote = document.getElementById("quote");
const author =document.getElementById("author")
 
function myFunction() {
    if (document.getElementById("mode").src.match("./lamp.png")){
        document.getElementById("mode").src="./lam.png"
    } else {
        document.getElementById("mode").src="./lamp.png"
    }
    var element = document.body;
    element.classList.toggle("light-mode");
    
}

async function getRes() {
    let response = await fetch("https://type.fit/api/quotes");
    return response.json();
}
let data;

async function getQuote(){
    data = await getRes();
    let i = Math.floor(Math.random() * data.length);
    quote.innerHTML = `"${data[i].text}"`;
    author.innerHTML = data[i].author;
    console.log("done")
}
