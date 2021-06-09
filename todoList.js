showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click',function(e){
    let textBar = document.getElementById("textBar");
    let notes = window.localStorage.getItem("findNotes");
    console.log(notes);
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
       notesObj = JSON.parse(notes);                
    }
    notesObj.push(textBar.value);
    window.localStorage.setItem("findNotes",JSON.stringify(notesObj));
    textBar.value = "";
    console.log(notesObj);
    showNotes();
});

function showNotes()
{
    let notes =localStorage.getItem("findNotes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
       notesObj = JSON.parse(notes);               
    }
    let html = "";
    notesObj.forEach(function (element,index) {
        html +=`
        <div class="row">
        <div class="column">
        ${index+1}.<br>
         ${element}
            <button class="delBtn" id=${index} onclick= "deleteNote(this.id)"><i class="fa fa-trash"></i></button>
    </div>
        `   
    });
    let text = document.getElementById("findNotes");
    if(notesObj.length != 0)
        text.innerHTML = html;
    else
    text.innerHTML = "nothing to show in the notes";
}

function deleteNote(index) {
    console.log("I am deleting",index);
    let notes =localStorage.getItem("findNotes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
       notesObj = JSON.parse(notes);               
    }
    notesObj.splice(index,1);
    localStorage.setItem("findNotes",JSON.stringify(notesObj));
    showNotes();
}

let searchBox = document.getElementById("searchBox");

searchBox.addEventListener('input',function(){
    console.log("input listner fired");
    let inpVal = searchBox.value;
    let row = document.getElementsByClassName('row'); 

});

//46:00