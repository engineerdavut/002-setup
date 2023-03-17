import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FetchGet } from "./FetchGet";
import { FetchList } from "./FetchList";
import FetchMain from "./FetchMain";

export default function FetchRoute(){
return(
<div>
<BrowserRouter>
<Routes>
<Route path="/" element={<FetchMain/>}>
<Route path="Urunler" element={<FetchList/>}/>
<Route path="Urun" element={<FetchGet/>}/>
</Route>
</Routes>
</BrowserRouter>
</div>
)
}