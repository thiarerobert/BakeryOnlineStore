let myIDs = document.querySelectorAll('.id_input');

const getItem = async(event) => {
    let data = event.target.dataset.id
    
   window.location.replace('/menu/'+ data)
}

for(let id of myIDs){
    id.addEventListener('click', getItem);
}