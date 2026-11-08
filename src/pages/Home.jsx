import { Card, CardContent } from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemMedia,
  ItemDescription,
  ItemActions,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { MdShowChart } from "react-icons/md";
import { FaPix } from "react-icons/fa6";

import { FaMoneyBill } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { useState } from "react";

import { auth } from "@/services/firebaseConfig";

function Home({ vendas }) {
  const [data, setData] = useState(new Date());

  const paymentsIcons = {
    pix: <FaPix className="text-cyan-600" />,
    dinheiro: <FaMoneyBill className="text-green-700" />,
  };

  return (
    <div className="w-full grid mt-2 gap-2">
      <Card className="shadow-md">
        <CardContent className="flex flex-col items-center gap-4">
          <Input
            type="date"
            className="w-max text-sm"
            value={data.toISOString().slice(0, 10)}
          ></Input>

          <h1 className="text-primary font-bold text-3xl">R$ 12,00</h1>

          <div className="flex flex-col gap-1">
            <span className="flex gap-1 items-center text-xs">
              <MdShowChart className="text-green-800" />
              <p className="text-muted-foreground">R$ 5,00</p>
            </span>

            <span className="flex gap-1 items-center text-xs">
              <MdShowChart className="text-green-800" />
              <p className="text-muted-foreground">R$ 5,00</p>
            </span>
          </div>
        </CardContent>
      </Card>

      <div className="w-full grid gap-2">
        {vendas.map((v) => (
          <Item variant="outline" className="shadow-md">
            <ItemContent>
              <ItemTitle>{v.valor}</ItemTitle>
              <ItemDescription>{v.descricao}</ItemDescription>
            </ItemContent>

            <ItemMedia variant="icon">
              {paymentsIcons[v.metodoPagamento] ??
                paymentsIcons[v.metodoPagamento]}
            </ItemMedia>
          </Item>
        ))}
      </div>

      <Button className="fixed right-4 bottom-16 size-12 rounded-full shadow-md z-50">
        <FaDollarSign className="size-6" />
      </Button>
    </div>
  );
}

export default Home;
