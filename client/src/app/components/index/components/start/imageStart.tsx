import { Box } from "@mui/material"

const ImageStart = () => {
    return (
        <Box width='50%' p={3} height='100%' display="flex" justifyContent="center" alignItems='center'>
            <Box
                component='img'
                width={500}
                height={365}
                src="/start.png" 
                alt="start_index"
            />
        </Box>
    )
}

export default ImageStart