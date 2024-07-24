  import  PropTypes from "prop-types"
  const ProductDetail=[
  {
    starRate:4.7,
    profile:"pngwing.com (10).png",
    productName:"Gaming Laptop",
    originalCostest:40000,
    offerCostest:35000,
    description:"i5 12Gen intel processer, 15'5 inch display, 144Hz, ",
    dailyOffer:"Low price"
  },
  {
    starRate:4.7,
    profile:"pngwing.com (10).png",
    productName:"Gaming Laptop",
    originalCostest:40000,
    offerCostest:35000,
    description:"i5 12Gen intel processer, 15'5 inch display, 144Hz, ",
    dailyOffer:"Low price"
  },
  {
    starRate:4.7,
    profile:"pngwing.com (10).png",
    productName:"Gaming Laptop",
    originalCostest:40000,
    offerCostest:35000,
    description:"i5 12Gen intel processer, 15'5 inch display, 144Hz, ",
    dailyOffer:"Low price"
  },
  {
    starRate:4.7,
    profile:"pngwing.com (10).png",
    productName:"Gaming Laptop",
    originalCostest:40000,
    offerCostest:35000,
    description:"i5 12Gen intel processer, 15'5 inch display, 144Hz, ",
    dailyOffer:"Low price"
  },
  {
    starRate:4.7,
    profile:"pngwing.com (10).png",
    productName:"Gaming Laptop",
    originalCostest:40000,
    offerCostest:35000,
    description:"i5 12Gen intel processer, 15'5 inch display, 144Hz, ",
    dailyOffer:"Low price"
  },
  {
    starRate:4.7,
    profile:"pngwing.com (10).png",
    productName:"Gaming Laptop",
    originalCostest:40000,
    offerCostest:35000,
    description:"i5 12Gen intel processer, 15'5 inch display, 144Hz, ",
    dailyOffer:"Low price"
  },
]
  
  
  
  
  function ProductDesign(props){
    return( 
        <>
        <div className="container">
            <p id="starRate">{props.starRate}</p>
            <img src={props.profile} alt=" water bottle"/>
            <h3  className="productName">{props.productName}</h3>
            <h4 className="productCost">{`${props.originalCostest}`}</h4>
            <h4 className="offerPrice">{`$${props.offerCostest}`}</h4>
            <p className="description">{props.description}</p>
            <h3 className="dailyOffer">{props.dailyOffer}</h3>
        </div>
        </>
    )
  }

export const ProductCard =()=>{
    return(
        <>
        {ProductDetail.map((product,index)=>(
            <ProductDesign key={index}  starRate={product.starRate} profile={product.profile} productName={product.productName} originalCostest={product.originalCostest}
            offerCostest={product.offerCostest} description={product.description} dailyOffer={product.dailyOffer} />
        ))}
        
        </>
    )
}

ProductDetail.propsType={
    starRate:PropTypes.number.isRequired,
    offerCostest:PropTypes.number.isRequired,
    riginalCostest:PropTypes.number.isRequired,
    profile:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    productName:PropTypes.string.isRequired,
    dailyOffer:PropTypes.string.isRequired,


}
