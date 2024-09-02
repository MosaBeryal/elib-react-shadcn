import { Link } from "react-router-dom";
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
import { useForm, SubmitHandler } from "react-hook-form";
import {
  RegistrationFormInputs,
  registrationSchema,
} from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInputs>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationFormInputs> = (data) => {
    console.log("Data submitted:", data);
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Register Now !</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Name</Label>
                <Input
                  id="first-name"
                  placeholder="Max"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-end text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </section>
  );
}

export default RegistrationPage;
