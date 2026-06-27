const products = [
    // ================= BLOCK 1: ADIDAS (ID: 1 - 15) =================
    // ----- APPAREL: TOPWEAR (5 Sản phẩm) -----
    {
        id: 1,
        slug: "adidas-performance-tshirt",
        name: "Adidas Performance T-Shirt",
        brand: "Adidas",
        category: "topwear",
        subCategory: "tshirt",
        price: 550000,
        oldPrice: 750000,
        badge: "Best Seller",
        rating: 4.8,
        stock: 20,
        featured: true, // Signature Product #1
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/adidas/adidas-tshirt-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-tshirt-1.webp",
            "assets/images/product/adidas/adidas-tshirt-2.webp",
            "assets/images/product/adidas/adidas-tshirt-3.webp",
        ],
        description: "Lightweight performance T-shirt designed for sports and everyday comfort, featuring moisture-wicking technology."
    },
    {
        id: 2,
        slug: "adidas-essentials-tshirt",
        name: "Adidas Essentials T-Shirt",
        brand: "Adidas",
        category: "topwear",
        subCategory: "tshirt",
        price: 500000,
        oldPrice: 680000,
        badge: "Sale",
        rating: 4.7,
        stock: 18,
        featured: false,
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/adidas/adidas-essentials-tshirt-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-essentials-tshirt-1.webp",
            "assets/images/product/adidas/adidas-essentials-tshirt-2.webp"
        ],
        description: "Classic cotton T-shirt suitable for daily casual wear with a soft, comfortable feel."
    },
    {
        id: 3,
        slug: "adidas-polo-shirt",
        name: "Adidas Polo Shirt",
        brand: "Adidas",
        category: "topwear",
        subCategory: "polo",
        price: 690000,
        oldPrice: 890000,
        badge: "",
        rating: 4.8,
        stock: 15,
        featured: false,
        colors: ["Black", "White", "Brown"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/adidas/adidas-polo-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-polo-1.webp",
            "assets/images/product/adidas/adidas-polo-2.webp",
            "assets/images/product/adidas/adidas-polo-3.webp"
        ],
        description: "Premium polo shirt combining sporty comfort and modern style, perfect for both the gym and the street."
    },
    {
        id: 4,
        slug: "adidas-training-hoodie",
        name: "Adidas Training Hoodie",
        brand: "Adidas",
        category: "topwear",
        subCategory: "hoodie",
        price: 990000,
        oldPrice: 1290000,
        badge: "New",
        rating: 4.9,
        stock: 12,
        featured: false,
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/adidas/adidas-hoodie-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-hoodie-1.webp",
            "assets/images/product/adidas/adidas-hoodie-2.webp",
            "assets/images/product/adidas/adidas-hoodie-3.webp"
        ],
        description: "Warm and comfortable hoodie designed for outdoor training sessions and casual layering."
    },
    {
        id: 5,
        slug: "adidas-sports-jacket",
        name: "Adidas Sports Jacket",
        brand: "Adidas",
        category: "topwear",
        subCategory: "jacket",
        price: 1450000,
        oldPrice: 1790000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 10,
        featured: true, // Signature Product #2
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/adidas/adidas-sports-jacket-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-sports-jacket-1.webp",
            "assets/images/product/adidas/adidas-sports-jacket-2.webp"
        ],
        description: "Athletic jacket offering weather protection and modern sportswear styling."
    },

    // ----- APPAREL: BOTTOMWEAR (5 Sản phẩm) -----
    {
        id: 6,
        slug: "adidas-training-pants",
        name: "Adidas Training Pants",
        brand: "Adidas",
        category: "bottomwear",
        subCategory: "pants",
        price: 850000,
        oldPrice: 1100000,
        badge: "",
        rating: 4.7,
        stock: 25,
        featured: false,
        colors: ["Black", "Navy", "White"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/adidas/adidas-training-pants-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-training-pants-1.webp",
            "assets/images/product/adidas/adidas-training-pants-2.webp",
            "assets/images/product/adidas/adidas-training-pants-3.webp"
        ],
        description: "Breathable and flexible pants designed for intensive training workouts."
    },
    {
        id: 7,
        slug: "adidas-joggers",
        name: "Adidas Joggers",
        brand: "Adidas",
        category: "bottomwear",
        subCategory: "pants",
        price: 950000,
        oldPrice: 1200000,
        badge: "Sale",
        rating: 4.6,
        stock: 20,
        featured: false,
        colors: ["Black", "Navy", "Grey"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/adidas/adidas-joggers-2.webp",
        gallery: [
            "assets/images/product/adidas/adidas-joggers-1.webp",
            "assets/images/product/adidas/adidas-joggers-2.webp",
            "assets/images/product/adidas/adidas-joggers-3.webp"
        ],
        description: "Versatile joggers providing all-day comfort for a relaxed, athletic look."
    },
    {
        id: 8,
        slug: "adidas-woven-shorts",
        name: "Adidas Woven Shorts",
        brand: "Adidas",
        category: "bottomwear",
        subCategory: "shorts",
        price: 500000,
        oldPrice: 700000,
        badge: "",
        rating: 4.5,
        stock: 40,
        featured: false,
        colors: ["Black", "Blue", "Grey"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/adidas/adidas-woven-shorts-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-woven-shorts-1.webp",
            "assets/images/product/adidas/adidas-woven-shorts-2.webp",
            "assets/images/product/adidas/adidas-woven-shorts-3.webp"
        ],
        description: "Lightweight, breathable woven shorts with an elastic waist, perfect for warm-weather activities."
    },
    {
        id: 9,
        slug: "adidas-training-shorts",
        name: "Adidas Training Shorts",
        brand: "Adidas",
        category: "bottomwear",
        subCategory: "shorts",
        price: 550000,
        oldPrice: 750000,
        badge: "New",
        rating: 4.7,
        stock: 35,
        featured: false,
        colors: ["Black", "Navy",],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/adidas/adidas-training-shorts-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-training-shorts-1.webp",
            "assets/images/product/adidas/adidas-training-shorts-2.webp"
        ],
        description: "Durable and performance-driven training shorts for various fitness exercises."
    },
    {
        id: 10,
        slug: "adidas-sweatpants",
        name: "Adidas Sweatpants",
        brand: "Adidas",
        category: "bottomwear",
        subCategory: "pants",
        price: 800000,
        oldPrice: 1000000,
        badge: "Sale",
        rating: 4.6,
        stock: 22,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/adidas/adidas-sweatpants-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-sweatpants-1.webp",
            "assets/images/product/adidas/adidas-sweatpants-2.webp"
        ],
        description: "Soft fleece sweatpants for ultimate comfort and casual style."
    },

    // ----- FOOTWEAR (3 Sản phẩm) -----
    {
        id: 11,
        slug: "adidas-running-sneakers",
        name: "Adidas Running Sneakers",
        brand: "Adidas",
        category: "footwear",
        subCategory: "sneakers",
        price: 1500000,
        oldPrice: 2000000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 15,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/adidas/adidas-running-sneakers-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-running-sneakers-1.webp",
            "assets/images/product/adidas/adidas-running-sneakers-2.webp"
        ],
        description: "Responsive and comfortable running sneakers designed for performance and everyday use."
    },
    {
        id: 12,
        slug: "adidas-training-sneakers",
        name: "Adidas Training Sneakers",
        brand: "Adidas",
        category: "footwear",
        subCategory: "sneakers",
        price: 1600000,
        oldPrice: 2100000,
        badge: "New",
        rating: 4.8,
        stock: 12,
        featured: false,
        colors: ["Black", "Grey"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/adidas/adidas-training-sneakers-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-training-sneakers-1.webp",
            "assets/images/product/adidas/adidas-training-sneakers-2.webp",
        ],
        description: "Stable and supportive sneakers built for gym workouts and cross-training activities."
    },
    {
        id: 13,
        slug: "adidas-lifestyle-sneakers",
        name: "Adidas Lifestyle Sneakers",
        brand: "Adidas",
        category: "footwear",
        subCategory: "sneakers",
        price: 1400000,
        oldPrice: 1900000,
        badge: "Sale",
        rating: 4.7,
        stock: 25,
        featured: false,
        colors: ["Grey", "Navy"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/adidas/adidas-lifestyle-sneakers-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-lifestyle-sneakers-1.webp",
            "assets/images/product/adidas/adidas-lifestyle-sneakers-2.webp",
        ],
        description: "A perfect blend of comfort and style, suitable for any casual daily outfit."
    },

    // ----- ACCESSORIES (2 Sản phẩm) -----
    {
        id: 14,
        slug: "adidas-backpack",
        name: "Adidas Classic Backpack",
        brand: "Adidas",
        category: "accessories",
        subCategory: "backpack",
        price: 750000,
        oldPrice: 1000000,
        badge: "Best Seller",
        rating: 4.8,
        stock: 30,
        featured: false,
        colors: ["Black", "Blue", "Navy"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/adidas/adidas-backpack-3.webp",
        gallery: [
            "assets/images/product/adidas/adidas-backpack-1.webp",
            "assets/images/product/adidas/adidas-backpack-2.webp",
            "assets/images/product/adidas/adidas-backpack-3.webp",
        ],
        description: "A durable and spacious backpack with multiple compartments for easy organization."
    },
    {
        id: 15,
        slug: "adidas-cap",
        name: "Adidas Classic Cap",
        brand: "Adidas",
        category: "accessories",
        subCategory: "cap",
        price: 450000,
        oldPrice: 600000,
        badge: "",
        rating: 4.7,
        stock: 50,
        featured: false,
        colors: ["Black"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/adidas/adidas-cap-1.webp",
        gallery: [
            "assets/images/product/adidas/adidas-cap-1.webp",
            "assets/images/product/adidas/adidas-cap-2.webp",
            "assets/images/product/adidas/adidas-cap-3.webp"
        ],
        description: "A comfortable baseball cap featuring the iconic Adidas logo, perfect for sun protection."
    },





    // ================= BLOCK 2: NIKE (ID: 16 - 30) =================
    // ----- FOOTWEAR (9 Sản phẩm - 60%) -----
    {
        id: 16,
        slug: "nike-lebron-20",
        name: "Nike LeBron 20",
        brand: "Nike",
        category: "footwear",
        subCategory: "sneakers",
        price: 5500000,
        oldPrice: 6200000,
        badge: "",
        rating: 4.8,
        stock: 12,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/nike/nike-lebron-20-1.webp",
        gallery: [
            "assets/images/product/nike/nike-lebron-20-1.webp",
            "assets/images/product/nike/nike-lebron-20-2.webp",
            "assets/images/product/nike/nike-lebron-20-3.webp",
        ],
        description: "Two decades into a career that's exceeded every expectation, LeBron James refuses to settle. The LeBron 20 is lighter, closer to the ground and turbo-like."
    },
    {
        id: 17,
        slug: "nike-dunk-low-retro",
        name: "Nike Dunk Low Retro",
        brand: "Nike",
        category: "footwear",
        subCategory: "sneakers",
        price: 2850000,
        oldPrice: 3200000,
        badge: "New",
        rating: 4.8,
        stock: 20,
        featured: false,
        colors: ["Navy", "Grey"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/nike/nike-dunk-low-retro-3.webp",
        gallery: [
            "assets/images/product/nike/nike-dunk-low-retro-1.webp",
            "assets/images/product/nike/nike-dunk-low-rretro3.webp",
            "assets/images/product/nike/nike-dunk-low-retro-3.webp",
        ],
        description: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with classic details and throwback hoops flair."
    },
    {
        id: 18,
        slug: "nike-air-max-90",
        name: "Nike Air Max 90",
        brand: "Nike",
        category: "footwear",
        subCategory: "sneakers",
        price: 3500000,
        oldPrice: 3950000,
        badge: "",
        rating: 4.7,
        stock: 15,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/nike/nike-air-max-90-2.webp",
        gallery: [
            "assets/images/product/nike/nike-air-max-90-1.webp",
            "assets/images/product/nike/nike-air-max-90-2.webp",
            "assets/images/product/nike/nike-air-max-90-3.webp"
        ],
        description: "Lace up and feel the legacy. Championed by presidents and revolutionized through collaborations, its striking visuals and exposed Air cushioning keep it alive."
    },
    {
        id: 19,
        slug: "nike-air-max-270",
        name: "Nike Air Max 270",
        brand: "Nike",
        category: "footwear",
        subCategory: "sneakers",
        price: 4200000,
        oldPrice: 4800000,
        badge: "Sale",
        rating: 4.8,
        stock: 10,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/nike/nike-air-max-270-2.webp",
        gallery: [
            "assets/images/product/nike/nike-air-max-270-1.webp",
            "assets/images/product/nike/nike-air-max-270-2.webp",
            "assets/images/product/nike/nike-air-max-270-3.webp"
        ],
        description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. Featuring an extra-large window to showcase the Air unit."
    },
    {
        id: 20,
        slug: "nike-air-zoom-pegasus-40",
        name: "Nike Air Zoom Pegasus 40",
        brand: "Nike",
        category: "footwear",
        subCategory: "sneakers",
        price: 3200000,
        oldPrice: 3600000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 35,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/nike/nike-air-zoom-pegasus-40-1.webp",
        gallery: [
            "assets/images/product/nike/nike-air-zoom-pegasus-40-2.webp",
            "assets/images/product/nike/nike-air-zoom-pegasus-40-1.webp"
        ],
        description: "A springy ride for every run. The Peg's familiar, just-for-you feel returns to help you accomplish your goals with highly responsive Zoom Air."
    },
    {
        id: 21,
        slug: "nike-zoomx-vaporfly-next-3",
        name: "Nike ZoomX Vaporfly Next% 3",
        brand: "Nike",
        category: "footwear",
        subCategory: "sneakers",
        price: 6500000,
        oldPrice: 7200000,
        badge: "New",
        rating: 5.0,
        stock: 5,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/nike/nike-zoomx-vaporfly-next-3-2.webp",
        gallery: [
            "assets/images/product/nike/nike-zoomx-vaporfly-next-3-1.webp",
            "assets/images/product/nike/nike-zoomx-vaporfly-next-3-2.webp",
        ],
        description: "Catch them if you can. The Nike Vaporfly 3 is made for the chasers, the racers, the elevated pacers who can't turn down the thrill of the pursuit."
    },
    {
        id: 22,
        slug: "nike-revolution-6",
        name: "Nike Revolution 6",
        brand: "Nike",
        category: "footwear",
        subCategory: "sneakers",
        price: 1500000,
        oldPrice: 1900000,
        badge: "Sale",
        rating: 4.5,
        stock: 50,
        featured: false,
        colors: ["Black", "White", "khaki"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/nike/nike-revolution-6-2.webp",
        gallery: [
            "assets/images/product/nike/nike-revolution-6-1.webp",
            "assets/images/product/nike/nike-revolution-6-2.webp",
            "assets/images/product/nike/nike-revolution-6-3.webp"
        ],
        description: "Comfort is the key to a successful routine. Made with a plush mesh design, it offers a soft ride perfect for beginners."
    },
    {
        id: 23,
        slug: "nike-air-force-1-07",
        name: "Nike Air Force 1 '07",
        brand: "Nike",
        category: "footwear",
        subCategory: "sneakers",
        price: 2650000,
        oldPrice: 2950000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 45,
        featured: true, // Signature Product #1
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/nike/nike-air-force-1-07-2.webp",
        gallery: [
            "assets/images/product/nike/nike-air-force-1-07-1.webp",
            "assets/images/product/nike/nike-air-force-1-07-2.webp"
        ],
        description: "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather and perfect style."
    },

    {
        id: 24,
        slug: "nike-zoom-freak-4",
        name: "Nike Zoom Freak 4",
        brand: "Nike",
        category: "footwear",
        subCategory: "sneakers",
        price: 3800000,
        oldPrice: 4500000,
        badge: "Sale",
        rating: 4.7,
        stock: 18,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/nike/nike-zoom-freak-4-2.webp",
        gallery: [
            "assets/images/product/nike/nike-zoom-freak-4-1.webp",
            "assets/images/product/nike/nike-zoom-freak-4-2.webp",
            "assets/images/product/nike/nike-zoom-freak-4-3.webp",
        ],
        description: "Giannis Antetokounmpo's signature shoe is engineered with multi-directional traction to help you drive to the rim with power."
    },

    // ----- APPAREL (5 Sản phẩm - 33%) -----
    {
        id: 25,
        slug: "nike-sportswear-tech-fleece",
        name: "Nike Sportswear Tech Fleece Full-Zip",
        brand: "Nike",
        category: "topwear",
        subCategory: "jacket",
        price: 3200000,
        oldPrice: 3800000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 25,
        featured: true, // Signature Product #2
        colors: ["Black", "White", "Khaki"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/nike/nike-sportswear-tech-fleece-1.webp",
        gallery: [
            "assets/images/product/nike/nike-sportswear-tech-fleece-1.webp",
            "assets/images/product/nike/nike-sportswear-tech-fleece-2.webp",
            "assets/images/product/nike/nike-sportswear-tech-fleece-3.webp",
        ],
        description: "Ready for the cool weather, the Tech Fleece hoodie offers premium warmth without adding bulk or weight."
    },
    {
        id: 26,
        slug: "nike-windrunner-woven-jacket",
        name: "Nike Windrunner Woven Lined Jacket",
        brand: "Nike",
        category: "topwear",
        subCategory: "jacket",
        price: 2500000,
        oldPrice: 2900000,
        badge: "",
        rating: 4.7,
        stock: 20,
        featured: false,
        colors: ["Khaki", "Grey", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/nike/nike-windrunner-woven-jacket-1.webp",
        gallery: [
            "assets/images/product/nike/nike-windrunner-woven-jacket-1.webp",
            "assets/images/product/nike/nike-windrunner-woven-jacket-2.webp",
            "assets/images/product/nike/nike-windrunner-woven-jacket-3.webp",
        ],
        description: "More than a windbreaker. The iconic chevron design lines pay tribute to our classic running jacket from '78."
    },
    {
        id: 27,
        slug: "nike-club-fleece-hoodie",
        name: "Nike Sportswear Club Fleece Hoodie",
        brand: "Nike",
        category: "topwear",
        subCategory: "hoodie",
        price: 1400000,
        oldPrice: 1700000,
        badge: "New",
        rating: 4.8,
        stock: 30,
        featured: false,
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/nike/nike-club-fleece-hoodie-1.webp",
        gallery: [
            "assets/images/product/nike/nike-club-fleece-hoodie-1.webp",
            "assets/images/product/nike/nike-club-fleece-hoodie-2.webp",
            "assets/images/product/nike/nike-club-fleece-hoodie-3.webp",
        ],
        description: "A closet staple, the Nike Sportswear Club Fleece Pullover Hoodie combines classic style with the soft comfort of fleece."
    },
    {
        id: 28,
        slug: "nike-drifit-legend-tee",
        name: "Nike Dri-FIT Legend Fitness T-Shirt",
        brand: "Nike",
        category: "topwear",
        subCategory: "tshirt",
        price: 750000,
        oldPrice: 950000,
        badge: "",
        rating: 4.6,
        stock: 40,
        featured: false,
        colors: ["Grey", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/nike/nike-drifit-legend-tee-1.webp",
        gallery: [
            "assets/images/product/nike/nike-drifit-legend-tee-1.webp",
            "assets/images/product/nike/nike-drifit-legend-tee-2.webp"
        ],
        description: "The Nike Dri-FIT Legend T-Shirt is a workout essential with odor-resistant fabric that wicks sweat away."
    },
    {
        id: 29,
        slug: "nike-drifit-stride-shorts",
        name: "Nike Dri-FIT Stride Running Shorts",
        brand: "Nike",
        category: "bottomwear",
        subCategory: "shorts",
        price: 1200000,
        oldPrice: 1500000,
        badge: "Sale",
        rating: 4.8,
        stock: 22,
        featured: false,
        colors: ["Grey", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/nike/nike-drifit-stride-shorts-1.webp",
        gallery: [
            "assets/images/product/nike/nike-drifit-stride-shorts-1.webp",
            "assets/images/product/nike/nike-drifit-stride-shorts-2.webp"
        ],
        description: "Built for speed, the Stride shorts have a lightweight feel with a shallower rise so you can run fast without any restriction."
    },

    // ----- ACCESSORIES (1 Sản phẩm - 7%) -----
    {
        id: 30,
        slug: "nike-heritage-backpack",
        name: "Nike Heritage Backpack",
        brand: "Nike",
        category: "accessories",
        subCategory: "backpack",
        price: 850000,
        oldPrice: 1050000,
        badge: "",
        rating: 4.8,
        stock: 35,
        featured: false,
        colors: ["Black"],
        sizes: [],
        image: "assets/images/product/nike/nike-heritage-backpack-2.webp",
        gallery: [
            "assets/images/product/nike/nike-heritage-backpack-1.webp",
            "assets/images/product/nike/nike-heritage-backpack-2.webp",
            "assets/images/product/nike/nike-heritage-backpack-3.webp",
        ],
        description: "Classic style and functionality. The Nike Heritage Backpack features a large main compartment with a laptop sleeve and smaller zip pockets for organized storage."
    },







    // ================= BLOCK 3: LEVI'S (ID: 31 - 45) =================
    // ----- BOTTOMWEAR: JEANS & PANTS (6 Sản phẩm) -----
    {
        id: 31,
        slug: "levis-501-original-jeans",
        name: "Levi's 501 Original Jeans",
        brand: "Levi's",
        category: "bottomwear",
        subCategory: "jeans",
        price: 1850000,
        oldPrice: 2200000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 40,
        featured: true, // Signature Product #1
        colors: ["Blue", "Navy"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/levis/levis-501-original-jeans-3.webp",
        gallery: [
            "assets/images/product/levis/levis-501-original-jeans-1.webp",
            "assets/images/product/levis/levis-501-original-jeans-2.webp",
            "assets/images/product/levis/levis-501-original-jeans-3.webp"
        ],
        description: "The ultimate icon of American culture, the one that started it all. Featuring a classic straight fit and signature button fly."
    },
    {
        id: 32,
        slug: "levis-511-slim-jeans",
        name: "Levi's 511 Slim Fit Jeans",
        brand: "Levi's",
        category: "bottomwear",
        subCategory: "jeans",
        price: 1750000,
        oldPrice: 2100000,
        badge: "Sale",
        rating: 4.8,
        stock: 25,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/levis/levis-511-slim-jeans-4.webp",
        gallery: [
            "assets/images/product/levis/levis-511-slim-jeans-1.webp",
            "assets/images/product/levis/levis-511-slim-jeans-1.webp",
            "assets/images/product/levis/levis-511-slim-jeans-2.webp",
            "assets/images/product/levis/levis-511-slim-jeans-3.webp",
            "assets/images/product/levis/levis-511-slim-jeans-4.webp",
            
        ],
        description: "A modern slim with room to move. The 511 Slim Fit Jeans are a classic since right now, designed to look good with everything."
    },
    {
        id: 33,
        slug: "levis-512-slim-taper-jeans",
        name: "Levi's 512 Slim Taper Jeans",
        brand: "Levi's",
        category: "bottomwear",
        subCategory: "jeans",
        price: 1950000,
        oldPrice: 2350000,
        badge: "New",
        rating: 4.7,
        stock: 20,
        featured: false,
        colors: ["Blue", "Navy",],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/levis/levis-512-slim-taper-jeans-3.webp",
        gallery: [
            "assets/images/product/levis/levis-512-slim-taper-jeans-1.webp",
            "assets/images/product/levis/levis-512-slim-taper-jeans-2.webp",
            "assets/images/product/levis/levis-512-slim-taper-jeans-3.webp"
        ],
        description: "The perfect balance between a skinny and a regular taper. Tailored with a narrow leg for a clean and modern look."
    },
    {
        id: 34,
        slug: "levis-505-regular-jeans",
        name: "Levi's 505 Regular Fit Jeans",
        brand: "Levi's",
        category: "bottomwear",
        subCategory: "jeans",
        price: 1800000,
        oldPrice: 2100000,
        badge: "",
        rating: 4.8,
        stock: 30,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/levis/levis-505-regular-jeans-2.webp",
        gallery: [
            "assets/images/products/levis/levis-505-regular-jeans-1.jpg",
            "assets/images/products/levis/levis-505-regular-jeans-2.jpg"
        ],
        description: "The original zip fly, created in 1967. With a comfortable straight leg and classic styling, this fit works for all body types."
    },
    {
        id: 35,
        slug: "levis-xx-chino-pants",
        name: "Levi's XX Chino Standard Pants",
        brand: "Levi's",
        category: "bottomwear",
        subCategory: "pants",
        price: 1450000,
        oldPrice: 1750000,
        badge: "Sale",
        rating: 4.6,
        stock: 28,
        featured: false,
        colors: ["Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/levis/levis-xx-chino-pants-2.webp",
        gallery: [
            "assets/images/product/levis/levis-xx-chino-pants-1.webp",
            "assets/images/product/levis/levis-xx-chino-pants-3.webp",
            "assets/images/product/levis/levis-xx-chino-pants-3.webp"
        ],
        description: "These aren't your dad's khakis. Soft, comfortable, and versatile chinos with a modern standard fit."
    },
    {
        id: 36,
        slug: "levis-550-relaxed-jeans",
        name: "Levi's 550 Relaxed Fit Jeans",
        brand: "Levi's",
        category: "bottomwear",
        subCategory: "jeans",
        price: 1850000,
        oldPrice: 2200000,
        badge: "",
        rating: 4.7,
        stock: 15,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/levis/levis-550-relaxed-jeans-4.webp",
        gallery: [
            "assets/images/product/levis/levis-550-relaxed-jeans-1.webp",
            "assets/images/product/levis/levis-550-relaxed-jeans-2.webp",
            "assets/images/product/levis/levis-550-relaxed-jeans-3.webp",
            "assets/images/product/levis/levis-550-relaxed-jeans-4.webp",
        ],
        description: "A comfortable classic introduced in 1985. Relaxed through the seat and thigh for an easy-going style."
    },

    // ----- TOPWEAR: JACKETS & SHIRTS & TEES (6 Sản phẩm) -----
    {
        id: 37,
        slug: "levis-trucker-jacket",
        name: "Levi's Original Trucker Jacket",
        brand: "Levi's",
        category: "topwear",
        subCategory: "jacket",
        price: 2400000,
        oldPrice: 2850000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 18,
        featured: true, // Signature Product #2
        colors: ["Black", "Grey", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/levis/levis-trucker-jacket-2.webp",
        gallery: [
            "assets/images/product/levis/levis-trucker-jacket-1.webp",
            "assets/images/product/levis/levis-trucker-jacket-2.webp",
            "assets/images/product/levis/levis-trucker-jacket-3.webp"
        ],
        description: "A blank canvas for self-expression. This timeless denim jacket is built with superior craftsmanship and lasts a lifetime."
    },
    {
        id: 38,
        slug: "levis-sherpa-trucker-jacket",
        name: "Levi's Sherpa Trucker Jacket",
        brand: "Levi's",
        category: "topwear",
        subCategory: "jacket",
        price: 2950000,
        oldPrice: 3500000,
        badge: "New",
        rating: 4.8,
        stock: 12,
        featured: false,
        colors: ["Navy", "Khaki", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/levis/levis-sherpa-trucker-jacket-1.webp",
        gallery: [
            "assets/images/product/levis/levis-sherpa-trucker-jacket-1.webp",
            "assets/images/product/levis/levis-sherpa-trucker-jacket-2.webp",
            "assets/images/product/levis/levis-sherpa-trucker-jacket-3.webp",
        ],
        description: "Cold-weather proof. The classic Trucker Jacket gets a seasonal update with warm sherpa insulation and a soft quilted lining."
    },
    {
        id: 39,
        slug: "levis-batwing-logo-tshirt",
        name: "Levi's Batwing Logo T-Shirt",
        brand: "Levi's",
        category: "topwear",
        subCategory: "tshirt",
        price: 650000,
        oldPrice: 850000,
        badge: "Sale",
        rating: 4.8,
        stock: 50,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/levis/levis-batwing-logo-tshirt-2.webp",
        gallery: [
            "assets/images/product/levis/levis-batwing-logo-tshirt-1.webp",
            "assets/images/product/levis/levis-batwing-logo-tshirt-2.webp"
        ],
        description: "A super-soft, classic crewneck tee featuring the world-famous Levi's batwing logo across the chest."
    },
    {
        id: 40,
        slug: "levis-western-denim-shirt",
        name: "Levi's Western Denim Shirt",
        brand: "Levi's",
        category: "topwear",
        subCategory: "shirt",
        price: 1550000,
        oldPrice: 1900000,
        badge: "",
        rating: 4.7,
        stock: 22,
        featured: false,
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/levis/levis-western-denim-shirt-3.webp",
        gallery: [
            "assets/images/product/levis/levis-western-denim-shirt-1.webp",
            "assets/images/product/levis/levis-western-denim-shirt-2.webp",
            "assets/images/product/levis/levis-western-denim-shirt-3.webp"
        ],
        description: "Worn by pioneers, outliers and outcasts. This western shirt features classic snap closures and pointed pocket flaps."
    },
    {
        id: 41,
        slug: "levis-graphic-hoodie",
        name: "Levi's Graphic Pullover Hoodie",
        brand: "Levi's",
        category: "topwear",
        subCategory: "hoodie",
        price: 1350000,
        oldPrice: 1650000,
        badge: "Best Seller",
        rating: 4.6,
        stock: 20,
        featured: false,
        colors: ["White", "Grey"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/levis/levis-graphic-hoodie-1.webp",
        gallery: [
            "assets/images/product/levis/levis-graphic-hoodie-1.webp",
            "assets/images/product/levis/levis-graphic-hoodie-2.webp",
            "assets/images/product/levis/levis-graphic-hoodie-3.webp",
        ],
        description: "Cozy fleece meets modern streetwear. Featuring a relaxed fit, a drawstring hood, and a bold vintage graphic."
    },
    {
        id: 42,
        slug: "levis-housemark-polo",
        name: "Levi's Housemark Polo Shirt",
        brand: "Levi's",
        category: "topwear",
        subCategory: "polo",
        price: 850000,
        oldPrice: 1100000,
        badge: "",
        rating: 4.5,
        stock: 18,
        featured: false,
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/levis/levis-housemark-polo-3.webp",
        gallery: [
            "assets/images/product/levis/levis-housemark-polo-1.webp",
            "assets/images/product/levis/levis-housemark-polo-2.webp",
            "assets/images/product/levis/levis-housemark-polo-3.webp",
        ],
        description: "A refined polo shirt made from breathable pique cotton, finished with a subtle Levi's logo on the chest."
    },

    // ----- FOOTWEAR (1 Sản phẩm) -----
    {
        id: 43,
        slug: "levis-woods-canvas-sneakers",
        name: "Levi's Woods Canvas Sneakers",
        brand: "Levi's",
        category: "footwear",
        subCategory: "sneakers",
        price: 1150000,
        oldPrice: 1400000,
        badge: "Sale",
        rating: 4.4,
        stock: 14,
        featured: false,
        colors: ["Black", "White", "Khaki"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/levis/levis-woods-canvas-sneakers-2.webp",
        gallery: [
            "assets/images/product/levis/levis-woods-canvas-sneakers-1.webp",
            "assets/images/product/levis/levis-woods-canvas-sneakers-2.webp",
            "assets/images/product/levis/levis-woods-canvas-sneakers-3.webp",
        ],
        description: "Everyday low-top canvas sneakers delivering comfort and effortless casual style that pairs perfectly with jeans."
    },

    // ----- ACCESSORIES (2 Sản phẩm) -----
    {
        id: 44,
        slug: "levis-classic-leather-belt",
        name: "Levi's Classic Leather Belt",
        brand: "Levi's",
        category: "accessories",
        subCategory: "belt",
        price: 750000,
        oldPrice: 950000,
        badge: "Best Seller",
        rating: 4.8,
        stock: 45,
        featured: false,
        colors: ["Black", "Khaki"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/levis/levis-classic-leather-belt-1.webp",
        gallery: [
            "assets/images/product/levis/levis-classic-leather-belt-1.webp",
            "assets/images/product/levis/levis-classic-leather-belt-2.webp"
        ],
        description: "A sturdy, genuine leather belt crafted to last. The essential accessory to complete your favorite pair of jeans."
    },
    {
        id: 45,
        slug: "levis-batwing-cap",
        name: "Levi's Batwing Baseball Cap",
        brand: "Levi's",
        category: "accessories",
        subCategory: "cap",
        price: 550000,
        oldPrice: 700000,
        badge: "",
        rating: 4.7,
        stock: 35,
        featured: false,
        colors: ["Black", "White", "Blue"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/levis/levis-batwing-cap-1.webp",
        gallery: [
            "assets/images/product/levis/levis-batwing-cap-1.webp",
            "assets/images/product/levis/levis-batwing-cap-2.webp",
            "assets/images/product/levis/levis-batwing-cap-3.webp",
        ],
        description: "Top off your look with this classic six-panel baseball cap, featuring an embroidered batwing logo and adjustable strap."
    },





    // ================= BLOCK 4: TOMMY HILFIGER (ID: 46 - 60) =================
    // ----- APPAREL: TOPWEAR (5 Sản phẩm) -----
    {
        id: 46,
        slug: "tommy-hilfiger-1985-regular-polo",
        name: "Tommy Hilfiger 1985 Regular Polo",
        brand: "Tommy Hilfiger",
        category: "topwear",
        subCategory: "polo",
        price: 1850000,
        oldPrice: 2200000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 35,
        featured: true, // Signature Product #1
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/tommy/tommy-hilfiger-1985-regular-polo-1.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-1985-regular-polo-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-1985-regular-polo-2.webp",
            "assets/images/product/tommy/tommy-hilfiger-1985-regular-polo-3.webp"
        ],
        description: "An everyday essential. This classic polo shirt is crafted from stretch cotton pique for comfort and features the iconic flag embroidery on the chest."
    },
    {
        id: 47,
        slug: "tommy-hilfiger-oxford-shirt",
        name: "Tommy Hilfiger Classic Oxford Shirt",
        brand: "Tommy Hilfiger",
        category: "topwear",
        subCategory: "shirt",
        price: 2100000,
        oldPrice: 2500000,
        badge: "New",
        rating: 4.8,
        stock: 20,
        featured: false,
        colors: ["Navy", "White", "Grey"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/tommy/tommy-hilfiger-oxford-shirt-2.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-oxford-shirt-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-oxford-shirt-2.webp",
            "assets/images/product/tommy/tommy-hilfiger-oxford-shirt-3.webp"
        ],
        description: "A preppy wardrobe staple. This button-down oxford shirt offers a tailored fit, perfect for smart-casual occasions or office wear."
    },
    {
        id: 48,
        slug: "tommy-hilfiger-yacht-jacket",
        name: "Tommy Hilfiger Jas Met Kap ",
        brand: "Tommy Hilfiger",
        category: "topwear",
        subCategory: "jacket",
        price: 3500000,
        oldPrice: 4200000,
        badge: "",
        rating: 4.7,
        stock: 15,
        featured: true, // Signature Product #2
        colors: ["Black", "Khaki"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/tommy/tommy-hilfiger-jasmetkap-jacket-2.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-jasmetkap-jacket-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-jasmetkap-jacket-2.webp"
        ],
        description: "Inspired by nautical heritage, this lightweight wind-resistant yacht jacket features a stand collar and signature color-blocked details."
    },
    {
        id: 49,
        slug: "tommy-hilfiger-logo-tshirt",
        name: "Tommy Hilfiger Core Logo T-Shirt",
        brand: "Tommy Hilfiger",
        category: "topwear",
        subCategory: "tshirt",
        price: 950000,
        oldPrice: 1200000,
        badge: "Sale",
        rating: 4.6,
        stock: 40,
        featured: false,
        colors: ["White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/tommy/tommy-hilfiger-logo-tshirt-2.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-logo-tshirt-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-logo-tshirt-2.webp",
            "assets/images/product/tommy/tommy-hilfiger-logo-tshirt-3.webp"
        ],
        description: "Keep it simple and stylish with this pure cotton jersey tee, finished with the bold Tommy Hilfiger logo printed across the chest."
    },
    {
        id: 50,
        slug: "tommy-hilfiger-fleece-hoodie",
        name: "Tommy Hilfiger Monogram Fleece Hoodie",
        brand: "Tommy Hilfiger",
        category: "topwear",
        subCategory: "hoodie",
        price: 2400000,
        oldPrice: 2800000,
        badge: "",
        rating: 4.8,
        stock: 18,
        featured: false,
        colors: ["Navy", "Grey", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/tommy/tommy-hilfiger-fleece-hoodie-2.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-fleece-hoodie-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-fleece-hoodie-2.webp",
            "assets/images/product/tommy/tommy-hilfiger-fleece-hoodie-3.webp",
        ],
        description: "Cozy up in this premium fleece hoodie featuring a drawstring hood, kangaroo pocket, and understated monogram branding."
    },

    // ----- APPAREL: BOTTOMWEAR (5 Sản phẩm) -----
    {
        id: 51,
        slug: "tommy-hilfiger-denton-chinos",
        name: "Tommy Hilfiger Denton Straight Chinos",
        brand: "Tommy Hilfiger",
        category: "bottomwear",
        subCategory: "pants",
        price: 2200000,
        oldPrice: 2600000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 25,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/tommy/tommy-hilfiger-denton-chinos-3.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-denton-chinos-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-denton-chinos-2.webp",
            "assets/images/product/tommy/tommy-hilfiger-denton-chinos-3.webp",
        ],
        description: "The ultimate smart-casual pants. Cut in a classic straight fit from stretch cotton twill for all-day comfort and a sharp silhouette."
    },
    {
        id: 52,
        slug: "tommy-hilfiger-bleecker-chinos",
        name: "Tommy Hilfiger Bleecker Slim Chinos",
        brand: "Tommy Hilfiger",
        category: "bottomwear",
        subCategory: "pants",
        price: 2200000,
        oldPrice: 2600000,
        badge: "Sale",
        rating: 4.7,
        stock: 20,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/tommy/tommy-hilfiger-bleecker-chinos-3.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-bleecker-chinos-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-bleecker-chinos-2.webp",
            "assets/images/product/tommy/tommy-hilfiger-bleecker-chinos-3.webp"
        ],
        description: "A modern take on a classic. These slim-fit chinos offer a streamlined look while maintaining excellent mobility."
    },
    {
        id: 53,
        slug: "tommy-hilfiger-scanton-jeans",
        name: "Tommy Hilfiger Scanton Slim Jeans",
        brand: "Tommy Hilfiger",
        category: "bottomwear",
        subCategory: "jeans",
        price: 2500000,
        oldPrice: 2900000,
        badge: "New",
        rating: 4.8,
        stock: 15,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/tommy/tommy-hilfiger-scanton-jeans-1.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-scanton-jeans-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-scanton-jeans-2.webp",
            "assets/images/product/tommy/tommy-hilfiger-scanton-jeans-3.webp",
        ],
        description: "Crafted from flexible denim, the Scanton jeans provide a flattering slim fit that moves with you throughout the day."
    },
    {
        id: 54,
        slug: "tommy-hilfiger-brooklyn-shorts",
        name: "Tommy Hilfiger Brooklyn Twill Shorts",
        brand: "Tommy Hilfiger",
        category: "bottomwear",
        subCategory: "shorts",
        price: 1500000,
        oldPrice: 1800000,
        badge: "",
        rating: 4.6,
        stock: 30,
        featured: false,
        colors: ["Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/tommy/tommy-hilfiger-brooklyn-shorts-2.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-brooklyn-shorts-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-brooklyn-shorts-2.webp",
        ],
        description: "Warm-weather ready. These versatile twill shorts feature a regular fit and side pockets, ideal for a relaxed weekend look."
    },
    {
        id: 55,
        slug: "tommy-hilfiger-fleece-shorts",
        name: "Tommy Hilfiger Lounge Fleece Shorts",
        brand: "Tommy Hilfiger",
        category: "bottomwear",
        subCategory: "shorts",
        price: 1200000,
        oldPrice: 1500000,
        badge: "Sale",
        rating: 4.7,
        stock: 22,
        featured: false,
        colors: ["White", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/tommy/tommy-hilfiger-fleece-shorts-2.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-fleece-shorts-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-fleece-shorts-2.webp",
            "assets/images/product/tommy/tommy-hilfiger-fleece-shorts-3.webp",
            "assets/images/product/tommy/tommy-hilfiger-fleece-shorts-4.webp",
        ],
        description: "Designed for downtime. Soft cotton blend fleece shorts equipped with an elastic drawstring waist for maximum comfort."
    },

    // ----- FOOTWEAR (2 Sản phẩm) -----
    {
        id: 56,
        slug: "tommy-hilfiger-essential-sneakers",
        name: "Tommy Hilfiger Essential Leather Sneakers",
        brand: "Tommy Hilfiger",
        category: "footwear",
        subCategory: "sneakers",
        price: 2800000,
        oldPrice: 3300000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 12,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/tommy/tommy-hilfiger-essential-sneakers-2.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-essential-sneakers-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-essential-sneakers-2.webp"
        ],
        description: "Clean, crisp, and classic. These low-top leather sneakers feature subtle flag branding and a comfortable rubber cupsole."
    },
    {
        id: 57,
        slug: "tommy-hilfiger-flag-slides",
        name: "Tommy Hilfiger Signature Flag Slides",
        brand: "Tommy Hilfiger",
        category: "footwear",
        subCategory: "slides",
        price: 950000,
        oldPrice: 1200000,
        badge: "",
        rating: 4.5,
        stock: 28,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/tommy/tommy-hilfiger-flag-slides-2.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-flag-slides-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-flag-slides-2.webp",
        ],
        description: "Poolside perfection. Slip into these lightweight slides featuring a contoured footbed and the iconic Tommy flag on the strap."
    },

    // ----- ACCESSORIES (3 Sản phẩm) -----
    {
        id: 58,
        slug: "tommy-hilfiger-leather-belt",
        name: "Tommy Hilfiger Denton Leather Belt",
        brand: "Tommy Hilfiger",
        category: "accessories",
        subCategory: "belt",
        price: 1100000,
        oldPrice: 1350000,
        badge: "New",
        rating: 4.8,
        stock: 30,
        featured: false,
        colors: ["Black", "Khaiki"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/tommy/tommy-hilfiger-leather-belt-1.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-leather-belt-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-leather-belt-2.webp",
            "assets/images/product/tommy/tommy-hilfiger-leather-belt-3.webp",
            "assets/images/product/tommy/tommy-hilfiger-leather-belt-4.webp",
        ],
        description: "A refined finishing touch. Crafted from smooth genuine leather with a polished silver-tone square buckle."
    },
    {
        id: 59,
        slug: "tommy-hilfiger-bifold-wallet",
        name: "Tommy Hilfiger Eton Bifold Wallet",
        brand: "Tommy Hilfiger",
        category: "accessories",
        subCategory: "wallet",
        price: 1400000,
        oldPrice: 1700000,
        badge: "Sale",
        rating: 4.9,
        stock: 20,
        featured: false,
        colors: ["Black", "Navy"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/tommy/tommy-hilfiger-bifold-wallet-1.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-bifold-wallet-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-bifold-wallet-2.webp",
        ],
        description: "Keep your essentials organized in style. This elegant leather wallet offers multiple card slots and a spacious bill compartment."
    },
    {
        id: 60,
        slug: "tommy-hilfiger-classic-cap",
        name: "Tommy Hilfiger Classic Baseball Cap",
        brand: "Tommy Hilfiger",
        category: "accessories",
        subCategory: "cap",
        price: 850000,
        oldPrice: 1050000,
        badge: "",
        rating: 4.7,
        stock: 45,
        featured: false,
        colors: ["Black"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/tommy/tommy-hilfiger-classic-cap-1.webp",
        gallery: [
            "assets/images/product/tommy/tommy-hilfiger-classic-cap-1.webp",
            "assets/images/product/tommy/tommy-hilfiger-classic-cap-2.webp",
            "assets/images/product/tommy/tommy-hilfiger-classic-cap-3.webp",
        ],
        description: "Top off your casual outfit with this pure cotton canvas cap, detailed with an embroidered logo and an adjustable back strap."
    },






    // ================= BLOCK 5: CALVIN KLEIN (ID: 61 - 75) =================
    // ----- APPAREL: TOPWEAR (5 Sản phẩm) -----
    {
        id: 61,
        slug: "ck-monogram-logo-tshirt",
        name: "Calvin Klein Monogram Logo T-Shirt",
        brand: "Calvin Klein",
        category: "topwear",
        subCategory: "tshirt",
        price: 950000,
        oldPrice: 1200000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 45,
        featured: true, // Signature Product #1
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/calvin/ck-monogram-logo-tshirt-2.webp",
        gallery: [
            "assets/images/product/calvin/ck-monogram-logo-tshirt-1.webp",
            "assets/images/product/calvin/ck-monogram-logo-tshirt-2.webp",
            "assets/images/product/calvin/ck-monogram-logo-tshirt-3.webp"
        ],
        description: "A wardrobe essential. This classic pure cotton tee features the iconic Calvin Klein monogram logo printed boldly across the chest."
    },
    {
        id: 62,
        slug: "ck-essentials-crewneck-tee",
        name: "Calvin Klein Essentials Crewneck Tee",
        brand: "Calvin Klein",
        category: "topwear",
        subCategory: "tshirt",
        price: 850000,
        oldPrice: 1100000,
        badge: "New",
        rating: 4.8,
        stock: 30,
        featured: false,
        colors: ["Black", "Khaki"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/calvin/ck-essentials-crewneck-tee-1.webp",
        gallery: [
            "assets/images/product/calvin/ck-essentials-crewneck-tee-1.webp",
            "assets/images/product/calvin/ck-essentials-crewneck-tee-2.webp",
        ],
        description: "Minimalist and versatile. A solid color crewneck t-shirt finished with a subtle micro-logo on the left chest."
    },
    {
        id: 63,
        slug: "ck-monogram-fleece-hoodie",
        name: "Calvin Klein Monogram Fleece Hoodie",
        brand: "Calvin Klein",
        category: "topwear",
        subCategory: "hoodie",
        price: 2400000,
        oldPrice: 2800000,
        badge: "",
        rating: 4.7,
        stock: 20,
        featured: false,
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/calvin/ck-monogram-fleece-hoodie-2.webp",
        gallery: [
            "assets/images/product/calvin/ck-monogram-fleece-hoodie-1.webp",
            "assets/images/product/calvin/ck-monogram-fleece-hoodie-2.webp"
        ],
        description: "Crafted from a soft cotton blend fleece, this relaxed-fit hoodie delivers premium comfort and signature CK styling."
    },
    {
        id: 64,
        slug: "ck-classic-denim-jacket",
        name: "Calvin Klein Classic Denim Jacket",
        brand: "Calvin Klein",
        category: "topwear",
        subCategory: "jacket",
        price: 3200000,
        oldPrice: 3800000,
        badge: "Sale",
        rating: 4.8,
        stock: 15,
        featured: false,
        colors: ["Khaki"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/calvin/ck-classic-denim-jacket-1.webp",
        gallery: [
            "assets/images/product/calvin/ck-classic-denim-jacket-1.webp",
            "assets/images/product/calvin/ck-classic-denim-jacket-2.webp"
        ],
        description: "An iconic layering piece. This denim jacket is cut in a standard fit and features logo-engraved metal hardware."
    },
    {
        id: 65,
        slug: "ck-slim-fit-poplin-shirt",
        name: "Calvin Klein Slim Fit Poplin Shirt",
        brand: "Calvin Klein",
        category: "topwear",
        subCategory: "shirt",
        price: 1800000,
        oldPrice: 2200000,
        badge: "",
        rating: 4.6,
        stock: 25,
        featured: false,
        colors: ["Black", "Grey", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/calvin/ck-slim-fit-poplin-shirt-1.webp",
        gallery: [
            "assets/images/product/calvin/ck-slim-fit-poplin-shirt-1.webp",
            "assets/images/product/calvin/ck-slim-fit-poplin-shirt-2.webp",
            "assets/images/product/calvin/ck-slim-fit-poplin-shirt-3.webp",
        ],
        description: "Sharp and sophisticated. A long-sleeve button-down shirt tailored in a slim fit from crisp, stretch-cotton poplin."
    },

    // ----- APPAREL: BOTTOMWEAR & INNERWEAR (5 Sản phẩm) -----
    {
        id: 66,
        slug: "ck-straight-fit-jeans",
        name: "Calvin Klein Straight Fit Jeans",
        brand: "Calvin Klein",
        category: "bottomwear",
        subCategory: "jeans",
        price: 2500000,
        oldPrice: 3000000,
        badge: "Best Seller",
        rating: 4.8,
        stock: 30,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/calvin/ck-straight-fit-jeans-4.webp",
        gallery: [
            "assets/images/product/calvin/ck-straight-fit-jeans-1.webp",
            "assets/images/product/calvin/ck-straight-fit-jeans-2.webp",
            "assets/images/product/calvin/ck-straight-fit-jeans-3.webp"
        ],
        description: "Timeless denim. These straight fit jeans sit comfortably at the waist and offer a clean, classic leg silhouette."
    },
    {
        id: 67,
        slug: "ck-slim-taper-jeans",
        name: "Calvin Klein Slim Taper Jeans",
        brand: "Calvin Klein",
        category: "bottomwear",
        subCategory: "jeans",
        price: 2600000,
        oldPrice: 3100000,
        badge: "New",
        rating: 4.7,
        stock: 22,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/calvin/ck-slim-taper-jeans-4.webp",
        gallery: [
            "assets/images/product/calvin/ck-slim-taper-jeans-1.webp",
            "assets/images/product/calvin/ck-slim-taper-jeans-2.webp",
            "assets/images/product/calvin/ck-slim-taper-jeans-3.webp",
        ],
        description: "Modern and sleek. Featuring a lower rise and a tailored taper from the knee to the ankle for a sharp look."
    },
    {
        id: 68,
        slug: "ck-stretch-chino-pants",
        name: "Calvin Klein Stretch Chino Pants",
        brand: "Calvin Klein",
        category: "bottomwear",
        subCategory: "pants",
        price: 2100000,
        oldPrice: 2500000,
        badge: "Sale",
        rating: 4.6,
        stock: 28,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/calvin/ck-stretch-chino-pants-1.webp",
        gallery: [
            "assets/images/product/calvin/ck-stretch-chino-pants-1.webp",
            "assets/images/product/calvin/ck-stretch-chino-pants-2.webp"
        ],
        description: "Refined everyday style. Made from stretch-infused twill, these chinos deliver uncompromised comfort and a clean appearance."
    },
    {
        id: 69,
        slug: "ck-iconic-cotton-boxer-briefs",
        name: "Calvin Klein Iconic Cotton Boxer Briefs",
        brand: "Calvin Klein",
        category: "accessories",
        subCategory: "underwear",
        price: 850000,
        oldPrice: 1100000,
        badge: "Best Seller",
        rating: 5.0,
        stock: 60,
        featured: true, // Signature Product #2
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/calvin/ck-iconic-cotton-boxer-briefs-1.webp",
        gallery: [
            "assets/images/product/calvin/ck-iconic-cotton-boxer-briefs-1.webp",
            "assets/images/product/calvin/ck-iconic-cotton-boxer-briefs-2.webp"
        ],
        description: "The original. The icon. Defined by the legendary Calvin Klein logo waistband, these boxer briefs offer breathable comfort and support."
    },
    {
        id: 70,
        slug: "ck-one-cotton-trunks",
        name: "Calvin Klein CK One Cotton Trunks",
        brand: "Calvin Klein",
        category: "bottomwear",
        subCategory: "underwear",
        price: 750000,
        oldPrice: 950000,
        badge: "",
        rating: 4.8,
        stock: 40,
        featured: false,
        colors: ["Black"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/calvin/ck-one-cotton-trunks-1.webp",
        gallery: [
            "assets/images/product/calvin/ck-one-cotton-trunks-1.webp",
            "assets/images/product/calvin/ck-one-cotton-trunks-2.webp"
        ],
        description: "Classic design meets modern edge. Short-leg trunks crafted from premium microfiber cotton with a flexible, shape-retaining fit."
    },

    // ----- FOOTWEAR (2 Sản phẩm) -----
    {
        id: 71,
        slug: "ck-chunky-cupsole-sneakers",
        name: "Calvin Klein Chunky Cupsole Sneakers",
        brand: "Calvin Klein",
        category: "footwear",
        subCategory: "sneakers",
        price: 2900000,
        oldPrice: 3400000,
        badge: "New",
        rating: 4.7,
        stock: 18,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/calvin/ck-chunky-cupsole-sneakers-1.webp",
        gallery: [
            "assets/images/product/calvin/ck-chunky-cupsole-sneakers-1.webp",
            "assets/images/product/calvin/ck-chunky-cupsole-sneakers-2.webp",
            "assets/images/product/calvin/ck-chunky-cupsole-sneakers-3.webp"
        ],
        description: "Elevate your streetwear. These chunky profile sneakers are crafted with smooth leather uppers and bold logo detailing on the side."
    },
    {
        id: 72,
        slug: "ck-monogram-slides",
        name: "Calvin Klein Monogram Slides",
        brand: "Calvin Klein",
        category: "footwear",
        subCategory: "slides",
        price: 1100000,
        oldPrice: 1400000,
        badge: "Sale",
        rating: 4.5,
        stock: 35,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/calvin/ck-monogram-slides-1.webp",
        gallery: [
            "assets/images/product/calvin/ck-monogram-slides-1.webp",
            "assets/images/product/calvin/ck-monogram-slides-2.webp"
        ],
        description: "Essential for warm days or post-workout comfort. Featuring a contoured EVA footbed and a wide strap with the CK monogram."
    },

    // ----- ACCESSORIES (3 Sản phẩm) -----
    {
        id: 73,
        slug: "ck-reversible-leather-belt",
        name: "Calvin Klein Reversible Leather Belt",
        brand: "Calvin Klein",
        category: "accessories",
        subCategory: "belt",
        price: 1250000,
        oldPrice: 1550000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 28,
        featured: false,
        colors: ["Black"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/calvin/ck-reversible-leather-belt-4.webp",
        gallery: [
            "assets/images/product/calvin/ck-reversible-leather-belt-1.webp",
            "assets/images/product/calvin/ck-reversible-leather-belt-2.webp",
            "assets/images/product/calvin/ck-reversible-leather-belt-3.webp",
             "assets/images/product/calvin/ck-reversible-leather-belt-4.webp"

        ],
        description: "Two looks in one. A versatile genuine leather belt featuring a modern plaque buckle with engraved logo detailing."
    },
    {
        id: 74,
        slug: "ck-classic-logo-cap",
        name: "Calvin Klein Classic Logo Cap",
        brand: "Calvin Klein",
        category: "accessories",
        subCategory: "cap",
        price: 750000,
        oldPrice: 950000,
        badge: "",
        rating: 4.6,
        stock: 40,
        featured: false,
        colors: ["Black"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/calvin/ck-classic-logo-cap-2.webp",
        gallery: [
            "assets/images/product/calvin/ck-classic-logo-cap-1.webp",
            "assets/images/product/calvin/ck-classic-logo-cap-2.webp",
        ],
        description: "A sporty finishing touch. This soft cotton twill baseball cap features subtle CK embroidery and an adjustable strap."
    },
    {
        id: 75,
        slug: "ck-campus-backpack",
        name: "Calvin Klein Campus Backpack",
        brand: "Calvin Klein",
        category: "accessories",
        subCategory: "backpack",
        price: 2200000,
        oldPrice: 2800000,
        badge: "New",
        rating: 4.8,
        stock: 15,
        featured: false,
        colors: ["Black"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/calvin/ck-campus-backpack-1.webp",
        gallery: [
           "assets/images/product/calvin/ck-campus-backpack-1.webp",
           "assets/images/product/calvin/ck-campus-backpack-2.webp",
           "assets/images/product/calvin/ck-campus-backpack-3.webp",
        ],
        description: "Carry your essentials with modern minimalist style. Features a spacious main compartment, a laptop sleeve, and a durable faux-leather finish."
    },





    // ================= BLOCK 6: GUCCI (ID: 76 - 90) =================
    // ----- APPAREL: TOPWEAR (4 Sản phẩm) -----
    {
        id: 76,
        slug: "gucci-blade-print-tshirt",
        name: "Gucci Blade Print T-Shirt",
        brand: "Gucci",
        category: "topwear",
        subCategory: "tshirt",
        price: 12500000,
        oldPrice: 14000000,
        badge: "Best Seller",
        rating: 4.8,
        stock: 15,
        featured: false,
        colors: ["Black", "Khaki"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/gucci/gucci-blade-print-tshirt-2.webp",
        gallery: [
            "assets/images/product/gucci/gucci-blade-print-tshirt-1.webp",
            "assets/images/product/gucci/gucci-blade-print-tshirt-2.webp"
        ],
        description: "A slightly oversized T-shirt in premium cotton jersey, featuring the bold Gucci Blade print across the chest for a distinctive streetwear edge."
    },
    {
        id: 77,
        slug: "gucci-web-collar-polo",
        name: "Gucci Cotton Polo with Web",
        brand: "Gucci",
        category: "topwear",
        subCategory: "polo",
        price: 16000000,
        oldPrice: 18500000,
        badge: "New",
        rating: 4.9,
        stock: 10,
        featured: false,
        colors: ["Black", "Khaki", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/gucci/gucci-web-collar-polo-3.webp",
        gallery: [
            "assets/images/product/gucci/gucci-web-collar-polo-1.webp",
            "assets/images/product/gucci/gucci-web-collar-polo-2.webp",
            "assets/images/product/gucci/gucci-web-collar-polo-3.webp",
        ],
        description: "A refined stretch-cotton polo shirt enriched by the House's signature green and red Web stripe along the collar."
    },
    {
        id: 78,
        slug: "gucci-gg-jacquard-jacket",
        name: "Gucci GG Jacquard Track Jacket",
        brand: "Gucci",
        category: "topwear",
        subCategory: "jacket",
        price: 45000000,
        oldPrice: 50000000,
        badge: "",
        rating: 5.0,
        stock: 5,
        featured: false,
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/gucci/gucci-gg-jacquard-jacket-1.webp",
        gallery: [
            "assets/images/product/gucci/gucci-gg-jacquard-jacket-1.webp",
            "assets/images/product/gucci/gucci-gg-jacquard-jacket-2.webp",
            "assets/images/product/gucci/gucci-gg-jacquard-jacket-3.webp",
        ],
        description: "Embrace the retro-sportswear aesthetic with this zip-up jacket, crafted from technical jersey and entirely covered in the iconic GG jacquard motif."
    },
    {
        id: 79,
        slug: "gucci-interlocking-g-hoodie",
        name: "Gucci Interlocking G Hoodie",
        brand: "Gucci",
        category: "topwear",
        subCategory: "hoodie",
        price: 28000000,
        oldPrice: 32000000,
        badge: "Sale",
        rating: 4.7,
        stock: 8,
        featured: false,
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/product/gucci/gucci-interlocking-g-hoodie-2.webp",
        gallery: [
            "assets/images/product/gucci/gucci-interlocking-g-hoodie-1.webp",
            "assets/images/product/gucci/gucci-interlocking-g-hoodie-2.webp",
        ],
        description: "Heavyweight cotton fleece hoodie featuring a vintage-inspired Interlocking G print. A luxurious take on essential loungewear."
    },

    // ----- APPAREL: BOTTOMWEAR (3 Sản phẩm) -----
    {
        id: 80,
        slug: "gucci-gg-canvas-shorts",
        name: "Gucci Jumbo GG Canvas Shorts",
        brand: "Gucci",
        category: "bottomwear",
        subCategory: "shorts",
        price: 22000000,
        oldPrice: 25000000,
        badge: "New",
        rating: 4.8,
        stock: 12,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/gucci/gucci-gg-canvas-shorts-1.webp",
        gallery: [
            "assets/images/product/gucci/gucci-gg-canvas-shorts-1.webp",
            "assets/images/product/gucci/gucci-gg-canvas-shorts-2.webp",
            "assets/images/product/gucci/gucci-gg-canvas-shorts-3.webp",
        ],
        description: "Bermuda shorts crafted from camel and ebony Jumbo GG canvas, offering a maximalist reinterpretation of the classic monogram."
    },
    {
        id: 81,
        slug: "gucci-tapered-denim-jeans",
        name: "Gucci Tapered Denim Jeans",
        brand: "Gucci",
        category: "bottomwear",
        subCategory: "jeans",
        price: 19500000,
        oldPrice: 23000000,
        badge: "",
        rating: 4.6,
        stock: 15,
        featured: false,
        colors: ["Black", "Navy", "Khaki"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/gucci/gucci-tapered-denim-jeans-1.webp",
        gallery: [
            "assets/images/product/gucci/gucci-tapered-denim-jeans-1.webp",
            "assets/images/product/gucci/gucci-tapered-denim-jeans-2.webp",
            "assets/images/product/gucci/gucci-tapered-denim-jeans-3.webp",
            "assets/images/product/gucci/gucci-tapered-denim-jeans-4.webp"
        ],
        description: "Italian-crafted denim jeans cut in a flattering tapered fit, subtly finished with a leather Gucci logo patch at the back waist."
    },
    {
        id: 82,
        slug: "gucci-web-chino-pants",
        name: "Gucci Web Detail Chino Pants",
        brand: "Gucci",
        category: "bottomwear",
        subCategory: "pants",
        price: 18000000,
        oldPrice: 21000000,
        badge: "Sale",
        rating: 4.7,
        stock: 10,
        featured: false,
        colors: ["Black", "Navy"],
        sizes: ["29", "30", "31", "32", "34"],
        image: "assets/images/product/gucci/gucci-web-chino-pants-1.webp",
        gallery: [
            "assets/images/product/gucci/gucci-web-chino-pants-1.webp",
            "assets/images/product/gucci/gucci-web-chino-pants-2.webp",
        ],
        description: "Classic tailored chino pants crafted from fine cotton twill, elevated by the signature green and red Web detail on the back pockets."
    },

    // ----- FOOTWEAR (5 Sản phẩm) -----
    {
        id: 83,
        slug: "gucci-ace-leather-sneakers",
        name: "Gucci Ace Leather Sneakers",
        brand: "Gucci",
        category: "footwear",
        subCategory: "sneakers",
        price: 18500000,
        oldPrice: 21000000,
        badge: "Best Seller",
        rating: 5.0,
        stock: 25,
        featured: true, // Signature Product #1
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/gucci/gucci-ace-leather-sneakers-1.webp",
        gallery: [
            "assets/images/product/gucci/gucci-ace-leather-sneakers-1.webp",
            "assets/images/product/gucci/gucci-ace-leather-sneakers-2.webp",
        ],
        description: "The classic low-top sneaker featuring the House's iconic Web stripe and mismatching metallic leather heel details. A timeless luxury staple."
    },
    {
        id: 84,
        slug: "gucci-rhyton-sneakers",
        name: "Gucci Rhyton Leather Sneakers",
        brand: "Gucci",
        category: "footwear",
        subCategory: "sneakers",
        price: 26000000,
        oldPrice: 29500000,
        badge: "New",
        rating: 4.8,
        stock: 12,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/gucci/gucci-rhyton-sneakers-2.webp",
        gallery: [
            "assets/images/product/gucci/gucci-rhyton-sneakers-1.webp",
            "assets/images/product/gucci/gucci-rhyton-sneakers-2.webp"
        ],
        description: "Designed with a thick, chunky sole and bulky construction, the Rhyton sneaker embodies the retro '90s influence featuring a vintage Gucci logo print."
    },
    {
        id: 85,
        slug: "gucci-tennis-1977-sneakers",
        name: "Gucci Tennis 1977 Sneakers",
        brand: "Gucci",
        category: "footwear",
        subCategory: "sneakers",
        price: 17000000,
        oldPrice: 19500000,
        badge: "",
        rating: 4.7,
        stock: 18,
        featured: false,
        colors: ["Blue","Khaiki", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/gucci/gucci-tennis-1977-sneakers-3.webp",
        gallery: [
            "assets/images/product/gucci/gucci-tennis-1977-sneakers-1.webp",
            "assets/images/product/gucci/gucci-tennis-1977-sneakers-2.webp",
            "assets/images/product/gucci/gucci-tennis-1977-sneakers-3.webp"
        ],
        description: "Presented in a low-top silhouette, this sneaker pairs the GG motif with the classic Web stripe, recalling the brand's connection to the world of sports."
    },
    {
        id: 86,
        slug: "gucci-pursuit-web-slides",
        name: "Gucci Pursuit Web Slides",
        brand: "Gucci",
        category: "footwear",
        subCategory: "slides",
        price: 9500000,
        oldPrice: 11000000,
        badge: "Best Seller",
        rating: 4.9,
        stock: 30,
        featured: false,
        colors: ["Black", "White"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/gucci/gucci-pursuit-web-slides-2.webp",
        gallery: [
            "assets/images/product/gucci/gucci-pursuit-web-slides-1.webp",
            "assets/images/product/gucci/gucci-pursuit-web-slides-2.webp"
        ],
        description: "Laid-back luxury. These molded rubber slides feature the unmistakable green and red striped Web across the strap."
    },
    {
        id: 87,
        slug: "gucci-gg-supreme-slides",
        name: "Gucci GG Supreme Slides",
        brand: "Gucci",
        category: "footwear",
        subCategory: "slides",
        price: 11500000,
        oldPrice: 13000000,
        badge: "Sale",
        rating: 4.8,
        stock: 20,
        featured: false,
        colors: ["Khaki", "Grey"],
        sizes: ["39", "40", "41", "42", "43"],
        image: "assets/images/product/gucci/gucci-gg-supreme-slides-2.webp",
        gallery: [
            "assets/images/product/gucci/gucci-gg-supreme-slides-1.webp",
            "assets/images/product/gucci/gucci-gg-supreme-slides-2.webp"
        ],
        description: "An essential summer silhouette enhanced by the iconic GG Supreme canvas print on the wide strap, complete with a comfortable molded footbed."
    },

    // ----- ACCESSORIES (3 Sản phẩm) -----
    {
        id: 88,
        slug: "gucci-gg-marmont-belt",
        name: "Gucci GG Marmont Leather Belt",
        brand: "Gucci",
        category: "accessories",
        subCategory: "belt",
        price: 13500000,
        oldPrice: 15500000,
        badge: "Best Seller",
        rating: 5.0,
        stock: 40,
        featured: true, // Signature Product #2
        colors: ["Black"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/gucci/gucci-gg-marmont-belt-1.webp",
        gallery: [
            "assets/images/product/gucci/gucci-gg-marmont-belt-1.webp",
            "assets/images/product/gucci/gucci-gg-marmont-belt-2.webp",
            "assets/images/product/gucci/gucci-gg-marmont-belt-3.webp"
        ],
        description: "The quintessential luxury accessory. Crafted from smooth black leather and defined by the signature Double G buckle in an antiqued brass tone."
    },
    {
        id: 89,
        slug: "gucci-gg-supreme-wallet",
        name: "Gucci GG Supreme Bifold Wallet",
        brand: "Gucci",
        category: "accessories",
        subCategory: "wallet",
        price: 12500000,
        oldPrice: 14500000,
        badge: "",
        rating: 4.9,
        stock: 18,
        featured: false,
        colors: ["Black"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/gucci/gucci-gg-supreme-wallet-1.webp",
        gallery: [
            "assets/images/product/gucci/gucci-gg-supreme-wallet-1.webp",
            "assets/images/product/gucci/gucci-gg-supreme-wallet-2.webp",
        ],
        description: "A classic bifold wallet designed in the environmentally conscious GG Supreme canvas, featuring multiple card slots and leather trim details."
    },
    {
        id: 90,
        slug: "gucci-aviator-sunglasses",
        name: "Gucci Classic Aviator Sunglasses",
        brand: "Gucci",
        category: "accessories",
        subCategory: "sunglasses",
        price: 10500000,
        oldPrice: 12000000,
        badge: "New",
        rating: 4.8,
        stock: 22,
        featured: false,
        colors: ["Black"],
        sizes: [], // Phụ kiện rỗng size
        image: "assets/images/product/gucci/gucci-aviator-sunglasses-1.webp",
        gallery: [
            "assets/images/product/gucci/gucci-aviator-sunglasses-1.webp",
            "assets/images/product/gucci/gucci-aviator-sunglasses-2.webp",
        ],
        description: "Timeless aviator frames with a modern twist. These Italian-made sunglasses feature subtle logo engraving on the metal temples and offer 100% UV protection."
    }

];
export default products.flat();