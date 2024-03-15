import { Box } from "@mui/material"

const Logo = ({ redirectIndex }: { redirectIndex: () => void; }) => {

  return (
    <Box
      component="img"
      sx={{
        cursor: 'pointer',
        height: 64,
        width: 64,
      }}
      alt="Icon"
      src="https://res.cloudinary.com/projects-emanuek/image/upload/v1709490095/portfolio/icon_qfb1dl.png"
      onClick={redirectIndex}
    />
  )
}

export default Logo