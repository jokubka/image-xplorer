import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { actionCreators } from "../../state";
import "./searchHistory.scss";

interface SearchHistoryProps {
    handleSelectQuery: (query: string) => void;
}

const SearchHistory = ({ handleSelectQuery }: SearchHistoryProps) => {
    const historyList = useTypedSelector((state) => state.searchHistory);
    const dispatch = useDispatch();

    console.log(historyList);

    const handleRemove = (query: string) => {
        dispatch(actionCreators.removeFromSearchHistory(query));
    };

    return (
        <div className="search-history">
            {historyList.map((query: string) => (
                <div className="search-query" key={query}>
                    <span onClick={() => handleSelectQuery(query)}>
                        {query}
                    </span>
                    <span onClick={() => handleRemove(query)}>&times;</span>
                </div>
            ))}
        </div>
    );
};

export default SearchHistory;
