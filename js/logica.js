var cesar=cesar || (function(){
 
    
 
    return{
        encode: (Texto, Desplazamiento) => {
            let resultado = "";
            for (let i = 0; i < Texto.length; i++) {
        
              
              let texto = (Texto.charCodeAt(i) - 65 + parseInt(Desplazamiento)) % 26 + 65;
                console.log(Texto.charCodeAt(i));
              
                resultado += String.fromCharCode(texto);
            }
        
            return resultado;
        
          },
        
          decode: (Texto, Desplazamiento) => {
            let resultado = "";
            for (let i = 0; i < Texto.length; i++) {
        
              
              let texto = (Texto.charCodeAt(i) + 65 - parseInt(Desplazamiento)) % 26 + 65;
        
              
              resultado += String.fromCharCode(texto);
        
            }
        
            return resultado;
        
          }
    };
 
 
 
 })();
 
 function codificar(){
      alert("Cadena "+document.getElementById("cadena").value.toUpperCase() )
      alert("Desp "+document.getElementById("desp").value)
      if(document.getElementById("cadena").value.toUpperCase() == " " || document.getElementById("desp").value == 0){
        alert("El campo cadena y el desplazamiento no pueden estar vacios")
        return false;
      }
     document.getElementById("resultado").innerHTML = cesar.encode(
         document.getElementById("cadena").value.toUpperCase(), document.getElementById("desp").value).toLowerCase();
 }
 
 function decodificar(){
     document.getElementById("resultado").innerHTML = cesar.decode(
         document.getElementById("cadena").value.toUpperCase(), document.getElementById("desp").value).toLowerCase();
 }
 
 
 