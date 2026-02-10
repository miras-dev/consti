"use client";

export function StyleGuide() {
    return (
        <div className="min-h-screen bg-background-primary py-12">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-text-primary">
                        Modern Design System
                    </h1>
                    <p className="text-lg text-text-secondary">
                        Updated typography, colors, and components for a modern look
                    </p>
                </div>

                {/* Typography */}
                <section className="mb-16">
                    <h2 className="mb-8 text-2xl font-semibold text-text-primary">Typography</h2>
                    <div className="space-y-4">
                        <div>
                            <h1 className="text-4xl font-bold text-text-primary">Heading 1 - Inter Bold</h1>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold text-text-primary">Heading 2 - Inter Semibold</h2>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium text-text-primary">Heading 3 - Inter Medium</h3>
                        </div>
                        <div>
                            <p className="text-base text-text-primary">
                                Body text - Inter Regular with improved line height for better readability
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-text-secondary">
                                Secondary text - Inter Regular in secondary color
                            </p>
                        </div>
                    </div>
                </section>

                {/* Colors */}
                <section className="mb-16">
                    <h2 className="mb-8 text-2xl font-semibold text-text-primary">Color Palette</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Primary Colors */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-text-primary">Primary Blue</h3>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-3">
                                    <div className="h-12 w-12 rounded-lg bg-brand-primary-600 shadow-elevation-1"></div>
                                    <span className="text-sm text-text-secondary">Primary 600</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-12 w-12 rounded-lg bg-brand-primary-500 shadow-elevation-1"></div>
                                    <span className="text-sm text-text-secondary">Primary 500</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-12 w-12 rounded-lg bg-brand-primary-100 shadow-elevation-1"></div>
                                    <span className="text-sm text-text-secondary">Primary 100</span>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Colors */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-text-primary">Secondary Green</h3>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-3">
                                    <div className="h-12 w-12 rounded-lg bg-brand-secondary-600 shadow-elevation-1"></div>
                                    <span className="text-sm text-text-secondary">Secondary 600</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-12 w-12 rounded-lg bg-brand-secondary-500 shadow-elevation-1"></div>
                                    <span className="text-sm text-text-secondary">Secondary 500</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-12 w-12 rounded-lg bg-brand-secondary-100 shadow-elevation-1"></div>
                                    <span className="text-sm text-text-secondary">Secondary 100</span>
                                </div>
                            </div>
                        </div>

                        {/* Neutral Colors */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-text-primary">Neutrals</h3>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-3">
                                    <div className="h-12 w-12 rounded-lg bg-text-primary shadow-elevation-1"></div>
                                    <span className="text-sm text-text-secondary">Text Primary</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-12 w-12 rounded-lg bg-text-secondary shadow-elevation-1"></div>
                                    <span className="text-sm text-text-secondary">Text Secondary</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-12 w-12 rounded-lg bg-background-secondary shadow-elevation-1"></div>
                                    <span className="text-sm text-text-secondary">Background Secondary</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Buttons */}
                <section className="mb-16">
                    <h2 className="mb-8 text-2xl font-semibold text-text-primary">Modern Buttons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-text-primary">Primary</h3>
                            <button className="btn-primary">Primary Button</button>
                            <button className="btn-primary" disabled>Disabled</button>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-text-primary">Secondary</h3>
                            <button className="btn-secondary">Secondary Button</button>
                            <button className="btn-secondary" disabled>Disabled</button>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-text-primary">Ghost</h3>
                            <button className="btn-ghost">Ghost Button</button>
                            <button className="btn-ghost" disabled>Disabled</button>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-text-primary">Dark</h3>
                            <button className="btn-dark">Dark Button</button>
                            <button className="btn-dark" disabled>Disabled</button>
                        </div>

                        <div className="space-y-4 bg-background-alternative p-4 rounded-lg">
                            <h3 className="text-lg font-medium text-white">Light Outline</h3>
                            <button className="btn-outline-light">Outline Light</button>
                            <button className="btn-outline-light" disabled>Disabled</button>
                        </div>
                    </div>
                </section>

                {/* Cards */}
                <section className="mb-16">
                    <h2 className="mb-8 text-2xl font-semibold text-text-primary">Modern Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="card p-6">
                            <h3 className="mb-3 text-lg font-semibold text-text-primary">Basic Card</h3>
                            <p className="text-text-secondary">
                                A simple card with subtle shadow and rounded corners.
                            </p>
                        </div>

                        <div className="card-elevated p-6">
                            <h3 className="mb-3 text-lg font-semibold text-text-primary">Elevated Card</h3>
                            <p className="text-text-secondary">
                                An elevated card with more prominent shadow for emphasis.
                            </p>
                        </div>

                        <div className="card p-6 hover:scale-105 transition-transform duration-200">
                            <h3 className="mb-3 text-lg font-semibold text-text-primary">Interactive Card</h3>
                            <p className="text-text-secondary">
                                A card with hover effects and smooth transitions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Form Elements */}
                <section className="mb-16">
                    <h2 className="mb-8 text-2xl font-semibold text-text-primary">Form Elements</h2>
                    <div className="max-w-md space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">
                                Modern Input
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your text..."
                                className="input-modern"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">
                                Focused Input
                            </label>
                            <input
                                type="text"
                                placeholder="This input is focused"
                                className="input-modern"
                                autoFocus
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">
                                Disabled Input
                            </label>
                            <input
                                type="text"
                                placeholder="Disabled input"
                                className="input-modern opacity-50 cursor-not-allowed"
                                disabled
                            />
                        </div>
                    </div>
                </section>

                {/* Shadows */}
                <section className="mb-16">
                    <h2 className="mb-8 text-2xl font-semibold text-text-primary">Shadow System</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-elevation-1">
                            <h3 className="font-medium text-text-primary">Elevation 1</h3>
                            <p className="text-sm text-text-secondary">Subtle shadow for cards</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-elevation-2">
                            <h3 className="font-medium text-text-primary">Elevation 2</h3>
                            <p className="text-sm text-text-secondary">Medium shadow for buttons</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-elevation-3">
                            <h3 className="font-medium text-text-primary">Elevation 3</h3>
                            <p className="text-sm text-text-secondary">Prominent shadow for modals</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-elevation-4">
                            <h3 className="font-medium text-text-primary">Elevation 4</h3>
                            <p className="text-sm text-text-secondary">Strong shadow for dropdowns</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-elevation-5">
                            <h3 className="font-medium text-text-primary">Elevation 5</h3>
                            <p className="text-sm text-text-secondary">Maximum shadow for overlays</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}