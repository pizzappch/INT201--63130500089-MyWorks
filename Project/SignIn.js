import { getCookie, setCookie } from '../helpers/cookie.js';

class SignIn {
  constructor(nameElement) { //สร้าง constructor 
    this._nameElement = nameElement;
    this._btn_enter_name = document.querySelector('#btn-enter-name');
    this._name_input = document.querySelector('#name-input');
    this._popUp = document.querySelector('.enter-name-popUp');

    // Event
    this._btn_enter_name.addEventListener('click', () => {
      const nameValue = this._name_input.value; //ตรวจสอบว่ามีค่ารึเปล่า ถ้าไม่มีให้ alert
      if (!nameValue) {
        alert('Please Enter Your Name');
      } else {
        setCookie('name', nameValue, 1 / 2);
        this._popUp.style.display = 'none'; //ถ้ากดปุ่มแล้วก็จะเอา pop up ลง
        this._nameElement.textContent = 'Name :' + nameValue;
      }
    });
    this.render(); 
  }
  render() { //get name ว่ามี name รึเปล่าถ้าไม่มีก็ display none
    const nameCookie = getCookie('name'); //ดูว่ามีคุ้กกี้ชื่อ name เปล่า
    if (!nameCookie) {
      this._popUp.style.display = 'flex'; //ถ้าไม่มีก็ให้ขึ้น flex
    } else {
      this._popUp.style.display = 'none'; //ถ้ามีก็ none
      this._nameElement.textContent = 'Name :' + nameCookie;
    }
  }
}

export default SignIn;
