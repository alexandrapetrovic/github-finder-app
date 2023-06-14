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
       
        const name = response.name ? response.name : 'Not provided';
       
        const username = response.login; 

        const bio = response.bio ? response.bio : 'No bio';

        const email = response.email ? response.email : 'No email';

        const following = response.following ? response.following : '0';

        const followers = response.followers ? response.followers : '0';

        const publicRepos = response.public_repos ? response.public_repos : '0';

        const location = response.location ? response.location : 'No location';

        const blog = response.blog ? response.blog : 'No blog';

        let company = response.company ? response.company : 'Not provided';

        let createdAt = response.created_at; //2007-10-20T05:24:19Z

        let createdAtarr = createdAt.split("T");

        console.log (createdAtarr);

        console.log (createdAtarr[0]); //2007-10-20

        let datum = createdAtarr[0];

        let datumarr = datum.split("-");

        let godina = datumarr[0];

        let mesec = datumarr[1];

        let dan = datumarr[2];

        const avatar = response.avatar_url;

        const card = `
        <h2 class="text-primary mt-8 mb-3 fw-bold">Results:</h2>
        <article class="card">
            <div class="row-1">
                <img class="card-img-top" src=${avatar} alt="card image 1">
                <div>
                    <h2 class="fw-bold">${name}</h2>
                    <span class="text-primary fw-bold">${username}</span>
                </div>
            </div>
            <div class="row-2">
                <div class="data">
                    <p>${publicRepos}<br><span>Repositories</span></p>
                    <div class="divider"></div>
                    <p>${followers}<br><span>Followers</span></p>
                    <p>${following}<br><span>Following</span></p>
                </div>
            </div>
            <duv class="row-3 my-10">
                <div class="d-flex">
                    <img class="icon" src="./icons/building.png" alt="building-icon" width="18" height="20">
                    <p class="mx-4 fw-medium">${company}</p>
                </div>
                <div class="d-flex">
                    <img class="icon" src="./icons/card.png" alt="card-icon" width="18" height="20">
                    <p class="mx-4 text-muted fw-medium">${bio}</p>
                </div>
                <div class="d-flex">
                    <img class="icon" src="./icons/clock.png" alt="clock-icon" width="18" height="20">
                    <p class="mx-4 fw-medium">Active seance ${dan}.${mesec}.${godina}</p>
                </div>
                <div class="d-flex">
                    <img class="icon" src="./icons/email.png" alt="email-icon" width="18" height="20">
                    <p class="mx-4 text-muted fw-medium">${email}</p>
                </div>
                <div class="d-flex">
                    <img class="icon" src="./icons/location.png" alt="location-icon" width="18" height="20">
                    <p class="mx-4 fw-medium">${location}</p>
                </div>
                <div class="d-flex">
                    <img class="icon" src="./icons/link.png" alt="link-icon" width="18" height="20">
                    <a class="mx-4 fw-medium" href=${blog} target="_blank">${blog}</a>
                </div>
                    
            </div>
        </article>
        `
        results.innerHTML=card;
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
