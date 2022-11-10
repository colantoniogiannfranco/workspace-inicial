


document.addEventListener('DOMContentLoaded', function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
             users_info = resultObj.data;
              let num = users_info.articles[0].unitCost;
              localStorage.setItem("subTotal-ls", num);
             carrito_de_compras()
             
               
            
              document.getElementById("cantidad-prod").addEventListener('input',function() {
               let x = document.getElementById("cantidad-prod").value
               const subtotal = x * num;
               localStorage.setItem('subTotal-ls',subtotal)
                //console.log(subtotal)
                document.getElementById("sub-total").innerHTML = "USD"+ subtotal;
                document.getElementById("sub-total-1").innerHTML ="USD" + subtotal;
                // Esto sirve para extraer los datos y calcular el envio en base al producto en el carrito.
                })
                if (document.querySelector('input[name="envio"]')) {
                  document.querySelectorAll('input[name="envio"]').forEach((elem) => {
                    elem.addEventListener("change", function(event) {
                      let envios = parseInt(localStorage.getItem("subTotal-ls"));
                      var item = event.target.value;
                    radioResult = envios * (item/100)
                    let totalCarr = envios + radioResult;
                    document.getElementById("envio").innerHTML = "USD$ "+ radioResult;
                    document.getElementById("total").innerHTML = "USD$ "+ totalCarr;
                    console.log(radioResult);
                  
                  });
                  });
                }
                }
            })
           
        });
        function carrito_de_compras(){

            
            
            for (let producto_carr of users_info.articles) {
                
                let divCarrito = document.createElement('div');
                divCarrito.innerHTML =  
                `<h2> CARRITO DE COMPRAS </h2>
                <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Costo</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src ="${producto_carr.image}" alt="product image" class="img-thumbnail" width="10%" height="10%"></td>
                    <td>${producto_carr.name}</td>
                    <td>${producto_carr.unitCost + producto_carr.currency}</td>
                    <td><input id="cantidad-prod" type="number" value ="${producto_carr.count}"></td>
                    <td id="sub-total"> USD$${producto_carr.unitCost}</td>
                  </tr>
                </tbody>
              </table>
              <h3>Tipo de envio</h3>
              <form>
              <p>Elija su envio:</p>
            <input type="radio" id="premium" name="envio" value="15">
               <label for="html">Premium 2-5 dias</label><br>
               <input type="radio" id="Express" name="envio" value="7">
               <label for="html">Express 5-9 dias</label><br>
               <input type="radio" id="standard" name="envio" value="5">
               <label for="html">Standard 12-15 dias</label><br>
                  <br>  
                  <label for="dir">Direccion:</label><br>
                  <input type="text" id="direccion" name="dir" value=""> <br>

                  <label for="lname">Numero:</label><br>
                  <input type="number" id="lname" name="lname" value=""> <br>

                  <label for="Esq">Esquina:</label><br>
                  <input type="text" id="lname" name="Esq" value=""> <br>
                  <input type="submit" value="Enviar">
                  </form>
                <br>
                <div class="card" style="width: 18rem;">
                <h3> Costos </h3>
                <ul class="list-group list-group-flush">
                  
                <li class="list-group-item">
                  <div class="row "><p class="col my-0">Subtotal :<p id="sub-total-1" class="col my-0 text-end"
                  </p> USD$${producto_carr.unitCost}</div>
                  </li>

                  <li class="list-group-item"><div class="row "><p class="col my-0">Costo de envio :<p id="envio" class="col my-0 text-end"
                  </p></div>
                  </li>
                  
                  <li class="list-group-item"><div class="row "><p class="col my-0">Total :<p id="total" class="col my-0 text-end"
                  </p></div>
                  </li>
                </ul>
              </div>
                   
                 ` 
                document.getElementById("cont-carrito").appendChild(divCarrito);
                
            }
        
            }

            let inputCuentaBanc = document.getElementById('inpCuentaBanc');

            document.getElementById('flexRadioDefault1').addEventListener('click', function(e) {
              console.log('Vamos a habilitar el input text');
              inputCuentaBanc.disabled = true;
              numTarjeta.disabled = false;
              numCodSeg.disabled = false;
              fechaVenc.disabled = false;
            });

            let numTarjeta = document.getElementById('inputNumTarj');
            let numCodSeg = document.getElementById('codSeguridad');
            let fechaVenc = document.getElementById('fechaVenc');

            document.getElementById('RadiocuentaBanc').addEventListener('click', function(e) {
              inputCuentaBanc.disabled = false;
              numTarjeta.disabled = true;
              numCodSeg.disabled = true;
              fechaVenc.disabled = true;

            });

            

            





 
