import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import ScrollButtons from 'components/ScrollButtons/ScrollButtons';
import Subtitle from 'components/Subtitle/Subtitle';
import img01 from '../../img/cards/01.png';
import img02 from '../../img/cards/02.png';
import img03 from '../../img/cards/03.png';
import img04 from '../../img/cards/04.png';
import img05 from '../../img/cards/05.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from 'components/SlideItem/SlideItem';


const ContainerCases = styled.div`
  text-align: left;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;
const Text = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  margin: 0;
`;
const Span = styled.span`
  color: var(--backdrop-color);
`;

const cases = [
    { id: "01", img: img01, city: "Lviv Region, Radekhiv town", title: "Private Enterprise “ZAKHIDNYI BUH”", description: "Wind Power for auto field irrigation", date: "July 2023" },
    { id: "02", img: img02, city: "Zhytomyr city", title: "Private Enterprise “Bosch”", description: "Solar Panels for industrial use", date: "November 2023" },
    { id: "03", img: img03, city: "Rivne city", title: "Private Enterprise “Biotech”", description: "Thermal modules", date: "October 2023" },
    { id: "04", img: img04, city: "Kherson city", title: "Private Enterprise “HealthyFarm”", description: "Wind power", date: "September 2021" },
    { id: "05", img: img05, city: "Zaporizhia city", title: "Private Enterprise “Biotech”", description: "Mini nuclear stations", date: "May 2021" }
];

const Cases = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    const settings = {
        zIndex: 1,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        afterChange: (index) => setCurrentSlide(index + 1),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <ContainerCases>
            <div style={{ width: "264px" }}>
                <Subtitle>Successful cases of our company</Subtitle>
            </div>
            <Container>
                <Text>0{currentSlide} <Span>/05</Span></Text>
                <ScrollButtons onNext={nextSlide} onPrev={prevSlide} />
            </Container>

            <Slider ref={sliderRef} {...settings}>
                {cases.map(caseItem => (
                    <SlideItem key={caseItem.id} props={caseItem} onNext={nextSlide} />
                ))}
            </Slider>
        </ContainerCases>
    );
}

export default Cases;