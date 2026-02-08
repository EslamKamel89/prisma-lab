import { createNote } from "@/src/db/mutations";
import { allNotes } from "@/src/db/queries";
import { wisdoms } from "@/src/wisdoms";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const notes = await allNotes();
  return (
    <div>
      <form action={addRandomWisdom}>
        <button type="submit">Add Radom Wisdom</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
}

async function addRandomWisdom() {
  "use server";
  const randomIndex = Math.floor(Math.random() * wisdoms.length);
  const wisdom = wisdoms[randomIndex];
  await createNote(wisdom);
  revalidatePath("/");
}
