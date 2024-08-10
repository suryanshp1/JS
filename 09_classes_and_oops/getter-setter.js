class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}sury`
    }

    set password(value) {
        this._password = value
    }
}

const hitesh = new User("hi@hi.ai", "abc")
console.log(hitesh.password);
console.log(hitesh._password);
console.log(hitesh._email);
console.log(hitesh.email);
