import {
  Container,
  Grid,
  useTheme,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";

const ColHeading = dynamic(() => import("../components/colHeading"), {
  ssr: false,
});

export default function Pricing() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: "6%",
      }}
    >
      <Typography variant="h2" gutterBottom>
        <ColHeading title={"Great value for money"} size={"115%"} />
      </Typography>
      <Grid container spacing={8}>
        {[1, 2, 3].map((el: any) => (
          <Grid key={el} item xs={12} sm={12} md={4} lg={4} xl={4}>
            <PricingCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function PricingCard() {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: "primary",
      }}
      className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:border-gray-700"
    >
      <h5
        style={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
        className="mb-4 text-xl font-medium"
      >
        Standard plan
      </h5>
      <div className="flex items-baseline">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">49</span>
        <span className="ml-1 text-xl font-normal">/month</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex space-x-3 items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={theme.palette.secondary.main}
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight">
            2 team members
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={theme.palette.secondary.main}
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight">
            20GB Cloud storage
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={theme.palette.secondary.main}
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight">
            Integration help
          </span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={theme.palette.secondary.main}
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight">
            Sketch Files
          </span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={theme.palette.secondary.main}
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight">
            API Access
          </span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={theme.palette.secondary.main}
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight">
            Complete documentation
          </span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={theme.palette.secondary.main}
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight">
            24×7 phone & email support
          </span>
        </li>
      </ul>
      <Button variant="contained" color="primary">
        Choose plan
      </Button>
    </Paper>
  );
}
