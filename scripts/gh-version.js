var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://raw.githubusercontent.com/Grick-Heart-Project/Grick-Heart/master/release.json', true)

request.onload = function () {
    var data = JSON.parse(this.response)
    document.getElementById('ghversion-number').innerHTML = data.ghVersion;
}

// Send request
request.send()
