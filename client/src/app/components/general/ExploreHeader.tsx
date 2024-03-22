import { Box } from "@mui/material"
import { FaFilter } from "react-icons/fa";

const ExploreHeader = ({ handleFilter }: { handleFilter: () => void }) => { 
  return (
    <Box p={2} width='100%' sx={{
      borderBottom: '1px solid #ddd'
    }} onClick={handleFilter}>
      <FaFilter size={20} style={{ cursor: "pointer" }} />
    </Box>
  )
}

export default ExploreHeader