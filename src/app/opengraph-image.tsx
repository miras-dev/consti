import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Constantin Nixdorff - Financial & Career Consulting";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            textAlign: "center",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            Constantin Nixdorff
          </div>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              margin: "28px 0",
              borderRadius: "2px",
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#94a3b8",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Financial & Career Consulting
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 20,
              fontWeight: 300,
              color: "#64748b",
              marginTop: "24px",
              maxWidth: "700px",
              lineHeight: 1.5,
              display: "flex",
              textAlign: "center",
            }}
          >
            Independent consulting tailored to your goals. Build your financial
            future with clarity and purpose.
          </div>

          {/* Service pills */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "36px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              "Financial Planning",
              "Investment & ETFs",
              "Career Coaching",
              "Tax Optimization",
            ].map((service) => (
              <div
                key={service}
                style={{
                  padding: "8px 20px",
                  borderRadius: "20px",
                  border: "1px solid #334155",
                  color: "#cbd5e1",
                  fontSize: 16,
                  fontWeight: 400,
                  display: "flex",
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL bar */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: "#475569",
              display: "flex",
            }}
          >
            constantinixdorff.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
