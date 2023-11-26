const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
      ? "text-white border-violet-500"
      : "text-[#ADB7BE] border-white hover:border-slate-500";
    return (
      <button
        className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    );
  };
  
  export default ProjectTag;
