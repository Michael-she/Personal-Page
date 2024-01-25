/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NkHMuOylnTL
 */
import Link from "next/link"
import { Card } from "@/components/ui/card"

export function project-details() {
  return (
    <div key="1" className="flex flex-col min-h-screen bg-blue-100 dark:bg-black">
      <header className="py-10 px-6 bg-blue-500 dark:bg-gray-900">
        <Link className="text-white" href="#">
          <ArrowLeftIcon className="h-6 w-6" />
          <span className="sr-only">Back</span>
        </Link>
        <h1 className="text-4xl font-bold text-white">Project Title</h1>
      </header>
      <main className="flex-1">
        <section className="py-10 px-6">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-gray-200">Project Title</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <Card className="bg-white dark:bg-gray-800">
              <img
                alt="Project Image 1"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </Card>
            <Card className="bg-white dark:bg-gray-800">
              <img
                alt="Project Image 2"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </Card>
            <Card className="bg-white dark:bg-gray-800">
              <img
                alt="Project Image 3"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </Card>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold text-blue-900 dark:text-gray-200">About the Project</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              This is a detailed description of the project. It explains the purpose of the project, the technologies
              used, the challenges faced during development, and the solutions implemented to overcome those challenges.
              The project description also highlights the key features of the project and explains how they contribute
              to the overall functionality of the project.
            </p>
          </div>
        </section>
      </main>
      <footer className="py-10 px-6 bg-blue-500 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-white">Contact</h2>
        <p className="mt-2 text-white">Email: your-email@example.com</p>
        <div className="flex space-x-4 mt-4">
          <Link className="text-white" href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link className="text-white" href="#">
            <GithubIcon className="h-6 w-6" />
          </Link>
          <Link className="text-white" href="#">
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </footer>
    </div>
  )
}


function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0-1-3.5c3 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2c-.3 1.15-.3 2.35 3.5A5.403 5.403 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 1 6v7h-4v-7a2 2 0-2-2 0-2 2v7h-4v-7a6 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
