/**
 * Created by Akshay on 10-May-17.
 */

function requestLoan() {
    window.location.replace("https://developer.yodlee.com/Account_Verification/FastLink_Integration_Guide_For_IAV");
}

$(document).ready(function(){
    var  myButton= document.getElementById('hideBtn');
    $("myButton").click(function(){
        $("myButton").fadeOut(3000);
        $("myButton").hide(3000);
    });
});

function loadPage(){
    $('#gif').html('<img src="../img/default.gif" />');
    window.setTimeout(function(){
        window.location.href = "borrowDashboard.html";
    }, 3000);
}

$(function() {
    var output = document.querySelectorAll('output')[0];

    $(document).on('input', 'input[type="range"]', function(e) {
        output.innerHTML = e.currentTarget.value;
    });

    $('input[type=range]').rangeslider({
        polyfill: false
    });
});