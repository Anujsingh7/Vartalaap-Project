import { render } from "@testing-library/react"
import {StaticRouter} from "react-router-dom/server"
import Shimmer from "../components/Shimmer"

test("test the Shimmer component",()=>{

    const Render=render(
    <StaticRouter>
       <Shimmer/>
    </StaticRouter>)
    // console.log(Render);
})