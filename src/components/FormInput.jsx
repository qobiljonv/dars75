function FormInput({ name, label, type, placeholder, error }) {
  return (
    <div className="mb-4">
      <label className="block text-white font-semibold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded-lg focus:outline-none ${
          error
            ? "border-2 border-red-500"
            : "border border-gray-300 focus:border-blue-500"
        }`}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">
          Bu maydon to'ldirilishi shart
        </p>
      )}
    </div>
  );
}

export default FormInput;
