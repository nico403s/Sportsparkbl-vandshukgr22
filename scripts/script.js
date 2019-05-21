for(let i=1; i<=99; i++){
  let select = document.getElementById('select_antal_personer_page2');
  let option = document.createElement('option');
  select.options.add(option);
  option.text = i;
  option.value = i;
}

for(let i=1; i<=7; i++){
  let select = document.getElementById('select_antal_dage');
  let option = document.createElement('option');
  select.options.add(option);
  option.text = i;
  option.value = i;
}

function badelandFunction() {
  let popupGallery = document.getElementById('gallery_popup');
  popupGallery.style.opacity = "1";
  popupGallery.style.top = "80px";
  popupGallery.style.right = "0px";
  popupGallery.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  popupGallery.style.transform = "scale(1.8)";
  popupGallery.style.paddingTop = "30px";
  popupGallery.style.paddingBottom = "30px";
}
