import React from "react";
import { Navigation } from "../components/nav";
import { CalendarDays, MapPin, Mail, Github, Linkedin, Music, Trophy, GraduationCap, Calendar } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="relative pb-16 bg-gradient-to-tl from-black via-zinc-900/20 to-black min-h-screen">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-12 max-w-6xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-transparent bg-white bg-clip-text sm:text-6xl lg:text-7xl">
                        À propos
                    </h1>
                    <p className="mt-6 text-xl text-zinc-400">
                        Découvrez qui je suis, mon parcours et mes passions
                    </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Left Column - Personal Info */}
                    <div className="space-y-8">
                        <div className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
                            <h2 className="text-2xl font-bold text-zinc-100 mb-6">Informations personnelles</h2>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <CalendarDays className="w-5 h-5 text-blue-400" />
                                    <span>Né le 16 février 2005 (20 ans)</span>
                                </div>
                                
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <MapPin className="w-5 h-5 text-red-400" />
                                    <span>Étudiant à l&apos;IUT de Vannes</span>
                                </div>
                                
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <Mail className="w-5 h-5 text-green-400" />
                                    <Link href="mailto:contact@merlin.ac" className="hover:text-white transition-colors">
                                        hello@merlin.ac
                                    </Link>
                                </div>
                                
                                {/* <div className="flex items-center gap-4 text-zinc-300">
                                    <Phone className="w-5 h-5 text-purple-400" />
                                    <span>+33 </span>
                                </div> */}
                            </div>

                            <div className="flex gap-4 mt-8">
                                <Link 
                                    href="https://github.com/Merlin1337" 
                                    target="_blank"
                                    className="p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110"
                                >
                                    <Github className="w-5 h-5 text-zinc-300" />
                                </Link>
                                <Link 
                                    href="https://linkedin.merlin.ac" 
                                    target="_blank"
                                    className="p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110"
                                >
                                    <Linkedin className="w-5 h-5 text-blue-400" />
                                </Link>
                            </div>
                        </div>

                        {/* Languages Section */}
                        <div className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
                            <h3 className="text-xl font-bold text-zinc-100 mb-6">Langues</h3>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-300">Français</span>
                                    <span className="text-sm text-zinc-500">Natif</span>
                                </div>
                                <div className="w-full bg-zinc-800 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full w-full"></div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-300">Anglais</span>
                                    <span className="text-sm text-zinc-500">B2</span>
                                </div>
                                <div className="w-full bg-zinc-800 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-300 h-2 rounded-full w-4/5"></div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-300">Espagnol</span>
                                    <span className="text-sm text-zinc-500">Notions</span>
                                </div>
                                <div className="w-full bg-zinc-800 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-yellow-500 to-orange-400 h-2 rounded-full w-2/5"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - About & Interests */}
                    <div className="space-y-8">
                        <div className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
                            <h2 className="text-2xl font-bold text-zinc-100 mb-6">Qui suis-je ?</h2>
                            
                            <div className="space-y-4 text-zinc-300 leading-relaxed">
                                <p>
                                    Salut ! Je suis <span className="text-white font-semibold">Merlin Caromel</span>, étudiant passionné en informatique de 20 ans. 
                                    Actuellement en première année de BUT informatique à l&apos;IUT de Vannes, je me prépare à rejoindre 
                                    l&apos;IUT Nice Côte d&apos;Azur en alternance.
                                </p>
                                
                                <p>
                                    J&apos;ai la chance de faire mon alternance chez <span className="text-blue-400 font-semibold"><Link href="https://naiart.fr" target="_blank" className="hover:text-white transition-colors">NAIART</Link></span>, 
                                    où je développe mes compétences en tant que software engineer. Cette expérience me permet de 
                                    travailler sur des projets concrets tout en poursuivant mes études.
                                </p>
                                
                                <p>
                                    Ce qui me passionne le plus dans le développement, c&apos;est la capacité à créer des solutions 
                                    innovantes qui connectent les gens et résolvent des problèmes réels. Chaque projet est 
                                    une nouvelle aventure technique et créative !
                                </p>
                            </div>
                        </div>

                        {/* Interests Section */}
                        <div className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
                            <h3 className="text-xl font-bold text-zinc-100 mb-6">Mes passions</h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-purple-500/20">
                                        <Music className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-200">Musique</h4>
                                        <p className="text-sm text-zinc-400 mt-1">
                                            8 ans de conservatoire dont 5 ans à l&apos;Orchestre d&apos;Harmonie
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-orange-500/20">
                                        <Trophy className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-200">Sport</h4>
                                        <p className="text-sm text-zinc-400 mt-1">
                                            Volley-ball, karaté, kung-fu, randonnée, musculation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formation Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-zinc-100 mb-4">Formation</h2>
                        <p className="text-zinc-400">Mon parcours académique et éducatif</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* IUT Nice - Current */}
                        <div className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-0.5">
                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                            <GraduationCap className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-100">BUT Informatique</h3>
                                            <p className="text-zinc-300 font-semibold">IUT Nice Côte d&apos;Azur</p>
                                            <div className="flex items-center gap-4 text-zinc-400 text-sm mt-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>2024 - En cours</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>Nice (06)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                                            En cours
                                        </div>
                                    </div>
                                    
                                    <p className="text-zinc-300 mb-4">
                                        Formation en alternance chez NAIART en tant que Lead Tech avec spécialisation en développement web et logiciel
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {["Java", "Python", "Web Development", "Database", "Software Engineering", "Cloud Computing"].map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-sm border border-zinc-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* IUT Vannes - Previous */}
                        <div className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-0.5">
                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                            <GraduationCap className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-100">BUT Informatique</h3>
                                            <p className="text-zinc-300 font-semibold">IUT de Vannes</p>
                                            <div className="flex items-center gap-4 text-zinc-400 text-sm mt-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>2023 - 2024</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>Vannes (56)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                                            Terminé
                                        </div>
                                    </div>
                                    
                                    <p className="text-zinc-300 mb-4">
                                        Première année de BUT informatique avec les fondamentaux du développement
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {["Java", "Python", "Web Development", "Database", "Algorithmique"].map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-sm border border-zinc-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bac */}
                        <div className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-0.5">
                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                            <GraduationCap className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-100">Baccalauréat Général</h3>
                                            <p className="text-zinc-300 font-semibold">Lycée Louis Pasteur</p>
                                            <div className="flex items-center gap-4 text-zinc-400 text-sm mt-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>2020 - 2023</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>Avignon (84)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-medium">
                                            Mention AB
                                        </div>
                                    </div>
                                    
                                    <p className="text-zinc-300 mb-4">
                                        Spécialités : Mathématiques, NSI et Physique
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {["Mathématiques", "NSI", "Physique", "Algorithmique"].map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-sm border border-zinc-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 