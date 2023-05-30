function convertToVid()
{
    document.getElementById("right_cont1").style.display = "none";
    document.getElementById("cont1_video").style.display = "block";
}


let arrayofanimatedpart=document.getElementsByClassName('.animatedpart');
arrayofanimatedpart.forEach((element,index)=> {
    element.style.transform ='translateX(index*100%)'
});




