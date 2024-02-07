import products from "./Products";
function ShoppingList() {
    const listItems = products.map(product => {
        return (
            <li
                key={product.id}
                style={{
                    color: product.isFruit ? 'magenta' : 'darkgreen'
                }}
            >
                {product.title}
            </li>
        );
    });

    return (
        <ul>{listItems}</ul>
    )

    }

export default ShoppingList