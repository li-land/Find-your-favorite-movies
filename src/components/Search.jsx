import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "",
    };
  }

  handleSearchValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  render() {
    const { search, type } = this.state;
    const { searchMovies } = this.props;

    return (
      <div className="page__search search">
        <div className="search__form">
          <div className="search__wrapp">
            <input
              className="search__field"
              type="search"
              name="search"
              placeholder="Write the name of the movie"
              value={search}
              onChange={this.handleSearchValue}
              onKeyDown={this.handleKey}
            />
            <button
              className="search__btn"
              onClick={() => searchMovies(search, type)}
            >
              Search
            </button>
          </div>
          <div className="search__radio-box">
            <div className="search__radio-item">
              <label htmlFor="radio-all">
                <input
                  id="radio-all"
                  type="radio"
                  name="type"
                  value=""
                  checked={type === ""}
                  onChange={this.handleSearchValue}
                />{" "}
                All
              </label>
            </div>
            <div className="search__radio-item">
              <label htmlFor="radio-movie">
                <input
                  id="radio-movie"
                  type="radio"
                  name="type"
                  value="movie"
                  checked={type === "movie"}
                  onChange={this.handleSearchValue}
                />{" "}
                Only movies
              </label>
            </div>
            <div className="search__radio-item">
              <label htmlFor="radio-series">
                <input
                  id="radio-series"
                  type="radio"
                  name="type"
                  value="series"
                  checked={type === "series"}
                  onChange={this.handleSearchValue}
                />{" "}
                Only series
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { Search };
