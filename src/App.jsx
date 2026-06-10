import { AboutPurpose } from "./pages/AboutPurpose";
import { AboutTeam } from "./pages/AboutTeam";
import { AboutUsFirst } from "./pages/AboutUsFirst";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
      <AboutUsFirst/>
      <AboutPurpose/>
      <AboutTeam />
    </div>
  );
}

export default App;
