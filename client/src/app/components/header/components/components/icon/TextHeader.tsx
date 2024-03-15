import { Typography } from "@mui/material"

const TextHeader = ({ redirectIndex }: { redirectIndex: () => void; }) => {
    return (
        <Typography variant="h4" color={'#f64'} sx={{
            cursor: 'pointer'
        }} onClick={redirectIndex}>
            Surfrage
        </Typography>
    )
}

export default TextHeader