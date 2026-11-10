function Search({ searchTerm, onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="input-group input-group-lg shadow-sm rounded-3 overflow-hidden">
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleInputChange}
              aria-label="Search projects"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
