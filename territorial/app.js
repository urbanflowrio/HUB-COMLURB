const FILES = {
  dsu: {
    label: "Gerências DSU",
    file: "data/GERENCIAS_DSU.geojson",
    color: "#5b9bd5",
    fill: "#4b86bd"
  },
  dlu: {
    label: "DLU | Novos Bairros 2025",
    file: "data/DLU_Novos_Bairros_estrutura2025.geojson",
    color: "#e87535",
    fill: "#e87535"
  }
};

let map;
let activeLayer;

function initMap() {
  map = L.map("map", {
    zoomControl: true
  }).setView([-22.9068, -43.1729], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  loadLayer("dsu");
}

function setActiveButton(layerKey) {
  document.querySelectorAll(".layerBtn").forEach(btn => btn.classList.remove("active"));

  if (layerKey === "dsu") {
    document.getElementById("btnDSU")?.classList.add("active");
  }

  if (layerKey === "dlu") {
    document.getElementById("btnDLU")?.classList.add("active");
  }
}

function loadLayer(layerKey) {
  const cfg = FILES[layerKey];

  if (!cfg) return;

  setActiveButton(layerKey);

  document.getElementById("infoBox").innerHTML = `Carregando <b>${cfg.label}</b>...`;

  if (activeLayer) {
    map.removeLayer(activeLayer);
  }

  fetch(cfg.file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Arquivo não encontrado: ${cfg.file}`);
      }
      return response.json();
    })
    .then(geojson => {
      activeLayer = L.geoJSON(geojson, {
        style: function () {
          return {
            color: cfg.color,
            weight: 2,
            fillColor: cfg.fill,
            fillOpacity: 0.28
          };
        },

        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, {
            radius: 7,
            color: cfg.color,
            fillColor: cfg.fill,
            fillOpacity: 0.85,
            weight: 2
          });
        },

        onEachFeature: function (feature, layer) {
          const props = feature.properties || {};
          layer.bindPopup(buildPopup(props));
        }
      }).addTo(map);

      const bounds = activeLayer.getBounds();

      if (bounds.isValid()) {
        map.fitBounds(bounds, {
          padding: [30, 30]
        });
      }

      updateKpis(cfg, geojson);
      renderRanking(geojson);
    })
    .catch(error => {
      console.error(error);

      document.getElementById("infoBox").innerHTML = `
        <b>Erro ao carregar a camada.</b><br><br>
        Verifique se o arquivo existe exatamente com este nome:<br>
        <code>${cfg.file}</code>
      `;

      document.getElementById("kpiCamada").textContent = "-";
      document.getElementById("kpiFeicoes").textContent = "0";
      document.getElementById("kpiTipo").textContent = "-";
      document.getElementById("rankBox").innerHTML = "";
    });
}

function buildPopup(props) {
  const keys = Object.keys(props);

  if (!keys.length) {
    return `<b>Área operacional</b><br>Sem atributos disponíveis.`;
  }

  const preferred = [
    "NOME",
    "Nome",
    "nome",
    "GERENCIA",
    "Gerencia",
    "gerencia",
    "GERÊNCIA",
    "BAIRRO",
    "Bairro",
    "bairro",
    "AP",
    "AREA",
    "Área",
    "REGIAO",
    "Regiao",
    "regiao",
    "CODIGO",
    "Código",
    "codigo"
  ];

  const ordered = [
    ...preferred.filter(k => keys.includes(k)),
    ...keys.filter(k => !preferred.includes(k))
  ];

  const titleKey = ordered[0];
  const title = props[titleKey] || "Área operacional";

  const rows = ordered.slice(0, 12).map(k => {
    return `<b>${escapeHtml(k)}:</b> ${escapeHtml(props[k])}<br>`;
  }).join("");

  return `
    <div style="min-width:240px;line-height:1.45">
      <h3 style="margin:0 0 10px 0;color:#4b86bd">${escapeHtml(title)}</h3>
      ${rows}
    </div>
  `;
}

function updateKpis(cfg, geojson) {
  const features = geojson.features || [];
  const first = features[0];
  const geomType = first?.geometry?.type || "-";

  document.getElementById("kpiCamada").textContent = cfg.label;
  document.getElementById("kpiFeicoes").textContent = features.length.toLocaleString("pt-BR");
  document.getElementById("kpiTipo").textContent = geomType;

  document.getElementById("infoBox").innerHTML = `
    <b>${cfg.label}</b><br>
    Camada carregada com ${features.length.toLocaleString("pt-BR")} feições geográficas.<br><br>
    Clique no mapa para visualizar os atributos disponíveis em cada área.
  `;
}

function renderRanking(geojson) {
  const features = geojson.features || [];

  if (!features.length) {
    document.getElementById("rankBox").innerHTML = "";
    return;
  }

  const fields = detectBestFields(features);

  const groups = new Map();

  features.forEach(f => {
    const props = f.properties || {};
    const key = props[fields.primary] || "Não informado";
    groups.set(key, (groups.get(key) || 0) + 1);
  });

  const rows = [...groups.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  document.getElementById("rankBox").innerHTML = rows.map(([name, count]) => `
    <div class="rankItem">
      <div>
        <b>${escapeHtml(name)}</b>
        <small>${escapeHtml(fields.primary)}</small>
      </div>
      <span class="pill">${count.toLocaleString("pt-BR")}</span>
    </div>
  `).join("");
}

function detectBestFields(features) {
  const props = features[0]?.properties || {};
  const keys = Object.keys(props);

  const candidates = [
    "GERENCIA",
    "GERÊNCIA",
    "Gerencia",
    "gerencia",
    "NOME",
    "Nome",
    "nome",
    "BAIRRO",
    "Bairro",
    "bairro",
    "AP",
    "AREA",
    "REGIAO",
    "Regiao"
  ];

  const primary = candidates.find(c => keys.includes(c)) || keys[0] || "sem_campo";

  return { primary };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", initMap);
