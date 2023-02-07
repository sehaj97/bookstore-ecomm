import { Outlet, Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

function Nav() {
  return (
    <>
      <header className="sticky-top">
        <Flex>
          <Box>
            <h2>
              <a href="/">
                <span role="img" aria-label="camera">
                  {" "}
                  📸
                </span>{" "}
                BooksTORE
              </a>
            </h2>
          </Box>
          <Spacer />
          <Box>
            <nav>
              <ul className="flex-row">
                <li>
                  <Link to="/">
                    <Button colorScheme="teal" variant="solid">
                      Books
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <Button colorScheme="teal" variant="solid">
                      Cart
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </Box>
        </Flex>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
