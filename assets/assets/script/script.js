$("#submit-numbers").click(function() {

    var lower_number = parseInt($("#lower-number").value);
    var higher_number = parseInt($("#higher-number").value);

    $("#lower-number-output").text = lower_number.toString();
    $("#higher-number-output").text = higher_number.toString();

    $("#output-number").text = (Math.floor(Math.random() * higher_number) + lower_number).toString();

})