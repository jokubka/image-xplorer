import { useEffect, useState } from "react";
import axios from "axios";
import "./imageHero.scss";
import { SearchForm } from "../";

const ImageHero = () => {
    const [image, setImage] = useState({ url: "", alt: "", author: "" });

    useEffect(() => {
        axios
            .get("https://api.unsplash.com/photos/random", {
                params: {
                    client_id: process.env.REACT_APP_API_KEY,
                    count: 1,
                    orientation: "landscape",
                },
            })
            .then((result) =>
                setImage({
                    url: result.data[0].urls.full,
                    alt: result.data[0].alt_description,
                    author: result.data[0].user.name,
                })
            )
            .catch((error) => {
                console.log(error);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="image-hero">
            <div className="center">
                <h2>IMAGE xPLORER</h2>
                <SearchForm />
            </div>
            <div className="image-wrapper">
                {image.url && <img src={image.url} alt={image.alt} />}
                <div className="overlay"></div>
            </div>
            {image.author && (
                <div className="image-author">Photo by {image.author}</div>
            )}
        </div>
    );
};

export default ImageHero;
