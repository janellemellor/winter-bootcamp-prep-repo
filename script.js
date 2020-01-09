//go get the box where we want to put the new name
const nameBox = document.getElementById('the-name');

//go get the inoput element that has the user input
const myInput = document.getElementById('bobby');


//go get the badly named button for the submit
const button = document.getElementById('bobby-button');


//add an event listerner to the button
button.addEventListener('click', () => {
    //when the user clicks, set hte name box's text content to whatever the current value of the inout is
    alert(myInput.value)
    nameBox.textContent = myInput.value
   
})

//add an event listener to the button
//button.addEventListener('click', changeValue)





