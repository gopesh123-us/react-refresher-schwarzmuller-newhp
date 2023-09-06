import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoriteMeets from "./pages/FavouriteMeets";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation />
      <AllMeetupsPage />
    </div>
  );
}

export default App;
