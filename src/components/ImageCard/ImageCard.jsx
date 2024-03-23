import css from './ImageCard.module.css';

export const ImageCard = ({ item }) => {
  return (
    <div className={css.wrapperImg}>
      <div>
        <img
          className={css.img}
          src={item.urls.small}
          alt={item.alt_description}
          data-id={item.id}
        />
      </div>
    </div>
  );
};
