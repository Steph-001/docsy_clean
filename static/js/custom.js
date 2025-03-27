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
            // Calculate position accounting for fixed header
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            // Smooth scroll to the target section
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }, 350); // Adjust timing based on collapse animation duration
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
