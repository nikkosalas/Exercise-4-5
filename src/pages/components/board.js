import Link from "next/link";
import AddBoard from "./addBoard";

export default function Board() {
  return (
    <div className="bg-white p-10">
      <h1 className="text-black text-left text-3xl font-normal mb-10">Boards</h1>
      <div className="grid gap-5 grid-cols-3 text-black">
        <div className=" border-gray-900 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">Thesis of the Project</p>
          <p>Scrumboard that enoeasdfasdf</p>
        </div>
        <div className="border-gray-900 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">Title of Board</p>
          <p>Description Here</p>
        </div>
        <div className="border-gray-900 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">Title of Board</p>
          <p>Description Here</p>
        </div>
        <Link href="/components/addBoard">
          <div className=" border-gray-900 border-2 rounded-lg p-5">
            <p className="text-3xl text-gray-900 text-center">+</p>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}
