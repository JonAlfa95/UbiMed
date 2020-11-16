import React, { Fragment, useState } from 'react';

import '../css/Buscador2.css';

const Buscador2 = ({getQuery}) => {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return ( 
        <Fragment>
            <div className="card col s8 offset-s2 radius">
               <div className="row">
                    <div className="col s10 offset-s1">
                    <input type="text" name="" placeholder="Buscar" value={text} onChange={(e) => onChange(e.target.value)} autoFocus />
                    </div>
               </div>
            </div>
        </Fragment> 
     );
}
 
export default Buscador2;