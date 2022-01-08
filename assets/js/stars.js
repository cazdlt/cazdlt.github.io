function getStars(idx, score){
    
    var val = parseFloat(score);
    var number = Math.max(0, (Math.min(10, val)));
    var parent=document.getElementById("review" + idx)

    for (var i=0; i<10; i++){
        var star=document.createElement("i")

        star.className = i < number? "fas fa-star":"far fa-star";
        parent.appendChild(star);
    }
}