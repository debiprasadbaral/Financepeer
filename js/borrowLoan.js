/**
 * Created by Akshay on 10-May-17.
 */

function requestLoan() {
    window.location.replace("https://developer.yodlee.com/Account_Verification/FastLink_Integration_Guide_For_IAV");
}

$(document).ready(function(){
    $("Button").click(function(){
        $("span").fadeOut(4000);
        $("span").hide(4000);
    });
});

function loadPage(){
    $('#gif').html('<img src="../img/default.gif" />');
    window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.href = "borrowDashboard.html";

    }, 3000);
}
