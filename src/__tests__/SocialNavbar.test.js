import { render } from "@testing-library/react"
import {StaticRouter} from "react-router-dom/server"
import SocialNavbar from "../components/SocialNavbar";

test("test SocialNavbar component",()=>{

    const Render=render(
    <StaticRouter>
       <SocialNavbar/>
    </StaticRouter>)
    // console.log(Render);
})