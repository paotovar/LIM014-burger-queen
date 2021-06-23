
import "firebase/firestore";
import Firebase from "../firebaseConfig";

const db= Firebase.firestore();
const food=db.collection('food');

export const getPriceAndNameBreakfast=()=>food.where('category','==', 'breakfast').get().then( (snapshot)=>{
    const foodBreakfast=[];
    snapshot.forEach(doc=> {
     const breakfastObject={
         price:doc.data().price,
         name:doc.data().name,
         id:doc.id,
     };
     foodBreakfast.push(breakfastObject);

    });
 return foodBreakfast;
}
)

.catch((error)=>{
    console.log("Error",error);
}
);

export const getPriceAndNameMenu=()=>food.where('category','==','menu').get().then((snapshot)=>{
    const foodMenu=[];
    snapshot.forEach((doc) => {
        const menuObject={
            price:doc.data().price,
            name:doc.data().name,
            id:doc.id,
        };
        foodMenu.push(menuObject);
    });
    return foodMenu;
}
);

export const getPriceAndNameDrinks=()=>food.where('category','==','drinks').get().then(
(snapshot)=>{
    const foodDrinks=[];
    snapshot.forEach(doc => {
        const drinksObject={
            price:doc.data().price,
            name:doc.data().name,
            id:doc.id,
        }
        foodDrinks.push(drinksObject);
    });
return foodDrinks;
}
);

export const sendOrder=(obj)=>{
  db.collection('orders').doc().set(obj)
  .then(()=>{
      console.log("se envio la orden");
  }
  )
  .catch((error)=>{
    console.log("Ocurrió un error al enviar la orden",error);
    });
};

export const getOrdersReady=()=> db.collection('orders').where('status','==','list').get().then(
    (snapshot)=>{
        const ordersReady=[];
        snapshot.forEach(doc => {
            const objectReady={

                items:doc.data().items,
                name:doc.data().name,
                status:doc.data().status,
                id:doc.id,
            };
            ordersReady.push(objectReady);
        });
        return ordersReady;
    }
)
.catch(error=>
    console.log(error)
)

export const getOrders=()=>db.collection('orders').get().then((snapshot)=>{
    const arrayOrders=[];
    snapshot.forEach(doc => {
        const objectOrder={
            
            items:doc.data().items,
            name:doc.data().name,
            status:doc.data().status,
            id:doc.id,
        };
        arrayOrders.push(objectOrder)

    });
return arrayOrders;
})

.catch((error)=>console.log(error));

export const updateStatus=(id,newStatus)=>{
    db.collection('orders').doc(id).update(
        {
            status:newStatus,
        }
    );
};
