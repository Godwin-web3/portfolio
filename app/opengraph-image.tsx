import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { stats } from "./lib/findings";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const avatar = readFileSync(join(process.cwd(), "app/icon.jpg")).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fff",
        }}
      >
        <img
          src={`data:image/jpeg;base64,${avatar}`}
          width={220}
          height={220}
          style={{ borderRadius: 24, marginRight: 56 }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "monospace", fontSize: 28, color: "#34d399" }}>
            godwin<span style={{ color: "#fff" }}>.xbt</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 780,
            }}
          >
            I build the tools I audit with.
          </div>
          <div style={{ display: "flex", marginTop: 32, gap: 40, fontSize: 24, color: "#a3a3a3" }}>
            <div style={{ display: "flex" }}>{stats.totalFindings} real findings</div>
            <div style={{ display: "flex" }}>{stats.protocols} protocols audited</div>
            <div style={{ display: "flex" }}>{stats.criticalOrHigh} critical/high</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
