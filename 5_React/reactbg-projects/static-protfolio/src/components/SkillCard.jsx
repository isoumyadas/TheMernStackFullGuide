import PropTypes from "prop-types";

export default function SkillCard({ skillName, experience, called }) {
  return (
    <div className="my-6 bg-black shadow-sm rounded-lg w-96 h-96 flex flex-col justify-between  items-center p-5">
      <div className="flex flex-col gap-2 justify-center h-88 text-xl font-bold ">
        <h3>Skill Name: {skillName} </h3>
        <p>Exp: {experience} </p>
        <p>Named: {called} </p>
      </div>

      <div>
        <button className=" bg-blue-500 rounded-2xl p-3 font-bold">
          Check Project
        </button>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  skillName: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  called: PropTypes.string.isRequired,
};
