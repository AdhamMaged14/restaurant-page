import restaurantImage from './assets/jason-leung-poI7DelFiVA-unsplash.jpg'
function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const card = document.createElement('div');
  card.classList.add('home-card');

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Domz diner';

  const description = document.createElement('p');
  description.textContent = 'We serve the best food in town, made with love and secret spices.';

  const image = document.createElement('img');
  image.src = restaurantImage;
  image.alt = 'my restaurant image';

  card.appendChild(heading);
  card.appendChild(description);
  card.appendChild(image);
  home.appendChild(card);

  return home;
}
export default createHome;
