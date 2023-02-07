import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Table, Tbody, Tr, Td, Tfoot, Th } from "@chakra-ui/react";
import "./Cart.css";
function Cart({ cart, setCart }) {
  let [total, setTotal] = useState(0);
  let [cartChanged, setCartChange] = useState(false);
  const handleRemoveFromCart = (id) => {
    const newCart = cart;
    newCart.splice(id, 1);
    setCart(newCart);
    setCartChange(!cartChanged);
  };
  useEffect(() => {
    if (cart.length === 0) {
      setCart([]);
    }
    total = 0;
    if (cart.length > 0) {
      cart.map((book) => {
        total += book.price;
      });
    }
    setTotal(total);
  }, [cartChanged]);
  return (
    <div>
      <h2 className="heading">Cart</h2>
      <Table className="flex-row" variant="striped" colorScheme="teal">
        <Tbody>
          {cart.map((book, i) => (
            <Tr key={i} id={i}>
              <Td>
                <img
                  src={book.image}
                  alt={book.name}
                  className="img-thumbnail-table mx-1"
                />
              </Td>
              <Td>
                <p>{book.title}</p>
                <p>By: {book.author}</p>
                <p>{book.description}</p>
              </Td>
              <Td>
                <p>${book.price}</p>
              </Td>
              <Td>
                <Button
                  colorScheme="red"
                  onClick={(e) => {
                    handleRemoveFromCart(
                      e.target.parentElement.parentElement.id
                    );
                  }}
                >
                  Remove From Cart
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th>
              <strong>Total</strong>
            </Th>
            <Th>
              <p>{total}</p>
            </Th>
            <Th>
              <Link to="/thankyou">
                <Button colorScheme="facebook">Buy</Button>
              </Link>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </div>
  );
}

export default Cart;
