class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            :root {
                --off-white: #FFFAF1;
                --blue: #586994;
                --grey: #7D869C;
                --brown: #342A21;
                --green: #99B8A3;
            }

            body{
                background-color: var(--off-white);
                margin: 0px
            }

            a{
                text-decoration: none;
                color: var(--off-white);
            }

            .text{
                font-family: 'Roboto Condensed';
            }

            .default-button{
                background-color: var(--green);
                color: var(--off-white);
                border-radius: 16px;
                border-width: 0;
                padding: 7px 5px 7px 5px;
                font-size: 15px;
                cursor: pointer;
            }

            footer{
                background: var(--grey);
            }

            .footer-container{
                margin-left: 15px;
                margin-right: 15px;
                background: var(--grey);
                display: flex;
            }

            .footer-column-logo{
                float: left;
            }

            .footer-column-logo p{
                margin-left: 12px;
                color: var(--off-white);
            }

            .footer-column-links{
                margin-bottom: 4px;
                margin-left: 20px;
                color: var(--off-white);
            }

            .footer-column-links::after{
                color: var(--off-white);
            }

            .footer-column-links h4{
                margin-bottom: 6px;
                margin-left: 20px;
            }

            .footer-column-links li{
                list-style-type: none;
                margin-top: 2px;
            }

            .footer-column-links ul{
                list-style-type: none;
                text-decoration: none;
                color: var(--off-white);
            }

            .footer-column-links ul:visited{
                color: var(--off-white);
            }

            .footer-column-email{
                font-family: 'Roboto Condensed';
                color: var(--off-white);
                position: absolute;
                right: 16px;
            }

            .footer-column-email h4{
                font-family: 'Roboto Condensed';
                font-size: 15px;
                margin-bottom: 0px;
            }

            .footer-column-email p{
                font-family: 'Roboto Condensed';
                margin-top: 2px;
                font-size: 12px;
            }

            .footer-input{
                border-width: 0px;
                border-color: var(--off-white);
            }


            #logo-footer{
                width: 100px;
            }

        </style>
        <footer>
            <div class="footer-container">
                <div class="footer-column-logo">
                    <img src="images/temp.png" alt="logo" class="logo" id="logo-footer">
                    <p>copyright ©</p>
                </div>

                <div class="footer-column-links">
                    <h4>Quick Links</h4>
                    <ul style="margin-top: 3px;">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="product.html">Product</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-column-email">
                    <h4>Intrested in Store Updates?</h4>
                    <p>Sign Up!</p>

                    <form>
                        <input type="email" class="footer-input" required>
                    </form>
                    <br>

                    <button class="default-button" style="float: right;">Sign Up</button>
                </div>

            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);