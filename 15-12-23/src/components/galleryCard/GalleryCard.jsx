import "./index.css";

const GalleryCard = ({ cardObj }) => {
  return (
    <div className="gallery-card">
      {/* <div className="side-wrapper">
                <img src="" alt="" />
            </div> */}
      <img src={cardObj.img} alt={cardObj.title} />
    </div>
  );
};

export default GalleryCard;
