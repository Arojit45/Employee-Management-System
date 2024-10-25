const Employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Complete project report",
        "taskDescription": "Finalize and submit the report for Project Alpha.",
        "taskDate": "2024-10-25",
        "category": "Project",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update CRM data",
        "taskDescription": "Ensure all customer data is up-to-date in the CRM system.",
        "taskDate": "2024-10-26",
        "category": "Admin",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team meeting preparation",
        "taskDescription": "Prepare slides and agenda for the weekly team meeting.",
        "taskDate": "2024-10-27",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Review codebase",
        "taskDescription": "Review and refactor the main repository for better performance.",
        "taskDate": "2024-10-23",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Attend client meeting",
        "taskDescription": "Join the virtual meeting with clients to discuss feedback.",
        "taskDate": "2024-10-28",
        "category": "Client",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Write blog post",
        "taskDescription": "Create a new blog post for the company website.",
        "taskDate": "2024-10-25",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix bug #432",
        "taskDescription": "Resolve the login issue reported by the user team.",
        "taskDate": "2024-10-24",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Develop user feedback system",
        "taskDescription": "Implement a system for gathering and analyzing user feedback.",
        "taskDate": "2024-10-29",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Office supplies order",
        "taskDescription": "Order essential office supplies for the next quarter.",
        "taskDate": "2024-10-30",
        "category": "Admin",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Database migration",
        "taskDescription": "Plan and execute the migration to the new database system.",
        "taskDate": "2024-10-31",
        "category": "Database",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare training material",
        "taskDescription": "Create training materials for new employees.",
        "taskDate": "2024-10-24",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 6,
    "email": "employee6@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Organize workshop",
        "taskDescription": "Organize and schedule the upcoming technical workshop.",
        "taskDate": "2024-10-31",
        "category": "Training",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix mobile app UI issue",
        "taskDescription": "Resolve the UI bug on the mobile version of the app.",
        "taskDate": "2024-10-28",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Respond to client emails",
        "taskDescription": "Reply to all pending client emails by the end of the week.",
        "taskDate": "2024-10-26",
        "category": "Client",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 7,
    "email": "employee7@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Update social media profiles",
        "taskDescription": "Ensure all company social media accounts are updated with current information.",
        "taskDate": "2024-10-29",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare client proposal",
        "taskDescription": "Draft the proposal for the new potential client.",
        "taskDate": "2024-10-27",
        "category": "Client",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team lunch organization",
        "taskDescription": "Plan and organize the upcoming team lunch event.",
        "taskDate": "2024-11-01",
        "category": "Events",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Test API integration",
        "taskDescription": "Test and validate the new API integration with the payment system.",
        "taskDate": "2024-10-26",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 8,
    "email": "employee8@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create quarterly report",
        "taskDescription": "Compile and submit the report for Q3 performance.",
        "taskDate": "2024-10-29",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client onboarding",
        "taskDescription": "Onboard the new client and set up their account.",
        "taskDate": "2024-10-27",
        "category": "Client",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update project management tool",
        "taskDescription": "Ensure all tasks and timelines are updated in the project management tool.",
        "taskDate": "2024-10-28",
        "category": "Admin",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Fix server downtime issue",
        "taskDescription": "Investigate and resolve the recurring server downtime.",
        "taskDate": "2024-10-25",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 9,
    "email": "employee9@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Schedule team building activity",
        "taskDescription": "Plan a team-building activity for the next offsite event.",
        "taskDate": "2024-11-02",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update company website",
        "taskDescription": "Make necessary updates to the homepage of the company website.",
        "taskDate": "2024-10-30",
        "category": "Web",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Prepare for client presentation",
        "taskDescription": "Prepare slides and present updates for the client's upcoming meeting.",
        "taskDate": "2024-10-25",
        "category": "Client",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 10,
    "email": "employee10@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Fix database performance issue",
        "taskDescription": "Optimize the database queries to resolve performance bottlenecks.",
        "taskDate": "2024-10-31",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Conduct security audit",
        "taskDescription": "Perform a full security audit of the company servers.",
        "taskDate": "2024-10-28",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Complete employee feedback survey",
        "taskDescription": "Submit feedback for the annual employee survey.",
        "taskDate": "2024-10-25",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 11,
    "email": "employee11@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create marketing plan",
        "taskDescription": "Develop the strategy for the next product launch.",
        "taskDate": "2024-10-31",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Lead project kickoff meeting",
        "taskDescription": "Facilitate the kickoff meeting for the new project.",
        "taskDate": "2024-10-26",
        "category": "Project",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Prepare financial forecast",
        "taskDescription": "Generate a financial forecast for the upcoming fiscal year.",
        "taskDate": "2024-10-29",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
];

// Additional employees omitted for brevity...

  
  // Additional employees omitted for brevity...
  

  const Admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]
 
  
export const setLocalStorage =()=>{
  localStorage.setItem('employees',JSON.stringify(Employees))
  localStorage.setItem('admin',JSON.stringify(Admin))
  
}
export const getLocalStorage =()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return(employees,admin)



}
  