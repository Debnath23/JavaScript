class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}debnath`
    }

    set password(value){
        this._password = value
    }
}

const debnath = new User("d@.com", "1234")
console.log(debnath);
console.log(debnath.email);
console.log(debnath.password);