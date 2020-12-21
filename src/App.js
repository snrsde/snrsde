import './App.css';
import IndexListComponent from './components/IndexListComponent'
import DisplayPostComponent from './components/DisplayPostComponent'

import { HashRouter, Route, Switch } from 'react-router-dom';
import HomepageLayout from './components/HomepageLayout';
import PremiumPage from './components/PremiumPage';
import DonatePage from './components/DonatePage';


function App() {
  return (
    <div style ={{overflow: "scroll"}} className="App">
      <HashRouter basename='/snrsde'>
        {/* <Switch> */}
          <Route path="/system_design/" render={(props) => <IndexListComponent id="system_design" title ='System Design' />} exact />
          <Route path="/ood" render={(props) => <IndexListComponent id="ood" title ='Object Oriented Design' />} exact />
          <Route path="/algo" render={(props) => <IndexListComponent id="algo" title ='Algo/DS' />}  />
          <Route path="/ambiguity" render={(props) => <IndexListComponent id="ambiguity" title ='Ambiguity' />}  />
          <Route path="/" component={HomepageLayout} exact />
          <Route path="/premium" component={PremiumPage} exact />
          <Route path="/donate" component={DonatePage} exact />
          <Route path="/post/:id" component={DisplayPostComponent} exact/>
        {/* </Switch> */}
      </HashRouter>
    </div>
  );
}

export default App;

