import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
    globalCss: {
        "html, body, #root": {
            bg: "bg",
            color: "fg",
            minHeight: "100vh",
            margin: 0,
            padding: 0,
        },
    },

    theme: {
        tokens: {
            colors: {
                blueBrand: {
                    50: { value: "#f0f9ff" },
                    100: { value: "#e0f2fe" },
                    200: { value: "#bae6fd" },
                    300: { value: "#7dd3fc" },
                    400: { value: "#38bdf8" },
                    500: { value: "#0ea5e9" },
                    600: { value: "#0284c7" },
                    700: { value: "#0369a1" },
                    800: { value: "#075985" },
                    900: { value: "#0c4a6e" },
                    950: { value: "#082f49" },
                },
            },
        },

        semanticTokens: {
            colors: {
                // 🌊 Harmonized neutral scale
                gray: {
                    50: { value: { _light: "#bae6fd", _dark: "#0b192e" } },
                    100: { value: { _light: "#7dd3fc", _dark: "#0f223d" } },
                    200: { value: { _light: "#38bdf8", _dark: "#163156" } },
                    300: { value: { _light: "#0ea5e9", _dark: "#1e4070" } },
                    400: { value: { _light: "#0284c7", _dark: "#255390" } },
                    500: { value: { _light: "#0369a1", _dark: "#38bdf8" } },
                    600: { value: { _light: "#075985", _dark: "#7dd3fc" } },
                    700: { value: { _light: "#0c4a6e", _dark: "#bae6fd" } },
                    800: { value: { _light: "#082f49", _dark: "#e0f2fe" } },
                    900: { value: { _light: "#02121f", _dark: "#f0f9ff" } },
                    950: { value: { _light: "#000a12", _dark: "#ffffff" } },
                },

                // 🌊 Main background colors
                bg: {
                    DEFAULT: {
                        value: { _light: "#60a5fa", _dark: "#06101e" }, // Richer darkened blue page canvas for strong contrast
                    },
                    panel: {
                        value: { _light: "#bae6fd", _dark: "#0f2442" }, // Saturated light blue for GameCard & Dropdowns
                    },
                    subtle: {
                        value: { _light: "#93c5fd", _dark: "#143054" }, // Consistent ratio for Search Input & Hover states
                    },
                    muted: {
                        value: { _light: "#7dd3fc", _dark: "#1a3c69" },
                    },
                    emphasized: {
                        value: { _light: "#3b82f6", _dark: "#234d85" },
                    },
                },

                // 🌊 High-contrast text colors
                fg: {
                    DEFAULT: {
                        value: { _light: "#000d1a", _dark: "#f0f9ff" }, // Deepest dark navy-black for maximum contrast on light blue
                    },
                    muted: {
                        value: { _light: "#032b4d", _dark: "#93c5fd" },
                    },
                    subtle: {
                        value: { _light: "#074b82", _dark: "#60a5fa" },
                    },
                },

                // 🌊 Card, Input & Component borders
                border: {
                    DEFAULT: {
                        value: { _light: "#3b82f6", _dark: "#1d4478" }, // Well-defined border
                    },
                    muted: {
                        value: { _light: "#60a5fa", _dark: "#143054" },
                    },
                    subtle: {
                        value: { _light: "#93c5fd", _dark: "#0f2442" },
                    },
                    emphasized: {
                        value: { _light: "#1d4ed8", _dark: "#2a5ba0" },
                    },
                },

                // 🌊 Brand primary accents
                brand: {
                    DEFAULT: {
                        value: { _light: "{colors.blueBrand.800}", _dark: "{colors.blueBrand.400}" },
                    },
                },
            },
        },
    },
});

export const system = createSystem(defaultConfig, customConfig);
