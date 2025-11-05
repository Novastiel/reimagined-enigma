document.addEventListener('DOMContentLoaded', function() {
  // Target element to display the message
  const output = document.createElement('h2');
  output.id = 'welcome-message';
  output.style.textAlign = 'center';
  output.style.marginTop = '3rem';
  output.style.fontFamily = 'monospace';
  output.style.fontSize = '1.8rem';
  output.style.color = '#0b7285';
  output.style.textShadow = '0 0 10px rgba(11,114,133,0.4)';
  document.body.appendChild(output);

  // Message to type out
  const message = "Ugly UI";
  let index = 0;

  // Typewriter effect
  function typeEffect() {
    if (index < message.length) {
      output.textContent += message.charAt(index);
      index++;
      setTimeout(typeEffect, 70); // typing speed (ms)
    } else {
      // Small glowing pulse when done typing
      output.animate(
        [
          { textShadow: '0 0 10px rgba(11,114,133,0.6)' },
          { textShadow: '0 0 25px rgba(11,114,133,1)' },
          { textShadow: '0 0 10px rgba(11,114,133,0.6)' }
        ],
        { duration: 2000, iterations: Infinity }
      );
    }
  }

  // Start typing when page loads
  typeEffect();
});
