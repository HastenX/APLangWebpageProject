const currentLocation = window.location.pathname;

const reportText = currentLocation == '/html/report.html' ? document.getElementById('enterReport') : null;

const reportList = currentLocation == '/html/reportList.html' ? document.getElementById('reportedList') : null;

let response;

function searchForResponse(reportText) {
    if (!!reportText && response == undefined) {
        reportText.addEventListener('keydown', (event) => {
            if(event.key == 'Enter' && reportText.value != '') {
                document.location.assign('/html/index.html');
                window.alert('The Thought Police have been consulted and "' + reportText.value+ '" will be investigated for Thoughtcrime. Thank you comerade, you are the best of us. May the Traitors fall! Long live Big Brother.')
                response = [reportText.value];
                callback(response);
            }
        });
    }
}

function setList() {
    if (!!reportList) {
        try {
            let names = JSON.parse(localStorage.getItem('names'));
            names.forEach(element => {
                var entry = document.createElement('li');
                entry.appendChild(document.createTextNode(element));
                reportList.appendChild(entry);     
            });
        } catch (exception) {
            console.log(exception);
        }
    }
}

function updateStoreage(response) {
    if (localStorage.getItem('names') == null || localStorage.getItem('names') == undefined) {
        localStorage.setItem('names', '[]');
    }

    var transferNames = JSON.parse(localStorage.getItem('names'));
    transferNames.push(response);

    localStorage.setItem('names', JSON.stringify(transferNames))
}

function callback(response) {
    console.log(response);
    updateStoreage(response);
    console.log(localStorage.getItem('names'))
}

setList();
searchForResponse(reportText);

// localStorage.clear();