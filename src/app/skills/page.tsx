import React from "react";
import { Navigation } from "../components/nav";
import { Code, Database, Palette, Settings, Globe, Wrench } from "lucide-react";

const skillCategories = [
    {
        title: "Langages de programmation",
        icon: Code,
        color: "blue",
        skills: [
            { name: "JavaScript", level: 90, color: "from-yellow-500 to-yellow-300" },
            { name: "Python", level: 85, color: "from-green-500 to-green-300" },
            { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-300" },
            { name: "PHP", level: 75, color: "from-purple-500 to-purple-300" },
            { name: "Java", level: 70, color: "from-red-500 to-red-300" },
        ]
    },
    {
        title: "Frameworks & Libraries",
        icon: Settings,
        color: "green",
        skills: [
            { name: "React", level: 90, color: "from-cyan-500 to-cyan-300" },
            { name: "Next.js", level: 85, color: "from-gray-700 to-gray-500" },
            { name: "Tailwind CSS", level: 95, color: "from-teal-500 to-teal-300" },
            { name: "React Native", level: 75, color: "from-blue-500 to-purple-500" },
            { name: "JavaFX", level: 65, color: "from-orange-500 to-orange-300" },
        ]
    },
    {
        title: "Bases de données",
        icon: Database,
        color: "purple",
        skills: [
            { name: "MySQL", level: 80, color: "from-blue-600 to-blue-400" },
            { name: "PostgreSQL", level: 85, color: "from-blue-500 to-indigo-500" },
            { name: "SQL", level: 80, color: "from-indigo-500 to-indigo-300" },
        ]
    },
    {
        title: "Outils & Technologies",
        icon: Wrench,
        color: "orange",
        skills: [
            { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
            { name: "Linux", level: 80, color: "from-yellow-500 to-orange-500" },
            { name: "Bash", level: 75, color: "from-gray-600 to-gray-400" },
            { name: "WordPress", level: 70, color: "from-blue-600 to-blue-400" },
        ]
    },
    {
        title: "Web Technologies",
        icon: Globe,
        color: "red",
        skills: [
            { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
            { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
            { name: "REST APIs", level: 85, color: "from-green-500 to-teal-500" },
            { name: "Responsive Design", level: 90, color: "from-purple-500 to-pink-500" },
        ]
    },
    {
        title: "Design & Multimedia",
        icon: Palette,
        color: "pink",
        skills: [
            { name: "Photoshop", level: 75, color: "from-blue-600 to-purple-600" },
            { name: "CapCut", level: 80, color: "from-pink-500 to-purple-500" },
            { name: "UI/UX Design", level: 70, color: "from-indigo-500 to-purple-500" },
        ]
    }
];

const softSkills = [
    { name: "Gestion d'équipe", level: 85 },
    { name: "Leadership", level: 80 },
    { name: "Communication", level: 90 },
    { name: "Résolution de problèmes", level: 95 },
    { name: "Créativité", level: 90 },
    { name: "Adaptabilité", level: 85 },
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
                        Un aperçu de mes compétences techniques et humaines
                    </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                {/* Technical Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => {
                        const IconComponent = category.icon;
                        return (
                            <div 
                                key={categoryIndex}
                                className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-xl bg-${category.color}-500/20 group-hover:bg-${category.color}-500/30 transition-all duration-300`}>
                                        <IconComponent className={`w-6 h-6 text-${category.color}-400`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-100">{category.title}</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-zinc-300 font-medium">{skill.name}</span>
                                                <span className="text-zinc-500 text-sm">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                                                <div 
                                                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                                                    style={{ 
                                                        width: `${skill.level}%`,
                                                        animationDelay: `${skillIndex * 0.1}s`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Soft Skills Section */}
                <div className="mt-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Compétences transversales</h2>
                            <p className="text-zinc-400">Les soft skills qui font la différence</p>
                        </div>
                        
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur border border-zinc-700/50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {softSkills.map((skill, index) => (
                                    <div key={index} className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-zinc-200 font-semibold">{skill.name}</span>
                                            <span className="text-zinc-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-zinc-700 rounded-full h-3 overflow-hidden">
                                            <div 
                                                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-3 rounded-full transition-all duration-1000 ease-out"
                                                style={{ 
                                                    width: `${skill.level}%`,
                                                    animationDelay: `${index * 0.1}s`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learning Philosophy */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur border border-purple-500/20">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-zinc-100 mb-4">Toujours en apprentissage</h3>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                La technologie évolue constamment, et moi aussi. Je crois fermement en l&apos;apprentissage continu 
                                et je m&apos;efforce toujours d&apos;explorer de nouvelles technologies et méthodologies pour rester 
                                à la pointe de l&apos;innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 