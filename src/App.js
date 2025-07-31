import logo from './logo.svg';
import './App.css';
import GrievancePage from './Pages/GrievancePage';
import HomePage from './Pages/HomePage';
import LoveQuotePage from './Pages/LoveQuotePage';
import ImageGalleryPage from './Pages/ImageGallery';
import ChildhoodCutoutsPage from './Pages/ChildhoodCutoutsPage';
import MotivationPage from './Pages/MotivationPage';
import LoveTimelinePage from './Pages/LoveTimeline';
import LoveLetterPage from './Pages/LoveLetterPage';
import LettersPage from './Pages/LettersPage';
import RantPage from './Pages/RantPage';
import ToDoPage from './Pages/Todo';
import SolarLoveSection from './Pages/Planet';
function App() {

  return (
    <div className="App">
<HomePage></HomePage>
<GrievancePage></GrievancePage>
<LoveQuotePage></LoveQuotePage>
<ImageGalleryPage></ImageGalleryPage>
<ChildhoodCutoutsPage></ChildhoodCutoutsPage>
<MotivationPage></MotivationPage>
{/* <RantPage></RantPage>
<ToDoPage></ToDoPage> */}
<LoveTimelinePage></LoveTimelinePage>
<LettersPage></LettersPage>
<LoveLetterPage></LoveLetterPage>
<SolarLoveSection></SolarLoveSection>
    </div>
  );
}

export default App;
