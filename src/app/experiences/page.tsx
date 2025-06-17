import React from "react";
import { Navigation } from "../components/nav";
import { Briefcase, Calendar, MapPin, Award, Code2, TrendingUp } from "lucide-react";

const experiences = [
    {
        title: "Lead Tech / Software Engineer",
        company: "NAIART",
        location: "Nice (06)",
        period: "2024 - Aujourd'hui",
        status: "En cours",
        description: "Alternance en tant que Lead Tech, dirigeant l'innovation technique et développant l'architecture des projets",
        technologies: ["Technical Leadership", "Cloud Architecture", "Full Stack Development", "Team Management"],
        achievements: [
            "Direction de l'équipe technique",
            "Architecture des solutions cloud",
            "Développement de produits innovants",
            "Gestion de projets complexes"
        ],
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Gestion de Projet / Community Management",
        company: "Swipe",
        location: "En ligne",
        period: "2023 - Aujourd'hui",
        status: "En cours",
        description: "Fondation du média Swipe avec gestion de projet et supervision d'équipes",
        technologies: ["Community Management", "Project Management", "Social Media", "Team Leadership"],
        achievements: [
            "Fondation et lancement du média",
            "Supervision d'équipes multidisciplinaires",
            "Promotion de la scène musicale urbaine",
            "Gestion multi-plateformes (Twitter, Instagram, Threads)"
        ],
        link: "www.Swipe.cx",
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "Gestion de Projet / Community Management",
        company: "CoviQuest",
        location: "En ligne",
        period: "2020",
        status: "Terminé",
        description: "Fondation du projet caritatif en collaboration et au profit du CHU de Tours",
        technologies: ["Project Management", "Community Management", "Twitter", "Event Organization"],
        achievements: [
            "Projet caritatif au profit du CHU de Tours",
            "Supervision des bénévoles et équipes de modération",
            "Organisation d'événements et concours",
            "Gestion de communauté importante"
        ],
        color: "from-red-500 to-pink-500"
    },
    {
        title: "Stage Administrateur Système & Réseaux",
        company: "INRAE - Unité GAFL",
        location: "Avignon (84)",
        period: "2020",
        status: "Terminé",
        description: "Aide à la gestion du parc informatique et installation de systèmes",
        technologies: ["Linux", "Ubuntu", "Administration Système", "Réseaux", "Hardware"],
        achievements: [
            "Gestion du parc informatique",
            "Installation de logiciels divers",
            "Mise en marche d'un poste de travail sous Ubuntu",
            "Maintenance des équipements réseau"
        ],
        color: "from-orange-500 to-yellow-500"
    }
];

export default function ExperiencesPage() {
    return (
        <div className="relative pb-16 bg-gradient-to-tl from-black via-zinc-900/20 to-black min-h-screen">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-12 max-w-6xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-transparent bg-white bg-clip-text sm:text-6xl lg:text-7xl">
                        Expériences
                    </h1>
                    <p className="mt-6 text-xl text-zinc-400">
                        Mon parcours professionnel : stages, alternance et projets collaboratifs
                    </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="text-center p-6 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50">
                        <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                            4+
                        </div>
                        <div className="text-zinc-400 text-sm mt-2">Années d&apos;expérience</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50">
                        <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text">
                            4
                        </div>
                        <div className="text-zinc-400 text-sm mt-2">Expériences clés</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50">
                        <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                            10+
                        </div>
                        <div className="text-zinc-400 text-sm mt-2">Technologies maîtrisées</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50">
                        <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                            3+
                        </div>
                        <div className="text-zinc-400 text-sm mt-2">Équipes dirigées</div>
                    </div>
                </div>

                {/* Experiences List */}
                <div className="space-y-12">
                    {experiences.map((item, index) => (
                        <div key={index} className="relative group">
                            <div className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} p-0.5`}>
                                                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                                    <Briefcase className="w-7 h-7 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-2xl font-bold text-zinc-100 mb-2">{item.title}</h3>
                                            <div className="flex items-center gap-2 text-lg text-zinc-300 mb-2">
                                                <span className="font-semibold">{item.company}</span>
                                                {item.link && (
                                                    <>
                                                        <span className="text-zinc-500">•</span>
                                                        <a href={`https://${item.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                                            {item.link}
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-4 text-zinc-400 text-sm">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{item.period}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{item.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {item.status === 'En cours' && (
                                        <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                                            En cours
                                        </div>
                                    )}
                                </div>

                                <p className="text-zinc-300 mb-6 leading-relaxed">{item.description}</p>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h4 className="text-zinc-200 font-semibold mb-3 flex items-center gap-2">
                                        <Code2 className="w-4 h-4" />
                                        Compétences & Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-sm border border-zinc-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div>
                                    <h4 className="text-zinc-200 font-semibold mb-3 flex items-center gap-2">
                                        <Award className="w-4 h-4" />
                                        Réalisations
                                    </h4>
                                    <ul className="space-y-2">
                                        {item.achievements.map((achievement, achievementIndex) => (
                                            <li key={achievementIndex} className="flex items-start gap-2 text-zinc-400">
                                                <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Current Focus */}
                <div className="mt-20">
                    <div className="relative p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur border border-purple-500/20">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="p-3 rounded-full bg-purple-500/20">
                                    <TrendingUp className="w-8 h-8 text-purple-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-zinc-100">Actuellement</h3>
                            </div>
                            <div className="max-w-3xl mx-auto">
                                <h4 className="text-xl font-semibold text-zinc-200 mb-4">
                                    Lead Tech chez NAIART - Innovation & Leadership Technique
                                </h4>
                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    En tant que Lead Tech chez NAIART, je dirige l&apos;innovation technique tout en continuant mes études 
                                    à l&apos;IUT Nice Côte d&apos;Azur en alternance. Cette position unique me permet de développer mes 
                                    compétences entrepreneuriales et techniques simultanément.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 