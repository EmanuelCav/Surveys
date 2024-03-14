import { Box, Button } from '@mui/material'

import ActionOption from './components/ActionOption'

import { ActionsOptionPropsType } from '../../../types/props.types'

const ActionsOption = ({ handleOptionAction, options }: ActionsOptionPropsType) => {
    return (
        <Box height='30%' width='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <ActionOption text="Add an option" handleOptionAction={handleOptionAction} disabled={options.length >= 6} />
            <ActionOption text="Remove an option" handleOptionAction={handleOptionAction} disabled={options.length <= 1} />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ my: 2, fontSize: '1.225em' }}
                color='warning'
                size='large'
            >
                Create Survey
            </Button>
        </Box>
    )
}

export default ActionsOption