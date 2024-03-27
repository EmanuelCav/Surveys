import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";

import Navigation from "../components/general/Navigation";
import ExploreCategories from "../components/categories/ExploreCategories";

import { categoriesAll, surveyAll } from "../server/actions/survey.actions";

import { IReducer } from '../interfaces/Reducer';

import { selector } from "../helper/selector";

const Categories = () => {

    const surveys = useSelector((state: IReducer) => selector(state).surveys)
    const user = useSelector((state: IReducer) => selector(state).user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getData = async () => {
        dispatch(categoriesAll() as any)
    }

    const getCategory = (id: number) => {
        dispatch(surveyAll({
            date: 'total',
            order: 'random',
            user,
            categories: id
        }) as any)

        navigate('/explore/surveys')
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box position='relative' display='flex' justifyContent='flex-end' alignItems='center'>
            <Navigation isCategories={true} isUsers={false} isSurveys={false} navigate={navigate} />
            <ExploreCategories categories={surveys.categories} getCategory={getCategory} />
        </Box>
    )
}

export default Categories