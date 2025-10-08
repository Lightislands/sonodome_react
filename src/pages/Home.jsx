import BannerSlideshow from "../components/slideshow/BannerSlideshow";
import Benefits from "../components/benefits/Benefits";
import MainProducts from "../components/main-products/MainProducts";
import styles from './Home.module.scss';

const images = [
  "/slideshow/arbor.jpg",
  "/slideshow/geodesic.jpg",
  "/slideshow/gh_banner.jpg",
  "/slideshow/house.jpg",
  "/slideshow/summer-dome.jpg",
  "/slideshow/winter_dome.jpg"
];

const Home = () => (
  <div>
    <BannerSlideshow images={images} />
    <Benefits />
    <MainProducts />
    <div className={styles.pageWrap}>
      <p>
        At SonoDome, we specialize in designing and building geodesic dome structures that combine strength, beauty, and functionality. Whether you are looking for a stylish greenhouse, an event pavilion, a cozy glamping dome, or a large-scale exhibition space, our domes provide a unique solution that blends modern engineering with natural harmony.
      </p>
      <p>
        Every project is unique. That’s why we offer custom dome kits tailored to your size, purpose, and environment. From compact garden greenhouses to large event halls, we can design and manufacture domes that perfectly fit your requirements.
      </p>
    </div>
  </div>
);

export default Home;
