export default function Cart({id, category, description, image, price, rating, title}) {

    return (
        <div className="">
            <p>id : {id}</p>
            <p>category : {category}</p>
            <p>description : {description}</p>
            <p>image : {image}</p>
            <p>price : {price}</p>
            <p>rating count : {rating.count} rating rate : {rating.rate}</p>
            <p>title : {title}</p>
            <hr />
        </div>
    )
}