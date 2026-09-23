import { Mascot } from "../components/Mascot";
import { MascotAdventurer } from "../components/MascotAdventurer";

export default function MascotsPreview() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-16 py-20">
      <div className="flex flex-col items-center gap-4">
        <Mascot className="h-56 w-56" />
        <p className="font-serif text-xl text-wine">Pico — geométrico</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <MascotAdventurer className="h-56 w-56" />
        <p className="font-serif text-xl text-wine">Pico Aventurero — blob + bufanda</p>
      </div>
    </div>
  );
}
