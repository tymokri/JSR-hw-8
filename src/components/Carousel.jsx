import React from "react";
import cn from "classnames";
import PropTypes from 'prop-types';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        const { images } = this.props;
        this.state = {
            slides: [
                {state: true, src: images[0].src, id: images[0].id},
                {state: false, src: images[1].src, id: images[1].id},
                {state: false, src: images[2].src, id: images[2].id}
            ],
            activeSlideIndex: 0
        }
    }

    handleClick = (direction) => () => {
        let activeSlideIndex = this.state.activeSlideIndex;

        if (direction === "next") {
            if (activeSlideIndex === this.state.slides.length - 1) {
                activeSlideIndex = 0;
            } else {
                activeSlideIndex += 1;
            }
        }

        if (direction === "prev") {
            if (activeSlideIndex === 0) {
                activeSlideIndex = this.state.slides.length - 1;
            } else {
                activeSlideIndex -= 1;
            }
        }

        this.setState({
                slides: [
                    {state: (activeSlideIndex === 0), src: this.state.slides[0].src, id: this.state.slides[0].id},
                    {state: (activeSlideIndex === 1), src: this.state.slides[1].src, id: this.state.slides[1].id},
                    {state: (activeSlideIndex === 2), src: this.state.slides[2].src, id: this.state.slides[2].id}
                ],
                activeSlideIndex: activeSlideIndex
            }
        )
    }

    handleClickPrev = this.handleClick("prev");
    handleClickNext = this.handleClick("next");

    render() {
        const carouselAttrs = {
            dataBsRide: "carousel",
            id: "carousel",
            alt: "architecture img",
            ariaHidden: "true",
            dataBsTarget: "#carousel",
            type: "button",
            dataBsSlide: {
                prev: "prev",
                next: "next"
            }
        };
        const carouselClassNamesImg = cn("d-block", "w-100");
        const carouselClassNamesGroup = cn("carousel", "slide");
        const carouselClassNamesInner = cn("carousel-inner");
        const carouselClassNamesControlNext = cn("carousel-control-next");
        const carouselClassNamesControlPrev = cn("carousel-control-prev");
        const carouselClassNamesControlNextIc = cn("carousel-control-next-icon");
        const carouselClassNamesControlPrevIc = cn("carousel-control-prev-icon");
        const carouselClassNamesVisualHidden = cn("visually-hidden");

        return (
            <div id={carouselAttrs.id} className={carouselClassNamesGroup} data-bs-ride={carouselAttrs.dataBsRide}>
                <div className={carouselClassNamesInner}>
                    {
                        this.state.slides.map(item => {
                            return (
                                <div className={cn("carousel-item", {active: item.state})}
                                     key={item.id}>
                                    <img alt={carouselAttrs.alt} className={carouselClassNamesImg} src={item.src}/>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={this.handleClickPrev} className={carouselClassNamesControlPrev} data-bs-target={carouselAttrs.dataBsTarget} type={carouselAttrs.type} data-bs-slide={carouselAttrs.dataBsSlide.prev}>
                    <span className={carouselClassNamesControlPrevIc} aria-hidden={carouselAttrs.ariaHidden}> </span>
                    <span className={carouselClassNamesVisualHidden}>Previous</span>
                </button>
                <button onClick={this.handleClickNext} className={carouselClassNamesControlNext} data-bs-target={carouselAttrs.dataBsTarget} type={carouselAttrs.type} data-bs-slide={carouselAttrs.dataBsSlide.next}>
                    <span className={carouselClassNamesControlNextIc} aria-hidden={carouselAttrs.ariaHidden}> </span>
                    <span className={carouselClassNamesVisualHidden}>Next</span>
                </button>
            </div>
        )
    }
}

Carousel.propTypes = {
    images: PropTypes.array
}

export default Carousel;