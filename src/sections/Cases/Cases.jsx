import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import ScrollButtons from 'components/common/ScrollButtons/ScrollButtons';
import Subtitle from 'components/ui/Subtitle/Subtitle';
import img01 from 'img/cards/01_1x.webp';
import img02 from 'img/cards/02_1x.webp';
import img03 from 'img/cards/03_1x.webp';
import img04 from 'img/cards/04_1x.webp';
import img05 from 'img/cards/05_1x.webp';
import img01_2x from 'img/cards/01_2x.webp';
import img02_2x from 'img/cards/02_2x.webp';
import img03_2x from 'img/cards/03_2x.webp';
import img04_2x from 'img/cards/04_2x.webp';
import img05_2x from 'img/cards/05_2x.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from 'components/common/SlideItem/SlideItem';
import { Container } from 'components/ui/Container/Container';
import content from 'data/cases.json';



const Box = styled.div`

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    
   
  }
   @media (min-width: 1280px){
margin-bottom: 100px;
   }
`;

const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  @media (min-width:768px){
::before{
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 1px;
  height: 65px;
  background-color: var(--accent-color);
}
  }
  @media (min-width: 1280px){
   ::before{
    height:96px;
   }
  } 
`;
const BoxTitle = styled.div`
 width: 264px;
  @media (min-width: 1280px){
    width: 398px;
  }
`;
const Text = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  margin: 0;
    @media (min-width: 768px){
  
    margin-left: 9px;
  }
  @media (min-width: 1280px){
    margin-left: 161px;
  }
  
`;
const Span = styled.span`
  color: var(--backdrop-color);
`;
const StyledSlider = styled(Slider)`
  .slick-prev::before {
    display: none ; 
  }
   .slick-next::before {
    display: none ; 
  }
  

  .slick-slide {
  
    padding-right: -5px; 
    padding-left: -5px;
  }
  @media (min-width: 768px){
   
  .slick-list {
    margin: 0 -12px; 
    
  }
  }
`;
const cases = [
  { id: "01", img: img01, img2: img01_2x, city: "Lviv Region, Radekhiv town", title: "Private Enterprise “ZAKHIDNYI BUH”", description: "Wind Power for auto field irrigation", date: "July 2023" },
  { id: "02", img: img02, img2: img02_2x, city: "Zhytomyr city", title: "Private Enterprise “Bosch”", description: "Solar Panels for industrial use", date: "November 2023" },
  { id: "03", img: img03, img2: img03_2x, city: "Rivne city", title: "Private Enterprise “Biotech”", description: "Thermal modules", date: "October 2023" },
  { id: "04", img: img04, img2: img04_2x, city: "Kherson city", title: "Private Enterprise “HealthyFarm”", description: "Wind power", date: "September 2021" },
  { id: "05", img: img05, img2: img05_2x, city: "Zaporizhia city", title: "Private Enterprise “Biotech”", description: "Mini nuclear stations", date: "May 2021" }
];

const Cases = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    zIndex: 1,
    infinite: true,
    slidesToShow: 2,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,


        }
      }
    ],
    dots: false
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id='cases' className='cases'>
      <Container>

        <Box>
          <BoxTitle >
            <Subtitle>{content.title}</Subtitle>
          </BoxTitle>
          <ContainerBox>
            <div style={{ display: "flex", alignItems: "end" }}>

              <Text>{content.text.first}{currentSlide} <Span>{content.text.second}</Span></Text></div>
            <ScrollButtons onNext={nextSlide} onPrev={prevSlide} />
          </ContainerBox>
        </Box>
        <StyledSlider ref={sliderRef} {...settings}>
          {cases.map((caseItem) => (
            <SlideItem key={caseItem.id} props={caseItem} onNext={nextSlide} />
          ))}
        </StyledSlider>

      </Container>
    </section>
  );
}

export default Cases;
