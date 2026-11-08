import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";

function Login() {
  return (
    <div className="fixed inset-0">
      <Card className="w-full max-w-md absolute -translate-x-1/2 left-1/2 top-1/12 m-2">
        <CardContent>
          <form id="loginForm" className="flex flex-col gap-6">
            <Field>
              <FieldLabel>
                Email <span className="text-destructive">*</span>
              </FieldLabel>
              <Input type="email" required></Input>
            </Field>

            <Field>
              <FieldLabel>
                Senha
                <span className="text-destructive">*</span>
              </FieldLabel>
              <Input type="password" required></Input>
            </Field>
          </form>
        </CardContent>

        <CardFooter>
          <div className="grid gap-6 w-full">
            <Button form="loginForm" type="submit">
              Entrar
            </Button>

            <div className="grid">
              <Button type="button" variant="ghost">
                <FcGoogle />
                Entrar com o Google
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
