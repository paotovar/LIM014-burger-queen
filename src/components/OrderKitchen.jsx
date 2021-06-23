import React from 'react';
import PropTypes from 'prop-types';

import { updateStatus } from '../controller/firestoreController';

const EnteredOrder = ({ enteredOrder }) => {
  const handleClick = (id) => {
    enteredOrder.find((obj) => obj.id === id);
    const newStatus = 'list';
    updateStatus(id, newStatus);
  };
  EnteredOrder.propTypes = {
    enteredOrder: PropTypes.arrayOf.isRequired,
  };

  return (
    <div>
      {enteredOrder.map((obj) => (
        <div className="">
          <div key={obj.id} className="">
            <div className="">
              <p>{obj.name}</p>

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
              <button type="button" onClick={() => handleClick(obj.id)}>
 
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnteredOrder;