import { render } from "@testing-library/react"
import {StaticRouter} from "react-router-dom/server"

import TimeCapsule from "../components/TimeCapsule";

test("test TimeCapsule component",()=>{

    const Render=render(
    <StaticRouter>
       <TimeCapsule/>
    </StaticRouter>)
    // console.log(Render);
})