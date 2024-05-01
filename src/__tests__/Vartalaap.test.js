import { render } from "@testing-library/react"
import {StaticRouter} from "react-router-dom/server"

import About from "../components/Vartalaap";

test("test the footer page",()=>{

    const Render=render(
    <StaticRouter>
       <About/>
    </StaticRouter>)
    // console.log(Render);
})