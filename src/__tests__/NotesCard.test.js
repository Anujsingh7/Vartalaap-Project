import { render } from "@testing-library/react"

import {StaticRouter} from "react-router-dom/server"
import NotesCard from "../components/NotesCard"

test("test the NotesCard component",()=>{

    const Render=render(
    <StaticRouter>
       <NotesCard/>
    </StaticRouter>)
    // console.log(Render);
})