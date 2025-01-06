import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";

import Navigation from "../components/general/Navigation";
import ExploreCategories from "../components/categories/ExploreCategories";

import { categoriesAll } from "../server/actions/survey.actions";
import { selectCategoriesApi } from "../server/api/user.api";
import { userAction } from "../server/features/user.features";

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

    const getCategory = async (id: number) => {

        try {

            const { data } = await selectCategoriesApi(id, user.user.token!)
            dispatch(userAction(data))
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box sx={{ mt: 10 }} position='relative' display='flex' justifyContent='flex-end' alignItems='center'>
            <Navigation isCategories={true} isUsers={false} isSurveys={false} navigate={navigate} />
            <ExploreCategories categories={surveys.categories} getCategory={getCategory} user={user} />
        </Box>
    )
}

export default Categories