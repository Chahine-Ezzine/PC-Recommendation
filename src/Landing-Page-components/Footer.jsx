import { FaTwitter, FaTelegramPlane, FaYoutube } from 'react-icons/fa'

import { AiOutlineSend } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-section">
          <h3 className="footer-main-title">PC Recommendation</h3>

          <div className="footer-branding">
            <h3>PC Recommendation</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer-icons">
              <div className="icons-wrap">
                <a href="#" aria-label="Twitter" className="icon-footer">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Facebook" className="icon-footer">
                  <BsFacebook />
                </a>
                <a href="#" aria-label="Telegram" className="icon-footer">
                  <FaTelegramPlane />
                </a>
                <a href="#" aria-label="YouTube" className="icon-footer">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <p className="footer-copyright">
              Copyright © 2022 Envast. All rights reserved.
            </p>
          </div>
          <div className="footer-resources">
            <div className="footer-links">
              <p className="footer-resource">Resource</p>

              <p>
                <a href="#">Blogs</a>
              </p>
              <p>
                <a href="#">Help and Center</a>
              </p>
              <p>
                <a href="#">FaQs</a>
              </p>
            </div>
            <div className="footer-email">
              <h4>Subscribe Us</h4>
              <p>
                Signup for our newsletter to get the latest news in your inbox.
              </p>
              <form action="#">
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="Info@yourgmail.com"
                    aria-label="Email for newsletter subscription"
                  />
                  <button type="submit" aria-label="Subscribe to newsletter">
                    <AiOutlineSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer
