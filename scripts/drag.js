function _(id){
   return document.getElementById(id);	
}
let droppedIn = false;
function drag_start(event) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id') );
}

function drag_drop(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
    var elem_id = event.dataTransfer.getData("text");
    event.target.appendChild( _(elem_id) );
    _(elem_id).style.cursor = "default";
    droppedIn = true;
}
function drag_end(event) {
    if(droppedIn == false){       
    }
    }
	droppedIn = false;

function readDropZone() {

  alert("Tak fordi du bookede dig ind hos Sportspark Blåvandshuk");
}