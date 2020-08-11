//estudo assíncrono

var xhr = new XMLHttpRequest(); //acesso à funcionalidade AJAX - recuperar info de servidor

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}