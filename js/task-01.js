
const categoriesRef = document.querySelector('#categories')
const elementsOfCategoriesRef = document.querySelectorAll('.item')

console.log('Number of categories:' , categoriesRef.childElementCount)

elementsOfCategoriesRef.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent),
    console.log ('Elements:', element.children[1].children.length)
})

