import { render } from "@testing-library/react"

import {StaticRouter} from "react-router-dom/server"
import Hero from "../components/Hero"

test("test the hero component",()=>{

    const Render=render(
    <StaticRouter>
       <Hero/>
    </StaticRouter>)
    // console.log(Render);
})