import BannerPart from "./Component/BannerPart";
import DeveloperTeam from "./Component/DeveloperTeam";
import MeetUp from "./Component/MeetUp";
import SalesAndMerketing from "./Component/SalesAndMerketing";


const App = () => {
  return (
    <div>
      <BannerPart />
      <MeetUp />
      <DeveloperTeam />
      <SalesAndMerketing/>
    </div>
  );
};

export default App;