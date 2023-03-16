import { BrowserRouter,Routes,Route } from "react-router-dom"
import ApplicationLayout from "./ApplicationLayout"
import NavigationIndex from "../module/NavigationIndex";
import NavigationSource from "../module/NavigationSource";
import NavigationTarget from "../module/NavigationTarget";

export default function ApplicationRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ApplicationLayout/>} >
                    <Route index element={<NavigationIndex/>} />
                    <Route path="source" element={<NavigationSource/>} />
                    <Route path="target" element={<NavigationTarget/>} />
                </Route>
            </Routes>
        </BrowserRouter>

        //<Switch>
        //    <Route exact path="/" component={Home} />
        //    <Route exact path="/login" component={Login} />
        //    <Route exact path="/register" component={Register} />
        //    <Route exact path="/profile" component={Profile} />
        //    <Route exact path="/dashboard" component={Dashboard} />
        //</Switch>
    );
}