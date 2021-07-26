import React from 'react'
import HeroItem from './HeroItem'

function Superhero({ id, name, description, hero_attributes, image, extention }) {
    console.log("in superhero")
    return (
        <div className="superhero-div">
            <h1 >Name: {name}</h1>
            <h2 >Character ID: {id}</h2>
            <h3>Description: {description}</h3>
            <h4>Info for {name}: </h4>
            <ol className="superhero-list">
                {
                    Object.entries(hero_attributes).map(([key, value]) => {

                        if (Array.isArray(value) && key === "items") {
                            {/* <ul className="item-list">
                                {
                                    value.map(item_val => {
                                        //<li>{JSON.stringify(item_val)}</li>
                                        return <HeroItem />
                                    })


                                }


                            </ul> */}
                            return <li>
                                <HeroItem
                                    json_list={value}
                                />
                            </li>


                        } else {
                            return <li>{key}: {value}</li>
                        }

                    })
                }

            </ol>
            {console.log(image + "/portrait_small." + extention)}
            <h3>Image of {name}: </h3>
            <img className="superhero-image" src={image + "/portrait_medium." + extention} alt="" />
        </div >
    )
}

export default Superhero

