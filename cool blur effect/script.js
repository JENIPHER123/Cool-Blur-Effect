


function image_selector(){

    var pick = prompt("pick number ranging fro 1 to 4");

    if (pick === "1"){
        document.getElementById('cont1').style.display = 'block'
        document.getElementById('cont2').style.display = 'none'
        document.getElementById('cont3').style.display = 'none'
        document.getElementById('cont4').style.display = 'none'
    }else if(pick === "2"){
        document.getElementById('cont1').style.display = 'none'
        document.getElementById('cont2').style.display = 'block'
        document.getElementById('cont3').style.display = 'none'
        document.getElementById('cont4').style.display = 'none'
    }
    else if(pick === "3"){
        document.getElementById('cont1').style.display = 'none'
        document.getElementById('cont2').style.display = 'none'
        document.getElementById('cont3').style.display = 'block'
        document.getElementById('cont4').style.display = 'none'
    }
    else if(pick === "4"){
        document.getElementById('cont1').style.display = 'none'
        document.getElementById('cont2').style.display = 'none'
        document.getElementById('cont3').style.display = 'none'
        document.getElementById('cont4').style.display = 'block'
    }
    else{
      image_selector()
    }

}

