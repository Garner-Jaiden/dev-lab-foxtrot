$(function () {
  console.log("ready!");

  //let data = jQuery.parseJSON(cumbieData);
  $.each(garnerData, function (key, item) {
    $("#stuff-lists").append(`<h4> ${key} </h4> <ul id="${key}-list">`);
    $.each(item, function (index, val) {
      //$(`#${key}-list`).append(val.propertyName);
      $.each(val, function (propertyName, propertyValue) {
        console.log(propertyName, propertyValue);
        //$(`#${key}-list`).append(`<li>`);
        $(`#${key}-list`).append(`<li> ${propertyValue}`);

        //${val.showName} / ${val.venu/e}`);
      });
    });
  });

  for (j = 0; j < cumbieArray.length; j++) {
    //do something
    $("#arrayOutput").append("loop value: " + cumbieArray[j] + "<br/>");
  }

  $.each(cumbieArray, function(index, value){
    // do something 
  });
  
  
  //  $("#tv-list").append('<li><a href="#">New list item</a></li>');
});



const garnerData = {
  Televison: [
    { showName: "Arcane - Netflix"},
    { showName: "Invincible - Amazon Prime"},
    { showName: "Alpharad - Youtube"}
  ],
  Music: [
    { artistName: "Sarah Smiles - Panic! at the Disco" },
    { artistName: "Under Pressure - Logic" },
    { artistName: "See You Again - Tyler, The Creator" }
  ],
  DevSkills: [
    {skill: "Java Script"},
    {skill: "HTML"},
    {skill: "Python"},
    {skill: "Search Engine Optimization"},
    {skill: "Back-end Basics"},
  ],
  Funny: [
    {fact: "I'm 5'11 but on Tinder I'm 6'0."},
    {fact: "When I was younger I didn't play Pokemon because I was afraid of them."},
    {fact: "People call me Thimble because I'm thick and nimble."},
  ]
};
