import defaultPic from "../../img/default-img.jpg";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      style={
        isOnline ? { backgroundColor: "green" } : { backgroundColor: "red" }
      }
      className={styles.status}
    ></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultPic,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
