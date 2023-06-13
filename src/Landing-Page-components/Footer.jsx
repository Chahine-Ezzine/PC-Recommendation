import {
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaYoutube,
} from 'react-icons/fa'

import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-section">
          <div className="footer-section-1">
            <h3>PC Recommendation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="footer-section-2">
            <p>Resource</p>

            <p>
              <a href="#">Blogs</a>
            </p>
            <p>
              <a href="#">Help</a>
            </p>
            <p>
              <a href="#">FaQs</a>
            </p>
          </div>
          <div className="footer-section-3">
            <h4>Subscribe Us</h4>
            <p>
              Signup for our newsletter to get the latest news in your inbox.
            </p>
            <form action="#">
              <div className="input-wrapper">
                <input type="email" placeholder="Info@yourgmail.com" />
                <button type="submit">
                  <AiOutlineSend />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-icons">
          <FaTwitter />
          <FaFacebookF />
          <FaTelegramPlane />
          <FaYoutube />
        </div>
      </footer>
    </div>
  )
}
export default Footer
