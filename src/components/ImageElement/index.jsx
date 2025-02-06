import unableImage from "@/assets/webp/unableImage.webp";
import profilePlaceholder from "@/assets/svg/profilePlaceholder.svg";

const Image = (props) => {
  let {
    src = "",
    alt = "",
    type = "",
    title = "",
    className = "",
    id = "",
    style = {},
  } = props;
  const handleImageError = (e) => {
    e.target.src = unableImage;
  };
  return (
    <img
      onError={handleImageError}
      src={src || (type !== "profile" ? unableImage : profilePlaceholder)}
      alt={alt || "image "}
      id={id}
      className={className}
      title={title}
      style={style}
      loading="lazy"
    />
  );
};

export default Image;
