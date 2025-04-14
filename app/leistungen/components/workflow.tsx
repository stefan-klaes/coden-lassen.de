import HeadStarter from "@/components/blocks/head-starter";

type Message = {
  title: string;
  text: string;
  role: "stefan" | "kunde" | "beide";
};

const MESSAGES: Message[] = [
  {
    title: "Deine Anfrage",
    text: "Du hast eine Idee, ein Problem oder eine Frage? Ich freue mich über deine Nachricht!",
    role: "kunde",
  },
  {
    title: "Meine Rückmeldung",
    text: "Ich antworte innerhalb von 48 Stunden, meist schneller. Je nach Anfrage schätze ich direkt einen groben Kostenrahmen für die Umsetzung oder stelle Rückfragen.",
    role: "stefan",
  },
  {
    title: "Genaue Absprache",
    text: "Wir besprechen gemeinsam, was exakt umgesetzt werden soll und legen einen Zeitrahmen fest. Ich biete immer Fixpreise für deine Planungssicherheit. Solltest du meinem Angebot zustimmen, starte ich mit der Programmierung.",
    role: "beide",
  },
  {
    title: "Ich programmiere",
    text: "Nach der Absprache setze ich deine WordPress-Wünsche um. Zwischendurch gebe ich Updates und bin für Rückfragen erreichbar.",
    role: "stefan",
  },
  {
    title: "Der Code geht live",
    text: "Je nach Umsetzung installierst du das WordPress Plugin oder ich helfe bei der Implementierung. Ich warte auf dein Testing und Feedback und fixe mögliche Bugs sofort.",
    role: "beide",
  },
];

// ChatBubble-Komponente für die Darstellung der Nachrichten
function ChatBubble({
  role,
  title,
  text,
}: {
  role: "stefan" | "kunde" | "beide";
  title: string;
  text: string;
}) {
  if (role === "beide") {
    // Geteilte Bubble für beide
    return (
      <div className="flex justify-center mb-4">
        <div
          className="max-w-md p-4 rounded-xl shadow bg-gray-200 flex flex-col items-center border"
          style={{
            borderTopLeftRadius: "1.2em",
            borderTopRightRadius: "1.2em",
            borderBottomLeftRadius: "1.2em",
            borderBottomRightRadius: "1.2em",
          }}
        >
          <div className="font-semibold mb-1 flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <span role="img" aria-label="Kunde">
                🧑‍💼
              </span>
              <span role="img" aria-label="Stefan">
                👨‍💻
              </span>
            </span>
            {title}
          </div>
          <div className="text-sm text-center">{text}</div>
        </div>
      </div>
    );
  }

  const isKunde = role === "kunde";
  return (
    <div className={`flex ${isKunde ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-md p-4 rounded-xl border ${
          isKunde ? "bg-background" : "bg-primary text-background"
        }`}
        style={{
          borderTopLeftRadius: isKunde ? "0.5em" : "1.2em",
          borderTopRightRadius: isKunde ? "1.2em" : "0.5em",
        }}
      >
        <div className="font-semibold mb-1 flex items-center gap-2">
          <span className="inline-flex items-center gap-1">
            {isKunde ? (
              <span role="img" aria-label="Kunde">
                🧑‍💼
              </span>
            ) : (
              <span role="img" aria-label="Stefan">
                👨‍💻
              </span>
            )}
          </span>
          <div className="font-semibold mb-1">{title}</div>
        </div>
        <div className="text-sm">{text}</div>
      </div>
    </div>
  );
}

export default function Workflow() {
  return (
    <div>
      <HeadStarter
        tag="Ablauf"
        title="Mein Workflow als WordPress Entwickler"
        variant="h2"
        description="Dieser Ablauf ist natürlich nicht in Stein gemeißelt, sondern wird an
          die jeweilige Anforderung angepasst. Ich arbeite immer so, dass es für
          dich am besten passt."
      />
      <div className="grid gap-6 w-full max-w-screen-md mx-auto">
        {MESSAGES.map((message, i) => (
          <ChatBubble
            key={i}
            role={message.role}
            title={message.title}
            text={message.text}
          />
        ))}
      </div>
    </div>
  );
}
