const questionBank = [
  { id: 1, question: "Which command displays the files and folders in the current directory?", options: ["cd", "dir", "cls", "mkdir"], correctAnswer: 1, difficulty: "Easy", topic: "Navigation", concept: "dir command", explanation: { correct: "dir lists the contents of the current directory.", realWorld: "Use dir before changing folders to inspect what is available." } },
  { id: 2, question: "Which command changes the current working directory to a folder named Reports?", options: ["dir Reports", "cd Reports", "move Reports", "mkdir Reports"], correctAnswer: 1, difficulty: "Easy", topic: "Navigation", concept: "cd command", explanation: { correct: "cd Reports moves the prompt into the Reports folder.", realWorld: "Use cd to move through a project folder structure from Command Prompt." } },
  { id: 3, question: "What does cd .. do at a Windows command prompt?", options: ["Opens the root of the drive", "Creates a parent folder", "Moves to the parent directory", "Lists the parent directory"], correctAnswer: 2, difficulty: "Easy", topic: "Navigation", concept: "parent directory", explanation: { correct: "The two dots represent the directory one level above the current location.", realWorld: "Use cd .. to back out of a nested project folder quickly." } },
  { id: 4, question: "Which command creates a new directory named Practice?", options: ["rmdir Practice", "cd Practice", "mkdir Practice", "dir Practice"], correctAnswer: 2, difficulty: "Easy", topic: "Directory Management", concept: "mkdir command", explanation: { correct: "mkdir creates a new directory with the supplied name.", realWorld: "Create a workspace for practice files with mkdir Practice." } },
  { id: 5, question: "Which command removes an empty directory named Temp?", options: ["del Temp", "rmdir Temp", "remove Temp", "cls Temp"], correctAnswer: 1, difficulty: "Easy", topic: "Directory Management", concept: "rmdir command", explanation: { correct: "rmdir removes a directory when it is empty.", realWorld: "Clean up an unused empty folder with rmdir Temp." } },
  { id: 6, question: "Which command copies report.txt to a folder named Backup?", options: ["copy report.txt Backup", "move report.txt Backup", "cd report.txt Backup", "dir report.txt Backup"], correctAnswer: 0, difficulty: "Easy", topic: "File Management", concept: "copy command", explanation: { correct: "copy takes a source file and destination and leaves the original in place.", realWorld: "Make a backup copy of a document before editing it." } },
  { id: 7, question: "Which command moves notes.txt from the current folder into Archive?", options: ["copy notes.txt Archive", "move notes.txt Archive", "mkdir notes.txt Archive", "rmdir notes.txt Archive"], correctAnswer: 1, difficulty: "Easy", topic: "File Management", concept: "move command", explanation: { correct: "move relocates the file to Archive rather than keeping a second copy.", realWorld: "Move completed work into an Archive folder to keep a project tidy." } },
  { id: 8, question: "Which command deletes a file named old.log?", options: ["rmdir old.log", "del old.log", "cls old.log", "cd old.log"], correctAnswer: 1, difficulty: "Easy", topic: "File Management", concept: "del command", explanation: { correct: "del removes a file from the current directory.", realWorld: "Remove an obsolete log file after confirming it is no longer needed." } },
  { id: 9, question: "Which command clears the text currently visible in Command Prompt?", options: ["clear", "reset", "cls", "del"], correctAnswer: 2, difficulty: "Easy", topic: "Command Prompt Interface", concept: "cls command", explanation: { correct: "cls clears the visible command history from the console window.", realWorld: "Use cls to make a fresh troubleshooting view without closing the prompt." } },
  { id: 10, question: "Which command shows a computer's IP address configuration?", options: ["ping", "ipconfig", "dir", "cd"], correctAnswer: 1, difficulty: "Easy", topic: "Networking Basics", concept: "ipconfig command", explanation: { correct: "ipconfig displays local adapter and IP configuration details.", realWorld: "Run ipconfig when checking which local address a machine received." } },
  { id: 11, question: "What is the main purpose of ping 192.168.1.1?", options: ["To change the computer's IP", "To list network adapters", "To test reachability of that address", "To copy a file to that address"], correctAnswer: 2, difficulty: "Easy", topic: "Networking Basics", concept: "ping command", explanation: { correct: "ping sends connectivity checks to the specified host and reports responses.", realWorld: "Test whether a gateway or server responds before investigating an application." } },
  { id: 12, question: "Which command changes to the absolute path C:\\Work\\Reports?", options: ["dir C:\\Work\\Reports", "cd C:\\Work\\Reports", "move C:\\Work\\Reports", "mkdir C:\\Work\\Reports"], correctAnswer: 1, difficulty: "Medium", topic: "Navigation", concept: "absolute paths", explanation: { correct: "An absolute path identifies the complete location from the drive root.", realWorld: "Use an absolute path when a script must work from any starting directory." } },
  { id: 13, question: "A prompt shows C:\\Users\\Sam\\Project>. Which command reaches C:\\Users\\Sam\\Data using a relative path?", options: ["cd ..\\Data", "cd Data\\..", "cd \\Data", "dir ..\\Data"], correctAnswer: 0, difficulty: "Medium", topic: "Navigation", concept: "relative paths", explanation: { correct: "From Project, .. moves to Sam and then Data enters the sibling folder.", realWorld: "Relative paths keep project scripts portable across different drive letters." } },
  { id: 14, question: "What happens when mkdir Archive is run while Archive already exists?", options: ["The existing folder is renamed", "A second identical folder is created", "The command reports that the directory already exists", "All files in Archive are deleted"], correctAnswer: 2, difficulty: "Medium", topic: "Directory Management", concept: "mkdir behavior", explanation: { correct: "Windows cannot create another directory with the same name in the same location.", realWorld: "Check with dir before creating setup folders in repeatable scripts." } },
  { id: 15, question: "Why can rmdir Logs fail even when the Logs folder is visible?", options: ["rmdir only works on files", "The directory may not be empty", "The folder name must be uppercase", "rmdir requires an IP address"], correctAnswer: 1, difficulty: "Medium", topic: "Directory Management", concept: "rmdir behavior", explanation: { correct: "The basic rmdir command requires the target directory to be empty.", realWorld: "List and remove or move contents before deleting a leftover folder." } },
  { id: 16, question: "What is the key difference between copy file.txt Backup and move file.txt Backup?", options: ["copy creates a duplicate; move relocates the original", "copy deletes the source; move creates a duplicate", "copy changes folders; move lists files", "There is no difference"], correctAnswer: 0, difficulty: "Medium", topic: "Command Comparison", concept: "copy vs move", explanation: { correct: "copy preserves the source while move transfers it to the destination.", realWorld: "Choose copy for backups and move for reorganizing files." } },
  { id: 17, question: "Which command should be used to remove a file, not an empty folder?", options: ["rmdir", "del", "mkdir", "cd"], correctAnswer: 1, difficulty: "Medium", topic: "Command Comparison", concept: "del vs rmdir", explanation: { correct: "del targets files, while rmdir targets directories.", realWorld: "Identify the item type before deleting it to avoid a command error." } },
  { id: 18, question: "Which command gives the contents of the current folder without changing the prompt location?", options: ["cd", "dir", "move", "mkdir"], correctAnswer: 1, difficulty: "Medium", topic: "Command Comparison", concept: "cd vs dir", explanation: { correct: "dir reads and displays contents; it does not alter the working directory.", realWorld: "Use dir to inspect a location before choosing a file operation." } },
  { id: 19, question: "Which statement correctly compares ipconfig and ping?", options: ["ipconfig tests a remote host; ping displays local IP settings", "Both commands delete network settings", "ipconfig displays local configuration; ping tests reachability", "ping creates a new network adapter"], correctAnswer: 2, difficulty: "Medium", topic: "Command Comparison", concept: "ipconfig vs ping", explanation: { correct: "ipconfig reports local network configuration, while ping checks a target response.", realWorld: "Run ipconfig first for local facts, then ping to isolate connectivity." } },
  { id: 20, question: "A file is in C:\\Work and the destination folder is C:\\Work\\Backup. Which command preserves the original?", options: ["move report.txt Backup", "copy report.txt Backup", "del report.txt Backup", "rmdir report.txt Backup"], correctAnswer: 1, difficulty: "Medium", topic: "File Management", concept: "copy syntax", explanation: { correct: "copy sends a duplicate to Backup and leaves report.txt in Work.", realWorld: "Use copy when preserving a source is important for recovery or comparison." } },
  { id: 21, question: "Which command is best to verify the exact files that were copied into Backup?", options: ["cd Backup", "dir Backup", "cls Backup", "ipconfig Backup"], correctAnswer: 1, difficulty: "Medium", topic: "File Management", concept: "output interpretation", explanation: { correct: "dir Backup lists the destination directory contents.", realWorld: "Verify a file operation with dir before deleting the source." } },
  { id: 22, question: "After running ping 10.0.0.8, which output most strongly indicates the host responded?", options: ["Request timed out", "Destination host unreachable", "Reply from 10.0.0.8", "The syntax of the command is incorrect"], correctAnswer: 2, difficulty: "Hard", topic: "Networking Basics", concept: "ping output", explanation: { correct: "Reply from the target address confirms that a response was received.", realWorld: "Use a reply as an initial signal that a server or gateway is reachable." } },
  { id: 23, question: "A developer receives 'The system cannot find the path specified' after cd Project\\API. What should be checked first?", options: ["Whether the path exists relative to the current directory", "Whether ping is enabled", "Whether the screen is clear", "Whether the IP address changed"], correctAnswer: 0, difficulty: "Hard", topic: "Navigation", concept: "path troubleshooting", explanation: { correct: "cd resolves the path from the current location, so a missing folder or wrong starting point is the first check.", realWorld: "Use dir at each level to find a misspelled or misplaced project folder." } },
  { id: 24, question: "A script runs from C:\\Build and must create C:\\Build\\Output before copying files. Which sequence is valid?", options: ["mkdir Output, then copy *.txt Output", "rmdir Output, then cd Output", "del Output, then copy Output", "ping Output, then mkdir *.txt"], correctAnswer: 0, difficulty: "Hard", topic: "Directory Management", concept: "scenario-based syntax", explanation: { correct: "The destination directory must exist before files can be copied into it.", realWorld: "Create build output directories before placing generated artifacts there." } },
  { id: 25, question: "Which sequence moves a file from the current directory into an existing Archive folder and then verifies it?", options: ["move report.txt Archive, then dir Archive", "copy Archive report.txt, then cls", "mkdir report.txt, then rmdir Archive", "cd report.txt, then ipconfig Archive"], correctAnswer: 0, difficulty: "Hard", topic: "File Management", concept: "practical command usage", explanation: { correct: "move performs the relocation and dir confirms the destination contents.", realWorld: "Verify a cleanup operation immediately after moving a completed file." } },
  { id: 26, question: "A laptop has an IP address but cannot reach a gateway. Which first command best tests the gateway itself?", options: ["cls", "mkdir", "ping", "rmdir"], correctAnswer: 2, difficulty: "Hard", topic: "Networking Basics", concept: "connectivity troubleshooting", explanation: { correct: "ping tests whether the gateway responds over the network.", realWorld: "Ping the gateway to separate local network issues from broader internet issues." } },
  { id: 27, question: "Which sequence creates a folder, enters it, and confirms the prompt is showing its contents?", options: ["mkdir Lab, cd Lab, dir", "dir Lab, rmdir Lab, cd Lab", "cd Lab, del Lab, cls", "copy Lab, ping Lab, mkdir Lab"], correctAnswer: 0, difficulty: "Hard", topic: "Command Comparison", concept: "command sequencing", explanation: { correct: "mkdir creates Lab, cd enters it, and dir displays its contents.", realWorld: "This is a common setup sequence for a new practice or project directory." } },
  { id: 28, question: "A user runs del Reports and gets an error because Reports is a directory. Which command is appropriate only if the directory is empty?", options: ["rmdir Reports", "copy Reports", "ping Reports", "cd Reports"], correctAnswer: 0, difficulty: "Hard", topic: "Command Comparison", concept: "file vs directory", explanation: { correct: "rmdir is the directory-removal command and works for an empty target.", realWorld: "Use rmdir after checking that a temporary directory contains no required files." } },
  { id: 29, question: "Which command is most useful for checking the local address before testing that address with ping?", options: ["ipconfig", "dir", "move", "cls"], correctAnswer: 0, difficulty: "Hard", topic: "Networking Basics", concept: "diagnostic workflow", explanation: { correct: "ipconfig reveals the machine's configured IPv4 address and gateway information.", realWorld: "Inspect local network values with ipconfig before selecting a target for testing." } },
  { id: 30, question: "A teammate wants to clean the screen but keep all files untouched. Which command has exactly that effect?", options: ["del", "cls", "rmdir", "move"], correctAnswer: 1, difficulty: "Hard", topic: "Command Prompt Interface", concept: "safe command selection", explanation: { correct: "cls affects only the visible console display and does not modify files.", realWorld: "Use cls between troubleshooting steps to keep the console output readable without changing system data." } }
];

const state = { questions: [], current: 0, answers: [] };
const byId = (id) => document.getElementById(id);
const shuffle = (items) => items.map((item) => ({ item, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ item }) => item);

function createAttempt() {
  state.questions = shuffle(questionBank).map((question) => ({
    ...question,
    options: shuffle(question.options.map((text, index) => ({ text, originalIndex: index })))
  }));
  state.answers = state.questions.map(() => null);
  state.current = 0;
}

function answeredCount() { return state.answers.filter(Boolean).length; }
function correctCount() { return state.answers.filter((answer) => answer && answer.correct).length; }
function percent() { return Math.round((correctCount() / state.questions.length) * 100); }

function renderQuestion() {
  const question = state.questions[state.current];
  const answer = state.answers[state.current];
  const number = String(state.current + 1).padStart(2, "0");
  byId("questionLabel").textContent = `Question ${number} / ${state.questions.length}`;
  byId("questionNumber").textContent = number;
  byId("questionValue").textContent = state.current + 1;
  byId("difficultyBadge").textContent = question.difficulty;
  byId("topicLabel").textContent = question.topic;
  byId("conceptValue").textContent = question.concept;
  byId("questionText").textContent = question.question;
  byId("progressFill").style.width = `${((state.current + 1) / state.questions.length) * 100}%`;
  const options = byId("optionsGrid");
  options.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.dataset.index = index;
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option.text}</span>`;
    button.addEventListener("click", () => selectAnswer(index));
    options.appendChild(button);
  });
  byId("previousButton").disabled = state.current === 0;
  byId("nextButton").disabled = !answer;
  byId("nextButton").textContent = state.current === state.questions.length - 1 ? "See results →" : "Next question →";
  byId("feedbackPanel").hidden = !answer;
  if (answer) showAnswer(answer);
  updateScore();
}

function selectAnswer(selectedIndex) {
  if (state.answers[state.current]) return;
  const question = state.questions[state.current];
  const correct = question.options[selectedIndex].originalIndex === question.correctAnswer;
  state.answers[state.current] = { selectedIndex, correct };
  showAnswer(state.answers[state.current]);
  byId("nextButton").disabled = false;
  updateScore();
}

function showAnswer(answer) {
  const question = state.questions[state.current];
  const buttons = [...document.querySelectorAll(".option-button")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (question.options[index].originalIndex === question.correctAnswer) button.classList.add("is-correct");
    if (index === answer.selectedIndex && !answer.correct) button.classList.add("is-wrong");
  });
  const correctOption = question.options.find((option) => option.originalIndex === question.correctAnswer);
  const feedbackTitle = byId("feedbackTitle");
  feedbackTitle.textContent = answer.correct ? "Correct!" : "Incorrect";
  feedbackTitle.className = answer.correct ? "is-correct" : "is-wrong";
  byId("feedbackIcon").textContent = answer.correct ? "✓" : "×";
  byId("correctAnswerText").textContent = correctOption.text;
  byId("explanationText").textContent = question.explanation.correct;
  byId("otherOptionsText").textContent = question.options
    .filter((option) => option.originalIndex !== question.correctAnswer)
    .map((option) => `${option.text} is not the correct command or result for this scenario.`)
    .join(" ");
  byId("realWorldText").textContent = question.explanation.realWorld;
  byId("feedbackPanel").hidden = false;
}

function updateScore() {
  const correct = correctCount();
  byId("scoreValue").textContent = `${percent()}%`;
  byId("correctValue").textContent = correct;
  byId("incorrectValue").textContent = answeredCount() - correct;
  byId("totalValue").textContent = state.questions.length;
}

function nextQuestion() {
  if (!state.answers[state.current]) return;
  if (state.current === state.questions.length - 1) showResults();
  else { state.current += 1; renderQuestion(); window.scrollTo({ top: 0, behavior: "smooth" }); }
}

function previousQuestion() {
  if (state.current > 0) { state.current -= 1; renderQuestion(); window.scrollTo({ top: 0, behavior: "smooth" }); }
}

function showResults() {
  byId("quizView").hidden = true;
  byId("resultView").hidden = false;
  const score = percent();
  byId("finalScore").textContent = `${score}%`;
  byId("finalCorrect").textContent = correctCount();
  byId("finalIncorrect").textContent = state.questions.length - correctCount();
  byId("performanceLevel").textContent = score >= 90 ? "Excellent" : score >= 75 ? "Good" : score >= 50 ? "Needs Improvement" : "Needs More Practice";
  renderReview();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderReview() {
  const list = byId("reviewList");
  list.innerHTML = "";
  state.questions.forEach((question, index) => {
    const answer = state.answers[index];
    const selected = question.options[answer.selectedIndex].text;
    const correct = question.options.find((option) => option.originalIndex === question.correctAnswer).text;
    const item = document.createElement("article");
    item.className = "review-item";
    item.innerHTML = `<div><h3>${String(index + 1).padStart(2, "0")}. ${question.question}</h3><span class="review-result ${answer.correct ? "correct" : "incorrect"}">${answer.correct ? "correct" : "incorrect"}</span></div><p>Your answer: ${selected}</p><p>Correct answer: ${correct} · ${question.difficulty} · ${question.topic}</p>`;
    list.appendChild(item);
  });
}

function restartQuiz() {
  createAttempt();
  byId("resultView").hidden = true;
  byId("quizView").hidden = false;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

byId("nextButton").addEventListener("click", nextQuestion);
byId("previousButton").addEventListener("click", previousQuestion);
byId("headerRestart").addEventListener("click", restartQuiz);
byId("retryButton").addEventListener("click", restartQuiz);

const themeToggle = byId("themeToggle");
if (themeToggle) {
  const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || (!savedTheme && isSystemDark)) {
    document.body.classList.add("dark-mode");
  }
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
}
byId("reviewButton").addEventListener("click", () => byId("reviewList").scrollIntoView({ behavior: "smooth" }));
createAttempt();
renderQuestion();