self.addEventListener("install", e => {
e.waitUntil(
caches.open("padanito-cache").then(cache => {
return cache.addAll([
"index.html",
"style.css",
"script.js"
]);
})
);
});
