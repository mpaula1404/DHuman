import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 hidden lg:block">
        <img src="/images/image 16.png" />
      </div>
      <div
        className={cn("flex flex-col justify-center w-1/2 px-20", className)}
        {...props}
      >
        <Card className="w-full max-w-md">
          <CardHeader className="items-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-20 h-20 mb-2 mx-auto"
            />
            <CardTitle className="text-2xl text-center font-bold">
              Bienvenido a DHuman
            </CardTitle>
            <CardDescription className="text-center">
              Ingresa tu correo electrónico para iniciar sesión
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-4">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Correo"
                    required
                  />
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="remember"
                      className="cursor-pointer"
                    />
                    <label htmlFor="remember">Mantener sesión iniciada</label>
                  </div>
                  <a href="#" className="text-blue-700 hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-600 hover:bg-slate-700 cursor-pointer"
                  onClick={() => (window.location.href = "/inicio")}
                >
                  Ingresar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
