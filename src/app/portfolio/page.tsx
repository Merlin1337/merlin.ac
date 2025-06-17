import React from "react";
import { Navigation } from "../components/nav";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Mes Projets
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        De l&apos;idée au déploiement, découvrez mes créations entrepreneuriales qui transforment des concepts innovants en solutions concrètes.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 xl:grid-cols-2">
                    {/* Project 1 - Plug™ */}
                    <div>
                        <Link href="https://plug.army">
                            <div className="relative overflow-hidden rounded-2xl w-full h-[30rem] transition-transform ease-in-out duration-500 hover:scale-95">
                                <Image width={592} height={480} src="/assets/screenshots/plug_mockups.webp" className="overflow-hidden transition-transform ease-in-out duration-500 hover:scale-110 object-cover w-full h-full" alt="Plug™ App" />
                            </div>
                            <div className="flex flex-col justify-center items-center mt-4">
                                <div className="font-medium">Plug™</div>
                                <div className="font-normal text-zinc-300">A new way to connect fans with artists!</div>
                            </div>
                        </Link>

                        {/* Technologies Used */}
                        <div className="flex flex-wrap justify-center gap-2 mt-2 text-zinc-400">
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">React Native</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">NestJS</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">KafkaJS</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">PostgreSQL</span>
                        </div>
                    </div>

                    {/* Project 2 - Spotilabs */}
                    <div>
                        <Link href="https://spotilabs.fr">
                            <div className="relative overflow-hidden rounded-2xl w-full h-[30rem] transition-transform ease-in-out duration-500 hover:scale-95">
                                <Image width={592} height={480} src="/assets/screenshots/spotilabs_mockup.webp" className="overflow-hidden transition-transform ease-in-out duration-500 hover:scale-110 object-cover w-full h-full" alt="Spotilabs Website" />
                            </div>
                            <div className="flex flex-col justify-center items-center mt-4">
                                <div className="font-medium">Spotilabs</div>
                                <div className="font-normal text-zinc-300">The ultimate service for boosting artists&apos; visibility.</div>
                            </div>
                        </Link>

                        {/* Technologies Used */}
                        <div className="flex flex-wrap justify-center gap-2 mt-2 text-zinc-400">
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">React</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">Next.js</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">PostgreSQL</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">Tailwind CSS</span>
                        </div>
                    </div>

                    {/* Project 3 - Offcall */}
                    <div>
                        <Link href="https://offcall.app">
                            <div className="relative overflow-hidden rounded-2xl w-full h-[30rem] transition-transform ease-in-out duration-500 hover:scale-95">
                                <Image width={592} height={480} src="/assets/screenshots/offcall-mockup.jpg" className="overflow-hidden transition-transform ease-in-out duration-500 hover:scale-110 object-cover w-full h-full" alt="Offcall App" />
                            </div>
                            <div className="flex flex-col justify-center items-center mt-4">
                                <div className="font-medium">Offcall</div>
                                <div className="font-normal text-zinc-300">Transforme chaque clic en connexion directe avec tes fans.</div>
                            </div>
                        </Link>

                        {/* Technologies Used */}
                        <div className="flex flex-wrap justify-center gap-2 mt-2 text-zinc-400">
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">React</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">Next.js</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">TypeScript</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">PostgreSQL</span>
                        </div>
                    </div>

                    {/* Project 4 - Viralize */}
                    <div>
                        <Link href="https://viralize.club">
                            <div className="relative overflow-hidden rounded-2xl w-full h-[30rem] transition-transform ease-in-out duration-500 hover:scale-95">
                                <Image width={592} height={480} src="/assets/screenshots/mockup-viralize.png" className="overflow-hidden transition-transform ease-in-out duration-500 hover:scale-110 object-cover w-full h-full" alt="Viralize Platform" />
                            </div>
                            <div className="flex flex-col justify-center items-center mt-4">
                                <div className="font-medium">Viralize</div>
                                <div className="font-normal text-zinc-300">Connecte créateurs et commerces pour des collaborations authentiques.</div>
                            </div>
                        </Link>

                        {/* Technologies Used */}
                        <div className="flex flex-wrap justify-center gap-2 mt-2 text-zinc-400">
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">React Native</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">Node.js</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">PostgreSQL</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full">Geolocation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}