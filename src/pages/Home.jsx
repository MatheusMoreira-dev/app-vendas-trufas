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

import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CartItem from "@/components/CartItem";

import { Input } from "@/components/ui/input";
import { MdShowChart } from "react-icons/md";
import { FaPix, FaCartShopping } from "react-icons/fa6";

import { FaMoneyBill, FaDollarSign } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import { logOut } from "@/services/login";

import { auth } from "@/services/firebaseConfig";

function Home({ vendas }) {
  const itens = [
    {
      nome: "Maracujá",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Brigadeiro",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Ninho com Nutella",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Oreo",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Oreo",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Oreo",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Oreo",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Oreo",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Oreo",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Oreo",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Oreo",
      descricao: "Maracujá",
      estoque: 12,
    },
    {
      nome: "Oreo",
      descricao: "Maracujá",
      estoque: 12,
    },
  ];

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
        <div className="size-full flex justify-between items-center px-2">
          <div className="flex gap-2 items-center">
            <Avatar className="size-8">
              <AvatarImage src={auth.currentUser.photoURL} />
              <AvatarFallback>
                {auth.currentUser.displayName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <p className="text-sm text-background line-clamp-1 max-w-[20ch]">
              {auth.currentUser.displayName}
            </p>
          </div>

          <Button
            onClick={() => logOut()}
            className="text-sm text-muted-foreground"
          >
            <span>Sair</span>
            <FiLogOut className="size-5" />
          </Button>
        </div>
      </header>

      <main className="w-full grid gap-2 px-2">
        <div className="sticky top-18 z-50 my-4">
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

      <nav className="fixed bottom-8 mx-auto w-full h-12 bg-background">
        <ButtonGroup className="mx-auto p-2">
          <Button variant="outline">Pagamentos</Button>
          <Button variant="outline">Produção</Button>
          <Button variant="outline">Desempenho</Button>
        </ButtonGroup>
      </nav>

      {/* Form de Nova Venda */}
      <Sheet open={openForm} onOpenChange={setOpenForm}>
        <SheetContent side="bottom" showCloseButton={false}>
          <form className="h-[80dvh] flex flex-col">
            <Tabs className="flex min-h-0 flex-1 flex-col">
              <TabsList variant="line">
                <TabsTrigger value="carrinho">
                  <FaCartShopping /> Carrinho
                </TabsTrigger>

                <TabsTrigger value="pagamento">
                  <FaDollarSign />
                  Pagamento
                </TabsTrigger>
              </TabsList>

              <TabsContent value="carrinho" className="flex min-h-0 flex-1">
                <div className="flex-1 flex flex-col min-h-0 gap-3 overflow-y-auto">
                  {itens.map((v) => (
                    <CartItem item={v} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col h-12 border w-full px-2 py-4">
              <span className="text-xl">R$12,00</span>
              <span className="">2x Maracujá, 3x Ninho com nutella</span>
            </div>

            <SheetFooter className="px-0 flex flex-col gap-2">
              <div className="flex gap-2 w-full px-2">
                <SheetClose className="flex-1">Cancelar</SheetClose>

                <Button className="flex-1" type="submit">
                  Salvar
                </Button>
              </div>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Home;
