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

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <div class="trending-wrapper">
        <h3>Trending products</h3>
        <div>
            {products.map((prod)=>(<Product product = {prod} carousel={0} key={prod.id}></Product>))}
        </div>
        {/* @foreach($products as $product)
        <div class="trending-item">
            <a href="detail/{{$product['id']}}">
                <img class="trending-image" src="{{$product['gallery']}}"/>
                <div class="">
                    <h4>{{$product['name']}}</h4>
                </div>
            </a>
        </div>
        @endforeach */}
    </div>
</div>
        </>
    );
}

export default Products;