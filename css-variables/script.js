// Accessing the CSS variable
// console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--div-background-color'))

document.getElementById('dark-theme-button').addEventListener('click', () => {
  document.documentElement.style.setProperty('--background-color', '#333')
})

document.getElementById('light-theme-button').addEventListener('click', () => {
  document.documentElement.style.setProperty('--background-color', '#fff')
})