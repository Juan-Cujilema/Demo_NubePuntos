document.addEventListener('DOMContentLoaded', function () {
  // Crear un nuevo elemento de imagen
  let imgMenuToggle = document.createElement('img');
  
  // Establecer la fuente de la imagen
  imgMenuToggle.src = 'https://via.placeholder.com/150'; // Reemplazar con la URL de tu imagen
  
  // Añadir una descripción alternativa a la imagen
  imgMenuToggle.alt = 'Menu Button';
  
  // Agregar una función de clic a la imagen
  imgMenuToggle.onclick = function() {
    alert('¡Imagen clickeada!'); // Ejemplo de función al hacer clic
  };

  // Añadir una clase CSS a la imagen para estilos personalizados
  imgMenuToggle.classList.add('custom_image');

  // Añadir la imagen al contenedor existente en el DOM
  document.getElementById('sidebar_header1').appendChild(imgMenuToggle);
});