var form= document.getElementById("input_container");

form.addEventListener('submit', function(e){
    e.preventDefault();
    var search_user = document.getElementById("search").value;

    var originalName= search_user.split(' ').join('');
    fetch("https://api.github.com/users/" + originalName)
    .then(result => result.json())
    .then((data) => { console.log(data)
    document.getElementById('result').innerHTML=
    `<a href="https://www.github.com/${originalName}"><img src= "${data.avatar_url}"/>`

    document.getElementById("profile-container").innerHTML=`<span>Name: ${data.name}</span>`
    document.getElementById("profile-username-container").innerHTML=`<span>Username: ${data.login}</span>`
    document.getElementById("profile-repo-container").innerHTML=`<span>Repos: ${data.public_repos}</span>`
    document.getElementById("profile-url-container").innerHTML=`<span>URL: ${data.html_url}</span>`

    })
})
var modal = document.getElementById("container");
var btn = document.getElementById('myBtn'); 
var span = document.getElementsByClassName("close")[0];
      btn.onclick = function() { 
              modal.style.display = "block"; 
        }
        span.onclick=function(){
            modal.style.display = "none";
        } 
        window.onclick = function(event){
            if(event.target == modal){
                modal.style.display = "none";
            }
        }
      
