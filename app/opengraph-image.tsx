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
          background: "#fbf7f5",
          color: "#271111",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={`data:image/jpeg;base64,${avatar}`}
          alt=""
          width={220}
          height={220}
          style={{ borderRadius: 24, marginRight: 56, border: "1px solid #eee3de" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "monospace", fontSize: 28, color: "#c23600" }}>
            godwinxbt
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 46, fontWeight: 700, lineHeight: 1.15, maxWidth: 780 }}>
            I study how protocols fail before I write the code that is supposed to stop them.
          </div>
          <div style={{ display: "flex", marginTop: 32, gap: 28, fontSize: 24, color: "#7a6a64" }}>
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
