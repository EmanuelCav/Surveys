import { Box } from "@mui/material"

const Logo = ({ func }: { func: () => void }) => {

  return (
    <Box
      component="img"
      sx={{
        height: 64,
        width: 64
      }}
      alt="Icon"
      src="icon.png"
      onClick={func}
    />
  )
}

export default Logo