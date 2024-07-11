const items = document.querySelectorAll('.item')
            console.log(items)

            items.forEach(item => {
                console.log(item)
                item.addEventListener('click', () => {
                    const arrow = item.querySelector('.arrow')
                    arrow.classList.toggle('icon-arrow')
                })
            });

            document.addEventListener("DOMContentLoaded", function() {
              
                const hamburgerMenuButton = document.querySelector('.hamburger-menu');
        
              
                const mobileMenu = document.querySelector('.mobile-menu');
        
              
                hamburgerMenuButton.addEventListener('click', function() {
                    
                    if (mobileMenu.style.display === "none") {
                        mobileMenu.style.display = "block";
                    } else {
                        mobileMenu.style.display = "none";
                    }
                });
            });

            function enableDropdown(selectedDropdownItem) {
                document.getElementById(selectedDropdownItem).classList.contains('closed') 
               ? document.getElementById(selectedDropdownItem).classList.remove("closed") 
               :  document.getElementById(selectedDropdownItem).classList.add("closed")
           }
          
        
           document.getElementById("create-client-header").addEventListener("click", () => enableDropdown("create-clients-body") )
           document.getElementById("get-client-header").addEventListener("click", () => enableDropdown("get-clients-body") )  
           document.getElementById("create-calling-header").addEventListener("click", () => enableDropdown("create-calling-body") ) 
           document.getElementById("get-events-header").addEventListener("click", () => enableDropdown("get-events-body") ) 
           document.getElementById("get-tec-header").addEventListener("click", () => enableDropdown("get-tec-body") ) 
           document.getElementById("get-statuslist-header").addEventListener("click", () => enableDropdown("get-statuslist-body") ) 

           