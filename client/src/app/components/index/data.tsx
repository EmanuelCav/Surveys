import { Box } from "@mui/material"

import CardData from "./components/data/CardData"

import { DataPropsType } from "../../types/props.types"

const Data = ({ amountSurveys, amountUsers }: DataPropsType) => {
  return (
    <Box display='flex' justifyContent='space-around' alignItems='center' className="full-screen">
      <CardData header={`More than ${amountUsers} users`} text="Many users have been joined in at least one survey at the moment" card={false} />
      <CardData header={`More than ${amountSurveys} surveys available`} text="You can participate and create surveys" card={true} />
    </Box>
  )
}

export default Data