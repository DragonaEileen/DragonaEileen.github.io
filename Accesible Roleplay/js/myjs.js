    //Boton Light mode
    const checkbox = document.querySelector('input[role="switch"]');
    const checkboxElement = document.getElementById('light-dark-mode-text');
    const div01 = document.getElementById('div01');

    //Evento de cambio al checkbox
    checkbox.addEventListener('change', function(){
        //Verifica si el checkbox cambia
        if (checkbox.checked){
            document.documentElement.setAttribute('data-bs-theme', 'light')
            checkboxElement.innerHTML = 'Dark';
            
        } else{
            document.documentElement.setAttribute('data-bs-theme', 'dark')
            checkboxElement.innerHTML = 'Light';
            
        }
    });