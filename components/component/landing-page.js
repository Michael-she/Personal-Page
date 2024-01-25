/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wIpbDWfHbHd
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image';


export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100 dark:bg-black">
      <header className="py-10 px-6 bg-blue-500 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-white">Michael Shepstone</h1>
        <p className="mt-2 text-white">I am a Mechatronic Engineering student at the University of Stellenbosch. I am hightly passionate about programming and robotics. 
        </p><p className="mt-2 text-white">I undertake a number of different projects in my spare time. This website (which is still under construction) aims to showcase some of these projects</p>
      </header>
      <main className="flex-1">
        <section className="py-10 px-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <Card className="bg-white dark:bg-gray-800">
            <img
             className="w-full h-48 object-cover"
                src="/images/20240122_145535.jpg" // Local or remote path
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
                alt="StarTracker Image" // Good for SEO and accessibility
               
                
              />

              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-gray-200">StarTracker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">A gimble housing a laser capible of precisely pointing at spesific objects in the sky. Currently calculates the elevation and azimuth of the ISS using 3D vectors from it's GPS coordianates</p>
                <Link href="/StarTracker">  
                  <Button
                    className="mt-4 text-blue-500 dark:text-gray-300 border-blue-500 dark:border-gray-600"
                    variant="outline"
                    
                  >
                  View More
                </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800">
              <img
                alt="Project Image"
                className="w-full h-48 object-cover"
                
                src="/images/IMG-20230902-WA0005.jpg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-gray-200">Autonomous Car</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">For the 2023 World Robotics Olympiad, the task was to scratch build and "race" an autonomous car around a track. This was our entry into the Future Engineers Category, able to automatically navigate and drive the course. Although we won the overall competition in South Africa, we were unable to qualify for the world championship.</p>
                <Link href="/AutoCar">  
                <Button
                  className="mt-4 text-blue-500 dark:text-gray-300 border-blue-500 dark:border-gray-600"
                  variant="outline"
                >
                  View More
                </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800">
              <img
                alt="Project Image"
                className="w-full h-48 object-cover"
                height="200"
                src="/images/20240123_010144.jpg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-gray-200">3D Printer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">This 3D printer was completely scratch designed and built as a project</p>
                <Link href="/3DPrinter">  
                <Button
                  className="mt-4 text-blue-500 dark:text-gray-300 border-blue-500 dark:border-gray-600"
                  variant="outline"
                >
                  View More
                </Button>
                </Link>
              </CardContent>
            </Card>




            <Card className="bg-white dark:bg-gray-800">
            <img
             className="w-full h-48 object-cover"
                src="/images/20240123_133016.jpg" // Local or remote path
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
                alt="StarTracker Image" // Good for SEO and accessibility
               
                
              />

              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-gray-200">CNC Machine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">A custom built and designed computer numerical control router/laser cutter. With a build volume of 1.2m by 1.2m by 0.2m, it is able to cut large pieces of materials such as wood, plastic and aluminium.</p>
                <Button
                  className="mt-4 text-blue-500 dark:text-gray-300 border-blue-500 dark:border-gray-600"
                  variant="outline"
                >
                  View More
                </Button>
              </CardContent>
            </Card>


            <Card className="bg-white dark:bg-gray-800">
            <img
             className="w-full h-48 object-cover"
                src="/images/20220401_085231.jpg" // Local or remote path
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
                alt="StarTracker Image" // Good for SEO and accessibility
               
                
              />

              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-gray-200">High Power Rocket</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">A scratch built high power rocket. It uses two Arduino Nanos as a custom built flight controller handling parachute deployment, flight recording and telementry. The frame is constructed from carbon tubes and wood.</p>
                <Button
                  className="mt-4 text-blue-500 dark:text-gray-300 border-blue-500 dark:border-gray-600"
                  variant="outline"
                >
                  View More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800">
            <img
             className="w-full h-48 object-cover"
                src="/images/20240123_140721.jpg" // Local or remote path
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
                alt="StarTracker Image" // Good for SEO and accessibility
               
                
              />

              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-gray-200">Web Enabled Current Sensor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">This RP2040/ESP32 based current sensor is capible of measuring up to 100A. The reading is then uploaded to a custom Node.js based webapp (It is currently being re-written in next.js) where it can be viewed</p>
                <Button
                  className="mt-4 text-blue-500 dark:text-gray-300 border-blue-500 dark:border-gray-600"
                  variant="outline"
                >
                  View More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800">
            <img
             className="w-full h-48 object-cover"
                src="/images/vecteezy_car-icon-in-flat-style-simple-traffic-icon_.jpg" // Local or remote path
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
                alt="StarTracker Image" // Good for SEO and accessibility
               
                
              />

              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-gray-200">Carpool Coordinator</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                   A webapp able to intelligently group people in carpools based on their intended destination and origin points. It is available&nbsp;  
                  <a href="https://carpool-coordinator.vercel.app/" className="text-blue-600 dark:text-blue-400">here</a>.
              </p>

                <Button
                  className="mt-4 text-blue-500 dark:text-gray-300 border-blue-500 dark:border-gray-600"
                  variant="outline"
                >
                  View More
                </Button>
              </CardContent>
            </Card>




            
            <Card className="bg-white dark:bg-gray-800">
            <img
             className="w-full h-48 object-cover"
                src="/images/20240123_024908.jpg" // Local or remote path
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
                alt="StarTracker Image" // Good for SEO and accessibility
               
                
              />

              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-gray-200">Flying Wing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">A manaully controlled flying wing aircraft. It was assembled from components.</p>
                <Button
                  className="mt-4 text-blue-500 dark:text-gray-300 border-blue-500 dark:border-gray-600"
                  variant="outline"
                >
                  View More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800">
            <img
             className="w-full h-48 object-cover"
                src="/images/Screenshot 2024-01-22 at 14-05-30 Untitled document - Google Docs.png" // Local or remote path
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
                alt="StarTracker Image" // Good for SEO and accessibility
               
                
              />

              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-gray-200">Servo Robot Arm</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">A small robot arm capible of moving small and light objects accross a desktop</p>
                <Button
                  className="mt-4 text-blue-500 dark:text-gray-300 border-blue-500 dark:border-gray-600"
                  variant="outline"
                >
                  View More
                </Button>
              </CardContent>
            </Card>




          </div>
        </section>
      </main>
      <footer className="py-10 px-6 bg-blue-500 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-white">Contact</h2>
        <p className="mt-2 text-white">Email: mgshepstone@gmail.com</p>
        <p className="mt-2 text-white">Phone: (+27) 66 258 8727</p>
        <div className="flex space-x-4 mt-4">
          
          <Link className="text-white" href='https://github.com/Michael-she'>
            <GithubIcon className="h-6 w-6" />
          </Link>
          <Link className="text-white" href='https://www.linkedin.com/in/michael-shepstone-a3992922b/'>
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
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
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

