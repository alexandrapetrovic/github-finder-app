//api - application programming interfece 
//https... /users/
//fetch - js

console.log("Script loaded");

//funkcija koja ima zadatak da dobavi korisnika:
const getUser = async (username) => {
    console.log(username)

    //pravimo url sa kog ćemo dobaviti podatke
   const url = `https://api.github.com/users/${username}`;
    //kad koristimo await uvek treba async
    const response = await (await fetch(url)).json()
    const results = document.getElementById('results');
    console.log(response)
    if (response.message === 'Not Found') {
        let responseText = `
        <div class="d-flex">
            <h2>${response.message}</h2>
            <p>x</p>
        </div>
        `
        results.innerHTML = responseText;
    } else {
       //ternarni operator ? :
        const name = response.name ? response.name : 'Not provided';
        /*if (response.name) {
            name = response.name;
        } else {
            name = 'Not provided';
        }*/
        }
        console.log(name)
    }
    
}

const getUsers = (username) => {

}
//arrow function - ES6
const onSearch = () => {
    console.log("Button clicked")


    //ako korisnik nije ništa uneo javi mu da unese username
    const errorUsername = document.getElementById('error-username');
    errorUsername.innerHTML = '';
    //ispraznimo results kontejner na search
    document.getElementById('results').innerHTML = '';

    if (username.value === '') {
        //console.log("Please Enter Username")
        errorUsername.innerHTML = 'Please Enter Username';
    } else {
        //todo fetch user  
        getUser(username.value);
    }

}

    const username = document.getElementById('username');
    const searchBtn = document.getElementById('search');
    searchBtn.addEventListener('click', onSearch);
