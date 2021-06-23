import React from 'react';
import PropTypes from 'prop-types';


const BtnFoodType =({food})=>(
    <div className="">
        <span className="">{food}</span>

    </div>

);

export const BtnBreakfast=({filterSelectType})=>(
<div className="">
    <button type="button" className="" onclick={()=>filterSelectType('0')} >
 <BtnFoodType food='Desayuno'/>
    </button>
</div>
)

export const BtnMenu=({filterSelectType})=>( <div className="">
<button type="button" className="" onClick={()=>filterSelectType('1')}>
<BtnFoodType food="Menu"/>
</button>
    </div>
)

export const BtnDrinks=({filterSelectType})=>(
    <div>
   <button type="button" className="" onClick={()=>filterSelectType('2')}>
   <BtnFoodType food="bebidas"/>
   </button>
    </div>
)

BtnBreakfast.propTypes={
    filterSelectType:PropTypes.func.isRequired,
};

BtnMenu.propTypes={
    filterSelectType:PropTypes.func.isRequired,
};

BtnDrinks.propTypes={
    filterSelectType:PropTypes.func.isRequired,
};
