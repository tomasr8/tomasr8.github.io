import { useState } from "react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts"
import { Moon, Sun } from "lucide-react"

export default function App() {
    const [darkMode, setDarkMode] = useState(false)

    const entries = [
        { id: "1", date: "2025-10-10", weight: 2.882, notes: "Birth weight" },
        {
            id: "2",
            date: "2025-10-16",
            weight: 2.732,
            notes: "Leaving hospital",
        },
        { id: "3", date: "2025-10-17", weight: 2.83, notes: "Sage-femme visit" },
    ]

    const sortedEntries = [...entries].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    )

    const chartData = sortedEntries.map(entry => ({
        date: new Date(entry.date).toLocaleDateString("en-GB", {
            month: "short",
            day: "numeric",
        }),
        weight: entry.weight,
        fullDate: entry.date,
    }))

    let weightChange = "N/A"
    if (sortedEntries.length > 1) {
        const first = sortedEntries[0].weight
        const last = sortedEntries[sortedEntries.length - 1].weight
        const diff = (last - first) * 1000
        const sign = diff >= 0 ? "+" : ""
        weightChange = `${sign}${diff.toFixed(0)}g`
    }

    let lastWeightChange = "N/A"
    if (sortedEntries.length > 1) {
        const last = sortedEntries.at(-1).weight
        const secondToLast = sortedEntries.at(-2).weight
        const diff = (last - secondToLast) * 1000
        const sign = diff >= 0 ? "+" : ""
        lastWeightChange = `${sign}${diff.toFixed(0)}g`
    }

    // Calculate Y-axis range with padding
    const weights = sortedEntries.map(e => e.weight)
    const minWeight = Math.min(...weights)
    const maxWeight = Math.max(...weights)
    const padding = (maxWeight - minWeight) * 0.2 || 0.5 // 20% padding or 0.5kg minimum
    const yAxisMin = Math.max(0, minWeight - padding)
    const yAxisMax = maxWeight + padding

    const bgClass = darkMode ? "bg-gray-900" : "bg-gray-50"
    const cardClass = darkMode ? "bg-gray-800" : "bg-white"
    const textClass = darkMode ? "text-gray-100" : "text-gray-900"
    const textSecondaryClass = darkMode ? "text-gray-400" : "text-gray-600"
    const borderClass = darkMode ? "border-gray-700" : "border-gray-200"

    return (
        <div
            className={`min-h-screen ${bgClass} transition-colors duration-200`}
        >
            <div className="max-w-6xl mx-auto p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className={`text-3xl font-bold ${textClass}`}>
                            Lucinka
                        </h1>
                    </div>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-3 rounded-lg ${cardClass} border ${borderClass} hover:opacity-80 transition-opacity`}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <Sun className="w-5 h-5 text-yellow-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-600" />
                        )}
                    </button>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div
                        className={`${cardClass} rounded-lg border ${borderClass} p-6`}
                    >
                        <p className={textSecondaryClass}>Current Weight</p>
                        <p className={`text-3xl font-bold ${textClass}`}>
                            {sortedEntries[
                                sortedEntries.length - 1
                            ]?.weight.toFixed(1)}{" "}
                            kg
                        </p>
                    </div>
                    <div
                        className={`${cardClass} rounded-lg border ${borderClass} p-6`}
                    >
                        <p className={textSecondaryClass}>
                            Weight Change (since last measurement)
                        </p>
                        <p className={`text-3xl font-bold ${textClass}`}>
                            {lastWeightChange}
                        </p>
                    </div>
                    <div
                        className={`${cardClass} rounded-lg border ${borderClass} p-6`}
                    >
                        <p className={textSecondaryClass}>
                            Weight Change (since birth)
                        </p>
                        <p className={`text-3xl font-bold ${textClass}`}>
                            {weightChange}
                        </p>
                    </div>
                </div>

                {/* Chart */}
                <div
                    className={`${cardClass} rounded-lg border ${borderClass} p-6 mb-8`}
                >
                    <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>
                        Weight Over Time
                    </h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke={darkMode ? "#374151" : "#e5e7eb"}
                            />
                            <XAxis
                                dataKey="date"
                                stroke={darkMode ? "#9ca3af" : "#6b7280"}
                            />
                            <YAxis
                                stroke={darkMode ? "#9ca3af" : "#6b7280"}
                                domain={[yAxisMin, yAxisMax]}
                                label={{
                                    value: "Weight (kg)",
                                    angle: -90,
                                    position: "insideLeft",
                                    fill: darkMode ? "#9ca3af" : "#6b7280",
                                }}
                                tickFormatter={value => value.toFixed(2)}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: darkMode
                                        ? "#1f2937"
                                        : "#ffffff",
                                    border: `1px solid ${
                                        darkMode ? "#374151" : "#e5e7eb"
                                    }`,
                                    borderRadius: "0.5rem",
                                    color: darkMode ? "#f3f4f6" : "#111827",
                                }}
                                formatter={value => value.toFixed(2)}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="weight"
                                stroke="#8b5cf6"
                                strokeWidth={2}
                                dot={{ fill: "#8b5cf6", r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Entries List */}
                <div
                    className={`${cardClass} rounded-lg border ${borderClass} p-6`}
                >
                    <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>
                        All Entries
                    </h2>
                    <div className="space-y-3">
                        {sortedEntries.map(entry => (
                            <div
                                key={entry.id}
                                className={`flex items-center justify-between p-4 border ${borderClass} rounded-lg`}
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <p
                                            className={`font-semibold ${textClass}`}
                                        >
                                            {new Date(
                                                entry.date
                                            ).toLocaleDateString("en-GB", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </p>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                darkMode
                                                    ? "bg-violet-900 text-violet-300"
                                                    : "bg-violet-100 text-violet-700"
                                            }`}
                                        >
                                            {entry.weight.toFixed(2)}kg
                                        </span>
                                    </div>
                                    {entry.notes && (
                                        <p
                                            className={`text-sm mt-1 ${textSecondaryClass}`}
                                        >
                                            {entry.notes}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
