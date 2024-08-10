import './Footer.css'
import logo2 from "../../assets/Vector (5).png"
import logo3 from "../../assets/Group.png"
const Footer = () => {
  return (
    <footer>
          <div className="link">
          <div>
            <h3>Learn</h3>
            <p>Help center</p>
            <p>Join ZEN team</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>Terms of use</p>
          </div>
          <div>
            <h3>Discover</h3>
            <p>For developers</p>
            <p>Apple Pay</p>
            <p>Google Pay</p>
          </div>
          <div>
            <h3>offen</h3>
              <p>Business</p>
              <p>Personal</p>
          </div>
          <div>
              <h3>Language</h3>
              <p>English</p>
              <p>Polish</p>
          </div>
          <div>
            <h3>Follow us</h3>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <div>
            <h3>Contact</h3>
            <p>hello@zen.com</p>
          </div>
          </div>
      <div className='div'>
        <img src={logo2} alt="" />
        <h3>zero effort nonbank</h3>
        <div>

       <div className="zen">
       <p>ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries. <br /> Registration number of the company 304749651, VAT ID LT100011714916. License of electronic money institutions number LB000457. Share capital <br /> 2.185.000,00 EUR. Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.</p>
       <img src={logo3} alt="" />
       </div>
        </div>          
        </div>
    </footer>
  )
}

export default Footer