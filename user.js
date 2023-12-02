function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUses(data))
}

function displayUses(information){

const ul = document.getElementById('users')
for(const user of information){
      const li = document.createElement('li');   
      const p =  document.createElement('p');
      li.innerText = user.name;
      p.innerText = user.email
      ul.appendChild(li)
      ul.appendChild(p)
   }

}




