import {
    WrenchScrewdriverIcon,
    CubeIcon,
    BookOpenIcon,
    ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed text-gray-800">
            <h1 className="text-4xl font-bold text-olive mb-6">About This Project</h1>

            <p className="mb-4">
                This Bookstore Web App is a front-end-focused project created to simulate
                a bookstore experience with a clean UI and structured component architecture.
                It highlights key web development concepts such as responsive design,
                form validation, and client-side routing.
            </p>

            <div className="mt-10">
                <div className="flex items-center gap-2 text-wornred text-2xl font-semibold mb-3">
                    <WrenchScrewdriverIcon className="h-6 w-6" />
                    <h2>Tools & Technologies</h2>
                </div>
                <ul className="list-disc list-inside space-y-1 mb-6">
                    <li><strong>React</strong> - Component-driven UI</li>
                    <li><strong>React Router</strong> - Page navigation and route structure</li>
                    <li><strong>Tailwind CSS</strong> - Utility-first styling and responsive design</li>
                    <li><strong>TypeScript</strong> - Static typing and improved developer experience</li>
                    <li><strong>React Hook Form</strong> - Optimized and accessible form handling</li>
                    <li><strong>Vite</strong> - Modern dev server and bundler for fast builds</li>
                    <li><strong>Back-End Stack</strong>: Node.js, Express, and MongoDB (in progress)</li>
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
                <p className="mb-4">
                    View the full source code on GitHub:
                </p>
                <a
                    href="https://github.com/MMudrako/bookstore-react"
                    target="_blank"
                    className="inline-flex items-center text-blue-600 underline"
                >
                    https://github.com/MMudrako/bookstore-react
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-1" />
                </a>
            </div>

            <div className="mt-10">
                <div className="flex items-center gap-2 text-wornred text-2xl font-semibold mb-3">
                    <CubeIcon className="h-6 w-6" />
                    <h2>Project Scope</h2>
                </div>
                <p>
                    While the project is primarily front-end focused, it was built with
                    scalability and integration in mind. It also touches on key aspects
                    of full-stack development, including input validation and routing
                    structure.
                </p>
            </div>
        </div>
    );
}
