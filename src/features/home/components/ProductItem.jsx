export default function ProductItem({
    id, 
    title,
    description,
    image,
    price,
    rate,
    rateCount
}) {
    return (
        <div className="">
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{description}</p>
            <p>{rate}({rateCount})</p>
            <p>{price}$</p>
        </div>
    )
}