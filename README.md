# FactoryFour

**Status page for the FactoryFour APIs.**

In order to visualize what APIs are up or down, we will build a dashboard to allow visualize
the FactoryFour APIs status.

**To consider**

*The code should be easy to read, understand, and change. For example,
a customer success rep might need to change the 15-second interval to
a 10-second interval. Someone with a limited working knowledge of JS
should be able to find that line of code, change it on a branch in GitLab,
and tag you for approval. Choose variable and file names that will help
people grok your code with minimal effort.*

Seek for this constant:
```
HEALTH_STATUS_UPDATE_INTERVAL
```

## Visual Representation
![buttons](https://github.com/gabrr/api-health-status/blob/main/Screenshot%202024-03-06%20at%2011.11.43.png?raw=true)
![dashboard](https://github.com/gabrr/api-health-status/blob/main/preview.gif?raw=true)

## Start the project
Install dependencies and start the project
```
yarn && yarn dev
```

## About the project

It's a `Next JS` application using `Typescript` and `Tailwind` with `clsx`.

It uses SOLID principles and good patterns.

It also uses React hooks, as you can see `useHealthStatus.tsx`.

It was designed previously in `Figma` and then translated into code.

### Responsive Design
You try using it on a smaller screen 370px or 4k, it will look good.
