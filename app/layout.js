import { Inter } from "next/font/google";
import "./globals.css";
import { TasksProvider } from "./components/TaskContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TasksProvider>
          <div>{children}</div>
        </TasksProvider>
      </body>
    </html>
  );
}
