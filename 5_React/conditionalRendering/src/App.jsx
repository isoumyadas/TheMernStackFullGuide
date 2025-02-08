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

// export default function App() {
//   return (
//     <div>
//       <Drink name="tea" />
//       <Drink name="coffee" />
//     </div>
//   );
// }

// function Drink({ name }) {
//   let part, caffeine, age;

//   if (name === "tea") {
//     part = "leaf";
//     caffeine = "15–70 mg/cup";
//     age = "4,000+ years";
//   } else if (name === "coffee") {
//     part = "bean";
//     caffeine = "80–185 mg/cup";
//     age = "1,000+ years";
//   }

//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{part}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{caffeine}</dd>
//         <dt>Age</dt>
//         <dd>{age}</dd>
//       </dl>
//     </section>
//   );
// }

// Solution 1:
// const userData = [{ username: "sam", isLoggedIn: false }];

// export default function App() {
//   return <UserLoggedIn userData={userData} />;
// }

// function UserLoggedIn({ userData }) {
//   return (
//     <div>
//       {userData.map((user) => // dont use map for single user!
//         user.isLoggedIn ? (
//           <h1 key={user.username}>{`Welcome ${user.username}`}</h1>
//         ) : (
//           <h1 key={user.username}>{`Please Log in....`}</h1>
//         )
//       )}
//     </div>
//   );
// }

// solution 2
// const user = { userName: "soumya", isPremiumUser: true };
// export default function App() {
//   return <PremiumUserContent userData={user} />;
// }

// function PremiumUserContent({ userData }) {
//   return (
//     <div>
//       <h1 key={userData.userName}>{`Welcome, ${userData.userName}!`}</h1>

//       <p>
//         {userData.isPremiumUser && <b>Hello this is premium user content</b>}
//       </p>
//     </div>
//   );
// }

//solution 3

// export default function App() {
//   return <DarkMode />;
// }

// function DarkMode() {
//   const mode = true;
//   return (
//     <div>
//       <h1>React is awesome</h1>
//       <p>{mode ? "You're in Dark mode" : "You're in Light Mode"}</p>
//     </div>
//   );
// }

// solution 4

// export default function App() {
//   return <HasError />;
// }

// function HasError() {
//   const hasError = false;
//   return (
//     <p style={hasError ? { color: "red" } : { color: "inherit" }}>Hello</p>
//   );
// }

// solution 5

export default function App() {
  return <UserRole />;
}

function UserRole() {
  const userRole = "user";
  return userRole === "admin" ? <AdminPanel /> : <UserPanel />;
}

function AdminPanel() {
  return <h1>Welcome Admin</h1>;
}

function UserPanel() {
  return <h1>Welcome User</h1>;
}
