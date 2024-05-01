import { render } from "@testing-library/react"
import {StaticRouter} from "react-router-dom/server"
import Footer from "../components/Footer";

test("test the footer page",()=>{

    const Render=render(
    <StaticRouter>
       <Footer/>
    </StaticRouter>)
    // console.log(Render);
})