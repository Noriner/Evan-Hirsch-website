import styles from './App.module.scss';
import Header from './Components/Header/Header';
import ExperienceView from './Views/ExperienceView/ExperienceView';
import InterventionView from './Views/InterventionView/InterventionView';
import MainPageView from './Views/MainPageView/MainPageView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductView from './Views/ProductView/ProductView';
import WorkshopsView from './Views/WorkshopsView/WorkshopsView';

const App = () => {
  return (
    <Router>
    <div className={styles.wrapper}>
      <Header></Header>
      <Routes>
          <Route path="/" Component={MainPageView} />
          <Route path="/experience&bio" Component={ExperienceView} />
          <Route path="/interventiondesign" Component={InterventionView} />
          <Route path="/product&service" Component={ProductView} />
          <Route path="/workshops&thoughtleadership" Component={WorkshopsView} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
