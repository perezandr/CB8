import Post from "../post/Post";
import "./index.css";

const PostList = ({ postListData, userListData }) => {
  return (
    <div className="PostList">
      {postListData.map((post) => {
        const userData = userListData.find((user) => user.id === post.userId);

        if (userData) {
          return <Post postData={post} userData={userData} key={post.id} />;
        } else {
          const defaultUserData = {
            username: generateRandomUsername(),
            image: `https://robohash.org/${generateRandomUsername()}.png`,
          };
          return (
            <Post postData={post} userData={defaultUserData} key={post.id} />
          );
        }
      })}
    </div>
  );
};

function generateRandomUsername() {
  const adjectives = [
    "Happy",
    "Funny",
    "Laido",
    "Stupido",
    "Lurido",
    "Kind",
    "Gentle",
    "Bright",
    "Famelico",
    "Esuberante",
    "Manicheo",
    "Epicureo",
    "Rampante",
    "Sexy",
    "Gagliardo",
  ];
  const nouns = [
    "Cat",
    "Zucchina",
    "Dog",
    "Elephant",
    "EdoardoDeFilippo",
    "Polpo",
    "Lucrezio",
    "Maronno",
    "Monkey",
    "Tiger",
    "Tagliatella",
    "Travone",
    "Dragon",
    "Dugongo",
    "Domodossola",
    "Panda",
    "Pippo",
    "Pappardella",
    "Kangaroo",
    "Barlog",
    "Gandalf",
    "Cancaro",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  const randomNumber = Math.floor(Math.random() * 1000);

  return `${randomAdjective}${randomNoun}${randomNumber}`;
}
const randomUsername = generateRandomUsername();

export default PostList;
