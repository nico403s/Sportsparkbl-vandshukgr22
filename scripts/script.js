for(let i=1; i<=99; i++){
  let select = document.getElementById("select_antal_personer_page2");
  let option = document.createElement('option');
  select.options.add(option);
  option.text = i;
  option.value = i;
}

for(let i=1; i<=7; i++){
  let select = document.getElementById("select_antal_dage");
  let option = document.createElement('option');
  select.options.add(option);
  option.text = i;
  option.value = i;
}

for(let i=1; i<=99; i++){
  let select = document.getElementById("select_antal_personer_page3");
  let option = document.createElement('option');
  select.options.add(option);
  option.text = i;
  option.value = i;
}
