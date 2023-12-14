import "./index.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="column-one">
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          minus!
        </p>
      </div>
      <div className="column-two">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/material/24/instagram-new--v1.png"
          alt="instagram"
        />
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/material/24/linkedin--v1.png"
          alt="linkedin"
        />
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/material/24/reddit.png"
          alt="reddit"
        />
      </div>
      <div className="column-three">
        <input type="email" placeholder="Your e-mail" />
        <textarea name="textarea" className="textarea" cols="50" rows="5">
          Enter your text:
        </textarea>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Footer;
