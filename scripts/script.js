function _(id){
   return document.getElementById(id);
}
let droppedIn = false;
function drag_start(event) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id') );
}

function drag_enter(event) {

}
function drag_leave(event) {

}


function drag_drop(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
    let elem_id = event.dataTransfer.getData("text");
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

  alert("Denne funktion er under opbygning");
}





let page2Body = document.getElementById('page2_body')
if (page2Body) {

for(let i=1; i<=99; i++){
  let select = document.getElementById('select_antal_personer_page2');
  let option = document.createElement('option');
  select.options.add(option);
  option.text = i;
  option.value = i;
}}

if (page2Body) {
for(let i=1; i<=7; i++){
  let select = document.getElementById('select_antal_dage');
  let option = document.createElement('option');
  select.options.add(option);
  option.text = i;
  option.value = i;
}}

let page3Body = document.getElementById('page3_body')
if (page3Body) {
for(let i=1; i<=99; i++){
  let select = document.getElementById("select_antal_personer_page3");
  let option = document.createElement('option');
  select.options.add(option);
  option.text = i;
  option.value = i;
}}


/* Popupgalleri. Lader det være en kommentar, så det stadig kan bruges, hvis vi vil bruge det senere. Men ligenu er det ikke færdigt og derfor skal det ikke være synligt på siden ligenu.
function badelandFunction() {
  let popupGallery = document.getElementById('gallery_popup');
  popupGallery.style.width = "400px";
  popupGallery.style.opacity = "1";
  popupGallery.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  popupGallery.style.transform = "translateX(-50%) scale(1)";
  popupGallery.style.paddingTop = "30px";
  popupGallery.style.paddingBottom = "30px";
}
*/
