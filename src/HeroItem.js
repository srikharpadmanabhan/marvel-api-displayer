import React from 'react'

function HeroItem({ json_list }) {
    return (
        <div className="hero-item">
            <label>Items: </label>
            <ul className="hero-item-list">
                {json_list.map(item_val => (
                    <li>
                        <ul>
                            {//JSON.stringify(item_val, null, '    ')
                                Object.entries(item_val).map(([key, value]) => (
                                    <li>{key}: {value}</li>
                                ))
                            }
                        </ul>


                    </li>



                ))};


            </ul>
        </div>

    );

}

export default HeroItem;