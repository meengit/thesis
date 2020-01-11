var nIntervId = null;
var element = document.getElementById('root');
function getText(int) {
  nIntervId = setInterval(fetch, int);
}

function fetch() {
  clearInterval(nIntervId);
  axios.get("https://typewriter.meen.ch/text.txt")
    .then(function(response) {
      if (response.status === 200) {
        var current = element.innerHTML;
        var data = response.data;
        if (current === data) {
          element.innerHTML = data;
          getText(1000);
        }

        if (current !== data) {
          element.innerHTML = data;
          getText(100);
        }

        return data;
      }
    })
    .catch(function(error) {
      clearInterval(nIntervId);
      console.error(error);
      return error;
    });
}

getText(100);
