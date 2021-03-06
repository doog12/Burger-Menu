# Burger menu by Doog12

Burger menu based on Vanila JS and CSS(SCSS)  

![linkedin](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)
## Technologies
- HTML5
- BEM
- **SCSS**
- **Vanilla JS**

## Files Description
```bash
|-- Burger Menu
    |-- index.html
    |-- css
    |   |-- burger.css
    |   |-- burger.scss
    |   |-- style.css
    |   |-- style.scss
    |   |-- _header.scss
    |   |-- _vars.scss
    |-- js
        |-- burger.js
```
```burger.scss``` - burger styles

```burger.css``` - compiled burger styles

```burger.js``` - burger script

## Usage

- Layout the markup into `index.html`
```html
<body>

  <header class="header">
     /* Code of your navigation */
     
     
     
   /* Creating burger-menu button */
   
      <div class="burger-menu">
          <span></span>
          <span></span>
          <span></span>
      </div>
      
   /* --------------------------- */
  </header>
  
  /* ----------- Burger menu navigation ------------------------ */
  
   <div class="burger-nav">
      <li><a href="#" class="burger-nav__link">Main</a></li>
      <li><a href="#" class="burger-nav__link">Price</a></li>
      <li><a href="#" class="burger-nav__link">About Us</a></li>
      <li><a href="#" class="burger-nav__link">Contacts</a></li>
   </div>
  
  /* ----------------------------------------------------------- */
  
</body>

```

- Add burger styles to ```index.html```
```html
<head>
  <link rel="stylesheet" href="css/burger.css">
</head>
```
> Or import SCSS-file ```@import "burger.scss"```


- Include the script file before tag ```</body>```
```html
<body>
/* code */ 

  <script src="burger.js"></script>
</body>
```
- Сhange screen width in `@media`
    > You need to change the width in the media query to the width at which the burger menu should appear on your site.
```css
    @media (max-width: "YOUR WIDTH") {
      .burger-menu {
        display: block;
      }
      .nav {
        display: none;
      }
    }
```

## Contact 
Telegram: @doog121
