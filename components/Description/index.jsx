'use client';
import Word from './component/Word';

export default function Index() {
  const paragraph = "Crafting digital experiences that blend creativity with code </>. When I'm not debugging or pushing pixels, I'm probably pondering the mysteries of the universe or making my third cup of coffee ☕. Let's create something awesome together!";

  return (
    <main>
      <div style={{ height: "50vh" }}></div>  {/* Spacer before paragraph */}
      <Word paragraph={paragraph} />
      <div style={{ height: "50vh" }}></div>  {/* Spacer after paragraph */}
    </main>
  );
}
