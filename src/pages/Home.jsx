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
import { useEffect, useState } from "react";

import { auth } from "@/services/firebaseConfig";

function Home({ vendas }) {
  const [data, setData] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const paymentsIcons = {
    pix: <FaPix className="text-cyan-600" />,
    dinheiro: <FaMoneyBill className="text-green-700" />,
  };

  return (
    <div className="w-full grid gap-2 px-2">
      <div className="sticky top-0 z-50">
        <Card
          className={`shadow-md transition-all duration-300 ${!scrolled ? "bg-background" : "bg-primary"}`}
        >
          <CardContent
            className={
              !scrolled
                ? `flex flex-col items-center`
                : "flex items-center gap-2"
            }
          >
            <Input
              type="date"
              className={`w-full max-w-sm text-xs ${scrolled ? "bg-background" : ""}`}
              value={data.toISOString().slice(0, 10)}
            ></Input>

            <h1
              className={
                !scrolled
                  ? "text-center text-primary font-bold text-3xl"
                  : "font-medium text-xl text-background text-center w-full"
              }
            >
              R$ 1.000,00
            </h1>

            <div
              className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${scrolled ? "opacity-0 max-h-0" : "opacity-100"}`}
            >
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
      </div>

      <section className="grid gap-4">
        <div>
          <h1 className="mb-2 text-muted-foreground text-xs text-center">
            Vendas
          </h1>

          <div className="grid gap-2">
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
        </div>
      </section>

      <Button className="fixed right-4 bottom-24 size-12 rounded-full shadow-md z-50">
        <FaDollarSign className="size-6" />
      </Button>
    </div>
  );
}

export default Home;
