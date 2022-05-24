import React from "react";
import { Row, Col } from 'react-bootstrap';

function SearchBar(props) {
    return (
        <Row>
            <Col md={{ span: 10, offset: 1 }}>
                <h2 className="search_searchBarTitle">
                    Search for occurences:
                </h2>
                <Row>
                    <Col md={{ span: 12 }}>
                        <input type="text" id="searchBar" onChange={props.updateSearchQuery} className="search_searchBar" placeholder="Antarctopelta" />
                        <button type="submit" className="search_searchBarSubmit" onClick={props.onSearch}>
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );

}

export default SearchBar;