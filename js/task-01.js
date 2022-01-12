const categoriesRef = document.querySelector('#categories')

console.log('Number of categories:' , categoriesRef.childElementCount)

const elementsOfCategoriesRef = [...categoriesRef.children].map(element => {
    console.log('Category:', element.firstElementChild.textContent),
    console.log ('Elements:', element.lastElementChild.children.length)})

