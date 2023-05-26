import { useState } from "react";
import Header from "../components/Header";

function HeaderOnly({ children }) {
    const [text, setText] = useState('')
    return (
        <div>
            <Header />
            <div className="container">

                <div className="content">{children}</div>
            </div>

        </div>
    )
}

export default HeaderOnly;