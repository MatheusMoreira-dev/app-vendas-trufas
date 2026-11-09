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
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Avatar, AvatarImage, AvatarFallBack } from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";
import { MdShowChart } from "react-icons/md";
import { FaPix } from "react-icons/fa6";

import { FaMoneyBill } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { useEffect, useState } from "react";

function Home({ user, vendas }) {
  const [openForm, setOpenForm] = useState(false);
  const [data, setData] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
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
    <div>
      <header className="h-16 bg-primary sticky top-0 z-50 w-full">
        <div className="mx-auto"></div>
      </header>

      <main className="w-full grid gap-2 px-2">
        <div className="sticky top-20 z-50 my-5">
          <Card
            className={`shadow-md transition-all duration-300 ${!scrolled ? "bg-background" : "bg-primary"}`}
          >
            <CardContent
              className={
                !scrolled
                  ? `flex flex-col items-center gap-2`
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

        <section className="grid gap-2">
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
        </section>
      </main>

      <Button
        onClick={() => setOpenForm(true)}
        className="fixed right-4 bottom-24 size-12 rounded-full shadow-md z-50"
      >
        <FaDollarSign className="size-6" />
      </Button>

      <nav className="fixed bottom-8 mx-auto w-full h-12">
        <ButtonGroup className="mx-auto p-2">
          <Button variant="outline">Pagamentos</Button>
          <Button variant="outline">Produção</Button>
          <Button variant="outline">Desempenho</Button>
        </ButtonGroup>
      </nav>

      {/* Form de Nova Venda */}
      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Cadastrar Venda</DialogTitle>
          </DialogHeader>

          <DialogFooter>
            <DialogClose>Cancelar</DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Home;
