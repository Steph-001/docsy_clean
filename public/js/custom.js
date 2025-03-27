// Custom JavaScript for enhancing navigation functionality

document.addEventListener('DOMContentLoaded', function() {
  // Auto-close mobile TOC menu when a link is clicked and scroll to section
  const pageTOC = document.getElementById('pageTOC');
  if (pageTOC) {
    const tocLinks = pageTOC.querySelectorAll('a');
    
    tocLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        // Get the target section ID from the href
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Close the TOC menu
          const bsCollapse = new bootstrap.Collapse(pageTOC);
          bsCollapse.hide();
          
          // Wait for the collapse animation to finish before scrolling
          setTimeout(function() {
            // Get the header height for offset
            const headerHeight = document.querySelector('header').offsetHeight;
            // Add additional padding to ensure header is fully visible
            const additionalPadding = 20;
            const totalOffset = headerHeight + additionalPadding;
            
            // Get the absolute position of the element on the page
            const rect = targetElement.getBoundingClientRect();
            const absoluteTop = rect.top + window.pageYOffset;
            
            // Scroll to the element with the offset
            window.scrollTo({
              top: absoluteTop - totalOffset,
              behavior: 'smooth'
            });
            
            // Add a second scroll check to ensure proper positioning
            // This helps with lower sections of the page
            setTimeout(function() {
              // Get the new position after initial scroll
              const newRect = targetElement.getBoundingClientRect();
              
              // If the element is not properly positioned (header might be covering it)
              if (newRect.top < totalOffset) {
                // Adjust the scroll position
                window.scrollBy({
                  top: newRect.top - totalOffset,
                  behavior: 'smooth'
                });
              }
            }, 500); // Wait for the initial scroll to complete
          }, 350); // Wait for the collapse animation to finish
        }
      });
    });
  }
  
  // Also handle the other mobile menus (materials and units)
  const mobileMenus = ['materialsSidebar', 'unitsSidebar'];
  
  mobileMenus.forEach(function(menuId) {
    const menu = document.getElementById(menuId);
    if (menu) {
      const menuLinks = menu.querySelectorAll('a');
      
      menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          // Close the menu when a link is clicked
          const bsCollapse = new bootstrap.Collapse(menu);
          bsCollapse.hide();
        });
      });
    }
  });
});
