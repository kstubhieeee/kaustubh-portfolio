import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Terminal as TerminalIcon } from "lucide-react";

interface Command {
  command: string;
  response: string;
}

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [input, setInput] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);

  const availableCommands = {
    help: "Available commands: help, about, skills, contact, education, projects, internship, certifications, clear",
    about:
      "Hey! I'm Kaustubh Bane, a 19-year-old developer passionate about Web Development, Blockchain, and AI.",
    skills:
      "Languages: Python, Java, C, C++, JavaScript, SQL, HTML, CSS\nDeveloper Tools: VS Code, FlutterFlow, NetBeans, Replit, CodeSandbox, Figma, Postman API\nTechnologies/Frameworks: Linux, GitHub, ReactJS, NodeJS, ExpressJS, Git, MongoDB, jQuery, Bootstrap.",
    contact:
      "Email: banekaustubh27@gmail.com\nGitHub: github.com/kstubhieeee\nLinkedIn: linkedin.com/in/kstubhie\n",
    education:
      "Shree L.R. Tiwari College of Engineering (2022 - 2026)\n - Bachelors in Computer Engineering, CGPA: 8.5\nDon Bosco Junior College (2020 - 2022)\n - Higher secondary education in sciences, Percentage: 72%",
    projects:
      "1. Melodify (July 2024)\n - Technologies: PHP, HTML, CSS, Bootstrap, JavaScript, MySQL\n - Description: A comprehensive music platform for users to enjoy, upload, and share music.\n - GitHub: github.com/kstubhieeee/Melodify\n\n2. Fee Management System (December 2023)\n - Technologies: Java, MySQL\n - Description: A system for registering students, paying fees, tracking payments, and searching records.\n - GitHub: github.com/kstubhieeee/Fee-Management-System",
    internship:
      "Engineering Minds (July 2023 - December 2023)\n - Position: Java Developer\n - Location: Mumbai, Maharashtra\n - Key Experience: Developed a fee management system and learned JDBC, MySQL, and NetBeans.",
    certifications:
      "1. The Full Stack Web Developer Course by Angela Yu\n2. Java\n3. Learn Python Programming by CodeChef\n4. Learn SQL by CodeChef",
    clear: "clear",
  };

  const handleCommand = (cmd: string) => {
    const normalizedCmd = cmd.toLowerCase().trim();

    if (normalizedCmd === "clear") {
      setCommands([]);
      return;
    }

    const response =
      availableCommands[normalizedCmd as keyof typeof availableCommands] ||
      'Command not found. Type "help" for available commands.';

    setCommands([...commands, { command: cmd, response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
      setShowPrompt(true);
    }
  };

  useEffect(() => {
    const terminal = document.getElementById("terminal-output");
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [commands]);

  return (
    <div className="bg-black rounded-lg shadow-xl overflow-hidden font-mono">
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
        <TerminalIcon className="w-4 h-4 text-gray-400" />
        <span className="text-gray-200 text-sm">Terminal</span>
      </div>

      <div
        id="terminal-output"
        className="p-4 h-80 overflow-y-auto text-sm space-y-2 font-jetbrains"
      >
        <div className="text-green-400">
          <Typewriter
            options={{
              strings: [
                'Welcome to my interactive terminal! Type "help" to see available commands.',
              ],
              autoStart: true,
              delay: 50,
              cursor: "▋",
            }}
          />
        </div>

        {commands.map((cmd, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">→</span>
              <span className="text-gray-300">{cmd.command}</span>
            </div>
            <div className="text-gray-400 whitespace-pre-line pl-6">
              {cmd.response}
            </div>
          </div>
        ))}

        {showPrompt && (
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-blue-400">→</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent text-gray-300 focus:outline-none flex-1"
              autoFocus
            />
          </form>
        )}
      </div>
    </div>
  );
}
