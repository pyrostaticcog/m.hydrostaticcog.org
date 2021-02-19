
try {
    var xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'https://mail.hydrostaticcog.org/ping.json', true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("status-mail").innerHTML = 'Mail Servers are online';
        }
    };

    xhttp.send()
}
catch {
    document.getElementById("status-mail").innerHTML = 'Mail Servers are offline';
}
