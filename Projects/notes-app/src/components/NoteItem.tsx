import { XIcon } from "lucide-react";
import type { INote } from "@/components/AddNote";

const NoteItem = ({ note, setNotes }) => {
  function deleteNote(id: INote) {
    setNotes((prevNotes) => prevNotes.filter((prev) => prev.id !== id));
  }
  return (
    <div className="flex flex-col gap-2 border-2 border-dashed border-black p-2 w-fit">
      <button
        className="justify-end flex cursor-pointer"
        onClick={() => deleteNote(note.id)}
      >
        <XIcon />
      </button>
      <h1 className="font-bold text-xl">{note.title}</h1>
      <p>{note.content}</p>
      <p className="font-semibold text-sm">{note.completion}</p>
    </div>
  );
};

export default NoteItem;
