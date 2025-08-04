import './styles.css';
import createHome  from './home';
import createMenu from './menu';
import createContact from './contact';
const content = document.getElementById('content');
function clearContent() {
    content.innerHTML = '';
}
function loadContact() {
  clearContent();
  content.appendChild(createContact());
}
function loadMenu(){
  clearContent();
  content.appendChild(createMenu());

}
function loadHome() {
  clearContent();
  content.appendChild(createHome());
}
window.addEventListener('DOMContentLoaded', () => {
  loadHome();
  document.getElementById('home-btn').addEventListener('click', loadHome);
  document.getElementById('menu-btn').addEventListener('click', loadMenu);
  document.getElementById('contact-btn').addEventListener('click', loadContact);
});