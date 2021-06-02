import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';
import WebBase from "../components/WebBase";


export default class FeaturesContainer extends Component {
    render() {
        return (
            <>
                <WebBase>
                    <div className="container-xl">
                        <div className="bannerRow">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="bannerText">
                                        <h1>Features</h1>
                                        <h3>Everything you need to build your perfect workspace</h3>
                                        <Link to="/signup">
                                            Try now
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="bannerImg">
                                        <img src="features/featuresBanner.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="featureHng">
                                        <h2>Organization</h2>
                                        <p>Organisations link all the employees of a company using Procezo in a single space and connected by your company’s email domain. They can be further split into smaller teams to begin collaborating on tasks and projects as assigned.</p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/organization1.png" />
                                                    <h4>Multiple organization</h4>
                                                    <p>Navigate multiple organisations and workspaces with a single account. Guide your teams to success</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/organization2.png" />
                                                    <h4>User management </h4>
                                                    <p>Manage 100s of users. All in one place.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/organization3.png" />
                                                    <h4>Team management</h4>
                                                    <p>Guide multiple teams and never miss a deadline again. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/organization4.png" />
                                                    <h4>Access with Google SSO</h4>
                                                    <p>Already have a Google account? Sign-in to Procezo in just a few clicks!</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/organization5.png" />
                                                    <h4>Set permission and roles</h4>
                                                    <p>Control who sees what. Set permissions and create roles to assign work.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 order-md-first">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/notes1.png" />
                                                    <h4>Checklist</h4>
                                                    <p>Create a checklist of your tasks and feel amazing when you complete it.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/notes2.png" />
                                                    <h4>Draw</h4>
                                                    <p>Sketch ideas, project blueprints and more with Procezo’s drawing feature and discover your inner artist.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/notes3.png" />
                                                    <h4>Voice notes </h4>
                                                    <p>On the move? Record a voice note to procezo and share your thoughts wherever you may be.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/notes4.png" />
                                                    <h4>Pictures</h4>
                                                    <p>Seamlessly attach pictures and designs to tasks and make it that much easier to view finished work.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 order-first">
                                    <div className="featureHng text-right">
                                        <h2>Notes</h2>
                                        <p>"Don’t want to forget an idea? With Procezo’s Notes feature you can quickly create a checklist of tasks, sketch out your thoughts, include a voice note and attach designs."</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="featureHng">
                                        <h2>Tasks</h2>
                                        <p>Tasks are the building blocks of larger projects, daily to-do’s that have a person who is accountable for the task, its completion and its due date. Tasks can be used to represent ideas, brainstorms and reference notes and can further be split into smaller sub-tasks.</p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks1.png" />
                                                    <h4>Custom fields</h4>
                                                    <p>Create customised projects with custom fields. Design forms, capture information and add tickets directly to your internal boards.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks2.png" />
                                                    <h4>Subtasks</h4>
                                                    <p>Add clarity, comments and feedback by updating tasks with subtasksand bring value faster.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks3.png" />
                                                    <h4>Conditional Forms</h4>
                                                    <p>Create truly dynamic forms with if/then logic that adapts to your teams ever-changing needs. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks4.png" />
                                                    <h4>Start & end dates</h4>
                                                    <p>Set start and end dates to tasks and help your team reach their goals.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks5.png" />
                                                    <h4>Dependent Tasks</h4>
                                                    <p>Produce clarity and collaboration. Make it clear who is responsible for what and when new tasks can begin.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks6.png" />
                                                    <h4>Set priorities</h4>
                                                    <p>Set priorities to tasks and keep on top of your work. Track the task based on priority and status.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks7.png" />
                                                    <h4>Attachments</h4>
                                                    <p>Attach files, pictures and documents to tasks and make collaboration that much easier.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks8.png" />
                                                    <h4>Comments </h4>
                                                    <p>With our comments section, add feedback, comments and thoughts to tasks to guide others with work.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks9.png" />
                                                    <h4>Tags</h4>
                                                    <p>Add tags to tasks to quickly discover important information you need - without any hassle. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks10.png" />
                                                    <h4>Real time collaboartion</h4>
                                                    <p>Collaborate with your team anywhere in the world.Pinpoint risks and make adjustments as projects progress.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks11.png" />
                                                    <h4>Activity timeline</h4>
                                                    <p>Track progress and updates on tasks with the activity timeline and always stay in the loop.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks12.png" />
                                                    <h4>Followers </h4>
                                                    <p>Add assignees and follow a task to stay informed on new attachments, comments, likes and completed tasks. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks13.png" />
                                                    <h4>Parent Project</h4>
                                                    <p>Tackle large projects with lots of activities and multiple assignees by creating a Parent Project and bring clarity to your teams. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/tasks14.png" />
                                                    <h4>Muliple task lists </h4>
                                                    <p>Use Procezo like a pro.  Plan your day with My Tasks and view multiple tasks lists, assigned and followed by you with the advanced filters.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 order-md-first">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project1.png" />
                                                    <h4>Kanban View</h4>
                                                    <p>Select multiple users on the task when more than one user is assigned to the task. Plan workflows, Create a clear process and prevent bottlenecks.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project2.png" />
                                                    <h4>List</h4>
                                                    <p>Systematically create and manage your to-dos. Simplify your project planning with checklist items"</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project3.png" />
                                                    <h4>Gantt View</h4>
                                                    <p>Present your projects milestones clearly and accurately. Show deliverables to clients and stay ahead of your competitors.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project4.png" />
                                                    <h4>Calendar</h4>
                                                    <p>Set deadlines and stay ahead of schedule with Calendar view. Plan new tasks and streamline progress over time.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project5.png" />
                                                    <h4>Insights </h4>
                                                    <p>Procezo’s Insights give you a simple but effective analytics tool to keep on track of your businesses processes and optimise productivity from ideas to execution. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project6.png" />
                                                    <h4>Activity Timeline</h4>
                                                    <p>Monitor updates and recent activity on projects with the Activity Timeline.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project7.png" />
                                                    <h4>Public Form</h4>
                                                    <p>Collect valuable feedback from your audience. Integrate forms to your boards and involve your team - all in one go.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project8.png" />
                                                    <h4>Board sharing</h4>
                                                    <p>Take control of work. Choose who can see a project, limit and allow access and sharing - you pull the strings!</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project9.png" />
                                                    <h4>Filters</h4>
                                                    <p>Segregate your tasks for effective tracking, using filters to highlight a task's status, assignees, due dates and more.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project10.png" />
                                                    <h4>Sorting</h4>
                                                    <p>Stay focused on your objectives. Sort tasks and projects by deadlines, priorities, assignees and more.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project11.png" />
                                                    <h4>Smart Search</h4>
                                                    <p>Boost your productivity. Use the Smart Search bar to navigate your tasks and quickly find information.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/project12.png" />
                                                    <h4>Project library</h4>
                                                    <p>Get started with a blank project or by choosing one of our pre-made industry templates and deliver value faster. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 order-first">
                                    <div className="featureHng text-right">
                                        <h2>Project</h2>
                                        <p>Projects comprise of a larger set of tasks which are stored in an organisation and accessed by teams. They help you help plan goals and provide a place for your team to communicate, collaborate and visualise progress.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="featureHng">
                                        <h2>Feeds</h2>
                                        <p>Feeds help you to stay updated across projects. See what recent activity has been happening, stay updated on tasks and more.</p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/feeds1.png" />
                                                    <h4>Cross project feeds</h4>
                                                    <p>Follow updates easily with cross project feeds and get the results you want. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/feeds2.png" />
                                                    <h4>Automated Process</h4>
                                                    <p>Connect like never before. Collaborate, like and comment on tasks and ensure everyone is on the same page.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 order-md-first">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/database1.png" />
                                                    <h4>Unlimited Databases </h4>
                                                    <p>Create a checklist of your tasks and feel amazing when you complete it.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/database2.png" />
                                                    <h4>Export project wise CSV</h4>
                                                    <p>Even more ways to collaborate. Export your project in a CSV format and share with anyone. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 order-first">
                                    <div className="featureHng text-right">
                                        <h2>Database</h2>
                                        <p>Create a database with Procezo to keep all your important information in one place. </p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="featureHng">
                                        <h2>Automation</h2>
                                        <p>Spend your time on the work that matters. Procezo’s powerful automation tool creates clearly defined and repeatable work processes that reduce errors and help your team with repetitive tasks. </p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/automation1.png" />
                                                    <h4>Automated Boards </h4>
                                                    <p>Streamline processes, ensure your team take the critical steps and deliver faster results with Automated Boards.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/automation2.png" />
                                                    <h4>Priority </h4>
                                                    <p>Track the task based on priority and status.Quickly set status to gain visibility into each work stage.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/automation3.png" />
                                                    <h4>Activity timeline</h4>
                                                    <p>Track progress and updates on tasks & Projects with the activity timeline and always be in the loop.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/automation4.png" />
                                                    <h4>Task level chat groups</h4>
                                                    <p>Create task level chat groups and supercharge collaboration and productivity. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 order-md-first">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/integration1.png" />
                                                    <h4>Import from Asana</h4>
                                                    <p>Import your existing projects from Asana to Procezo. Migrate people, files, tasks and more.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/integration2.png" />
                                                    <h4>Trello Import</h4>
                                                    <p>Already a Trello user? Import all your Trello boards to Procezo in a few simple steps.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/integration3.png" />
                                                    <h4>Google SSO</h4>
                                                    <p>Sync your Google account with Procezo. Import your existing tasks and calendar and get a flying start.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/integration4.png" />
                                                    <h4>API integration</h4>
                                                    <p>Tailor your Procezo experience with API integrations and create even more workflows and data and automate processes. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 order-first">
                                    <div className="featureHng text-right">
                                        <h2>Integration</h2>
                                        <p>With Procezo’s integrations, you can import your projects from Asana or Trello in a few simple steps. You can Sync your Google account with your calendar and existing tasks and customise your Procezo with API integration.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="featureHng">
                                        <h2>Reports</h2>
                                        <p>Custom reports help you track the progress of your projects from start to finish. Get updates on the progress made and solve potential problems quickly.</p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/report1.png" />
                                                    <h4>Project wise custom reports</h4>
                                                    <p>Track the progress of a project and its components against milestones with custom reports. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/report2.png" />
                                                    <h4>Dashboard Builder </h4>
                                                    <p>Customise your Procezo dashboard and manage your team and projects in one place. Track projects from start to finish and achieve your goals.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 order-md-first">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/support1.png" />
                                                    <h4>Chat / Email/ Phone</h4>
                                                    <p>We are here to support you. Reach out to our team via phone, email or chat with us with any problems your may have.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 order-first">
                                    <div className="featureHng text-right">
                                        <h2>Support</h2>
                                        <p>Create a database with Procezo to keep all your important information in one place. </p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="featureHng">
                                        <h2>Platform</h2>
                                        <p>Access your Procezo from anywhere. Download our app for IOS and Andriod devices or Log-In through our web app. We also offer an on-premise installation and a walkthrough of all the features of Procezo.</p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/platform1.png" />
                                                    <h4>Web App</h4>
                                                    <p>Keep track of your work on Procezo with our Web app. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/platform2.png" />
                                                    <h4>IOS Application</h4>
                                                    <p>Download the Procezo app for your iPhone or iPad with our IOS Application</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/platform3.png" />
                                                    <h4>Andriod Application</h4>
                                                    <p>Download the Procezo mobile app for your Android device to plan your day and get team updates wherever you are.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/platform4.png" />
                                                    <h4>On prem Installation</h4>
                                                    <p>Don’t spend time on manual work. Let us do it for you with our on-premise installation.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="featureStart">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 order-md-first">
                                    <div className="featServices">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/file1.png" />
                                                    <h4>Muliple files support</h4>
                                                    <p>Track the progress of a project and its components against milestones with custom reports. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="featSr">
                                                    <img src="features/file2.png" />
                                                    <h4>1 GB storage/organisation</h4>
                                                    <p>Each Organisation on Procezo receives 1GB of storage to upload files and other attachments. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 order-first">
                                    <div className="featureHng text-right">
                                        <h2>File Management </h2>
                                        <p>Procezo supports multiple file formats. Upload your designs, presentations, pictures, documents and more.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="separator"> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="getStart">
                            <div className="row">
                                <div className="col-lg-8 col-md-7">
                                    <p>Executing ideas has never been this streamlined</p>
                                </div>
                                <div className="col-lg-4 col-md-5">
                                    <Link to="/signup">Get Started now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </WebBase>

                <Helmet>
                    <link rel="stylesheet" href="features/css/feature.css" />
                    <title>Procezo : Contact Us</title>
                </Helmet>
            </>
        );
    }
}

