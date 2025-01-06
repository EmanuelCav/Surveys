import { Box } from "@mui/material"

import ButtonFilter from "./components/ButtonFilter"
import OrderUser from "./components/filterUser/OrderUser"

import { FilterUserPropsType } from "../../../../types/props.types"

const FilterUser = ({ handleFilter, handleSumbitFilter, handleOrder, order }: FilterUserPropsType) => {
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
                    alignItems: 'center',
                    background: '#ffffff',
                    width: { xs: '95%', md: '33.33%' },
                    px: 4,
                    py: 2,
                    userSelect: 'none',
                    position: 'relative'
                }}
            >
                <OrderUser handleOrder={handleOrder} value={order} />
                <ButtonFilter handleFilter={handleFilter} handleSumbitFilter={handleSumbitFilter} />
            </Box>
        </Box>
    )
}

export default FilterUser