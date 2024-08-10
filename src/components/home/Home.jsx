import './Home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className="container">
        <div className="boxes">
          <div className="text">
            <div className="i-t">
              <img src="src/assets/icoon.svg" alt="" />
              <p> In every beginning, there is chaos.</p>
            </div>
            <h1>Peaceful shopping. <br /> Mindful money.</h1>

            <p className='t'>See how we can help with making your shopping experience and money management more ZEN.</p>
            <div className="btn">
              <img src="src/assets/Group (1).svg" alt="" />
              <img src="src/assets/icon.svg" alt="" />
            </div>
          </div>
          <div className="image">
            <img src="src/assets/img1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home