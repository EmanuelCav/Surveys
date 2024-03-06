import { Typography } from "@mui/material"

const FormTitle = ({ title }: { title: string }) => {
    return (
        <Typography component="h1" variant="h5" color={'#f64'} textAlign='center' mt={1}>
            {title}
        </Typography>
    )
}

export default FormTitle