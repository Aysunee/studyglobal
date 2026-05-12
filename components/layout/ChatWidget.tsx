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
    {
      role: "bot",
      text: "Merhaba! Study Global Asistan'a hoş geldiniz. Size program, sınav veya ülke seçimi konusunda yardımcı olabilirim.",
    },
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  const isFirstMessage = messages.length === 1;

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
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
    <div className="chat-widget">
      <div
        className={`chat-panel${isOpen ? " open" : ""}`}
        data-chat-panel=""
      >
        <div className="chat-head">
          <strong>Study Global Asistan</strong>
          <span>Programlar, sınavlar ve ülke seçimi hakkında sorabilirsiniz.</span>
        </div>

        <div className="chat-body" data-chat-body="" ref={bodyRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.role}`}>
              {msg.text}
            </div>
          ))}

          {isFirstMessage && (
            <div className="quick-replies">
              {quickReplies.map((qr) => (
                <button key={qr} type="button" data-quick-reply="" onClick={() => handleQuickReply(qr)}>
                  {qr}
                </button>
              ))}
            </div>
          )}
        </div>

        <form className="chat-form" data-chat-form="" onSubmit={handleSubmit}>
          <input
            data-chat-input=""
            placeholder="Mesajınızı yazın..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">&#10148;</button>
        </form>
      </div>

      <button
        className="chat-toggle"
        data-chat-toggle=""
        onClick={() => setIsOpen(!isOpen)}
      >
        &#10022; <span>Study Global Asistan</span>
      </button>
    </div>
  );
}
