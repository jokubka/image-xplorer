import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import "./searchForm.scss";
import { SearchHistory } from "../../components";

const ImageSearchHeader = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (input !== "") {
            dispatch(actionCreators.searchImages(input));
        }
    };

    const selectHistoryQuery = (query: string) => {
        setInput(query);
        dispatch(actionCreators.searchImages(query));
    };

    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search photos"
                    className="search-input"
                />
                <button type="submit" className="btn-submit">
                    Search
                </button>
            </form>
            <SearchHistory handleSelectQuery={selectHistoryQuery} />
        </div>
    );
};

export default ImageSearchHeader;
