import React from 'react';



const PlaceOrders=()=>(
<div className="">
    <a href="/orders-menu">
        <button type="button" className="">
            <span className="">
             HACER PEDIDO
            </span>

        </button>
    </a>
</div>
)

const ViewOrders=()=>(
 <div>
 <a href="/">
<button type="button" className="">
    <span className="">
    PEDIDOS LISTOS
    </span>

</button>
 </a>
 </div>
)







const WaiterChoice = () => {
    return (
        <div>
            
       <main className="">
           <PlaceOrders/>
           <ViewOrders/>

       </main>

        </div>
    );
};

export default WaiterChoice;