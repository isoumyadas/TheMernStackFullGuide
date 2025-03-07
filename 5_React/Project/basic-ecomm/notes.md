### Mistakes and their Solutions

1. #### If you get an error:

   Error handled by React Router default ErrorBoundary: TypeError: Cannot read properties of undefined (reading 'map')

   #### Solution: Then remember to use condition for it

   ```javascript
   function Card({ products }) {
     if (!products) {
       return <p>Loading Data...</p>; // Handle missing data gracefully
     }
     return (
       <>
         {products.products ? (
           products.products.map(
             (
               product // you can add ? to check if the data is available or not or else you can use if condition or ternary operator.
             ) => (
               <div key={product.id}>
                 <ul>
                   <img src={product.images} />
                   <p>{product.title}</p>
                 </ul>
               </div>
             )
           )
         ) : (
           <p>Loading Products...</p>
         )}
       </>
     );
   }
   ```
