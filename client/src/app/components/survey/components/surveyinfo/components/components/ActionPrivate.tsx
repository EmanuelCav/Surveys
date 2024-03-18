import { Box, Button } from '@mui/material'

import { ActionRemovePropsType } from '../../../../../../types/props.types'

const ActionRemove = ({ func, cancelAction, buttonText }: ActionRemovePropsType) => {
    return (
        <Box display='flex' justifyContent='space-evenly' alignItems='center' mt={2}>
            <Button color='warning' variant='contained' onClick={func}>
                {buttonText}
            </Button>
            <Button color='warning' variant='outlined' onClick={cancelAction}>
                Cancel
            </Button>
        </Box>
    )
}

export default ActionRemove