import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

const Footer = () => {
    const mewImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/151.gif";

    return (
        <div className={styles["footer"]}>
            <p>⭐ Fan-made Pokédex • Data from PokéAPI • © 2025</p>
            <Link to="/pokemons/151">
            <img src={mewImg} alt="pikachu image" />
            </Link>
        </div>
    )
}

export default Footer