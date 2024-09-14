document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.photo-banner');
    const items = document.querySelector('.photo-items');

    banner.addEventListener('mouseover', () => {
        items.style.animationPlayState = 'paused';
    });

    banner.addEventListener('mouseout', () => {
        items.style.animationPlayState = 'running';
    });
});

const products = [
    {
        name: "Olta Takımı",
        image: "resimler/vitrin/1_org_zoom.jpeg",
        description: "Standart kalite olta takımı",
    },
    {
        name: "Olta Makinesi",
        image: "resimler/vitrin/oltamakinesi.jpeg",
        description: "Dayanıklı yem kutusu.",
    },
    {
        name: "Balıkçı Eldiveni",
        image: "resimler/vitrin/ışıklıbalıkçı.jpeg",
        description: "Su geçirmez balıkçı eldiveni.",
    },
    {
        name: "Suni Yem & balıklar",
        image: "resimler/vitrin/Sunibalık.jpeg",
        description: "En Kaliteli Yemler",
    },
    {
        name: "Aksesuarlar",
        image: "resimler/vitrin/Aksesuarr.jpeg",
        description: "Tüm oltalara uygun aksesuarlar",
    },
    {
        name: "Olta İğnesi",
        image: "resimler/vitrin/oltaiğnesi.jpeg",
        description: "Kaliteli İğneler",
    },
];

const vitrinContainer = document.querySelector('.vitrin-grid');

products.forEach(product => {
    const productCard = `
        <div class="vitrin-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="vitrin-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        </div>
    `;
    vitrinContainer.innerHTML += productCard;
});

