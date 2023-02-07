import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Books from "./components/Books";
import Thankyou from "./components/Thankyou";

function App() {
  const mockData = [
    {
      price: 67,
      title: "The Great Gatsby",
      description:
        "A novel about decadence and excess in the Jazz Age, written by F. Scott Fitzgerald.",
      author: "F. Scott Fitzgerald",
      image: "https://picsum.photos/566",
      id: 1,
    },
    {
      price: 97,
      title: "To Kill a Mockingbird",
      description:
        "A novel about racial injustice and the loss of innocence in the American South, written by Harper Lee.",
      author: "Harper Lee",
      image: "https://picsum.photos/200",
      id: 2,
    },
    {
      price: 53,
      title: "Pride and Prejudice",
      description:
        "A novel about the social norms of Georgian England and the love story of Elizabeth Bennet and Mr. Darcy, written by Jane Austen.",
      author: "Jane Austen",
      image: "https://picsum.photos/300",
      id: 3,
    },
    {
      price: 90,
      title: "1984",
      description:
        "A dystopian novel about a totalitarian state that controls every aspect of its citizens' lives, written by George Orwell.",
      author: "George Orwell",
      image: "https://picsum.photos/400",
      id: 4,
    },
    {
      price: 43,
      title: "Animal Farm",
      description:
        "A political allegory about the Russian Revolution and the rise of Stalinism, written by George Orwell.",
      author: "George Orwell",
      image: "https://picsum.photos/500",
      id: 5,
    },
    {
      id: 6,
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      description:
        "The story of a woman whose cancer cells were taken without her knowledge and became one of the most important tools in medicine.",
      price: 10,
      image: "https://picsum.photos/600",
    },

    {
      id: 7,
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      description:
        "A psychological thriller about a divorcee who becomes entangled in a missing persons investigation.",
      price: 15,
      image: "https://picsum.photos/121",
    },
    {
      id: 8,
      title: "Go Set a Watchman",
      author: "Harper Lee",
      description:
        "A sequel to To Kill a Mockingbird, exploring the later life of Scout Finch.",
      price: 20,
      image: "https://picsum.photos/189",
    },
    {
      id: 9,
      title: "The Nightingale",
      author: "Kristin Hannah",
      description:
        "A historical fiction novel about two sisters in Nazi-occupied France during World War II.",
      price: 25,
      image: "https://picsum.photos/956",
    },
    {
      id: 10,
      title: "All the Light We Cannot See",
      author: "Anthony Doerr",
      description:
        "A novel about a blind French girl and a German boy whose paths collide during the Second World War.",
      price: 30,
      image: "https://picsum.photos/876",
    },
    {
      id: 6,
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      description:
        "A dystopian novel set in a totalitarian society where women are stripped of their rights and forced into sexual servitude.",
      price: 35,
      image: "https://picsum.photos/600",
    },
    {
      id: 7,
      title: "Little Fires Everywhere",
      author: "Celeste Ng",
      description:
        "A novel about the intertwined fates of two families in a suburban town.",
      price: 40,
      image: "https://picsum.photos/700",
    },
    {
      id: 8,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      description:
        "A novel about a legendary Hollywood actress and her seven marriages.",
      price: 45,
      image: "https://picsum.photos/800",
    },
    {
      id: 9,
      title: "An American Marriage",
      author: "Tayari Jones",
      description:
        "A novel about a young couple whose marriage is tested by circumstance.",
      price: 50,
      image: "https://picsum.photos/900",
    },
    {
      id: 10,
      title: "Go Set a Watchman",
      author: "Harper Lee",
      description: "The sequel to To Kill a Mockingbird, set 20 years later.",
      price: 95,
      image: "https://picsum.photos/214",
    },
    {
      id: 11,
      title: "The Nightingale",
      author: "Kristin Hannah",
      description:
        "A novel about two sisters in Nazi-occupied France during World War II.",
      price: 120,
      image: "https://picsum.photos/190",
    },
    {
      id: 12,
      title: "A Man Called Ove",
      author: "Fredrik Backman",
      description:
        "A novel about a grumpy old man and the impact he has on his community.",
      price: 75,
      image: "https://picsum.photos/780",
    },
    {
      price: 67,
      title: "The Great Gatsby",
      description:
        "A novel about decadence and excess in the Jazz Age, written by F. Scott Fitzgerald.",
      author: "F. Scott Fitzgerald",
      image: "https://picsum.photos/345",
      id: 1,
    },
    {
      price: 97,
      title: "To Kill a Mockingbird",
      description:
        "A novel about racial injustice and the loss of innocence in the American South, written by Harper Lee.",
      author: "Harper Lee",
      image: "https://picsum.photos/530",
      id: 2,
    },
    {
      price: 53,
      title: "Pride and Prejudice",
      description:
        "A novel about the social norms of Georgian England and the love story of Elizabeth Bennet and Mr. Darcy, written by Jane Austen.",
      author: "Jane Austen",
      image: "https://picsum.photos/360",
      id: 3,
    },
    {
      price: 90,
      title: "1984",
      description:
        "A dystopian novel about a totalitarian state that controls every aspect of its citizens' lives, written by George Orwell.",
      author: "George Orwell",
      image: "https://picsum.photos/460",
      id: 4,
    },
    {
      price: 43,
      title: "Animal Farm",
      description:
        "A political allegory about the Russian Revolution and the rise of Stalinism, written by George Orwell.",
      author: "George Orwell",
      image: "https://picsum.photos/580",
      id: 5,
    },
    {
      id: 6,
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      description:
        "The story of a woman whose cancer cells were taken without her knowledge and became one of the most important tools in medicine.",
      price: 10,

      image: "https://picsum.photos/610",
    },

    {
      id: 2,
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      description:
        "A psychological thriller about a divorcee who becomes entangled in a missing persons investigation.",
      price: 15,
      image: "https://picsum.photos/234",
    },
    {
      id: 3,
      title: "Go Set a Watchman",
      author: "Harper Lee",
      description:
        "A sequel to To Kill a Mockingbird, exploring the later life of Scout Finch.",
      price: 20,
      image: "https://picsum.photos/235",
    },
    {
      id: 4,
      title: "The Nightingale",
      author: "Kristin Hannah",
      description:
        "A historical fiction novel about two sisters in Nazi-occupied France during World War II.",
      price: 25,
      image: "https://picsum.photos/453",
    },
    {
      id: 5,
      title: "All the Light We Cannot See",
      author: "Anthony Doerr",
      description:
        "A novel about a blind French girl and a German boy whose paths collide during the Second World War.",
      price: 30,
      image: "https://picsum.photos/326",
    },
    {
      id: 6,
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      description:
        "A dystopian novel set in a totalitarian society where women are stripped of their rights and forced into sexual servitude.",
      price: 35,
      image: "https://picsum.photos/650",
    },
    {
      id: 7,
      title: "Little Fires Everywhere",
      author: "Celeste Ng",
      description:
        "A novel about the intertwined fates of two families in a suburban town.",
      price: 40,
      image: "https://picsum.photos/740",
    },
    {
      id: 8,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      description:
        "A novel about a legendary Hollywood actress and her seven marriages.",
      price: 45,
      image: "https://picsum.photos/870",
    },
  ];
  const [cart, setCart] = useState([]);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route
              index
              element={
                <Books mockData={mockData} cart={cart} setCart={setCart} />
              }
            />
            <Route
              path="cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="thankyou" element={<Thankyou />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
