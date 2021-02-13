const app = document.getElementById('project-2')
const container = document.createElement('div')
container.setAttribute('class', 'container')

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.mcsrvstat.us/2/vegasmp.hydrostaticcog.org', true)

request.onload = function () {
    var data = JSON.parse(this.response)
    if (data.online = 'true') {
        console.log(data.players.list)
        if (data.players.list == 'undefined') {
            var playerList = 'No players online'
        } else {
            var playerList = data.players.list
        }
        document.getElementById("status-isOnline").innerHTML = data.online;
        document.getElementById("status-playerCount").innerHTML = data.players.online +'/'+ data.players.max;
        document.getElementById("status-playerList").innerHTML = data.players.list;

    }
    else {
        document.getElementById("status-isOnline").innerHTML = 'Server Offline'
    }
}

// Send request
request.send()