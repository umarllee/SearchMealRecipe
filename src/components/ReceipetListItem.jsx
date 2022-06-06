import React from 'react'
import './receiptList.css'


export default function ReceipetList({ receipts }) {
    return (
        <div className="listContainer">
            {
                receipts.map((t) =>
                    <div className="listItem" key={t.recipe.calories}>
                        <h2 className="itemTitle">{t.recipe.label}</h2>

                        <img src={t.recipe.image} alt="" className="foodImg" />

                        <div className="calory">
                            Energy: {t.recipe.calories.toFixed(0)} kKal
                        </div>



                        <h3 className="ingredientsTitle">Ingredients: </h3>
                        {t.recipe.ingredients.map(i => <li className="ingredients" > {i.text} </li>)}

                        <h3 className="healthLabel"> Health label</h3>

                        {t.recipe.healthLabels.map(i => <li className="healthLabelItem"> {i} , </li>)}


                        <a href={t.recipe.url} target="_blank" rel="noreferrer" className="moreLink"> Show more <i className="fa fa-external-link"></i> </a>
                    </div>
                )
            }
        </div>
    )
}
