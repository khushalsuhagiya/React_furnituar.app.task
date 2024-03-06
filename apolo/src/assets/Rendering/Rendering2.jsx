import { recipes } from './data2';

 function RecipeList() {
    return (
        <div>
            <h1 className=' text-5xl font-bold m-5'>Recipes</h1>
            {recipes.map(recipe =>
                <div key={recipe.id}>
                    <h2 className=' text-2xl font-bold mt-5'>{recipe.name}</h2>
                    <ul className=' text-xl ml-7 '>
                        {recipe.ingredients.map(ingredient =>
                            <li key={ingredient}>
                                {ingredient}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
     );
}
export default RecipeList




// import { recipes } from './data.js';

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//         <div key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {recipe.ingredients.map(ingredient =>
//               <li key={ingredient}>
//                 {ingredient}
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }