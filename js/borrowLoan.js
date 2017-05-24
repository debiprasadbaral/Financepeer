/**
 * Created by Akshay on 10-May-17.
 */

function finished() {
    window.location.replace("borrowDashboard.html");
}
/*
$(document).ready(function(){
    var  myButton= document.getElementById('hide');
    $("myButton").click(function(){
        $("hideThis").fadeOut(3000);
        $("hideThis").hide(3000);
    });
});
*/


function loadPage(){

    $('#gif').html('<img src="../img/default.gif" />');

    var hidden = false;
    setTimeout(function(){
        document.getElementById("gif").style.visibility= hidden ? "visible" : "hidden";
        hidden = !hidden;
    },3000);
/*
    window.setTimeout(function(){
        window.location.href = "borrowDashboard.html";
    }, 3000);
    */
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