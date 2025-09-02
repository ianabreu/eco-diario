import { sections } from "./_sections";

export default function VegetableGardenPage() {
  return (
    <div>
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}
