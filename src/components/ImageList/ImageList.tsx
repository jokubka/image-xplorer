import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { actionCreators } from "../../state";
import "./imageList.scss";

const ImageList = () => {
    const dispatch = useDispatch();
    const { loading, error, data } = useTypedSelector((state) => state.images);

    useEffect(() => {
        dispatch(actionCreators.fetchRandomImages());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <h3>Loading...</h3>;

    if (error) return <h3>{error}</h3>;

    return (
        <div className="image-list">
            <div className="container">
                {data.map((item: any) => (
                    <img
                        src={item.urls.small}
                        alt={item.alt_description}
                        key={item.id}
                    />
                ))}
                {data.length === 0 && <h3>No results found</h3>}
            </div>
        </div>
    );
};

export default ImageList;
