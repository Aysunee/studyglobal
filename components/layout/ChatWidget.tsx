"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "bot" | "user";
  text: string;
};

const quickReplies = [
  "Hangi ülke bana uygun?",
  "IELTS mi OET mi?",
  "Yaz Okulları",
  "Başvuru Süreci",
  "Bütçe & Maliyet",
  "Vize Süreci",
];

const mockResponses: Record<string, string> = {
  "Hangi ülke bana uygun?":
    "Hedeflerinize ve bütçenize göre en uygun ülkeyi birlikte belirleyelim. İngiltere, Kanada, Avustralya ve ABD en popüler tercihlerimiz arasında. Detaylı bilgi için danışmanlarımızla görüşme ayarlayalım!",
  "IELTS mi OET mi?":
    "IELTS genel amaçlı bir dil sınavıyken, OET sağlık sektörüne yöneliktir. Hedefinize bağlı olarak en uygun sınavı seçmenize yardımcı olabiliriz.",
  "Yaz Okulları":
    "Yaz okulları, kısa sürede yurt dışı deneyimi kazanmak için harika bir fırsat! İngiltere ve Kanada'da 2-8 haftalık programlarımız mevcut.",
  "Başvuru Süreci":
    "Başvuru sürecinizi A'dan Z'ye yönetiyoruz: okul seçimi, evrak hazırlama, başvuru takibi ve kabul sonrası işlemler. Hemen bir danışmanlık randevusu alabilirsiniz!",
  "Bütçe & Maliyet":
    "Eğitim maliyetleri ülke ve programa göre değişir. Burs imkanları ve ödeme planları hakkında detaylı bilgi almak için bizimle iletişime geçin.",
  "Vize Süreci":
    "Vize başvurunuzu uzman ekibimiz ile birlikte hazırlıyoruz. Gerekli evraklar, mülakat hazırlığı ve süreç takibi konusunda yanınızdayız.",
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Merhaba! Size nasıl yardımcı olabilirim?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isFirstMessage = messages.length === 1;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function addBotResponse(userText: string) {
    const response =
      mockResponses[userText] ??
      "Teşekkürler! En kısa sürede size dönüş yapacağız. Detaylı bilgi için İletişim sayfamızı ziyaret edebilirsiniz.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 600);
  }

  function handleQuickReply(text: string) {
    setMessages((prev) => [...prev, { role: "user", text }]);
    addBotResponse(text);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    addBotResponse(trimmed);
  }

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        aria-label="Sohbet aç/kapat"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-navy-deep text-white rounded-full shadow-card flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-h-[520px] bg-white rounded-2xl shadow-card flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-navy-deep text-white px-5 py-4">
          <p className="font-semibold text-sm">Study Global Asistan</p>
          <p className="text-xs text-white/60">Genellikle birkaç dakika içinde yanıt verir</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === "bot"
                  ? "bg-ivory text-navy rounded-bl-sm"
                  : "bg-study-red text-white rounded-br-sm ml-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {/* Quick replies */}
          {isFirstMessage && (
            <div className="flex flex-wrap gap-2 pt-2">
              {quickReplies.map((qr) => (
                <button
                  key={qr}
                  type="button"
                  onClick={() => handleQuickReply(qr)}
                  className="px-3 py-1.5 text-xs border border-border-soft rounded-full text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t border-border-soft p-3 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mesajınızı yazın..."
            className="flex-1 text-sm px-3 py-2 rounded-lg bg-ivory border border-border-soft focus:outline-none focus:border-study-red transition-colors"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-study-red text-white text-sm font-semibold rounded-lg hover:bg-soft-red transition-colors cursor-pointer"
          >
            Gönder
          </button>
        </form>
      </div>
    </>
  );
}
