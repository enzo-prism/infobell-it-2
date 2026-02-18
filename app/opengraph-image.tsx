import { ImageResponse } from "next/og"

export const runtime = "nodejs"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

const OPEN_GRAPH_LOGO =
  "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1771445821/nav-bar-logo_1_d8dvg9.webp"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#E5E7EB",
        }}
      >
        <img
          src={OPEN_GRAPH_LOGO}
          alt="Infobell IT Advanced Technology Solutions"
          style={{
            width: 900,
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
