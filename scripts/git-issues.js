var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/repos/Grick-Heart-Project/Grick-Heart/issues/27', true)

request.onload = function () {
    var data = JSON.parse(this.response)
    document.getElementById('issue-name').innerHTML = data.title;
    document.getElementById('issue-number').innerHTML = data.number;
    document.getElementById('issue-state').innerHTML = data.state;
}

// Send request
request.send()
