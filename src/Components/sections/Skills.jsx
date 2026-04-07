import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Container
export const SliderWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  position: relative;

  .swiper {
    padding: 20px 40px; /* space for arrows */
  }

  /* Arrow Buttons */
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.text_primary};
    background-color: ${({ theme }) => theme.bg};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 14px;
    font-weight: bold;
  }
  /* Hide arrows on mobile */
  @media (max-width: 480px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

// Card Wrapper (your Skill)
export const SkillCard = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

// Title
export const SkillTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

// List
export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

// Item
export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 14px;

   @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

// Image
export const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Skills = () => {

  const { loading, portfolioData } = useSelector((state) => state.root);
  const { skills } = portfolioData;

  return (
    <>
      <Title id="Skills"> Skills</Title>
      <Desc
        style={{
          marginBottom: "40px",
        }}
      >
        Full Stack Developer 🌊 Skilled in Angular, React, TypeScript, and Micro Frontend Architecture | Over 5 years of hands-on experience
      </Desc>

      <SliderWrapper >
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          spaceBetween={20}
          // ✅ RESPONSIVE
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}

          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}

          pagination={{ clickable: true }}
          navigation={true}

          autoplay={{
            delay: 2000,              // 2 seconds
            disableOnInteraction: false, // continue after click
            pauseOnMouseEnter: true,     // pause on hover
          }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <SkillCard>
                <SkillTitle>{skill.title}</SkillTitle>

                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={index_x}>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </SkillCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </>


  );
};

export default Skills;
