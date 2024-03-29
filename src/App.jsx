import Box from "./components/ui/box/Box";
import BtnIcon from "./components/ui/btn-icon/BtnIcon";

function App() {
  return (
    <>
      <Box color="green" size={150}>
        <p><span>A - </span>Hola</p>
      </Box>
      <Box color="red" size={50} />
      <Box />
      <BtnIcon icon="user" text="@username"/>
      <BtnIcon icon="edit" text="Edit profile"/>
      <BtnIcon text="Edit profile"/>
    </>
  )
}

export default App;
