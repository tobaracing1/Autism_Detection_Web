import Button from "../../Elements/Button/Button";

export default function TableFeature({ setFilter, searchTerm, setSearchTerm, page, toggleAddLayout }) {
  return (
    <div className="util flex justify-between items-center w-full h-20 bg-blue w-full">
      <div className="left flex h-full items-center w-5/12 ml-4">
        <div className="filter h-full w-full flex justify-left items-center">
          <div className="flex justify-center items-left flex-col country-container  w-1/3 h-full mr-4">
            <div className="text-white text-md">Sort By</div>
            <select
              id="country"
              name="country"
              onChange={(e) => setFilter(e.target.value)}
              className="block w-full h-8 rounded-md border-0 py-1.5 text-dark-gray shadow-sm ring-1 ring-inset ring-gray focus:ring-2 focus:ring-inset focus:ring-black focus:text-black sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option value="" disabled selected>
                Select Filter
              </option>
              <option value="alphabetAZ">Alphabet A-Z</option>
              <option value="alphabetZA">Alphabet Z-A</option>
              <option value="oldestDate">Oldest Date</option>
              <option value="newestDate">Newest Date</option>
            </select>
          </div>

          <div className="flex justify-center items-left flex-col country-container  w-full h-full">
            <div className="text-white text-md">Search</div>
            <div className="bar flex">
              <input
                type="text"
                name="search"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full h-8 rounded-md border-0 py-1.5 pl-2 text-dark-gray shadow-sm ring-1 ring-inset ring-dark-gray focus:ring-2 focus:ring-inset focus:ring-black  focus:text-black sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="middle flex justify-center items-center w-2/12  text-white text-2xl font-bold">
        {page}
      </div>

      <div className="right w-5/12 flex justify-end mr-4">
        {page === "users" && (
          <Button
            onClick={() => {
              toggleAddLayout();
            }}
          >
            +Add
          </Button>
        )}
      </div>
    </div>
  );
}
