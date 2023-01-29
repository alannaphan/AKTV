var url = "http://localhost:3000/post";

window.onload = function() {    
    $.post(url+'?data='+JSON.stringify({
        'action':'changeProfileInfo',
        'required':'allInfo'
    }),
    response);
  }

  function buddy() {
    window.location.href = "swipe.html";
  }
function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'profileChanged') {
        document.getElementById("fname").innerHTML=response['name'];
        document.getElementById("major").innerHTML=response['major'];
    }
}