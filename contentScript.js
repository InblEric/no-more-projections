chrome.runtime.onMessage.addListener(function(msg) {
  if (msg.action == 'remove_projections') {
    removeProjections();
  }
});

window.addEventListener ("load", removeProjections, false);

function removeProjections () {
    var timer = setInterval (removeProjectionsIfLoaded, 111);

    function removeProjectionsIfLoaded () {
        var teamNameOne = document.getElementsByClassName("teamName")[0];
        if (    typeof teamNameOne != "undefined"
        ) {
            clearInterval (timer);
            // fantasy cast projection
            var projections = document.getElementsByClassName("jsx-339185608");
            for (var i = projections.length - 1; i >= 0; i--) {
              projections[i].parentElement.removeChild(projections[i]);
            }

            // fantasy cast probability banner
            var probabilities = document.getElementsByClassName("winProbTracker");
            for (var i = probabilities.length - 1; i >= 0; i--) {
              probabilities[i].parentElement.removeChild(probabilities[i]);
            }

            // projection header
            var projHeaders = document.querySelectorAll('[title="ESPN Projection"]');
            for (var i = projHeaders.length - 1; i >= 0; i--) {
              projHeaders[i].innerText = "Noproj";
            }

            // individual player projections
            var rows = document.getElementsByClassName("Table2__tr Table2__tr--lg Table2__odd");
            for (var i = rows.length - 1; i >= 0; i--) {
              if (rows[i].cells[0].getAttribute('class').includes('total-col')) {
                rows[i].cells[4].querySelectorAll('div')[0].innerText = "--";
              } else {
                var projValue = rows[i].cells[5];
                projValue.querySelectorAll('span')[0].innerText = "--";
              }
            }

        }
    }
}
