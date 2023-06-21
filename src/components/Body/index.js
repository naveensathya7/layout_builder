import ConfigurationContext from '../../context/ConfigurationContext'

// Write your code here
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showRightNavbar, showLeftNavbar} = value

      return (
        <div className="body">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="items-list">
                <li className="list-item">Item 1</li>
                <li className="list-item">Item 2</li>
                <li className="list-item">Item 3</li>
                <li className="list-item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1 className="content-heading">Content</h1>
              <p>
                Lorem ipsum dolor sitament,consecteter slingergwr ginvring
                sgnrgnr fginrgins
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar">
              <h1>Right Navbar Menu</h1>
              <div className="ad-container">
                <p>Ad 1</p>
              </div>
              <div className="ad-container">
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
