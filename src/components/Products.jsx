import Product from "./Product";

export default function Products({ items }) {
  return (
      <div className="w-full px-[25px] flex gap-[15px] flex-wrap justify-between overflow-y-auto">
        {items.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            category={item.category}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
            title={item.title}
          />
        ))}
      </div>
  );
}
