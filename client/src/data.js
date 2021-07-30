/* eslint-disable no-multi-str */
const data = {
    products: [
      {
        _id: '1',
        name: 'Tommy Hilfiger Trolley Bag',
        category: 'Bags',
        image: '/images/p1.JPG',
        price: 3200,
        countInStock: 10,
        brand: 'Tommy Hilfiger',
        rating: 4.5,
        numReviews: 10,
        description: 'Blue solid soft-sided cabin trolley suitcase with white printed. One top handle and one top retractable trolley handle 360-degree rotatable corner-mounted smooth wheels One main zip compartment has a lining, two elasticated tabs secured with a click clasp, one laptop compartment on the flap along with one zip and five slip pockets One external zip pocket Warranty: 1 year , Warranty provided by the brand owner/manufacturer',
      },
      {
        _id: '2',
        name: 'Black Leather Wallet',
        category: 'Wallets',
        image: '/images/p2.JPG',
        price: 750,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'Black solid two fold wallet 2 main compartments, has a non detachable flap 4 card holders, 2 slip pockets, has a flap coin pocket Warranty: 6 months ,Warranty provided by Brand Owner / Manufacturer',
      },
      {
        _id: '3',
        name: 'Solid Bagpack',
        category: 'Bags',
        image: '/images/p3.JPG',
        price: 2144,
        countInStock: 0,
        brand: 'Tommy Hilfiger',
        rating: 4.8,
        numReviews: 17,
        description: 'Charcoal grey backpack, Non-Padded haul loop, 2 main compartments with zip closure, Padded Mesh back, 1 external zip pocket, 1 side mesh stash pocket and 1 zip pocket, Padded shoulder strap: Padded, Water-resistance: No, Warranty: 2 years, Warranty provided by brand/manufacturer',
      },
      {
        _id: '4',
        name: 'Men Multifunction Watch',
        category: 'Watch',
        image: '/images/p4.JPG',
        price: 7350,
        countInStock: 15,
        brand: 'Nike',
        rating: 3.5,
        numReviews: 14,
        description: 'Display: Analogue, Movement: Mechanical, Power source: Battery, Dial style: Solid round stainless steel dial, Features: Multi function, date aperture, reset time, Strap style: Steel-toned regular, metal strap with a butterfly closure, Water resistance: 50m, Warranty: 2 years, Warranty provided by Brand Owner / Manufacturer',
      },
      {
        _id: '5',
        name: 'Unisex Black Bagpack',
        category: 'Bags',
        image: '/images/p5.JPG',
        price: 2449,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 105,
        description: 'Black backpack, Padded haul loop, 2 main compartments with zip closure, Padded Mesh back, Zip Pocket, Padded shoulder strap: Padded, Water-resistance: Yes, Warranty: 1 year, Warranty provided by brand/manufacturer',
      },
      {
        _id: '6',
        name: 'Men Straight Cotton Joggers',
        category: 'Joggers',
        image: '/images/p6.JPG',
        price: 1299,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 157,
        description: 'Off-white solid joggers with typographic detail, has an elasticated waistband with drawstring closure, three pockets',
      },
      {
        _id: '7',
        name: 'Women Blue Cropped Jeans',
        category: 'Jeans',
        image: '/images/p7.JPG',
        price: 1797,
        countInStock: 12,
        brand: 'Adidas',
        rating: 3.5,
        numReviews: 157,
        description: 'Blue light wash two-pocket mid-rise cropped jeans, clean look, no fade, and has a button and zip closure',
      },
      {
        _id: '8',
        name: 'Polarised Sunglasses',
        category: 'Sunglasses',
        image: '/images/p8.JPG',
        price: 1899,
        countInStock: 12,
        brand: 'Adidas',
        rating: 2.5,
        numReviews: 79,
        description: 'Lens colour: Black, Lens feature: UV Protected Lens, Frame material: Polycarbonate, Frame style: Full Rim, Best suited for: Oval face shape, Comes in a Quechua By Decathlon cover, Warranty: 2 years, Warranty provided by brand/manufacturer',
      },
      {
        _id: '9',
        name: 'Royal Blue Watch',
        category: 'Watches',
        image: '/images/p9.JPG',
        price: 3139,
        countInStock: 12,
        brand: 'Tommy Hilfiger',
        rating: 2.5,
        numReviews: 145,
        description: 'high quality product',
      },
      {
        _id: '10',
        name: 'Yellow Soft Fibre T-shirt',
        category: 'T-shirt',
        image: '/images/p10.JPG',
        price: 1299,
        countInStock: 12,
        brand: 'Nike',
        rating: 2.5,
        numReviews: 215,
        description: 'high quality product',
      },
      {
        _id: '11',
        name: 'Printed Polo Collar T-Shirt',
        category: 'T-shirt',
        image: '/images/p11.JPG',
        price: 1749,
        countInStock: 12,
        brand: 'Calvin Klien',
        rating: 4.0,
        numReviews: 118,
        description: 'high quality product',
      },
      {
        _id: '12',
        name: 'Men Scanton Jeans',
        category: 'Jeans',
        image: '/images/p12.JPG',
        price: 2650,
        countInStock: 12,
        brand: 'Puma',
        rating: 2.5,
        numReviews: 75,
        description: 'high quality product',
      },
      {
        _id: '13',
        name: 'Navy Blue Printed Shorts',
        category: 'Shorts',
        image: '/images/p13.JPG',
        price: 750,
        countInStock: 12,
        brand: 'Nike',
        rating: 4.0,
        numReviews: 255,
        description: 'high quality product',
      },
      {
        _id: '14',
        name: 'Printed Straight Kurta',
        category: 'Kurta',
        image: '/images/p14.JPG',
        price: 739,
        countInStock: 12,
        brand: 'Adidas',
        rating: 3.5,
        numReviews: 115,
        description: 'high quality product',
      },
      {
        _id: '15',
        name: 'Cordless Beard Trimmer',
        category: 'Trimmer',
        image: '/images/p15.JPG',
        price: 1299,
        countInStock: 12,
        brand: 'Philips',
        rating: 3.9,
        numReviews: 435,
        description: 'high quality product',
      },
      {
        _id: '16',
        name: 'GTS 2 Smart Watch',
        category: 'Watches',
        image: '/images/p16.JPG',
        price: 3599,
        countInStock: 12,
        brand: 'GTS',
        rating: 3.4,
        numReviews: 89,
        description: 'high quality product',
      },
      {
        _id: '17',
        name: 'Printed Round Neck T-shirt',
        category: 'T-shirt',
        image: '/images/p17.JPG',
        price: 395,
        countInStock: 12,
        brand: 'Adidas',
        rating: 2.5,
        numReviews: 218,
        description: 'high quality product',
      },
      {
        _id: '18',
        name: 'Light Blue Kurta',
        category: 'Kurta',
        image: '/images/p18.JPG',
        price: 839,
        countInStock: 12,
        brand: 'Nike',
        rating: 3.8,
        numReviews: 95,
        description: 'high quality product',
      },
      {
        _id: '19',
        name: 'Adidas Cargo Pant',
        category: 'Pants',
        image: '/images/p19.JPG',
        price: 2145,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.6,
        numReviews: 235,
        description: 'high quality product',
      },
      {
        _id: '20',
        name: 'Boat Earbuds',
        category: 'Earbuds',
        image: '/images/p20.JPG',
        price: 1799,
        countInStock: 12,
        brand: 'Boat',
        rating: 3.4,
        numReviews: 105,
        description: 'high quality product',
      },
      
    ],
  };
  export default data;
  