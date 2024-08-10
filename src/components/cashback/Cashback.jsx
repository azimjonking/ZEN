import './Cashback.css'
import logo5 from "../../assets/Frame (14).png"
import logo6 from "../../assets/Frame (13).png"
import logo7 from "../../assets/Frame (12).png"
import logo8 from "../../assets/Frame (10).png"
import logo9 from "../../assets/Frame (11).png"
import logo10 from "../../assets/Group (1).png"
import logo11 from "../../assets/Group (2).png"
import logo12 from "../../assets/Group (3).png"

const Cashback = () => {
  return (
    <section className='cashback'>
      <div className="header">
        <h2>and cashback!</h2>
        <p>It saves a little bit of money while you’re shopping, but in many cases it <br /> takes ages to get anything out of it. We gave it a thought and made <br /> cashback way more friendly. Up to 14% of what you spend using ZEN <br /> Mastercard ® will materialize on your account right after the purchase. <br /> It's like you haggled some cash, despite you didn't have to. Just don't <br /> forget to use in-app cashback link.</p>
      </div>
      <div className="container">
        <button>Show more partners</button>
       <div className="logo0">
        <img src={logo10} alt="" />
        <img src={logo11} alt="" />
        <img src={logo8} alt="" />
        <img src={logo12} alt="" />
       </div>
       <div className="logo100">
       <img src={logo9} alt="" />
       <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
       </div>
      </div>
    </section>
  )
}

export default Cashback