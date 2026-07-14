
import styles from "./avatar.module.css";

/**
 * Avatar component.
 *
 * Displays a user's profile picture.
 * If no image is provided, it displays the user's initials.
 *
 * @param {Object} props
 * @param {string} props.src - URL of the avatar image.
 * @param {string} props.alt - Alternative text for the image.
 * @param {string} props.name - User's full name used to generate initials.
 * @param {"sm"|"md"|"lg"} props.size - Avatar size.
 */

function Avatar({
  src,
  alt = "User Avatar",
  name = "",
  size = "md",
}) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    //this will check if src is provided,if not profile will be the first initials of name
    <div className={`${styles.avatar} ${styles[size]}`}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span>{initials || "U"}</span>
      )}
    </div>
  );
}

export default Avatar;