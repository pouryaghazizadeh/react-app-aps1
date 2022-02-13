# Button documentation

### This component can become simple button , Link(react-router-dom)also accept simple icon or icon have link

---

## `Props`

### To send data as props to the button you must send an object to the Button component with key **buttonInfo** like this:

```bash
<Buttons buttonInfo={nameYourObject}/>
```

### property you can send:

| property button | types      |
| --------------- | ---------- |
| typeButton      | `object`   |
| routeButton     | `String`   |
| nameButton      | `String`   |
| colorButton     | `String`   |
| eventButton     | `Function` |
| iconInfo        | `Object`   |

## `typeButton:`

#### this property specifies your type button.it is an object with 3 keys:

```bash
typeButton:{
   linkButton:true,
   button:"button",
}
# linkButton must be  boolean
```

#### **Note:** if you don`t specify your type button your button will be simple button with type button

---

## `routeButton:`

#### if you want have Link from react-router-dom you should pass route to this property and your route must be **String**.

#### **Note:** you must choose (typeButton.linkButton) to true and button become Link.If you don't send route as props,your default route will be homePage("/").and don`t change default route to null because it will make for you bug.
---

## `nameButton:`

#### this is for define your name button and your data must be **String**.
---
## `colorButton:`
#### This props will be value color.color is property that mui provide and you can use default color  mui for more information check the default color in mui and document Button api.
### [document button mui](https://mui.com/api/button/)

####  If you want to define the specific color you should define and pass it to (sx).
---

### eventButton:

#### this property accept a function 
---

### activeStyle

#### default is null but if you want to have the active style you can pass it a true and when the button is active you will have border-bottom
