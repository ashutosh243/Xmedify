import FaqItem from "./FaqItem";

const FaqRight = () => {
  const faqs = [
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development."
    },
    {
      question: "How do I use React with Tailwind?",
      answer: "Install Tailwind in your React project and use Tailwind classes in your JSX."
    },
    {
      question: "Can I animate the FAQ toggle?",
      answer: "Yes! You can use Tailwind transition classes or libraries like Framer Motion."
    }
  ];

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-xl ">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      </div>
    </div>
  );
};

export default FaqRight;