import "./ImageCard.css"

const ImageCard = ({imageUrl, title, children}) => {

    return (
        <div className="card"> 
            <img className="card__image" src={imageUrl} alt={title}/>
            <div className="card__info">
                {children}
            </div>
        </div>
    );
}

export default ImageCard;