import FetchRoute from "./FetchRoute";
import {Link, Outlet} from "react-router-dom"

export default function FetchMain(){
return(
<div>
<Link to="/Urun">Ürün Görünütle</Link>
<Link to="/Urunler">Ürünler</Link>
<Link to="/">Anasayfa</Link>
<Outlet/>
</div>
)
}