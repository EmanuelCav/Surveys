import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import { Box, Button } from '@mui/material';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import Survey from '../general/components/survey/Survey';

import { ISurvey } from '../../interfaces/Survey';
import { SurveySliderPropsType } from '../../types/props.types';

const SurveySlider = ({ surveys, user, redirectSurvey, redirectSurveys }: SurveySliderPropsType) => {
    return (
        <Box my={4}>
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 2,
                    fill: "row"
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper full-screen"
            >
                {
                    surveys.map((survey: ISurvey) => {
                        return (
                            <SwiperSlide key={survey.id}>
                                <Survey survey={survey} user={user} redirectSurvey={redirectSurvey} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <Button variant='outlined' size='large' color='warning' onClick={redirectSurveys}>
                Explore Surveys
            </Button>
        </Box>
    )
}

export default SurveySlider