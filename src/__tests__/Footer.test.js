import { render } from "@testing-library/react"

import {StaticRouter} from "react-router-dom/server"


import Footer from "../components/Footer";

test("test Footer",()=>{

    const Render=render(
    <StaticRouter>
       <Footer/>
    </StaticRouter>)
    // console.log(Render);
})