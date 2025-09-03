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
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "pantai",
        region: "tabanan",
        img: "https://www.theungasan.com/wp-content/uploads/2020/01/Tanah-Lot-Temple.jpg",
        alt: "Tanah Lot Temple on the coast",
        title: "Tanah Lot Temple Beach",
        descCrd: { descId: "Pantai dan Pura Tanah Lot", descEn: "Tanah Lot Temple Beach" },
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "Hot", textId: "Hangat", color: "bg-red-500" }
    },
    {
        category: "beach",
        region: "tabanan",
        img: "https://www.balimagictour.com/wp-content/uploads/soka-beach.jpg",
        alt: "Soka Beach",
        title: "Soka Beach",
        descCrd: { descId: "Pantai Soka", descEn: "Soka Beach" },
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "pantai",
        region: "tabanan",
        img: "https://tse3.mm.bing.net/th/id/OIP.FveUKe9V4y6kjl2wUo6exwHaF5?pid=Api&P=0&h=180",
        alt: "Balian Beach",
        title: "Balian Beach",
        descCrd: { descId: "Pantai Balian", descEn: "Balian Beach" },
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "tabanan",
        img: "https://tse4.mm.bing.net/th/id/OIP._C0qRnWdxQeTlbMYe0-I7wHaE8?pid=Api&P=0&h=180",
        alt: "Leke-Leke Waterfall",
        title: "Leke-Leke Waterfall",
        descCrd: { descId: "Air Terjun Leke-Leke", descEn: "Leke-Leke Waterfall" },
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "tabanan",
        img: "https://www.balistarisland.com/wp-content/uploads/2016/03/blahmantung03.jpg",
        alt: "Blahmantung Waterfall",
        title: "Blahmantung Waterfall",
        descCrd: { descId: "Air Terjun Blahmantung", descEn: "Blahmantung Waterfall" },
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "budaya",
        region: "tabanan",
        img: "https://www.itrip.id/wp-content/uploads/2022/07/Aktivitas-Menarik-Puri-Anom.jpg",
        alt: "Puri Anom Tabanan",
        title: "Puri Anom",
        descCrd: { descId: "Puri Anom Tabanan", descEn: "Puri Anom Tabanan" },
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "budaya",
        region: "tabanan",
        img: "https://img.sokoguru.id/backend/4661293725490781835/museum-subak-di-tabanan-bali-jadi-pionir-pengguna-energi-hijau-di-indonesia.webp",
        alt: "Subak Museum",
        title: "Subak Museum",
        descCrd: { descId: "Museum Subak", descEn: "Subak Museum" },
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "tabanan",
        img: "https://www.bali-tourism-board.com/wp-content/uploads/2020/08/kedaton1-1.jpg",
        alt: "Alas Kedaton Monkey Forest",
        title: "Alas Kedaton (Monkey Forest)",
        descCrd: { descId: "Alas Kedaton", descEn: "Alas Kedaton Monkey Forest" },
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "budaya",
        region: "tabanan",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/19/ff/13/c8/your-best-choice-for.jpg",
        alt: "Bali Botanic Garden",
        title: "Bali Botanic Garden",
        descCrd: { descId: "Kebun Raya Bali", descEn: "Bali Botanic Garden" },
        ratingEn: "4.5 (152 reviews)",
        ratingId: "4.5 (152 pengulas)",
        ratingText: "4.5 (152)",
        badge: { textEn: "", textId: "", color: "" }
    },

    // BADUNG
    {
        category: "beach",
        region: "badung",
        img: "https://www.luxurybalitravel.com/wp-content/uploads/2024/03/melasti-Beach.jpg",
        alt: "Melasti Beach",
        title: "Melasti Beach",
        descCrd: { descId: "Pantai Melasti, Ungasan", descEn: "Melasti Beach, Ungasan" },
        ratingEn: "4.7 (3.804 reviews)",
        ratingId: "4.7 (3.804 pengulas)",
        ratingText: "4.7 (3.804)",
        badge: { textEn: "Most Visited", textId: "Sering Dikunjungi", color: "bg-green-500" }
    },
    {
        category: "beach",
        region: "badung",
        img: "https://www.nopostcode.com/wp-content/uploads/2022/07/Pandawa-Beach-Pantai-Pandawa-14.jpg",
        alt: "Pandawa Beach",
        title: "Pandawa Beach",
        descCrd: { descId: "Pantai Pandawa, Kutuh", descEn: "Pandawa Beach, Kutuh" },
        ratingEn: "4.6 (10.525 reviews)",
        ratingId: "4.6 (10.525 pengulas)",
        ratingText: "4.6 (10.525)",
        badge: { textEn: "Most Visited", textId: "Sering Dikunjungi", color: "bg-green-500" }
    },
    {
        category: "beach club",
        region: "badung",
        img: "https://www.asia-bars.com/wp-content/uploads/2014/07/potato-head-beach-club-bali-7.jpg",
        alt: "Potato Head Beach Club",
        title: "Potato Head Beach Club",
        descCrd: { descId: "Seminyak, Badung", descEn: "Seminyak, Badung" },
        ratingEn: "4.6 (21.963 reviews)",
        ratingId: "4.6 (21.963 pengulas)",
        ratingText: "4.6 (21.963)",
        badge: { textEn: "Most Visited", textId: "Sering Dikunjungi", color: "bg-green-500" }
    },
    {
        category: "waterfall",
        region: "badung",
        img: "https://www.nopostcode.com/wp-content/uploads/2022/10/Nungnung-Waterfall-23-1280x1024.jpg",
        alt: "Nungnung Waterfall",
        title: "Nungnung Waterfall",
        descCrd: { descId: "Air Terjun Nungnung, Pelaga", descEn: "Nungnung Waterfall, Pelaga" },
        ratingEn: "4.8 (891 reviews)",
        ratingId: "4.8 (891 pengulas)",
        ratingText: "4.8 (891)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "badung",
        img: "images/destinations-1.jpg",
        alt: "Garuda Wisnu Kencana",
        title: "Garuda Wisnu Kencana Cultural Park",
        descCrd: { descId: "Ungasan, Badung", descEn: "Ungasan, Badung" },
        ratingEn: "4.5 (68.505 reviews)",
        ratingId: "4.5 (68.505 pengulas)",
        ratingText: "4.5 (68.505)",
        badge: { textEn: "Most popular", textId: "Palin populer", color: "bg-green-400" }
    },
    {
        category: "culture",
        region: "badung",
        img: "https://www.theungasan.com/wp-content/uploads/2020/01/bali-uluwatu-temple-goibibo.jpg",
        alt: "Uluwatu Temple",
        title: "Uluwatu Temple",
        descCrd: { descId: "Pura Luhur Uluwatu, Pecatu", descEn: "Uluwatu Temple, Pecatu" },
        ratingEn: "4.6 (48.347 reviews)",
        ratingId: "4.6 (48.347 pengulas)",
        ratingText: "4.6 (48.347)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "badung",
        img: "https://a.cdn-hotels.com/gdcs/production167/d194/32151e58-ca6b-4fde-8d33-f759f3234472.jpg",
        alt: "Pura Taman Ayun",
        title: "Pura Taman Ayun",
        descCrd: { descId: "Mengwi, Badung", descEn: "Taman Ayun Temple, Mengwi" },
        ratingEn: "4.6 (9.343 reviews)",
        ratingId: "4.6 (9.343 pengulas)",
        ratingText: "4.6 (9.343)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "badung",
        img: "https://a.cdn-hotels.com/gdcs/production79/d897/2c740d3c-d511-44aa-9ac9-c27500a0cc1b.jpg",
        alt: "Kuta Beach",
        title: "Kuta Beach",
        descCrd: { descId: "Pantai Kuta, Badung", descEn: "Kuta Beach, Badung" },
        ratingEn: "4.5 (41.752 reviews)",
        ratingId: "4.5 (41.752 pengulas)",
        ratingText: "4.5 (41.752)",
        badge: { textEn: "Best destination", textId: "Destinasi terbaik", color: "bg-yellow-600" }
    },
    {
        category: "culture",
        region: "badung",
        img: "https://finnsbeachclub.com/wp-content/uploads/2024/05/Sangeh-Monkey-Forest-discovabalicom.jpg",
        alt: "Sangeh Monkey Forest",
        title: "Sangeh Monkey Forest",
        descCrd: { descId: "Sangeh, Badung", descEn: "Sangeh Monkey Forest" },
        ratingEn: "4.6 (8.107 reviews)",
        ratingId: "4.6 (8.107 pengulas)",
        ratingText: "4.6 (8.107)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "specialty",
        region: "badung",
        img: "https://cdn.idntimes.com/content-images/post/20210929/waterbombali-1632890068402884-f91bb3371dacd70ecc0d73e75dd61ff4.jpg",
        alt: "Waterbom Bali",
        title: "Waterbom Bali",
        descCrd: { descId: "Kuta, Badung", descEn: "Waterbom Bali, Kuta" },
        ratingEn: "4.7 (16.744 reviews)",
        ratingId: "4.7 (16.744 pengulas)",
        ratingText: "4.7 (16.744)",
        badge: { textEn: "", textId: "", color: "" }
    },

    // DENPASAR
    {
        category: "beach",
        region: "denpasar",
        img: "https://www.anywhere.com/img-a/indonesia/destinations/sanur/sanur.bali.jpg",
        alt: "Sanur Beach",
        title: "Sanur Beach",
        descCrd: { descId: "Pantai Sanur, Denpasar", descEn: "Sanur Beach, Denpasar" },
        ratingEn: "4.7 (1,200 reviews)",
        ratingId: "4.7 (1.200 pengulas)",
        ratingText: "4.7 (1,200)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "denpasar",
        img: "https://a.cdn-hotels.com/gdcs/production113/d226/778977f4-2185-4213-bd2b-44c2f8272687.jpg",
        alt: "Sindhu Beach",
        title: "Sindhu Beach",
        descCrd: { descId: "Pantai Sindhu, Denpasar", descEn: "Sindhu Beach, Denpasar" },
        ratingEn: "4.6 (300 reviews)",
        ratingId: "4.6 (300 pengulas)",
        ratingText: "4.6 (300)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "cultural",
        region: "denpasar",
        img: "https://www.rentalmobilbali.net/wp-content/uploads/2014/09/Museum-Bali-Denpasar.jpg",
        alt: "Bali Museum",
        title: "Bali Museum",
        descCrd: { descId: "Museum Bali, Denpasar", descEn: "Bali Museum, Denpasar" },
        ratingEn: "4.5 (800 reviews)",
        ratingId: "4.5 (800 pengulas)",
        ratingText: "4.5 (800)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "cultural",
        region: "denpasar",
        img: "https://www.nowbali.co.id/wp-content/uploads/2021/06/Taman-Werdhi-Budaya-Art-Center-Bali-5.jpg",
        alt: "Taman Werdhi Budaya Art Centre",
        title: "Taman Werdhi Budaya Art Centre",
        descCrd: { descId: "Art Centre Denpasar", descEn: "Taman Werdhi Budaya Art Centre" },
        ratingEn: "4.4 (500 reviews)",
        ratingId: "4.4 (500 pengulas)",
        ratingText: "4.4 (500)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "market",
        region: "denpasar",
        img: "https://a.cdn-hotels.com/gdcs/production23/d1343/b0ae51ff-4f16-45a0-a8df-6080ec2919c1.jpg",
        alt: "Pasar Kumbasari",
        title: "Pasar Kumbasari",
        descCrd: { descId: "Pasar Seni Kumbasari, Denpasar", descEn: "Kumbasari Art Market, Denpasar" },
        ratingEn: "4.3 (650 reviews)",
        ratingId: "4.3 (650 pengulas)",
        ratingText: "4.3 (650)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "market",
        region: "denpasar",
        img: "https://a.cdn-hotels.com/gdcs/production15/d1225/3bbd9cd0-b41d-4355-b759-56d2872eceea.jpg",
        alt: "Pasar Badung",
        title: "Pasar Badung",
        descCrd: { descId: "Pasar Badung, Denpasar", descEn: "Badung Market, Denpasar" },
        ratingEn: "4.2 (900 reviews)",
        ratingId: "4.2 (900 pengulas)",
        ratingText: "4.2 (900)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "temple",
        region: "denpasar",
        img: "https://www.orientalarchitecture.com/gallery/indonesia/denpasar-regency/pura-agung-jagatnatha/misc/pura-agung-jagatnatha_BIG.jpg",
        alt: "Pura Jagatnatha",
        title: "Pura Jagatnatha",
        descCrd: { descId: "Pura Jagatnatha, Denpasar", descEn: "Jagatnatha Temple, Denpasar" },
        ratingEn: "4.4 (700 reviews)",
        ratingId: "4.4 (700 pengulas)",
        ratingText: "4.4 (700)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "monument",
        region: "denpasar",
        img: "https://balistarisland.com/wp-content/uploads/2016/03/bajrasandhimonument2.jpg",
        alt: "Bajra Sandhi Monument",
        title: "Bajra Sandhi Monument",
        descCrd: { descId: "Monumen Bajra Sandhi, Denpasar", descEn: "Bajra Sandhi Monument, Denpasar" },
        ratingEn: "4.6 (1,100 reviews)",
        ratingId: "4.6 (1.100 pengulas)",
        ratingText: "4.6 (1,100)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "cultural",
        region: "denpasar",
        img: "https://www.denpasarkota.go.id/assets/CKImages/images/2.jpg",
        alt: "Pura Maospahit",
        title: "Pura Maospahit",
        descCrd: { descId: "Pura Maospahit, Denpasar", descEn: "Pura Maospahit, Denpasar" },
        ratingEn: "4.3 (400 reviews)",
        ratingId: "4.3 (400 pengulas)",
        ratingText: "4.3 (400)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "conservation",
        region: "denpasar",
        img: "https://thebalisun.com/wp-content/uploads/2023/12/Serangan-Island-Could-Be-Next-Big-Tourist-Destination-In-Bali-In-2024.jpg",
        alt: "Serangan Island",
        title: "Serangan Island (Turtle Island)",
        descCrd: { descId: "Pulau Serangan, Denpasar", descEn: "Serangan Island, Denpasar" },
        ratingEn: "4.5 (350 reviews)",
        ratingId: "4.5 (350 pengulas)",
        ratingText: "4.5 (350)",
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