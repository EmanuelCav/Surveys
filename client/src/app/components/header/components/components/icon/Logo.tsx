import { Box } from "@mui/material"

const Logo = () => {

  return (
    <Box
      component="img"
      sx={{
        height: 64,
        width: 64
      }}
      alt="Icon"
      src="icon.png"
    />
  )
}

export default Logo