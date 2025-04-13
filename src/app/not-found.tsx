import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] text-center">
      <div className="">
        <h2 className="text-[12rem] font-bold">404</h2>
        <p>Page not found!</p>
        <p>Could not find requested resource</p>
        <br />
        <Link href="/" className="underline text-blue-700">
          Return Home
        </Link>
      </div>
    </div>
  );
}
