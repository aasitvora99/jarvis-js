import { useState } from 'react'
import './App.css'
import { useBookStore } from './store/bookstore';
import { BlankScreen } from './components/screen';
import { ClippedDrawer } from './components/Sidebar/sidebar';
// import { Route, Switch } from 'react-router-dom';
// import {Environment} from './components/Pages/environment';
// import {Home} from './components/Pages/home';

function App() {
  const amount = useBookStore(state => state.amount)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <h2>Books: {amount + 10}</h2>
      <BlankScreen />
      <ClippedDrawer open={drawerOpen} onClose={toggleDrawer} />
      {/* <Switch>
        <Route path="/home" component={Home} />
        <Route path="/environment" component={Environment} />
      </Switch> */}
    </>
  )
}

export default App
