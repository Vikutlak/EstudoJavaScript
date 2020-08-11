const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Rocketseat'},
]

const idades = usuarios.map(function(usuario){
    return usuario.idade
});
console.log(idades);

const filtro = usuarios.filter(function(adulto) {
    if(adulto.idade >= 18){
        return adulto
    }
})

console.log(filtro);

const ache = usuarios.find(function(trab) {
    if(trab.empresa === 'Google'){
        return trab
    }
})

console.log(ache);

const idade2x = usuarios.map(function(adulto) {
    adulto.idade = adulto.idade*2;
    return adulto
}).filter(function(adulto){
    return adulto.idade <= 50
})
console.log(idade2x);


