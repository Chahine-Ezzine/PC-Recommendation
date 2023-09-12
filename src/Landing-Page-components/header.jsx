// Header displays the main heading and a problem reporting button on the landing page.
const Header = () => {
  return (
    <header className="header-landing-page">
      <div className="toolbar">
        <h1>PC Recommendation</h1>
        <button role="button" aria-label="Report a technical problem">
          Report a problem
        </button>
      </div>
    </header>
  )
}

export default Header
