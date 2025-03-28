
import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";

function App() {
  const userInfo = {
    username: "johndoe",
    isAdmin: "true",
  };
  return (
    <div>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
