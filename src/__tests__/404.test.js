import { render } from "@testing-library/react"
import NotFound from "../components/404"
import {StaticRouter} from "react-router-dom/server"

test("test the 404 error page",()=>{

    const Render=render(
    <StaticRouter>
       <NotFound/>
    </StaticRouter>)
    // console.log(Render);
})