import { useState } from "react";
import styles from "./EventDomeSelector.module.scss";

const domes = [
  {
    title: "ECO-30",
    size: "6m",
    icon: "/content/event-dome-selector/30-ico.png",
    image: "/content/event-dome-selector/30.jpg",
    floorArea: "26.65 m²",
    diameter: "6.0 m",
    height: "3.51 m",
    peopleStanding: 40,
    peopleSitting: 22,
    seatedTables: 20,
    description:
      "A compact 30 m² dome structure, ideal for areas with high pedestrian traffic. It can be used as a sales point, information booth, or exhibition space during mass events. It also serves perfectly as an exclusive relaxation area by the swimming pool or in your garden."
  },
  {
    title: "ECO-50",
    size: "8m",
    icon: "/content/event-dome-selector/50-ico.png",
    image: "/content/event-dome-selector/50.jpg",
    floorArea: "50 m²",
    diameter: "8.0 m",
    height: "4 m",
    peopleStanding: 70,
    peopleSitting: 45,
    seatedTables: 35,
    description:
      "The 50 m² event dome is an excellent solution for open-air business meetings, seminars, or exclusive dinners. It also works well for presentations, weddings, and as a stylish retreat in a forest or seaside setting."
  },
  {
    title: "ECO-75",
    size: "10m",
    icon: "/content/event-dome-selector/75-ico.png",
    image: "/content/event-dome-selector/75.jpg",
    floorArea: "77.25 m²",
    diameter: "10.0 m",
    height: "5.0 m",
    peopleStanding: 125,
    peopleSitting: 110,
    seatedTables: 75,
    description:
      "This 77 m² geodesic dome is designed for exhibitions, presentations, parties, dining, or retail use. The sturdy frame allows for the suspension of lighting, sound, and PA systems, as well as projectors, while keeping all cables neatly hidden."
  },
  {
    title: "ECO-113",
    size: "12m",
    icon: "/content/event-dome-selector/110-ico.png",
    image: "/content/event-dome-selector/110.jpg",
    floorArea: "113 m²",
    diameter: "12 m",
    height: "6 m",
    peopleStanding: 160,
    peopleSitting: 130,
    seatedTables: 90,
    description:
      "The ECO-113 dome offers more than 113 m² of space, making it suitable for most urban or nature-based events. When combined with a flooring system and a smaller dome, it creates a unique venue for weddings and a wide range of other events."
  },
  {
    title: "ECO-150",
    size: "14m",
    icon: "/content/event-dome-selector/150-ico.png",
    image: "/content/event-dome-selector/150.jpg",
    floorArea: "154 m²",
    diameter: "14 m",
    height: "7.85 m",
    peopleStanding: 230,
    peopleSitting: 148,
    seatedTables: 112,
    description:
      "The ECO-150 dome is designed for large-scale and ambitious events. It can function as a hotel, club, bar, or concert venue. Perfect for fashion shows, corporate gatherings, car exhibitions, and high-profile presentations."
  }
];

const EventDomeSelector = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedDome = domes[selectedIndex];

  return (
    <div className={styles.wrapper}>
      {/* Top icons */}
      <div className={styles.iconRow}>
        {domes.map((dome, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`${styles.iconItem} ${i === selectedIndex ? styles.active : ""}`}
          >
            <img
              src={dome.icon}
              alt={dome.title}
              onContextMenu={(e) => e.preventDefault()}
            />
            <span>{dome.size}</span>
          </div>
        ))}
      </div>

      <hr />

      {/* Dome details */}

      <div className={styles.info}>
        <div className={styles.details}>
          <div>
            <h3>{selectedDome.title}</h3>
            <ul>
              <li><span>Flooring area:</span> {selectedDome.floorArea}</li>
              <li><span>Diameter:</span> {selectedDome.diameter}</li>
              <li><span>Height:</span> {selectedDome.height}</li>
              <li><span>People standing:</span> {selectedDome.peopleStanding}</li>
              <li><span>People sitting:</span> {selectedDome.peopleSitting}</li>
              <li><span>Seated tables:</span> {selectedDome.seatedTables}</li>
            </ul>
          </div>
          <p>{selectedDome.description}</p>
          <div className={styles.image}>
            <img
              src={selectedDome.image}
              alt={selectedDome.title}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDomeSelector;
