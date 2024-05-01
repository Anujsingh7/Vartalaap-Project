import { render } from "@testing-library/react"

import {StaticRouter} from "react-router-dom/server"

import ShowNotes from "../components/ShowNotes";

test("test ShowNotes component",()=>{

    const Render=render(
    <StaticRouter>
       <ShowNotes/>
    </StaticRouter>)
    // console.log(Render);
})