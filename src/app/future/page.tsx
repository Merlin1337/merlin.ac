import React from "react";
import { Navigation } from "../components/nav";
import { Rocket, Target, Globe, Code, Users, Trophy, Star, BookOpen, Zap } from "lucide-react";

const futureGoals = [
    {
        title: "Approfondissement Cloud & DevOps",
        description: "Améliorer mes compétences en architecture cloud pour mieux gérer mes projets",
        technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
        timeline: "2024-2025",
        color: "from-green-500 to-emerald-500",
        icon: Globe
    },
    {
        title: "Amélioration en Mobile & UX",
        description: "Continuer à progresser en développement mobile et design d'interface",
        technologies: ["React Native", "Flutter", "Figma", "Design Systems"],
        timeline: "2024",
        color: "from-blue-500 to-cyan-500",
        icon: Code
    },
    {
        title: "Développement de projets",
        description: "Faire grandir mes projets actuels de manière durable",
        technologies: ["Product Management", "Growth", "Analytics"],
        timeline: "En continu",
        color: "from-purple-500 to-pink-500",
        icon: Rocket
    },
    {
        title: "Évolution en Lead Tech",
        description: "Continuer à développer mes compétences de leadership technique",
        technologies: ["Technical Leadership", "Team Management", "Architecture"],
        timeline: "En continu",
        color: "from-orange-500 to-red-500",
        icon: Users
    }
];

const upcomingProjects = [
    {
        title: "Évolution d'Offcall",
        description: "Améliorer la plateforme et peut-être ajouter de nouvelles fonctionnalités",
        status: "En développement",
        impact: "Medium",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Projets personnels",
        description: "Continuer à expérimenter avec des petits projets pour apprendre",
        status: "En cours",
        impact: "Low",
        color: "from-green-500 to-emerald-500"
    }
];

const visionItems = [
    {
        title: "Amélioration technique",
        description: "Continuer à progresser techniquement et apprendre de nouvelles choses",
        icon: Rocket
    },
    {
        title: "Projets durables",
        description: "Créer des projets qui ont un impact positif et qui durent",
        icon: Target
    },
    {
        title: "Travail de qualité",
        description: "Maintenir un bon niveau de qualité dans tout ce que je fais",
        icon: Trophy
    },
    {
        title: "Apprentissage continu",
        description: "Rester curieux et continuer à apprendre de nouvelles technologies",
        icon: BookOpen
    }
];

export default function FuturePage() {
    return (
        <div className="relative pb-16 bg-gradient-to-tl from-black via-zinc-900/20 to-black min-h-screen">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-12 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-transparent bg-white bg-clip-text sm:text-6xl lg:text-7xl">
                        Avenir
                    </h1>
                    <p className="mt-6 text-xl text-zinc-400">
                        Mes objectifs d&apos;apprentissage et projets à venir
                    </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                {/* Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visionItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={index} className="relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 group">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                                        <IconComponent className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-zinc-100">{item.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Goals Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-zinc-100 mb-4">Objectifs d&apos;apprentissage</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Les compétences que j&apos;aimerais développer dans les prochaines années
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {futureGoals.map((goal, index) => {
                            const IconComponent = goal.icon;
                            return (
                                <div key={index} className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 group">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${goal.color} bg-opacity-20`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-zinc-100 mb-2">{goal.title}</h3>
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${goal.color}`}></div>
                                                <span className="text-zinc-400 text-sm">{goal.timeline}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-zinc-300 leading-relaxed mb-6">{goal.description}</p>
                                    
                                    <div className="space-y-3">
                                        <h4 className="text-zinc-200 font-semibold text-sm">Technologies à approfondir</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {goal.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-sm border border-zinc-700/50">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Upcoming Projects */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-zinc-100 mb-4">Projets en cours</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Les projets sur lesquels je travaille actuellement
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {upcomingProjects.map((project, index) => (
                            <div key={index} className="relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 group">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.color}`}></div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                project.status === 'En cours' ? 'bg-green-500/20 text-green-400' :
                                                project.status === 'En développement' ? 'bg-blue-500/20 text-blue-400' :
                                                'bg-yellow-500/20 text-yellow-400'
                                            }`}>
                                                {project.status}
                                            </span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                project.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                                                project.impact === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                                                'bg-green-500/20 text-green-400'
                                            }`}>
                                                {project.impact} Impact
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-zinc-100">{project.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future Vision */}
                <div className="mt-20">
                    <div className="relative p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur border border-purple-500/20">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <Zap className="w-8 h-8 text-yellow-400" />
                                <h3 className="text-3xl font-bold text-zinc-100">Mes objectifs à long terme</h3>
                            </div>
                            
                            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                                <p>
                                    Dans les prochaines années, j&apos;aimerais continuer à <span className="text-white font-semibold">progresser techniquement</span> et 
                                    peut-être avoir l&apos;opportunité de travailler sur des projets plus ambitieux.
                                </p>
                                
                                <p>
                                    Mon objectif est de <span className="text-purple-400 font-semibold">devenir un meilleur développeur</span> et 
                                    de contribuer à des projets qui ont un impact positif. J&apos;aimerais aussi continuer à apprendre 
                                    et rester à jour avec les nouvelles technologies.
                                </p>
                                
                                <p>
                                    Idéalement, j&apos;aimerais atteindre <span className="text-cyan-400 font-semibold">une certaine stabilité</span> tout en 
                                    continuant à faire des choses qui m&apos;intéressent. L&apos;important c&apos;est de rester passionné et de continuer à apprendre.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center justify-center">
                                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span className="text-zinc-200 font-medium">Une étape à la fois</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 