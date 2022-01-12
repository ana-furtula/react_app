import Product from '../components/Product';

function Products({products}){
    return (
        <>
        <div className="custom-product">
         <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

        <div className="carousel-inner">
            {products.map((prod)=>(<Product product = {prod} carousel={1} key={prod.id}></Product>))}
        </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>

    <div className="trending-wrapper">
        <h3>Trending products</h3>
        <div>
            {products.map((prod)=>(<Product product = {prod} carousel={0} key={prod.id}></Product>))}
        </div>
    </div>
</div>
        </>
    );
}

export default Products;