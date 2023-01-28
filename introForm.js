
var url = "http://localhost:3000/post";


function submit() {
    var name = document.getElementById("fname");
    var major = document.getElementById("major");
    const day = [];
    var input = document.getElementsByClassName("dayAvailable");
    for (var i=0; input[i]; ++i) {
        if(input[i].checked) {
            day.push(input.value);
        }
    }

    $.post(
        url+'?data='+JSON.stringify
        ({ //compare the input name with the database
        'name':name,
        'major': major,
        'day':day,
        'action':'createProfile'
        }),
        response);
    window.location.href = "swipe.html";
}

function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'insufficientInfo') {
        alert("Missing information");
    }
}

