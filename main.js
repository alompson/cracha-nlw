const linksSocialMedia = {
    github: "alompson",
    youtube: "cursoemvideo",
    facebook: "joaopedro",
    instagram: "alonsoojoao",
    twitter: "maykbrito"
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`;
    }
}

changeSocialMediaLinks();

function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`;
    
    fetch(url)
    .then(response => response.json()) //.then eh uma PROMISSE
    .then(data => {
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userLink.href = data.html_url;
        userImage.src = data.avatar_url;
        userLogin.textContent = data.login;
    })
    //como a arrow function do primeiro .then tem apenas uma acao, nao precisa de {}
    
}

getGithubProfileInfos()


//ARROW FUNCTION
//forma reduzida de escrever uma funcao

//forma normal:
/*
    function nomedafuncao(argumento1, argumento2) {
        codigo...
    }
*/

//arrow function:
/*
    (argumento1, argumento2) => {
        codigo...   
    }

    Ou seja, eu escrevo DIRETAMENTE o argumento e a linguagem entende que aquilo eh uma funcao. Otimo para momentos em que so usaremos a funcao em um lugar do codigo, pois a funcao nao tem nome e fica muito dificil usa-la em outro lugar depois. 
    VANTAGEM => agilidade
    DESVANTAGEM => perda do facil reuso da funcao
*/