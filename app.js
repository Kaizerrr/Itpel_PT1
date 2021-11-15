const nameInput = document.querySelector('#input-name');
const numberInput = document.querySelector('#input-number');
const cancelBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const contactList = document.querySelector('#contact-list')
const totalContacts = document.querySelector('#total-contact');


let myTotalContacts = 0;

const clear = () =>{
    nameInput.value = '';
    numberInput.value = '';
};

cancelBtn.addEventListener('click', clear);

const presentAlert = ()=> {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'ALERT';
    alert.message = 'Please Enter Contact Name and Contact Number';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    alert.present();
  };

  addBtn.addEventListener('click', () => {
    const nameEntered = nameInput.value;
    const numberEntered = numberInput.value;

    if(nameEntered.trim().length <= 0 || numberEntered <= 0 || numberEntered.trim().length <= 0) {
      presentAlert();
      return;
    };
  
    console.log(nameEntered, numberEntered);

    const newContact = document.createElement('ion-item');
    newContact.textContent = nameEntered + ': ' + numberEntered;
    contactList.appendChild(newContact);

    clear();
});

