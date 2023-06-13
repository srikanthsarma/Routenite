import { useParams } from "react-router-dom";


function Item() {
    const {id} = useParams()

    return (
        <div className="Item">
            <h1>ITEM {id}</h1>
        </div>
    );
}

export default Item;
