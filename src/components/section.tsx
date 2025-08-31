interface SectionProps {
  children: React.ReactNode;
}
export function Section({ children }: SectionProps) {
  return (
    <section className="bg-white p-2 rounded-lg shadow-md">{children}</section>
  );
}
