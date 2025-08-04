function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const phone = document.createElement('p');
  phone.textContent = '📞 Phone: +20 123-456-7890';

  const address = document.createElement('p');
  address.textContent = '📍 Address: 123 Nile Street, Cairo, Egypt';

  const message = document.createElement('p');
  message.textContent = 'We’re open every day from 10am to 10pm. Come visit or call for reservations!';

  contact.appendChild(heading);
  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(message);

  return contact;
}

export default createContact;
