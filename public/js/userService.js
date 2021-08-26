
class UserService {
    constructor() {
        this.userURL = 'http://localhost:5000/';
    }


    async getAll() {
        const response = await fetch(this.userURL, {
            mode: 'no-cors',
            headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE',
            'Content-Type': 'application/json'
            }
        }
        );
        
        if(!response.ok) {
            throw new Error('Greska');
        }

        return await response.json();
    }


    async getById(id) {
        const response = await fetch(`${this.userURL}/proizvodi/${id}`, {
            mode: 'no-cors',
            headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE',
            'Content-Type': 'application/json'
            }
        }
        );
        
        if(!response.ok) {
            throw new Error('Greska');
        }

        return await response.json();
    }
}


//export let user = new UserService();

