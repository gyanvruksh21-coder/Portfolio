import { useState, useEffect, useRef } from 'react';
import { FiTerminal, FiCommand, FiDatabase, FiCode, FiUser, FiMail, FiGithub, FiLinkedin, FiExternalLink, FiArrowRight } from 'react-icons/fi';

const Terminal = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentView, setCurrentView] = useState('home');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);

  const commands = {
    help: {
      description: 'Show available commands',
      action: () => showHelp()
    },
    about: {
      description: 'Display personal information',
      action: () => setCurrentView('about')
    },
    projects: {
      description: 'Browse my projects',
      action: () => setCurrentView('projects')
    },
    skills: {
      description: 'View technical skills and expertise',
      action: () => setCurrentView('skills')
    },
    contact: {
      description: 'Get in touch',
      action: () => setCurrentView('contact')
    },
    resume: {
      description: 'Download resume',
      action: () => window.open('/resume.pdf', '_blank')
    },
    github: {
      description: 'Visit my GitHub profile',
      action: () => window.open('https://github.com/khushijoshi', '_blank')
    },
    linkedin: {
      description: 'Connect on LinkedIn',
      action: () => window.open('https://www.linkedin.com/in/khushi-kalpesh-joshi-895b822a4/', '_blank')
    },
    clear: {
      description: 'Clear terminal',
      action: () => clearTerminal()
    },
    hacker: {
      description: 'Toggle hacker mode (secret)',
      action: () => toggleHackerMode()
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand.trim());
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateHistory('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateHistory('down');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      autoComplete();
    }
  };

  const executeCommand = (command) => {
    if (!command) return;

    const newHistory = [...commandHistory, { type: 'input', content: command }];
    setCommandHistory(newHistory);
    setHistoryIndex(-1);

    const [cmd, ...args] = command.toLowerCase().split(' ');

    if (commands[cmd]) {
      commands[cmd].action();
      setCurrentCommand('');
    } else {
      newHistory.push({
        type: 'error',
        content: `Command not found: ${cmd}. Type 'help' for available commands.`
      });
      setCommandHistory(newHistory);
    }
  };

  const showHelp = () => {
    const helpText = Object.entries(commands).map(([cmd, info]) => ({
      type: 'system',
      content: `${cmd.padEnd(10)} - ${info.description}`
    }));
    setCommandHistory([...commandHistory, ...helpText]);
  };

  const clearTerminal = () => {
    setCommandHistory([]);
    setCurrentView('home');
  };

  const toggleHackerMode = () => {
    // Easter egg - glitch effect
    document.body.classList.add('hacker-mode');
    setTimeout(() => document.body.classList.remove('hacker-mode'), 3000);
    setCommandHistory([...commandHistory, {
      type: 'success',
      content: 'HACKER MODE ACTIVATED! (Just kidding, but that was fun)'
    }]);
  };

  const navigateHistory = (direction) => {
    if (commandHistory.length === 0) return;

    let newIndex;
    if (direction === 'up') {
      newIndex = historyIndex === -1 ? commandHistory.length - 1 : historyIndex - 1;
    } else {
      newIndex = historyIndex === -1 ? 0 : historyIndex + 1;
    }

    if (newIndex >= 0 && newIndex < commandHistory.length) {
      setHistoryIndex(newIndex);
      const historyItem = commandHistory[newIndex];
      if (historyItem.type === 'input') {
        setCurrentCommand(historyItem.content);
      }
    }
  };

  const autoComplete = () => {
    const availableCommands = Object.keys(commands);
    const matchingCommand = availableCommands.find(cmd =>
      cmd.startsWith(currentCommand.toLowerCase())
    );

    if (matchingCommand && matchingCommand !== currentCommand.toLowerCase()) {
      setCurrentCommand(matchingCommand);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'about':
        return <AboutView />;
      case 'projects':
        return <ProjectsView />;
      case 'skills':
        return <SkillsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="terminal-title">khushi-joshi.neural-portfolio</div>
      </div>

      <div className="terminal-body">
        <div className="terminal-output">
          {commandHistory.map((item, index) => (
            <div key={index} className={`terminal-line ${item.type}`}>
              {item.type === 'input' && <span className="prompt">$ </span>}
              <span>{item.content}</span>
            </div>
          ))}
        </div>

        <div className="terminal-input-line">
          <span className="prompt">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck="false"
          />
          {isTyping && <span className="cursor-blink">|</span>}
        </div>

        {renderView()}
      </div>
    </div>
  );
};

// Individual view components
const HomeView = () => (
  <div className="terminal-view">
    <div className="welcome-message">
      <h1 className="text-2xl font-bold mb-4 text-green-400">
        Welcome to Neural Portfolio Interface
      </h1>
      <p className="text-green-300 mb-4">
        This is Khushi Joshi's interactive development console.
        Type 'help' to see available commands or explore the interface.
      </p>
      <div className="quick-commands">
        <div className="command-suggestion">
          <FiCommand className="inline mr-2" />
          Try: <span className="command-text">about</span>, <span className="command-text">projects</span>, <span className="command-text">skills</span>
        </div>
      </div>
    </div>
  </div>
);

const AboutView = () => (
  <div className="terminal-view">
    <div className="data-card">
      <h2 className="text-xl font-bold mb-4 text-green-400">Personal Data</h2>
      <div className="json-view">
        <pre>{`{
  "name": "Khushi Joshi",
  "title": "Full Stack Developer & Data Scientist",
  "location": "Bengaluru, India",
  "education": "B.E. Computer Science",
  "specialties": [
    "Web Development",
    "Data Science & ML",
    "UI/UX Design",
    "Problem Solving"
  ],
  "current_focus": "Building innovative solutions",
  "personality": "Creative, detail-oriented, passionate about technology"
}`}</pre>
      </div>
    </div>
  </div>
);

const ProjectsView = () => (
  <div className="terminal-view">
    <div className="projects-grid">
      <h2 className="text-xl font-bold mb-4 text-green-400">Project Database</h2>
      <div className="project-cards">
        {[
          { name: 'Health Checkup App', tech: 'Python, ML', status: 'featured' },
          { name: 'Krochet Store', tech: 'Web Development', status: 'featured' },
          { name: 'Stock Sentiment Analyzer', tech: 'NLP, ML', status: 'active' }
        ].map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <span className="project-name">{project.name}</span>
              {project.status === 'featured' && <span className="status-badge featured">★</span>}
            </div>
            <div className="project-tech">{project.tech}</div>
            <div className="project-links">
              <button className="terminal-btn">View Code</button>
              <button className="terminal-btn">Live Demo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SkillsView = () => (
  <div className="terminal-view">
    <div className="skills-visualization">
      <h2 className="text-xl font-bold mb-4 text-green-400">Skill Matrix</h2>
      <div className="skills-grid">
        {[
          { category: 'Programming', skills: ['Python 90%', 'JavaScript 85%', 'React 80%'] },
          { category: 'Data Science', skills: ['ML 85%', 'Data Analysis 90%', 'SQL 80%'] },
          { category: 'Tools', skills: ['Git 85%', 'VS Code 90%', 'Figma 75%'] }
        ].map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skill-bars">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-bar">
                  <div className="skill-name">{skill}</div>
                  <div className="bar-container">
                    <div className="skill-progress" style={{ width: skill.match(/\d+%/)?.[0] || '80%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactView = () => (
  <div className="terminal-view">
    <div className="contact-interface">
      <h2 className="text-xl font-bold mb-4 text-green-400">Communication Interface</h2>
      <div className="contact-methods">
        <div className="contact-method">
          <FiMail className="text-2xl mr-3" />
          <div>
            <div className="method-title">Email</div>
            <div className="method-value">khushijoshi.amcec@gmail.com</div>
          </div>
        </div>
        <div className="contact-method">
          <FiGithub className="text-2xl mr-3" />
          <div>
            <div className="method-title">GitHub</div>
            <div className="method-value">github.com/khushijoshi</div>
          </div>
        </div>
        <div className="contact-method">
          <FiLinkedin className="text-2xl mr-3" />
          <div>
            <div className="method-title">LinkedIn</div>
            <div className="method-value">linkedin.com/in/khushi-kalpesh-joshi</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Terminal;
