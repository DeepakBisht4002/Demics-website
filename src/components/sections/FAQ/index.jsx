import MuiAccordian from "../../common/MuiAccordian";


const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer branding, digital marketing, SEO, social media management and more.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most projects take 2–6 weeks depending on the scope and requirements.",
  },
  {
    question: "Do you provide long-term support?",
    answer: "Yes, we have monthly retainer plans.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer branding, digital marketing, SEO, social media management and more.",
  },
];

const FAQ = () => {
  return (
    <section className="w-full flex justify-center py-20">
      <div className="max-w-[800px] w-full px-5 md:px-0 text-white">
        <h2 className="text-4xl font-medium mb-10 text-left">FAQs</h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <MuiAccordian
              key={index}
              id={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
