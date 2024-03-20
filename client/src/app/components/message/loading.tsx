import { useSelector } from 'react-redux'
import { Box } from '@mui/material';

import img from '../../../loading.gif';

import { IReducer } from '../../interfaces/Reducer'

import { selector } from '../../helper/selector'

const Loading = () => {

    const response = useSelector((state: IReducer) => selector(state).response)

    return (
        <>
            {
                response.loading && 
                <Box position='fixed' display='flex' zIndex={22} justifyContent='center' alignItems='center' top={0} left={0} height='100vh' width='100%' bgcolor='#ffffff' sx={{
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    msUserSelect: 'none',
                    MozUserSelect: 'none'
                }}>
                    <Box 
                        component='img'
                        alt='loading...'
                        src={img}
                        width={212}
                        height={212}
                    />
                </Box>
            }
        </>
    )
}

export default Loading