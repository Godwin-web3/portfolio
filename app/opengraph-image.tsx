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
          background: "#0c0b09",
          color: "#f3efe6",
        }}
      >
        <img
          src={`data:image/jpeg;base64,${avatar}`}
          alt=""
          width={220}
          height={220}
          style={{ borderRadius: 24, marginRight: 56 }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "monospace", fontSize: 28, color: "#e07a4c" }}>
            godwin<span style={{ color: "#f3efe6" }}>.xbt</span>
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 48, fontWeight: 700, lineHeight: 1.15, maxWidth: 780 }}>
            Follow the settlement path. Then prove the claim.
          </div>
          <div style={{ display: "flex", marginTop: 32, gap: 28, fontSize: 24, color: "#b7b0a4" }}>
            <div style={{ display: "flex" }}>Auditor @ SMC Audits</div>
            <div style={{ display: "flex" }}>{stats.totalFindings} findings</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
