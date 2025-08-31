const destinations = [
    // BULELENG
    {
        category: "waterfall",
        region: "buleleng",
        img: "https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1554285066122-JJIP8BVSZLRP6L6RO6GC/The_Common_Wanderer_Sekumpul_waterfall_guide-10.jpg?format=2500w",
        alt: "Jelajahi pantai kami yang indah",
        title: "Sekumpul Waterfall",
        descCrd: {descId: "Desa Sekumpul, Kecamatan Sawan", descEn: "Sekumpul Village, Sawan Subdistrict."},
        ratingEn: "4.9 (312 reviews)",
        ratingId: "4.9 (312 pengulas)",
        ratingText: "4.9 (312)",
        badge: { textEn: "Popular", textId: "Populer", color: "bg-yellow-400" }
    },
    {
        category: "waterfall",
        region: "buleleng",
        img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6313fc7c-cbe5-46e8-a442-e2cc6c9bdbb3.png",
        alt: "Jelajahi pantai kami yang indah",
        title: "Bukit campuhan",
        descCrd: {descId: "Pantai Pelabuhan Singaraja", descEn: "Singaraja Harbor Beach, Buleleng, Bali"},
        ratingEn: "4.9 (312 reviews)",
        ratingId: "4.9 (312 pengulas)",
        ratingText: "4.9 (312)",
        badge: { textEn: "", textId: "", color: "" }
    }
];

const container = document.getElementById("gallery-container");

destinations.forEach(dest => {
    const badgeHtml = dest.badge
        ? `<div class="absolute top-4 right-4 ${dest.badge.color} text-white px-3 py-1 rounded-full text-xs font-bold translate"
                            data-en="${dest.badge.textEn}" data-id="${dest.badge.textId}">
                            ${dest.badge.textEn}
                        </div>` : "terjadi kesalahan";

    container.innerHTML += `
    <div class="gallery-item relative rounded-xl overflow-hidden shadow-lg h-80" data-category="${dest.category}"
                        data-region="${dest.region}">
                        <img src="${dest.img}"
                            alt="${dest.alt}"
                            class="w-full h-full object-cover" loading="lazy">
                        <div class="destination-info absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 class="text-xl font-bold mb-1">${dest.title}</h3>
                            <p class="text-sm translate" data-en="${dest.descCrd.descEn}" data-id="${dest.descCrd.descId}">${dest.descCrd.descEn}</p>
                            <div class="flex items-center mt-2">
                                <span class="text-yellow-300 mr-1">★</span>
                                <span class="text-sm translate" data-en="${dest.ratingEn}"
                                    data-id="${dest.ratingId}">${dest.ratingText}</span>
                            </div>
                        </div>
                        <div class="absolute top-4 right-4 ${dest.badge.color} text-white px-3 py-1 rounded-full text-xs font-bold translate"
                            data-en="${dest.badge.textEn}" data-id="${dest.badge.textId}">
                            ${dest.badge.textEn}
                        </div>
                    </div>`;
});