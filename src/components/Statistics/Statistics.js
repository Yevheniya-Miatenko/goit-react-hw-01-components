import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import randColor from "./randomColor";

const Statistics = ({ stats, title }) => (
  <section className="statistics">
    {title && <h2 className={styles.stat_title}>{title}</h2>}
    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          style={{backgroundColor: randColor() }}
          className={styles.stat_list_item}
          key={id}
        >
          <span className="label">{label}</span>
          <span className="percentage"> {percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};

export default Statistics;
