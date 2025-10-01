import styles from "./Benefits.module.scss";

const Benefits = () => (
  <div className={styles.row}>
		<div className={styles.item}>
			<img onContextMenu={(e) => e.preventDefault()} src="/content/geodome_ico1.png" alt="air dome" />
			<span>The dome’s interior air circulates naturally, keeping the air mass evenly balanced at all times.</span>
		</div>
		<div className={styles.item}>
			<img onContextMenu={(e) => e.preventDefault()} src="/content/geodome_ico2.png" alt="domes material" />		
			<span>The dome’s rational form requires about 30% fewer materials than a rectangular house of equal size.</span>
		</div>
		<div className={styles.item}>
			<img onContextMenu={(e) => e.preventDefault()} src="/content/geodome_ico3.png" alt="domes aerodynamic" />	
			<span>The aerodynamic walls let air flow smoothly around the dome, avoiding pressure zones or turbulence.</span>
		</div>
		<div className={styles.item}>
			<img onContextMenu={(e) => e.preventDefault()} src="/content/geodome_ico4.png" alt="energy-effective dome" />	
			<span>The geodesic frame is strong and efficient, with no need for inner walls, as weight spreads evenly across the nodes.</span>
		</div>	  
	</div>
);

export default Benefits;
