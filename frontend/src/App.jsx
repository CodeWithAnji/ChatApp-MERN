import React from 'react';
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";
import Left from "./home/left/Left";
import Logout from "./home/left1/Logout";
import Right from "./home/right/Right";

function App() {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);

  return (
    <>
      {/* <div className="flex h-screen ">
        <Logout />
        <Left />
        <Right />
      </div> */}

      <Signup />
      {/* <Login /> */}
    </>
  );
}

export default App;
