// 1. Selecciona TODOS los elementos en el HTML que tengan la clase 'panel'
//    y los guarda en una lista (parecida a un array) llamada 'panels'.
const panels = document.querySelectorAll('.panel')

// 2. Recorre cada uno de los paneles que encontró (usando 'forEach').
//    A cada panel individual dentro del bucle, lo llamaremos 'panel'.
panels.forEach(panel => {
    
    // 3. A CADA panel individual, le añade un "escuchador de eventos" 
    //    que se activará cuando el usuario haga 'click' sobre él.
    panel.addEventListener('click', () => {
        
        // 4. CUANDO se hace clic en un panel:
        //    Primero, llama a la función 'removeActiveClasses' (definida más abajo).
        //    Esta función limpiará la clase 'active' de TODOS los paneles.
        removeActiveClasses()
        
        // 5. Después de limpiar, AÑADE la clase 'active' ÚNICAMENTE 
        //    al panel específico en el que se hizo clic.
        panel.classList.add('active')
    })
})

// 6. Aquí se DEFINE la función 'removeActiveClasses'.
//    (Es una 'arrow function' guardada en una constante).
const removeActiveClasses = () => {
    
    // 7. Esta función recorre OTRA VEZ todos los paneles de la lista original.
    panels.forEach(panel => {
        
        // 8. A cada panel, le QUITA la clase 'active'.
        //    (Si un panel no tiene la clase 'active', esta línea simplemente no hace nada).
        panel.classList.remove('active')
    })
}