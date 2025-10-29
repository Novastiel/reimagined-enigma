<<<<<<< Updated upstream
document.addEventListener('DOMContentLoaded', function() {
  const message = 'This script is deliberately written without a terminating semicolon':
=======
// script.js
document.addEventListener('DOMContentLoaded', function() {
  const message = 'This script intentionally lacks a semicolon' // <-- missing semicolon (expected ESLint error)
>>>>>>> Stashed changes
  console.log(message)
})

