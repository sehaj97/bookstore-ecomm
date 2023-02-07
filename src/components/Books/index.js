import { Button } from "@chakra-ui/react";
import "./Books.css";
function Books({ mockData, cart, setCart }) {
  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div>
      <h2 className="heading">Books</h2>
      <div className="flex-row">
        {mockData.map((book, i) => (
          <div key={book.name} className="card-margin">
            <div className="btn-add">
              <Button
                colorScheme="facebook"
                onClick={() => handleAddToCart(book)}
              >
                Add to Cart
              </Button>
            </div>
            <img
              src={book.image}
              alt={book.name}
              className="img-thumbnail mx-1"
            />
            <p>PRICE: ${book.price}</p>
            <p>{book.title}</p>
            <p>By: {book.author}</p>
            <p>Description: {book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
