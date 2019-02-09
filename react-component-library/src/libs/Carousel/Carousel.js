import React from 'react';
import uniqid from 'uniqid';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
        this.scrollInterval = null;
        this.style = {
            carousel: {
                position: "relative"
            },
            carouselItem: {
                position: "absolute",
                visibility: "hidden"
            },
            visible: {
                visibility: "visible"
            }
        };
    }
    componentDidMount() {
        this.changeItem();
    }
    setActiveItem = () => {
        const { carouselItems } = this.props;
        this.setState(
            prevState => ({
                active: (prevState.active + 1) % carouselItems.length
            }),
            this.changeItem
        );
    };
    changeItem = () => {
        this.scrollInterval = setTimeout(this.setActiveItem, 2000);
    };
    render() {
        const { carouselItems, ...rest } = this.props;
        const { active } = this.state;
        const { visible, carousel, carouselItem } = this.style;
        return (
            <div style={carousel}>
                {carouselItems.map((item, index) => {
                    const activeStyle = active === index ? visible : {};
                    return React.cloneElement(item, {
                        ...rest,
                        style: {
                            ...carouselItem,
                            ...activeStyle
                        }
                    });
                })}
            </div>
        );
    }
}

export default Carousel;
