'use client'
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";
import Tasks from "@/components/todo/tasks";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
      <main className="flex flex-col items-center justify-between p-24">
        <h1>Todo List</h1>
        <Button>button</Button>

        <Tasks/>
      </main>
      
  );
}
