function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        if(idade >= 18) {
            resolve()
        } else {
            reject()
        };
    }, 2000);
}

checaIdade(20)
    .then(function(response) {
        console.log('Maior que 18');
    })
    .catch(function(error) {
        console.log('Menor que 18');
    });