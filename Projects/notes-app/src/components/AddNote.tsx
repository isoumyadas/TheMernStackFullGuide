import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowBigDownIcon, ArrowDown } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import NoteItem from "./NoteItem";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface INote {
  title: string;
  content: string;
  completion: string;
  id?: string;
}

const AddNote = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [position, setPosition] = useState("Today");

  // for add functionality

  function addNote(note: INote) {
    setNotes((prevValue) => [
      ...prevValue,
      { createdAt: Date.now(), id: uuidv4(), ...note },
    ]);
  }

  function onAdd() {
    addNote({ title: inputTitle, content: inputContent, completion: position });
    setInputTitle("");
    setInputContent("");
  }

  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center">
        <Input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          className="border-2 border-black text-black font-bold p-2"
          placeholder="Your note title"
        />

        <Textarea
          className="border-2 border-black text-black font-semibold p-2 w-60"
          placeholder="Your title's description"
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />

        <div className="w-full">
          <DropdownMenu>
            <DropdownMenuTrigger
              value={position}
              className="border-2 border-black flex justify-between p-2 w-full rounded-md cursor-pointer font-semibold"
            >
              {position ? position : "Completion"} <ArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Choose</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="Today">
                  Today
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Tommorow">
                  Tommorow
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Not Decided">
                  Not Decided
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button className="cursor-pointer w-full" onClick={onAdd}>
          Add <ArrowBigDownIcon />
        </Button>
      </div>
      {/* NoteItem */}
      <div className="flex w-auto p-5 mt-4 gap-4 flex-wrap">
        {notes.map((note) => (
          <li className="list-none" key={note.id}>
            <NoteItem note={note} setNotes={setNotes} />
          </li>
        ))}
      </div>
    </>
  );
};

export default AddNote;
