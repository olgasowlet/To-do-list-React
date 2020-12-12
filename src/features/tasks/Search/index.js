import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Input } from "./style.js";


const Search = () => {
    const { search, pathname } = useLocation();
    const query = new URLSearchParams(search).get("szukaj");
    const history = useHistory();

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(search);
        
        if (target.value.trim() === ""){
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", target.value);
        }

        history.push(`${pathname}?${searchParams.toString()}`);
    }

    return (
        <>
            <Input placeholder="Szukaj" value={query || ""} onChange={onInputChange} />
        </>
    );
};

export default Search;