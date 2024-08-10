import './Header.css'
import logo1 from "../../assets/Frame (9).png"
const Header = () => {
  return (
    <header>
      <div className="left">
      <img src={logo1} alt="" />
      <ul>
        <li>
          <a href="Personal">Personal</a>
        </li>
        <li>
          <a href="Business">Business</a>
        </li>
      </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="Zenefits">Zenefits</a>
          </li>
          <li>
            <a href="Zenefits">Zenefits</a>
          </li>
          <li>
            <a href="Zenefits">Zenefits</a>
          </li>
        </ul>
        <button>Get app</button>
      </div>
    </header>
  )
}

export default Header