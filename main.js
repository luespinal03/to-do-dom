let userInput = document.querySelector('#userInput');
let addButton = document.querySelector('#addButton');
let removeComp = document.querySelector('#removeComp');
let removeButt = document.querySelector('#removeButt');
let edit = document.querySelector('#edit');
let ul = document.querySelector('#ul');
let ulAll = ""


// ADD BUTTON
addButton.addEventListener('click', function () {
    event.preventDefault();
    // if there is anything in the input box, add it to the list
    if (userInput.value !== '') {

        // create a new li
        let newLi = document.createElement('li');
       
        // li innerText is w.e user put in the input box
        newLi.innerText = userInput.value;
        // adding an event listener for each li created
        // append li to ul

        // CREATING A NEW DELETE BUTTON NEXT TO EACH LI
        // let newLiDiv = document.createElement('div');
        let deleteButton = document.createElement('button');
        let editLiButton = document.createElement('button');
        let editTextInput = document.createElement("input");
        let editTextSubmit = document.createElement("button");


        // BUTTONS CREATED FOR LI'S
        deleteButton.innerText = 'Delete';
        editLiButton.innerText = 'Edit';
        editTextSubmit.innerText = "Submit";
        


        // GIVING ID'S TO BUTTONS CREATED FOR LI'S
        editLiButton.setAttribute('class', 'btn btn-primary badge rounded-pill bg-primary');
        deleteButton.setAttribute('class', 'btn btn-secondary badge rounded-pill bg-secondary')
        editTextInput.setAttribute("placeholder", "Enter edit here.");


        ul.appendChild(newLi);
        // newLi.appendChild(newLiDiv);
        newLi.appendChild(deleteButton);
        newLi.appendChild(editLiButton);
        newLi.appendChild(editTextInput);
        newLi.appendChild(editTextSubmit);


        // EVENT LISTENER FOR DELETE BUTTON NEXT TO EACH LI
        deleteButton.addEventListener('click', function () {
            event.preventDefault();
            newLi.remove();
        });

        // EDIT BUTTON
        editLiButton.addEventListener('click', function () {
            // if (newLi !== '') {
            //     // newLi.innerText = userInput.value;
            // }

            // newLi === editTextInput.innerText
        });


        // EVENT LISTENER TAKING CARE OF LINE-THROUGH
        newLi.addEventListener('click', function () {
            if (newLi.style.textDecoration === "") {
                newLi.style.textDecoration = "line-through";
            } else {
                newLi.style.textDecoration = ""
            }
        });
        // IF THERES NOTHING IN THE USER INPUT BOX, SHOW THIS ALERT
    } else if (userInput.value === '') {
        alert('ENTER A TASK TO PROCEED')
    }
    // RESET userInput BOX
    userInput.value = ''
    // UPDATES THE LIST TO THE GLOBAL VAIRABLE SO I CAN REACH THE LIST WITH REMOVE ALL AND REMOVE COMPLETED
    ulAll = document.querySelectorAll('#ul li');
});



// REMOVE COMP
removeComp.addEventListener('click', function () {
    event.preventDefault();
    console.log('remove completed clicked')


    if (ulAll.length === 0) {
        alert('LIST IS EMPTY');
    } else if (ulAll.length !== 0) {
        alert('Select item to be completed');

        // Removes anything with line through it
        for (let item of ulAll) {
            if (item.style.textDecoration === "line-through") {
                item.remove();
            // } else if (item.style.textDecoration !== "line-through" && ulAll.length !== 0) {
                // alert('Select item to be completed');
            }
        }
        // } else if (ulAll.length !== 0 && ulAll[i].style.textDecoration !== "line-through" ){
        //     alert('Select item to be completed')
    }
});



// REMOVE ALL BUTTON
removeButt.addEventListener('click', function () {
    event.preventDefault();
    console.log('remove ALL clicked');

    if (ulAll.length === 0) {
        alert('LIST IS ALREADY EMPTY');
    } else if (ulAll.length !== 0) {
        for (let i = 0; i < ulAll.length; i++) {
            ulAll[i].remove();
        }
    }
});




