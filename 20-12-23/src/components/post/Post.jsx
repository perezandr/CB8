import "./index.css";

const Post = ({ postData, userData }) => {
  const { title, body, tags, reactions } = postData;
  const { username, image } = userData;

  return (
    <div className="Post">
      <div className="user-wrapper">
        <img className="avatar" src={image} alt="user avatar" />
        <h4 className="username">{username}</h4>
      </div>
      <h3 className="Post__title">{title}</h3>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--gift">
          <span>🎁</span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
