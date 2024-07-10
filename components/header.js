class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            .logo{
                border-radius: 50%;
                width: 200px;
                z-index: 2;
                position: relative;
                top: 10px;

            }

            #header-name{
                font-family:'Roboto Condensed';
                position: relative;
                margin-left: 10px;
                top: 24px;
                z-index: 2;
            }

            #header-name h1 {
                margin-bottom: 0px;
                font-weight:800;
            }

            #header-name h4 {
                font-style: italic;
                margin-top: 3px;
            }

            .nav-container{
                position: relative;
                margin-left: 3%;
                margin-top: 70px;
                display: block;
            }

            .toggle-button {
                display: none;
                background: none;
                border: none;
                font-size: 1.5em;
                cursor: pointer;
                padding: 5px;
            }

            .nav-button{
                background-color: var(--blue);
                color: var(--off-white);
                border-radius: 16px;
                margin-right: 15px;
                width: 120px;
                align-items: baseline;
                padding: 8px 15px 8px 15px;
                border-width: 0px;
                font-size: 15px;
            }

            /* Toggle Nav */
            @media screen and (max-width: 750px) {
                .nav-container {
                    display: none;
                }

                .nav-bar{
                    display: flex;
                    flex-direction: column;
                    margin-left: 20%;
                    margin-bottom: 5%;
                    position: absolute;
                    left: 25px;
                    bottom: 50px;
                    
                }

                .nav-button{
                    margin-bottom: 5px;
                    width: 5%s;
                }

                .toggle-button {
                    display: block;
                }
            }

            .icon{
                border-radius: 100%;
                background-color: var(--blue);
                color: var(--off-white);
                width:3%;
                height: 5%;
                padding: 5px;
            }

            #sign-up-icon{
                position: absolute;
                top: 8px;
                right: 16px;
            }

            .header-container{
                margin-top: 15px;
                margin-left: 15px;
                display: flex;
                flex-direction: row;
            }

            .header-border{
                background-color: var(--grey);
                text-align: center;
                font-size: 10px;
                padding: 8px;
                position: relative;
                top: -33px;
                z-index: 1;
            }

            #toggle-icon{
                display: none;
            }

            #cart-icon{
                position: absolute;
                top: 200px;
                right: 16px;
            }
        </style>
        <header>
            <div class="header-container">
                <img src="images/temp.png" alt="logo" class="logo">
            
                <div id="header-name">
                    <h1>PIN UP</h1>
                    <h4>Let's Put a Pin in It!</h4>
                    <button class="toggle-button" onclick="toggleNav()">☰</button>
                </div>

                <div class="nav-container" id="navContainer">
                    <nav class="nav-bar" id="navBar">
                        <a href="index.html" class="nav-link"><button class="nav-button">Home</button></a>
                        <a href="product.html" class="nav-link"><button class="nav-button">Product</button></a>
                        <a href="contact.html" class="nav-link"><button class="nav-button">Contact</button></a>
                    </nav>
                </div>

                <!-- Work on Icons -->
                <img src="images/icons/user.png" alt="signIn" class="icon" id="sign-up-icon"> 
            </div>
        </header>
        <div class="header-border"></div>
        <img src="images/icons/user.png" alt="cart" class="icon" id="cart-icon">
      `;
    }
  }
  
  customElements.define('header-component', Header);