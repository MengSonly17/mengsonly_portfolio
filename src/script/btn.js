const btn = document.querySelectorAll('.nav-links li a');
const btnM = document.querySelectorAll('.mobile-menu-links li a');

btn.forEach( e => {
    e.addEventListener('click',()=>{

        // remove all classname from btn navbar
        btn.forEach(b => {
            b.classList.remove('active');
        })
        
        e.classList = 'active'
    })
} )

btnM.forEach( e => {
    e.addEventListener('click',()=>{

        // remove all classname from btn navbar
        btnM.forEach(b => {
            b.classList.remove('active');
        })
        
        e.classList = 'active'
    })
} )