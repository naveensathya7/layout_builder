import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'
import ConfigurationContext from './context/ConfigurationContext'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  updateContentState = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  updateLeftNavBarState = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  updateRightNavBarState = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    console.log(showContent, showLeftNavbar, showRightNavbar)

    return (
      <>
        <ConfigurationContext.Provider
          value={{
            showContent: showContent,
            showLeftNavbar: showLeftNavbar,
            showRightNavbar: showRightNavbar,
            onToggleShowContent: this.updateContentState,
            onToggleShowLeftNavbar: this.updateLeftNavBarState,
            onToggleShowRightNavbar: this.updateRightNavBarState,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </>
    )
  }
}

export default App
