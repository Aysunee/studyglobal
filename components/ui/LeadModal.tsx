"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    console.log("Lead modal data:", data);
    setSubmitted(true);
  }

  if (!isOpen) return null;

  return (
    <div className="lead-modal-overlay" onClick={onClose}>
      <div className="lead-modal" onClick={(e) => e.stopPropagation()}>
        <button className="lead-modal-close" onClick={onClose} aria-label="Kapat">×</button>

        {submitted ? (
          <div className="lead-modal-success">
            <div className="lead-modal-check">✓</div>
            <h3>Teşekkürler!</h3>
            <p>Danışmanlarımız en kısa sürede sizi arayacak.</p>
          </div>
        ) : (
          <>
            <h3>Ücretsiz Danışmanlık</h3>
            <p>Bilgilerinizi bırakın, sizi arayalım.</p>
            <form className="lead-modal-form" onSubmit={handleSubmit}>
              <input required name="name" type="text" placeholder="Ad Soyad" />
              <input required name="phone" type="tel" placeholder="Telefon" />
              <label className="kvkk-consent">
                <input required name="kvkk" type="checkbox" />
                <span>
                  <Link href="/kvkk" target="_blank" rel="noopener noreferrer"><strong>KVKK</strong></Link> kapsamında verilerimin işlenmesini onaylıyorum.
                </span>
              </label>
              <button className="btn btn-primary" type="submit">Beni Arayın</button>
            </form>
            <small className="lead-modal-note">Bilgileriniz gizlidir. Sadece iletişim için kullanılır.</small>
          </>
        )}
      </div>
    </div>
  );
}
