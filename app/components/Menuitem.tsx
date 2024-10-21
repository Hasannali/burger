import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = ()=> {
    const productImages = [
        "https://img.freepik.com/free-photo/delicious-burger-studio_23-2151846502.jpg?t=st=1728392297~exp=1728395897~hmac=247891e3f35c0ceb40b5eb1b3f53dd427b0561e0b7a1cb4f76817f2ba5e24e38&w=740",
        "https://img.freepik.com/free-photo/delicious-burger-studio_23-2151846503.jpg?t=st=1728392640~exp=1728396240~hmac=f1ed4a5c0fca97ae22b313da01d610123043d514050755304f5c1cd03283c794&w=740",
        "https://img.freepik.com/free-vector/hand-drawn-pattern-background_23-2150905271.jpg?t=st=1728392698~exp=1728396298~hmac=fa3ecfa8596dd519cc2cbc4dfbfed06712e71e9889c531f9120aaad4a5f5c0e3&w=740",
        "https://static.vecteezy.com/system/resources/previews/012/055/559/non_2x/homemade-burger-with-beef-cheese-and-onion-marmalade-on-a-wooden-board-fast-food-concept-american-food-photo.jpg",
        "https://static.vecteezy.com/system/resources/previews/023/809/530/non_2x/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg",
        "https://static.vecteezy.com/system/resources/previews/025/008/974/non_2x/food-meat-burger-sandwich-snack-fat-fast-food-hamburger-beef-fast-generative-ai-photo.jpg",
    ];
    
    return (
        <div className="relative text-center p-10">
            <div className="absolute inset-0"
            style={{
                backgroundImage:`url(https://img.freepik.com/free-vector/falling-realistic-burger-chalkboard-background_79603-1043.jpg?t=st=1728396090~exp=1728399690~hmac=12ffee4edceed834d6b59b306c564ac6645920afbbbf98570e5a773913f95e53&w=740)`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                zIndex:0,
                opacity:0.1,
            }}/>
                <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">Most Requested item{""}</h1>
                <h1 className="text-3xl text-white z-10 relative">Order Now...!</h1>

                <section 
                id='Projects'
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-x-14 gap-y-20 mt-10 mb-5">
                    {Array.from({length: 6}).map((_,index) => (
                        <div key={index} className="w-70 bg-white rounded-xl shadow-md duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
                            <a href="">
                                <img src={productImages[index]} 
                                alt={`Product${index + 1}`} 
                                className="h-80 w-72 rounded-t-xl object-cover"/>
                                <div className="px-4 py-3 w-72">
                                    <span className="text-slate-500 mr-3 uppercase text-xs">Category{""}</span>
                                    <p className="text-lg font-bold text-red-400  truncate block capitalize">Burger Name {index + 1}</p>
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-black my-3 cursor-auto">$149</p>
                                        <del>
                                            <br />
                                            <p className="text-sm text-blue-800 cursor-auto ml-2"> {""}199</p>
                                        </del>
                                        <div className="ml-auto">
                                        <FaShoppingCart  className="h-5 w-5 text-blue-800"/>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </section>
            </div>
        
    )
}
export default ProductCardGrid;