function validar(f){
    var ok = true;
    var acep = "Formulario enviado";
        if(document.formulario.ficha.value.length==0){
                ok = false;
                document.formulario.ficha.focus();
                alert("Debe ingresar un código");
                return 0;
        }
        if(document.formulario.nombre.value.length==0){
                ok = false;
                document.formulario.nombre.focus();
                alert("Debe ingresar un nombre");
                return 0;
        }
        if(document.formulario.apellido.value.length==0){
                ok = false;
                document.formulario.apellido.focus();
                alert("Debe ingresar un apellido");
                return 0;
        }
        if(document.formulario.edad.value.length==0){
                ok = false;
                document.formulario.edad.focus();
                alert("Dabe ingresar la edad");
                return 0;
        }

            alert(acep);
            document.formulario.submit();
}

<!-- Validar campo letras -->       
function letras(e) {
    key=e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letra = " abcdefghijklmnñopqrstuvwxyzáéíóú";
    especiales = "8-37-38-46-164";
    teclado_especial = false;
        for(var i in especiales){
            if(key==especiales[i]){
                teclado_especial=true; break;     
            }
        }
            
        if(letra.indexOf(teclado)==-1 && !teclado_especial){
            return false;
        }
    }        
<!-- -------------------- -->

<!-- Validar campo numerico mientras se escribe -->
    function numerico(e){
        key=e.keyCode || e.which;
        teclado = String.fromCharCode(key);
        numero="0123456789";

        if(numero.indexOf(teclado)==-1){
            return false;
        }
    } 
<!-- ----------------------------------------- -->