import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

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
          background: "#0b0c0e",
          color: "#e8eaed",
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
          <div style={{ display: "flex", fontFamily: "monospace", fontSize: 28, color: "#7eb8ff" }}>
            godwinxbt
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 48, fontWeight: 700, lineHeight: 1.15, maxWidth: 780 }}>
            Financial systems. Protocols. Infrastructure.
          </div>
          <div style={{ display: "flex", marginTop: 32, gap: 28, fontSize: 24, color: "#8b919a" }}>
            <div style={{ display: "flex" }}>Engineer</div>
            <div style={{ display: "flex" }}>Protocol researcher</div>
            <div style={{ display: "flex" }}>Security</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
