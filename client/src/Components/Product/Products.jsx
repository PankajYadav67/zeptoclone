
// import axios from "axios";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../../Redux/products/action";

export const Products = () => {
    // const products =useSelector((store)=>store.ecommerceData.products);
    // const dispatch = useDispatch();
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const fetchDatas = async () => {
            try {
                const response = await fetch('/Data/Products/dairyProducts.json');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Fetched data:', data);
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDatas();
    }, []);

    // useEffect(() => {
    //     if(products?.length === 0){
    //         dispatch(fetchData())
    //     }

    // }, [dispatch, products?.length]); 


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                {jsonData.length === 0 && <p>No data available.</p>}

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {jsonData.map((item, index) => (
                        item.product_data.objects.map((product, productIndex) => (
                            <a key={`${index}-${productIndex}`} href={product.action} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product.image_url}
                                        alt={product.name}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </a>
                        ))
                    ))}
                </div>
            </div>
        </div>
    )
}