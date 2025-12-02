/* import ImageGallery from "react-image-gallery";
import { useNavigate } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import escapadas from "../assets/data/escapadas.json"
console.log(escapadas)

export default function Gallery() {
  const navigate = useNavigate();

  function reDirigir() {
    navigate('/rutas');
  }

  return (
    <div className="gallery">
      <ImageGallery
        items={escapadas}
        autoPlay={true}
        showBullets={true}
        thumbnailPosition="bottom"
        onClick={reDirigir}
      />
    </div>
  );
} */
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import escapadas from "../assets/data/escapadas.json"
export default function Gallery() {
  return (
    <>
      <div className="gallery">
        <ImageGallery items={escapadas} 
        autoPlay={true} thumbnailPosition="bottom" 
        />
        </div>
    </>
  )
}





