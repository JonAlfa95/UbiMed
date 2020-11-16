import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Mapa from './Mapa';
import Buscador2 from './Buscador2';

import '../css/Index.css';

const Index = () => {
    const [items, setItems] = useState([])
    const [query, setQuery] = useState('');

    useEffect( () => {
    const getFarmacias = async () => {
        const result = await axios.get(
        `http://localhost:4000/user?nombre=${query}`
        )

        setItems(result.data)
    }

    getFarmacias()
    }, [query] )

    return ( 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="espacio">
                            <Buscador2 getQuery={(q) => setQuery(q)} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="espacio">
                        <Mapa items={items} />
                    </div>
                </div>
            </div>
    );
}
 
export default Index;