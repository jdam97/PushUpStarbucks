import { Link } from "react-router-dom"
import "../../css/home.css"

export const Home = ()=>{
    return(
        <div>
            <header>
                <div className="logo">
                    <img className="img-logo" src="/logo.png" alt="" />
                </div>
                <nav className="nav">
                    <a href="">Inicio</a>
                    <a href="">Menu</a>
                    <a href="">Novedades</a>
                    <a href="">Contacto</a>
                </nav>
            </header>
            <div className="main-content">
                <div className="info-product">
                    <h1>TITULO 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus libero, ipsa, repellendus quidem quaerat iusto temporibus veritatis recusandae possimus voluptas nesciunt ut est! Voluptatum cupiditate molestiae id quas ipsam perspiciatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos cupiditate, ut officia architecto, nostrum, dolorum commodi non voluptatibus repellat sunt fugiat doloremque impedit? Voluptatibus et velit facilis officia dolorem porro?</p>
                </div>
                <div className="img-product">
                    <img src="./img1.png" alt="" />
                    <div className="redes">
                        <a href=""><img src="./facebook.png" alt="" /> </a>
                        <a href=""><img src="./twitter.png" alt="" /> </a>
                        <a href=""><img src="../instagram.png" alt="" /> </a>
                    </div>
                </div>
            </div>
            <div className="options-content">
                <Link rel="stylesheet" href=""><img src="./thumb1.png" alt="" /> </Link>
                <Link rel="stylesheet" href=""><img src="./thumb2.png" alt="" /> </Link>
                <Link rel="stylesheet" href=""><img src="./thumb3.png" alt="" /> </Link>
            </div>

        </div>
    )
}