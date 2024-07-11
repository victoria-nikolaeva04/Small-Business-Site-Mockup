class Card extends HTMLElement {
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

            .product-card{
                background-color: var(--blue);
                width: 190px;
                height: 230px;
                padding: .8em;
                position: relative;
                overflow: visible;
                border-radius: 16px;
                margin-right: 25px;
                margin-left: 20px;
            }

            .product-image{
                height: 80%;
                width: 100%;
                border-radius: 8px;
            }

            .product-text{
                color: var(--off-white);
            }
        </style>

        <div class="product-card">
            <img src="images/temp.png" alt="product-image" class="product-image">
            <span class="product-text">
                <p>$$$ || Product Name</p>
                <p></p>
            </span>
        </div>

      `;
    }
  }
  
  customElements.define('card-component', Card);