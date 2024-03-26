import css from './ImageCard.module.css';

export const ImageCard = ({ item }) => {
  const handleClick = () => {
    console.log('Image clicked:', item.id);
  };

  return (
    <div className={css.wrapperImg}>
      <div>
        <img
          className={css.img}
          src={item.urls.small}
          alt={item.alt_description}
          data-id={item.id}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
