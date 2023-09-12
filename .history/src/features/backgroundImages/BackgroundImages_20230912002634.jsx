import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBackgroundImages } from './backgroundImagesSlice';

const BackgroundImages = () => {
    const [currentBackgroundImageIndex, setCurrentBackgroundImageIndex] = useState(0);
    const dispatch = useDispatch();
    const backgroundImages = useSelector((state) => state.backgroundImages.backgroundImages);
    const isLoading = useSelector((state) => state.backgroundImages.isLoading);
    const error = useSelector((state) => state.backgroundImages.error);

    useEffect(() => {
        dispatch(fetchBackgroundImages());
    }, [dispatch]);

    if(isLoading) {
        return (
            <div className="background-images-loading">
                <h1>Loading...</h1>
            </div>
        );
    }

    if(error) {
        return (
            <div className="background-images-error">
                <p>Error: {error}</p>
            </div>
        );
    }

    const handleNextBackgroundImage = () => {
        setCurrentBackgroundImageIndex((prevIndex) => {
            prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1;
        });
    };

    const handlePreviousBackgroundImage = () => {
        setCurrentBackgroundImageIndex((prevIndex) => {
            prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1;
        });
    };

    const currentBackgroundImage = backgroundImages[currentBackgroundImageIndex];

    return (
        <div className="background-images" style={{ backgroundImage: `url(${currentBackgroundImage})` }}>
            <h1>Background Image</h1>
            <div>
                <button onClick={handlePreviousBackgroundImage}>&lt;</button>
                <button onClick={handleNextBackgroundImage}>&gt;</button>
            </div>
            {/* Rest of the app */}
        </div>
    );;
}

export default BackgroundImages;