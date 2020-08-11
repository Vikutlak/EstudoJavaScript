class Usuario {
    constructor(email, senha) {
        email,
        senha
    }
    isAdmin(){
        if(this.admin === true){
            return true
        } else {
            return false
        }
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);        
    }
    admin = true;
}


const user1 = new Usuario('email@teste', 'senha123');
const adm1 = new Admin('email@teste', 'senha123');

console.log(user1.isAdmin());
console.log(adm1.isAdmin());