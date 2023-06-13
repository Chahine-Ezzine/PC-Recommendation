import { BiSearch } from 'react-icons/bi'

const SearchInput = () => {
  return (
    <>
      <div className="search-input">
        <form action="#">
          <div className="search-wrapper">
            <div className="input-wrapper2">
              <div className="icon-wrapper1">
                <BiSearch />
              </div>
              <input
                className="first-search"
                type="email"
                placeholder="PC Gaming"
              />
            </div>
            <div className="input-wrapper2">
              <div className="icon-wrapper2">
                <RiMoneyDollarBoxLine />
              </div>

              <input
                type="email"
                className="second-search"
                placeholder="500 - 3850DT"
              />
            </div>
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default SearchInput
