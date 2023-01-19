let detailsForm = document.getElementById('details-form')

detailsForm.addEventListener('submit',form)

let destinationContainer = document.querySelector('#destination-container')

function form(evt){
    evt.preventDefault()

    let dName = document.getElementById('name').value
    let dLocation = evt.target.elements['location'].value
    let dPhoto = document.getElementById('photo').value
    let dDescription = document.getElementById('description').value

    for(detail of detailsForm){
        detail.value = ''
    }
    addCard(dName, dLocation, dPhoto, dDescription)
}

function addCard(name, location, photo, description){
    
    if(photo.length === 0){
        photo = 'images/signpost.jpg'
    }

    destinationContainer.innerHTML += `
                            <div class="card" >
                                <img src="${photo}">
                                <div class="card-body">
                                    <h3>${name}</h3>
                                    <h4>${location}</h4>
                                    <p class="card-text">${description}</p>
                                    <button class='remove' onclick="removeCard(this)">Remove</button>
                                </div>
                            </div>
    `   
}

function removeCard(removeButton){
    let cardRemove = removeButton.parentElement.parentElement
    cardRemove.remove()
}
    