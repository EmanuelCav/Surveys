import { Box } from "@mui/material"

import CategoryFilter from "./components/filterSurvey/CategoryFilter"
import Order from "./components/filterSurvey/Order"
import Date from "./components/filterSurvey/Date"
import ButtonFilter from "./components/ButtonFilter"

import { FilterSurveyPropsType } from "../../../../types/props.types"

const FilterSurvey = ({ handleFilter, handleOrder, order, handleDate, date, handleSumbitFilter }: FilterSurveyPropsType) => {
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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
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
                <ButtonFilter handleFilter={handleFilter} handleSumbitFilter={handleSumbitFilter} />
            </Box>
        </Box>
    )
}

export default FilterSurvey