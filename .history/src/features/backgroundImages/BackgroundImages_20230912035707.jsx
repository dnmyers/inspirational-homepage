/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBackgroundImages } from './backgroundImagesSlice';

import './BackgroundImages.scss';

const BackgroundImages = (props) => {
    const [currentBackgroundImageIndex, setCurrentBackgroundImageIndex] = useState(0);
    const [currentBackgroundImage, setCurrentBackgroundImage] = useState('');

    const dispatch = useDispatch();
    const backgroundImages = useSelector((state) => state.backgroundImages.backgroundImages);
    console.log("🚀 ~ file: BackgroundImages.jsx:13 ~ BackgroundImages ~ backgroundImages:", backgroundImages)
    const isLoading = useSelector((state) => state.backgroundImages.isLoading);
    const error = useSelector((state) => state.backgroundImages.error);

    useEffect(() => {
        dispatch(fetchBackgroundImages());
    }, [dispatch]);

    setCurrentBackgroundImage(backgroundImages[currentBackgroundImageIndex]);

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
        console.group("handleNextBackgroundImage");
        console.log("currentBackgroundImageIndex: " + currentBackgroundImageIndex);
        console.log("backgroundImages.length: " + backgroundImages.length);
        console.log("currentBackgroundImage: " + currentBackgroundImage);
        console.log("backgroundImages: " + backgroundImages);
        console.groupEnd();
        setCurrentBackgroundImageIndex((prevIndex) => {
            prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1;
        });

        console.log("After setCurrentBackgroundImageIndex in handleNextBackgroundImage - currentBackgroundImage: " + currentBackgroundImage);
    };

    const handlePreviousBackgroundImage = () => {
        console.log(currentBackgroundImage);
        setCurrentBackgroundImageIndex((prevIndex) => {
            prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1;
        });
        console.log(currentBackgroundImage);
    };


    return (
        <div className="background-images" style={{ backgroundImage: `url(${currentBackgroundImage})` }}>
            <div>
                <button onClick={handlePreviousBackgroundImage}>&lt;</button>
                <button onClick={handleNextBackgroundImage}>&gt;</button>
            </div>
            {props.children}
        </div>
    );
};

export default BackgroundImages;