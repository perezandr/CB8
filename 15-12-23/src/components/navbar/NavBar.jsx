import Button from "../button/Button";
import "./index.css";

const NavBar = () => {
  return (
    <div className="Navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Seme_denari_carte_siciliane.svg"
        alt="logo"
      />
      <ul className="buttons-list">
        <Button textContent="One" color="violet" />
        <Button textContent="Two" color="violet" />
        <Button textContent="Three" color="violet" />
        <Button textContent="Four" color="violet" />
      </ul>
      <div className="user-wrapper">
        <Button textContent="Get started" color="red" />
        <img
          className="user-avatar"
          src="https://www.svgrepo.com/show/224233/user.svg"
          alt="user avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
