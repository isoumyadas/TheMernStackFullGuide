import PropTypes from "prop-types";

function Card({ name = "John", userAge, listOne }) {
  // React have access of props (og-syntax) -> props creates an object (where it stores the arguments as keys where the arguments are callled, in our case we called name in App.jsx) | you can use {} -> destrcturing method. where you can do this Card({name, userAge, listOne})

  //   console.log(props.name);
  console.log(name);
  console.log(userAge);
  console.log(listOne);

  return (
    <>
      <div className="bg-stone-300 text-black p-9 border-4 border-amber-600 border-solid rounded-lg">
        <h5>{name}</h5>
        <h6>Card subtitle</h6>
        <p>{userAge}</p>
        <a href="#">{listOne || 1}</a>
        <a href="#">Another link</a>
      </div>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  userAge: PropTypes.number.isRequired,
  listOne: PropTypes.number.isRequired,
};

export default Card;
