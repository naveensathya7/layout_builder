// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const changeContentState = () => {
        onToggleShowContent()
      }

      const changeLeftNavBarState = () => {
        onToggleShowLeftNavbar()
      }

      const changeRightNavBarState = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-bg">
          <h1 className="heading-layout">Layout</h1>
          <form>
            <input
              className="checkbox"
              id="contentCheckBox"
              type="checkbox"
              checked={showContent}
              onChange={changeContentState}
            />
            <label htmlFor="contentCheckBox" className="checkbox-label">
              Content
            </label>
            <br />
            <input
              className="checkbox"
              id="leftNavbarCheckBox"
              type="checkbox"
              checked={showLeftNavbar}
              onChange={changeLeftNavBarState}
            />
            <label htmlFor="leftNavbarCheckBox" className="checkbox-label">
              Left Navbar
            </label>
            <br />
            <input
              className="checkbox"
              id="rightNavbarCheckBox"
              type="checkbox"
              onChange={changeRightNavBarState}
              checked={showRightNavbar}
            />
            <label htmlFor="rightNavbarCheckBox" className="checkbox-label">
              Right Navbar
            </label>
          </form>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
