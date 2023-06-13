import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Shop() {
    const [dailyItems, setdailyItems] = useState([])

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/shop/br');
        const items = await data.json()
        setdailyItems(items.data.daily.entries)
    }
    
    return (
        <div>
            <h1>SHOP</h1>
            <div className="Shop">
                {
                    dailyItems.map((item, index) =>
                        <Link key={index} className="Item" to={`/shop/${item.items[0].id}`}>
                            <h3>{item.items[0].name}</h3>
                            <p>{item.items[0].description}</p>
                            <h6>Added on {item.items[0].added}</h6>
                            <img src={item.items[0].images.featured}></img>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default Shop;
