import React from "react";
import { Navigation } from "../components/nav";
import { Rocket, Target, Globe, Code, Users, Trophy, Star, BookOpen, Zap } from "lucide-react";

const futureGoals = [
    {
        title: "Maîtrise du Cloud & DevOps",
        description: "Développer une expertise pointue en architecture cloud pour scaler mes projets à l'international",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
        timeline: "2024-2025",
        color: "from-green-500 to-emerald-500",
        icon: Globe
    },
    {
        title: "Excellence en Mobile UI/UX",
        description: "Perfectionner mes compétences en développement mobile et design d'expérience utilisateur",
        technologies: ["React Native", "Flutter", "Figma", "Design Systems", "User Research"],
        timeline: "2024",
        color: "from-blue-500 to-cyan-500",
        icon: Code
    },
    {
        title: "Expansion Entrepreneuriale",
        description: "Développer et scaler mes projets actuels pour créer des entreprises rentables et influentes",
        technologies: ["Business Strategy", "Product Management", "Growth Hacking", "Fundraising"],
        timeline: "En continu",
        color: "from-purple-500 to-pink-500",
        icon: Rocket
    },
    {
        title: "Leadership Tech",
        description: "Consolider mon rôle de Lead Tech et bâtir des équipes techniques de classe mondiale",
        technologies: ["Technical Leadership", "Team Building", "Architecture", "Innovation"],
        timeline: "En continu",
        color: "from-orange-500 to-red-500",
        icon: Users
    }
];

const upcomingProjects = [
    {
        title: "Expansion Internationale Tunefy",
        description: "Scaler Tunefy au niveau international avec une architecture cloud robuste et une stratégie de croissance agressive",
        status: "En développement",
        impact: "High",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Swipe Media Empire",
        description: "Transformer Swipe en un empire médiatique avec de multiples revenus et une audience globale",
        status: "En expansion",
        impact: "High",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Nouvelle Startup Secrète",
        description: "Développement d'une nouvelle plateforme révolutionnaire dans le secteur des créateurs de contenu",
        status: "Stealth Mode",
        impact: "High",
        color: "from-green-500 to-emerald-500"
    }
];

const visionItems = [
    {
        title: "Domination Technologique",
        description: "Créer des solutions qui définissent les standards de l'industrie",
        icon: Rocket
    },
    {
        title: "Écosystème d'Entreprises",
        description: "Bâtir un portefeuille d'entreprises rentables et influentes",
        icon: Target
    },
    {
        title: "Excellence Opérationnelle",
        description: "Maintenir les plus hauts standards de qualité et de performance",
        icon: Trophy
    },
    {
        title: "Croissance Stratégique",
        description: "Développer continuellement de nouvelles opportunités de business",
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
                        Mes objectifs, projets futurs et vision pour l&apos;avenir de la technologie
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
                            Les compétences et technologies que je souhaite maîtriser dans les prochaines années
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
                                        <h4 className="text-zinc-200 font-semibold text-sm">Technologies à apprendre</h4>
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
                        <h2 className="text-3xl font-bold text-zinc-100 mb-4">Projets à venir</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Les projets innovants que je prévois de développer dans les mois à venir
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingProjects.map((project, index) => (
                            <div key={index} className="relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 group">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.color}`}></div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                project.status === 'En cours' ? 'bg-green-500/20 text-green-400' :
                                                project.status === 'En conception' ? 'bg-blue-500/20 text-blue-400' :
                                                'bg-yellow-500/20 text-yellow-400'
                                            }`}>
                                                {project.status}
                                            </span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                project.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                                                'bg-orange-500/20 text-orange-400'
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
                                <h3 className="text-3xl font-bold text-zinc-100">Ma vision pour 2030</h3>
                            </div>
                            
                            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                                <p>
                                    D&apos;ici 2030, je me vois à la tête d&apos;un <span className="text-white font-semibold">empire technologique</span> composé de plusieurs entreprises 
                                    rentables qui dominent leurs secteurs respectifs.
                                </p>
                                
                                <p>
                                    Mon objectif est de <span className="text-purple-400 font-semibold">transformer chacun de mes projets actuels en licornes</span>, 
                                    en tirant parti de ma position de Lead Tech pour créer des produits révolutionnaires avec des architectures cloud 
                                    ultra-performantes et des expériences utilisateur exceptionnelles.
                                </p>
                                
                                <p>
                                    Je vise à atteindre <span className="text-cyan-400 font-semibold">l&apos;indépendance financière totale</span> tout en 
                                    révolutionnant l&apos;industrie des médias numériques et des plateformes créatives. 
                                    Le succès entrepreneurial n&apos;est pas qu&apos;un rêve, c&apos;est un plan d&apos;action.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center justify-center">
                                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span className="text-zinc-200 font-medium">Lead Tech aujourd&apos;hui, empire demain</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 