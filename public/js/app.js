//import {user} from './userService';
// window.location.href i na njega dodati query string (id='2' && name = 'Jagode');
/*
const user = new UserService();

let proizvodi = Array.from(document.getElementsByClassName('proizvodi')); // event listener get Proizvod by id i front i back
proizvodi.forEach((proizvod) => {
    let button = proizvod.children[3];
    button.addEventListener('click', (e) => {
        let string = proizvod.id;
        const stringArray = string.split('_');
            
            user.getById(Number(stringArray[1])).then(proizvod => {
                let kutija =  document.getElementById('certain_product-box');
                    kutija.innerHTML = '';
                    kutija.innerHTML += `
                                    <div> 
                                        <h3>${proizvod.IME}</h3>
                                        <p>${proizvod.OPIS}</p>
                                        <p>${proizvod.CENA}</p>
                                    </div>
                                `;
        })
    })
})
console.log(proizvodi);
*/

/*

const client = {
    url: 'http://localhost:5000/'
};

client.request = (headers, path, method, queryStringObject, payload, callback) => {
    headers = typeof headers == 'object' && headers != null ? headers : {};
    path = typeof path == 'string' && path.length > 0 ? path.replace('/', '') : '/';
    method = typeof method == 'string' && ['GET', 'POST', 'PUT', 'DELETE'].indexOf(method) > -1 ? method : 'GET';
    queryStringObject = typeof queryStringObject == 'object' && queryStringObject != null ? queryStringObject : {};
    payload = typeof payload == 'object' && payload != null ? payload : {};
    callback = typeof callback == 'function' ? callback : false; 


    let requestUrl = `${client.url}${path}?`;
    let counter = 0;
    for(let key in queryStringObject) {
        if(queryStringObject.hasOwnProperty(key)) {
            counter++;
            
                if (counter > 1) {
                    requestUrl += '&';
                }

                requestUrl += key + '=' + queryStringObject[key];
        }
    }
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    callback(requestUrl, this);
}



let url = new URL(window.location.href);
console.log(url);
console.log(url.searchParams.get('id'));


let proizvodi = Array.from(document.getElementsByClassName('proizvodi')); // event listener get Proizvod by id i front i back

proizvodi.forEach((proizvod) => {
    let button = proizvod.children[3];
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const propertyNames = ['imeProizvoda', 'opisProizvoda', 'cena'];
        const proizvodData = {};
        let [id, [nizVrednostiProizvoda]] = [proizvod.id.split('_'), [Array.from(proizvod.children)]];
        
        proizvodData['id'] = Number(id[1]);
        
        nizVrednostiProizvoda.forEach((currentProduct, index) => {
            proizvodData[propertyNames[index]] = currentProduct.innerHTML;
        });
            
        window.location.pathname = `/proizvodi/${id[1]}` 
        //createCertainProduct(proizvodData);
        

          // Ovo zovemo u bind forms
        
            client.request(undefined, url.pathname, 'GET', {id: stringArray[1]}, undefined, (data, reference) => {
                console.log(data, reference);
            });
        
        
    })
})
function createCertainProduct(data) {
    let ul = document.getElementById('lista_Novih_Proizvoda');
    let kutija = document.getElementById('certain_product-box');
        ul.innerHTML = '';
        ul.innerHTML += `   <li>
                                <div id=${data.id}>
                                <h3>${data.imeProizvoda}</h3>
                                <p>${data.opisProizvoda}</p>
                                <p>${data.cena}</p>
                                <button>Prijava</button>
                                </div>
                                <li>
        `;
    
}

        





client.bindForm = () => {

}

*/




function generateDraft(n) {
    const nizTenisera = [];

}

const igrac = {ime:'Novak', prezime: 'Djokovic', drzava: 'Srbija', ranking: 1};









