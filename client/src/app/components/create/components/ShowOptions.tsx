import { Box } from '@mui/material'

import InputOption from './components/InputOption'

import { IOption } from '../../../interfaces/Survey'
import { ShowOptionsPropsType } from '../../../types/props.types'

const ShowOptions = ({ options, optionData, handleChange }: ShowOptionsPropsType) => {
    return (
        <Box width='100%' flex={1} display='flex' justifyContent='flex-start' alignItems='center' flexDirection='column'>
            {
                options.map((option: IOption, index: number) => {
                    return <InputOption option={option} index={index} value={optionData[index].name} handleChange={handleChange} key={option.id} />
                })
            }
        </Box>
    )
}

export default ShowOptions