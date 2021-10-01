import { 
  AboutDhruv,
  AboutJordan,
  CustomsRituals,
  Footer,
  HistoryOfBuches,
  HistoryOfNathwani,
  Home,
  HowDhruvMetJordan,
  Mendhi,
  MusicSelection,
  Navigation,
  Proposal,
  WeddingAgenda,
} from "./components";
import { 
  ABOUT_DHRUV_PATH,
  ABOUT_JORDAN_PATH,
  CUSTOM_RITUALS_PATH,
  HISTORY_OF_BUTCHES_PATH,
  HISTORY_OF_NATHWANI_PATH,
  HOME_PATH,
  HOW_DHRUV_MET_JORDAN_PATH,
  MENDHI_PATH,
  MUSIC_PATH,
  PROPOSAL_PATH,
  WEDDING_AGEDNA_PATH,
} from "./routes";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/AboutDhruv" exact component={() => <AboutDhruv />} />
          <Route path={ABOUT_JORDAN_PATH} exact component={() => <AboutJordan />} />
          <Route path={CUSTOM_RITUALS_PATH} exact component={() => <CustomsRituals />} />
          <Route path={HISTORY_OF_BUTCHES_PATH} exact component={() => <HistoryOfBuches />} />
          <Route path={HISTORY_OF_NATHWANI_PATH} exact component={() => <HistoryOfNathwani />} />
          <Route path={HOME_PATH} exact component={() => <Home />} />
          <Route path={HOW_DHRUV_MET_JORDAN_PATH} exact component={() => <HowDhruvMetJordan />} />
          <Route path={MENDHI_PATH} exact component={() => <Mendhi />} />
          <Route path={MUSIC_PATH} exact component={() => <MusicSelection />} />
          <Route path={PROPOSAL_PATH} exact component={() => <Proposal />} />
          <Route path={WEDDING_AGEDNA_PATH} exact component={() => <WeddingAgenda />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
