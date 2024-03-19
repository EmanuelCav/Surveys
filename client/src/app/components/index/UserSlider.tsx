import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import { Box, Button } from '@mui/material';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import User from '../users/components/components/User';

import { IUser } from '../../interfaces/User';
import { UserSliderPropsType } from '../../types/props.types';

const UserSlider = ({ user, redirectUsers, redirectUser }: UserSliderPropsType) => {
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
          user.users.map((user: IUser) => {
            return (
              <SwiperSlide key={user.id}>
                <User user={user} redirectUser={redirectUser} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Button variant='outlined' size='large' color='warning' onClick={redirectUsers}>
        Explore Users
      </Button>
    </Box>
  )
}

export default UserSlider