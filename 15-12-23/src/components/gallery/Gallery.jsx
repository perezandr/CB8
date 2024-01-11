import GalleryCard from "../galleryCard/GalleryCard";
import "./index.css";

const Gallery = ({ galleryListObj }) => {
  return (
    <div className="gallery-list-items">
      {galleryListObj.list.map((image) => (
        <GalleryCard cardObj={image} key={image.id} />
      ))}
    </div>
  );
};

export default Gallery;
