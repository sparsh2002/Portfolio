import hero from "../assets/img/hero-image.jpeg";
import SearchIcon from '@material-ui/icons/Search';
import photoshop from '../assets/img/design-skills/photoshop.jpeg'
import ai from '../assets/img/design-skills/ai-icon.png'
import illustrator from '../assets/img/design-skills/illustrator.jpg'
import indesign from '../assets/img/design-skills/indesign.jpeg'
import figma from '../assets/img/design-skills/figma.jpeg'
import adobexd  from '../assets/img/design-skills/adobexd.jpeg'
import xd from '../assets/img/design-skills/xd-icon.png'
import fi from '../assets/img/design-skills/figma-icon.png'
import id from '../assets/img/design-skills/id-icon.png'
import ps from '../assets/img/design-skills/ps-icon.png'
const Home = () => {
  return (
    <div className="home">
      <div className="section">
        <div className="content">
          <p>Design Transcends Agends</p>
          <h2>Creativity is</h2>
          <h2>nothing but a mind</h2>
          <h2>set free.</h2>
          <div className="btn" id="home-btn">
            <SearchIcon />
              Our Works
          </div>
        </div>
        <div className="hero">
          <img className="hero-img" src={hero} alt="" />
        </div>
      </div>
      <div className="section">
          <div className="block">
            <img src={illustrator} alt="" />
            <div className="desc">
                <img src={ai} alt="" />
                <p>Illustrator</p>
            </div>
          </div>
          <div className="block">
          <img src={photoshop} alt="" />
            <div className="desc">
                <img src={ps} alt="" />
                <p>Photoshop</p>
            </div>
          </div>
          <div className="block">
          <img src={indesign} alt="" />
            <div className="desc">
                <img src={id} alt="" />
                <p>Indesign</p>
            </div>
          </div>
          <div className="block">
          <img src={figma} alt="" />
            <div className="desc">
                <img src={fi} alt="" />
                <p>Figma</p>
            </div>
          </div>
          <div className="block">
          <img src={adobexd} alt="" />
            <div className="desc">
                <img src={xd} alt="" />
                <p>Adobe XD</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
