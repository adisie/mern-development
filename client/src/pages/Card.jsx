import "./Card.css";
const Card = () => {
  return (
    <div className="cards-container">
      <div>
        <div className="cards">
          {[1, 2, 3, 4].map((item, index) => (
            <div className="card">
              <h5>Ethiopia The Land Of Wisdom</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis, veniam asperiores! Quod neque voluptatibus fugit
                commodi amet ipsum eaque iure laudantium animi alias?
                Perspiciatis.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
