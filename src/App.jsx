import { useState } from 'react'
import './App.css'
import { useBookStore } from './store/bookstore';
import { BlankScreen } from './components/screen';
import { ClippedDrawer } from './components/Sidebar/sidebar';
function App() {
  const amount = useBookStore(state => state.amount)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <h2>Books: {amount}</h2>
      <BlankScreen />
      <ClippedDrawer open={drawerOpen} onClose={toggleDrawer} />
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/environment" component={Environment} />
      </Switch> */}
    </>
  )
}

export default App
