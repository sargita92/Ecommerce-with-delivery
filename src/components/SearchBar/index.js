import React, {  useState, useEffect } from "react";
import { connect } from "react-redux";

import CloseIcon from '@material-ui/icons/Close';

import { SearchContainer, SearchBarContainer, SearchInput, SearchProductsContainer } from "./style";

import ProductInfoItem from "../../components/ProductInfoItem";

const SearchBar = ({ store }) => {

    const [searchText,setSearchText] = useState('');

    const setText = (value) => {
        setSearchText( value.replace(/[^a-zA-Z ]/g, "").toLowerCase());
    }

    return (
        <SearchContainer>
            <SearchBarContainer>
                <SearchInput  type="text" autoComplete="on" list="tags" value={searchText} onChange={ (e) => setText(e.target.value) } />
                <datalist id="tags" onClick={() => console.log('entrou')}>
                    {store.map(product => <option  >{product.tag}</option>)}
                </datalist>
                <CloseIcon onClick={ () => setText('') } />
            </SearchBarContainer>
            <SearchProductsContainer>
                {store.filter( p => searchText.length > 0 && p.stock > 0 && p.tag.toLowerCase().includes(searchText)).map((p) => {
                    return <ProductInfoItem product={p} key={p.id} />;
                })}
            </SearchProductsContainer>

        </SearchContainer>
    );
};
  
//Transforma o reducer em props
const mapStateToProps = (state) => ({
    store: state.products.store,
  });
  
  
  export default connect(mapStateToProps)(SearchBar);