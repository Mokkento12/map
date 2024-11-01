// Инициализация карты, центрируем её на координатах (например, Спб) и задаем начальный уровень масштаба
const map = L.map("map").setView([59.9343, 30.3351], 10);

// Добавляем слой карты OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

// Добавляем маркер на центр карты
const marker = L.marker([59.9343, 30.3351]).addTo(map);
marker.bindPopup("Это Санкт-Петербург!").openPopup();

// Добавляем обработчик кликов для добавления маркера на любое место, где кликнули на карту
map.on("click", function (e) {
  const { lat, lng } = e.latlng; // Получаем координаты места клика
  const newMarker = L.marker([lat, lng]).addTo(map);
  newMarker
    .bindPopup(`Координаты: ${lat.toFixed(5)}, ${lng.toFixed(5)}`)
    .openPopup();
});
