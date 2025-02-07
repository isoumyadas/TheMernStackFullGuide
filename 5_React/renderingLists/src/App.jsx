// import users from "./data";

// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// function App() {
//   const listItems = people.map((person) => <li>{person}</li>);
//   const chemists = users.filter((p) => p.profession === "chemist");
//   const personList = chemists.map((person) => (
//     <li key={person.id}>
//       <b>{person.name}</b>
//       {" :  " + person.profession}
//     </li>
//   ));
//   console.log(chemists);
//   return (
//     <>
//       <ul>{listItems}</ul>
//       <div>{personList}</div>
//     </>
//   );
// }

// solution 2

// import { people } from "./newData";

// function App() {
//   const filteredPeople = people.filter((p) => p.profession === "chemist");
//   const data = filteredPeople.map((person) => (
//     <li key={person.id}>
//       <p>
//         <b>{person.name}:</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));

//   const otherPeople = people.filter((p) => p.profession !== "chemist");
//   const otherData = otherPeople.map((person) => (
//     <li key={person.id}>
//       <p>
//         <b>{person.name}:</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));

//   return (
//     <article>
//       <h1>Scientists</h1>

//       <h3>Chemist</h3>
//       <ul>{data}</ul>

//       <h3>Other`s</h3>
//       <ul> {otherData}</ul>
//     </article>
//   );
// }

// solution 3

// import { recipes } from "./recepies.js";

// // solution 4
// function Recipe({ name, ingredients }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map((p) => (
//           <li key={p}>{p}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((p) => (
//         <Recipe key={p.id} {...p} />
//       ))}
//     </div>
//   );
// }

// Solution 5
// import { categories } from "./categories";

// function App() {
//   return <Category />;
// }

// function Category() {
//   return (
//     <div>
//       {categories.map((c) => (
//         <div key={c.category}>
//           <h1>{c.category}</h1>
//           <ul>
//             {c.subcategories.map((sub) => (
//               <li key={sub}>{sub}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// solution 6

const arr = ["apple", "banana", "cherry"];

function App() {
  return <Transform words={arr} />;
}

function Transform({ words }) {
  return (
    <div>
      {words.map((a) => (
        <h2 key={a}>{a.toUpperCase()}</h2>
      ))}
    </div>
  );
}

export default App;
