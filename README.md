# Shipper Dashboard

Web based dashboard for Shipper with only Driver Page available.

Demo available at: [https://shipper-cyan.vercel.app/drivers](https://shipper-cyan.vercel.app/drivers)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you already have yarn or npm installed on your machine. If not, please take a look at this link below.

[https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install)

### Installing

After that, install required dependencies by executing this command on terminal

```
yarn install
# or
npm install
```

After instalation success, run command below to make your code available in development mode.

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to see the website

## Development

We are using git flow for development purpose. Please use this prefix for branches on spesific use case of development

### 1. feature/branch_name
Checkout from branch `develop` and create `feature/branch_name` for creating new feature.

### 2. hotfix/branch_name
Checkout from branch `master` and create `hotfix/branch_name` for creating hotfix or immediate fix on production.

## Running on production
Kindly use this command to build app for production and serve it.

```
yarn build && yarn start
```

Open [http://localhost:3000](http://localhost:3000) to see the website

## Deployment

For this project we are using [Vercel](https://vercel.com/) because it is easy and support Create React App project.
It has built in CI/CD to detect changes/merge on default branch to create new build.

## Components

### `Page`
Page wrapper with built in sidebar and header. Use this on every Page please. Example Usage:

```js
import Page from 'components/Page';

class HomePage extends Component {
  render() {
    <Page>
      // my components
    </Page>
  }
}

export default HomePage;
```

### `Button`
Resuable Button with build in style. Built with Button. Example usage:

```js
<Button
  icon={AnIcon}
  label="Click Me!"
  onClick={() => {/** do something */}}
/>
```

### `FloatingButton`
Resuable Rounded FloatingButton with build in style. Built with Button. Example usage:

```js
<FloatingButton
  icon={SomeIcon}
  onClick={() => {/** do something */}}
/>
```

### `Card`
Resuable Card with build in style. Example usage:

```js
<Card>
  // children(s)
</Card>
```

### `TextInput`
Resuable TextInput with build in style. Built with input type text. Example usage:

```js
<TextInput
  icon={AnIcon}
  onChange={(e) => {/** do something */}}
/>
```

### `Text`
Resuable Text with build in style. Example usage:

```js
<Text
  color="brand"
  weight="bold"
  size="small"
/>
```

### `ProfilePicture`
Resuable Rounded Image with build in style. Built with img. Example usage:

```js
<ProfilePicture
  size="small"
  src={AnImage}
/>
```

## Built With

* [Create React App](https://github.com/facebook/create-react-app) - The web framework used
* [Styled Components](https://styled-components.com/) Used to styling component
* [React Minimal Chart](react-minimal-pie-chart) Used for create Donut Chart
* [Grommet Icons](https://github.com/grommet/grommet-icons) for Icons
* [React Router Dom](https://www.npmjs.com/package/react-router-dom) for Routing

## Authors

* **Faiz Azmi Rekatama** - *Initial work* - [faizrktm](https://github.com/faizrktm)
