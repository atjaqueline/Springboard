const $gifContainer = $("#gif-container");
const $formInput = $("#input-form");


function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
        let randomIndex = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>");
        let $newGif = $("<img>", { 
            src: res.data[randomIndex].images.original.url, 
            class: "w-100"});
    $newCol.append($newGif);
    $gifContainer.append($newCol);
    }
}

$("form").on("submit", async function(evt){
    evt.preventDefault();

    let searchGif = $formInput.val();
    $formInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", { 
        
        params: {
            q: searchGif,
            api_key: "L6aJbwT84oH95yhtiCuD89pWkDQTpcQM"
        }
    });
    addGif(response.data);
});

$("#remove").on("click", function(){
    $gifContainer.empty();
});