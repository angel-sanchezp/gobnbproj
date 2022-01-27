
import { storageService } from './async-storage.service.js'
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { isEmpty } from 'lodash';

const moment = extendMoment(Moment);


const STORAGE_KEY = 'STAYDB'

export const stayService = {
    query,
    getById,
    save,
    remove
    
}



const gStays = [
    {
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
        "amenities": ["Kitchen", "Parking" , "Washing machine", "Air conditioning", "Wifi", "Elevator", "Dryer", "Indoor fireplace", "Stove"],
        "host": {
            "_id": "h0001",
            "fullname": "Matsuda",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/13_fsg2vd.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Japan",
            "city":"Tokyo",
            "countryCode": "JPN",
            "address": "Reversible Destiny Lofts",
            "lat": 35.680984,
            "lng": 139.538030
        },
        "reviews": [
            
        ],
        "likedByUsers": ["mini-user"],
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
        "amenities": ["Kitchen", "TV" , "Dryer", "Backyard", "Wifi", "Washing machine", "Air conditioning", "Indoor fireplace"],
        "host": {
            "_id": "h0002",
            "fullname": "Kako & Keiko",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/111_aqpodi.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Japan",
            "city":"Tokyo",
            "countryCode": "JPN",
            "address": "Shibuya, Tokyo",
            "lat": 35.671625,
            "lng": 139.683750
        },
        "reviews": [{
            "id": "r0002",
            "created": Date.now(),
            "txt": "Great room in a perfect location! Keiko was the perfect host giving us wonderful tips and insider info.",
            "rate": 4,
            "by": {
                "_id": "u0002",
                "fullname": "Lisa",
                "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/18_na5npr.jpg"
            }
        }],
        "likedByUsers": ["mini-user"],
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
        "amenities": ["Kitchen", "Washing machine", "Air conditioning", "Refrigerator", "Wifi", "Dryer"],
        "host": {
            "_id": "h0003",
            "fullname": "Otera",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/15_liaeqo.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Japan",
            "city":"Tokyo",
            "countryCode": "JPN",
            "address": "TEMPLE HOTEL SHODENJI",
            "lat": 35.650278,
            "lng": 139.754737
        },
        "reviews": [{
            "id": "r0003",
            "created": Date.now(),
            "txt": "I wish Airbnb had ten stars for reviews.. this place was quite special for japan. The space was larger than expected. Very clean and everything one needs for the perfect stay. The staff were quick to respond and I simply had the best stay in years in Tokyo here!",
            "rate": 5,
            "by": {
                "_id": "u0003",
                "fullname": "Osunlade",
                "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/9_lixwnx.jpg"
            }
        }],
        "likedByUsers": ["mini-user"],
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
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642652059/Airbnb%20clone/1ff8fe45-19d2-41cc-8053-f6156a113f4c_dvxobz.jpg"],
        "amenities": ["Wifi", "TV" , "Washing machine", "Balcony", "Kitchen", "Parking", "Elevator", "Dryer", "Indoor fireplace"],
        "host": {
            "_id": "h0004",
            "fullname": "Chris",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/11_qcqtgm.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "France",
            "city":"Paris",
            "countryCode": "FR",
            "address": "Paris, Île-de-France, France",
            "lat": 48.882233,
            "lng": 2.343122
        },
        "reviews": [{
            "id": "r0004",
            "created": Date.now(),
            "txt": "This is a one of a kind rental. An experience not to be missed.",
            "rate": 5,
            "by": {
                "_id": "u0004",
                "fullname": "George",
                "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922845/Airbnb%20clone/Users/6_heq4dq.jpg"
            }
        }],
        "likedByUsers": ["mini-user"],
        "isPopular": "true"

    },
    {
        "_id": "s0005",
        "name": "Magnificent view on Eiffel Tower",
        "type": "Apartment",
        "imgUrls": [
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642842882/Airbnb%20clone/c949b056_original_yajdmi.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642842883/Airbnb%20clone/73f3f0a1_original_dorzfp.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642842882/Airbnb%20clone/429819be_original_nzan2y.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642842883/Airbnb%20clone/abed101f_original_v9l0my.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642842881/Airbnb%20clone/79d1e16f_original_ryzczz.jpg"
        ],
        "price": 160,
        "summery": "Outstanding two floors apartment of 120 sqm with terraces overlooking the Seine and facing south. Art déco style. Modern furnitures.",
        "capacity": 4,
        "bedrooms": 2,
        "beds": 2,
        "bathrooms": 2,
        "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642842881/Airbnb%20clone/ab5a02f8_original_vr3bly.jpg"],
        "amenities": ["Kitchen", "TV" , "Washing machine", "Bath", "Wifi", "Elevator", "Dryer", "Balcony"],
        "host": {
            "_id": "h0005",
            "fullname": "Helene",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/10_wd9gc9.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "France",
            "city":"Paris",
            "countryCode": "FR",
            "address": "Paris, Île-de-France, France",
            "lat": 48.856486,
            "lng": 2.286383
        },
        "reviews": [{
            "id": "r0005",
            "created": Date.now(),
            "txt": "Just brilliant. You can almost touch the Eiffel Tower! Absolutely the highest standard. Can't fault it.",
            "rate": 4,
            "by": {
                "_id": "u0005",
                "fullname": "Neil",
                "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922845/Airbnb%20clone/Users/5_fhrk7h.jpg"
            }
        }],
        "likedByUsers": ["mini-user"],
        "isPopular": "false"

    },
    {
        "_id": "s0006",
        "name": "Loft on Canal St-Martin/15' walk to Le Marais/4bdr",
        "type": "Loft",
        "imgUrls": [
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642843330/Airbnb%20clone/174db9b0-52f1-4611-a49e-50c160b80534_ptqzh7.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642843331/Airbnb%20clone/a59fa4ad-61b9-4f2c-8a25-9cb00de48ea9_g2hbwu.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642843330/Airbnb%20clone/2c51d2e6-27da-4fe2-a8a5-c1c314d35c9c_pwye4d.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642843331/Airbnb%20clone/d8a726e9-5075-42cd-929a-d73181ddbedf_gbvhr6.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642843330/Airbnb%20clone/218c324c-4d5a-4755-a875-151ce1a618e3_t6c4bb.jpg"
        ],
        "price": 708,
        "summery": "Ancient industrial building, converted into a charming loft, perfect for trips with family, friends or colleagues. Located on the Canal Saint-Martin, one of the most lively and trendy area of Paris center(design shops, bars, restaurants...), only 15min walk from Le Marais area, and with train and metro's stations offering direct access to all main sight seing of Paris. Still, the loft is extraordinarily safe and quiet as located inside a private condo's courtyard (hidden from the street).",
        "capacity": 11,
        "bedrooms": 4,
        "beds": 9,
        "bathrooms": 2.5,
        "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642843330/Airbnb%20clone/0fccce7e-a98c-46b0-9eaf-fb69887f98fc_sw7mud.jpg"],
        "amenities": ["Wifi", "Washing machine" , "Kitchen", "TV", "Dryer", "Bath"],
        "host": {
            "_id": "h0006",
            "fullname": "Sagire",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/111_aqpodi.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "France",
            "city":"Paris",
            "countryCode": "FR",
            "address": "Paris, Île-de-France, France",
            "lat": 48.874011,
            "lng": 2.363604
        },
        "reviews": [{
            "id": "r0006",
            "created": Date.now(),
            "txt": "Great house for a group, really stylish. Sweet record player. Highly recommended for a group.",
            "rate": 4,
            "by": {
                "_id": "u0006",
                "fullname": "Rong",
                "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/photo-1584518969469-c2d99c7760a0_pmbzm4.jpg"
            }
        }],
        "likedByUsers": ["mini-user"],
        "isPopular": "false"

    },
    {
        "_id": "s0007",
        "name": "Come & Dream in Quetzalcoatl`s Nest",
        "type": "Condo",
        "imgUrls": [
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642840810/Airbnb%20clone/3bd5a6f7-4dca-431f-b732-a40a3e3a9a32_kjb56q.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642840811/Airbnb%20clone/b28b6174-8d5b-4da3-8394-6b69827a1678_qiygt0.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642840810/Airbnb%20clone/389f9f94-1ab5-49b1-ba65-b43c393a3d3a_rfsj0f.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642840810/Airbnb%20clone/36c19df5-9825-470f-8b7c-2050501fa5fb_daqp73.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642840810/Airbnb%20clone/493cccd8-ebac-4f1d-af60-2043b5a8c863_soog3z.jpg"
        ],
        "price": 349,
        "summery": "InforStay in an awesome place. Famous by it´s organic architecture. Sleep inside Quetzalcoatl and enjoy it´s marvelous gardens and creative spaces. Fully equipped. 4 bedroom, plus 1 additional. 10 persons. Laundry room. Bread, fruit & coffee included.mation",
        "capacity": 6,
        "bedrooms": 4,
        "beds": 5,
        "bathrooms": 3.5,
        "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642840810/Airbnb%20clone/371b3955-c358-4b49-bb9c-1fb9dd108988_rodfy4.jpg"],
        "amenities": ["Kitchen", "Parking" , "Washing machine", "Backyard", "Wifi", "TV", "Dryer"],
        "host": {
            "_id": "h0007",
            "fullname": "Patricia",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/17_vskqnp.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Mexico",
            "city":"Mexico city",
            "countryCode": "MX",
            "address": "Naucalpan de Juárez, Estado de México, Mexico",
            "lat": 19.478524,
            "lng": -99.279029
        },
        "reviews": [{
            "id": "r0007",
            "created": Date.now(),
            "txt": "This home is even more beautiful in person - it was an absolute dream to stay here. Loved the guided tour and meditation. Patricia was such a lovely host. Hope to stay again in the future!",
            "rate": 5,
            "by": {
                "_id": "u0007",
                "fullname": "Alexis",
                "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/19_wml5wy.jpg"
            }
        }],
        "likedByUsers": ["mini-user"],
        "isPopular": "true"

    },
    {
        "_id": "s0008",
        "name": "The Seashell House",
        "type": "House",
        "imgUrls": [
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642841396/Airbnb%20clone/b4bc6418_original_mkxjmm.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642841540/Airbnb%20clone/64728570-5673-4d6f-9a45-a332db33069e_ahl5bc.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642841398/Airbnb%20clone/e55fbcd6-15c1-41a1-a56e-7c7c291afa63_nf0xfp.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642841396/Airbnb%20clone/85987a21-8cc6-4c96-bc66-dad2e629172f_mo7nc4.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642841396/Airbnb%20clone/7870c2ef-10ae-4fba-9e65-6c088ae2b749_ppab1c.jpg"
        ],
        "price": 299,
        "summery": "Information",
        "capacity": 4,
        "bedrooms": 2,
        "beds": 2,
        "bathrooms": 2.5,
        "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642841396/Airbnb%20clone/61ebbbab-3562-4d35-b73d-1e9bd2ce3c69_u62kut.jpg"],
        "amenities": ["Wifi", "Beach access", "Pool", "Air conditioning", "Kitchen", "Parking", "TV", "Balcony"],
        "host": {
            "_id": "h0008",
            "fullname": "Michelle",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/14_mhhnpa.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Mexico",
            "city":"Cancun",
            "countryCode": "MX",
            "address": "Isla Mujeres, Mexico",
            "lat": 21.210964,
            "lng": -86.718987
        },
        "reviews": [
            {
                "id": "r0008",
                "created": Date.now(),
                "txt": "Casa Caracol is stunning inside and out and Vanessa is wonderful - quick to respond with helpful tips and suggestions. The location is nice and quiet so you can get some great rest and relaxation by the pool. The air conditioning provides a nice retreat from the gorgeous afternoon sun, and the stars are gorgeous to gaze upon at night. 10/10 definitely would book again and recommend to all travelers.",
                "rate": 5,
                "by": {
                    "_id": "u0008",
                    "fullname": "Kristen",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/16_pcsh7n.jpg"
                }
            },
            {
                "id": "r00081",
                "created": Date.now(),
                "txt": "Such a great place! Thanks so much Michelle.",
                "rate": 5,
                "by": {
                    "_id": "u00081",
                    "fullname": "Laura",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/8_fst0mq.jpg"
                }
            }
        ],
        "likedByUsers": ["mini-user"],
        "isPopular": "false"

    },
    {
        "_id": "s0009",
        "name": "The Quarry, Beachfront sub penthouse 150m to clubs",
        "type": "Condo",
        "imgUrls": [
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642842179/Airbnb%20clone/f34fd198-05d2-4f33-b716-807f9a4615b6_b2lzkr.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642842177/Airbnb%20clone/471d112d-d0e6-4220-bba6-9c40090be815_aup7sf.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642842178/Airbnb%20clone/5e829b85-6fd7-43cf-abf1-3803dcacdc0c_ausisc.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642842178/Airbnb%20clone/779622bf-6472-4e6c-9a86-0536ea525d09_kz6cs0.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642842221/Airbnb%20clone/a960c349-50ab-452b-89d8-669b021276ed_rvzq8t.jpg"
        ],
        "price": 403,
        "summery": "From the moment you enter the property you will realize why you came to Cancun; the powder soft white sand beach, and the most beautiful turquoise water. Because, that is all you can see from the 180° panoramic views the apartment offers.",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "bathrooms": 1,
        "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642842177/Airbnb%20clone/a3ee018f-6db3-4bac-a75a-eaa15fa699f9_lj3u6a.jpg"],
        "amenities": ["Beach access", "Wifi" , "Pool", "TV", "Washing machine", "Kitchen", "Parking", "Elevator", "Dryer"],
        "host": {
            "_id": "h0009",
            "fullname": "Bathany",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922845/Airbnb%20clone/Users/4_tkbgjo.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Mexico",
            "city":"Cancun",
            "countryCode": "MX",
            "address": "Cancún, Quintana Roo, Mexico",
            "lat": 21.131314,
            "lng": -86.748434
        },
        "reviews": [{
            "id": "r0009",
            "created": Date.now(),
            "txt": "Wow!! Worth every penny to live like a King and Queen for a few days. Bethany, Alex and team went above and beyond to ensure we had everything we needed and asked for. Highly recommend and will definitely be back!!",
            "rate": 5,
            "by": {
                "_id": "u0009",
                "fullname": "Duke",
                "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922845/Airbnb%20clone/Users/5_fhrk7h.jpg"
            }
        }],
        "likedByUsers": ["mini-user"],
        "isPopular": "false"

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
        "amenities": ["Kitchen", "Parking", "Air conditioning", "Wifi", "Pool", "Backyard"],
        "host": {
            "_id": "h0010",
            "fullname": "Wayan",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922845/Airbnb%20clone/Users/6_heq4dq.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Indonesia",
            "countryCode": "IDN",
            "city": "Bali",
            "address": "Abiansemal, Bali, Indonesia",
            "lat": -8.573603,
            "lng": 115.214408
        },
        "reviews": [{
            "id": "r0010",
            "created": Date.now(),
            "txt": "Absolutely amazing. Much better than the photos. I am so so glad I was able to stay here. The entire village is so beautiful and relaxing and the Aura House is simply stunning. The house is incredible, clean, and has so many beautiful touches and the staff is super helpful. My favorite stay in Bali. I highly highly recommend.",
            "rate": 5,
            "by": {
                "_id": "u0010",
                "fullname": "Jessica",
                "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922845/Airbnb%20clone/Users/2_jk3woi.jpg"
            }
        }],
        "likedByUsers": ["mini-user"],
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
        "amenities": ["Wifi", "Pool" , "Bath", "Parking", "Washing machine"],
        "host": {
            "_id": "h0011",
            "fullname": "Candra",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923272/Airbnb%20clone/Users/photo-1527203561188-dae1bc1a417f_iurwgp.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Indonesia",
            "countryCode": "IDN",
            "city": "Bali",
            "address": "Ubud, Bali, Indonesia",
            "lat": -8.518078,
            "lng": 115.274158
        },
        "reviews": [{
            "id": "r0011",
            "created": Date.now(),
            "txt": "Stunning place with magic atmosphere. Definitely a place you`d come back to!",
            "rate": 5,
            "by": {
                "_id": "u0011",
                "fullname": "Maria",
                "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923273/Airbnb%20clone/Users/photo-1541715301255-12a4839b424a_cai1tf.jpg"
            }
        }],
        "likedByUsers": ["mini-user"],
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
        "amenities": ["Wifi", "Pool", "Balcony", "Parking", "Air conditioning", "Backyard"],
        "host": {
            "_id": "h0012",
            "fullname": "Bukit Vista",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923272/Airbnb%20clone/Users/photo-1541577141970-eebc83ebe30e_ep4ix8.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Indonesia",
            "countryCode": "IDN",
            "city": "Bali",
            "address": "South Kuta, Bali, Indonesia",
            "lat": -8.799448,
            "lng": 115.135857
        },
        "reviews": [
            {
                "id": "r0012",
                "created": Date.now(),
                "txt": "Amazing Airbnb. Super charming, beautiful pool, and very kind staff.",
                "rate": 5,
                "by": {
                    "_id": "u0012",
                    "fullname": "Annelise",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923272/Airbnb%20clone/Users/photo-1503185912284-5271ff81b9a8_c3lm4q.jpg"
                }
            },
            {
                "id": "r00121",
                "created": Date.now(),
                "txt": "We stayed in the treehouse and it was amazing! So cute and unique our only regret is not being able to spend some more time there!! We had lunch at the restaurant and hung out by the trendy and cute pool. The staff served us drinks by the pool too which was awesome! They even offer a shuttle to the beach where we hung out late watching the servers and listening to live music! Would definitely come back again!",
                "rate": 4.5,
                "by": {
                    "_id": "u00121",
                    "fullname": "Nicole",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923272/Airbnb%20clone/Users/photo-1510364966834-1c2f9fd921d7_egm7qx.jpg"
                }
            },
            {
                "id": "r00122",
                "created": Date.now(),
                "txt": "The treehouse was perfect—truly felt magical to be staying in a treehouse and have such a nice pool and restaurant right downstairs. Made for a very relaxing final 2 days of our trip in Bali.",
                "rate": 4.5,
                "by": {
                    "_id": "u00122",
                    "fullname": "Matthew",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923272/Airbnb%20clone/Users/photo-1514846117827-513efb7aa48a_hmstan.jpg"
                }
            }
        ],
        "likedByUsers": ["mini-user"],
        "isPopular": "true"
    },
    {
        "_id": "s0013",
        "name": "New! Majestic 4 BR Pool Villa with ricefields view",
        "type": "Villa",
        "imgUrls": [
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642833309/Airbnb%20clone/a4eeecf4-2f99-4c70-8fc6-1de731c5a49d_iq3e5l.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642833310/Airbnb%20clone/57b3363b-f638-45c2-b7cf-db6575ba89bc_qtoh2r.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642833310/Airbnb%20clone/dc674812-d0b4-46be-ae98-87ee7be8b00a_m9gewy.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642833310/Airbnb%20clone/847c4231-4b43-49d0-9072-fd6ab5ecce8a_fywd94.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642833310/Airbnb%20clone/4fd4722a-7622-4df1-b660-8ddb5ed66667_rhsz4i.jpg"
        ],
        "price": 146,
        "summery": "Step foot in this magical place and forget about all your worries! This amazing 4 bedroom villa is surrounded by nature, yet just a stone throw away from the famous Ubud centre.",
        "capacity": 10,
        "bedrooms": 4,
        "beds": 4,
        "bathrooms": 4,
        "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642833310/Airbnb%20clone/f4a0e043-b03a-4444-8d71-2f4a66b85c82_ppa8pq.jpg"],
        "amenities": ["Kitchen", "Parking", "TV", "Balcony", "Wifi", "Pool", "Air conditioning", "Backyard"],
        "host": {
            "_id": "h0013",
            "fullname": "Alfred",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923272/Airbnb%20clone/Users/photo-1441786485319-5e0f0c092803_loykyj.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Indonesia",
            "countryCode": "IDN",
            "city": "Bali",
            "address": "Kecamatan Ubud, Bali, Indonesia",
            "lat": -8.529778,
            "lng": 115.268513
        },
        "reviews": [
            {
                "id": "r0013",
                "created": Date.now(),
                "txt": "Amazing place good vibe!",
                "rate": 5,
                "by": {
                    "_id": "u0013",
                    "fullname": "Josh",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923272/Airbnb%20clone/Users/photo-1497044383938-c0486a41b655_mzi36k.jpg"
                }
            },
            {
                "id": "r00131",
                "created": Date.now(),
                "txt": "Fabulous place. Felt like royalty. Layout of villa is amazing",
                "rate": 4.5,
                "by": {
                    "_id": "u00131",
                    "fullname": "Sophia",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/19_wml5wy.jpg"
                }
            },
            {
                "id": "r00132",
                "created": Date.now(),
                "txt": "Nice stay! But the access to get to the villa is hard and the road is small. But overall it’s good, nice room and pool",
                "rate": 3.5,
                "by": {
                    "_id": "u00132",
                    "fullname": "Francisco",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923273/Airbnb%20clone/Users/photo-1595838788874-a9dbc04f3d7b_sfkbaf.jpg"
                }
            }
        ],
        "likedByUsers": ["mini-user"],
        "isPopular": "false"
    },
    {
        "_id": "s0014",
        "name": "Veluvana Bali - Owl Bamboo House",
        "type": "Treehouse",
        "imgUrls": [
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642834305/Airbnb%20clone/4f70b681-a792-4530-8c52-f2a8d262942d_yv0nhz.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642834305/Airbnb%20clone/8ddb35f5-ae3b-4cf4-869b-bb484e82675a_r9ezwf.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642834305/Airbnb%20clone/24825c95-303b-47c3-9649-2fb74fc86acb_ngsdhv.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642834305/Airbnb%20clone/ec85ccc0-281c-44fc-a061-bc1e87ea0081_wvlkf3.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642834304/Airbnb%20clone/f474dfbe-557a-4d07-8d6e-76aba506b5a6_fmnuvv.jpg"
        ],
        "price": 130,
        "summery": "Veluvana is a unique bamboo house with a wonderful view of Sidemen Valley, a genuine tropical landscape with Mount Agung peak on its back. This getaway spot is a great place to bring into reality the dream adventure of the true wanderer. We invite you to feel the magnificent vibes of the entire house to escape the life that is full of drama into a journey with ultimate joy.",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "bathrooms": 1.5,
        "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642834305/Airbnb%20clone/45a3aa2b-ce00-4068-9ebe-9f83ca281fe4_cwdwza.jpg"],
        "amenities": ["Kitchen", "Parking", "Balcony", "Wifi", "Pool", "Dryer"],
        "host": {
            "_id": "h0014",
            "fullname": "Veluvana",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923273/Airbnb%20clone/Users/photo-1568044852337-9bcc3378fc3c_gof8to.jpg"
        },
        "inavialabilites": [{
            "dateIn": 1643320800000, // Sat Jan 28 2022 00:00:00 GMT+0200
            "dateOut": 1643493600000, // Sat Jan 30 2022 00:00:00 GMT+0200
        }],
        "location": {
            "country": "Indonesia",
            "countryCode": "IDN",
            "city": "Bali",
            "address": "Sidemen, Bali, Indonesia",
            "lat": -8.473195,
            "lng": 115.441776
        },
        "reviews": [
            {
                "id": "r0014",
                "created": Date.now(),
                "txt": "Wonderful place with an amazing view. Comfortable, romantic, and beautiful. Great staff as well. Thanks for the amazing stay!",
                "rate": 5,
                "by": {
                    "_id": "u0014",
                    "fullname": "Ryan",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923272/Airbnb%20clone/Users/photo-1530268729831-4b0b9e170218_qymhk9.jpg"
                }
            },
            {
                "id": "r00141",
                "created": Date.now(),
                "txt": "I enjoyed everything about this Bamboo House! Perfect 1-2 night stay connecting with nature.",
                "rate": 4.5,
                "by": {
                    "_id": "u00141",
                    "fullname": "Katya",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923272/Airbnb%20clone/Users/photo-1503185912284-5271ff81b9a8_c3lm4q.jpg"
                }
            },
            {
                "id": "r00142",
                "created": Date.now(),
                "txt": "Increase place to stay! Be aware of 2 dogs sleeping downstairs in both sofas and fighting with each other really bothered us during our stay",
                "rate": 3.5,
                "by": {
                    "_id": "u00142",
                    "fullname": "Galina",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642923272/Airbnb%20clone/Users/photo-1510364966834-1c2f9fd921d7_egm7qx.jpg"
                }
            }
        ],
        "likedByUsers": ["mini-user"],
        "isPopular": "false"
    },
    {
        "_id": "s0015",
        "name": "Sleeping under the stars in a dome!",
        "type": "House",
        "imgUrls": [
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642936160/Airbnb%20clone/262dfbe5-385a-465f-9ef2-903cd986b51f_vghoa1.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642936161/Airbnb%20clone/62243417-6dfa-4eb8-ab94-97fed1f91267_hx0oes.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642936160/Airbnb%20clone/91e9fd99-c85e-4375-b623-cc49b54054d4_ga5oxo.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642936160/Airbnb%20clone/e724ee18-852e-4cca-8fb6-c7e97c19416d_t5ek7q.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1642936160/Airbnb%20clone/dc3551fd-e1dd-4c2e-a033-f10acf18b686_xympzz.jpg"
        ],
        "price": 268,
        "summery": "We would love you to come and stay in one of our Frameless geodesic domes set in the heart of the Cornish countryside! This unique stay is like no other glamping experience. Each dome has its own ensuite and outdoor bath situated with 5 other domes in a 3.5 acre summer wildflower meadow.",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "bathrooms": 1,
        "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1642936159/Airbnb%20clone/49a855d5-0793-481e-a118-2da7efceb7d5_r3hvea.jpg"],
        "amenities": ["Backyard", "Parking", "Beach access", "Wifi", "Bath"],
        "host": {
            "_id": "h0015",
            "fullname": "Veluvana",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/18_na5npr.jpg"
        },
        "location": {
            "country": "England",
            "countryCode": "UK",
            "city": "Underlane",
            "address": "Underlane, England, United Kingdom",
            "lat": 50.159203,
            "lng": -5.193978
        },
        "reviews": [
            {
                "id": "r0015",
                "created": Date.now(),
                "txt": "Wonderful place with an amazing view. Comfortable, romantic, and beautiful. Great staff as well. Thanks for the amazing stay!",
                "rate": 5,
                "by": {
                    "_id": "u0015",
                    "fullname": "Ryan",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/15_liaeqo.jpg"
                }
            },
            {
                "id": "r00151",
                "created": Date.now(),
                "txt": "I enjoyed everything about this Bamboo House! Perfect 1-2 night stay connecting with nature.",
                "rate": 4.5,
                "by": {
                    "_id": "u00151",
                    "fullname": "Katya",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/12_zmmmfq.jpg"
                }
            },
            {
                "id": "r00152",
                "created": Date.now(),
                "txt": "Will stay again",
                "rate": 3.5,
                "by": {
                    "_id": "u00152",
                    "fullname": "Galina",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/10_wd9gc9.jpg"
                }
            },
            {
                "id": "r00153",
                "created": Date.now(),
                "txt": "In the middle of nowhere",
                "rate": 3.5,
                "by": {
                    "_id": "u00153",
                    "fullname": "Michelle",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922845/Airbnb%20clone/Users/4_tkbgjo.jpg"
                }
            },
            {
                "id": "r00154",
                "created": 1616502526000,
                "txt": "Too pricey!",
                "rate": 3.5,
                "by": {
                    "_id": "u00154",
                    "fullname": "Josh",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/13_fsg2vd.jpg"
                }
            }
        ],
        "likedByUsers": ["mini-user"],
        "isPopular": "false"
    },
    {
        "_id": "s0016",
        "name": "Yposkafo Jacuzzi House",
        "type": "House",
        "imgUrls": [
            "https://res.cloudinary.com/kitsunex3/image/upload/v1643263699/Airbnb%20clone/dc5ffc77-c7b5-4b37-8806-20b77cbc42e1_glbuc0.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1643263700/Airbnb%20clone/7e665deb-dd01-4503-b37a-4a524c47239a_nvj905.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1643263699/Airbnb%20clone/872ecba3-cda6-489a-aa20-beb9cbf0d048_pmylwm.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1643263699/Airbnb%20clone/9ac0452f-ecb5-48e0-948c-04f52e693527_rwhjik.jpg",
            "https://res.cloudinary.com/kitsunex3/image/upload/v1643263699/Airbnb%20clone/8a249e43-5e01-4910-bb99-9d62bba1696d_hzhm2o.jpg"
        ],
        "price": 203,
        "summery": "Tucked in the Caldera cliffs of Santorini, Yposkafo is situated in the village of Oia. Renovated in 2016, with a unique indoor - outdoor Jacuzzi, endless horizon and view of the Aegean Sea, this is the ideal choice for couples.",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 3,
        "bathrooms": 1,
        "sleep": ["https://res.cloudinary.com/kitsunex3/image/upload/v1643263699/Airbnb%20clone/e4df20ff-4e30-4a8e-8eed-b1724458baac_n2ocga.jpg"],
        "amenities": ["Kitchen", "Parking", "TV", "Balcony", "Wifi", "Bath", "Air conditioning","Refrigerator", "Stove"],
        "host": {
            "_id": "h0015",
            "fullname": "Veluvana",
            "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/18_na5npr.jpg"
        },
        "location": {
            "country": "Greece",
            "countryCode": "GR",
            "city": "Santorini",
            "address": "Oia, Egeo Freece",
            "lat": 36.461571,
            "lng": 25.377907
        },
        "reviews": [
            {
                "id": "r0015",
                "created": Date.now(),
                "txt": "Wonderful place with an amazing view. Comfortable, romantic, and beautiful. Great staff as well. Thanks for the amazing stay!",
                "rate": 5,
                "by": {
                    "_id": "u0015",
                    "fullname": "Ryan",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/15_liaeqo.jpg"
                }
            },
            {
                "id": "r00151",
                "created": Date.now(),
                "txt": "I enjoyed everything about this Bamboo House! Perfect 1-2 night stay connecting with nature.",
                "rate": 4.5,
                "by": {
                    "_id": "u00151",
                    "fullname": "Katya",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/12_zmmmfq.jpg"
                }
            },
            {
                "id": "r00152",
                "created": Date.now(),
                "txt": "Will stay again",
                "rate": 3.5,
                "by": {
                    "_id": "u00152",
                    "fullname": "Galina",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/10_wd9gc9.jpg"
                }
            },
            {
                "id": "r00153",
                "created": Date.now(),
                "txt": "In the middle of nowhere",
                "rate": 3.5,
                "by": {
                    "_id": "u00153",
                    "fullname": "Michelle",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922845/Airbnb%20clone/Users/4_tkbgjo.jpg"
                }
            },
            {
                "id": "r00154",
                "created": 1616502526000,
                "txt": "Too pricey!",
                "rate": 3.5,
                "by": {
                    "_id": "u00154",
                    "fullname": "Josh",
                    "imgUrl": "https://res.cloudinary.com/kitsunex3/image/upload/v1642922846/Airbnb%20clone/Users/13_fsg2vd.jpg"
                }
            }
        ],
        "likedByUsers": ["mini-user"],
        "isPopular": "false"
    }
]

_createStays()

function _createStays() {
    storageService.query(STORAGE_KEY)
        .then((stays) => {
            if (!stays || !stays.length) {
                storageService.save(STORAGE_KEY, gStays)
            }

            return stays
        })

}

async function query(filterBy) {
    // console.log('filterby in service', filterBy)
    const stays = await storageService.query(STORAGE_KEY)

    if(filterBy.sortBy){
        const sorted= _sortBy(filterBy.sortBy,stays)
        // console.log('sorted',sorted)
        return sorted
    }

    const filteredStays = _getFilteredStays(stays, filterBy)
    // console.log('filteredStays in service', filteredStays)

    return filteredStays
}

// const copyLink = (stayId) => {
//     const link = `http://localhost:3000/details/${stayId}`;
//     return navigator.clipboard.writeText(link);
// }


function _getFilteredStays(stays, filterBy) {
    // console.log(filterBy)
    if (filterBy.location) {
        let { location } = filterBy
        // console.log('location in filtereed stays',location)
        const locations = stays.filter((stay) => {
            return stay.location.country.toLowerCase() === location.toLowerCase()
        })
        // console.log('locations in service',location)
        return locations
    } else if (filterBy.dateIn && filterBy.dateOut) {
        let { dateIn } = filterBy
        let { dateOut } = filterBy

        const availables = stays.filter((stay) => {
            if (isEmpty(stay.inavialabilites)) {
                return true
            }
            const searchedDate = moment.range(dateIn, dateOut);

            const isNotAvailable = stay.inavialabilites.some((constraint) => {
                const inavailableDate = moment.range(new Date(constraint.dateIn), new Date(constraint.dateOut));
                return searchedDate.overlaps(inavailableDate, { adjacent: true })
            })

            return !isNotAvailable
        });
        // console.log(availables)
        return availables
    } else if (filterBy.adults && filterBy.children) {
        let { adults } = filterBy
        let { children } = filterBy
        let capacity = adults + children
        const capacities = stays.filter((stay) => {
            // console.log(stay.capacity)
            return stay.capacity === +capacity
        })
        return capacities


    } else if (filterBy.amenities) {
        const allAmenities = stays.filter((stay) => {
            return filterBy.amenities.every(amenity => {
                // console.log('amenities', amenity)
                return stay.amenities.some(a => {
                    // console.log('a', a)
                    return a.toLowerCase() === amenity.toLowerCase()
                })
            })

        })
        return allAmenities
        // return labels.every(label => {
        //         return toyLabels.includes(label)
        //     })

    } else  if(filterBy.city){
        let { city } = filterBy
        // console.log('location in filtereed stays',city)
        const cities = stays.filter((stay) => {
            return stay.location.city === city
        })
        // console.log('locations in service',location)
        return cities
    }else{
        return stays
        
    }
}

 async function _sortBy(sortBy , stays) {

    if (sortBy === 'price') {
        // console.log(sortBy)
        stays.sort(function (a, b) {
            return a.price - b.price;
        });
        return stays


    } else if (sortBy === 'type') {
        // console.log(sortBy)
        stays.sort(function (a, b) {
            var fromA = a.from.toUpperCase(); // ignore upper and lowercase
            var fromB = b.from.toUpperCase(); // ignore upper and lowercase
            if (fromA < fromB) {
                return -1;
            }
            if (fromA > fromB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
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