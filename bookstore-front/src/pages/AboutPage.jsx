import {
    WrenchScrewdriverIcon,
    CubeIcon,
    BookOpenIcon,
    ArrowTopRightOnSquareIcon,
    LightBulbIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed text-gray-800">
            <h1 className="text-4xl font-bold text-olive mb-6">About This Project</h1>

            <p className="mb-4">
                This project is a modern rebuild of a full-stack bookstore application originally built for a college course.
                Migrating from a basic CRUD interface using jQuery, Bootstrap, and EJS templates, it now leverages a dynamic, scalable, and maintainable modern tech stack.
                The new foundation enables a cleaner UI and structured component architecture, aiming to simulate a realistic bookstore experience.
                Along the way, the project demonstrates essential web development concepts such as responsive design, form validation, and client-side routing.
            </p>

            <div className="mt-10">
                <div className="flex items-center gap-2 text-wornred text-2xl font-semibold mb-3">
                    <CubeIcon className="h-6 w-6" />
                    <h2>Project Scope</h2>
                </div>
                <p>
                    While the project is primarily front-end focused, it was built with
                    scalability and integration in mind. It also touches on key aspects
                    of full-stack development, including input validation and routing structure.
                    With future iterations planned, this project will continue to evolve into a
                    more robust and fully-featured bookstore platform.
                </p>
            </div>

            <div className="mt-10">
                <div className="flex items-center gap-2 text-wood text-2xl font-semibold mb-3">
                    <WrenchScrewdriverIcon className="h-6 w-6" />
                    <h2>Implemented in Version 1.0</h2>
                </div>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Modern frontend built with <strong>React</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong></li>
                    <li>Navigation using <strong>React Router (with RouterProvider & nested layouts)</strong></li>
                    <li>Accessible and semantic HTML</li>
                    <li>Persistent cart functionality via <strong>localStorage</strong></li>
                    <li>User authentication using <strong>Firebase</strong> (auth tokens & protected routes)</li>
                    <li>Deployment-ready frontend and backend, both hosted on <strong>Render</strong></li>
                </ul>
            </div>

            <div className="mt-10">
                <div className="flex items-center gap-2 text-yellow-600 text-2xl font-semibold mb-3">
                    <LightBulbIcon className="h-6 w-6" />
                    <h2>Features Planned for Future Iteration</h2>
                </div>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Database-backed cart syncing per user session</li>
                    <li>Admin dashboard with book inventory tools</li>
                    <li>User profiles and settings panel</li>
                    <li>Enhanced REST API with more structure and validation (possibly via Mongoose or Zod)</li>
                    <li>Review system with moderation and rating filters</li>
                </ul>
            </div>

            <div className="mt-10">
                <div className="flex items-center gap-2 text-wornred text-2xl font-semibold mb-3">
                    <WrenchScrewdriverIcon className="h-6 w-6" />
                    <h2>Tools & Technologies</h2>
                </div>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Frontend:</strong> React, Vite, Tailwind CSS</li>
                    <li><strong>Routing:</strong> React Router (Data API routing)</li>
                    <li><strong>Auth:</strong> Firebase + JWT token support</li>
                    <li><strong>Backend:</strong> Node.js with Express (no ORM/schema yet)</li>
                    <li><strong>Deployment:</strong> Render (for both frontend and backend)</li>
                </ul>
            </div>

            <div className="mt-10">
                <div className="flex items-center gap-2 text-wornred text-2xl font-semibold mb-3">
                    <BookOpenIcon className="h-6 w-6" />
                    <h2>Features</h2>
                </div>
                <ul className="list-disc list-inside space-y-1 mb-6">
                    <li>Home, Shop, About, and Contact pages</li>
                    <li>Reusable UI components for scalability</li>
                    <li>Responsive grid layout with Tailwind utility classes</li>
                    <li>Client-side form validation with visual error feedback</li>
                    <li>Custom-styled UI with accessibility in mind</li>
                </ul>
            </div>

            <div className="mt-10">
                <div className="flex items-center gap-2 text-wornred text-2xl font-semibold mb-3">
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                    <h2>Source Code</h2>
                </div>
                <p className="mb-4">View the full source code on GitHub:</p>
                <a
                    href="https://github.com/MMudrako/bookstore-react"
                    target="_blank"
                    className="inline-flex items-center text-blue-600 underline"
                >
                    https://github.com/MMudrako/bookstore-react
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-1" />
                </a>
            </div>

            <div className="mt-12">
                <div className="flex items-center gap-2 text-gray-700 text-2xl font-semibold mb-2">
                    <EyeIcon className="h-6 w-6" />
                    <h2>Just in Case You're Interested</h2>
                </div>
                <p className="mb-4">
                    Here’s a demo of the original college project built in a team using jQuery and EJS. This was the starting point for the rebuild:
                </p>

                <div className="aspect-w-16 aspect-h-9 mb-8">
                    <iframe
                        className="w-full h-64 sm:h-96 rounded shadow-lg"
                        src="https://www.youtube.com/embed/ptnBKfcctnc"
                        title="College Project Demo"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
