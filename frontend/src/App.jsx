import Left from "./home/left/Left"
import Logout from "./home/left1/Logout"
import Right from "./home/right/Right"


function App() {

  return (
    <>
      <div className="flex h-screen ">
        <Logout/>
        <Left />
        <Right />
      </div>
    </>
  )
}

export default App