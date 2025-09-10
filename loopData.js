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
        category: "beach",
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
        category: "beach",
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
        category: "beach-club",
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
        category: "beach",
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
        category: "culture",
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
        category: "beach",
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
        category: "beach",
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
        category: "culture",
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
        category: "culture",
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
        category: "culture",
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
        category: "culture",
        region: "tabanan",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/19/ff/13/c8/your-best-choice-for.jpg",
        alt: "Bali Botanic Garden",
        title: "Bali Botanic Garden",
        descCrd: { descId: "Kebun Raya Bali", descEn: "Bali Botanic Garden" },
        ratingEn: "4.6 (17.313 reviews)",
        ratingId: "4.6 (17.313 pengulas)",
        ratingText: "4.6 (17.313)",
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
        category: "beach-club",
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
        category: "beach-club",
        region: "badung",
        img: "images/atlas.jpg",
        alt: "Atlas Beach Club",
        title: "Atlas Beach Club",
        descCrd: { descId: "Kuta, Badung", descEn: "Kuta, Badung" },
        ratingEn: "4.7 (15.390 reviews)",
        ratingId: "4.7 (15.390 pengulas)",
        ratingText: "4.7 (15.390)",
        badge: { textEn: "Most Visited", textId: "Sering Dikunjungi", color: "bg-green-500" }
    },
    {
        category: "beach-club",
        region: "badung",
        img: "images/savaya.jpg",
        alt: "Savaya Beach Club",
        title: "Savaya Beach Club",
        descCrd: { descId: "Pecatu, Badung", descEn: "Pecatu, Badung" },
        ratingEn: "4.1 (3.998 reviews)",
        ratingId: "4.1 (3.998 pengulas)",
        ratingText: "4.1 (3.998)",
        badge: { textEn: "Top 1 in Asia", textId: "Nomor 1 di Asia", color: "bg-green-500" }
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
        badge: { textEn: "Most popular", textId: "Paling populer", color: "bg-green-400" }
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
        category: "culture",
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
        category: "culture",
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
        category: "culture",
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
        category: "culture",
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
        category: "culture",
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
        category: "culture",
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
        category: "culture",
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
        category: "beach",
        region: "denpasar",
        img: "https://thebalisun.com/wp-content/uploads/2023/12/Serangan-Island-Could-Be-Next-Big-Tourist-Destination-In-Bali-In-2024.jpg",
        alt: "Serangan Island",
        title: "Serangan Island (Turtle Island)",
        descCrd: { descId: "Pulau Serangan, Denpasar", descEn: "Serangan Island, Denpasar" },
        ratingEn: "4.5 (350 reviews)",
        ratingId: "4.5 (350 pengulas)",
        ratingText: "4.5 (350)",
        badge: { textEn: "", textId: "", color: "" }
    },

    // KARANGASEM
    {
        category: "beach",
        region: "karangasem",
        img: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/1200x675/photo/2024/05/27/2773234533.jpg",
        alt: "Virgin Beach",
        title: "Virgin Beach (Pantai Pasir Putih)",
        descCrd: { descId: "Pantai Virgin, Karangasem", descEn: "Virgin Beach, Karangasem" },
        ratingEn: "4.6 (1,250 reviews)",
        ratingId: "4.6 (1,250 pengulas)",
        ratingText: "4.6 (1,250)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "karangasem",
        img: "https://balistarisland.com/wp-content/uploads/2016/04/tirta-gangga-bali-1.jpg",
        alt: "Tirta Gangga",
        title: "Tirta Gangga Water Palace",
        descCrd: { descId: "Tirta Gangga, Karangasem", descEn: "Tirta Gangga, Karangasem" },
        ratingEn: "4.7 (9,800 reviews)",
        ratingId: "4.7 (9,800 pengulas)",
        ratingText: "4.7 (9,800)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "karangasem",
        img: "https://s4.bukalapak.com/uploads/content_attachment/e6ae690b10e8d762da9bcfb5/original/erupsi_gunung_agung.jpg",
        alt: "Pura Lempuyang",
        title: "Pura Lempuyang Luhur",
        descCrd: { descId: "Pura Lempuyang, Karangasem", descEn: "Lempuyang Temple, Karangasem" },
        ratingEn: "4.8 (15,200 reviews)",
        ratingId: "4.8 (15,200 pengulas)",
        ratingText: "4.8 (15,200)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "karangasem",
        img: "https://turisian.com/wp-content/uploads/2022/07/Blue-Lagoon-Beach-Bali.jpg",
        alt: "Blue Lagoon Beach",
        title: "Blue Lagoon Beach",
        descCrd: { descId: "Pantai Blue Lagoon, Karangasem", descEn: "Blue Lagoon Beach, Karangasem" },
        ratingEn: "4.5 (2,100 reviews)",
        ratingId: "4.5 (2,100 pengulas)",
        ratingText: "4.5 (2,100)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "karangasem",
        img: "https://a.cdn-hotels.com/gdcs/production10/d1026/dd734d87-db5a-4d15-aa15-bd3569063837.jpg",
        alt: "Taman Ujung",
        title: "Taman Ujung Water Palace",
        descCrd: { descId: "Taman Ujung, Karangasem", descEn: "Ujung Water Palace, Karangasem" },
        ratingEn: "4.7 (5,600 reviews)",
        ratingId: "4.7 (5,600 pengulas)",
        ratingText: "4.7 (5,600)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach-club",
        region: "karangasem",
        img: "https://bestbeachclubsbali.com/wp-content/uploads/2024/10/komune-1.jpg",
        alt: "Komune Beach Club",
        title: "Komune Beach Club",
        descCrd: { descId: "Komune Beach Club, Karangasem", descEn: "Komune Beach Club, Karangasem" },
        ratingEn: "4.4 (1,800 reviews)",
        ratingId: "4.4 (1,800 pengulas)",
        ratingText: "4.4 (1,800)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "karangasem",
        img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10017517-1280x852-FIT_AND_TRIM-7d98d6de776858a8dcf0825e059e5346.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit",
        alt: "Amed Beach",
        title: "Amed Beach",
        descCrd: { descId: "Pantai Amed, Karangasem", descEn: "Amed Beach, Karangasem" },
        ratingEn: "4.6 (7,300 reviews)",
        ratingId: "4.6 (7,300 pengulas)",
        ratingText: "4.6 (7,300)",
        badge: { textEn: "", textId: "", color: "" }
    },

    // KLUNGKUNG
    {
        category: "beach",
        region: "klungkung",
        img: "https://www.journeyera.com/wp-content/uploads/2018/03/atuh-beach-nusa-penida-03947.jpg",
        alt: "Atuh Beach",
        title: "Atuh Beach",
        descCrd: { descId: "Pantai Atuh, Klungkung", descEn: "Atuh Beach, Klungkung" },
        ratingEn: "4.7 (3,200 reviews)",
        ratingId: "4.7 (3,200 pengulas)",
        ratingText: "4.7 (3,200)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "klungkung",
        img: "https://awaywithdanae.com/wp-content/uploads/2023/06/alfiano-sutianto-exFdOWkYBQw-unsplash-1.jpg",
        alt: "Diamond Beach",
        title: "Diamond Beach",
        descCrd: { descId: "Pantai Diamond, Klungkung", descEn: "Diamond Beach, Klungkung" },
        ratingEn: "4.8 (5,100 reviews)",
        ratingId: "4.8 (5,100 pengulas)",
        ratingText: "4.8 (5,100)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "klungkung",
        img: "https://www.baligoldentour.com/images/bali-interest-place/goa-lawah-temple-bali-golden-tour.jpg",
        alt: "Goa Lawah Temple",
        title: "Goa Lawah Temple",
        descCrd: { descId: "Pura Goa Lawah, Klungkung", descEn: "Goa Lawah Temple, Klungkung" },
        ratingEn: "4.6 (2,700 reviews)",
        ratingId: "4.6 (2,700 pengulas)",
        ratingText: "4.6 (2,700)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "klungkung",
        img: "https://thumbs.dreamstime.com/b/aerial-view-kelingking-beach-nusa-penida-island-indonesia-aerial-view-kelingking-beach-nusa-penida-island-indonesia-321571310.jpg",
        alt: "Kelingking Beach",
        title: "Kelingking Beach",
        descCrd: { descId: "Pantai Kelingking, Klungkung", descEn: "Kelingking Beach, Klungkung" },
        ratingEn: "4.9 (12,500 reviews)",
        ratingId: "4.9 (12,500 pengulas)",
        ratingText: "4.9 (12,500)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "klungkung",
        img: "https://2.bp.blogspot.com/-j5zG7jRPztM/XF4pu5fVM8I/AAAAAAAAAK8/vYN-3-C01agFPWPJ5Ala65b8ljAyjmwfgCLcBGAs/s1600/pegu1.jpg",
        alt: "Peguyangan Waterfall",
        title: "Peguyangan Waterfall",
        descCrd: { descId: "Air Terjun Peguyangan, Klungkung", descEn: "Peguyangan Waterfall, Klungkung" },
        ratingEn: "4.5 (1,400 reviews)",
        ratingId: "4.5 (1,400 pengulas)",
        ratingText: "4.5 (1,400)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "klungkung",
        img: "https://bb.trvcdn.net/uploads/galleries/97129193658042a028133c_kerta_gosa_6.JPG",
        alt: "Kerta Gosa",
        title: "Kerta Gosa Pavilion",
        descCrd: { descId: "Kerta Gosa, Klungkung", descEn: "Kerta Gosa, Klungkung" },
        ratingEn: "4.6 (2,200 reviews)",
        ratingId: "4.6 (2,200 pengulas)",
        ratingText: "4.6 (2,200)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach-club",
        region: "klungkung",
        img: "https://bali.com/wp-content/uploads/2020/11/120824316_4879737908710636_8930626775594306974_o-1199x800.jpg",
        alt: "Sandy Bay Beach Club",
        title: "Sandy Bay Beach Club",
        descCrd: { descId: "Sandy Bay Beach Club, Klungkung", descEn: "Sandy Bay Beach Club, Klungkung" },
        ratingEn: "4.4 (980 reviews)",
        ratingId: "4.4 (980 pengulas)",
        ratingText: "4.4 (980)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "klungkung",
        img: "https://a.cdn-hotels.com/gdcs/production105/d1194/910248bb-0166-4b6c-9725-0c16f36ef77d.jpg",
        alt: "Crystal Bay",
        title: "Crystal Bay",
        descCrd: { descId: "Pantai Crystal Bay, Klungkung", descEn: "Crystal Bay, Klungkung" },
        ratingEn: "4.7 (3,800 reviews)",
        ratingId: "4.7 (3,800 pengulas)",
        ratingText: "4.7 (3,800)",
        badge: { textEn: "", textId: "", color: "" }
    },

    // JEMBRANA
    {
        category: "beach",
        region: "jembrana",
        img: "https://www.water-sports-bali.com/wp-content/uploads/2021/06/Medewi-Beach-Bali-Facebook.jpg",
        alt: "Medewi Beach",
        title: "Medewi Beach",
        descCrd: { descId: "Pantai Medewi, Jembrana", descEn: "Medewi Beach, Jembrana" },
        ratingEn: "4.6 (2,100 reviews)",
        ratingId: "4.6 (2,100 pengulas)",
        ratingText: "4.6 (2,100)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "jembrana",
        img: "https://balistarisland.com/wp-content/uploads/2016/03/rambutsiwitemple3.jpg",
        alt: "Rambut Siwi Beach",
        title: "Rambut Siwi Beach",
        descCrd: { descId: "Pantai Rambut Siwi, Jembrana", descEn: "Rambut Siwi Beach, Jembrana" },
        ratingEn: "4.5 (1,300 reviews)",
        ratingId: "4.5 (1,300 pengulas)",
        ratingText: "4.5 (1,300)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "jembrana",
        img: "https://img-asset-01.visitbali.id/S3Sw34VQMf-DDGPkX_AGHDsGnffHevV0YcO8Vu6lHi0/fill/1200/630/no/0/aHR0cHM6Ly92aXNpdGJhbGkuaWQvaW1hZ2VzL2RhdGEvSnVuLTIwMTgvNWIzMzVjMTkwMTY3YWM4ZWQuanBn.jpg",
        alt: "Perancak Beach",
        title: "Perancak Beach",
        descCrd: { descId: "Pantai Perancak, Jembrana", descEn: "Perancak Beach, Jembrana" },
        ratingEn: "4.4 (890 reviews)",
        ratingId: "4.4 (890 pengulas)",
        ratingText: "4.4 (890)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach-club",
        region: "jembrana",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/97/44/aa/sea-medewi-resort-beach.jpg?w=1200&h=-1&s=1",
        alt: "Jembrana Beach Club",
        title: "Sea Medewi Resort & Beach Club",
        descCrd: { descId: "Sea Medewi Resort & Beach Club, Jembrana", descEn: "Sea Medewi Resort & Beach Club, Jembrana" },
        ratingEn: "4.3 (410 reviews)",
        ratingId: "4.3 (410 pengulas)",
        ratingText: "4.3 (410)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "jembrana",
        img: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/74/2024/07/20/juwuk-manis-waterfall-1-2825291414.jpg",
        alt: "Juwuk Manis Waterfall",
        title: "Juwuk Manis Waterfall",
        descCrd: { descId: "Air Terjun Juwuk Manis, Jembrana", descEn: "Juwuk Manis Waterfall, Jembrana" },
        ratingEn: "4.5 (740 reviews)",
        ratingId: "4.5 (740 pengulas)",
        ratingText: "4.5 (740)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "jembrana",
        img: "https://lovebali.baliprov.go.id/storage/touriest_destinations/img-165845902462da13903a842.jpg",
        alt: "Candi Kusuma Beach",
        title: "Candi Kusuma Beach",
        descCrd: { descId: "Pantai Candi Kusuma, Jembrana", descEn: "Candi Kusuma Beach, Jembrana" },
        ratingEn: "4.4 (560 reviews)",
        ratingId: "4.4 (560 pengulas)",
        ratingText: "4.4 (560)",
        badge: { textEn: "", textId: "", color: "" }
    },

    // GIANYAR
    {
        category: "culture",
        region: "gianyar",
        img: "http://www.terrytreks.com/blog/wp-content/uploads/2015/05/Bali-Ubud-Tirta-Empul-7375-1200x800.jpg",
        alt: "Tirta Empul Temple",
        title: "Tirta Empul Temple",
        descCrd: { descId: "Pura Tirta Empul, Gianyar", descEn: "Tirta Empul Temple, Gianyar" },
        ratingEn: "4.7 (11,200 reviews)",
        ratingId: "4.7 (11,200 pengulas)",
        ratingText: "4.7 (11,200)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "gianyar",
        img: "images/kecak-dance.jpg",
        alt: "Ubud Kecak Dance",
        title: "Ubud Kecak Dance",
        descCrd: { descId: "Ubud, Gianyar", descEn: "Ubud, Gianyar" },
        ratingEn: "4.8 (15,340 reviews)",
        ratingId: "4.8 (15,340 pengulas)",
        ratingText: "4.8 (15,340)",
        badge: { textEn: "Hot", textId: "Hangat", color: "bg-red-500" }
    },
    {
        category: "culture",
        region: "gianyar",
        img: "https://idsejarah.net/wp-content/uploads/2016/01/Goa-Gajah.jpg",
        alt: "Goa Gajah",
        title: "Goa Gajah",
        descCrd: { descId: "Goa Gajah, Gianyar", descEn: "Goa Gajah Temple, Gianyar" },
        ratingEn: "4.6 (9,800 reviews)",
        ratingId: "4.6 (9,800 pengulas)",
        ratingText: "4.6 (9,800)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "gianyar",
        img: "https://img.freepik.com/premium-photo/ubud-palace-puri-saren-agung-ubud-bali-indonesia_247622-13403.jpg?w=2000",
        alt: "Ubud Palace",
        title: "Ubud Palace",
        descCrd: { descId: "Puri Saren Agung (Ubud Palace), Gianyar", descEn: "Ubud Palace, Gianyar" },
        ratingEn: "4.6 (12,400 reviews)",
        ratingId: "4.6 (12,400 pengulas)",
        ratingText: "4.6 (12,400)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "gianyar",
        img: "https://a.cdn-hotels.com/gdcs/production64/d1874/3c4ad3e8-1089-47d4-b13f-948b4515363d.jpg",
        alt: "Tegenungan Waterfall",
        title: "Tegenungan Waterfall",
        descCrd: { descId: "Air Terjun Tegenungan, Gianyar", descEn: "Tegenungan Waterfall, Gianyar" },
        ratingEn: "4.6 (16,800 reviews)",
        ratingId: "4.6 (16,800 pengulas)",
        ratingText: "4.6 (16,800)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "gianyar",
        img: "https://oneworldjustgo.com/wp-content/uploads/2019/02/Kanto-Lampo-Waterfall-Ubud-Bali.jpg",
        alt: "Kanto Lampo Waterfall",
        title: "Kanto Lampo Waterfall",
        descCrd: { descId: "Air Terjun Kanto Lampo, Gianyar", descEn: "Kanto Lampo Waterfall, Gianyar" },
        ratingEn: "4.7 (7,600 reviews)",
        ratingId: "4.7 (7,600 pengulas)",
        ratingText: "4.7 (7,600)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "gianyar",
        img: "https://dailytravelpill.com/wp-content/uploads/2018/07/tibumana-waterfall-bali-6.jpg",
        alt: "Tibumana Waterfall",
        title: "Tibumana Waterfall",
        descCrd: { descId: "Air Terjun Tibumana, Gianyar", descEn: "Tibumana Waterfall, Gianyar" },
        ratingEn: "4.6 (5,200 reviews)",
        ratingId: "4.6 (5,200 pengulas)",
        ratingText: "4.6 (5,200)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "gianyar",
        img: "https://www.touristsecrets.com/wp-content/uploads/2023/11/sacred-monkey-forest-sanctuary-in-ubud-bali-visitors-guide-1700329497.jpg",
        alt: "Sacred Monkey Forest",
        title: "Sacred Monkey Forest",
        descCrd: { descId: "Monkey Forest Ubud, Gianyar", descEn: "Sacred Monkey Forest, Gianyar" },
        ratingEn: "4.7 (27,300 reviews)",
        ratingId: "4.7 (27,300 pengulas)",
        ratingText: "4.7 (27,300)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "gianyar",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0d/6d/60/c5/lebih-beach.jpg",
        alt: "Lebih Beach",
        title: "Lebih Beach",
        descCrd: { descId: "Pantai Lebih, Gianyar", descEn: "Lebih Beach, Gianyar" },
        ratingEn: "4.4 (3,400 reviews)",
        ratingId: "4.4 (3,400 pengulas)",
        ratingText: "4.4 (3,400)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach-club",
        region: "gianyar",
        img: "https://www.wandernesia.com/wp-content/uploads/2018/11/komaneka11.jpg",
        alt: "Komaneka Beach Club",
        title: "Komaneka Beach Club",
        descCrd: { descId: "Komaneka Beach Club, Gianyar", descEn: "Komaneka Beach Club, Gianyar" },
        ratingEn: "4.5 (1,200 reviews)",
        ratingId: "4.5 (1,200 pengulas)",
        ratingText: "4.5 (1,200)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "gianyar",
        img: "https://www.surfindonesia.com/wp-content/uploads/2018/01/keramas-beach.jpg",
        alt: "Keramas Beach",
        title: "Keramas Beach",
        descCrd: { descId: "Pantai Keramas, Gianyar", descEn: "Keramas Beach, Gianyar" },
        ratingEn: "4.5 (4,600 reviews)",
        ratingId: "4.5 (4,600 pengulas)",
        ratingText: "4.5 (4,600)",
        badge: { textEn: "", textId: "", color: "" }
    },

    // BANGLI
    {
        category: "culture",
        region: "bangli",
        img: "https://promoliburan.com/userfiles/uploads/pura-ulun-danu-bratan.jpg",
        alt: "Pura Ulun Danu Batur",
        title: "Pura Ulun Danu Batur",
        descCrd: { descId: "Pura Ulun Danu Batur, Bangli", descEn: "Ulun Danu Batur Temple, Bangli" },
        ratingEn: "4.7 (8,200 reviews)",
        ratingId: "4.7 (8,200 pengulas)",
        ratingText: "4.7 (8,200)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "bangli",
        img: "https://tse3.mm.bing.net/th/id/OIP.9QsChsWk_6kIVDOuErJ8rgHaFS?pid=Api&P=0&h=180",
        alt: "Trunyan Village",
        title: "Trunyan Village",
        descCrd: { descId: "Desa Trunyan, Bangli", descEn: "Trunyan Village, Bangli" },
        ratingEn: "4.5 (3,600 reviews)",
        ratingId: "4.5 (3,600 pengulas)",
        ratingText: "4.5 (3,600)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "bangli",
        img: "https://www.darmabalicarrental.com/wp-content/uploads/2018/09/desa_penglipuran.jpg",
        alt: "Penglipuran Village",
        title: "Penglipuran Village",
        descCrd: { descId: "Desa Adat Penglipuran, Bangli", descEn: "Penglipuran Village, Bangli" },
        ratingEn: "4.7 (12,400 reviews)",
        ratingId: "4.7 (12,400 pengulas)",
        ratingText: "4.7 (12,400)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "bangli",
        img: "https://bali.com/wp-content/uploads/2020/11/tukad-cepung.jpg",
        alt: "Tukad Cepung Waterfall",
        title: "Tukad Cepung Waterfall",
        descCrd: { descId: "Air Terjun Tukad Cepung, Bangli", descEn: "Tukad Cepung Waterfall, Bangli" },
        ratingEn: "4.7 (9,100 reviews)",
        ratingId: "4.7 (9,100 pengulas)",
        ratingText: "4.7 (9,100)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "bangli",
        img: "https://img-asset-01.visitbali.id/aFaoCCd63opq64PJnvIN3_SLH9tetlasWgCL2O7OFX8/fill/650/450/no/0/aHR0cHM6Ly92aXNpdGJhbGkuaWQvaW1hZ2VzL2RhdGEvSnVuLTIwMTgvNWIzMzRhNDc0MmM0YThkNWUuanBn.jpg",
        alt: "Pengibul Waterfall",
        title: "Pengibul Waterfall",
        descCrd: { descId: "Air Terjun Pengibul, Bangli", descEn: "Pengibul Waterfall, Bangli" },
        ratingEn: "4.6 (2,300 reviews)",
        ratingId: "4.6 (2,300 pengulas)",
        ratingText: "4.6 (2,300)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "waterfall",
        region: "bangli",
        img: "https://img-asset-01.visitbali.id/I-fVlt2bhoIxGXk1xfspJ5uQAxfWoYN5s1m6O8I7MaU/fill/650/450/no/0/aHR0cHM6Ly92aXNpdGJhbGkuaWQvaW1hZ2VzL2RhdGEvMjAyMC9BdWcvMTEvNWYzMmQ5Yzk0NGYzYjNiNWQuanBn.jpg",
        alt: "Kroya Waterfall",
        title: "Kroya Waterfall",
        descCrd: { descId: "Air Terjun Kroya, Bangli", descEn: "Kroya Waterfall, Bangli" },
        ratingEn: "4.6 (1,800 reviews)",
        ratingId: "4.6 (1,800 pengulas)",
        ratingText: "4.6 (1,800)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach",
        region: "bangli",
        img: "https://tse1.mm.bing.net/th/id/OIP.Tp2G4dn46r9OmmVtpP3a8AHaE8?pid=Api&P=0&h=180",
        alt: "Lake Batur",
        title: "Lake Batur",
        descCrd: { descId: "Danau Batur, Bangli", descEn: "Lake Batur, Bangli" },
        ratingEn: "4.7 (6,700 reviews)",
        ratingId: "4.7 (6,700 pengulas)",
        ratingText: "4.7 (6,700)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "beach-club",
        region: "bangli",
        img: "https://cdn-imgix.headout.com/tour/36708/TOUR-IMAGE/f5f16204-0659-4e1d-8f3c-0479d8860c52-18930-bali-toya-devasya-hot-spring-waterpark-08.jpg?w=1200&h=750&auto=compress%2Cformat&crop=faces&fit=min",
        alt: "Toya Devasya Hot Spring",
        title: "Toya Devasya Hot Spring & Beach Club",
        descCrd: { descId: "Toya Devasya, Bangli", descEn: "Toya Devasya Hot Spring & Beach Club, Bangli" },
        ratingEn: "4.5 (5,200 reviews)",
        ratingId: "4.5 (5,200 pengulas)",
        ratingText: "4.5 (5,200)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "bangli",
        img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/07/12/7b/36.jpg",
        alt: "Kintamani Highland",
        title: "Kintamani Highland",
        descCrd: { descId: "Dataran Tinggi Kintamani, Bangli", descEn: "Kintamani Highland, Bangli" },
        ratingEn: "4.8 (18,300 reviews)",
        ratingId: "4.8 (18,300 pengulas)",
        ratingText: "4.8 (18,300)",
        badge: { textEn: "", textId: "", color: "" }
    },
    {
        category: "culture",
        region: "bangli",
        img: "https://www.tripsavvy.com/thmb/8Ww5Z9KpE398lxYBT0h7Zwdp9fI=/6500x4325/filters:fill(auto,1)/mount-batur-at-sunrise--bali--indonesia-722224239-3300fc8429e54365967357c040f7ba9e.jpg",
        alt: "Mount Batur",
        title: "Mount Batur",
        descCrd: { descId: "Gunung Batur, Bangli", descEn: "Mount Batur, Bangli" },
        ratingEn: "4.8 (22,600 reviews)",
        ratingId: "4.8 (22,600 pengulas)",
        ratingText: "4.8 (22,600)",
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