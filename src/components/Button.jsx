function Button({ label, type = "primary", onClick }) {
  return (
    <button
      className={`btn ${type}`}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  );
}

export default Button;