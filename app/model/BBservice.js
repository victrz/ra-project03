//var selectedCategory;
//var url="https://api.nytimes.com/svc/topstories/v2/home";
//var x=0;

$(document).ready(function(){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=SXkiDh8lcFEAqyG6rDmJjlH4&sort=description.asc&show=addToCartUrl,description,image,name,regularPrice,salePrice,sku,url,manufacturer&format=json", true);
            xhr.send();

            xhr.addEventListener("readystatechange", processRequest, false);

            function processRequest(e) {
              if (xhr.readyState == 4 && xhr.status == 200) {
                  var result = JSON.parse(xhr.responseText);
                    loop_products(result.products);
                    console.log(result);
              }
            }
});
function newProduct(description, name, image, salePrice, manufacturer, url){
          var productClone = $("#clone").clone();
          //$(productClone).children(".article-wrap").css({"background": "url('"+image+"')", "background-size": "cover", "background-position": "center"});
          $(productClone).find("h1").text(name);
          $(productClone).find("h2").text(manufacturer);
          $(productClone).find("h2").text(salePrice);
          $(productClone).find("img").attr({"src": image, width: 300});
          $(productClone).find("a").attr("href", url);
          $("#appendHere").append($(productClone).html());
}
function loop_products(products){
  x=0;
  for (var i=0; i < products.length; i++){
    newProduct(products[i].description, products[i].name, products[i].image, products[i].salePrice, products[i].manufacturer, products[i].url);
    x++;
    console.log(x);
    console.log(products[i].name)
  }
}
