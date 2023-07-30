import { FaTwitter, FaTelegramPlane, FaYoutube } from 'react-icons/fa'

import { AiOutlineSend } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-section">
          <h3 className="footer-main-title">PC Recommendation</h3>

          <div className="footer-section-1">
            <h3>PC Recommendation</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer-icons">
              <div className="icons-wrap">
                <div className="icon-footer">
                  <FaTwitter />
                </div>
                <div className="icon-footer">
                  <BsFacebook />
                </div>

                <div className="icon-footer">
                  <FaTelegramPlane />
                </div>

                <div className="icon-footer">
                  <FaYoutube />
                </div>
              </div>
              <p className="copyright-icon">
                Copyright © 2022 Envast. All rights reserved.
              </p>
            </div>
            <p className="footer-copyright">
              Copyright © 2022 Envast. All rights reserved.
            </p>
          </div>
          <div className="footer-section-2">
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
                  <input type="email" placeholder="Info@yourgmail.com" />
                  <button type="submit">
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
