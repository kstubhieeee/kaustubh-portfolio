import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { Terminal as TerminalIcon } from "lucide-react";

interface Command {
  command: string;
  response: string | JSX.Element;
}

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (inputCmd: string) => {
    const cmd = inputCmd.trim().toLowerCase();

    setHistory([...history, inputCmd]);
    setHistoryIndex(-1);

    switch (cmd) {
      case "clear":
        setCommands([]);
        return;

      case "help":
        setCommands([
          ...commands,
          {
            command: inputCmd,
            response:
              "Available commands:\n\n" +
              "about         View my introduction and background\n" +
              "projects      Browse my portfolio projects\n" +
              "skills        See my technical skills\n" +
              "contact       Get my contact information\n" +
              "blog          Read my latest blog posts\n" +
              "clear         Clear the terminal screen\n" +
              "help          Show this help message\n" +
              "history       Show command history",
          },
        ]);
        return;

      case "about":
        setCommands([
          ...commands,
          {
            command: inputCmd,
            response:
              "Hey! I'm Kaustubh Bane, a 19-year-old developer passionate about Web Development, Blockchain, and AI.",
          },
        ]);
        return;

      case "projects":
        setCommands([
          ...commands,
          {
            command: inputCmd,
            response:
              "My Projects:\n\n" +
              "• Melodify - Music Streaming Platform\n" +
              "• Fee Management System\n" +
              "• Mental Health Tracker\n" +
              "• Notes Keeper\n" +
              "• Roomzy - Room Rental Platform\n" +
              "• TalentLink - Influencer Platform",
          },
        ]);
        return;

      case "skills":
        setCommands([
          ...commands,
          {
            command: inputCmd,
            response:
              "Technical Skills:\n\n" +
              "• Frontend: React.js, Next.js, TypeScript\n" +
              "• Backend: Node.js, Express.js\n" +
              "• Database: MongoDB, MySQL\n" +
              "• Tools: Git, VS Code, Figma",
          },
        ]);
        return;

      case "contact":
        setCommands([
          ...commands,
          {
            command: inputCmd,
            response:
              "Contact Information:\n\n" +
              "Email: banekaustubh27@gmail.com\n" +
              "GitHub: github.com/kstubhieeee\n" +
              "LinkedIn: linkedin.com/in/kstubhie\n" +
              "Twitter: twitter.com/kstubhiee",
          },
        ]);
        return;

      case "blog":
        setCommands([
          ...commands,
          {
            command: inputCmd,
            response:
              "Latest Blog Posts:\n\n" +
              "• The Future of Web Development\n" +
              "• Mastering TypeScript\n" +
              "• Building Scalable React Applications\n" +
              "• Optimizing React Performance",
          },
        ]);
        return;

      case "history":
        setCommands([
          ...commands,
          {
            command: inputCmd,
            response: history.map((cmd, i) => `${i + 1}  ${cmd}`).join("\n"),
          },
        ]);
        return;

      default:
        setCommands([
          ...commands,
          {
            command: inputCmd,
            response: `Command '${cmd}' not found. Type 'help' for available commands.`,
          },
        ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <div className="bg-black/20 backdrop-blur-md rounded-lg overflow-hidden font-mono border border-white/10 shadow-[0_0_15px_rgba(255,28,247,0.1)]">
      <div className="bg-white/5 backdrop-blur-sm px-4 py-2 flex items-center gap-2 border-b border-white/10">
        <TerminalIcon className="w-4 h-4 text-[#ff1cf7]" />
        <span className="text-white/80 text-sm">kaustubh@portfolio:~</span>
      </div>

      <div
        ref={terminalRef}
        className="p-4 h-80 overflow-y-auto text-sm space-y-2 font-jetbrains bg-transparent"
      >
        <div className="text-[#ff1cf7]">
          <Typewriter
            options={{
              strings: ['Welcome! Type "help" to see available commands.'],
              autoStart: true,
              delay: 50,
              cursor: "▋",
              loop: true,
            }}
          />
        </div>

        {commands.map((cmd, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[#7928ca]">kaustubh@portfolio</span>
              <span className="text-white">$</span>
              <span className="text-gray-300/90">{cmd.command}</span>
            </div>
            <pre className="text-gray-400/90 whitespace-pre pl-6 font-mono">
              {cmd.response}
            </pre>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-[#7928ca]">kaustubh@portfolio</span>
          <span className="text-white">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-gray-300/90 focus:outline-none flex-1 caret-[#ff1cf7]"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
