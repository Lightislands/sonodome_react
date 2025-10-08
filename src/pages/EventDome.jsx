import styles from './EventDome.module.scss';
import EventDomeSelector from '../components/eventDomeSelector/EventDomeSelector';
import eventDomeTabsData from './eventDomeTabsData';
import Tabs from '../components/tabs/Tabs';

const EventDome = () => {
  return (
    <div
      className={styles.pageWrap}
      itemScope
      itemType="http://schema.org/Article"
    >
      <meta itemProp="inLanguage" content="en-GB" />

      <div className={styles.pageHeader}>
        <h1 itemProp="name">Event Dome</h1>
      </div>
      <div className={styles.container} itemProp="articleBody"></div>

      <EventDomeSelector />

      <p>
        SonoDome offers both short-term and long-term dome rental services. Our demountable geodesic structures provide a unique and high-quality alternative to traditional event tents, suitable for projects of any scale. With a wide range of sizes and functional options, we make it possible to bring any vision to life.
      </p>
      <p>
        Our geodesic domes are exceptionally versatile. They can be quickly installed on almost any surface, withstand all weather conditions, and serve as either temporary or permanent structures — making them a reliable choice for any event.
      </p>

      <div className={styles.tabs}>
        <Tabs tabs={eventDomeTabsData} />
      </div>

      <img
        onContextMenu={(e) => e.preventDefault()}
        alt="Event Dome"
        src="/content/sky-banner.jpg"
      />
    </div>
  );
};

export default EventDome;
