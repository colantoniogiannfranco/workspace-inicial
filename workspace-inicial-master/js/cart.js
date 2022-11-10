


document.addEventListener('DOMContentLoaded', function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
             users_info = resultObj.data;
              let num = users_info.articles[0].unitCost;
             carrito_de_compras()
              let cant_productos = document.getElementById("cantidad-prod").value
               
            
              document.getElementById("cantidad-prod").addEventListener('input',function() {
               let x = document.getElementById("cantidad-prod").value
               let subtotal = x * num;
                console.log(subtotal)
                document.getElementById("sub-total").innerHTML ="USD" + subtotal;
                
                })
                }
            })
           
        });
        function carrito_de_compras(){

            
            
            for (let usuario of users_info.articles) {
                
                let divCarrito = document.createElement('div');
                divCarrito.innerHTML =  
                
                `<h2> CARRITO DE COMPRAS </h2>
                <h3>Articulos a comprar</h3>
                <h4>Nombre:</h4>
                <div><p> `+ usuario.name +`</p> </div>
                <div class="container-grid">
                    <div><img src ="` + usuario.image + `" alt="product image" class="img-thumbnail" width="20%" height="20%"> </div>
                    <div> <p> Costo: ` + usuario.unitCost+ ` ` + usuario.currency + ` </p>
                    <div> <p> Cantidad: </p>
                    <input id="cantidad-prod" type="number" value ="`+ usuario.count +`"/>
                    <div> <p> Subtotal: </p> </div>
                    <div id="sub-total"> <p> ` + usuario.unitCost+ ` </p> </div>
                    <h3>Tipo de envio</h3>
                    <form>
                    <p>Elija su envio:</p>
                      <input type="radio" id="premium" name="envio" value="Pr">
                      <label for="html">Premium 2-5 dias</label><br>
                      <input type="radio" id="" name="envio" value="Exp">
                      <label for="html">Express 5-9 dias</label><br>
                      <input type="radio" id="standard" name="envio" value="Std">
                      <label for="html">Standard 12-15 dias</label><br>
                        <br>  
                        <label for="dir">Direccion:</label><br>
                        <input type="text" id="direccion" name="dir" value=""><br>

                        <label for="lname">Numero:</label><br>
                        <input type="number" id="lname" name="lname" value=""><br>

                        <label for="Esq">Esquina:</label><br>
                        <input type="text" id="lname" name="Esq" value=""><br>
                        <input type="submit" value="Enviar">
                        </form>
                 ` 
                document.getElementById("cont-carrito").appendChild(divCarrito);
                
            }
            
            
            }

            

            





 
