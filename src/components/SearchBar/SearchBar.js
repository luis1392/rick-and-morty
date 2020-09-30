import React, { useState, useEffect } from "react";

import { Row } from "../../styles/Grid";

import { ContainerSearchBar } from "../../styles/SearchBar";

import { connect } from "react-redux";
import * as searchActions from "../../redux/actions/searchActions";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    const value = event.target.value.trim().toLowerCase();
    setSearchValue(value);
  };
  useEffect(() => {
    props.searchData(searchValue);
  }, [searchValue]);

  return (
    <Row>
      <ContainerSearchBar>
        <div className="form-group">
          <label htmlFor="searchInput">
            Busca por el nombre del personaje{" "}
          </label>
          <input
            type="search"
            className="form-control"
            id="searchInput"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </ContainerSearchBar>
    </Row>
  );
};

const mapStateToProps = ({ searchReducer }) => {
  return {
    searchReducer,
  };
};
const actions = {
  searchData: searchActions.searchData,
};
// export default CharacterList;
export default connect(mapStateToProps, actions)(SearchBar);
