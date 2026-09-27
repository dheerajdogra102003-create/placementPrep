/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: WINDOWS & COMMAND PROMPT
   Practical Windows CLI commands, path navigation, networking & troubleshooting
   ========================================================================== */

(function () {
  window.WINDOWS_QUESTIONS = [
    {
      id: 'win-001',
      question: 'A junior systems support technician is troubleshooting a newly connected Windows workstation that cannot access the company network. Which Windows Command Prompt command outputs the workstation\'s current IP address, subnet mask, default gateway, and DNS server addresses?',
      codeSnippet: '',
      options: [
        'ifconfig -a',
        'ipconfig /all',
        'netstat -rn',
        'tracert localhost'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'practical',
      topic: 'ipconfig & Network Diag',
      explanation: 'On Windows operating systems, `ipconfig` displays basic network adapter configuration. Adding the `/all` switch displays detailed diagnostic information including MAC (Physical) address, DHCP lease timestamps, Default Gateway, and primary/secondary DNS server IPs. (In Linux/UNIX, the equivalent command was `ifconfig` or modern `ip addr`).',
      wrongOptionExplanations: {
        '0': '`ifconfig` is a Linux/UNIX command and is not recognized natively in standard Windows Command Prompt.',
        '2': '`netstat -rn` displays the IP routing table and active network sockets.',
        '3': '`tracert` traces packet hops to a destination, not local interface configuration.'
      },
      realWorldApplication: '`ipconfig /all` followed by `ipconfig /release` and `ipconfig /renew` is the standard first-line troubleshooting procedure for IT helpdesks resolving DHCP IP conflicts.',
      placementTip: 'Windows CLI uses `ipconfig /all` (forward slash switches). Linux/bash uses `ifconfig` or `ip a` (dash switches).'
    },
    {
      id: 'win-002',
      question: 'In Windows Command Prompt, what is the exact difference between the relative path `..\\config.json` and the path `.\\config.json` when executed from `C:\\Projects\\App\\src`?',
      codeSnippet: '',
      options: [
        '`..\\` targets the file in the parent folder (`C:\\Projects\\App\\config.json`), while `.\\` targets the file in the current folder (`C:\\Projects\\App\\src\\config.json`).',
        '`..\\` targets the root drive (`C:\\config.json`), while `.\\` targets the user home directory.',
        '`..\\` creates a new folder, while `.\\` deletes the file.',
        'Both paths resolve to identical directories on Windows filesystems.'
      ],
      correctAnswer: 0,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'Relative vs Absolute Paths',
      explanation: 'In hierarchical filesystems: `.` (single dot) represents the current working directory (`C:\\Projects\\App\\src`). `..` (double dots) represents the immediate parent directory (`C:\\Projects\\App`). Therefore, `..\\config.json` points to the config file located in the parent `App` directory.',
      wrongOptionExplanations: {
        '1': 'Root drive is referenced by `\\` or `C:\\`, not `..\\`.',
        '2': 'Dots are path reference navigation symbols, not file creation/deletion commands.',
        '3': '`..` and `.` have fundamentally distinct parent vs current directory semantics.'
      },
      realWorldApplication: 'Relative path navigation is used extensively in build configuration scripts, import statements, and cross-platform batch automation.',
      placementTip: 'Always remember: Single dot `.` = Here (current directory). Double dot `..` = Up one level (parent directory).'
    },
    {
      id: 'win-003',
      question: 'After installing Python on a Windows computer, typing `python --version` in Command Prompt returns: "\'python\' is not recognized as an internal or external command, operable program or batch file." What is the root cause and remedy?',
      codeSnippet: '',
      options: [
        'The Windows Command Prompt cannot run interpreted languages; PowerShell must be purchased.',
        'The installation directory containing `python.exe` is missing from the system or user `PATH` Environment Variable.',
        'The Windows Defender firewall blocked the port used by Python CLI.',
        'The file extension `.exe` must always be typed explicitly as `python.exe --version`.'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'debugging',
      topic: 'Environment Variables',
      explanation: 'When a command is executed in Command Prompt, Windows searches the current directory and then sequentially searches every folder listed in the `PATH` environment variable. If the folder containing `python.exe` (e.g. `C:\\Program Files\\Python311\\`) is not in `PATH`, the command interpreter cannot find the executable.',
      wrongOptionExplanations: {
        '0': 'Command Prompt natively executes any CLI binary once registered in PATH; PowerShell is free and pre-installed.',
        '2': 'Firewall rules govern network socket ports, not local command execution.',
        '3': 'Windows executable extensions (`.exe`, `.bat`, `.cmd`) defined in `PATHEXT` are automatically resolved without typing `.exe`.'
      },
      realWorldApplication: 'Configuring system `PATH` and environment variables (`JAVA_HOME`, `PYTHONPATH`, `NODE_PATH`) is a mandatory setup step in all developer onboarding.',
      placementTip: '"Not recognized as an internal or external command" ALWAYS means: Executable folder is not added to the Windows PATH Environment Variable!'
    },
    {
      id: 'win-004',
      question: 'A developer needs to recursively remove a non-empty directory named `temp_build` along with all its nested subdirectories and files silently without being prompted for confirmation. Which command achieves this in Command Prompt?',
      codeSnippet: '',
      options: [
        'del temp_build',
        'rmdir /s /q temp_build',
        'mkdir /force temp_build',
        'cls /r temp_build'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'practical',
      topic: 'Directory & File Commands',
      explanation: 'In Windows Command Prompt, `rmdir` (or `rd`) removes directories. By default, it fails on non-empty directories. The `/s` switch instructs it to remove all directories and files in the specified directory tree in addition to the directory itself. The `/q` switch sets "quiet mode", suppressing the confirmation prompt `Are you sure (Y/N)?`.',
      wrongOptionExplanations: {
        '0': '`del` deletes individual files, not directory trees, and will prompt before deleting files inside folders.',
        '2': '`mkdir` creates directories, not deletes them.',
        '3': '`cls` clears the screen buffer and does not accept directory arguments.'
      },
      realWorldApplication: 'CI/CD batch cleaning scripts use `rmdir /s /q dist` to purge old build artifacts before generating fresh production release packages.',
      placementTip: 'Windows Command switches: `/s` = Subdirectories (recursive), `/q` = Quiet (no confirmation prompt).'
    },
    {
      id: 'win-005',
      question: 'A network engineer wants to test continuous network reachability to an external server `8.8.8.8` during maintenance, rather than stopping after the default 4 packets. Which flag must be appended to the `ping` command in Windows?',
      codeSnippet: '',
      options: [
        'ping -c 8.8.8.8',
        'ping -t 8.8.8.8',
        'ping -l 8.8.8.8',
        'ping --forever 8.8.8.8'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'practical',
      topic: 'ipconfig & Network Diag',
      explanation: 'In Windows, `ping -t <target>` pings the specified host continuously until manually interrupted by the user with `Ctrl+C` (or statistics checked with `Ctrl+Break`). By contrast, Linux uses `ping <target>` for continuous pings by default and uses `-c <count>` to limit packets.',
      wrongOptionExplanations: {
        '0': '`-c` is the packet count flag on Linux/macOS, not the continuous flag in Windows.',
        '2': '`-l` sets the ICMP buffer size (packet payload length in bytes).',
        '3': '`--forever` is not a valid flag in the Windows ping utility.'
      },
      realWorldApplication: 'Running `ping -t` during router reboots or switch failover testing provides visual confirmation of the exact moment packet connectivity is restored.',
      placementTip: 'Windows `ping -t` = Ping continuously until Ctrl+C. Contrast with Linux where ping is continuous by default.'
    }
  ];
})();
