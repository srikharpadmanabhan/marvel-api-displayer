import React from 'react'

function URLItem({ id, name, description, hero_attributes, image, extention }) {
    return (
        <div className="url-div">
            <h1 >Name: {name}</h1>
            <h2 >Character ID: {id}</h2>
            <h3>Description: {description}</h3>
            <h4>Items for {name}: </h4>
            <ol className="url-list">
                {hero_attributes.map(url_item => (
                    <li>
                        <ul>
                            {Object.entries(url_item).map(([key, value]) => (
                                <li>{key}: {value}</li>
                            ))
                            }

                        </ul>

                    </li>
                ))


                }

            </ol>

            <img className="url-image" src={image + "/portrait_small." + extention} alt="" />
        </div >
    )
}

export default URLItem