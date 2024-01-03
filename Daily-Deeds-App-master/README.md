# DailyDeeds - Full Stack Task Management App
The DailyDeeds app is a full-stack application that provides users with the tools to efficiently manage their daily tasks, track progress, and enhance productivity. It is designed to streamline daily task management and boost personal organization. Here's a breakdown of the key features and deployment details for DailyDeeds:

# User Stories
1 - User Registration and Login: Users can create accounts, log in securely, and access their personalized dashboard.<br />
2 - Task Management: Users can add, edit, and delete tasks from their to-do lists.<br />
3- Progress Tracking: Visualize task progress using a progress bar, helping users monitor their accomplishments.<br />
4 - User-Friendly Interface: The app boasts an intuitive and user-friendly design that simplifies navigation, task management, and progress tracking.<br />
5 - Responsive Design: DailyDeeds is responsive, adapting to various screen sizes and devices, ensuring accessibility on desktops, tablets, and mobiles.<br />

# Project Goal
The primary goal of DailyDeeds is to empower users to efficiently manage their daily tasks, track progress, and enhance productivity. With user authentication, task management, and progress tracking, the app offers a comprehensive solution for staying organized and on top of daily responsibilities.

# Deployment 1 : 
DailyDeeds is deployed using a combination of services:<br />
***Frontend:*** Hosted on Render.com for reliable and scalable hosting.<br />
***Backend:*** Also hosted on Render.com for high availability and performance.<br />
***Database:*** PostgreSQL is hosted on Vercel.com, offering a secure and scalable database hosting solution.<br />
[App_Link](https://todoapp-client-kcd5.onrender.com/)<br />

# Deployment 2: 
***GitHub Actions Workflow, Docker and AWS Deployment***<br />
GitHub Actions Workflow: A GitHub Actions workflow has been configured with two jobs:<br />
Job 1 - Frontend and Backend Docker Images: This job has two steps:<br />
&nbsp;&nbsp;&nbsp; Step 1: Create a Docker image for the frontend using the provided Dockerfile and push it to Docker Hub.<br />
&nbsp;&nbsp;&nbsp; Step 2: Create a Docker image for the backend using the Dockerfile and push it to Docker Hub.<br />
AWS Deployment: After the Docker images are pushed to Docker Hub, set up an AWS EC2 instance and deploy the app as follows:<br />
Job 2 - Deploy to AWS EC2:<br />
&nbsp;&nbsp;&nbsp; Step 1: Copy the provided Docker Compose file to your AWS EC2 instance.<br />
&nbsp;&nbsp;&nbsp; Step 2: Run the app on AWS using Docker Compose. The Docker Compose file orchestrates the frontend, backend, database containers.

# Demo:
https://github.com/seyyednavid/Daily-Deeds-App/assets/100324062/ea686ae9-bf76-4ca6-8d86-01a7430f7191







