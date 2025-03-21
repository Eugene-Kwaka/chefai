export default function IngredientsList(props) {

    // Map through the ingredients array and create a list item for each ingredient.
    const ingredientsListItems = props.ingredients.map(ingredient => (

        <li key={ingredient}>{ingredient}</li>
    ));

    return (
        <section>
            <h2>Ingredients on hand:</h2>

            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>


            {/* Render the get recipe button only if there are more than 3 ingredients in the ingredients[] state */}
            {props.ingredients.length > 3 && (

                <div className="get-recipe-container"  ref={props.ref}>

                    <h3>Ready for a recipe?</h3>

                    <p>Generate a recipe from your list of ingredients.</p>

                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            )}
        </section>
    )
}
