let contenedor_productos = document.getElementById('con-1');
let contendor = document.getElementById('contenedor-filtro');
let btnAsendente = document.getElementById('btn-asendente');
let btnDesendente = document.getElementById('btn-desendente');
let btnRelevacia = document.getElementById('btn-relevancia');
let lista_original = [];
let inputMin = document.getElementById('input-min');
let inputMax = document.getElementById('input-max');
let btnFiltrar = document.getElementById('btn-filtrar');


btnAsendente.addEventListener('click', function(){
    inventario.sort((a, b) => {
        if(a.cost > b.cost) {return -1;}
        if(a.cost < b.cost) {return 1;}
        return 0;
        
    });
    showCategoriesList()
});

btnDesendente.addEventListener('click', function(){
    inventario.sort((a, b) => {
        if(a.cost < b.cost) {return -1;}
        if(a.cost > b.cost) {return 1;}
        return 0;
        
    });
    showCategoriesList()
});

btnRelevacia.addEventListener('click', function(){
    inventario.sort((a, b) => {
        if(a.soldCount > b.soldCount) {return -1;}
        if(a.soldCount < b.soldCount) {return 1;}
        return 0;
        
    });
    showCategoriesList()
});

btnFiltrar.addEventListener('click', function(){
    let mini;
    if(inputMin.value !== '' && inputMin.value !== undefined) {
        mini = inputMin.value;
    } else {
        mini = -Infinity;
    };
    let maxi;
    if(inputMax.value !== '' && inputMax.value !== undefined) {
        maxi = inputMax.value;
    } else {
        maxi = Infinity;
    };
    inventario = inventario.filter(producto_filtro => producto_filtro.cost >= mini && producto_filtro.cost <= maxi);   
    showCategoriesList()
});





function showCategoriesList(){

    let htmlContentToAppend = "";

    for(let i = 0; i < inventario.length; i++){
        let vehiculos = inventario[i];

        

        

            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action" id="producto" onclick="producto_ID(${vehiculos.id})">
            <div class="row">
                <div class="col-3">
                    <img src ="` + vehiculos.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ vehiculos.name + " - " + vehiculos.currency +" "+vehiculos.cost + `</h4> 
                        <p> `+ vehiculos.description +`</p> 
                        </div>
                        <small class="text-muted">` + vehiculos.soldCount +`  artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        
        
        
    }
    document.getElementById("con-1").innerHTML = htmlContentToAppend;
}

document.addEventListener('DOMContentLoaded', function(e){
    getJSONData(LISTADO_AUTOS).then(function(resultObj){
        if (resultObj.status === "ok"){
            lista_original = resultObj.data;
             info_api = resultObj.data;
             inventario = info_api.products;
             showCategoriesList();
               
                }
            
        

    })

});


function producto_ID(id) {
    localStorage.setItem("productID", id);
    window.location.href = "product-info.html";
}
 