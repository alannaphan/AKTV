
var url = "http://localhost:3000/post";


function submit() {
    var name = document.getElementById("fname");
    var major = document.getElementById("major");
    const day = [];
    var input;
    for (var i=1; i<=5; i++) {
        switch  (i) {
            case 1:
                input = document.getElementById("day1");
                if(input.checked==true) {
                    day.push("Monday");
                }
                break;
            case 2:
                input = document.getElementById("day2");
                if(input.checked==true) {
                    day.push("Tuesday");
                }
                break;
            case 3:
                input = document.getElementById("day3");
                if(input.checked==true) {
                    day.push("Wednesday");
                }
                break;
            case 4:
                input = document.getElementById("day4");
                if(input.checked==true) {
                    day.push("Thursday");
                }
                break;
            case 5:
                input = document.getElementById("day5");
                if(input.checked==true) {
                    day.push("Friday");
                }
                break;
            }
    }
    if (day.length==0) {
        alert("Please choose the days you are available");
    }
    else {
        $.post(
            url+'?data='+JSON.stringify
            ({ //compare the input name with the database
            'name':name,
            'major': major,
            'day':day,
            'action':'createProfile'
            }),
            response);
            
        }
}

function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'createDone') {
        alert("Profile created");
        window.location.href = "swipe.html";
    }
    if (response['action']=='missingName') {
        alert("Please fill in your name");
        window.location.reload();
    }
}

