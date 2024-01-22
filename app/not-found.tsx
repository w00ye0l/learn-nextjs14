import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Not found",
  },
};

export default function NotFound() {
  return <h1>Not found!</h1>;
}
