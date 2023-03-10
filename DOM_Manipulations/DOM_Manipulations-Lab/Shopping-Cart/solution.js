function solve() {
   let addProductButtons = document.querySelectorAll('.add-product');
   let textArea = document.querySelector('textarea');
   let checkoutButtonElement = document.querySelector('.checkout');

   let uniqueSum = 0;
   let list = [];

   for (const product of addProductButtons) {

      product.addEventListener('click', (e) => {

         let currentProductElement = e.target.parentElement.parentElement;

         let productName = currentProductElement.querySelector('.product-title').textContent;
         let productPrice = Number(currentProductElement.querySelector('.product-line-price').textContent);
         uniqueSum += productPrice;
         
         if (!list.includes(productName)) {

            list.push(productName);


         }

         textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;


      });

   }
   checkoutButtonElement.addEventListener('click', (e) => {

      textArea.value += `You bought ${list.join(', ')} for ${uniqueSum.toFixed(2)}.`;

      let buttonsElements = Array.from(document.querySelectorAll('button'));
      buttonsElements.forEach(el => el.disabled = true);
   });
}