import './MasterCard.css'

const MasterCard = () => {
  return (
    <section className="masterCard">
      <div className="master1">
        <h1>ZEN shopping Mastercard</h1>
        <p>
          You shouldn’t be bound to use one card at a time, <br /> especially when it
          has so many benefits! With ZEN, you <br /> can manage your shopping and
          finances with both <br /> physical and virtual cards. It’s convenient,
          streamlined, and <br /> works like a charm. You can have a shopping card, a <br />
          subscription card, and whatever other cards that make <br /> sense to you.
        </p>
        <div className="btn">
          <button>
            <img src="./src/assets/Vector.png" alt="" />
          </button>
          <button>
            <img src="./src/assets/Group (3).png" alt="" />
          </button>
        </div>
      </div>
      <div className="master2">
        <img src="./src/assets/Rectangle (2).png" alt="" />
      </div>
    </section>
  );
}

export default MasterCard