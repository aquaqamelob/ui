import { Config } from "tailwindcss"
import { shadcnPlugin } from "./lib/shadcn-plugin"

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],

  plugins: [shadcnPlugin],
} satisfies Config

export default config
