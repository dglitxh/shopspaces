import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SITENAME } from "@/utils/data";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        {SITENAME}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("firstname") + " " + data.get("lastname"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("password2"),
    });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ my: "5%" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="w-full p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-700">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <form className="space-y-6" action="submit" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium ">Sign Up</h5>
            <div>
              <label
                // for="email"
                className="block mb-2 text-sm font-medium "
              >
                Your firstname
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                // for="email"
                className="block mb-2 text-sm font-medium "
              >
                Your lastname
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
                // for="email"
                className="block mb-2 text-sm font-medium "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                // for="password"
                className="block mb-2 text-sm font-medium "
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label
                // for="password"
                className="block mb-2 text-sm font-medium "
              >
                Repeat password
              </label>
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="••••••••"
                className="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  // for="remember"
                  className="ml-2 text-sm font-medium  dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <Button type="submit" variant="contained">
              Create your account
            </Button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Have an account? <Link href={"/auth/signin"}>Login</Link>
            </div>
          </form>
        </div>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
