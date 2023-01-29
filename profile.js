function changeInfo() {
    $.post(
        url+'?data='+JSON.stringify
        ({ //compare the input name with the database
        'action':'changeProfileInfo'
        }),
        response);
}

function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'profileChanged') {
        document.getElementById("fname").innerHTML=response['name'];
        document.getElementsByClassName("program").innerHTML=response['major'];
    }
}