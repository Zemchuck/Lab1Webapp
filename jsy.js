function addMovie() {
    try{
        var movieTitle = document.getElementById("title").value;
        var movieYear= document.getElementById("Year").value;
        var movieActors= document.getElementById("Actors").value;
        console.log(movieActors);
        console.log(movieTitle);
        console.log(movieYear);
        if (movieYear === ""||movieActors === ""||movieTitle == null){
            alert("Fill all the gaps");
            return;
        }
        var li= document.createElement("li");
        li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors;
        var listAppend= document.getElementById("list");
        listAppend.appendChild(li);
    }
    catch(e){
        console.log(e)
    }
}
function delMovie(){
    var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    for(let i=0;i<checkedBoxes.length; i++)
    {
        document.getElementById("list").removeChild(checkedBoxes[i].parentNode);
    }
}