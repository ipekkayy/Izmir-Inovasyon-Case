
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox } from 'lightbox.js-react'
import HotelImage1 from "../images/hotel-1.png"
import HotelImage2 from "../images/hotel-2.png"
import HotelImage3 from "../images/hotel-3.png"
import HotelImage4 from "../images/hotel-4.png"

const PhotoGallery = () => {
    return (
        <SlideshowLightbox className="d-flex overflow-hidden mt-13">
            <img src={HotelImage1} className="detail-list-img " />
            <img src={HotelImage2} className="detail-list-img ms-6" />
            <img src={HotelImage4} className="detail-list-img ms-6" />
            <img src={HotelImage3} className="detail-list-img ms-6" />
            <img src={HotelImage1} className="detail-list-img ms-6" />
            <img src={HotelImage2} className="detail-list-img ms-6" />
            <img src={HotelImage4} className="detail-list-img ms-6" />
            <img src={HotelImage2} className="detail-list-img ms-6" />
            <img src={HotelImage4} className="detail-list-img ms-6"  />
        </SlideshowLightbox>
    )

}
export default PhotoGallery;