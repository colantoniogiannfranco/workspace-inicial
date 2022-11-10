document.addEventListener('DOMContentLoaded', function(e){
    getJSONData(PRODUCT_INFO_URL+localStorage.getItem("productID")+".json").then(function(resultObj){
        if (resultObj.status === "ok"){
             api_info = resultObj.data;
             showProductInfo();
             
                }
    
    })
    getJSONData(PRODUCT_INFO_COMMENTS_URL+localStorage.getItem("productID")+".json").then(function(resultObj){
        if (resultObj.status === "ok"){
             api_coments = resultObj.data;
             comentarios_api();
              comentar();
              relacionados_prod()
               
                }
    
    })

});


function showProductInfo(){

    let Contenidoparaappendear = "";


    Contenidoparaappendear += `
            <h2>${api_info.name}</h2>
            <p> <b>Precio:</b> <br> ${api_info.currency} ${api_info.cost}</p>
            <p> <b>Descripcion:</b> <br> ${api_info.description}</p>
            <p> <b>Categoria:</b> <br> ${api_info.category}</p>
            <p> <b>Cantidad vendidos:</b> <br> ${api_info.soldCount}</p>
            <div style ="float: right; gap: 8px flex-wrap; wrap"> 
            <img  src="${api_info.images[0]}" width="250px"</img> 
            <img  src="${api_info.images[1]}" width="250px"</img>
            <img  src="${api_info.images[2]}" width="250px"</img>
            <img  src="${api_info.images[3]}" width="250px"</img>
            <br>
            <br>
            </div>             
        `
        document.getElementById("contenedor_info_productos").innerHTML = Contenidoparaappendear;
}

function comentarios_api(){
    
    let Contenido = "";

for( let comentario of api_coments){
    Contenido += ` <br>
    <div style="border-top: 1px solid"> <br>
    <p> ${comentario.user} ${comentario.dateTime} <br><span>Puntaje:   ${comentario.score}</p>
    <p> ${comentario.description} </p>
         </div>   
        `
        
}

document.getElementById("contenedor_info_productos").innerHTML += Contenido;

}

function comentar(){

let comentario_append = "";

comentario_append += `

<h2>Comentar</h2>
<form>
<input type= "text" id ="txt-comentario" name = "texto" class="form-control form-control-lg rounded-0 required >
<div class="mt-3">
<select style="widht:120px; height:30px;">
  <option selected>Selecciona una puntuacion</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
</div>
<div class="mt-3 "><button type="submit" class="btn btn-secondary btn-lg " style="" 
id="btncoment">Enviar</button> </div>

</form>
`
document.getElementById("contenedor_info_productos").innerHTML += comentario_append;

}

function relacionados_prod(){



for (let relacionado of api_info.relatedProducts) {
    
    let divRelacionProd = document.createElement('div');
    divRelacionProd.innerHTML =  
    
    `<h2> PRODUCTOS RELACIONADOS </h2>
    <img src ="` + relacionado.image + `" alt="product image" class="img-thumbnail"> <br> <p> `+ relacionado.name +`</p> ` 
    document.getElementById("contenedor_info_productos").appendChild(divRelacionProd);
    divRelacionProd.addEventListener('click', function() {
        localStorage.setItem("productID", relacionado.id);
    window.location.href = "product-info.html";
    });
}


}