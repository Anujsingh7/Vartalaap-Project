import { render } from "@testing-library/react"
import {StaticRouter} from "react-router-dom/server"
import SocialNavbar from "../components/SocialNavbar";

test("test the footer page",()=>{

    const Render=render(
    <StaticRouter>
       <SocialNavbar/>
    </StaticRouter>)
    // console.log(Render);
})