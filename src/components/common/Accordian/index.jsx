import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const Accordion = ({ question, answer, index, openIndex, onToggle }) => {
  const isOpen = openIndex === index;

  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium">{question}</span>

        <span className="text-xl">
          {isOpen ? (
            <HiOutlineChevronUp className="text-white" />
          ) : (
            <HiOutlineChevronDown className="text-white" />
          )}
        </span>
      </button>

      {isOpen && <p className="mt-3 text-white/70 leading-relaxed">{answer}</p>}
    </div>
  );
};

export default Accordion;
