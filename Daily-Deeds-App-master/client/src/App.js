import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";
const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userEmail = cookies.Email;
  const authToken = cookies.AuthToken;
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
      );
      const json = await response.json();
      setTasks(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  return (
    <div className ="whole-app">
      <div className="app">
        {!authToken && <Auth />}
        {authToken && (
          <>
            <ListHeader
              listName={"📝 Your Daily Deeds List"}
              getData={getData}
            />
            <p className="user-email">
              {" "}
              💫 Welcome back <span>{userEmail}</span>
            </p>
            {tasks?.map((task) => (
              <ListItem key={task.id} task={task} getData={getData} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
