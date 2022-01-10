const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients')

const items = ingredients.map(item => {
  const itemsRef = document.createElement('li');
  itemsRef.classList.add('item');
  itemsRef.textContent = item;
  return itemsRef
})

ingredientsRef.append(...items)


