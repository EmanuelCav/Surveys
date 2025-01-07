import { ChangeEvent, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Box, FormControl, Input, InputAdornment } from "@mui/material";

import SurveysMatched from "./components/search/SurveysMatched";

import { searchSurveyApi } from "../../../server/api/surveys.api";

import { ISurvey } from "../../../interfaces/Survey";
import { SearchPropsType } from "../../../types/props.types";

const Search = ({ navigate, token }: SearchPropsType) => {

    const [search, setSearch] = useState<string>("")
    const [showInput, setShowInput] = useState<boolean>(false);
    const [surveys, setSurveys] = useState<ISurvey[]>([])

    const [menu, setMenu] = useState<boolean>(window.matchMedia("(max-width: 650px)").matches)

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
        if (search.length > 0) {
            getData()
        }
    }, [search])

    useEffect(() => {
        window
            .matchMedia("(max-width: 650px)")
            .addEventListener('change', e => setMenu(e.matches));
    }, [])

    return (
        <Box
            width={menu ? "100%" : "33%"}
            display="flex"
            justifyContent={menu ? "flex-end" : "center"}
            alignItems={menu ? "flex-end" : "center"}
            sx={{ "& > :not(style)": { m: 1 }, userSelect: "none" }}
        >
            {search.length > 0 && <SurveysMatched surveys={surveys} getSurvey={getSurvey} />}
            {menu ? (
                showInput ? (
                    <FormControl variant="standard">
                        <Input
                            id="input-with-icon-adornment"
                            color="warning"
                            autoComplete="off"
                            sx={{
                                borderBottomColor: "#f64",
                                ":hover": {
                                    color: "#f64",
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
                            onBlur={() => setShowInput(false)}
                        />
                    </FormControl>
                ) : (
                    <BsSearch
                        color="#f64"
                        style={{ cursor: "pointer" }}
                        size={24}
                        onClick={() => setShowInput(true)}
                    />
                )
            ) : (
                <FormControl variant="standard">
                    <Input
                        id="input-with-icon-adornment"
                        color="warning"
                        autoComplete="off"
                        sx={{
                            borderBottomColor: "#f64",
                            ":hover": {
                                color: "#f64",
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
            )}
        </Box>
    )
}

export default Search