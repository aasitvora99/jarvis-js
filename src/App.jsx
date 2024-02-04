import { useState } from 'react'
import './App.css'
import { useBookStore } from './store/bookstore';
import { BlankScreen } from './components/screen';
import { ClippedDrawer } from './components/Sidebar/sidebar';
import { Route, Switch } from 'react-router-dom';
import environment from './components/Pages/environment';
import home from './components/Pages/home';

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
      <Switch>
        <Route path="/home" component={home} />
        <Route path="/environment" component={environment} />
      </Switch>
    </>
  )
}

export default App
