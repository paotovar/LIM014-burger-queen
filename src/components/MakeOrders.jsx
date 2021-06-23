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
      let proof =order.items.find((obj)=>obj.id===id);
      proof =Object.assign(proof,{total:proof.price*count});
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
   
   

















}
export default MakeOrders;
