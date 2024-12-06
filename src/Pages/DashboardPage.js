import React from 'react';

function DashboardPage() {
  return (
    <>
      <h2>Dashboard</h2>
      <p>Innovations in healthcare are transforming how we diagnose, treat, and manage health conditions. Here's a closer look at some of the most impactful advancements driving this transformation.</p>
      <p><strong>Telemedicine</strong> has become a cornerstone of modern healthcare, especially since the COVID-19 pandemic. It enables remote diagnosis, monitoring, and treatment to allow for access to care and reducing costs, revolutionizing patient convenience.</p>
      <p><strong>Artificial Intelligence (AI)</strong> is transforming healthcare by advancing diagnostics, predictive analytics, and treatment personalization. It is accelerating drug discovery and patient triage, while AI-powered chatbots and virtual nursing assistants further enhance healthcare access and support.</p>
      <p><strong>Wearable devices</strong> like continuous glucose monitors and smart patches empower patients to monitor and manage their health. Biowearables, particularly in diabetes management, provide clinicians with real-time data for preventive care and are becoming more efficient and user-friendly.</p>
      <p><strong>Robotic surgery systems</strong> enhance precision and enable minimally invasive procedures. Widely adopted technologies like the da Vinci Surgical System provide surgeons with greater control and flexibility, improving outcomes and reducing recovery times.</p>
      <p><strong>Digital twins</strong>, virtual patient models created using real-time data, offer deep predictive insights for personalized treatments. It is also transforming medical training and research.</p>
      <p>Information from <a style={{ color: 'blue', textDecoration: 'underline' }} href="https://www.futurize.studio/blog/emerging-technologies-in-healthcare">Emerging Technologies in Healthcare</a></p>
      <h2>Tech Stack</h2>
      <p>The project leverages a modern tech stack to deliver a robust and scalable application:</p>
      <p>The frontend of the project is built using <strong>React</strong>, providing a dynamic and interactive user experience. It is hosted on an <strong>Apache</strong> web server, ensuring efficient delivery of static assets and a seamless interface for users. The backend is developed with <strong>Node.js</strong> and <strong>Express.js</strong>, forming a scalable and efficient RESTful API that manages application logic and handles communication between the frontend and the database. The project uses <strong>MySQL</strong> for structured data storage and efficient querying, ensuring secure and reliable management of user and application data. The entire application is hosted on <strong>DigitalOcean</strong>, leveraging its cloud-based infrastructure for high availability, scalability, and performance. The project was developed using <strong>Visual Studio Code</strong>, taking advantage of its tools and extensions. Debugging and technical challenges were addressed with assistance from <strong>ChatGPT</strong>. The application was created with guidance from <strong>ITIS 5166</strong> course materials, integrating advanced full-stack web development principles and best practices.</p>
    </>
  );
}

export default DashboardPage;