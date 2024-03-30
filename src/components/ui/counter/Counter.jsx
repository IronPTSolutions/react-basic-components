import React, { useState } from 'react';
import Panel from '../panel/Panel';

function Counter({ init, max, min }) {
  const [count, setCount] = useState(init);

  const handleCountUp = () => {
    if (count < max) {
      setCount(count + 1);
    }
  }
  const handleCountDown = () => {
    if (count > min) {
      setCount(count - 1);
    }
  }


  return (
    <Panel mode={count > 10 ? 'danger' : 'primary'}>
      <div className="d-flex flex-column align-items-center">
        <div className={count > 10 ? 'text-danger' : 'text-primary'}>{count}</div>
        <div className="d-flex mt-2 gap-2">
          <button className='btn btn-secondary btn-sm' onClick={handleCountDown} disabled={count <= min}><i className="fa fa-minus" aria-hidden="true" /></button>
          <button className='btn btn-primary btn-sm' onClick={handleCountUp} disabled={count >= max}><i className="fa fa-plus" aria-hidden="true" /></button>
        </div>
      </div>
    </Panel>
  )
}

Counter.defaultProps = {
  max: 15,
  min: -15,
  init: 0
}

export default Counter;