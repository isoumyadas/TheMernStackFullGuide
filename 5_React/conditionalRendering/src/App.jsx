// solution 1

// function App() {
//   return (
//     <>
//       <section>
//         <h1>Sally Ride's Packing List</h1>
//         <ul>
//           <Item isPacked={true} name="Lana del rey" />
//           <Item isPacked={true} name="Helmet with a golden leaf" />
//           <Item isPacked={false} name="Photo of Tam" />
//         </ul>
//       </section>
//     </>
//   );
// }

// function Item({ isPacked, name }) {
//   // return <li>{isPacked ? `${name} ✅` : `${name} ❌`}</li>;
//   return (
//     <li>
//       {name} {isPacked ? "✅" : "❌"}
//     </li>
//   );
// }

// Solution 2

// function App() {
//   return (
//     <>
//       <section>
//         <h1>Sally Ride's Packing List</h1>
//         <ul>
//           <Item importance={9} name="Space suit" />
//           <Item importance={0} name="Helmet with a golden leaf" />
//           <Item importance={6} name="Photo of Tam" />
//         </ul>
//       </section>
//     </>
//   );
// }

// function Item({ name, importance }) {
//   return (
//     <li className="item">
//       {name}
//       {importance > 0 && " "}
//       {importance > 0 && <i>(Importance : {importance})</i>}
//     </li>
//   );
// }

// export default App;

// Soluition 3

export default function App() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

function Drink({ name }) {
  let part, caffeine, age;

  if (name === "tea") {
    part = "leaf";
    caffeine = "15–70 mg/cup";
    age = "4,000+ years";
  } else if (name === "coffee") {
    part = "bean";
    caffeine = "80–185 mg/cup";
    age = "1,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}
