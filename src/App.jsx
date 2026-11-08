import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import { auth } from "./services/firebaseConfig";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { listenerVendas, cadastrarVenda } from "./services/realtimeDB";

function App() {
  const [user, setUser] = useState(null);
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    let unsubscribeVendas;

    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUser(user);

      if (user) {
        unsubscribeVendas = listenerVendas(
          user,
          (snapshot) => setVendas(Object.values(snapshot.val()) || []),
          (error) => console.log(error),
        );
      }
    });

    return () => {
      unsubscribeVendas?.();
      unsubscribeAuth();
    };
  }, []);

  return (
    <div className="w-full h-dvh bg-background">
      {!user ? <Login /> : <Home vendas={vendas} />}

      <nav className="fixed bottom-4 mx-auto w-full h-12">
        <ButtonGroup className="mx-auto p-2">
          <Button variant="outline">Pagamentos</Button>
          <Button variant="outline">Produção</Button>
          <Button variant="outline">Desempenho</Button>
        </ButtonGroup>
      </nav>
    </div>
  );
}

export default App;
