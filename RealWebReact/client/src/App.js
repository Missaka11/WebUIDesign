import logo from "./logo.svg";
import "./App.css";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";

function App() {
  return (
    <Box>
      <NavBar></NavBar>
      <Stack direction={"row"} spacing={2} justifyContent={"space-evenly"}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
