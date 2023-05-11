import PreciosJustos from "./precios_justos.webp";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";

const Footer = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h4>Buscar Tienda</h4>
                    </div>

                    <div className="col">
                        <h4>Ayuda</h4>
                    </div>

                    <div className="col">
                        <h4>Acerca de Nike y sus productos</h4>
                    </div>

                    <div className="col">
                        <a href="https://www.nike.com.ar/143?map=productClusterIds" target={"_blank"}><img src=
                        {PreciosJustos} alt={"Precios Justos"} width={110} /></a>
                    </div>

                    <div className="col-md-4 text-end">
                        <a href="https://www.facebook.com/nike"><img src={facebook} alt={"Facebook"} width={60} /></a>
                        <a href="https://www.instagram.com/nike"><img src={instagram} alt={"Instagram"} width={60} /></a>

                    </div>


                </div>
            </div>    

            
        </div>
    )
}

export default Footer;