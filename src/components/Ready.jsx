import React from 'react';
const ReadyOrder = ({ readyOrder }) => {
    // eslint-disable-next-line no-lone-blocks
    {console.log(readyOrder)}
    return (
        <div>
          {readyOrder.map((obj) => (
            <div className="">
              <div key={obj.id} className="">
                <div className="">
                  <p>{obj.name}</p>
                  <p>{obj.hour.toLocaleString()}</p>
                  {obj.items.map((objItem, index) => (
                    <ul className="" key={index}>
                      <li>
                        <div className="">
                          <span>{objItem.amount}</span>
                        </div>
                        <span>{objItem.name}</span>
                      </li>
                    </ul>
                  ))}
                  {/* <button type="button" onClick={() => handleClick(obj.id)}>
                    <img src={send} alt="Envía orden a Listo" />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default ReadyOrder;