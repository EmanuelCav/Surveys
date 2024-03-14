import { Box, Button } from '@mui/material'

import { ActionRemovePropsType } from '../../../../../../types/props.types'

const ActionRemove = ({ removeSurvey, cancelRemove }: ActionRemovePropsType) => {
    return (
        <Box display='flex' justifyContent='space-evenly' alignItems='center' mt={2}>
            <Button color='warning' variant='contained' onClick={removeSurvey}>
                Remove
            </Button>
            <Button color='warning' variant='outlined' onClick={cancelRemove}>
                Cancel
            </Button>
        </Box>
    )
}

export default ActionRemove