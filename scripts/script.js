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
/*forbedring*/

function readDropZone(){
    for(let i=0; i < _("drop_target").children.length; i++) {
        alert(_("drop_target").children[i].id+"Du har nu bestilt. Vi strikker et program sammen til dig. Tak fordi du bookede et ophold hos Sportspark Blaavandshuk");
    }
    /* Run Ajax request to pass any data to your server */
}

/*ændring i js til forbedring

før var der en alert der sagde "knappen er under opbygning". nu er der blevet tilføjet et for loop, som går ind og læser dropzonens filer. dernæst når der bliver trygget på knappen book, læser den dropzonen og skriver en ny alert, nu sstår der "du har nu bestilt, Vi strikker et program sammen til dig. Tak fordi du bookede et ophold hos Sportspark Blaavandshuk.*/



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

let styleguideBody = document.getElementById('styleguide_ui_body')
if (styleguideBody) {
for(let i=1; i<=99; i++){
  let select = document.getElementById("select_antal_personer_styleguide");
  let option = document.createElement('option');
  select.options.add(option);
  option.text = i;
  option.value = i;
}}

if (styleguideBody) {
for(let i=1; i<=7; i++){
  let select = document.getElementById("select_antal_dage_styleguide");
  let option = document.createElement('option');
  select.options.add(option);
  option.text = i;
  option.value = i;
}}

if (page2Body) {
let tl = new TimelineMax({onUpdate:updatePercentage});
let tl2 = new TimelineMax({onUpdate:updatePercentage});
let tl3 = new TimelineMax({onUpdate:updatePercentage});
let controller = new ScrollMagic.Controller();

tl.from("#square_right_tilbud", 1, {width: 0});
tl2.from(".blue_square_left", 1, {width: 0});
tl3.from("#square_right_yderligere", 1, {width: 0});

new ScrollMagic.Scene({
  triggerElement: "#lejrskole_video_containter",
  triggerHook: "onLeave",
  offset: -80,
  duration: "100%"
})
.setTween(tl)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".book_pris",
  triggerHook: "onEnter",
  offset: 800,
  duration: "100%"
})
.setTween(tl2)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#yderligere_info_headline",
  triggerHook: "onEnter",
  offset: 0,
  duration: "100%"
})
.setTween(tl3)
.addTo(controller);

function updatePercentage() {
  tl.progress();
  tl2.progress();
}}

function checkRequired(){
  let inputNavn = document.querySelector("input[name=fNavn]")
    let inputSkolenavn = document.querySelector("input[name=skoleNavn]")
    let inputEmail = document.querySelector("input[name=email]")
  let navn = document.forms["bookForm"]["fNavn"].value;
  let skole = document.forms["bookForm"]["skoleNavn"].value
    let email = document.forms["bookForm"]["email"].value

  if (navn == null || navn == "") {
    inputNavn.style.border = "solid 2px rgba(255, 51, 51, 1)";
    alert("Fulde navn mangler")
    event.preventDefault();
  }

  else {
        inputNavn.style.border = "solid 2px rgba(14, 140, 196, 0.6)";
  }

  if (skole == null || skole == "") {
    inputSkolenavn.style.border = "solid 2px rgba(255, 51, 51, 1)";
    alert("Skolenavn mangler")
    event.preventDefault()
  }

  else {
        inputSkolenavn.style.border = "solid 2px rgba(14, 140, 196, 0.6)";
  }

  if (email == null || email == "") {
    inputEmail.style.border = "solid 2px rgba(255, 51, 51, 1)";
    alert("Email mangler")
    event.preventDefault()
  }
  else {
        inputEmail.style.border = "solid 2px rgba(14, 140, 196, 0.6)";
  }
}

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

let overlay = document.getElementById('informationsknap')
let closeMenu = document.getElementById('luk')

        document.getElementById('open').addEventListener('click',
        function(){
            overlay.classList.add('badeland');
        });
        document.getElementById('lukbtn').addEventListener('click',
        function(){
            overlay.classList.remove('badeland');
        });
