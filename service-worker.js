self.addEventListener("install", event => {
  self.skipWaiting()
})

self.addEventListener("activate", event => {
  // Destroying old caches
  self.clients.claim()
})

self.addEventListener("fetch", event => {
  // if (event.request.url.includes("pokeapi.co")){
  //   console.log("You're trying to access the pokeapi!")
  //   event.respondWith(new Response(JSON.stringify({
  //     name: "Charmander",
  //     sprites: {
  //       front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //     }
  //   })))
  // }
})
