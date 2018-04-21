"use strict"
function onload() {
    var TOTAL_CARDS = 4;
    var card;

    for (var i = 0; i < TOTAL_CARDS; i++) {
        card = new cardFun(i);
    }


}
function cardFun(id) {
    this.card = document.createElement("div");
    this.card.innerHTML = content(); 
    this.card.classList.add("card");
    this.card.setAttribute("id", "card"+id);
    document.getElementById("containerId").appendChild(this.card);
}
function content(){
    
    return "<span>Text Here</span>";
}