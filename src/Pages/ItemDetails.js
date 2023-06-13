import { useParams } from "react-router-dom";


function Item() {
    const {id} = useParams()
    // const {id} = params

    console.log(id)
    return (
        <div className="Item">
            <h1>ITEM {id}</h1>
        </div>
    );
}

export default Item;
