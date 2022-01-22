
import {storageService} from './async-storage.service.js'


const STORAGE_KEY= 'STAYDB'

export const stayService = {
    query,
    getById,
    save,
    remove,
}

const gStays = [   {
    "_id": "s0001",
    "name": "Reversible Destiny Lofts/for4people",
    "type": "loft",
    "imgUrls": [
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642653313/Airbnb%20clone/03047561_original_jbznlz.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642653312/Airbnb%20clone/e4ce1422_original_zuuvaw.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642653312/Airbnb%20clone/d0ba9942_original_sf6ejg.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642653440/Airbnb%20clone/fc1c2486_original_iiaxx7.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642653312/Airbnb%20clone/eabb5c24_original_mppu83.jpg"
    ],
    "price": 192,
    "summery": "The “Reversible Destiny Lofts MITAKA -In Memory of Helen Keller-“, built by architects/artists Shusaku Arakawa + Madeline Gins, are the first residential units designed “to not to die.”",
    "capacity": 4,
    "bedrooms": 2,
    "beds": 4,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642653312/Airbnb%20clone/e3c77364_original_ryeibc.jpg"],
    "amenities": ["Kitchen", "Parking" , "Washer", "Air conditioning", "Wifi", "Elevator", "Dryer", "Indoor fireplace", "Stove"],
    "host": {
        "_id": "h0001",
        "fullname": "Matsuda",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "Japan",
        "countryCode": "JPN",
        "address": "Reversible Destiny Lofts",
        "lat":35.680984, 
        "lng":139.538030
    },
    "reviews": [{
        "id": "r0001",
        "txt": "This place is amazing. You feel refreshed just being in your room! It's so unique and gorgeous. ",
        "rate": 5,
        "by": {
            "_id": "u0001",
            "fullname": "Kerolyne",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "true"

},
{
    "_id": "s0002",
    "name": "Spacious! Shibuya House w/Garden",
    "type": "room",
    "imgUrls": [
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642654286/Airbnb%20clone/fce859b4-e6f6-42e2-9a0b-268898c99084_oeb4xg.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642654285/Airbnb%20clone/ab56185c-8273-410a-b6d3-4f1202781b8a_ibuupc.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642654285/Airbnb%20clone/5b3cb703-c09a-4f3a-a86a-c1d93aa835a6_b6cnod.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642654286/Airbnb%20clone/29b80ca9-76c8-4859-92ae-23a1f7b68cca_lkvixc.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642654285/Airbnb%20clone/a5a8ec32-3179-410f-b9bd-609763bfa7f9_jl4s2w.jpg"
    ],
    "price": 236,
    "summery": "Our comfortable, bright, clean and warm house surrounded by green is located close to Shibuya, Harajuku, Omotesando and Shinjuku! We provide you with info on best restaurants, areas, history and entertainments that only locals know in Tokyo.",
    "capacity": 3,
    "bedrooms": 1,
    "beds": 4,
    "bathrooms": 2,
    "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642654286/Airbnb%20clone/5b2e7a69_original_tywgk8.jpg"],
    "amenities": ["Kitchen", "TV" , "Dryer", "Bckyard", "Wifi", "Washer", "Air conditioning", "Indoor fireplace"],
    "host": {
        "_id": "h0002",
        "fullname": "Kako & Keiko",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "Japan",
        "countryCode": "JPN",
        "address": "Shibuya, Tokyo",
        "lat": 35.671625, 
        "lng":139.683750
    },
    "reviews": [{
        "id": "r0002",
        "txt": "Great room in a perfect location! Keiko was the perfect host giving us wonderful tips and insider info.",
        "rate": 4,
        "by": {
            "_id": "u0002",
            "fullname": "Lisa",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "true"

},
{
    "_id": "s0003",
    "name": "[Explore hub] The only temple stay in Central TKO",
    "type": "house",
    "imgUrls": [
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642655146/Airbnb%20clone/5e2c4b7e-8b35-45ac-af8d-8d7e1f62b669_v8d4f0.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642655146/Airbnb%20clone/973d0e05-0a48-44fe-96d6-b23c04f48c44_owcftk.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642655146/Airbnb%20clone/bcf8877a-dd0f-4fb1-b898-25cc8b8032ae_ballbj.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642655147/Airbnb%20clone/4a2e42f0-796d-435e-80b4-fab18744856b_ltulqd.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642655146/Airbnb%20clone/4cfd9b39-2807-4810-bfd3-2d2567ec29b1_ezqh7d.jpg"
    ],
    "price": 126,
    "summery": "Enjoy staying in the newly built residence building, which is located in the Shiba Shoden-ji Temple, a Nichiren sect temple with a history of about 400 years. Shoden-ji Temple was built in 1602 and has been replaced several times since then. The accommodation will be on the first floor of a separate building on the side of the main hall.",
    "capacity": 6,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642655147/Airbnb%20clone/f4b99146-5efe-4138-b9a3-ba3895c6e949_za5tlt.jpg"],
    "amenities": ["Kitchen", "Washing machine" , "Air conditioning", "Refrigerator", "Wifi", "Dryer"],
    "host": {
        "_id": "h0003",
        "fullname": "Otera",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "Japan",
        "countryCode": "JPN",
        "address": "TEMPLE HOTEL SHODENJI",
        "lat": 35.650278, 
        "lng":139.754737
    },
    "reviews": [{
        "id": "r0003",
        "txt": "I wish Airbnb had ten stars for reviews.. this place was quite special for japan. The space was larger than expected. Very clean and everything one needs for the perfect stay. The staff were quick to respond and I simply had the best stay in years in Tokyo here!",
        "rate": 5,
        "by": {
            "_id": "u0003",
            "fullname": "Osunlade",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "false"

},
{
    "_id": "s0004",
    "name": "Montmartre 2BD/Spectacular Views",
    "type": "apartment",
    "imgUrls": [
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642652059/Airbnb%20clone/104ca552-d981-4e74-b9cf-0ee2e7b37d6d_vuzbvm.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642652059/Airbnb%20clone/dfa3473b-8fa3-4cf4-99c8-5fc1a57734b3_hvgxve.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642652059/Airbnb%20clone/1287fba7-eff8-458a-8784-06e1aa9a1443_lmprfd.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642652293/Airbnb%20clone/7d57ad7b-309a-472f-88d1-15c2569cce10_pvfdj4.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642652059/Airbnb%20clone/3a5462f7-4b5f-46b6-b8a2-53f6928d4a4a_qbfyfg.jpg"
    ],
    "price": 680,
    "summery": "This spectacular, duplex loft offers Parisian grandeur, elegance and comfort for the discerning vacation traveler. The entire apartment has been superbly remodeled and luxuriously decorated to combine old-world charm (hardwood floors, exposed beams and antique furniture) with modern amenities. The home consists of 2 bedrooms and 2 full bathrooms and boasts stunning views of Montmartre and the Sacre-Coeur framed by 14-foot floor-to-ceiling windows.",
    "capacity": 4,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "sleep": [
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642652059/Airbnb%20clone/1ff8fe45-19d2-41cc-8053-f6156a113f4c_dvxobz.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642652059/Airbnb%20clone/275411d2-2ca7-4148-8ab9-82bff0c5bc79_uu1gkz.jpg"
    ],
    "amenities": ["City skyline view", "Wifi", "TV" , "Washer", "Private balcony", "Kitchen", "Parking", "Elevator", "Dryer", "Indoor fireplace"],
    "host": {
        "_id": "h0004",
        "fullname": "Chris",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "France",
        "countryCode": "FR",
        "address": "Paris, Île-de-France, France",
        "lat": 48.882233, 
        "lng":2.343122
    },
    "reviews": [{
        "id": "r0004",
        "txt": "This is a one of a kind rental. An experience not to be missed.",
        "rate": 5,
        "by": {
            "_id": "u0004",
            "fullname": "George",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "true"

},
{
    "_id": "s0005",
    "name": "Cool Place",
    "type": "Apartment",
    "imgUrls": [
        "https://res.cloudinary.com/di0utpbop/image/upload/v1638353769/airdnd/55a0ef5e-d637-48b5-ace1-c7674a125315_eipvdi.jpg"
    ],
    "price": 200,
    "summery": "Information",
    "capacity": 4,
    "bedrooms": 3,
    "beds": 2,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638353774/airdnd/48633eb8-6610-44bb-a7ea-6f3e0ab5580e_asacpm.jpg"],
    "amenities": ["Wifi", "Wash disher" , "Kitchen", "Parking", "Working space"],
    "host": {
        "_id": "h0005",
        "fullname": "Puki Muki",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "France",
        "countryCode": "FR",
        "address": "Paris",
        "lat": 35.664252, 
        "lng":139.702251
    },
    "reviews": [{
        "id": "r0005",
        "txt": "Wow!",
        "rate": 4,
        "by": {
            "_id": "u0005",
            "fullname": "user5",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "false"

},
{
    "_id": "s0006",
    "name": "Quiet place",
    "type": "Apartment",
    "imgUrls": [
        "https://res.cloudinary.com/di0utpbop/image/upload/v1638353769/airdnd/55a0ef5e-d637-48b5-ace1-c7674a125315_eipvdi.jpg"
    ],
    "price": 80,
    "summery": "Information",
    "capacity": 2,
    "bedrooms": 2,
    "beds": 1,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638353774/airdnd/48633eb8-6610-44bb-a7ea-6f3e0ab5580e_asacpm.jpg"],
    "amenities": ["Wifi", "Wash disher" , "Kitchen", "Parking", "Working space"],
    "host": {
        "_id": "h0006",
        "fullname": "Puki Muki",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "France",
        "countryCode": "FR",
        "address": "Paris",
        "lat": 35.664252, 
        "lng":139.702251
    },
    "reviews": [{
        "id": "r0006",
        "txt": "Wow!",
        "rate": 3,
        "by": {
            "_id": "u0006",
            "fullname": "user6",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "false"

},
{
    "_id": "s0007",
    "name": "Beach place",
    "type": "House",
    "imgUrls": [
        "https://res.cloudinary.com/di0utpbop/image/upload/v1638353769/airdnd/55a0ef5e-d637-48b5-ace1-c7674a125315_eipvdi.jpg"
    ],
    "price": 220,
    "summery": "Information",
    "capacity": 3,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638353774/airdnd/48633eb8-6610-44bb-a7ea-6f3e0ab5580e_asacpm.jpg"],
    "amenities": ["Wifi", "Wash disher" , "Kitchen", "Parking", "Working space"],
    "host": {
        "_id": "h0007",
        "fullname": "Puki Muki",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "Mexico",
        "countryCode": "MX",
        "address": "Cancun",
        "lat": 35.664252, 
        "lng":139.702251
    },
    "reviews": [{
        "id": "r0007",
        "txt": "Wow!",
        "rate": 5,
        "by": {
            "_id": "u0007",
            "fullname": "user7",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "false"

},
{
    "_id": "s0008",
    "name": "Beach",
    "type": "House",
    "imgUrls": [
        "https://res.cloudinary.com/di0utpbop/image/upload/v1638353769/airdnd/55a0ef5e-d637-48b5-ace1-c7674a125315_eipvdi.jpg"
    ],
    "price": 220,
    "summery": "Information",
    "capacity": 3,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638353774/airdnd/48633eb8-6610-44bb-a7ea-6f3e0ab5580e_asacpm.jpg"],
    "amenities": ["Wifi", "Wash disher" , "Kitchen", "Parking", "Working space"],
    "host": {
        "_id": "h0008",
        "fullname": "Puki Muki",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "Mexico",
        "countryCode": "MX",
        "address": "Cancun",
        "lat": 35.664252, 
        "lng":139.702251
    },
    "reviews": [{
        "id": "r0008",
        "txt": "Wow!",
        "rate": 5,
        "by": {
            "_id": "u0008",
            "fullname": "user8",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "false"

},
{
    "_id": "s0009",
    "name": "Place",
    "type": "House",
    "imgUrls": [
        "https://res.cloudinary.com/di0utpbop/image/upload/v1638353769/airdnd/55a0ef5e-d637-48b5-ace1-c7674a125315_eipvdi.jpg"
    ],
    "price": 220,
    "summery": "Information",
    "capacity": 3,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638353774/airdnd/48633eb8-6610-44bb-a7ea-6f3e0ab5580e_asacpm.jpg"],
    "amenities": ["Wifi", "Wash disher" , "Kitchen", "Parking", "Working space"],
    "host": {
        "_id": "h0009",
        "fullname": "Puki Muki",
        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
    },
    "location": {
        "country": "Mexico",
        "countryCode": "MX",
        "address": "Cancun",
        "lat": 35.664252, 
        "lng":139.702251
    },
    "reviews": [{
        "id": "r0009",
        "txt": "Wow!",
        "rate": 5,
        "by": {
            "_id": "u0009",
            "fullname": "user9",
            "imgUrl": "https://source.unsplash.com/random/100x100/?face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "true"

},
{
    "_id": "s0010",
    "name": "Aura House 2bds Eco Bamboo House, Pool, River View",
    "type": "Villa",
    "imgUrls": [
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642828523/Airbnb%20clone/e25a9b25-fa98-4160-bfd1-039287bf38b6_xqjgrs.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642828523/Airbnb%20clone/f4f7b242-db33-46fc-9080-c3d6a6fd55ec_wdld1s.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642828523/Airbnb%20clone/372e7d6f-7fb9-4668-92f0-25bb9a346814_pkonld.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642828522/Airbnb%20clone/4756e699-f474-4ca7-8b77-06b12715a6cb_xbr1bv.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642828523/Airbnb%20clone/97108083-280f-4e0e-9f1b-7a4b0dd34c44_koovrk.jpg"
    ],
    "price": 244,
    "summery": "Aura house is a beautiful & unique eco bamboo house built on the west bank of the River Ayung facing east to catch sunrise. Aura House is situated 25min away from Ubud, and 35min away from Canggu.",
    "capacity": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642828522/Airbnb%20clone/dd721325-c2b0-47f8-b669-c01631c7a4ae_g1xi5y.jpg"],
    "amenities": ["Kitchen", "Parking" , "Air conditioning", "Wifi", "Pool", "Backyard"],
    "host": {
        "_id": "h0010",
        "fullname": "Wayan",
        "imgUrl": "https://source.unsplash.com/random/100x100/?man-face"
    },
    "location": {
        "country": "Indonesia",
        "countryCode": "IDN",
        "address": "Abiansemal, Bali, Indonesia",
        "lat": -8.573603, 
        "lng": 115.214408
    },
    "reviews": [{
        "id": "r0010",
        "txt": "Absolutely amazing. Much better than the photos. I am so so glad I was able to stay here. The entire village is so beautiful and relaxing and the Aura House is simply stunning. The house is incredible, clean, and has so many beautiful touches and the staff is super helpful. My favorite stay in Bali. I highly highly recommend.",
        "rate": 5,
        "by": {
            "_id": "u0010",
            "fullname": "Jessica",
            "imgUrl": "https://source.unsplash.com/random/100x100/?woman-face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "true"

},
{
    "_id": "s0011",
    "name": "Bali Bamboo House | Rescape Ubud - Resound Villa",
    "type": "Villa",
    "imgUrls": [
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642829391/Airbnb%20clone/a8277635-638c-4a8f-a472-a1ce6a6dd301_qmzvhd.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642829391/Airbnb%20clone/bd681dc6-6e25-4406-bc99-e1ed554b9cfe_rl5foi.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642829390/Airbnb%20clone/0e752aaf-b10c-4f65-a881-29481005f58a_bfk5v9.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642829390/Airbnb%20clone/8e9245ab-d219-43be-88e6-7f1f608df929_tqknrp.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642829391/Airbnb%20clone/0f92e33e-0923-473f-ba24-87c5037e4d27_tk1mvd.jpg"
    ],
    "price": 59,
    "summery": "Rescape (retreat/ escape) Ubud is an uniquely designed villa built by bamboo, allowing guests to unwind and escape from all the daily hassle. This stay is perfect for couples, young families, artists, musicians and everyone who loves to fully embrace the nature. The place feels secluded and yet only 5 minutes away by bike from central Ubud!",
    "capacity": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642829391/Airbnb%20clone/772ba654-23ad-494d-b736-fc14539da2bb_bfg2aw.jpg"],
    "amenities": ["Wifi", "Pool" , "Bathing", "Parking", "Washer"],
    "host": {
        "_id": "h0011",
        "fullname": "Candra",
        "imgUrl": "https://source.unsplash.com/random/100x100/?man-face"
    },
    "location": {
        "country": "Indonesia",
        "countryCode": "IDN",
        "address": "Ubud, Bali, Indonesia",
        "lat": -8.518078, 
        "lng": 115.274158
    },
    "reviews": [{
        "id": "r0011",
        "txt": "Stunning place with magic atmosphere. Definitely a place you`d come back to!",
        "rate": 5,
        "by": {
            "_id": "u0011",
            "fullname": "Maria",
            "imgUrl": "https://source.unsplash.com/random/100x100/?woman-face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "true"

},
{
    "_id": "s0012",
    "name": "Magical Vintage Treehouse",
    "type": "Treehouse",
    "imgUrls": [
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642829876/Airbnb%20clone/b678240d-5704-4ae9-9de3-16dac435f5c0_dlyooi.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642829875/Airbnb%20clone/1503df80-49ce-42d0-97a7-c19b0686f55e_ogc4xv.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642829876/Airbnb%20clone/bc0107f5-29b6-4ac8-90ac-e7f062af2e48_eonwpd.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642829875/Airbnb%20clone/a115c022-f888-4bd6-bedc-7039133d625a_xorvun.jpg",
        "https://res.cloudinary.com/kitsunex3/image/upload/v1642829875/Airbnb%20clone/b92fc6ed-6a70-4403-88a1-6d0cfa66a1b8_yrwe5g.jpg"
    ],
    "price": 52,
    "summery": "Perfect Bali holiday experience starts here. A magical mango treehouse in an eco-vintage village just a 5 minute drive to the beach. Living structures built from shipwreck timber and with jungle mango trees growing through walls. Have yourself a unique stay experience in a fairytale forest with modern comfort and amenities.",
    "capacity": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642829875/Airbnb%20clone/b7f614e9-77e4-412e-b37c-b741c2bb6dfb_ew6c5n.jpg"],
    "amenities": ["Wifi", "Pool" , "Balcony", "Parking", "Air conditioning", "Backyard"],
    "host": {
        "_id": "h0012",
        "fullname": "Bukit Vista",
        "imgUrl": "https://source.unsplash.com/random/100x100/?man-face"
    },
    "location": {
        "country": "Indonesia",
        "countryCode": "IDN",
        "address": "South Kuta, Bali, Indonesia",
        "lat": -8.799448, 
        "lng": 115.135857
    },
    "reviews": [{
        "id": "r0012",
        "txt": "Amazing Airbnb. Super charming, beautiful pool, and very kind staff.",
        "rate": 5,
        "by": {
            "_id": "u0012",
            "fullname": "Annelise",
            "imgUrl": "https://source.unsplash.com/random/100x100/?woman-face"
        }
    }],
    "likedByUsers" : ["mini-user"],
    "isPopular": "true"

}
]

_createStays()

function  _createStays(){
     storageService.query(STORAGE_KEY)
     .then((stays)=>{
           if(!stays || !stays.length) {
            storageService.save(STORAGE_KEY,gStays)
           }

           return stays 
     })    

}

 async function query(filterBy) {
    console.log('filterby in service',filterBy)
   const stays= await storageService.query(STORAGE_KEY)

   const filteredStays = _getFilteredStays(stays, filterBy)
   console.log('filteredStays in service',filteredStays)

   return filteredStays
}


function _getFilteredStays(stays, filterBy) {
    console.log(filterBy)
    if (filterBy.location) {
        let { location} = filterBy
    // console.log('location in filtereed stays',location)
        const locations = stays.filter((stay) => {
            return stay.location.country.toLowerCase() === location.toLowerCase()
        })
        // console.log('locations in service',location)
        return locations
    }else{
        return stays
    }
}




function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}
function remove(stayId) {
    // return Promise.reject('Not now!');
    return storageService.remove(STORAGE_KEY, stayId)
}
function save(stay) {
    if (stay._id) {
        return storageService.put(STORAGE_KEY, stay)
    } else {
        // stay.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, stay)
    }
}