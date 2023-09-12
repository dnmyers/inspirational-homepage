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

    useEffect(() => {
        if(backgroundImages.length > 0) {
            setCurrentBackgroundImage(backgroundImages[currentBackgroundImageIndex]);
        }
    }, [backgroundImages, currentBackgroundImageIndex]);


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
        console.log("currentBackgroundImageIndex: " + currentBackgroundImageIndex);
        setCurrentBackgroundImageIndex((prevIndex) => {
            prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1;
        });
        console.log("after setCurrentBackgroundImageIndex");
        console.log("currentBackgroundImageIndex: " + currentBackgroundImageIndex);
        console.log("currentBackgroundImage: " + currentBackgroundImage);
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