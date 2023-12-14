function Button({ btnType, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
