
import './App.css';



function App() {
 
  const shoppingCartData=[{
    // firstcard
    isSalebutton:false,
    resolutionSize:"450 x 300",
    productName:"Fancy Product",
    productPrice:"$40.00 - $80.00",
    isRatingAvailable:false,
    isViewOption:true,
    isAddToCart:false,
    starimage:" ",
    newprice:"",
    option6:false,
   
  
  },
  {
  //secondcard
    isSalebutton:true,
    resolutionSize:"450 x 300",
    productName:"special Item",
    productPrice:"$20.00 $18.00",
    isRatingAvailable:true,
    isViewOption:false,
    isAddToCart:true,
    starimage:" ⭐⭐⭐⭐⭐",
    newprice:"$18",
    option6:true,
   
  
  },
  {
    //thirdcard
    isSalebutton:true,
    resolutionSize:"450 x 300",
    productName:"Sale Item",
    productPrice:"$40.00 - $80.00",
    isRatingAvailable:false,
    isViewOption:false,
    isAddToCart:true,
    starimage:" ",
    newprice:" ",
    option6:false,
   
  
  },
  {
    //fouthcard
    isSalebutton:false,
    resolutionSize:"450 x 300",
    productName:"Popular Item",
    productPrice:"$40.00 - $80.00",
    isRatingAvailable:true,
    isViewOption:false,
    isAddToCart:true,
    starimage:"⭐⭐⭐⭐⭐",
    newprice:"$40",
    option6:true,
   
    
  
  },
  {
    //fifthcard
    isSalebutton:true,
    resolutionSize:"450 x 300",
    productName:"Sale Item",
    productPrice:"$50.00 $25.00",
    isRatingAvailable:false,
    isViewOption:false,
    isAddToCart:true,
    starimage:" ",
    newprice:"",
    option6:false,
   
  
  },
  {
    //sixthcard
    isSalebutton:false,
    resolutionSize:"450 x 300",
    productName:"Fancy Product",
    productPrice:"$120.00 - $280.00",
    isRatingAvailable:false,
    isViewOption:true,
    isAddToCart:false,
    starimage:" ",
    newprice:"",
    option6:false, 
   
   
  
  },
  {
    //seventhcard
    isSalebutton:true,
    resolutionSize:"450 x 300",
    productName:"Special Item",
    productPrice:"$20.00 $18.00",
    isRatingAvailable:true,
    isViewOption:false,
    isAddToCart:true,
    starimage:"⭐⭐⭐⭐⭐",
    newprice:"$18",
    option6:true,
  
  
  },
  {
    //eighthcard
    isSalebutton:false,
    resolutionSize:"450 x 300",
    productName:"Popular Item",
    productPrice:"$40.00",
    isRatingAvailable:true,
    isViewOption:false,
    isAddToCart:true,
    starimage:"⭐⭐⭐⭐⭐",
    newprice:"$40",
    option6:true,
 
  
  },
  ]
  return (
    <div className="App">
    <div className="top-hav-bar">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">All Produts</a></li>
            <li><a className="dropdown-item" href="/">Popular Items</a></li>
            <li><a className="dropdown-item" href="/">New Arrivals</a></li>
          </ul>
        </li>
        <button type="button" className="btn btn-outline-dark">Cart</button>
      </ul>
    </div>
  </div>
</nav>

    </div>
    
    <div className="advertisement">
    <p className="text-001"><b>Shop in Style</b></p>
    <p className="text-002">With this shop hompeage template</p>
    <br/>
    <br/>
    <br/>
   <div className="nowdoit">
   {shoppingCartData.map((bk, index) => (
  <ShoppingItems 
    key={index} 
    isSalebutton={bk.isSalebutton} 
    resolutionSize={bk.resolutionSize} 
    productName={bk.productName}
    productPrice={bk.productPrice} 
    isRatingAvailable={bk.isRatingAvailable} 
    isViewOption={bk.isViewOption} 
    isAddToCart={bk.isAddToCart} 
    starimage={bk.starimage} 
    newprice={bk.newprice} 
    option6={bk.option6} 
 
  />
))}
   </div>
   

    </div>
    
    </div>
  );
}

export default App;

function ShoppingItems({ isSalebutton,
  resolutionSize,productName,productPrice,
  isRatingAvailable,isViewOption,isAddToCart,starimage, newprice, option6})
  {

  return(
    <div className="pomodoro">
       <div className="myitems">
      <div className="productHeader">
      {isSalebutton ?<button className="salesbutton">Sales</button> : " "}
       
       <h3 className="movethis">{resolutionSize}</h3>
      </div>
        
        <h3 className="sizeofproductnames">{productName}</h3>
        {isRatingAvailable? <p className="prc-1">{starimage}</p> : <p className="prc-2">{productPrice}</p>}
        {option6? <p className="juan">{newprice}</p> : " "}
    

        {isViewOption? <button className="viewbutton">View options</button> : <button className="aass">Add To Cart</button>}
        
     

       </div>
       


    </div>


    
    );
}
