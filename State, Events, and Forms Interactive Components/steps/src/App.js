const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

export default function App() {
  let step = 1;

  function handlePrevious() {
    console.log("PREV");
  }

  function handleNext() {
    console.log("NExt");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[0]}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "white" }} onClick={handlePrevious}>
          Prevorious
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "white" }} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
