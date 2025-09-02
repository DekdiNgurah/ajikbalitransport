const destinations = [
    // BULELENG
    {
        category: "waterfall",
        region: "buleleng",
        img: "https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1554285066122-JJIP8BVSZLRP6L6RO6GC/The_Common_Wanderer_Sekumpul_waterfall_guide-10.jpg?format=2500w",
        alt: "Sekumpul Waterfall",
        title: "Sekumpul Waterfall",
        descCrd: { descId: "Desa Sekumpul, Kecamatan Sawan", descEn: "Sekumpul Village, Sawan Subdistrict." },
        ratingEn: "4.9 (312 reviews)",
        ratingId: "4.9 (312 pengulas)",
        ratingText: "4.9 (312)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "sea",
        region: "buleleng",
        img: "https://www.indonesia-tourism.com/blog/wp-content/uploads/2020/01/daya-tarik-pantai-lovina-65.jpg",
        alt: "Lovina Beach",
        title: "Lovina Beach",
        descCrd: { descId: "Pantai Lovina Singaraja", descEn: "Lovina Beach, Singaraja" },
        ratingEn: "4.9 (312 reviews)",
        ratingId: "4.9 (312 pengulas)",
        ratingText: "4.9 (312)",
        badge: { textEn: "Popular", textId: "Populer", color: "bg-yellow-400" }
    },
    {
        category: "sea",
        region: "buleleng",
        img: "https://yourtrip.id/wp-content/uploads/2023/03/Danau-Buyan-Bali.jpg",
        alt: "Danau Buyan",
        title: "Danau Buyan",
        descCrd: { descId: "Danau Buyan, Buleleng", descEn: "Buyan Lake, Buleleng" },
        ratingEn: "4.9 (312 reviews)",
        ratingId: "4.9 (312 pengulas)",
        ratingText: "4.9 (312)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "buleleng",
        img: "https://www.rentalmobilbali.net/wp-content/uploads/2023/07/Air-Terjun-Gitgit-Facebook.jpg",
        alt: "Air Terjun Gitgit",
        title: "Gitgit Waterfall",
        descCrd: { descId: "Air Terjun Gitgit", descEn: "Gitgit Waterfall" },
        ratingEn: "4.9 (312 reviews)",
        ratingId: "4.9 (312 pengulas)",
        ratingText: "4.9 (312)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "buleleng",
        img: "https://tekno-web.com/wp-content/uploads/2018/05/Secret-Garden-Sambangan-Blue-Lagoon.png",
        alt: "Blue Lagoon Sambangan",
        title: "Blue Lagoon Sambangan",
        descCrd: { descId: "Blue Lagoon Sambangan", descEn: "Blue Lagoon Sambangan" },
        ratingEn: "4.9 (312 reviews)",
        ratingId: "4.9 (312 pengulas)",
        ratingText: "4.9 (312)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "buleleng",
        img: "https://images.squarespace-cdn.com/content/v1/5dada6bcd179083779ec755f/6d5e5c19-3728-4bf2-a40c-608a32b3a959/menjangan-island-diving.jpg",
        alt: "Menjangan Island",
        title: "Menjangan Island",
        descCrd: { descId: "Pulau Menjangan, Buleleng", descEn: "Menjangan Island, Buleleng" },
        ratingEn: "4.8 (421 reviews)",
        ratingId: "4.8 (421 pengulas)",
        ratingText: "4.8 (421)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach club",
        region: "buleleng",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d3/bb/0d/la-costa-beach-club-resort.jpg?w=1200&h=-1&s=1",
        alt: "LaCosta Beach Club Lovina",
        title: "LaCosta Beach Club",
        descCrd: { descId: "Lovina, Buleleng", descEn: "Lovina, Buleleng" },
        ratingEn: "4.7 (210 reviews)",
        ratingId: "4.7 (210 pengulas)",
        ratingText: "4.7 (210)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "pantai",
        region: "buleleng",
        img: "https://salsawisata.com/wp-content/uploads/2022/09/Pantai-Penimbangan.jpg",
        alt: "Pantai Penimbangan",
        title: "Pantai Penimbangan",
        descCrd: { descId: "Pantai Penimbangan, Singaraja", descEn: "Penimbangan Beach, Singaraja" },
        ratingEn: "4.6 (198 reviews)",
        ratingId: "4.6 (198 pengulas)",
        ratingText: "4.6 (198)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "buleleng",
        img: "https://backpackerjakarta.com/wp-content/uploads/2016/07/Air-Terjun-Aling-Aling-Buleleng.jpg",
        alt: "Air Terjun Aling-Aling",
        title: "Aling-Aling Waterfall",
        descCrd: { descId: "Air Terjun Aling-Aling, Sambangan", descEn: "Aling-Aling Waterfall, Sambangan" },
        ratingEn: "4.9 (389 reviews)",
        ratingId: "4.9 (389 pengulas)",
        ratingText: "4.9 (389)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "budaya",
        region: "buleleng",
        img: "https://www.itrip.id/wp-content/uploads/2023/03/Fasilitas-Gedong-Kirtya.jpg",
        alt: "Gedong Kirtya Singaraja",
        title: "Gedong Kirtya",
        descCrd: { descId: "Perpustakaan Lontar Gedong Kirtya, Singaraja", descEn: "Gedong Kirtya Lontar Library, Singaraja" },
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "", textId: "", color: "" }
    },

    // TABANAN
    {
        category: "beach",
        region: "tabanan",
        img: "https://windows10spotlight.com/wp-content/uploads/2018/09/b988fba698ee56c19d55890aff42a8e9.jpg",
        alt: "Jatiluwih Rice Terraces",
        title: "Jatiluwih Rice Terraces",
        descCrd: { descId: "Sawah Terasering Jatiluwih", descEn: "Jatiluwih Rice Terraces" },
        ratingEn: "4.9 (UNESCO heritage)",
        ratingId: "4.9 (Warisan Dunia UNESCO)",
        ratingText: "4.9",
        badge: { textEn: "Scenic", textId: "Pemandangan", color: "bg-green-500" }
    },
    {
        category: "pantai",
        region: "tabanan",
        img: "https://www.theungasan.com/wp-content/uploads/2020/01/Tanah-Lot-Temple.jpg",
        alt: "Tanah Lot Temple on the coast",
        title: "Tanah Lot Temple Beach",
        descCrd: { descId: "Pantai dan Pura Tanah Lot", descEn: "Tanah Lot Temple Beach" },
        ratingEn: "4.8 (Iconic sunset spot)",
        ratingId: "4.8 (Ikon matahari terbenam)",
        ratingText: "4.8",
        badge: { textEn: "Cultural Icon", textId: "Ikon Budaya", color: "bg-yellow-400" }
    },
    {
        category: "beach",
        region: "tabanan",
        img: "https://www.balimagictour.com/wp-content/uploads/soka-beach.jpg",
        alt: "Soka Beach",
        title: "Soka Beach",
        descCrd: { descId: "Pantai Soka", descEn: "Soka Beach" },
        ratingEn: "4.6 (Black sand, surfing)",
        ratingId: "4.6 (Pasir hitam & surfing)",
        ratingText: "4.6",
        badge: { textEn: "Surf Spot", textId: "Spot Selancar", color: "bg-blue-500" }
    },
    {
        category: "pantai",
        region: "tabanan",
        img: "https://tse3.mm.bing.net/th/id/OIP.FveUKe9V4y6kjl2wUo6exwHaF5?pid=Api&P=0&h=180",
        alt: "Balian Beach",
        title: "Balian Beach",
        descCrd: { descId: "Pantai Balian", descEn: "Balian Beach" },
        ratingEn: "4.7 (Big waves, tranquil)",
        ratingId: "4.7 (Ombak besar, tenang)",
        ratingText: "4.7",
        badge: { textEn: "Surfer’s Choice", textId: "Pilihan Peselancar", color: "bg-blue-500" }
    },
    {
        category: "waterfall",
        region: "tabanan",
        img: "https://tse4.mm.bing.net/th/id/OIP._C0qRnWdxQeTlbMYe0-I7wHaE8?pid=Api&P=0&h=180",
        alt: "Leke-Leke Waterfall",
        title: "Leke-Leke Waterfall",
        descCrd: { descId: "Air Terjun Leke-Leke", descEn: "Leke-Leke Waterfall" },
        ratingEn: "4.8 (Hidden gem)",
        ratingId: "4.8 (Permata tersembunyi)",
        ratingText: "4.8",
        badge: { textEn: "Adventure", textId: "Petualangan", color: "bg-red-500" }
    },
    {
        category: "waterfall",
        region: "tabanan",
        img: "https://www.balistarisland.com/wp-content/uploads/2016/03/blahmantung03.jpg",
        alt: "Blahmantung Waterfall",
        title: "Blahmantung Waterfall",
        descCrd: { descId: "Air Terjun Blahmantung", descEn: "Blahmantung Waterfall" },
        ratingEn: "4.8 (Forest trail adventure)",
        ratingId: "4.8 (Petualangan hutan)",
        ratingText: "4.8",
        badge: { textEn: "Natural", textId: "Alami", color: "bg-green-500" }
    },
    {
        category: "budaya",
        region: "tabanan",
        img: "https://www.itrip.id/wp-content/uploads/2022/07/Aktivitas-Menarik-Puri-Anom.jpg",
        alt: "Puri Anom Tabanan",
        title: "Puri Anom",
        descCrd: { descId: "Puri Anom Tabanan", descEn: "Puri Anom Tabanan" },
        ratingEn: "4.5 (Royal heritage)",
        ratingId: "4.5 (Warisan Kerajaan)",
        ratingText: "4.5",
        badge: { textEn: "Heritage", textId: "Warisan", color: "bg-purple-500" }
    },
    {
        category: "budaya",
        region: "tabanan",
        img: "https://img.sokoguru.id/backend/4661293725490781835/museum-subak-di-tabanan-bali-jadi-pionir-pengguna-energi-hijau-di-indonesia.webp",
        alt: "Subak Museum",
        title: "Subak Museum",
        descCrd: { descId: "Museum Subak", descEn: "Subak Museum" },
        ratingEn: "4.6 (Cultural education)",
        ratingId: "4.6 (Edukasi Budaya)",
        ratingText: "4.6",
        badge: { textEn: "Culture", textId: "Budaya", color: "bg-purple-500" }
    },
    {
        category: "waterfall",
        region: "tabanan",
        img: "https://www.bali-tourism-board.com/wp-content/uploads/2020/08/kedaton1-1.jpg",
        alt: "Alas Kedaton Monkey Forest",
        title: "Alas Kedaton (Monkey Forest)",
        descCrd: { descId: "Alas Kedaton", descEn: "Alas Kedaton Monkey Forest" },
        ratingEn: "4.7 (Spiritual & nature)",
        ratingId: "4.7 (Spiritual & alam)",
        ratingText: "4.7",
        badge: { textEn: "Wildlife", textId: "Satwa", color: "bg-green-500" }
    },
    {
        category: "budaya",
        region: "tabanan",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/19/ff/13/c8/your-best-choice-for.jpg",
        alt: "Bali Botanic Garden",
        title: "Bali Botanic Garden",
        descCrd: { descId: "Kebun Raya Bali", descEn: "Bali Botanic Garden" },
        ratingEn: "4.8 (Botanical wonders)",
        ratingId: "4.8 (Keajaiban Botani)",
        ratingText: "4.8",
        badge: { textEn: "Nature & Learn", textId: "Alam & Edukasi", color: "bg-green-500" }
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