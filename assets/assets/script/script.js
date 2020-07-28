$("#submit-numbers").click(function() {

    console.log("clicked button");

    var lower_number = parseInt($("#lower-number").val());
    var higher_number = parseInt($("#higher-number").val());

    console.log(lower_number);
    console.log(higher_number);

    $("#lower-number-output").text(lower_number.toString());
    $("#higher-number-output").text(higher_number.toString());

    console.log(Math.floor(Math.random() * higher_number) + lower_number);

    $("#number-output").text((Math.floor(Math.random() * higher_number) + lower_number).toString());

});

$("#submit-restaurants").click(function() {

    var restaurants = $('#restaurant-input').val().split('\n');
    var random_number = Math.floor(Math.random() * higher_number);
    $("#restaurant-output").text(restaurants[random_number].toString());
    
});

$("#submit-list").click(function() {

    var list_entries = $('#list-input').val().split('\n');
    shuffle(list_entries);
    for(var i = 0; i < list_entries.length; i++){
        $("#list-output").append("<br>");
        $("#list-output").append(list_entries[i]);
    }

});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }