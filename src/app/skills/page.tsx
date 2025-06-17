import React from "react";
import { Navigation } from "../components/nav";
import { Code, Database, Palette, Wrench, Rocket, Users, TrendingUp, Trophy, ExternalLink } from "lucide-react";
import Link from "next/link";

// Compétences basées sur les projets réels
const skillsWithProjects = [
    {
        title: "Développement Full Stack",
        description: "Création d'applications web et mobiles complètes",
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        projects: [
            {
                name: "Plug™",
                description: "App mobile de connexion fans-artistes",
                tech: ["React Native", "NestJS", "KafkaJS"],
                achievement: "Architecture microservices avec messaging"
            },
            {
                name: "Spotilabs",
                description: "Plateforme de promotion musicale",
                tech: ["React", "Next.js", "PostgreSQL"],
                achievement: "Interface utilisateur moderne et responsive"
            },
            {
                name: "Offcall",
                description: "Plateforme de connexion directe",
                tech: ["React", "Next.js", "TypeScript"],
                achievement: "Expérience utilisateur optimisée"
            }
        ],
        skills: [
            { name: "React/Next.js", level: 90, experience: "3 projets en production" },
            { name: "React Native", level: 85, experience: "2 apps déployées" },
            { name: "TypeScript", level: 80, experience: "Utilisé sur tous les projets récents" },
            { name: "Node.js/NestJS", level: 75, experience: "APIs robustes et scalables" }
        ]
    },
    {
        title: "Architecture & Backend",
        description: "Conception d'architectures scalables et performantes",
        icon: Database,
        color: "from-purple-500 to-pink-500",
        projects: [
            {
                name: "Plug™",
                description: "Architecture microservices",
                tech: ["KafkaJS", "PostgreSQL", "NestJS"],
                achievement: "Gestion de milliers d'utilisateurs simultanés"
            },
            {
                name: "Viralize",
                description: "Plateforme géolocalisée",
                tech: ["Node.js", "PostgreSQL", "Geolocation"],
                achievement: "Système de géolocalisation en temps réel"
            }
        ],
        skills: [
            { name: "PostgreSQL", level: 85, experience: "Base de données principale sur 4 projets" },
            { name: "Microservices", level: 80, experience: "Architecture Plug™ avec KafkaJS" },
            { name: "APIs REST", level: 90, experience: "Intégration avec services externes" },
            { name: "Géolocalisation", level: 70, experience: "Système temps réel pour Viralize" }
        ]
    },
    {
        title: "Leadership & Gestion de Projet",
        description: "Direction d'équipes et gestion de projets complexes",
        icon: Users,
        color: "from-orange-500 to-red-500",
        projects: [
            {
                name: "NAIART",
                description: "Lead Tech en alternance",
                tech: ["Leadership", "Architecture", "Mentoring"],
                achievement: "Direction de l'équipe technique"
            },
            {
                name: "Swipe",
                description: "Fondation du média",
                tech: ["Community Management", "Project Management"],
                achievement: "Supervision d'équipes multidisciplinaires"
            },
            {
                name: "CoviQuest",
                description: "Projet caritatif CHU Tours",
                tech: ["Event Organization", "Team Management"],
                achievement: "Coordination des bénévoles et événements"
            }
        ],
        skills: [
            { name: "Leadership Technique", level: 85, experience: "Lead Tech chez NAIART" },
            { name: "Gestion d'Équipe", level: 80, experience: "3 équipes dirigées" },
            { name: "Gestion de Projet", level: 90, experience: "4+ projets menés à bien" },
            { name: "Mentorat", level: 75, experience: "Formation de développeurs juniors" }
        ]
    },
    {
        title: "DevOps & Outils",
        description: "Automatisation et déploiement de solutions",
        icon: Wrench,
        color: "from-green-500 to-emerald-500",
        projects: [
            {
                name: "Déploiements Production",
                description: "Mise en production des 4 projets",
                tech: ["Git", "CI/CD", "Hosting"],
                achievement: "Applications stables en production"
            },
            {
                name: "INRAE",
                description: "Administration système",
                tech: ["Linux", "Ubuntu", "Réseaux"],
                achievement: "Gestion du parc informatique"
            }
        ],
        skills: [
            { name: "Git", level: 90, experience: "Workflow collaboratif sur tous les projets" },
            { name: "Linux", level: 80, experience: "Stage INRAE + serveurs de production" },
            { name: "Déploiement", level: 85, experience: "4 applications déployées avec succès" },
            { name: "CI/CD", level: 70, experience: "Pipelines automatisés" }
        ]
    },
    {
        title: "UI/UX & Design",
        description: "Création d'interfaces modernes et intuitives",
        icon: Palette,
        color: "from-pink-500 to-purple-500",
        projects: [
            {
                name: "Expérience Utilisateur",
                description: "Design moderne sur tous les projets",
                tech: ["Tailwind CSS", "Responsive Design", "UI/UX"],
                achievement: "Interfaces utilisateur appréciées"
            },
            {
                name: "Multimedia",
                description: "Contenu visuel pour Swipe",
                tech: ["Photoshop", "CapCut", "Social Media"],
                achievement: "Promotion de la scène musicale urbaine"
            }
        ],
        skills: [
            { name: "Tailwind CSS", level: 95, experience: "Framework CSS principal" },
            { name: "Responsive Design", level: 90, experience: "Toutes les interfaces adaptatives" },
            { name: "UI/UX Design", level: 75, experience: "Design centré utilisateur" },
            { name: "Photoshop", level: 70, experience: "Création de contenu visuel" }
        ]
    }
];

const achievements = [
    {
        title: "4 Applications en Production",
        description: "Plug™, Spotilabs, Offcall, Viralize",
        icon: Rocket,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Lead Tech chez NAIART",
        description: "Direction technique en alternance",
        icon: Trophy,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "3 Équipes Dirigées",
        description: "NAIART, Swipe, CoviQuest",
        icon: Users,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "4+ Années d'Expérience",
        description: "Développement et gestion de projet",
        icon: TrendingUp,
        color: "from-orange-500 to-red-500"
    }
];

export default function SkillsPage() {
    return (
        <div className="relative pb-16 bg-gradient-to-tl from-black via-zinc-900/20 to-black min-h-screen">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-12 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-transparent bg-white bg-clip-text sm:text-6xl lg:text-7xl">
                        Compétences
                    </h1>
                    <p className="mt-6 text-xl text-zinc-400">
                        Mes compétences développées à travers mes projets concrets et expériences
                    </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                {/* Achievements Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {achievements.map((achievement, index) => {
                        const IconComponent = achievement.icon;
                        return (
                            <div key={index} className="text-center p-6 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 group">
                                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} p-0.5 group-hover:scale-110 transition-transform duration-500`}>
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-zinc-100 mb-2">{achievement.title}</h3>
                                <p className="text-zinc-400 text-sm">{achievement.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Skills with Projects */}
                <div className="space-y-12">
                    {skillsWithProjects.map((category, categoryIndex) => {
                        const IconComponent = category.icon;
                        return (
                            <div key={categoryIndex} className="relative">
                                <div className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
                                    
                                    {/* Category Header */}
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20`}>
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-zinc-100">{category.title}</h2>
                                            <p className="text-zinc-400 mt-1">{category.description}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* Projects Column */}
                                        <div className="space-y-6">
                                            <h3 className="text-lg font-semibold text-zinc-200 mb-4">Projets Réalisés</h3>
                                            {category.projects.map((project, projectIndex) => (
                                                <div key={projectIndex} className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                                                    <div className="flex items-start justify-between mb-3">
                                                        <h4 className="font-bold text-zinc-100">{project.name}</h4>
                                                        {(project.name === "Plug™" || project.name === "Spotilabs" || project.name === "Offcall" || project.name === "Viralize") && (
                                                            <Link 
                                                                href={
                                                                    project.name === "Plug™" ? "https://plug.army" :
                                                                    project.name === "Spotilabs" ? "https://spotilabs.fr" :
                                                                    project.name === "Offcall" ? "https://offcall.app" :
                                                                    "https://viralize.club"
                                                                }
                                                                target="_blank"
                                                                className="text-zinc-400 hover:text-white transition-colors"
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                            </Link>
                                                        )}
                                                    </div>
                                                    <p className="text-zinc-300 text-sm mb-3">{project.description}</p>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {project.tech.map((tech, techIndex) => (
                                                            <span key={techIndex} className="px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-md text-xs">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <p className="text-zinc-400 text-sm italic">{project.achievement}</p>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Skills Column */}
                                        <div className="space-y-6">
                                            <h3 className="text-lg font-semibold text-zinc-200 mb-4">Compétences Techniques</h3>
                                            <div className="space-y-6">
                                                {category.skills.map((skill, skillIndex) => (
                                                    <div key={skillIndex} className="space-y-3">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-zinc-200 font-medium">{skill.name}</span>
                                                            <span className="text-zinc-500 text-sm">{skill.level}%</span>
                                                        </div>
                                                        <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                                                            <div 
                                                                className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                                                                style={{ 
                                                                    width: `${skill.level}%`,
                                                                    animationDelay: `${skillIndex * 0.1}s`
                                                                }}
                                                            />
                                                        </div>
                                                        <p className="text-zinc-400 text-sm">{skill.experience}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur border border-purple-500/20">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-zinc-100 mb-4">Mes compétences en action</h3>
                            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                                Chaque compétence listée a été développée et mise en pratique sur des projets réels. 
                                De Plug™ à mon rôle de Lead Tech chez NAIART, j&apos;apprends et j&apos;évolue constamment 
                                à travers des défis concrets.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link 
                                    href="/portfolio" 
                                    className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
                                >
                                    Voir mes projets
                                </Link>
                                <Link 
                                    href="/contact" 
                                    className="px-6 py-3 border border-zinc-600 text-zinc-300 font-semibold rounded-lg hover:border-zinc-500 hover:text-white transition-colors"
                                >
                                    Discutons ensemble
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 