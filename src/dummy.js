import HotelImage1 from "./images/hotel-1.png"
import HotelImage2 from "./images/hotel-2.png"
import HotelImage3 from "./images/hotel-3.png"
import HotelImage4 from "./images/hotel-4.png"

export const hotels = [{ name: "Coordinat Suits", regularPrice: "4.300", discountPrice: "4.100", address: "351. Sokak no 3, Izmir, Bornova, 35100", image: HotelImage1, location: { city: "Izmir", district: {"Bornova":true} }, accomodation: { "roomOnly": true, "roomWithBreakfast": false, "allIn": false }, facility: { "pool": true, "sauna": false, "spa": false } , description:"Sadece Konaklama"},
{ name: "Otel Barry", regularPrice: "4.400", discountPrice: "4.200", address: "Fevzi Çakmak Cad. 49, İzmir, İzmir, 35100", image: HotelImage2, location: { city: "Izmir", district: {"Bayrakli":true} }, accomodation: { "roomOnly": false, "roomWithBreakfast": false, "allIn": true }, facility: { "pool": true, "sauna": true, "spa": false } , description:"Her Şey Dahil"},
{ name: "Grand Hekimoglu Hotel", regularPrice: "4.500", discountPrice: "4.300", address: "Gazi Bulv. No.: 100, Konak, İzmir, İzmir, 35210", image: HotelImage4, location: { city: "Izmir", district: {"Konak":true} }, accomodation: { "roomOnly": false, "roomWithBreakfast": true, "allIn": false }, facility: { "pool": true, "sauna": false, "spa": true } , description:"Oda Kahvaltılı"},
{ name: "Vatan Hotel", regularPrice: "5.500", discountPrice: "5.200", address: "Anafartalar Cad. No.: 626, Çankaya, İzmir, 3500", image: HotelImage3, location: { city: "Izmir", district: {"Konak":true} }, accomodation: { "roomOnly": false, "roomWithBreakfast": true, "allIn": false }, facility: { "pool": true, "sauna": false, "spa": true }, description:"Oda Kahvaltılı" },
{ name: "Holiday Inn Ankara - Çukurambar, Bir IHG Oteli", regularPrice: "8.200", discountPrice: "8.800", address: "Isci Bloklari Mah 1484 Sk No 3 Cankaya, Ankara, Ankara, 06000", image: HotelImage1, location: { city: "Ankara", district: {"Cankaya":true} }, accomodation: { "roomOnly": false, "roomWithBreakfast": false, "allIn": true }, facility: { "pool": true, "sauna": true, "spa": true }, description:"Her Şey Dahil" },
{ name: "Turk Inn 2017 Hotel", regularPrice: "1.700", discountPrice: "1.850", address: "Necatibey Cad. No.: No.: 68, Kızılay, Ankara, 06430", image: HotelImage3, location: { city: "Ankara", district: {"Kizilay":true} }, accomodation: { "roomOnly": false, "roomWithBreakfast": false, "allIn": true }, facility: { "pool": true, "sauna": true, "spa": true }, description:"Her Şey Dahil" },
{ name: "Mandarin Oriental Bosphorus İstanbul", regularPrice: "11.450", discountPrice: "12.000", address: "Muallim Naci Caddesi No.: 62, İstanbul, 34345", image: HotelImage2, location: { city: "Istanbul", district: {"Ortakoy":true} }, accomodation: { "roomOnly": false, "roomWithBreakfast": false, "allIn": true }, facility: { "pool": true, "sauna": false, "spa": true }, description:"Her Şey Dahil" },
{ name: "The Ritz-Carlton, Istanbul", regularPrice: "14.600", discountPrice: "14.000", address: "Süzer Plaza Askerocağı Caddesi No.: 6, Elmadağ/Şişli, İstanbul, 34367", image: HotelImage4, location: { city: "Istanbul", district: {"Sisli":true} }, accomodation: { "roomOnly": true, "roomWithBreakfast": false, "allIn": false }, facility: { "pool": true, "sauna": true, "spa": true }, description:"Sadece Konaklama" }]


