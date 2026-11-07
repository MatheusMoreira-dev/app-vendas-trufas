import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

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
    <Card size="sm">
      <CardHeader>
        <CardTitle>Entre ou Cadastre-se</CardTitle>
      </CardHeader>

      <CardContent>
        <form id="loginForm">
          <Field>
            <FieldLabel>Email:</FieldLabel>
            <Input></Input>
          </Field>
          <Field>
            <FieldLabel>Senha:</FieldLabel>
            <Input></Input>
          </Field>
        </form>
      </CardContent>

      <CardFooter className="grid gap-2">
        <Button form="loginForm" type="submit">
          Login
        </Button>

        <Button variant="secondary">Cadastrar</Button>
      </CardFooter>
    </Card>
  );
}

export default Login;
