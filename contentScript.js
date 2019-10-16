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
            var projections = document.getElementsByClassName("jsx-339185608");
            for (var i = projections.length - 1; i >= 0; i--) {
              projections[i].parentElement.removeChild(projections[i]);
            }

            var probabilities = document.getElementsByClassName("winProbTracker");
            for (var i = probabilities.length - 1; i >= 0; i--) {
              probabilities[i].parentElement.removeChild(probabilities[i]);
            }

            var projHeaders = document.querySelectorAll('[title="ESPN Projection"]');
            for (var i = projHeaders.length - 1; i >= 0; i--) {
              projHeaders[i].parentElement.removeChild(projHeaders[i]);
            }

            var rows = document.getElementsByClassName("Table2__tr Table2__tr--lg Table2__odd");
            for (var i = rows.length - 1; i >= 0; i--) {
              var projValue = rows[i].cells[5];
              projValue.parentElement.removeChild(projValue);
            }

        }
    }
}
