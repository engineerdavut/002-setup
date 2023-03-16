import { Link,Outlet } from "react-router-dom";


export default function ApplicationLayout(){

    return(
        <div>
            <h1>
                başlık
            </h1>
            <Link to="/">eve git</Link><br/>
            <Link to="/source">Kaynağa git</Link><br/>
            <Outlet/>
            <h1>
                ayaklık
            </h1>
        </div>
    )
}