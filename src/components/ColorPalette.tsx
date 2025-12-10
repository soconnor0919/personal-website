"use client";

import { useState } from "react";
import { cn } from "~/lib/utils";

// Helper to convert HSL string (e.g., "0 0% 100%") to Hex
function hslToHex(hsl: string) {
    const [h = 0, s = 0, l = 0] = hsl.split(" ").map((val) => parseFloat(val));

    const hDecimal = h / 360;
    const sDecimal = s / 100;
    const lDecimal = l / 100;

    let r, g, b;

    if (s === 0) {
        r = g = b = lDecimal; // achromatic
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = lDecimal < 0.5 ? lDecimal * (1 + sDecimal) : lDecimal + sDecimal - lDecimal * sDecimal;
        const p = 2 * lDecimal - q;

        r = hue2rgb(p, q, hDecimal + 1 / 3);
        g = hue2rgb(p, q, hDecimal);
        b = hue2rgb(p, q, hDecimal - 1 / 3);
    }

    const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

const THEME_COLORS = {
    light: {
        background: "0 0% 100%",
        foreground: "240 10% 3.9%",
        card: "0 0% 100%",
        "card-foreground": "240 10% 3.9%",
        popover: "0 0% 100%",
        "popover-foreground": "240 10% 3.9%",
        primary: "240 5.9% 10%",
        "primary-foreground": "0 0% 98%",
        secondary: "240 4.8% 90%",
        "secondary-foreground": "240 5.9% 10%",
        muted: "240 4.8% 95.9%",
        "muted-foreground": "240 3.8% 46.1%",
        accent: "240 4.8% 95.9%",
        "accent-foreground": "240 5.9% 10%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "0 0% 98%",
        border: "240 5.9% 90%",
        input: "240 5.9% 90%",
        ring: "240 10% 3.9%",
    },
    dark: {
        background: "240 10% 3.9%",
        foreground: "0 0% 98%",
        card: "240 10% 3.9%",
        "card-foreground": "0 0% 98%",
        popover: "240 10% 3.9%",
        "popover-foreground": "0 0% 98%",
        primary: "0 0% 98%",
        "primary-foreground": "240 5.9% 10%",
        secondary: "240 3.7% 20%",
        "secondary-foreground": "0 0% 98%",
        muted: "240 3.7% 15.9%",
        "muted-foreground": "240 5% 64.9%",
        accent: "240 3.7% 15.9%",
        "accent-foreground": "0 0% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "0 0% 98%",
        border: "240 3.7% 15.9%",
        input: "240 3.7% 15.9%",
        ring: "240 4.9% 83.9%",
    },
};

const ColorSwatch = ({ hsl, title }: { hsl: string; title: string }) => {
    const [copied, setCopied] = useState(false);
    const hex = hslToHex(hsl);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className="group relative flex flex-col items-center">
            <div
                className={cn(
                    "h-12 w-12 flex-shrink-0 rounded-lg shadow-sm cursor-pointer transition-transform active:scale-95 border border-border/20",
                )}
                style={{ backgroundColor: hex }}
                onClick={copyToClipboard}
                title={`${title} (${hex})`}
            />
            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-10 pointer-events-none border border-border">
                {copied ? "Copied!" : hex}
            </div>
        </div>
    );
};

const ColorSection = ({ mode, colors }: { mode: "light" | "dark"; colors: typeof THEME_COLORS.light }) => {
    return (
        <div className="space-y-4">
            <h4 className="font-heading font-bold capitalize text-lg">{mode} Mode</h4>

            {/* Backgrounds */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="w-24 text-sm font-medium">Backgrounds</div>
                <div className="flex gap-2 flex-wrap">
                    <ColorSwatch hsl={colors.background} title="background" />
                    <ColorSwatch hsl={colors.card} title="card" />
                    <ColorSwatch hsl={colors.popover} title="popover" />
                    <ColorSwatch hsl={colors.muted} title="muted" />
                    <ColorSwatch hsl={colors.secondary} title="secondary" />
                </div>
            </div>

            {/* Foregrounds */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="w-24 text-sm font-medium">Foregrounds</div>
                <div className="flex gap-2 flex-wrap">
                    <ColorSwatch hsl={colors.foreground} title="foreground" />
                    <ColorSwatch hsl={colors["card-foreground"]} title="card-foreground" />
                    <ColorSwatch hsl={colors["popover-foreground"]} title="popover-foreground" />
                    <ColorSwatch hsl={colors["muted-foreground"]} title="muted-foreground" />
                    <ColorSwatch hsl={colors["secondary-foreground"]} title="secondary-foreground" />
                </div>
            </div>

            {/* Primary */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="w-24 text-sm font-medium">Primary</div>
                <div className="flex gap-2 flex-wrap">
                    <ColorSwatch hsl={colors.primary} title="primary" />
                    <ColorSwatch hsl={colors["primary-foreground"]} title="primary-foreground" />
                </div>
            </div>

            {/* Destructive */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="w-24 text-sm font-medium">Destructive</div>
                <div className="flex gap-2 flex-wrap">
                    <ColorSwatch hsl={colors.destructive} title="destructive" />
                    <ColorSwatch hsl={colors["destructive-foreground"]} title="destructive-foreground" />
                </div>
            </div>

            {/* UI Elements */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="w-24 text-sm font-medium">UI Elements</div>
                <div className="flex gap-2 flex-wrap">
                    <ColorSwatch hsl={colors.border} title="border" />
                    <ColorSwatch hsl={colors.input} title="input" />
                    <ColorSwatch hsl={colors.ring} title="ring" />
                </div>
            </div>
        </div>
    );
};

export function ColorPalette() {
    return (
        <div className="space-y-12 not-prose my-8">
            <div>
                <h3 className="text-lg font-bold mb-4">Scales</h3>
                <p className="text-muted-foreground mb-6">
                    The system uses semantic color scales that adapt to the current theme. Hover to see hex codes.
                </p>

                <div className="grid gap-12 lg:grid-cols-2">
                    <ColorSection mode="light" colors={THEME_COLORS.light} />
                    <div className="h-px bg-border/50 lg:hidden" />
                    <ColorSection mode="dark" colors={THEME_COLORS.dark} />
                </div>
            </div>
        </div>
    );
}
