import Age from "./age";
import YearsExperience from "./years-experience";

export default function AboutMe({ type }: { type?: "aboutme" }) {
  return (
    <div className="space-y-2 text-left">
      {[
        {
          label: (
            <span>
              Stefan Klaes (<Age /> Jahre alt)
            </span>
          ),
          emoji: "👨‍💻  ",
        },
        {
          label: (
            <span>
              WordPress Entwickler (<YearsExperience /> Jahre Erfahrung)
            </span>
          ),
          emoji: "💻  ",
        },
        {
          label: "Rotenburg (zw. Hamburg und Bremen)",
          emoji: "📍  ",
        },
        {
          label: "arbeite remote (ganz Deutschland)",
          emoji: "🏠  ",
        },
        {
          label: "stefan@coden-lassen.de",
          emoji: "✉️  ",
        },
        ...(type !== "aboutme"
          ? [
              {
                label: "Antwort in <48 Stunden",
                emoji: "⏳  ",
              },
            ]
          : []),
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-lg">{item.emoji}</span>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
