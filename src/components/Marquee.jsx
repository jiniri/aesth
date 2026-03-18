import { MARQUEE_ITEMS } from "../data/index.js";

export default function Marquee() {
  // Double the array so the CSS animation loops seamlessly
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
