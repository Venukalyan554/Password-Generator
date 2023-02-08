const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", 
"1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let frstEl=document.getElementById("frst-el")
let secEl=document.getElementById("sec-el")
function frstpassword(){
    let pass=""
    for(let i=0;i<10;i++){
        let word=Math.floor(Math.random()*characters.length)
        pass+=characters[word]
    }
    frstEl.textContent=pass
    let pass2=""
    for(let i=0;i<10;i++){
        let word2=Math.floor(Math.random()*characters.length)
        pass2+=characters[word2]
    }
    secEl.textContent=pass2
}
function reset(){
    frstEl.textContent="click-btn"
    secEl.textContent="click-btn"
}