import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import { auth } from "./services/firebaseConfig";
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
      {!user ? <Login /> : <Home user={user} vendas={vendas} />}
    </div>
  );
}

export default App;
