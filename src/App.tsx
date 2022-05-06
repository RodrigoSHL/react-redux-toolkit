import React from 'react'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import store from './store'
const App = () => {
  return (
    <Provider store={store}>
      <Navbar/>
      <UserList/>
    </Provider>
  )
}

export default App