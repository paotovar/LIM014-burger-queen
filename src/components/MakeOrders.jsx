import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';



import {BtnMenu,BtnBreakfast,BtnDrinks} from './BtnFoodType';
import {
    getPriceAndNameBreakfast,
    getPriceAndNameMenu,
    getPriceAndNameDrinks,
    sendOrder,
} from '../controller/firestoreController';
import {
    BreakfastView,
    MenuView,
    DrinksView,
} from './FoodByType';

const MakeOrders=()=>{
   const [breakfastData,setBreakfastData]= useState([]);

   const [menuData,setMenuData]=useState([]);
   const [drinksData,setDrinksData]=useState([]);
   const[selectType,setSelectType]=useState('0');
   
   const filterSelectType=(str)=>{
      setSelectType(str);

   }

   const initialStateOrder = {
       name:'',
       items:[],

       status:'pending',
   };

   const [order,setOrder]= useState(initialStateOrder);

   const updateClient=(e)=>{
       const {name,value}=e.target;
       setOrder({...order,[name]:value});
   };

   const addPropertiesToOrder=(price,name,id)=>{
       const item={
           amount:1,
           price,
           name,
           id,
           total:1*price,
       };
     
       const findID=order.items.find((element)=>element.id===id);
       let arrItems=[];
       if(findID===null){
           findID.amount+=1;
       }else{
           arrItems=order.items.push(item);
       }
      
       setOrder((prevState)=>({
         ...prevState,
         arrItems,

       })); 
   };

    const totalPriceByProduct=(id,count)=>{
      let prueba =order.items.find((obj)=>obj.id===id);

       prueba = Object.assign(prueba,{total:prueba.price*count});
      setOrder((prevState)=>({
          ...prevState,
          items:[...order.items],
      }));
    };

   const addOne=(id)=>{
     const itemSelected=order.items.find((e)=>e.id===id);
     itemSelected.amount+=1;
     setOrder({...order,items:itemSelected.amount});
     totalPriceByProduct(id,itemSelected.amount);
   };
   
   const lessOne=(id)=>{
     const itemSelected=order.items.find((e)=>e-id===id);
     if(itemSelected.amount>1){
         itemSelected.amount-=1;
     }
     setOrder({...order,items:itemSelected.amount});
    totalPriceByProduct(id,itemSelected.amount);
   };

   const deleteItem=(id)=>{
     order.items.splice(id,1);
     setOrder((prevState)=>({...prevState,order}));
   };

   const sendFirestore=()=>{
       sendOrder(order);
       setOrder({...initialStateOrder});
   };
   
   
   const renderComponentTypeFood=()=>{
       switch(selectType){
        case '1':
            return(
                <MenuView
                menuData={menuData}
                addPropertiesToOrder={addPropertiesToOrder}
                />
            );
        case '2':
            return(
              <DrinksView
              drinksData={drinksData}
              addPropertiesToOrder={addPropertiesToOrder}
               />
            );
        default:
            return(
                <BreakfastView
                breakfastData={breakfastData}
                addPropertiesToOrder={addPropertiesToOrder} 
                />
            );
       }
   };

   MenuView.propTypes={
       menuData:PropTypes.arrayOf.isRequired,
   };

   BreakfastView.propTypes={
      breakfastData:PropTypes.arrayOf.isRequired,
   };

   DrinksView.propTypes={
       drinksData:PropTypes.arrayOf.isRequired,
   };

   useEffect(()=>{
     getPriceAndNameBreakfast().then((arr)=>setBreakfastData(arr));
     getPriceAndNameMenu().then((arr)=>setMenuData(arr));
     getPriceAndNameDrinks().then((arr)=>setDrinksData(arr));
   },[]);
  

   return(
    <div>

    <div className="flexRow">
      <div className="flexColumn">
        <div className="flexRow">
          <BtnBreakfast filterSelectType={filterSelectType} />
          <BtnMenu filterSelectType={filterSelectType} />
          <BtnDrinks filterSelectType={filterSelectType} />
        </div>
        <div className="">
          {renderComponentTypeFood()}
        </div>
      </div>
      
      


      <div className="flexRow">
        <div className="" />
        <div className="" />
        <div className="">
          <input
            className=""
            placeholder="cliente"
            type="text"
            name="name"
            value={order.name}
            onChange={updateClient}
          />


          <p className="">
            PARA:
            <span>{order.name}</span>
          </p>
          
          <div className="">
            <div className="">
              <div className="">
                {
                order.items.map((obj) => (
                  <div className="" key={obj.id}>
                    <button id="" type="button" onClick={() => addOne(obj.id)} className="">
                     
                    </button>
                    <div className="">
                      <span id="">{obj.amount}</span>
                    </div>
                    
                    
                    <button
                      id=""
                      type="button"
                      onClick={() => lessOne(obj.id)}
                      className=""
                    >
               
                    </button>
                    
                    
                    <div className="">
                      <span className="">{obj.name}</span>
                    </div>
                    
                    
                    <div className="">
                      <span className="">
                        S/
                        {obj.total}
                      </span>
                    </div>
                    
                    <button type="button" onClick={() => deleteItem(obj.id)} className="">
              
                    </button>
                  </div>
                
                
                
                ))
              }
              </div>
            </div>
          </div>
         
         
          <div className="">
            <div className="">
              <span>
                TOTAL DE PEDIDO: S/
                {order.items.reduce((acum, obj) => acum + obj.price * obj.amount, 0)}
              </span>
            </div>
            
            <div className="">
              <button
                className=""
                type="button"
                onClick={sendFirestore}
              >
                ENVIAR
              </button>
              <button
                className=""
                type="button"
              >
                ANULAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 
 
 
 
  
  </div>
);
   
};

export default MakeOrders;
