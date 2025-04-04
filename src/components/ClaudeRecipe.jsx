import ReactMarkdown from "react-markdown"
import {CgSpinner} from "react-icons/cg"

export default function ClaudeRecipe(props) {

    const isLoading = props.isLoading;

    return (

        <section className="suggested-recipe-container" aria-live="polite">

            <h2>Chef Dally Recommends</h2>

            {isLoading ? (
                <div className="loading-spinner">
                <CgSpinner className="spinner-icon" />
                <p>Cooking up a recipe...</p>
                </div>
            ) : (
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            )}
            
        </section>
    )
}
