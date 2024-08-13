import HotelImage1 from "./images/hotel-1.png"
import HotelImage2 from "./images/hotel-2.png"
import HotelImage3 from "./images/hotel-3.png"
import HotelImage4 from "./images/hotel-4.png"

export const hotels = [{ name: "otel1", regularPrice: "4.300", discountPrice: "4.100", address: "abc", image: HotelImage1, location: { city: "Istanbul", district: {"Beyoglu":true} }, accomodation: { "roomOnly": true, "roomWithBreakfast": false, "allIn": false }, facility: { "pool": true, "sauna": false, "spa": false } },
{ name: "otel2", regularPrice: "4.400", discountPrice: "4.200", address: "def", image: HotelImage2, location: { city: "Ankara", district: {"Cankaya":true} }, accomodation: { "roomOnly": false, "roomWithBreakfast": false, "allIn": true }, facility: { "pool": true, "sauna": true, "spa": false } },
{ name: "otel3", regularPrice: "4.500", discountPrice: "4.300", address: "ghj", image: HotelImage3, location: { city: "Izmir", district: {"Alsancak":true} }, accomodation: { "roomOnly": false, "roomWithBreakfast": true, "allIn": false }, facility: { "pool": true, "sauna": false, "spa": true } },
{ name: "otel4", regularPrice: "4.600", discountPrice: "4.400", address: "klm", image: HotelImage4, location: { city: "Izmir", district: {"Bornova":true} }, accomodation: { "roomOnly": true, "roomWithBreakfast": false, "allIn": false }, facility: { "pool": true, "sauna": true, "spa": true } }]


