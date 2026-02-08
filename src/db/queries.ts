import "server-only";
import { prisma } from ".";
import { Note } from "../generated/prisma/client";
export async function allNotes(): Promise<Note[]> {
  return prisma.note.findMany();
}
