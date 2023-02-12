import "./App.css";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Stack } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Stack direction="row" spacing={2} pt={1} justifyContent="space-between">
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </div>
  );
}

export default App;
