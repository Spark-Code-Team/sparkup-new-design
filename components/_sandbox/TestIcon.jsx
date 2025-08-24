export default function TestIcon() {
  const Icon = require("../../assets/icons/mohtava.svg").default;
  return (
    <div className="p-10">
      <Icon className="w-24 h-24 text-red-600" />
    </div>
  );
}