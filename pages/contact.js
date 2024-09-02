import Note from "@/components/contact/Note";
import Info from "@/components/contact/Info";
import Subscribe from "@/components/shared/Subscribe";
export default function Home() {
  return (
    <div className="mx-auto">
      <Note />
      <Info />
      <Subscribe bgColor={"#245073"} />
    </div>
  );
}
