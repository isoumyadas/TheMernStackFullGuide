import SkillCard from "./components/SkillCard";

function App() {
  const skills = ["HTML", "Javascript", "React"];
  const experience = ["3yrs", "2yrs", "1w"];
  const called = [
    "Markup Language",
    "Scripting Language",
    "Javascript Library",
  ];
  return (
    <>
      <h1 className="font-bold text-3xl flex justify-center">
        Skill Section Card design{" "}
      </h1>
      <div>
        <div className="w-full h-screen flex justify-center items-center gap-4">
          <SkillCard
            skillName={skills[0]}
            experience={experience[0]}
            called={called[0]}
          />
          <SkillCard
            skillName={skills[1]}
            experience={experience[1]}
            called={called[1]}
          />
          <SkillCard
            skillName={skills[2]}
            experience={experience[2]}
            called={called[2]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
