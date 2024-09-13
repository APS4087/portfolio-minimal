'use client';
import Paragraph from "./component/Paragraph";

export default function Index() {
  const paragraph = "Hey there, I'm Aung Pyae Soe, but you can call me Bill. I craft digital experiences that blend creativity with code </>. When I'm not debugging or building cool things, you'll likely find me exploring new tech ideas or enjoying my third cup of coffee ☕.";

  return (
    <main>
      <div style={{ height: "50vh" }}></div>  {/* Spacer before paragraph */}
      <Paragraph paragraph={paragraph} />
      <div style={{ height: "50vh" }}></div>  {/* Spacer after paragraph */}
    </main>
  );
}
