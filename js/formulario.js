function validarFormulario() {
    let formulario = document.getElementById('formularioNegocios');
    if (formulario) {
      formulario.addEventListener('submit', function (event) {
        if (!formulario.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          mostrarMensajesDeError();
        }
        formulario.classList.add('was-validated');
      }, false);
    }
  }

  function mostrarMensajesDeError() {
    let formulario = document.getElementById('formularioNegocios');
    if (formulario) {
      let campos = formulario.elements;
      for (let campo of campos) {
        if (campo.tagName === 'INPUT' && campo.required && campo.value.trim() === '') {
          mostrarErrorParaCampo(campo);
        }
      }
    }
  }

  function mostrarErrorParaCampo(campo) {
    let divError = document.createElement('div');
    divError.className = 'invalid-feedback';
    divError.innerHTML = 'Campo incompleto';
    
    if (!campo.nextElementSibling || campo.nextElementSibling.className !== 'invalid-feedback') {
      campo.parentNode.appendChild(divError);
    }
  }

  // Asegurarse de que el script se ejecute después de que el DOM haya sido completamente cargado
  document.addEventListener('DOMContentLoaded', function () {
    validarFormulario();
  });

  // Asegurarse de que el script se ejecute después de que todos los recursos (imágenes, etc.) hayan sido cargados
  window.addEventListener('load', function () {
    validarFormulario();
  });