const version = 1;

let files = [
"/",
"assets/stylesheets/application.css",
"assets/javascript/application.js",
"index.html",
"assets/images/icon.png",
"assets/images/icons.png",
"https://fonts.googleapis.com/css?family=Source+Sans+Pro:400",
]

self.addEventListener("install", function(){
  console.log("Afinador is ready");

  caches.open("afinador-files-" + version).then(cache => {
    cache.addAll(files)
      .then(function(){
        caches.delete("afinador-files-" + (version - 1));
        caches.delete("afinador-files");
      });
  });

});

self.addEventListener("fetch", function(event){
    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })
    event.respondWith(promiseResposta)
})
