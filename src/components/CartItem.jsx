import {
  Item,
  ItemContent,
  ItemActions,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "./ui/item";

import { Button } from "./ui/button";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function CartItem({ item }) {
  const [quantidade, setQuantidade] = useState(0);

  function handleQuantidade(step) {
    const update = quantidade + step;
    if (update < 0 || update > item?.estoque) return;

    setQuantidade(update);
  }

  return (
    <Item>
      <ItemContent>
        <ItemHeader>
          <ItemTitle>{item?.nome}</ItemTitle>
        </ItemHeader>

        <ItemDescription>{item?.descricao}</ItemDescription>
        <span className="text-muted-foreground text-xs">
          Estoque: {item?.estoque}
        </span>
      </ItemContent>

      <ItemActions>
        <div className="flex gap-2 items-center">
          <Button
            disabled={quantidade == 0}
            variant="ghost"
            onClick={() => handleQuantidade(-1)}
          >
            <FaMinus />
          </Button>

          <span>{quantidade}</span>

          <Button
            disabled={quantidade == item?.estoque}
            variant="ghost"
            onClick={() => handleQuantidade(1)}
          >
            <FaPlus />
          </Button>
        </div>
      </ItemActions>
    </Item>
  );
}

export default CartItem;
