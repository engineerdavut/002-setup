import {Link} from 'react-router-dom'

export default function NavigationSource(){

    return(
        <div>
            <h1>Source</h1>
            <Link to="/target">ereğe git</Link><br/>
            <Link to="/target/321">ereğe değiştirgenle git</Link><br/>
        </div>
    )
}