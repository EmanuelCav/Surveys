import { Typography } from "@mui/material"

const TextHeader = ({ redirectIndex }: { redirectIndex: () => void; }) => {
    return (
        <Typography variant="h4" color={'#f64'} sx={{
            cursor: 'pointer',
            display: {
                md: 'block',
                xs: 'none'
            }
        }} onClick={redirectIndex}>
            Surfrage
        </Typography>
    )
}

export default TextHeader