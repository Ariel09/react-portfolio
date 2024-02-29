import CardCss from './Card.module.css';

function Card({img, id, title, subtitle, content, onClick}) {
  return (
    <div className={CardCss['card']}>
      <img src={img} alt="Card Image"/>
      <div className={CardCss['card-content']}>
        <h3 className={CardCss["card-title"]}>{title}</h3>
        <p className={CardCss["card-subtitle"]}>{subtitle}</p>
        <p className={CardCss["card-text"]}>{content}</p>
        <button onClick={()=>onClick(id)} className={CardCss["card-button"]}>Click me</button>
      </div>
    </div>
  );
}

export default Card;