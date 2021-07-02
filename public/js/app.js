//const Proizvod = require('../../model/proizvod')



const nizProizvoda = Array.from(document.getElementsByClassName('box'));
/*  
nizProizvoda.forEach((element, index, array) => {
    element.addEventListener('click', (e) =>{

    })
})*/


document.querySelector(".box > button").addEventListener('click', (e) => {
    let id = e.path[1].id;
    console.log(`Narucen proizvod ${id}`);
    
})


const kategorije = new Map();
kategorije.set("Voce", ["Jabuke", "Banane", "Jagode", "Kruska", "Borovnica"]);
kategorije.set("Povrce", ["Grasak", "Boranija", "Prokelj", "Kropmir", "Karfiol"]);
const nizVocki = kategorije.get("Voce");
nizVocki.forEach((element) => {
    console.log(element);
})


class Niz {
    constructor (...arr) {
        this.arr = arr;
    }

    loopForEach(callback) {
        for(let i = 0; i < this.arr.length; i++){
            callback(this.arr[i], i, this.arr);
        }
    }

    filterForEach(callback) {}

}

const array = new Niz(2,1,2,3,4);

array.loopForEach((element) => { // chaining sa then u kolbekovima, svaki parametar vracena vrednost funkcije
    console.log(element);
})

let url = new URL(window.location.href);

console.log(url.searchParams.set('name', 'Dusan'));
//[{kategorijaID: 1, kategorija_IME: 'Voce', proizvod: "Proizvo_iME",}]








