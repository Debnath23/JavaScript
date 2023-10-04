class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const debnath = new Teacher("Debnath", "debnath@teacher.com", "123")

debnath.logMe()
debnath.addCourse()

const mahapatra = new User("Mahapatra")

mahapatra.logMe()

console.log(debnath instanceof User);