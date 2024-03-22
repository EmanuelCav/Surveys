import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";

import Navigation from "../components/general/Navigation";
import ExploreCategories from "../components/categories/ExploreCategories";
import Filter from "../components/general/Filter";

import { IReducer } from '../interfaces/Reducer';

import { selector } from "../helper/selector";
import { categoriesAll } from "../server/actions/survey.actions";

const Categories = () => {

    const surveys = useSelector((state: IReducer) => selector(state).surveys)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isFilter, setIsFilter] = useState<boolean>(false)

    const handleFilter = () => {
        setIsFilter(!isFilter)
    }

    const getData = async () => {
        dispatch(categoriesAll() as any)
    }

    const getCategory = () => {
        console.log("getCategory");
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box position='relative' display='flex' justifyContent='flex-end' alignItems='center'>
            {
                isFilter && <Filter isSurvey={true} handleFilter={handleFilter} />
            }
            <Navigation isCategories={true} isUsers={false} isSurveys={false} navigate={navigate} />
            <ExploreCategories categories={surveys.categories} getCategory={getCategory} handleFilter={handleFilter} />
        </Box>
    )
}

export default Categories