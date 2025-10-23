export const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    password: "123",
    tasks: [
      { title: "Prepare Sales Report", category: "Finance", date: "2025-10-18", description: "Compile the quarterly sales data and prepare a report for management.", active: false, newTask: true, completed: false, failed: false, priority: "High" },
      { title: "Client Meeting", category: "Business", date: "2025-10-19", description: "Discuss project progress with the client and share next milestones.", active: true, newTask: false, completed: false, failed: false, priority: "Medium" },
      { title: "Email Campaign", category: "Marketing", date: "2025-10-20", description: "Design and schedule an email campaign for product promotion.", active: false, newTask: false, completed: true, failed: false, priority: "Low" },
      { title: "Team Meeting", category: "Management", date: "2025-10-21", description: "Weekly team meeting to review project progress.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Budget Planning", category: "Finance", date: "2025-10-22", description: "Plan budget for upcoming marketing campaign.", active: false, newTask: true, completed: false, failed: false, priority: "Medium" },
      { title: "Client Feedback", category: "Business", date: "2025-10-23", description: "Gather client feedback on current projects.", active: false, newTask: false, completed: true, failed: false, priority: "Low" },
      { title: "Product Launch Prep", category: "Marketing", date: "2025-10-24", description: "Prepare materials and campaigns for product launch.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Sales Call", category: "Sales", date: "2025-10-25", description: "Call potential clients and pitch new services.", active: false, newTask: true, completed: false, failed: false, priority: "Medium" },
      { title: "Competitor Analysis", category: "Marketing", date: "2025-10-26", description: "Analyze competitor campaigns and performance.", active: false, newTask: false, completed: true, failed: false, priority: "Low" },
      { title: "Internal Training", category: "HR", date: "2025-10-27", description: "Attend internal training session on new tools.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
    ],
  },
  {
    id: 2,
    name: "Neha Verma",
    email: "neha.verma@example.com",
    password: "123",
    tasks: [
      { title: "Code Review", category: "Development", date: "2025-10-18", description: "Review pull requests and ensure code quality before merge.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Bug Fixing", category: "Development", date: "2025-10-20", description: "Fix reported UI and API bugs.", active: false, newTask: false, completed: false, failed: true, priority: "Medium" },
      { title: "Team Sync", category: "Management", date: "2025-10-21", description: "Conduct a daily stand-up meeting with the development team.", active: false, newTask: true, completed: false, failed: false, priority: "Low" },
      { title: "Deploy Update", category: "Development", date: "2025-10-22", description: "Deploy latest code updates to production.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Unit Testing", category: "Development", date: "2025-10-23", description: "Write unit tests for new features.", active: false, newTask: true, completed: false, failed: false, priority: "Medium" },
      { title: "Client Demo", category: "Business", date: "2025-10-24", description: "Demo the product to the client.", active: false, newTask: false, completed: true, failed: false, priority: "High" },
      { title: "Documentation Update", category: "Technical", date: "2025-10-25", description: "Update API documentation.", active: false, newTask: false, completed: true, failed: false, priority: "Low" },
      { title: "Code Refactoring", category: "Development", date: "2025-10-26", description: "Refactor legacy code for efficiency.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Database Backup", category: "IT", date: "2025-10-27", description: "Take backup of database before release.", active: false, newTask: false, completed: true, failed: false, priority: "Medium" },
      { title: "Sprint Planning", category: "Management", date: "2025-10-28", description: "Plan tasks for next sprint.", active: true, newTask: true, completed: false, failed: false, priority: "Low" },
    ],
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    password: "123",
    tasks: [
      { title: "Market Research", category: "Marketing", date: "2025-10-17", description: "Analyze competitors’ strategies and pricing trends.", active: false, newTask: false, completed: true, failed: false, priority: "Medium" },
      { title: "Content Creation", category: "Design", date: "2025-10-19", description: "Create blog and social media content for the new campaign.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Ad Performance Review", category: "Marketing", date: "2025-10-21", description: "Review and report performance of recent ad campaigns.", active: false, newTask: true, completed: false, failed: false, priority: "Low" },
      { title: "Graphic Design", category: "Design", date: "2025-10-22", description: "Design new banners for the website.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "SEO Analysis", category: "Marketing", date: "2025-10-23", description: "Analyze website traffic and SEO metrics.", active: false, newTask: true, completed: false, failed: false, priority: "Medium" },
      { title: "Social Media Campaign", category: "Marketing", date: "2025-10-24", description: "Run ad campaigns on social media platforms.", active: false, newTask: false, completed: true, failed: false, priority: "Low" },
      { title: "Customer Research", category: "Business", date: "2025-10-25", description: "Interview clients to gather insights.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Email Newsletter", category: "Marketing", date: "2025-10-26", description: "Prepare monthly newsletter for subscribers.", active: false, newTask: false, completed: true, failed: false, priority: "Medium" },
      { title: "Webinar Preparation", category: "Marketing", date: "2025-10-27", description: "Prepare slides and content for webinar.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Performance Report", category: "Management", date: "2025-10-28", description: "Compile employee performance reports.", active: false, newTask: true, completed: false, failed: false, priority: "Low" },
    ],
  },
  {
    id: 4,
    name: "Simran Kaur",
    email: "simran.kaur@example.com",
    password: "123",
    tasks: [
      { title: "Server Maintenance", category: "IT", date: "2025-10-18", description: "Perform server updates and ensure uptime.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Security Audit", category: "IT", date: "2025-10-20", description: "Run penetration tests and security scans on backend systems.", active: false, newTask: false, completed: true, failed: false, priority: "Medium" },
      { title: "Documentation", category: "Technical", date: "2025-10-22", description: "Update the internal API documentation with recent changes.", active: false, newTask: true, completed: false, failed: false, priority: "Low" },
      { title: "Software Update", category: "IT", date: "2025-10-23", description: "Update company software to latest version.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Team Meeting", category: "Management", date: "2025-10-24", description: "Discuss project milestones with team.", active: false, newTask: true, completed: false, failed: false, priority: "Medium" },
      { title: "Client Report", category: "Business", date: "2025-10-25", description: "Prepare report for client meeting.", active: false, newTask: false, completed: true, failed: false, priority: "Low" },
      { title: "Backup Data", category: "IT", date: "2025-10-26", description: "Backup all project data.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Network Check", category: "IT", date: "2025-10-27", description: "Ensure all networks are stable.", active: false, newTask: false, completed: true, failed: false, priority: "Medium" },
      { title: "Security Training", category: "HR", date: "2025-10-28", description: "Conduct security awareness training for employees.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "System Audit", category: "IT", date: "2025-10-29", description: "Audit all systems for compliance.", active: false, newTask: true, completed: false, failed: false, priority: "Low" },
    ],
  },
  {
    id: 5,
    name: "Kabir Patel",
    email: "kabir.patel@example.com",
    password: "123",
    tasks: [
      { title: "Customer Feedback Review", category: "Support", date: "2025-10-18", description: "Analyze customer feedback to identify improvement areas.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Ticket Resolution", category: "Support", date: "2025-10-19", description: "Resolve pending customer support tickets.", active: false, newTask: false, completed: true, failed: false, priority: "Medium" },
      { title: "Team Report", category: "Management", date: "2025-10-21", description: "Submit weekly performance reports for the support team.", active: false, newTask: true, completed: false, failed: false, priority: "Low" },
      { title: "Client Call", category: "Support", date: "2025-10-22", description: "Call clients to address issues.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Knowledge Base Update", category: "Technical", date: "2025-10-23", description: "Update internal knowledge base articles.", active: false, newTask: true, completed: false, failed: false, priority: "Medium" },
      { title: "Ticket Audit", category: "Support", date: "2025-10-24", description: "Audit resolved tickets for quality.", active: false, newTask: false, completed: true, failed: false, priority: "Low" },
      { title: "Team Training", category: "HR", date: "2025-10-25", description: "Conduct support team training.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "System Monitoring", category: "IT", date: "2025-10-26", description: "Monitor support system uptime.", active: false, newTask: false, completed: true, failed: false, priority: "Medium" },
      { title: "Client Survey", category: "Business", date: "2025-10-27", description: "Send survey to clients for feedback.", active: true, newTask: false, completed: false, failed: false, priority: "High" },
      { title: "Performance Analysis", category: "Management", date: "2025-10-28", description: "Analyze team performance metrics.", active: false, newTask: true, completed: false, failed: false, priority: "Low" },
    ],
  },
];


const admin = [
  {
    id: 1,
    name: "Rahul Mehra",
    email: "rahul.mehra@example.com",
    password: "123"
  }
];

// export const setLocalStorage = () => {
//   localStorage.setItem('employees', JSON.stringify(employees));
//   localStorage.setItem('admin', JSON.stringify(admin));
// };

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return {employee,admin}
};
