import React from 'react';
import PropTypes from 'prop-types'
import {getPriceAndNameBreakfast} from '../controller/firestoreController'





const BtnInit=({value})=>(
    <button type="button" className="">
   {value}
    </button>
);

const CompBtnOrders=()=>(
<div className="">
<a href="/orders">

<BtnInit value="PEDIDO"/>
</a>
</div>
)


const CompBtnKitchen=()=>(
    <div className="">
   <a href="/kitchen">
       
  <BtnInit value="COCINA"/>
   </a>
    </div>
)







const Home = () => {
    return (
        <div className="">
            <div>
         <header className="">
         <div className="">
         </div>
         <div className="">
        </div>
         </header>
         <main className="">
             <CompBtnOrders/>
             <CompBtnKitchen/>
             <button   onClick={()=>getPriceAndNameBreakfast().then(res=>console.log(res))}> SEND  </button>


             </main>            
             </div>
        </div>
    );
};

BtnInit.propTypes={
    value:PropTypes.string.isRequired,
}



export default Home;