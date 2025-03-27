// Custom JavaScript for enhancing navigation functionality

document.addEventListener('DOMContentLoaded', function() {
  // Auto-close mobile TOC menu when a link is clicked
  const pageTOC = document.getElementById('pageTOC');
  if (pageTOC) {
    const tocLinks = pageTOC.querySelectorAll('a');
    
    tocLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // Close the TOC menu
        const bsCollapse = new bootstrap.Collapse(pageTOC);
        bsCollapse.hide();
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
