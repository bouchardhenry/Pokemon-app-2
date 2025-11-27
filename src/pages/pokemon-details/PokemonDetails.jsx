import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./PokemonDetails.module.css";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        setLoading(true);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemon:", error);
      } finally {
        setLoading(false);
      }
    };

    getPokemonDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!pokemon) return <div>Pokemon not found</div>;

  if (Number(id) > 151 || Number(id) < 1) {
    return (
      <div className={styles["error-div"]}>
        <p>Pokemon not found</p>
        <div className="breadcrums">
          <Link to="/pokemons">&#x3c; Go back</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="breadcrums">
        <code>
          <Link to="/">Home</Link> /<space> </space>
          <Link to="/pokemons">Pokemons</Link> /<space> </space>
          {pokemon.name}
        </code>
      </div>

      <div className={styles.wrapper}>
        <div className={styles["nextPrevDiv"]}>
          {Number(id) > 1 && (
            <button className={styles["next-poke"]}>
              <Link to={`/pokemons/${Number(id) - 1}`}>
                <span style={{ fontSize: "1rem" }}>&#x3c;</span>
              </Link>
            </button>
          )}

          {Number(id) < 151 && (
            <button className={styles["next-poke"]}>
            <Link to={`/pokemons/${Number(id) + 1}`}>
              <span style={{ fontSize: "1rem" }}>&#x3e;</span>
            </Link>
          </button>
          )}
          
        </div>

        <div className={styles["pokediv"]}>
          <h1>{pokemon.name}</h1>
          <div className={styles.spriteBox}>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </div>
          <ul>
            <p>
              <strong>Height:</strong> {pokemon.height * 10} cm
            </p>
            <p>
              <strong>Weight:</strong> {pokemon.weight / 10} kg
            </p>
          </ul>
          <h3>Types:</h3>
          <ul>
            {pokemon.types.map((type) => (
              <button key={type.type.name} className={styles["types"]}>
                {type.type.name}
              </button>
            ))}
          </ul>
          <h3>Abilities:</h3>
          <ul>
            {pokemon.abilities.map((ability) => (
              <button
                key={ability.ability.name}
                className={styles["abilities"]}
              >
                {ability.ability.name}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
