import { Box } from "@mui/material"

import FilterSurvey from "./components/filter/FilterSurvey"
import FilterUser from "./components/filter/FilterUser"

import { FilterPropsType } from "../../types/props.types"

const Filter = ({ isSurvey, handleFilter, handleOrder, order, handleDate, date, handleSumbitFilter }: FilterPropsType) => {
    return (
        <Box position='fixed' display="flex" justifyContent='center' alignItems='center' sx={{
            top: 0,
            left: 0,
            height: '100vh',
            width: '100%',
            background: 'rgba(0,0,0,0.4)',
            zIndex: 12,
            overflow: 'hidden'
        }}>
            {
                isSurvey ? <FilterSurvey handleFilter={handleFilter} handleOrder={handleOrder} order={order} handleDate={handleDate} date={date} handleSumbitFilter={handleSumbitFilter} />
                : <FilterUser />
            }
        </Box>
    )
}

export default Filter