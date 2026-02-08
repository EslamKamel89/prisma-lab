import "server-only";
import { prisma } from ".";
import { Note } from "../generated/prisma/client";

export async function createNote(content: string): Promise<Note> {
  return prisma.note.create({ data: { content } });
}
