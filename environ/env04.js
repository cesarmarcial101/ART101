
function backgroundChange(whatBackground) {
    let backgroundChange = prompt("what is the best weather for Leafeon?");

    if (backgroundChange == whatBackground) {
        $("#output").append(`
            <p>Correct! Leafeon loves the outdoors and thrives in natural environments.</p>
            <img src="mountains.png" alt="mountains" width="300">
            `
        );
        
    }
    else {
        $("#output").html("try again!");
    }
}

$("#background-button").click(function () {
    backgroundChange("mountains");
});