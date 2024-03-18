import { Box } from "@mui/material"

import CardData from "./components/data/CardData"

const Data = () => {
  return (
    <Box display='flex' justifyContent='space-around' alignItems='center' className="full-screen">
      <CardData header="More than 200.000 users" text="Many users have been joined in at least one survey at the moment" card={false} />
      <CardData header="More than 60.000 surveys available" text="You can participate and create surveys" card={true} />
    </Box>
  )
}

export default Data