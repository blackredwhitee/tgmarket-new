import { qrPath } from "@/lib/qr";
import { BOT_URL } from "@/lib/links";

/** Настоящий QR на бота (генерируется при сборке). */
export default function Qr({ size, pad = 10, radius = 16 }: { size: number; pad?: number; radius?: number }) {
  const { d, size: n } = qrPath(BOT_URL);
  return (
    <div style={{ width: size, height: size, background: "#fff", borderRadius: radius, padding: pad, flex: "none" }}>
      <svg viewBox={`0 0 ${n} ${n}`} width="100%" height="100%" shapeRendering="crispEdges" role="img" aria-label="QR-код для открытия бота @TGMarketSellerBot">
        <path d={d} fill="#0B1233" />
      </svg>
    </div>
  );
}
