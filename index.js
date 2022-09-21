
const openPopUp = document.getElementById('open-pop-up')
const closePopUp = document.getElementById('close-pop-up')
const popUp = document.getElementById('pop-up')
const sendInfo = document.getElementById('send-info')
const inputModal = document.getElementById('input-modal')
const inputModal2 = document.getElementById('input-modal2')
const inputModal3 = document.getElementById('input-modal3')


sendInfo.addEventListener('click',function (e) {
    e.preventDefault();
    if(inputModal.value.length > 2 && inputModal2.value.length > 2 && inputModal3.value.length > 2) {
        alert('Form submitted successfully')
    } else {
        alert('Value must be more than 2 symbols')
    }
    inputModal.value = '';
    inputModal2.value = '';
    inputModal3.value = '';

})

openPopUp.addEventListener('click',function (e) {
    e.preventDefault()
    popUp.classList.add('active');

})

closePopUp.addEventListener('click', function () {
    popUp.classList.remove('active');
})

