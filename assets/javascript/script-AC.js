var input1 = document.getElementById('input-1');
var input2 = document.getElementById('input-2');
var input3 = document.getElementById('input-3');
var input4 = document.getElementById('input-4');
var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
    var storedArray = [];
    if (localStorage.getItem('CustomInput') !== null) {
        storedArray = JSON.parse(localStorage.getItem('CustomInput'));
    }
    
    var newArray = [input1.value, input2.value, input3.value, input4.value];
    console.log(newArray);

    storedArray.push(newArray);

    localStorage.setItem('CustomInput', JSON.stringify(storedArray));
});