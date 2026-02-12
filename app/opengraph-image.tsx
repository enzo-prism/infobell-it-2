import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"

export const runtime = "nodejs"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

const CODE_BACKGROUND = `#include <iostream>
using namespace std;
using namespace cv;

int main(int, char** argv) {
  // Load the image
  Mat src = imread(argv[1]);

  // Check if everything was fine
  if (!src.data) {
    return -1;
  }

  // Show source image
  imshow("Source image", src);

  // Change the black pixels to green
  for (int x = 0; x < src.rows; x++) {
    for (int y = 0; y < src.cols; y++) {
      if (src.at<Vec3b>(x, y)[0] < 40) {
        src.at<Vec3b>(x, y)[1] = 180;
      }
    }
  }
}`

export default async function OpenGraphImage() {
  const logoPath = path.join(process.cwd(), "public/images/logos/infobellLogo.png")
  const logoBuffer = await readFile(logoPath)
  const logoDataUri = `data:image/png;base64,${logoBuffer.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#E5E7EB",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            display: "flex",
            padding: "48px 56px",
            color: "rgba(17, 24, 39, 0.08)",
            fontSize: 34,
            lineHeight: 1.3,
            fontFamily: "Menlo, Monaco, monospace",
            whiteSpace: "pre-wrap",
          }}
        >
          {CODE_BACKGROUND}
        </div>
        <div
          style={{
            position: "absolute",
            inset: "48px 56px",
            display: "flex",
            borderRadius: 32,
            border: "1px solid rgba(17, 24, 39, 0.1)",
            background: "rgba(255, 255, 255, 0.64)",
          }}
        />
        <img
          src={logoDataUri}
          alt="Infobell IT Advanced Technology Solutions"
          style={{
            width: 920,
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
