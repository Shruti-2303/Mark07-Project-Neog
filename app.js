var translate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured in the server",error);
    alert("Something went wrong with the server!");
}
function clickEventHandler(){
    // outputDiv.innerText = "fgskztgwsgsfsb " + textInput.value;
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            var translatedTxt = json.contents.translated;
            outputDiv.innerText = translatedTxt;
        })
        .catch(errorHandler)

};

translate.addEventListener("click",clickEventHandler);
