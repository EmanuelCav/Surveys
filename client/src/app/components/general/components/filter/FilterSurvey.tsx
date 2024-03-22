import { Box } from "@mui/material"

import CategoryFilter from "./components/filterSurvey/CategoryFilter"
import Order from "./components/filterSurvey/Order"
import Date from "./components/filterSurvey/Date"
import ButtonFilter from "./components/ButtonFilter"

import { FilterSurveyPropsType } from "../../../../types/props.types"

const FilterSurvey = ({ handleFilter, handleOrder, order, handleDate, date }: FilterSurveyPropsType) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#ffffff',
                width: '28%',
                px: 4,
                py: 2,
                userSelect: 'none',
                position: 'relative'
            }}
        >
            <Order handleOrder={handleOrder} value={order} />
            <Date handleDate={handleDate} value={date} />
            <CategoryFilter />
            <ButtonFilter handleFilter={handleFilter} handleOrder={handleOrder} />
        </Box>
    )
}

export default FilterSurvey