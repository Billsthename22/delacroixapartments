"use client";

import React, { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "2349155581053";

// ✅ Flexible typing for suite options
type SuiteOption = string;
type Suite = {
  id: string;
  name: string;
  desc: string;
  options: SuiteOption[];
  prices: Record<string, number>; // <-- allows varying keys
};

const SUITES: Suite[] = [
  {
    id: "Ruby",
    name: "Ruby Suite",
    desc: "2–3 Bedroom",
    options: ["2 Bedroom", "3 Bedroom"],
    prices: { "2 Bedroom": 150000, "3 Bedroom": 200000 },
  },
  {
    id: "Pearl",
    name: "Pearl Suite",
    desc: "2–3 Bedroom",
    options: ["2 Bedroom", "3 Bedroom"],
    prices: { "2 Bedroom": 150000, "3 Bedroom": 200000 },
  },
  {
    id: "Emerald",
    name: "Emerald Suite",
    desc: "Single Room",
    options: ["Standard"],
    prices: { Standard: 50000 },
  },
  {
    id: "Petra",
    name: "Petra Villa",
    desc: "6 Bedroom (Entire Building)",
    options: ["Entire Villa"],
    prices: { "Entire Villa": 350000 },
  },
];

function formatDate(d?: string) {
  if (!d) return "";
  try {
    const dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString();
  } catch (e) {
    return d;
  }
}

function getDatesBetween(start: string, end: string) {
  if (!start || !end) return [];
  const s = new Date(start + "T00:00:00");
  const e = new Date(end + "T00:00:00");
  if (s > e) return [];
  const days = [];
  for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d).toISOString().slice(0, 10));
  }
  return days;
}

export default function BookNowPage() {
  const [selectedSuite, setSelectedSuite] = useState(SUITES[0].id);
  const [selectedOption, setSelectedOption] = useState(SUITES[0].options[0]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState("");

  const selectedSuiteData = useMemo(
    () => SUITES.find((s) => s.id === selectedSuite) || SUITES[0],
    [selectedSuite]
  );

  const days = useMemo(() => getDatesBetween(checkIn, checkOut), [checkIn, checkOut]);
  const selectedPrice = selectedSuiteData.prices[selectedOption] || 0;

  const buildWhatsAppUrl = () => {
    const checkInText = checkIn ? formatDate(checkIn) : "Not set";
    const checkOutText = checkOut ? formatDate(checkOut) : "Not set";

    const messageLines = [
      `Hello, I'd like to book a suite at Delacroix Apartments.`,
      `Suite: ${selectedSuiteData.name}`,
      `Type: ${selectedOption}`,
      `Rate: ₦${selectedPrice.toLocaleString()} per night`,
      `Check-in: ${checkInText}`,
      `Check-out: ${checkOutText}`,
      `Nights: ${days.length > 0 ? days.length : "—"}`,
      `Guests: ${guests}`,
    ];

    if (notes.trim()) messageLines.push(`Notes: ${notes.trim()}`);
    messageLines.push("Please confirm availability and next steps.");

    const encoded = encodeURIComponent(messageLines.join("\n"));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  };

  const handleSendWhatsApp = () => {
    if (!checkIn || !checkOut) {
      const confirmProceed = window.confirm(
        "You haven't set both check-in and check-out dates. Proceed to WhatsApp anyway?"
      );
      if (!confirmProceed) return;
    }
    const url = buildWhatsAppUrl();
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[var(--color-delacroixCream)] text-[var(--color-delacroixBlue)] p-6 flex items-start justify-center">
      <div className="w-full max-w-4xl bg-[color:var(--color-delacroixBlue)]/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-[color:var(--color-delacroixBlue)]/20">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[color:var(--color-delacroixBlue)]">Book Now</h1>
            <p className="text-sm text-[color:var(--color-delacroixBlue)]/70">
              Choose a suite, pick dates — your booking message will open in WhatsApp.
            </p>
          </div>
          <div className="text-sm text-[color:var(--color-delacroixBlue)]/60">
            WhatsApp number:{" "}
            <span className="font-medium text-[color:var(--color-delacroixGold)]">
              +{WHATSAPP_NUMBER}
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Suite Picker */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-3 text-[color:var(--color-delacroixBlue)]">
              Select suite
            </h2>
            <div className="space-y-3">
              {SUITES.map((s) => (
                <label
                  key={s.id}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer border transition-all ${
                    s.id === selectedSuite
                      ? "border-[color:var(--color-delacroixGold)] bg-[color:var(--color-delacroixGold)]/10"
                      : "border-transparent hover:border-[color:var(--color-delacroixBlue)]/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="suite"
                    value={s.id}
                    checked={s.id === selectedSuite}
                    onChange={() => {
                      setSelectedSuite(s.id);
                      setSelectedOption(s.options[0]);
                    }}
                    className="form-radio h-4 w-4 text-[color:var(--color-delacroixGold)]"
                  />
                  <div>
                    <div className="font-medium">{s.name}</div>
                    <div className="text-xs text-[color:var(--color-delacroixBlue)]/70">
                      {s.desc}
                    </div>
                  </div>
                </label>
              ))}
            </div>

            {/* Room Type Dropdown */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-2">Select Room Type</h3>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-full rounded-md bg-[color:var(--color-delacroixBlue)]/5 p-2 border border-[color:var(--color-delacroixBlue)]/20"
              >
                {selectedSuiteData.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt} — ₦{selectedSuiteData.prices[opt].toLocaleString()}/night
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-2">Guests</h3>
              <input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-24 rounded-md bg-[color:var(--color-delacroixBlue)]/5 p-2 border border-[color:var(--color-delacroixBlue)]/20"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Additional notes</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Any special requests?"
                className="w-full rounded-md bg-[color:var(--color-delacroixBlue)]/5 p-2 text-sm border border-[color:var(--color-delacroixBlue)]/20"
              />
            </div>
          </div>

          {/* Date Picker */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-3 text-[color:var(--color-delacroixBlue)]">
              Pick dates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm mb-2">Check-in</span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="rounded-md bg-[color:var(--color-delacroixBlue)]/5 p-2 border border-[color:var(--color-delacroixBlue)]/20"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm mb-2">Check-out</span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="rounded-md bg-[color:var(--color-delacroixBlue)]/5 p-2 border border-[color:var(--color-delacroixBlue)]/20"
                />
              </label>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-2">Selected dates</h3>
              {(!checkIn || !checkOut) && (
                <div className="text-sm text-[color:var(--color-delacroixBlue)]/60">
                  No full range selected yet. Pick check-in and check-out.
                </div>
              )}

              {days.length === 0 && checkIn && checkOut && (
                <div className="text-sm text-red-600">
                  Check-out must be the same day or after check-in.
                </div>
              )}

              {days.length > 0 && (
                <div className="mt-2 grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {days.map((d) => (
                    <div
                      key={d}
                      className="px-2 py-1 rounded-md bg-[color:var(--color-delacroixGold)]/20 text-xs text-center"
                    >
                      {new Date(d + "T00:00:00").toLocaleDateString()}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleSendWhatsApp}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[color:var(--color-delacroixGold)] text-[color:var(--color-delacroixBlue)] font-semibold shadow-md hover:bg-[color:var(--color-delacroixGold)]/90 transition"
                >
                  Send via WhatsApp
                </button>

                <button
                  onClick={() => {
                    const summary = `Suite: ${selectedSuiteData.name} (${selectedOption})\nCheck-in: ${formatDate(
                      checkIn
                    )}\nCheck-out: ${formatDate(checkOut)}\nGuests: ${guests}`;
                    navigator.clipboard?.writeText(summary);
                    alert("Summary copied to clipboard");
                  }}
                  className="px-4 py-2 rounded-lg border border-[color:var(--color-delacroixBlue)]/30 text-sm hover:bg-[color:var(--color-delacroixBlue)]/5 transition"
                >
                  Copy summary
                </button>
              </div>

              <div className="mt-4 text-xs text-[color:var(--color-delacroixBlue)]/60">
                Tip: the button opens WhatsApp (web or app). Make sure the number above is correct.
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-6 text-sm text-[color:var(--color-delacroixBlue)]/70">
          <div>Auto message preview:</div>
          <pre className="mt-2 bg-[color:var(--color-delacroixBlue)]/5 p-3 rounded-md text-xs whitespace-pre-wrap border border-[color:var(--color-delacroixBlue)]/10">
            {`Suite: ${selectedSuiteData.name}\nType: ${selectedOption}\nRate: ₦${selectedPrice.toLocaleString()}/night\nCheck-in: ${formatDate(checkIn)}\nCheck-out: ${formatDate(
              checkOut
            )}\nNights: ${days.length || "—"}\nGuests: ${guests}${
              notes ? `\nNotes: ${notes}` : ""
            }`}
          </pre>
        </footer>
      </div>
    </div>
  );
}
