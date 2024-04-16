var date = new Date();
var formattedDate = date.toISOString();
var loader = document.getElementById("app-loader");
var spend_znt = document.getElementById("spend_znt");
var earn_znt = document.getElementById("earn_znt");
var dash_content = document.getElementById("dash_content")
var dash_survey = document.getElementById("dash_survey")
var dash_signals = document.getElementById("dash_signals")
var survey_eligibility = document.getElementById("survey_eligibility")
var solana_survey = document.getElementById("solana_survey")
var bitcoin_survey = document.getElementById("bitcoin_survey")
var solana_survey_box = document.getElementById("solana_survey_box")
var bitcoin_survey_box = document.getElementById("bitcoin_survey_box")
var solana_bullish = document.getElementById("solana_bullish")
var solana_bearish = document.getElementById("solana_bearish")
var bitcoin_bullish = document.getElementById("bitcoin_bullish")
var bitcoin_bearish = document.getElementById("bitcoin_bearish")
var znt_balance = document.getElementById("znt_balance")
var survey_back = document.getElementById("survey_back")
var balance = 0
var jsonData = {}
setTimeout(() => {
    loader.style.display = 'none';
}, 1000)

spend_znt.addEventListener('click', function(){
    if(balance>0){
        dash_signals.style.display = 'flex'
        dash_content.style.display = 'none'
    }
    else{
        dash_signals.style.display = 'none'
    }
    makeGetSignalRequest('signal/');
})

earn_znt.addEventListener('click', function(){
    dash_content.style.display = 'none'
    dash_survey.style.display = 'block'
})

solana_survey.addEventListener('click', function(){
    solana_survey_box.style.display = 'block'
    survey_eligibility.style.display = 'none'
})

bitcoin_survey.addEventListener('click', function(){
    bitcoin_survey_box.style.display = 'block'
    survey_eligibility.style.display = 'none'
})
solana_bullish.addEventListener('click', function(){
    balance = balance + 10
    jsonData = {
        'type': 'solana',
        'value': 'bullish'
    }
    makePostRequest('survey/', jsonData)
    znt_balance.innerHTML = balance
    solana_survey_box.style.display = 'none'
    solana_survey.disabled = true;
    survey_eligibility.style.display = 'block'

})
solana_bearish.addEventListener('click', function(){
    balance = balance + 10
    jsonData = {
        'type': 'solana',
        'value': 'bearish'
    }
    makePostRequest('survey/', jsonData)
    znt_balance.innerHTML = balance
    solana_survey_box.style.display = 'none'
    solana_survey.disabled = true;
    survey_eligibility.style.display = 'block'
})
bitcoin_bullish.addEventListener('click', function(){
    
    jsonData = {
        'type': 'bitcoin',
        'value': 'bullish'
    }
    makePostRequest('survey/', jsonData)
    balance = balance + 10
    znt_balance.innerHTML = balance
    bitcoin_survey_box.style.display = 'none'
    bitcoin_survey.disabled = true
    survey_eligibility.style.display = 'block'
})
bitcoin_bearish.addEventListener('click', function(){
    jsonData = {
        'type': 'bitcoin',
        'value': 'bearish'
    }
    makePostRequest('survey/', jsonData)
    balance = balance + 10
    znt_balance.innerHTML = balance
    bitcoin_survey_box.style.display = 'none'
    bitcoin_survey.disabled = true
    survey_eligibility.style.display = 'block'
})
survey_back.addEventListener('click', function(){
    if(balance>0){
        spend_znt.disabled = false
    }
    dash_content.style.display = 'block'
    dash_survey.style.display = 'none'
})
document.addEventListener("DOMContentLoaded", function(){
    dash_signals.style.display = 'none'
    console.log('Document has finished loading.');
});
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Check if this cookie name is the one we are looking for
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    console.log(cookieValue)
    return cookieValue;
}

function makePostRequest(url, jsonData){
    var csrftoken = getCookie('csrftoken');
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(jsonData)
        })
        .then(response => response.json())
        .then(data => {
            
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });    
}
function makeGetSignalRequest(url){
    var csrftoken = getCookie('csrftoken');
    fetch(url, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        })
        .then(response => response.json())
        .then(data => {
            display_signals.innerHTML = data.signal
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });    
}