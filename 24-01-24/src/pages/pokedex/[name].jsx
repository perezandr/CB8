import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./pokedex.module.scss";

export default function Pokedex() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonSearch, setPokemonSearch] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, [router.query.name]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pokedex/${pokemonSearch.toLowerCase()}`);
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <div className={styles.Pokedex}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input
          className={styles.inputPokemon}
          type="text"
          value={pokemonSearch}
          onChange={onHandleChange}
          placeholder="Gotta catch 'em all!"
        />
        <input className={styles.searchButton} type="submit" value="Search" />
      </form>
      {pokemonData.sprites ? (
        <div className={styles.pokeCard}>
          <h1 className={styles.title}>{pokemonData.name.toUpperCase()}</h1>
          <h4 className={styles.pokemonNumber}># {pokemonData.id}</h4>

          <img
            src={
              pokemonData.sprites.other.showdown.front_default !== null
                ? pokemonData.sprites.other.showdown.front_default
                : pokemonData.sprites.front_default
            }
            alt={pokemonData.name + "name"}
            className={styles.pokemonImage}
          />
          <div className={styles.types}>
            {pokemonData.types.map((type, i) => (
              <p key={i}>{type.type.name}</p>
            ))}
          </div>

          <ul className={styles.stats}>
            {pokemonData.stats.map((stat, i) => (
              <li className={styles.stat} key={i}>
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className={styles.notFound}>{router.query.name + " non trovato"}</p>
      )}
    </div>
  );
}
