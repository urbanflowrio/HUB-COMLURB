const map = L.map('map').setView([-22.9068, -43.1729], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

fetch('data/mapa_operacional.geojson')
    .then(response => response.json())
    .then(data => {

        const geoLayer = L.geoJSON(data, {
            style: {
                color: '#4b86bd',
                weight: 2,
                fillColor: '#5b9bd5',
                fillOpacity: 0.35
            },

            onEachFeature: function(feature, layer) {

                let props = feature.properties || {};

                let popup = `
                    <div style="min-width:220px">
                        <h3 style="margin:0 0 10px 0;color:#4b86bd">
                            ${props.nome || 'Área operacional'}
                        </h3>

                        <b>Bairro:</b> ${props.bairro || '-'}<br>
                        <b>Gerência:</b> ${props.gerencia || '-'}<br>
                        <b>Status:</b> ${props.status || '-'}
                    </div>
                `;

                layer.bindPopup(popup);
            }
        });

        geoLayer.addTo(map);

        map.fitBounds(geoLayer.getBounds());

    })
    .catch(error => {
        console.error('Erro ao carregar GeoJSON:', error);
    });
