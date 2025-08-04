function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const title = document.createElement('h1');
  title.textContent = 'Our Menu';

  const items = [
    {
      name: 'Spaghetti Bolognese',
      price: '$12',
      ingredients: ['Spaghetti', 'Beef', 'Tomato Sauce', 'Parmesan'],
    },
    {
      name: 'Grilled Chicken Salad',
      price: '$10',
      ingredients: ['Grilled Chicken', 'Lettuce', 'Tomatoes', 'Vinaigrette'],
    },
    {
      name: 'Margherita Pizza',
      price: '$11',
      ingredients: ['Tomato', 'Mozzarella', 'Basil'],
    },
    {
      name: 'Lemon Cheesecake',
      price: '$6',
      ingredients: ['Cream Cheese', 'Lemon', 'Sugar', 'Graham Crust'],
    },
  ];

  items.forEach((item) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menu-item');

    const name = document.createElement('h2');
    name.textContent = `${item.name} - ${item.price}`;

    const ingredientList = document.createElement('ul');
    item.ingredients.forEach((ingredient) => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ingredientList.appendChild(li);
    });

    itemContainer.appendChild(name);
    itemContainer.appendChild(ingredientList);
    menu.appendChild(itemContainer);
  });

  return menu;
}

export default createMenu;
