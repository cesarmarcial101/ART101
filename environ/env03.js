let count = 0;
let biome = [grasslands, deserts, mountains, rainforests];

$("#background-button").click(function (){
    
    let message = "<p>This biome is " +biome[count]+"</p>";

    if(count == 3){
        count = 0;
    }
    count = count+1;
    $("#output").html(message);
});
