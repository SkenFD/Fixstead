"use client";

import { FormEvent, useState } from "react";

const phoneDisplay = "07400 056426";
const whatsappNumber = "447400056426";
const email = "fixsteadservices@gmail.com";

const services = [
  "Lawn mowing",
  "Pressure washing",
  "Fence repair",
  "Laminate flooring installation",
  "Furniture assembly",
  "Bin cleaning",
  "Garden maintenance",
  "Small home repairs"
];

const prices = [
  ["Lawn mowing", "from GBP 20"],
  ["Pressure washing", "from GBP 50"],
  ["Bin cleaning", "from GBP 7"],
  ["Furniture assembly", "from GBP 30"],
  ["Fence repair", "quoted after photos"],
  ["Small repairs", "from GBP 20"]
];

const areas = [
  "Coventry",
  "Allesley",
  "Binley",
  "Canley",
  "Coundon",
  "Earlsdon",
  "Foleshill",
  "Stoke",
  "Tile Hill",
  "Walsgrave"
];

function openWhatsApp(message: string) {
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
}

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    postcode: "",
    service: services[0],
    details: ""
  });

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Hi Eduard, I'd like to book Fixstead.\n\nName: ${form.name}\nPostcode: ${form.postcode}\nService: ${form.service}\nDetails: ${form.details}`;
    openWhatsApp(message);
  }

  return (
    <main className="min-h-screen bg-fixstead-dark text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-fixstead-dark/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded bg-fixstead-green font-black text-fixstead-dark">
              F
            </span>
            <span>
              <span className="block text-lg font-bold leading-none">Fixstead</span>
              <span className="text-xs text-white/60">Home & Outdoor Services</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/75 md:flex">
            <a className="hover:text-fixstead-green" href="#services">
              Services
            </a>
            <a className="hover:text-fixstead-green" href="#prices">
              Prices
            </a>
            <a className="hover:text-fixstead-green" href="#booking">
              Book
            </a>
            <a className="hover:text-fixstead-green" href="#contact">
              Contact
            </a>
          </div>
          <button
            className="rounded bg-fixstead-green px-4 py-2 text-sm font-bold text-fixstead-dark transition hover:bg-fixstead-lime"
            onClick={() => openWhatsApp("Hi Eduard, I'd like a Fixstead quote.")}
          >
            WhatsApp
          </button>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 w-fit rounded border border-fixstead-green/40 bg-fixstead-green/10 px-3 py-1 text-sm font-semibold text-fixstead-lime">
              Coventry based local service
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-black tracking-tight sm:text-6xl">
              Reliable home and outdoor jobs handled properly.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Fixstead helps Coventry homes with garden care, pressure washing,
              repairs, flooring, assembly and the practical jobs that make a
              property feel sorted again.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="rounded bg-fixstead-green px-6 py-3 text-center font-bold text-fixstead-dark transition hover:bg-fixstead-lime"
              >
                Book a job
              </a>
              <a
                href={`tel:${phoneDisplay.replaceAll(" ", "")}`}
                className="rounded border border-white/18 px-6 py-3 text-center font-bold text-white transition hover:border-fixstead-green hover:text-fixstead-green"
              >
                Call {phoneDisplay}
              </a>
            </div>
          </div>

          <div className="rounded border border-white/10 bg-fixstead-panel p-5 shadow-glow">
            <div className="grid gap-3 sm:grid-cols-2">
              {services.slice(0, 6).map((service) => (
                <div key={service} className="rounded bg-white/[0.04] p-4">
                  <span className="mb-8 block h-2 w-10 rounded bg-fixstead-green" />
                  <p className="font-semibold">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-fixstead-green">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-black">One call for the jobs piling up</h2>
          </div>
          <p className="max-w-xl text-white/65">
            Send photos, your postcode and a short description. Eduard will
            confirm availability and a clear price before the work starts.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service} className="rounded border border-white/10 bg-white/[0.04] p-5 transition hover:border-fixstead-green/60 hover:bg-white/[0.07]">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded bg-fixstead-green/15 text-xl font-black text-fixstead-green">
                ✓
              </div>
              <h3 className="font-bold">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">
                Tidy workmanship, practical advice and straightforward
                communication from quote to finish.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.035]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Local and responsive", "Based in Coventry, with quick WhatsApp booking and honest arrival windows."],
            ["Clear pricing", "Simple guide prices for common jobs, with photo quotes where the work varies."],
            ["Respectful finish", "Work areas are left tidy, and small details are handled with care."]
          ].map(([title, copy]) => (
            <div key={title}>
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-white/65">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="prices" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-fixstead-green">
          Price guide
        </p>
        <h2 className="mt-2 text-3xl font-black">Typical starting prices</h2>
        <div className="mt-8 overflow-hidden rounded border border-white/10">
          {prices.map(([item, price]) => (
            <div key={item} className="grid grid-cols-2 border-b border-white/10 bg-white/[0.03] p-4 last:border-b-0">
              <span className="font-semibold">{item}</span>
              <span className="text-right text-fixstead-lime">{price}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-white/55">
          Final prices depend on access, size, materials and condition. Photos
          help keep quotes quick and accurate.
        </p>
      </section>

      <section className="bg-white/[0.035]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-fixstead-green">
            Areas covered
          </p>
          <h2 className="mt-2 text-3xl font-black">Coventry and nearby neighbourhoods</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="rounded border border-white/10 bg-fixstead-dark px-4 py-2 text-sm text-white/75">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-fixstead-green">
            Booking
          </p>
          <h2 className="mt-2 text-3xl font-black">Start with a WhatsApp message</h2>
          <p className="mt-4 leading-7 text-white/65">
            Fill in the basics and the button will open WhatsApp with your
            message ready to send to Eduard.
          </p>
        </div>
        <form onSubmit={submitBooking} className="rounded border border-white/10 bg-fixstead-panel p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Name
              <input
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="mt-2 w-full rounded border border-white/10 bg-fixstead-dark px-4 py-3 text-white outline-none focus:border-fixstead-green"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-semibold">
              Postcode
              <input
                required
                value={form.postcode}
                onChange={(event) => setForm({ ...form, postcode: event.target.value })}
                className="mt-2 w-full rounded border border-white/10 bg-fixstead-dark px-4 py-3 text-white outline-none focus:border-fixstead-green"
                placeholder="CV..."
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold">
            Service
            <select
              value={form.service}
              onChange={(event) => setForm({ ...form, service: event.target.value })}
              className="mt-2 w-full rounded border border-white/10 bg-fixstead-dark px-4 py-3 text-white outline-none focus:border-fixstead-green"
            >
              {services.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>
          <label className="mt-4 block text-sm font-semibold">
            Details
            <textarea
              required
              value={form.details}
              onChange={(event) => setForm({ ...form, details: event.target.value })}
              className="mt-2 min-h-32 w-full rounded border border-white/10 bg-fixstead-dark px-4 py-3 text-white outline-none focus:border-fixstead-green"
              placeholder="Tell us what needs doing. Add measurements, access notes or timing if useful."
            />
          </label>
          <button className="mt-5 w-full rounded bg-fixstead-green px-6 py-3 font-black text-fixstead-dark transition hover:bg-fixstead-lime">
            Open WhatsApp booking
          </button>
        </form>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-2xl font-black">Fixstead</h2>
            <p className="mt-3 text-white/62">Home & Outdoor Services in Coventry, UK.</p>
          </div>
          <a className="rounded border border-white/10 p-5 hover:border-fixstead-green" href={`tel:${phoneDisplay.replaceAll(" ", "")}`}>
            <span className="block text-sm text-white/55">Phone / WhatsApp</span>
            <span className="mt-2 block font-bold">{phoneDisplay}</span>
          </a>
          <a className="rounded border border-white/10 p-5 hover:border-fixstead-green" href={`mailto:${email}`}>
            <span className="block text-sm text-white/55">Email</span>
            <span className="mt-2 block break-words font-bold">{email}</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Fixstead. Website: fixstead.co.uk. Owner: Eduard.
      </footer>
    </main>
  );
}
