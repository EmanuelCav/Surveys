import { ChangeEvent, useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Box, FormControl, Input, InputAdornment } from "@mui/material";

import SurveysMatched from "./components/search/SurveysMatched";

import { searchSurveyApi } from "../../../server/api/surveys.api";

import { ISurvey } from "../../../interfaces/Survey";
import { SearchPropsType } from "../../../types/props.types";

const Search = ({ navigate, token }: SearchPropsType) => {

    const [search, setSearch] = useState<string>("")
    const [surveys, setSurveys] = useState<ISurvey[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const getSurvey = (id: number) => {
        setSearch("")
        navigate(`/surveys/${id}`)
    }

    const getData = async () => {

        try {

            const { data } = await searchSurveyApi(search, token)
            setSurveys(data)

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getData()
    }, [search])

    return (
        <Box width='33%' sx={{ '& > :not(style)': { m: 1 }, userSelect: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
                search.length > 0 && <SurveysMatched surveys={surveys} getSurvey={getSurvey} />
            }
            <FormControl variant="standard">
                <Input
                    id="input-with-icon-adornment"
                    color="warning"
                    autoComplete="off"
                    sx={{
                        borderBottomColor: '#f64',
                        ":hover": {
                            color: '#f64',
                        },
                    }}
                    name="search"
                    value={search}
                    startAdornment={
                        <InputAdornment position="start" variant="outlined">
                            <BsSearch color="#f64" />
                        </InputAdornment>
                    }
                    placeholder="Search on Surveys"
                    onChange={handleChange}
                />
            </FormControl>
        </Box>
    )
}

export default Search