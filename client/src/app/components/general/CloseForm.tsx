import { Box } from '@mui/material'
import { IoMdCloseCircle } from "react-icons/io";

const CloseForm = ({ func }: { func: () => void }) => {
  return (
    <Box sx={{
      position: 'absolute',
      top: '5%',
      left: '90%',
      cursor: 'pointer',
      ":hover": {
        background: '#eeeeee'
      },
      ":active": {
        background: '#ffffff'
      }
    }} onClick={func}>
      <IoMdCloseCircle color="#f64" size={24} />
    </Box>
  )
}

export default CloseForm