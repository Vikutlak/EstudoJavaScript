var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

btnElement.onclick = axios.get('https://api.github.com/users/' + inputElement.value + '/repos')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });