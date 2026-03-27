import React from 'react';
import Swiper from 'react-id-swiper';
import log from 'loglevel';
import {useSelector} from "react-redux";
import {BadRequest} from "../../ui/error/badRequest";
import {handleImageError} from "../../../helper/imageHelper";

const VerticalSlider = () => {
    const homeAPIData = useSelector(state => state.homePageDataReducer)

    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

    const renderImageList = (imageList) => {

        if(!imageList) {
            log.info(`[VerticalSlider]: imageList is null`)
            return <BadRequest/>
        }

        // filter out images which are not for carousels.
        imageList = imageList.filter(image => image.imageLocalPath.search("icon") === -1)

        log.trace("[VerticalSlider]: Rendering renderImageList imageList = " + JSON.stringify(imageList))
        return imageList.map(({id, imageLocalPath, imageURL}) => {
            log.trace(`[VerticalSlider]: Rendering renderImageList imageList filePath = ${imageLocalPath}`)
            return (
                <img key={id} src={imageURL} alt={imageLocalPath} onError={(e) => handleImageError(e, 'category')}/>
            )
        });
    };

    log.info("[VerticalSlider]: Rendering VerticalSlider Component")
    return (
        <Swiper {...params}>
            {renderImageList(homeAPIData.data.carousels)}
        </Swiper>
    )
};
export default VerticalSlider;