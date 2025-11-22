import "./celebretions.css";
import MusicButton from "../../MusicButton/MusicButton";
import CelebrationCards from "../CelebrationCard/CelebrationCards";

const Celebretions = () => {
  return (
    <div className="celebretions-wrapper">
      <div className="music-wrapper">
        <MusicButton />
      </div>
      <div className="main-celebretion">
        <div className="image-wrapper">
          <img
            alt="celebretion-img"
            src="https://maxkoltugin.github.io/gift-layout/birthday-image1.jpg"
            className="celebration-img"
          />
        </div>
        <div className="text-celebration-wrapper">
          <p className="title-celebration">
            <strong>Поздравление </strong>
          </p>
          <p className="text-celebration">
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            Quam maiores repellat odio sequi quia, ipsum.
            <br />
            <br />От кого
          </p>
        </div>
      </div>
      <CelebrationCards />
    </div>
  );
};

export default Celebretions;
