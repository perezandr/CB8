import "./index.css";

const Landing = ({ colorOne = "white", colorTwo = "white" }) => {
  return (
    <div
      className="landing-wrapper"
      style={{
        background: `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
      }}
    >
      <div className="title-wrapper">
        <h1 className="title">Landing!</h1>
        <input type="text" className="search" placeholder="Search:" />
      </div>
    </div>
  );
};

export default Landing;
