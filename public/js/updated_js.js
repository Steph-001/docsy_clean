// JavaScript for TOC toggle functionality on intermediate screens
document.addEventListener('DOMContentLoaded', function() {
  // Create TOC toggle button
  const tocToggle = document.createElement('button');
  tocToggle.className = 'toc-toggle';
  tocToggle.innerHTML = '≡';
  tocToggle.setAttribute('aria-label', 'Toggle Table of Contents');
  tocToggle.setAttribute('title', 'Toggle Table of Contents');
  document.body.appendChild(tocToggle);
  
  // Get TOC element
  const tocElement = document.querySelector('.td-toc');
  
  // Add click event to toggle TOC visibility
  tocToggle.addEventListener('click', function() {
    tocElement.classList.toggle('show');
    tocToggle.innerHTML = tocElement.classList.contains('show') ? '×' : '≡';
  });
});
