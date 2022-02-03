## Available Scripts

### getting start:

```
yarn start
```

### testing app:

```
yarn test
```

### build app:

```
yarn build
```

# components

## Button.js

### To send data to the button you must send an object to the Button component with key Info as props like this:

```bash
<Buttons Info={nameYourObject}>
```

### property you can send:

### routeButton:

#### if you want have Link from react-router-dom you should pass route to this property and your route must be **String**.

#### **Note:** you must choose (typeButton.linkButton) to true and if you don't send route as props your default will be homePage("/") if you don't want to go to homePage don't change route to null because make for you bug

### nameButton:

#### this is for define your name button and your data must be **String**.

### colorButton:

#### you can choose some customized colors for buttons. if you want to define the specific color you should define (sx) property.

- colors
  - primary
  - secondary

### typeButton:

#### this property specifies your type button.it is an object with 3 keys:

```bash
typeButton:{
   linkButton:true,
   button:"submit"||"button",

}
# linkButton must be  boolean
# button must be string and have two property

```

#### **Note:** if you don`t specify your type button your button will be simple button with type button

**Note:** You must send style as props if you don't send style as props you will get an error because in **Link Button** style destructure from**Info**

### eventButton:

#### this property accept a function


### activeStyle
####  default is null but if you want to have the active style you can pass it a true and when the button is active you will have border-bottom