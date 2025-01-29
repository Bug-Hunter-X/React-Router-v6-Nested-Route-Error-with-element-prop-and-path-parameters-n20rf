# React Router v6 Nested Route Bug

This repository demonstrates a bug in React Router v6 when using nested routes with the `element` prop and path parameters.  The bug occurs when a route with path parameters is nested inside another route that also uses the `element` prop.

## Bug Description

When navigating to a nested route with path parameters in this scenario, React Router throws an error.  The exact error message varies but generally indicates an issue with the route matching or rendering.

## Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Navigate to `/users/123` (or any other valid `userId`).

You will observe the error in the console.

## Solution

The solution involves restructuring the routes to avoid nesting routes with path parameters directly within routes using the `element` prop.  Instead, use a `useParams` hook inside the parent component to extract the parameter.