import { useState, type FormEvent } from "react";
import { services, whatsappLink } from "@/lib/site";

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [service, setService] = useState(defaultService ?? services[0].title);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const message = `Olá! Sou ${data.get("name")}.
Interesse: ${data.get("service")}
Telefone: ${data.get("phone")}
Email: ${data.get("email")}
Mensagem: ${data.get("message") ?? "—"}`;
    window.open(whatsappLink(message), "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" aria-label="Formulário de orçamento">
      <div>
        <label htmlFor="qf-name" className="sr-only">Nome completo</label>
        <input id="qf-name" name="name" required placeholder="Nome completo" className="w-full px-4 py-3 bg-background border border-border text-sm focus:border-primary outline-none" />
      </div>
      <div>
        <label htmlFor="qf-email" className="sr-only">E-mail</label>
        <input id="qf-email" name="email" type="email" required placeholder="E-mail" className="w-full px-4 py-3 bg-background border border-border text-sm focus:border-primary outline-none" />
      </div>
      <div>
        <label htmlFor="qf-phone" className="sr-only">Telefone / WhatsApp</label>
        <input id="qf-phone" name="phone" required placeholder="Telefone / WhatsApp" className="w-full px-4 py-3 bg-background border border-border text-sm focus:border-primary outline-none" />
      </div>
      <div>
        <label htmlFor="qf-service" className="sr-only">Serviço de interesse</label>
        <select
          id="qf-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full px-4 py-3 bg-background border border-border text-sm focus:border-primary outline-none"
        >
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="qf-message" className="sr-only">Mensagem</label>
        <textarea id="qf-message" name="message" rows={3} placeholder="Conte um pouco sobre o serviço (opcional)" className="w-full px-4 py-3 bg-background border border-border text-sm focus:border-primary outline-none resize-none" />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-wider text-xs py-4 hover:bg-foreground transition-colors"
      >
        Solicitar Orçamento
      </button>
      <p className="text-[10px] font-mono text-muted-foreground text-center">
        Ao enviar você será direcionado ao WhatsApp.
      </p>
    </form>
  );
}
