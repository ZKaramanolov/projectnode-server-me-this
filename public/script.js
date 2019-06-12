window.onload = () => {
    //fillDropdown();
}

var send = function() {
    var ajax = new XMLHttpRequest();

    var data = document.getElementById("name").value;

    ajax.open("POST", "/saveMandja");
    ajax.send(data);
}

var fillDropdown = () => {
    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    ajax.open('GET', '/dropdown');
    ajax.send();

}
