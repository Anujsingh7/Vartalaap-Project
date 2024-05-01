import { render } from "@testing-library/react"

import {StaticRouter} from "react-router-dom/server"
import GoUpButton from "../components/GoUpBtn";

test("test goUpButton",()=>{

    const Render=render(
    <StaticRouter>
       <GoUpButton/>
    </StaticRouter>)
    // console.log(Render);
})