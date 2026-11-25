// src/theme/look.ts
/** The styles a theme can start from. Rustig is the first and stays the default. */
var BASES = [
	"rustig",
	"uitbundig",
	"glas",
	"helder"
];
/** Every knob of the simple editor and the values it can take, in the order they are shown. */
var KNOB_VALUES = {
	roundness: [
		"square",
		"slight",
		"round",
		"very-round"
	],
	strength: [
		"grey",
		"soft",
		"normal",
		"vivid"
	],
	contrast: [
		"normal",
		"high",
		"highest"
	],
	letter: [
		"sans",
		"system",
		"serif"
	],
	weight: [
		500,
		600,
		700,
		800
	],
	surfaces: [
		"solid",
		"see-through",
		"outlined"
	],
	background: ["plain", "gradient"]
};
/** The knobs as Rustig has them: with these, a theme looks exactly like the dashboard always did. */
var RUSTIG_KNOBS = Object.freeze({
	roundness: "round",
	strength: "normal",
	contrast: "normal",
	letter: "sans",
	weight: 600,
	surfaces: "solid",
	background: "plain"
});
var VALUE_LAYERS = [
	"both",
	"light",
	"dark"
];
var builtIn = (base, name) => Object.freeze({
	format: 1,
	id: base,
	name,
	maker: "",
	base,
	seed: null,
	userSeed: true,
	knobs: Object.freeze({}),
	app: ""
});
/** The four styles that come with the app. */
var BUILT_IN = Object.freeze([
	builtIn("rustig", "Rustig"),
	builtIn("uitbundig", "Uitbundig"),
	builtIn("glas", "Glas"),
	builtIn("helder", "Helder")
]);
var isBase = (value) => BASES.includes(value);
// src/theme/rustig-expressive.ts
/**
* The first theme. This object is the source of every visual value;
* docs/design/tokens.css carries the same names and values, and a test keeps the two equal.
*/
var rustigExpressive = {
	id: "rustig-expressive",
	name: "Rustig Expressive",
	color: {
		variant: "tonalSpot",
		contrast: 0,
		defaultSeed: "#3b6939",
		presets: [
			{
				id: "forest",
				seed: "#3b6939"
			},
			{
				id: "blue",
				seed: "#3a5ba9"
			},
			{
				id: "purple",
				seed: "#6750a4"
			},
			{
				id: "terracotta",
				seed: "#a6422a"
			},
			{
				id: "raspberry",
				seed: "#a03b6c"
			}
		]
	},
	system: {
		"shape-xs": "4px",
		"shape-sm": "8px",
		"shape-md": "12px",
		"shape-lg": "16px",
		"shape-xl": "20px",
		"shape-2xl": "28px",
		"shape-full": "999px",
		"font-family": "\"Google Sans Flex Variable\", \"Google Sans Flex\", system-ui, \"Segoe UI\", sans-serif",
		"weight-regular": "400",
		"weight-medium": "500",
		"weight-strong": "600",
		"type-hero-size": "104px",
		"type-hero-line": ".92",
		"type-greeting-size": "44px",
		"type-greeting-line": "1.05",
		"type-value-size": "32px",
		"type-value-line": "1.1",
		"type-title-size": "22px",
		"type-title-line": "1.25",
		"type-body-l-size": "16px",
		"type-body-l-line": "1.45",
		"type-label-l-size": "15px",
		"type-label-l-line": "1.25",
		"type-label-m-size": "14px",
		"type-label-m-line": "1.3",
		"type-body-s-size": "13px",
		"type-body-s-line": "1.35",
		"type-label-s-size": "12px",
		"type-label-s-line": "1.3",
		"tracking-display": "-.02em",
		"space-2": "2px",
		"space-4": "4px",
		"space-6": "6px",
		"space-8": "8px",
		"space-10": "10px",
		"space-12": "12px",
		"space-14": "14px",
		"space-16": "16px",
		"space-20": "20px",
		"space-24": "24px",
		"space-32": "32px",
		"space-40": "40px",
		"motion-spatial": "500ms cubic-bezier(.38,1.21,.22,1)",
		"motion-effects": "200ms cubic-bezier(.34,.8,.34,1)",
		"press-scale": ".97",
		"easing-spatial": "cubic-bezier(.38,1.21,.22,1)",
		"duration-spatial": "500ms",
		"easing-pulse": "ease-in-out",
		"motion-wave": "1.8s",
		"motion-banner-wave": "1.2s",
		"motion-loader": "2.4s",
		"motion-pulse": "1.4s",
		"motion-spin": "1.2s",
		"motion-drift": "60s",
		"motion-arrive": "1.6s",
		"state-hover": "8%",
		"state-pressed": "10%",
		"state-dragged": "16%",
		"state-disabled-content": ".38",
		"state-disabled-container": "12%",
		"state-stale": ".62",
		"focus-width": "3px",
		"focus-offset": "3px",
		"focus-color": "var(--c-primary)",
		"target-min": "48px",
		"icon-xs": "16px",
		"icon-s": "18px",
		"icon-m": "20px",
		"icon-l": "24px",
		"ramp-hue": "linear-gradient(to right, hsl(0 85% 60%), hsl(60 85% 55%), hsl(120 70% 50%), hsl(180 75% 50%), hsl(240 85% 65%), hsl(300 80% 60%), hsl(360 85% 60%))",
		"ramp-temperature": "linear-gradient(to right, #ffb46b, #ffe2c2, #f4f7ff, #cfe2ff)",
		"ramp-swatch": "conic-gradient(hsl(0 80% 60%), hsl(60 80% 55%), hsl(120 65% 50%), hsl(180 70% 50%), hsl(240 80% 65%), hsl(300 75% 60%), hsl(360 80% 60%))",
		"shadow-overlay": "0 12px 40px color-mix(in srgb, var(--c-shadow) 22%, transparent)",
		"scrim": "color-mix(in srgb, var(--c-scrim) 36%, transparent)",
		"layer-sheet-scrim": "60",
		"layer-sheet": "61",
		"layer-snackbar": "80",
		"layer-dialog-scrim": "89",
		"layer-dialog": "90",
		"layer-menu": "30",
		"layer-edit-bar": "20",
		"layer-drag": "70",
		"layer-nav-bar": "35",
		"layer-dimmer": "71",
		"layer-rest": "100",
		"rest-unit": "min(100vw / 1280, 100dvh / 800)",
		"rest-unit-portrait": "min(100vw / 800, 100dvh / 1280)",
		"rest-pad-x": "64",
		"rest-pad-top": "56",
		"rest-pad-bottom": "48",
		"rest-gap": "16",
		"rest-clock": "272",
		"rest-clock-portrait": "254",
		"rest-clock-line": ".84",
		"rest-clock-inset": "-10",
		"rest-tracking": "-.045em",
		"rest-date": "34",
		"rest-temp": "52",
		"rest-label": "21",
		"rest-icon": "36",
		"rest-pill": "60",
		"rest-pill-text": "23",
		"rest-number": "148",
		"rest-number-line": ".82",
		"rest-unit-text": "64",
		"rest-line": "26",
		"rest-line-width": "190",
		"rest-stat": "40",
		"rest-stat-width": "230",
		"rest-wave-height": "44",
		"rest-wave-stroke": "14px",
		"rest-night-clock": "200",
		"rest-night-text": "26",
		"rest-night-width": "600",
		"rest-shift": "4px",
		"rest-night-shift-x": "12vw",
		"rest-night-shift-y": "20dvh"
	},
	density: {
		comfortable: {
			"density-tile-height": "112px",
			"density-tile-pad": "14px",
			"density-tile-gap": "10px",
			"density-section-gap": "16px",
			"density-section-pad": "20px",
			"density-title-gap": "16px",
			"density-icon-box": "40px",
			"density-slider-height": "28px",
			"density-flow-height": "56px",
			"density-greeting-size": "44px",
			"density-hero-size": "104px",
			"density-hero-title-size": "22px",
			"density-section-title-size": "22px",
			"density-page-pad": "24px",
			"density-stat-pad": "14px 16px"
		},
		compact: {
			"density-tile-height": "56px",
			"density-tile-pad": "10px 12px",
			"density-tile-gap": "8px",
			"density-section-gap": "12px",
			"density-section-pad": "16px",
			"density-title-gap": "12px",
			"density-icon-box": "36px",
			"density-slider-height": "20px",
			"density-flow-height": "48px",
			"density-greeting-size": "44px",
			"density-hero-size": "104px",
			"density-hero-title-size": "22px",
			"density-section-title-size": "22px",
			"density-page-pad": "24px",
			"density-stat-pad": "14px 16px"
		},
		phone: {
			"density-tile-height": "60px",
			"density-tile-pad": "10px 12px",
			"density-tile-gap": "8px",
			"density-section-gap": "12px",
			"density-section-pad": "14px",
			"density-title-gap": "10px",
			"density-icon-box": "36px",
			"density-slider-height": "20px",
			"density-flow-height": "48px",
			"density-greeting-size": "26px",
			"density-hero-size": "56px",
			"density-hero-title-size": "16px",
			"density-section-title-size": "18px",
			"density-page-pad": "12px",
			"density-stat-pad": "8px"
		}
	},
	components: {
		"page-bg": "var(--c-surface-container)",
		"page-fg": "var(--c-on-surface)",
		"page-max-width": "1560px",
		"page-pad": "var(--density-page-pad)",
		"rail-width": "96px",
		"rail-item-fg": "var(--c-on-surface-variant)",
		"rail-item-active-fg": "var(--c-on-surface)",
		"rail-indicator-width": "56px",
		"rail-indicator-height": "32px",
		"rail-indicator-radius": "var(--shape-full)",
		"rail-indicator-bg": "var(--c-secondary-container)",
		"rail-indicator-fg": "var(--c-on-secondary-container)",
		"rail-item-min-width": "80px",
		"rail-item-height": "56px",
		"nav-bar-height": "72px",
		"nav-bar-bg": "var(--c-surface-container-high)",
		"nav-bar-item-min": "64px",
		"nav-bar-item-max": "120px",
		"header-eyebrow-fg": "var(--c-on-surface-variant)",
		"header-title-size": "var(--density-greeting-size)",
		"chip-height": "36px",
		"chip-radius": "var(--shape-full)",
		"chip-bg": "var(--c-surface)",
		"chip-fg": "var(--c-on-surface)",
		"chip-alert-bg": "var(--c-error-container)",
		"chip-alert-fg": "var(--c-on-error-container)",
		"section-bg": "var(--c-surface)",
		"section-fg": "var(--c-on-surface)",
		"section-radius": "var(--shape-2xl)",
		"section-pad": "var(--density-section-pad)",
		"section-gap": "var(--density-section-gap)",
		"section-title-gap": "var(--density-title-gap)",
		"section-title-size": "var(--density-section-title-size)",
		"section-count-fg": "var(--c-on-surface-variant)",
		"section-hero-bg": "var(--c-primary-container)",
		"section-hero-fg": "var(--c-on-primary-container)",
		"tile-bg": "var(--c-surface-container-high)",
		"tile-fg": "var(--c-on-surface)",
		"tile-state-fg": "var(--c-on-surface-variant)",
		"tile-on-bg": "var(--c-primary-container)",
		"tile-on-fg": "var(--c-on-primary-container)",
		"tile-alert-bg": "var(--c-error-container)",
		"tile-alert-fg": "var(--c-on-error-container)",
		"tile-radius": "var(--shape-xl)",
		"tile-radius-pressed": "14px",
		"tile-height": "var(--density-tile-height)",
		"tile-pad": "var(--density-tile-pad)",
		"tile-gap": "var(--density-tile-gap)",
		"tile-icon-box": "var(--density-icon-box)",
		"tile-icon-bg": "var(--c-surface)",
		"tile-icon-fg": "var(--c-on-surface-variant)",
		"tile-icon-on-bg": "var(--c-primary)",
		"tile-icon-on-fg": "var(--c-on-primary)",
		"tile-icon-alert-bg": "var(--c-error)",
		"tile-icon-alert-fg": "var(--c-on-error)",
		"tile-cell-bg": "var(--c-surface)",
		"tile-cell-radius": "var(--shape-md)",
		"tile-value-small": "20px",
		"tile-badge-fg": "var(--c-error)",
		"tile-more-size": "36px",
		"tile-unavailable-bg": "color-mix(in srgb, var(--c-on-surface) 5%, transparent)",
		"tile-unavailable-ring": "2px",
		"tile-unavailable-opacity": ".6",
		"tile-wide-face-basis": "52%",
		"section-outline": "transparent",
		"section-outline-width": "0px",
		"tile-outline": "transparent",
		"tile-outline-width": "0px",
		"tile-on-slider-fill": "var(--slider-fill)",
		"tile-on-slider-track": "var(--slider-track)",
		"slider-height": "var(--density-slider-height)",
		"slider-radius": "var(--shape-md)",
		"slider-radius-inner": "var(--shape-xs)",
		"slider-fill": "var(--c-primary)",
		"slider-track": "color-mix(in srgb, var(--c-primary) 24%, transparent)",
		"slider-off-fill": "var(--c-on-surface-variant)",
		"slider-off-track": "color-mix(in srgb, var(--c-on-surface-variant) 22%, transparent)",
		"slider-handle-width": "4px",
		"slider-handle-width-dragging": "2px",
		"slider-handle-overshoot": "5px",
		"slider-gap": "7px",
		"slider-off-opacity": ".55",
		"slider-ramp-handle-width": "8px",
		"slider-ramp-ring": "3px",
		"slider-grip-scale": "1.2",
		"control-height": "40px",
		"control-bg": "color-mix(in srgb, currentColor 10%, transparent)",
		"control-hover": "16%",
		"control-radius": "var(--shape-full)",
		"control-radius-pressed": "var(--shape-md)",
		"control-gap": "var(--space-4)",
		"control-main-bg": "var(--c-primary)",
		"control-main-fg": "var(--c-on-primary)",
		"control-fill": "color-mix(in srgb, currentColor 26%, transparent)",
		"control-step-width": "56px",
		"control-value-size": "24px",
		"control-large-height": "60px",
		"control-large-radius": "var(--shape-xl)",
		"control-large-value-size": "64px",
		"control-unit-size": ".6em",
		"hold-step": "200ms",
		"control-large-width": "76px",
		"control-held-width": "168px",
		"top-window-height": "190px",
		"top-window-bg": "linear-gradient(var(--c-tertiary-container), var(--c-surface-container-high))",
		"top-cloth-bg": "var(--c-secondary-container)",
		"top-cloth-line": "color-mix(in srgb, var(--c-secondary-container), var(--c-secondary) 14%)",
		"top-slat": "14px",
		"top-roll": "12px",
		"top-bunch": "30px",
		"top-frame": "color-mix(in srgb, var(--c-surface) 70%, transparent)",
		"top-art-height": "150px",
		"top-art-bg": "linear-gradient(135deg, var(--c-primary-container), var(--c-tertiary-container))",
		"top-art-icon": "64px",
		"top-icon-box": "88px",
		"top-icon": "44px",
		"room-card-min": "280px",
		"room-card-height": "116px",
		"dimmer-height": "236px",
		"dimmer-grow": "4px",
		"dimmer-radius": "var(--shape-2xl)",
		"dimmer-bg": "color-mix(in srgb, var(--c-primary) 24%, var(--c-surface-container-low))",
		"dimmer-fg": "var(--c-on-surface)",
		"dimmer-fill": "var(--c-primary)",
		"dimmer-fill-fg": "var(--c-on-primary)",
		"dimmer-scrim": "color-mix(in srgb, var(--c-scrim) 18%, transparent)",
		"hero-number-size": "var(--density-hero-size)",
		"hero-title-size": "var(--density-hero-title-size)",
		"hero-stat-pad": "var(--density-stat-pad)",
		"hero-stat-bg": "color-mix(in srgb, currentColor 8%, transparent)",
		"hero-stat-radius": "var(--shape-lg)",
		"hero-stat-hover": "14%",
		"hero-stat-word": "100px",
		"hero-wave-height": "20px",
		"hero-wave-stroke": "6px",
		"hero-wave-fg": "var(--c-primary)",
		"hero-wave-track": "color-mix(in srgb, var(--c-primary) 24%, transparent)",
		"hero-wave-length": "28px",
		"hero-wave-amplitude": "3.2px",
		"hero-wave-gap": "12px",
		"hero-wave-scale": "1",
		"chart-height": "112px",
		"chart-gap": "var(--space-20)",
		"chart-line": "var(--c-primary)",
		"chart-line-2": "var(--c-tertiary)",
		"chart-line-width": "3px",
		"chart-area": "color-mix(in srgb, var(--c-primary) 20%, transparent)",
		"chart-baseline": "color-mix(in srgb, currentColor 18%, transparent)",
		"chart-label-fg": "color-mix(in srgb, currentColor 72%, transparent)",
		"chart-now-size": "12px",
		"chart-now-ring": "3px",
		"chart-window-height": "150px",
		"chart-cursor": "color-mix(in srgb, currentColor 34%, transparent)",
		"chart-cursor-width": "2px",
		"chart-tip-bg": "var(--c-inverse-surface)",
		"chart-tip-fg": "var(--c-inverse-on-surface)",
		"chart-tip-radius": "var(--shape-full)",
		"chart-band-height": "12px",
		"chart-band-on": "var(--c-primary)",
		"chart-band-track": "color-mix(in srgb, currentColor 10%, transparent)",
		"chart-tile-share": "55%",
		"chart-tile-area": "color-mix(in srgb, currentColor 18%, transparent)",
		"hero-chart-line": "var(--chart-line)",
		"hero-chart-line-2": "var(--chart-line-2)",
		"hero-chart-area": "var(--chart-area)",
		"hero-chart-band": "color-mix(in srgb, currentColor 55%, transparent)",
		"section-menu-bg": "var(--c-surface-container)",
		"section-menu-fg": "var(--c-on-surface)",
		"section-menu-radius": "var(--shape-lg)",
		"section-menu-width": "336px",
		"section-menu-item-height": "48px",
		"section-dot-size": "20px",
		"section-menu-divider": "1px",
		"section-menu-trigger-fg": "var(--c-on-surface-variant)",
		"section-title-icon-fg": "currentColor",
		"section-own-title-icon-fg": "var(--c-primary)",
		"tank-fill": "var(--c-tertiary)",
		"tank-track": "color-mix(in srgb, var(--c-tertiary) 22%, transparent)",
		"tank-bar-height": "20px",
		"tank-compact-fill": "var(--c-tertiary-container)",
		"flow-height": "var(--density-flow-height)",
		"flow-radius": "var(--shape-full)",
		"flow-radius-pressed": "var(--shape-lg)",
		"flow-bg": "var(--c-secondary-container)",
		"flow-fg": "var(--c-on-secondary-container)",
		"flow-press-scale": ".96",
		"button-height": "48px",
		"button-radius": "var(--shape-full)",
		"button-radius-pressed": "var(--shape-lg)",
		"button-filled-bg": "var(--c-primary)",
		"button-filled-fg": "var(--c-on-primary)",
		"button-tonal-bg": "var(--c-secondary-container)",
		"button-tonal-fg": "var(--c-on-secondary-container)",
		"button-text-fg": "var(--c-primary)",
		"button-danger-fg": "var(--c-error)",
		"icon-button-size": "40px",
		"button-small-height": "40px",
		"field-height": "56px",
		"field-radius": "var(--shape-lg)",
		"field-bg": "var(--c-surface-container-high)",
		"field-fg": "var(--c-on-surface)",
		"field-label-fg": "var(--c-on-surface-variant)",
		"field-focus": "var(--c-primary)",
		"field-error": "var(--c-error)",
		"field-outline-width": "2px",
		"switch-width": "52px",
		"switch-height": "32px",
		"switch-off-bg": "var(--c-surface-container-highest)",
		"switch-off-outline": "var(--c-outline)",
		"switch-off-thumb": "var(--c-outline)",
		"switch-on-bg": "var(--c-primary)",
		"switch-on-thumb": "var(--c-on-primary)",
		"switch-outline-width": "2px",
		"switch-thumb-off": "16px",
		"switch-thumb-on": "24px",
		"switch-thumb-pressed": "28px",
		"choice-height": "48px",
		"choice-bg": "var(--c-surface-container-high)",
		"choice-fg": "var(--c-on-surface-variant)",
		"choice-on-bg": "var(--c-secondary-container)",
		"choice-on-fg": "var(--c-on-secondary-container)",
		"choice-radius": "var(--shape-sm)",
		"choice-radius-on": "var(--shape-full)",
		"swatch-size": "34px",
		"swatch-size-chosen": "46px",
		"radio-height": "48px",
		"look-card-bg": "var(--c-surface-container-high)",
		"look-card-fg": "var(--c-on-surface)",
		"look-card-note-fg": "var(--c-on-surface-variant)",
		"look-card-radius": "var(--shape-xl)",
		"look-card-pad": "var(--space-6)",
		"look-card-ring": "3px",
		"look-picker-min": "140px",
		"look-preview-height": "84px",
		"look-preview-radius": "var(--shape-lg)",
		"look-preview-mark": "40%",
		"share-code-font": "ui-monospace, \"SF Mono\", Consolas, monospace",
		"sheet-width": "420px",
		"sheet-wide-width": "560px",
		"sheet-margin": "var(--space-16)",
		"sheet-radius": "var(--shape-2xl)",
		"sheet-bg": "var(--c-surface)",
		"sheet-fg": "var(--c-on-surface)",
		"sheet-row-bg": "var(--c-surface-container-high)",
		"sheet-row-radius": "var(--shape-xl)",
		"sheet-cell-radius": "var(--shape-lg)",
		"sheet-phone-height": "88dvh",
		"sheet-wide-phone-height": "55dvh",
		"sheet-grab-width": "36px",
		"sheet-grab-height": "4px",
		"sheet-grab-fg": "var(--c-outline-variant)",
		"sheet-icon-box": "44px",
		"sheet-row-height": "56px",
		"sheet-summary-height": "40px",
		"sheet-slider-height": "28px",
		"dialog-bg": "var(--c-surface-container-high)",
		"dialog-radius": "var(--shape-2xl)",
		"dialog-width": "400px",
		"dialog-enter-scale": ".94",
		"banner-bg": "var(--c-error-container)",
		"banner-fg": "var(--c-on-error-container)",
		"banner-radius": "var(--shape-xl)",
		"banner-ok-bg": "var(--c-primary-container)",
		"banner-ok-fg": "var(--c-on-primary-container)",
		"snackbar-bg": "var(--c-inverse-surface)",
		"snackbar-fg": "var(--c-inverse-on-surface)",
		"snackbar-action": "var(--c-inverse-primary)",
		"snackbar-radius": "var(--shape-lg)",
		"snackbar-max-width": "560px",
		"banner-text-min": "260px",
		"banner-wave-width": "96px",
		"banner-wave-height": "12px",
		"banner-wave-length": "24px",
		"banner-wave-stroke": "4px",
		"banner-wave-amplitude": "3px",
		"note-bg": "var(--c-surface-container-high)",
		"note-fg": "var(--c-on-surface-variant)",
		"note-radius": "var(--shape-lg)",
		"skeleton-bg": "var(--c-surface-container-high)",
		"skeleton-text-height": "24px",
		"skeleton-hero-height": "220px",
		"skeleton-pulse-opacity": ".45",
		"connect-max-width": "1040px",
		"connect-art-size": "200px",
		"connect-art-offset": "-56px",
		"connect-art-bg": "color-mix(in srgb, currentColor 9%, transparent)",
		"connect-title-width": "9em",
		"connect-lead-width": "26em",
		"connect-step-size": "36px",
		"connect-right-min": "112px",
		"loader-small": "22px",
		"loader-large": "56px",
		"empty-pad": "96px",
		"empty-art-size": "120px",
		"empty-icon-size": "48px",
		"empty-text-width": "440px",
		"edit-bar-bg": "var(--c-secondary-container)",
		"edit-bar-fg": "var(--c-on-secondary-container)",
		"edit-bar-radius": "var(--shape-xl)",
		"edit-bar-height": "64px",
		"edit-tile-ring": "var(--c-outline-variant)",
		"edit-ring-width": "2px",
		"edit-handle-fg": "var(--c-on-surface-variant)",
		"add-slot-border": "var(--c-outline)",
		"add-slot-fg": "var(--c-on-surface-variant)",
		"add-slot-border-width": "2px",
		"add-slot-height": "var(--button-height)",
		"drag-lift-scale": "1.03",
		"drag-shadow": "var(--shadow-overlay)",
		"drop-bg": "color-mix(in srgb, var(--c-primary) 12%, transparent)",
		"drop-border": "var(--c-primary)",
		"news-bg": "var(--c-surface)",
		"news-fg": "var(--c-on-surface)",
		"news-radius": "var(--shape-xl)",
		"news-icon-bg": "var(--c-primary)",
		"news-icon-fg": "var(--c-on-primary)",
		"news-icon-box": "40px",
		"rail-badge-size": "8px",
		"rail-badge-bg": "var(--c-primary)",
		"chip-add-border": "var(--c-outline)",
		"chip-add-fg": "var(--c-on-surface-variant)",
		"icon-scroll-height": "260px",
		"icon-pick-size": "48px",
		"icon-pick-bg": "var(--c-surface-container-high)",
		"icon-pick-on-bg": "var(--c-secondary-container)",
		"icon-pick-on-fg": "var(--c-on-secondary-container)",
		"pick-row-height": "56px",
		"pick-icon-box": "36px",
		"pick-badge-fg": "var(--c-primary)",
		"rest-bg": "var(--c-surface)",
		"rest-fg": "var(--c-on-surface)",
		"rest-fg-muted": "var(--c-on-surface-variant)",
		"rest-accent": "var(--c-primary)",
		"rest-wave-track": "var(--c-secondary-container)",
		"rest-stale-wave": "var(--c-outline)",
		"rest-alarm-bg": "var(--c-error-container)",
		"rest-alarm-fg": "var(--c-on-error-container)",
		"rest-warn-bg": "var(--c-tertiary-container)",
		"rest-warn-fg": "var(--c-on-tertiary-container)",
		"rest-night-bg": "#000000",
		"rest-night-fg": "#3a3f38",
		"rest-night-alarm": "#96423b",
		"widget-clock-size": "var(--density-greeting-size)",
		"widget-clock-wide-size": "calc(var(--density-greeting-size) * 1.45)",
		"widget-note-accent-bg": "var(--c-inverse-surface)",
		"widget-note-accent-fg": "var(--c-inverse-on-surface)",
		"widget-note-accent-icon-bg": "var(--c-inverse-primary)",
		"widget-note-accent-icon-fg": "var(--c-inverse-surface)",
		"widget-note-lines": "6",
		"widget-note-wide-lines": "4",
		"widget-link-arrow-bg": "var(--c-primary)",
		"widget-link-arrow-fg": "var(--c-on-primary)",
		"widget-max-height": "calc(var(--tile-height) * 4)",
		"widget-missing-border": "var(--c-outline)",
		"widget-gauge-width": "150px",
		"widget-gauge-stroke": "14",
		"widget-gauge-lift": "34px",
		"widget-gauge-fill": "var(--slider-fill)",
		"widget-gauge-track": "var(--slider-track)"
	}
};
Object.freeze({
	theme: "rustig",
	seed: null,
	mode: "auto"
});
BUILT_IN.find((file) => file.id === "helder");
BUILT_IN.find((file) => file.id === "rustig");
/** The colour a theme shows: its own if it keeps it, otherwise the one of the device or the house, otherwise its own. */
var shownSeed = (file, chosen) => file.seed !== null && !file.userSeed ? file.seed : chosen ?? file.seed;
// src/theme/legible.ts
var CLEAR = {
	r: 0,
	g: 0,
	b: 0,
	a: 0
};
var DEPTH = 12;
var hex$1 = (value) => ({
	r: parseInt(value.slice(1, 3), 16) / 255,
	g: parseInt(value.slice(3, 5), 16) / 255,
	b: parseInt(value.slice(5, 7), 16) / 255,
	a: value.length === 9 ? parseInt(value.slice(7, 9), 16) / 255 : 1
});
/** Splits on the commas at the top level of a value. */
function parts(text) {
	const out = [];
	let depth = 0;
	let start = 0;
	for (let i = 0; i < text.length; i += 1) if (text[i] === "(") depth += 1;
	else if (text[i] === ")") depth -= 1;
	else if (text[i] === "," && depth === 0) {
		out.push(text.slice(start, i).trim());
		start = i + 1;
	}
	out.push(text.slice(start).trim());
	return out;
}
/** CSS colour-mix in srgb: premultiplied by alpha, as browsers do it. */
function mix(a, pa, b, pb) {
	const total = pa + pb;
	const [wa, wb] = [pa / total, pb / total];
	const alpha = a.a * wa + b.a * wb;
	const scale = Math.min(1, total);
	if (alpha === 0) return { ...CLEAR };
	const channel = (k) => (a[k] * a.a * wa + b[k] * b.a * wb) / alpha;
	return {
		r: channel("r"),
		g: channel("g"),
		b: channel("b"),
		a: alpha * scale
	};
}
/**
* Every colour a token can show: one for a plain colour, the stops of a gradient. Follows `var()`, `color-mix(in srgb …)`
* and `transparent`, as the themes write them; `currentColor` is the text colour given. Null for what is no colour.
*/
function coloursOf(value, tokens, current = null, depth = 0) {
	const text = value.trim();
	if (depth > DEPTH) return null;
	if (/^#[0-9a-f]{6}(?:[0-9a-f]{2})?$/i.test(text)) return [hex$1(text)];
	if (text === "transparent") return [{ ...CLEAR }];
	if (/^currentcolor$/i.test(text)) return current ? [current] : null;
	const reference = /^var\((--[a-z0-9-]+)\)$/i.exec(text);
	if (reference) {
		const next = tokens[reference[1]];
		return next === void 0 ? null : coloursOf(next, tokens, current, depth + 1);
	}
	const mixed = /^color-mix\(in srgb,(.*)\)$/i.exec(text);
	if (mixed) {
		const [first, second] = parts(mixed[1]);
		if (first === void 0 || second === void 0) return null;
		const side = (part) => {
			const match = /^(.*?)(?:\s+(\d+(?:\.\d+)?)%)?$/.exec(part);
			return {
				colour: coloursOf(match[1], tokens, current, depth + 1),
				percent: match[2] === void 0 ? null : Number(match[2])
			};
		};
		const a = side(first);
		const b = side(second);
		if (!a.colour || !b.colour) return null;
		const pa = a.percent ?? (b.percent === null ? 50 : 100 - b.percent);
		const pb = b.percent ?? 100 - pa;
		return a.colour.flatMap((ca) => b.colour.map((cb) => mix(ca, pa / 100, cb, pb / 100)));
	}
	const gradient = /^linear-gradient\((.*)\)$/i.exec(text);
	if (gradient) {
		const stops = parts(gradient[1]).filter((part) => !/^\d+deg$/.test(part)).map((part) => coloursOf(part.replace(/\s+\d+%$/, ""), tokens, current, depth + 1));
		return stops.some((stop) => stop === null) ? null : stops.flat();
	}
	return null;
}
/** A colour over another: what the eye sees. */
var over = (top, under) => {
	const a = top.a + under.a * (1 - top.a);
	if (a === 0) return { ...CLEAR };
	const channel = (k) => (top[k] * top.a + under[k] * under.a * (1 - top.a)) / a;
	return {
		r: channel("r"),
		g: channel("g"),
		b: channel("b"),
		a
	};
};
var luminance = ({ r, g, b }) => {
	const linear = (v) => v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4;
	return .2126 * linear(r) + .7152 * linear(g) + .0722 * linear(b);
};
/** The WCAG contrast of two opaque colours. */
function contrastOf(a, b) {
	const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
	return (hi + .05) / (lo + .05);
}
var page = ["--page-bg"];
var section = ["--section-bg", ...page];
var tile = ["--tile-bg", ...section];
var tileOn = ["--tile-on-bg", ...section];
/** The texts and marks of the dashboard that a theme can make hard to see. */
var TEXT_PAIRS = Object.freeze([
	{
		id: "page",
		fg: "--page-fg",
		stack: page,
		min: 4.5
	},
	{
		id: "header",
		fg: "--header-eyebrow-fg",
		stack: page,
		min: 4.5
	},
	{
		id: "rail",
		fg: "--rail-item-fg",
		stack: page,
		min: 4.5
	},
	{
		id: "rail-active",
		fg: "--rail-indicator-fg",
		stack: ["--rail-indicator-bg", ...page],
		min: 4.5
	},
	{
		id: "chip",
		fg: "--chip-fg",
		stack: ["--chip-bg", ...page],
		min: 4.5
	},
	{
		id: "section",
		fg: "--section-fg",
		stack: section,
		min: 4.5
	},
	{
		id: "section-count",
		fg: "--section-count-fg",
		stack: section,
		min: 4.5
	},
	{
		id: "hero",
		fg: "--section-hero-fg",
		stack: ["--section-hero-bg", ...page],
		min: 4.5
	},
	{
		id: "hero-wave",
		fg: "--hero-wave-fg",
		stack: ["--section-hero-bg", ...page],
		min: 3
	},
	{
		id: "tile",
		fg: "--tile-fg",
		stack: tile,
		min: 4.5
	},
	{
		id: "tile-state",
		fg: "--tile-state-fg",
		stack: tile,
		min: 4.5
	},
	{
		id: "tile-icon",
		fg: "--tile-icon-fg",
		stack: ["--tile-icon-bg", ...tile],
		min: 3
	},
	{
		id: "tile-on",
		fg: "--tile-on-fg",
		stack: tileOn,
		min: 4.5
	},
	{
		id: "tile-icon-on",
		fg: "--tile-icon-on-fg",
		stack: ["--tile-icon-on-bg", ...tileOn],
		min: 3
	},
	{
		id: "tile-on-slider",
		fg: "--tile-on-slider-fill",
		stack: tileOn,
		min: 3
	},
	{
		id: "tile-alert",
		fg: "--tile-alert-fg",
		stack: ["--tile-alert-bg", ...section],
		min: 4.5
	},
	{
		id: "flow",
		fg: "--flow-fg",
		stack: ["--flow-bg", ...section],
		min: 4.5
	},
	{
		id: "sheet",
		fg: "--sheet-fg",
		stack: ["--sheet-bg"],
		min: 4.5
	},
	{
		id: "button",
		fg: "--button-filled-fg",
		stack: ["--button-filled-bg", "--sheet-bg"],
		min: 4.5
	},
	{
		id: "snackbar",
		fg: "--snackbar-fg",
		stack: ["--snackbar-bg"],
		min: 4.5
	},
	{
		id: "banner",
		fg: "--banner-fg",
		stack: ["--banner-bg", ...page],
		min: 4.5
	},
	{
		id: "rest",
		fg: "--rest-fg",
		stack: ["--rest-bg"],
		min: 4.5
	},
	{
		id: "hero-chart",
		fg: "--hero-chart-line",
		stack: ["--section-hero-bg", ...page],
		min: 3
	},
	{
		id: "window-chart",
		fg: "--chart-line",
		stack: ["--sheet-row-bg", "--sheet-bg"],
		min: 3
	},
	{
		id: "chart-tip",
		fg: "--chart-tip-fg",
		stack: ["--chart-tip-bg", "--sheet-bg"],
		min: 4.5
	},
	{
		id: "chart-band",
		fg: "--chart-band-on",
		stack: [
			"--chart-band-track",
			"--sheet-row-bg",
			"--sheet-bg"
		],
		current: "--sheet-fg",
		min: 3
	},
	{
		id: "tile-trend",
		fg: "--tile-fg",
		stack: ["--chart-tile-area", ...tile],
		current: "--tile-fg",
		min: 4.5
	},
	{
		id: "tile-trend-state",
		fg: "--tile-state-fg",
		stack: ["--chart-tile-area", ...tile],
		current: "--tile-fg",
		min: 4.5
	}
]);
/**
* How well each text stands out, at its worst: over a gradient or through a see-through surface, against every colour
* that can lie beneath. A pair that cannot be worked out counts as unreadable.
*/
function legibility(tokens, pairs = TEXT_PAIRS) {
	return pairs.map(({ id, fg, stack, min, current }) => {
		let grounds = [{
			r: 1,
			g: 1,
			b: 1,
			a: 1
		}];
		for (const name of [...stack].reverse()) {
			const value = tokens[name];
			const text = current === void 0 || tokens[current] === void 0 ? null : coloursOf(tokens[current], tokens, grounds[0])?.[0] ?? null;
			const colours = value === void 0 ? null : coloursOf(value, tokens, text);
			if (!colours) return {
				id,
				ratio: 0,
				ok: false
			};
			grounds = grounds.flatMap((ground) => colours.map((colour) => over(colour, ground)));
		}
		let ratio = Infinity;
		for (const ground of grounds) {
			const text = tokens[fg] === void 0 ? null : coloursOf(tokens[fg], tokens, ground);
			if (!text) return {
				id,
				ratio: 0,
				ok: false
			};
			for (const colour of text) ratio = Math.min(ratio, contrastOf(over(colour, ground), ground));
		}
		return {
			id,
			ratio: Math.round(ratio * 100) / 100,
			ok: ratio >= min
		};
	});
}
/** Every colour a stack of layers can show, from the top down to a white page. Null when one is no colour. */
function groundsOf(tokens, stack) {
	let grounds = [{
		r: 1,
		g: 1,
		b: 1,
		a: 1
	}];
	for (const name of [...stack].reverse()) {
		const value = tokens[name];
		const colours = value === void 0 ? null : coloursOf(value, tokens);
		if (!colours) return null;
		grounds = grounds.flatMap((ground) => colours.map((colour) => over(colour, ground)));
	}
	return grounds;
}
/** How far apart two colours lie, 0 to 1. */
var distance$1 = (a, b) => Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b) / Math.sqrt(3);
var DANGER_DISTANCE = .04;
/** Whether a tile with an alarm still looks different from a plain tile: danger must always read as danger. */
function dangerStandsOut(tokens) {
	const plain = groundsOf(tokens, [
		"--tile-bg",
		"--section-bg",
		"--page-bg"
	]);
	const alert = groundsOf(tokens, [
		"--tile-alert-bg",
		"--section-bg",
		"--page-bg"
	]);
	if (!plain || !alert) return false;
	return plain.every((a) => alert.every((b) => distance$1(a, b) >= DANGER_DISTANCE));
}
// src/theme/bases.ts
/** The knobs a built-in style starts with. */
var BASE_KNOBS = {
	rustig: {},
	leeg: {},
	uitbundig: {
		strength: "vivid",
		roundness: "very-round"
	},
	glas: {
		surfaces: "see-through",
		background: "gradient",
		strength: "vivid"
	},
	helder: {
		contrast: "highest",
		surfaces: "outlined",
		weight: 800,
		roundness: "slight"
	}
};
/** A tile that is on in the strong colour of the theme, with a light slider on it. */
var STRONG_TILES = {
	"tile-on-bg": "var(--c-primary)",
	"tile-on-fg": "var(--c-on-primary)",
	"tile-icon-on-bg": "var(--c-on-primary)",
	"tile-icon-on-fg": "var(--c-primary)",
	"tile-on-slider-fill": "var(--c-on-primary)",
	"tile-on-slider-track": "color-mix(in srgb, var(--c-on-primary) 30%, transparent)"
};
/** What a built-in style sets of its own in layer 3, apart from its knobs. Only names that follow colour roles. */
var BASE_COMPONENTS = {
	rustig: {},
	leeg: {},
	uitbundig: {
		...STRONG_TILES,
		"page-bg": "color-mix(in srgb, var(--c-primary-container) 42%, var(--c-surface-container))",
		"section-hero-bg": "var(--c-tertiary-container)",
		"section-hero-fg": "var(--c-on-tertiary-container)"
	},
	glas: {
		"tile-on-bg": "color-mix(in srgb, var(--c-surface-bright) 92%, transparent)",
		"tile-on-fg": "var(--c-on-surface)",
		"tile-icon-on-bg": "var(--c-primary)",
		"tile-icon-on-fg": "var(--c-on-primary)"
	},
	helder: {
		...STRONG_TILES,
		"page-bg": "var(--c-surface)",
		"tile-bg": "var(--c-surface)",
		"tile-state-fg": "var(--c-on-surface)",
		"section-hero-bg": "var(--c-primary)",
		"section-hero-fg": "var(--c-on-primary)",
		"hero-wave-fg": "var(--c-on-primary)",
		"hero-wave-track": "color-mix(in srgb, var(--c-on-primary) 30%, transparent)",
		"hero-chart-line": "var(--c-on-primary)",
		"hero-chart-line-2": "color-mix(in srgb, var(--c-on-primary) 70%, transparent)",
		"hero-chart-area": "color-mix(in srgb, var(--c-on-primary) 20%, transparent)",
		"chart-tile-area": "color-mix(in srgb, var(--tile-fg) 26%, transparent)"
	}
};
/**
* Names no theme may set: danger and faults read the same everywhere, layers stay in their order, a finger always has
* room, holding takes as long, and the sizes code works out itself stay the ones it expects.
*/
var PROTECTED_NAMES = Object.freeze([
	"--tile-alert-bg",
	"--tile-alert-fg",
	"--tile-icon-alert-bg",
	"--tile-icon-alert-fg",
	"--tile-badge-fg",
	"--chip-alert-bg",
	"--chip-alert-fg",
	"--banner-bg",
	"--banner-fg",
	"--button-danger-fg",
	"--field-error",
	"--rest-alarm-bg",
	"--rest-alarm-fg",
	"--rest-night-alarm",
	...Object.keys(rustigExpressive.system).filter((name) => name.startsWith("layer-")).map((name) => `--${name}`),
	"--target-min",
	"--hold-step",
	"--space-8",
	"--nav-bar-height",
	"--dimmer-height",
	"--dimmer-grow",
	"--hero-wave-length",
	"--hero-wave-amplitude",
	"--hero-wave-gap",
	"--hero-wave-height",
	"--banner-wave-width",
	"--banner-wave-height",
	"--banner-wave-length",
	"--banner-wave-amplitude",
	"--rest-night-shift-x",
	"--rest-night-shift-y",
	"--motion-drift",
	"--ramp-hue",
	"--ramp-temperature",
	"--rest-warn-bg",
	"--rest-warn-fg"
]);
/** The colour roles that always stay the dashboard's. */
var DASHBOARD_ROLES = /* @__PURE__ */ new Set([
	"--c-error",
	"--c-on-error",
	"--c-error-container",
	"--c-on-error-container"
]);
// src/theme/knobs.ts
/** The shape scale per roundness; `round` is Rustig's own. */
var SHAPES = {
	"square": {
		"shape-xs": "2px",
		"shape-sm": "2px",
		"shape-md": "4px",
		"shape-lg": "4px",
		"shape-xl": "6px",
		"shape-2xl": "8px",
		"shape-full": "8px"
	},
	"slight": {
		"shape-xs": "2px",
		"shape-sm": "4px",
		"shape-md": "8px",
		"shape-lg": "10px",
		"shape-xl": "12px",
		"shape-2xl": "16px",
		"shape-full": "999px"
	},
	"round": {
		"shape-xs": "4px",
		"shape-sm": "8px",
		"shape-md": "12px",
		"shape-lg": "16px",
		"shape-xl": "20px",
		"shape-2xl": "28px",
		"shape-full": "999px"
	},
	"very-round": {
		"shape-xs": "6px",
		"shape-sm": "12px",
		"shape-md": "16px",
		"shape-lg": "24px",
		"shape-xl": "28px",
		"shape-2xl": "36px",
		"shape-full": "999px"
	}
};
var LETTERS = {
	sans: "\"Google Sans Flex Variable\", \"Google Sans Flex\", system-ui, \"Segoe UI\", sans-serif",
	system: "system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
	serif: "Georgia, \"Iowan Old Style\", \"Times New Roman\", serif"
};
var SCHEMES$1 = {
	grey: "monochrome",
	soft: "neutral",
	normal: "tonalSpot",
	vivid: "vibrant"
};
var CONTRASTS = {
	normal: 0,
	high: .5,
	highest: 1
};
var SEE_THROUGH = {
	"section-bg": "color-mix(in srgb, var(--c-surface) 46%, transparent)",
	"section-hero-bg": "color-mix(in srgb, var(--c-primary-container) 70%, transparent)",
	"tile-bg": "color-mix(in srgb, var(--c-surface-container-high) 42%, transparent)",
	"tile-icon-bg": "color-mix(in srgb, var(--c-surface) 72%, transparent)",
	"tile-cell-bg": "color-mix(in srgb, var(--c-surface) 60%, transparent)",
	"chip-bg": "color-mix(in srgb, var(--c-surface) 66%, transparent)"
};
var OUTLINED = {
	"section-outline": "var(--c-on-surface)",
	"section-outline-width": "2px",
	"tile-outline": "var(--c-on-surface)",
	"tile-outline-width": "2px"
};
var GRADIENT = "linear-gradient(160deg, var(--c-primary-container), var(--c-tertiary-container) 55%, var(--c-secondary-container))";
/**
* What the knobs change in layer 2: shape, letter and weight. Only what differs from Rustig, so that Rustig's own knobs
* give exactly Rustig's tokens.
*/
function knobSystem(knobs) {
	const values = {};
	if (knobs.roundness !== RUSTIG_KNOBS.roundness) Object.assign(values, SHAPES[knobs.roundness]);
	if (knobs.letter !== RUSTIG_KNOBS.letter) values["font-family"] = LETTERS[knobs.letter];
	if (knobs.weight !== RUSTIG_KNOBS.weight) {
		values["weight-strong"] = String(knobs.weight);
		values["weight-medium"] = String(knobs.weight - 100);
	}
	return values;
}
/** What the knobs change in layer 3: the surfaces, the page behind them, and the radius of a pressed tile with the shapes. */
function knobComponents(knobs) {
	const values = {};
	if (knobs.roundness !== RUSTIG_KNOBS.roundness) values["tile-radius-pressed"] = "var(--shape-lg)";
	if (knobs.surfaces === "see-through") Object.assign(values, SEE_THROUGH);
	if (knobs.surfaces === "outlined") Object.assign(values, OUTLINED);
	if (knobs.background === "gradient") values["page-bg"] = GRADIENT;
	return values;
}
// src/theme/leeg.ts
/**
* The empty base: no Material. Plain colours of its own (white and grey with black text and one accent; nearly black
* with white text in the dark), square corners, the system letter, no motion and a straight line in the hero.
* A base colour of the device, the house or a section sets only the accent; the texts on it are black or white.
*/
var SYSTEM_LETTER = "system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif";
/** The accent when nobody chose a colour. */
var ACCENT = {
	light: "#1d4ed8",
	dark: "#7aa2ff"
};
var NEUTRAL = {
	light: {
		"secondary": "#4b5563",
		"on-secondary": "#ffffff",
		"secondary-container": "#e5e7eb",
		"on-secondary-container": "#111827",
		"surface": "#ffffff",
		"surface-dim": "#e5e7eb",
		"surface-bright": "#ffffff",
		"surface-container-lowest": "#ffffff",
		"surface-container-low": "#f9fafb",
		"surface-container": "#f3f4f6",
		"surface-container-high": "#eceef1",
		"surface-container-highest": "#e5e7eb",
		"on-surface": "#111111",
		"on-surface-variant": "#374151",
		"outline": "#6b7280",
		"outline-variant": "#d1d5db",
		"inverse-surface": "#111111",
		"inverse-on-surface": "#ffffff",
		"scrim": "#000000",
		"shadow": "#000000"
	},
	dark: {
		"secondary": "#9ca3af",
		"on-secondary": "#111111",
		"secondary-container": "#2a2d33",
		"on-secondary-container": "#e5e7eb",
		"surface": "#0d0d0f",
		"surface-dim": "#0d0d0f",
		"surface-bright": "#26282c",
		"surface-container-lowest": "#08080a",
		"surface-container-low": "#131417",
		"surface-container": "#17181b",
		"surface-container-high": "#1f2024",
		"surface-container-highest": "#2a2b30",
		"on-surface": "#f5f5f5",
		"on-surface-variant": "#b4b8bf",
		"outline": "#8b9099",
		"outline-variant": "#3a3d44",
		"inverse-surface": "#f5f5f5",
		"inverse-on-surface": "#111111",
		"scrim": "#000000",
		"shadow": "#000000"
	}
};
/** How much of the accent a container has over the surface. */
var CONTAINER_SHARE = {
	light: .18,
	dark: .4
};
var rgb = (value) => ({
	r: parseInt(value.slice(1, 3), 16) / 255,
	g: parseInt(value.slice(3, 5), 16) / 255,
	b: parseInt(value.slice(5, 7), 16) / 255,
	a: 1
});
var hexOf = ({ r, g, b }) => `#${[
	r,
	g,
	b
].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("")}`;
var mixed = (a, b, share) => {
	const [x, y] = [rgb(a), rgb(b)];
	return hexOf({
		r: x.r * share + y.r * (1 - share),
		g: x.g * share + y.g * (1 - share),
		b: x.b * share + y.b * (1 - share),
		a: 1
	});
};
/** Black or white, whichever stands out more. */
var textOn = (ground) => contrastOf(rgb("#111111"), rgb(ground)) >= contrastOf(rgb("#ffffff"), rgb(ground)) ? "#111111" : "#ffffff";
/** With room to spare: a mark in a chart lies on a faint band of its own as well. */
var stands = (mark, ground) => contrastOf(rgb(mark), rgb(ground)) >= 3.5;
/** The colours of the empty base for light or dark, with the accent chosen (null: its own blue). */
function leegColours(mode, chosen) {
	const accent = (chosen ?? ACCENT[mode]).toLowerCase();
	const neutral = NEUTRAL[mode];
	const container = mixed(accent, neutral["surface"], CONTAINER_SHARE[mode]);
	const onContainer = textOn(container);
	const roles = {
		...neutral,
		"primary": accent,
		"on-primary": textOn(accent),
		"primary-container": container,
		"on-primary-container": onContainer,
		"tertiary": accent,
		"on-tertiary": textOn(accent),
		"tertiary-container": container,
		"on-tertiary-container": onContainer,
		"inverse-primary": mixed(accent, neutral["inverse-surface"], .5)
	};
	const onContainerMark = stands(accent, container) ? "var(--c-primary)" : "var(--c-on-primary-container)";
	const onRowMark = stands(accent, neutral["surface-container-high"]) && stands(accent, neutral["surface"]) ? "var(--c-primary)" : "var(--c-on-surface)";
	return {
		roles: Object.fromEntries(Object.entries(roles).map(([role, value]) => [`--c-${role}`, value])),
		marks: {
			"--tile-on-slider-fill": onContainerMark,
			"--hero-wave-fg": onContainerMark,
			"--hero-chart-line": onContainerMark,
			"--chart-line": onRowMark,
			"--chart-band-on": onRowMark
		}
	};
}
/** A base colour that is Rustig's own is no choice: the empty base keeps its own accent then. */
var chosenAccent = (seed) => seed.toLowerCase() === rustigExpressive.color.defaultSeed ? null : seed;
/** What the empty base sets in layer 2: square corners, the system letter, no motion. */
var LEEG_SYSTEM = Object.freeze({
	"shape-xs": "0px",
	"shape-sm": "0px",
	"shape-md": "0px",
	"shape-lg": "0px",
	"shape-xl": "0px",
	"shape-2xl": "0px",
	"shape-circle": "inset(0)",
	"shape-cookie": "inset(0)",
	"shape-clover": "inset(0)",
	"shape-flower": "inset(0)",
	"font-family": SYSTEM_LETTER,
	"motion-spatial": "0ms",
	"motion-effects": "0ms",
	"duration-spatial": "0ms",
	"motion-arrive": "0ms",
	"motion-wave": "0s",
	"motion-banner-wave": "0s",
	"press-scale": "1"
});
/** What the empty base sets in layer 3: a straight line in the hero and square pressed tiles. */
var LEEG_COMPONENTS = Object.freeze({
	"hero-wave-scale": "0",
	"tile-radius-pressed": "var(--shape-lg)",
	"flow-press-scale": "1",
	"drag-lift-scale": "1"
});
// src/theme/shapes.ts
/**
* A rounded blob as a CSS polygon: `lobes` bulges of relative size `amplitude`.
* Every shape has the same number of points, so the browser can morph between them.
* The circle is (0, 0), the cookie (12, 0.05), the clover (4, 0.13) and the flower (8, 0.08).
*/
function blobPolygon(lobes, amplitude, points = 96) {
	const corners = [];
	for (let i = 0; i < points; i += 1) {
		const angle = i / points * Math.PI * 2;
		const radius = 50 * (1 - amplitude + amplitude * Math.cos(lobes * angle));
		corners.push(`${(50 + radius * Math.cos(angle)).toFixed(2)}% ${(50 + radius * Math.sin(angle)).toFixed(2)}%`);
	}
	return `polygon(${corners.join(",")})`;
}
/** The four shapes of the design system, as CSS custom properties. */
var SHAPE_TOKENS = Object.freeze({
	"--shape-circle": blobPolygon(0, 0),
	"--shape-cookie": blobPolygon(12, .05),
	"--shape-clover": blobPolygon(4, .13),
	"--shape-flower": blobPolygon(8, .08)
});
// node_modules/@material/material-color-utilities/utils/math_utils.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Utility methods for mathematical operations.
*/
/**
* The signum function.
*
* @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
*/
function signum(num) {
	if (num < 0) return -1;
	else if (num === 0) return 0;
	else return 1;
}
/**
* The linear interpolation function.
*
* @return start if amount = 0 and stop if amount = 1
*/
function lerp(start, stop, amount) {
	return (1 - amount) * start + amount * stop;
}
/**
* Clamps an integer between two integers.
*
* @return input when min <= input <= max, and either min or max
* otherwise.
*/
function clampInt(min, max, input) {
	if (input < min) return min;
	else if (input > max) return max;
	return input;
}
/**
* Clamps an integer between two floating-point numbers.
*
* @return input when min <= input <= max, and either min or max
* otherwise.
*/
function clampDouble(min, max, input) {
	if (input < min) return min;
	else if (input > max) return max;
	return input;
}
/**
* Sanitizes a degree measure as an integer.
*
* @return a degree measure between 0 (inclusive) and 360
* (exclusive).
*/
function sanitizeDegreesInt(degrees) {
	degrees = degrees % 360;
	if (degrees < 0) degrees = degrees + 360;
	return degrees;
}
/**
* Sanitizes a degree measure as a floating-point number.
*
* @return a degree measure between 0.0 (inclusive) and 360.0
* (exclusive).
*/
function sanitizeDegreesDouble(degrees) {
	degrees = degrees % 360;
	if (degrees < 0) degrees = degrees + 360;
	return degrees;
}
/**
* Distance of two points on a circle, represented using degrees.
*/
function differenceDegrees(a, b) {
	return 180 - Math.abs(Math.abs(a - b) - 180);
}
/**
* Multiplies a 1x3 row vector with a 3x3 matrix.
*/
function matrixMultiply(row, matrix) {
	return [
		row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2],
		row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2],
		row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2]
	];
}
// node_modules/@material/material-color-utilities/utils/color_utils.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Color science utilities.
*
* Utility methods for color science constants and color space
* conversions that aren't HCT or CAM16.
*/
var SRGB_TO_XYZ = [
	[
		.41233895,
		.35762064,
		.18051042
	],
	[
		.2126,
		.7152,
		.0722
	],
	[
		.01932141,
		.11916382,
		.95034478
	]
];
var XYZ_TO_SRGB = [
	[
		3.2413774792388685,
		-1.5376652402851851,
		-.49885366846268053
	],
	[
		-.9691452513005321,
		1.8758853451067872,
		.04156585616912061
	],
	[
		.05562093689691305,
		-.20395524564742123,
		1.0571799111220335
	]
];
var WHITE_POINT_D65 = [
	95.047,
	100,
	108.883
];
/**
* Converts a color from RGB components to ARGB format.
*/
function argbFromRgb(red, green, blue) {
	return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
}
/**
* Converts a color from linear RGB components to ARGB format.
*/
function argbFromLinrgb(linrgb) {
	return argbFromRgb(delinearized(linrgb[0]), delinearized(linrgb[1]), delinearized(linrgb[2]));
}
/**
* Returns the red component of a color in ARGB format.
*/
function redFromArgb(argb) {
	return argb >> 16 & 255;
}
/**
* Returns the green component of a color in ARGB format.
*/
function greenFromArgb(argb) {
	return argb >> 8 & 255;
}
/**
* Returns the blue component of a color in ARGB format.
*/
function blueFromArgb(argb) {
	return argb & 255;
}
/**
* Converts a color from ARGB to XYZ.
*/
function argbFromXyz(x, y, z) {
	const matrix = XYZ_TO_SRGB;
	const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
	const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
	const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
	return argbFromRgb(delinearized(linearR), delinearized(linearG), delinearized(linearB));
}
/**
* Converts a color from XYZ to ARGB.
*/
function xyzFromArgb(argb) {
	return matrixMultiply([
		linearized(redFromArgb(argb)),
		linearized(greenFromArgb(argb)),
		linearized(blueFromArgb(argb))
	], SRGB_TO_XYZ);
}
/**
* Converts a color from ARGB representation to L*a*b*
* representation.
*
* @param argb the ARGB representation of a color
* @return a Lab object representing the color
*/
function labFromArgb(argb) {
	const linearR = linearized(redFromArgb(argb));
	const linearG = linearized(greenFromArgb(argb));
	const linearB = linearized(blueFromArgb(argb));
	const matrix = SRGB_TO_XYZ;
	const x = matrix[0][0] * linearR + matrix[0][1] * linearG + matrix[0][2] * linearB;
	const y = matrix[1][0] * linearR + matrix[1][1] * linearG + matrix[1][2] * linearB;
	const z = matrix[2][0] * linearR + matrix[2][1] * linearG + matrix[2][2] * linearB;
	const whitePoint = WHITE_POINT_D65;
	const xNormalized = x / whitePoint[0];
	const yNormalized = y / whitePoint[1];
	const zNormalized = z / whitePoint[2];
	const fx = labF(xNormalized);
	const fy = labF(yNormalized);
	const fz = labF(zNormalized);
	return [
		116 * fy - 16,
		500 * (fx - fy),
		200 * (fy - fz)
	];
}
/**
* Converts an L* value to an ARGB representation.
*
* @param lstar L* in L*a*b*
* @return ARGB representation of grayscale color with lightness
* matching L*
*/
function argbFromLstar(lstar) {
	const component = delinearized(yFromLstar(lstar));
	return argbFromRgb(component, component, component);
}
/**
* Computes the L* value of a color in ARGB representation.
*
* @param argb ARGB representation of a color
* @return L*, from L*a*b*, coordinate of the color
*/
function lstarFromArgb(argb) {
	const y = xyzFromArgb(argb)[1];
	return 116 * labF(y / 100) - 16;
}
/**
* Converts an L* value to a Y value.
*
* L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
*
* L* measures perceptual luminance, a linear scale. Y in XYZ
* measures relative luminance, a logarithmic scale.
*
* @param lstar L* in L*a*b*
* @return Y in XYZ
*/
function yFromLstar(lstar) {
	return 100 * labInvf((lstar + 16) / 116);
}
/**
* Converts a Y value to an L* value.
*
* L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
*
* L* measures perceptual luminance, a linear scale. Y in XYZ
* measures relative luminance, a logarithmic scale.
*
* @param y Y in XYZ
* @return L* in L*a*b*
*/
function lstarFromY(y) {
	return labF(y / 100) * 116 - 16;
}
/**
* Linearizes an RGB component.
*
* @param rgbComponent 0 <= rgb_component <= 255, represents R/G/B
* channel
* @return 0.0 <= output <= 100.0, color channel converted to
* linear RGB space
*/
function linearized(rgbComponent) {
	const normalized = rgbComponent / 255;
	if (normalized <= .040449936) return normalized / 12.92 * 100;
	else return Math.pow((normalized + .055) / 1.055, 2.4) * 100;
}
/**
* Delinearizes an RGB component.
*
* @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
* linear R/G/B channel
* @return 0 <= output <= 255, color channel converted to regular
* RGB space
*/
function delinearized(rgbComponent) {
	const normalized = rgbComponent / 100;
	let delinearized = 0;
	if (normalized <= .0031308) delinearized = normalized * 12.92;
	else delinearized = 1.055 * Math.pow(normalized, 1 / 2.4) - .055;
	return clampInt(0, 255, Math.round(delinearized * 255));
}
/**
* Returns the standard white point; white on a sunny day.
*
* @return The white point
*/
function whitePointD65() {
	return WHITE_POINT_D65;
}
function labF(t) {
	const e = 216 / 24389;
	const kappa = 24389 / 27;
	if (t > e) return Math.pow(t, 1 / 3);
	else return (kappa * t + 16) / 116;
}
function labInvf(ft) {
	const e = 216 / 24389;
	const kappa = 24389 / 27;
	const ft3 = ft * ft * ft;
	if (ft3 > e) return ft3;
	else return (116 * ft - 16) / kappa;
}
// node_modules/@material/material-color-utilities/hct/viewing_conditions.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* In traditional color spaces, a color can be identified solely by the
* observer's measurement of the color. Color appearance models such as CAM16
* also use information about the environment where the color was
* observed, known as the viewing conditions.
*
* For example, white under the traditional assumption of a midday sun white
* point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
* hue 203, chroma 3, lightness 100)
*
* This class caches intermediate values of the CAM16 conversion process that
* depend only on viewing conditions, enabling speed ups.
*/
var ViewingConditions = class ViewingConditions {
	/**
	* Create ViewingConditions from a simple, physically relevant, set of
	* parameters.
	*
	* @param whitePoint White point, measured in the XYZ color space.
	*     default = D65, or sunny day afternoon
	* @param adaptingLuminance The luminance of the adapting field. Informally,
	*     how bright it is in the room where the color is viewed. Can be
	*     calculated from lux by multiplying lux by 0.0586. default = 11.72,
	*     or 200 lux.
	* @param backgroundLstar The lightness of the area surrounding the color.
	*     measured by L* in L*a*b*. default = 50.0
	* @param surround A general description of the lighting surrounding the
	*     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
	*     dimly light room, like watching TV at home at night. 2.0 means there
	*     is no difference between the lighting on the color and around it.
	*     default = 2.0
	* @param discountingIlluminant Whether the eye accounts for the tint of the
	*     ambient lighting, such as knowing an apple is still red in green light.
	*     default = false, the eye does not perform this process on
	*       self-luminous objects like displays.
	*/
	static make(whitePoint = whitePointD65(), adaptingLuminance = 200 / Math.PI * yFromLstar(50) / 100, backgroundLstar = 50, surround = 2, discountingIlluminant = false) {
		const xyz = whitePoint;
		const rW = xyz[0] * .401288 + xyz[1] * .650173 + xyz[2] * -.051461;
		const gW = xyz[0] * -.250268 + xyz[1] * 1.204414 + xyz[2] * .045854;
		const bW = xyz[0] * -.002079 + xyz[1] * .048952 + xyz[2] * .953127;
		const f = .8 + surround / 10;
		const c = f >= .9 ? lerp(.59, .69, (f - .9) * 10) : lerp(.525, .59, (f - .8) * 10);
		let d = discountingIlluminant ? 1 : f * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
		d = d > 1 ? 1 : d < 0 ? 0 : d;
		const nc = f;
		const rgbD = [
			d * (100 / rW) + 1 - d,
			d * (100 / gW) + 1 - d,
			d * (100 / bW) + 1 - d
		];
		const k = 1 / (5 * adaptingLuminance + 1);
		const k4 = k * k * k * k;
		const k4F = 1 - k4;
		const fl = k4 * adaptingLuminance + .1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance);
		const n = yFromLstar(backgroundLstar) / whitePoint[1];
		const z = 1.48 + Math.sqrt(n);
		const nbb = .725 / Math.pow(n, .2);
		const ncb = nbb;
		const rgbAFactors = [
			Math.pow(fl * rgbD[0] * rW / 100, .42),
			Math.pow(fl * rgbD[1] * gW / 100, .42),
			Math.pow(fl * rgbD[2] * bW / 100, .42)
		];
		const rgbA = [
			400 * rgbAFactors[0] / (rgbAFactors[0] + 27.13),
			400 * rgbAFactors[1] / (rgbAFactors[1] + 27.13),
			400 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)
		];
		const aw = (2 * rgbA[0] + rgbA[1] + .05 * rgbA[2]) * nbb;
		return new ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, Math.pow(fl, .25), z);
	}
	/**
	* Parameters are intermediate values of the CAM16 conversion process. Their
	* names are shorthand for technical color science terminology, this class
	* would not benefit from documenting them individually. A brief overview
	* is available in the CAM16 specification, and a complete overview requires
	* a color science textbook, such as Fairchild's Color Appearance Models.
	*/
	constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
		this.n = n;
		this.aw = aw;
		this.nbb = nbb;
		this.ncb = ncb;
		this.c = c;
		this.nc = nc;
		this.rgbD = rgbD;
		this.fl = fl;
		this.fLRoot = fLRoot;
		this.z = z;
	}
};
/** sRGB-like viewing conditions.  */
ViewingConditions.DEFAULT = ViewingConditions.make();
// node_modules/@material/material-color-utilities/hct/cam16.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* CAM16, a color appearance model. Colors are not just defined by their hex
* code, but rather, a hex code and viewing conditions.
*
* CAM16 instances also have coordinates in the CAM16-UCS space, called J*, a*,
* b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
* specification, and should be used when measuring distances between colors.
*
* In traditional color spaces, a color can be identified solely by the
* observer's measurement of the color. Color appearance models such as CAM16
* also use information about the environment where the color was
* observed, known as the viewing conditions.
*
* For example, white under the traditional assumption of a midday sun white
* point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
* hue 203, chroma 3, lightness 100)
*/
var Cam16 = class Cam16 {
	/**
	* All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
	* the following combinations:
	*      -  {j or q} and {c, m, or s} and hue
	*      - jstar, astar, bstar
	* Prefer using a static method that constructs from 3 of those dimensions.
	* This constructor is intended for those methods to use to return all
	* possible dimensions.
	*
	* @param hue
	* @param chroma informally, colorfulness / color intensity. like saturation
	*     in HSL, except perceptually accurate.
	* @param j lightness
	* @param q brightness; ratio of lightness to white point's lightness
	* @param m colorfulness
	* @param s saturation; ratio of chroma to white point's chroma
	* @param jstar CAM16-UCS J coordinate
	* @param astar CAM16-UCS a coordinate
	* @param bstar CAM16-UCS b coordinate
	*/
	constructor(hue, chroma, j, q, m, s, jstar, astar, bstar) {
		this.hue = hue;
		this.chroma = chroma;
		this.j = j;
		this.q = q;
		this.m = m;
		this.s = s;
		this.jstar = jstar;
		this.astar = astar;
		this.bstar = bstar;
	}
	/**
	* CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
	* a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
	* specification, and is used to measure distances between colors.
	*/
	distance(other) {
		const dJ = this.jstar - other.jstar;
		const dA = this.astar - other.astar;
		const dB = this.bstar - other.bstar;
		const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
		return 1.41 * Math.pow(dEPrime, .63);
	}
	/**
	* @param argb ARGB representation of a color.
	* @return CAM16 color, assuming the color was viewed in default viewing
	*     conditions.
	*/
	static fromInt(argb) {
		return Cam16.fromIntInViewingConditions(argb, ViewingConditions.DEFAULT);
	}
	/**
	* @param argb ARGB representation of a color.
	* @param viewingConditions Information about the environment where the color
	*     was observed.
	* @return CAM16 color.
	*/
	static fromIntInViewingConditions(argb, viewingConditions) {
		const red = (argb & 16711680) >> 16;
		const green = (argb & 65280) >> 8;
		const blue = argb & 255;
		const redL = linearized(red);
		const greenL = linearized(green);
		const blueL = linearized(blue);
		const x = .41233895 * redL + .35762064 * greenL + .18051042 * blueL;
		const y = .2126 * redL + .7152 * greenL + .0722 * blueL;
		const z = .01932141 * redL + .11916382 * greenL + .95034478 * blueL;
		const rC = .401288 * x + .650173 * y - .051461 * z;
		const gC = -.250268 * x + 1.204414 * y + .045854 * z;
		const bC = -.002079 * x + .048952 * y + .953127 * z;
		const rD = viewingConditions.rgbD[0] * rC;
		const gD = viewingConditions.rgbD[1] * gC;
		const bD = viewingConditions.rgbD[2] * bC;
		const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, .42);
		const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, .42);
		const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, .42);
		const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
		const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
		const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
		const a = (11 * rA + -12 * gA + bA) / 11;
		const b = (rA + gA - 2 * bA) / 9;
		const u = (20 * rA + 20 * gA + 21 * bA) / 20;
		const p2 = (40 * rA + 20 * gA + bA) / 20;
		const hue = sanitizeDegreesDouble(Math.atan2(b, a) * 180 / Math.PI);
		const hueRadians = hue * Math.PI / 180;
		const ac = p2 * viewingConditions.nbb;
		const j = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
		const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
		const huePrime = hue < 20.14 ? hue + 360 : hue;
		const t = 5e4 / 13 * (.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8)) * viewingConditions.nc * viewingConditions.ncb * Math.sqrt(a * a + b * b) / (u + .305);
		const alpha = Math.pow(t, .9) * Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73);
		const c = alpha * Math.sqrt(j / 100);
		const m = c * viewingConditions.fLRoot;
		const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
		const jstar = (1 + 100 * .007) * j / (1 + .007 * j);
		const mstar = 1 / .0228 * Math.log(1 + .0228 * m);
		const astar = mstar * Math.cos(hueRadians);
		const bstar = mstar * Math.sin(hueRadians);
		return new Cam16(hue, c, j, q, m, s, jstar, astar, bstar);
	}
	/**
	* @param j CAM16 lightness
	* @param c CAM16 chroma
	* @param h CAM16 hue
	*/
	static fromJch(j, c, h) {
		return Cam16.fromJchInViewingConditions(j, c, h, ViewingConditions.DEFAULT);
	}
	/**
	* @param j CAM16 lightness
	* @param c CAM16 chroma
	* @param h CAM16 hue
	* @param viewingConditions Information about the environment where the color
	*     was observed.
	*/
	static fromJchInViewingConditions(j, c, h, viewingConditions) {
		const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
		const m = c * viewingConditions.fLRoot;
		const alpha = c / Math.sqrt(j / 100);
		const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
		const hueRadians = h * Math.PI / 180;
		const jstar = (1 + 100 * .007) * j / (1 + .007 * j);
		const mstar = 1 / .0228 * Math.log(1 + .0228 * m);
		const astar = mstar * Math.cos(hueRadians);
		const bstar = mstar * Math.sin(hueRadians);
		return new Cam16(h, c, j, q, m, s, jstar, astar, bstar);
	}
	/**
	* @param jstar CAM16-UCS lightness.
	* @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
	*     coordinate on the Y axis.
	* @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
	*     coordinate on the X axis.
	*/
	static fromUcs(jstar, astar, bstar) {
		return Cam16.fromUcsInViewingConditions(jstar, astar, bstar, ViewingConditions.DEFAULT);
	}
	/**
	* @param jstar CAM16-UCS lightness.
	* @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
	*     coordinate on the Y axis.
	* @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
	*     coordinate on the X axis.
	* @param viewingConditions Information about the environment where the color
	*     was observed.
	*/
	static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
		const a = astar;
		const b = bstar;
		const m = Math.sqrt(a * a + b * b);
		const c = (Math.exp(m * .0228) - 1) / .0228 / viewingConditions.fLRoot;
		let h = Math.atan2(b, a) * (180 / Math.PI);
		if (h < 0) h += 360;
		const j = jstar / (1 - (jstar - 100) * .007);
		return Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
	}
	/**
	*  @return ARGB representation of color, assuming the color was viewed in
	*     default viewing conditions, which are near-identical to the default
	*     viewing conditions for sRGB.
	*/
	toInt() {
		return this.viewed(ViewingConditions.DEFAULT);
	}
	/**
	* @param viewingConditions Information about the environment where the color
	*     will be viewed.
	* @return ARGB representation of color
	*/
	viewed(viewingConditions) {
		const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
		const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73), 1 / .9);
		const hRad = this.hue * Math.PI / 180;
		const eHue = .25 * (Math.cos(hRad + 2) + 3.8);
		const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
		const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
		const p2 = ac / viewingConditions.nbb;
		const hSin = Math.sin(hRad);
		const hCos = Math.cos(hRad);
		const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
		const a = gamma * hCos;
		const b = gamma * hSin;
		const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
		const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
		const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
		const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
		const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / .42);
		const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
		const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / .42);
		const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
		const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / .42);
		const rF = rC / viewingConditions.rgbD[0];
		const gF = gC / viewingConditions.rgbD[1];
		const bF = bC / viewingConditions.rgbD[2];
		return argbFromXyz(1.86206786 * rF - 1.01125463 * gF + .14918677 * bF, .38752654 * rF + .62144744 * gF - .00897398 * bF, -.0158415 * rF - .03412294 * gF + 1.04996444 * bF);
	}
	static fromXyzInViewingConditions(x, y, z, viewingConditions) {
		const rC = .401288 * x + .650173 * y - .051461 * z;
		const gC = -.250268 * x + 1.204414 * y + .045854 * z;
		const bC = -.002079 * x + .048952 * y + .953127 * z;
		const rD = viewingConditions.rgbD[0] * rC;
		const gD = viewingConditions.rgbD[1] * gC;
		const bD = viewingConditions.rgbD[2] * bC;
		const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, .42);
		const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, .42);
		const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, .42);
		const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
		const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
		const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
		const a = (11 * rA + -12 * gA + bA) / 11;
		const b = (rA + gA - 2 * bA) / 9;
		const u = (20 * rA + 20 * gA + 21 * bA) / 20;
		const p2 = (40 * rA + 20 * gA + bA) / 20;
		const atanDegrees = Math.atan2(b, a) * 180 / Math.PI;
		const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
		const hueRadians = hue * Math.PI / 180;
		const ac = p2 * viewingConditions.nbb;
		const J = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
		const Q = 4 / viewingConditions.c * Math.sqrt(J / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
		const huePrime = hue < 20.14 ? hue + 360 : hue;
		const t = 5e4 / 13 * (1 / 4 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8)) * viewingConditions.nc * viewingConditions.ncb * Math.sqrt(a * a + b * b) / (u + .305);
		const alpha = Math.pow(t, .9) * Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73);
		const C = alpha * Math.sqrt(J / 100);
		const M = C * viewingConditions.fLRoot;
		const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
		const jstar = (1 + 100 * .007) * J / (1 + .007 * J);
		const mstar = Math.log(1 + .0228 * M) / .0228;
		const astar = mstar * Math.cos(hueRadians);
		const bstar = mstar * Math.sin(hueRadians);
		return new Cam16(hue, C, J, Q, M, s, jstar, astar, bstar);
	}
	xyzInViewingConditions(viewingConditions) {
		const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
		const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73), 1 / .9);
		const hRad = this.hue * Math.PI / 180;
		const eHue = .25 * (Math.cos(hRad + 2) + 3.8);
		const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
		const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
		const p2 = ac / viewingConditions.nbb;
		const hSin = Math.sin(hRad);
		const hCos = Math.cos(hRad);
		const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
		const a = gamma * hCos;
		const b = gamma * hSin;
		const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
		const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
		const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
		const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
		const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / .42);
		const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
		const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / .42);
		const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
		const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / .42);
		const rF = rC / viewingConditions.rgbD[0];
		const gF = gC / viewingConditions.rgbD[1];
		const bF = bC / viewingConditions.rgbD[2];
		return [
			1.86206786 * rF - 1.01125463 * gF + .14918677 * bF,
			.38752654 * rF + .62144744 * gF - .00897398 * bF,
			-.0158415 * rF - .03412294 * gF + 1.04996444 * bF
		];
	}
};
// node_modules/@material/material-color-utilities/hct/hct_solver.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A class that solves the HCT equation.
*/
var HctSolver = class HctSolver {
	/**
	* Sanitizes a small enough angle in radians.
	*
	* @param angle An angle in radians; must not deviate too much
	* from 0.
	* @return A coterminal angle between 0 and 2pi.
	*/
	static sanitizeRadians(angle) {
		return (angle + Math.PI * 8) % (Math.PI * 2);
	}
	/**
	* Delinearizes an RGB component, returning a floating-point
	* number.
	*
	* @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
	* linear R/G/B channel
	* @return 0.0 <= output <= 255.0, color channel converted to
	* regular RGB space
	*/
	static trueDelinearized(rgbComponent) {
		const normalized = rgbComponent / 100;
		let delinearized = 0;
		if (normalized <= .0031308) delinearized = normalized * 12.92;
		else delinearized = 1.055 * Math.pow(normalized, 1 / 2.4) - .055;
		return delinearized * 255;
	}
	static chromaticAdaptation(component) {
		const af = Math.pow(Math.abs(component), .42);
		return signum(component) * 400 * af / (af + 27.13);
	}
	/**
	* Returns the hue of a linear RGB color in CAM16.
	*
	* @param linrgb The linear RGB coordinates of a color.
	* @return The hue of the color in CAM16, in radians.
	*/
	static hueOf(linrgb) {
		const scaledDiscount = matrixMultiply(linrgb, HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
		const rA = HctSolver.chromaticAdaptation(scaledDiscount[0]);
		const gA = HctSolver.chromaticAdaptation(scaledDiscount[1]);
		const bA = HctSolver.chromaticAdaptation(scaledDiscount[2]);
		const a = (11 * rA + -12 * gA + bA) / 11;
		const b = (rA + gA - 2 * bA) / 9;
		return Math.atan2(b, a);
	}
	static areInCyclicOrder(a, b, c) {
		return HctSolver.sanitizeRadians(b - a) < HctSolver.sanitizeRadians(c - a);
	}
	/**
	* Solves the lerp equation.
	*
	* @param source The starting number.
	* @param mid The number in the middle.
	* @param target The ending number.
	* @return A number t such that lerp(source, target, t) = mid.
	*/
	static intercept(source, mid, target) {
		return (mid - source) / (target - source);
	}
	static lerpPoint(source, t, target) {
		return [
			source[0] + (target[0] - source[0]) * t,
			source[1] + (target[1] - source[1]) * t,
			source[2] + (target[2] - source[2]) * t
		];
	}
	/**
	* Intersects a segment with a plane.
	*
	* @param source The coordinates of point A.
	* @param coordinate The R-, G-, or B-coordinate of the plane.
	* @param target The coordinates of point B.
	* @param axis The axis the plane is perpendicular with. (0: R, 1:
	* G, 2: B)
	* @return The intersection point of the segment AB with the plane
	* R=coordinate, G=coordinate, or B=coordinate
	*/
	static setCoordinate(source, coordinate, target, axis) {
		const t = HctSolver.intercept(source[axis], coordinate, target[axis]);
		return HctSolver.lerpPoint(source, t, target);
	}
	static isBounded(x) {
		return 0 <= x && x <= 100;
	}
	/**
	* Returns the nth possible vertex of the polygonal intersection.
	*
	* @param y The Y value of the plane.
	* @param n The zero-based index of the point. 0 <= n <= 11.
	* @return The nth possible vertex of the polygonal intersection
	* of the y plane and the RGB cube, in linear RGB coordinates, if
	* it exists. If this possible vertex lies outside of the cube,
	* [-1.0, -1.0, -1.0] is returned.
	*/
	static nthVertex(y, n) {
		const kR = HctSolver.Y_FROM_LINRGB[0];
		const kG = HctSolver.Y_FROM_LINRGB[1];
		const kB = HctSolver.Y_FROM_LINRGB[2];
		const coordA = n % 4 <= 1 ? 0 : 100;
		const coordB = n % 2 === 0 ? 0 : 100;
		if (n < 4) {
			const g = coordA;
			const b = coordB;
			const r = (y - g * kG - b * kB) / kR;
			if (HctSolver.isBounded(r)) return [
				r,
				g,
				b
			];
			else return [
				-1,
				-1,
				-1
			];
		} else if (n < 8) {
			const b = coordA;
			const r = coordB;
			const g = (y - r * kR - b * kB) / kG;
			if (HctSolver.isBounded(g)) return [
				r,
				g,
				b
			];
			else return [
				-1,
				-1,
				-1
			];
		} else {
			const r = coordA;
			const g = coordB;
			const b = (y - r * kR - g * kG) / kB;
			if (HctSolver.isBounded(b)) return [
				r,
				g,
				b
			];
			else return [
				-1,
				-1,
				-1
			];
		}
	}
	/**
	* Finds the segment containing the desired color.
	*
	* @param y The Y value of the color.
	* @param targetHue The hue of the color.
	* @return A list of two sets of linear RGB coordinates, each
	* corresponding to an endpoint of the segment containing the
	* desired color.
	*/
	static bisectToSegment(y, targetHue) {
		let left = [
			-1,
			-1,
			-1
		];
		let right = left;
		let leftHue = 0;
		let rightHue = 0;
		let initialized = false;
		let uncut = true;
		for (let n = 0; n < 12; n++) {
			const mid = HctSolver.nthVertex(y, n);
			if (mid[0] < 0) continue;
			const midHue = HctSolver.hueOf(mid);
			if (!initialized) {
				left = mid;
				right = mid;
				leftHue = midHue;
				rightHue = midHue;
				initialized = true;
				continue;
			}
			if (uncut || HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
				uncut = false;
				if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
					right = mid;
					rightHue = midHue;
				} else {
					left = mid;
					leftHue = midHue;
				}
			}
		}
		return [left, right];
	}
	static midpoint(a, b) {
		return [
			(a[0] + b[0]) / 2,
			(a[1] + b[1]) / 2,
			(a[2] + b[2]) / 2
		];
	}
	static criticalPlaneBelow(x) {
		return Math.floor(x - .5);
	}
	static criticalPlaneAbove(x) {
		return Math.ceil(x - .5);
	}
	/**
	* Finds a color with the given Y and hue on the boundary of the
	* cube.
	*
	* @param y The Y value of the color.
	* @param targetHue The hue of the color.
	* @return The desired color, in linear RGB coordinates.
	*/
	static bisectToLimit(y, targetHue) {
		const segment = HctSolver.bisectToSegment(y, targetHue);
		let left = segment[0];
		let leftHue = HctSolver.hueOf(left);
		let right = segment[1];
		for (let axis = 0; axis < 3; axis++) if (left[axis] !== right[axis]) {
			let lPlane = -1;
			let rPlane = 255;
			if (left[axis] < right[axis]) {
				lPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(left[axis]));
				rPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(right[axis]));
			} else {
				lPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(left[axis]));
				rPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(right[axis]));
			}
			for (let i = 0; i < 8; i++) if (Math.abs(rPlane - lPlane) <= 1) break;
			else {
				const mPlane = Math.floor((lPlane + rPlane) / 2);
				const midPlaneCoordinate = HctSolver.CRITICAL_PLANES[mPlane];
				const mid = HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
				const midHue = HctSolver.hueOf(mid);
				if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
					right = mid;
					rPlane = mPlane;
				} else {
					left = mid;
					leftHue = midHue;
					lPlane = mPlane;
				}
			}
		}
		return HctSolver.midpoint(left, right);
	}
	static inverseChromaticAdaptation(adapted) {
		const adaptedAbs = Math.abs(adapted);
		const base = Math.max(0, 27.13 * adaptedAbs / (400 - adaptedAbs));
		return signum(adapted) * Math.pow(base, 1 / .42);
	}
	/**
	* Finds a color with the given hue, chroma, and Y.
	*
	* @param hueRadians The desired hue in radians.
	* @param chroma The desired chroma.
	* @param y The desired Y.
	* @return The desired color as a hexadecimal integer, if found; 0
	* otherwise.
	*/
	static findResultByJ(hueRadians, chroma, y) {
		let j = Math.sqrt(y) * 11;
		const viewingConditions = ViewingConditions.DEFAULT;
		const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73);
		const p1 = .25 * (Math.cos(hueRadians + 2) + 3.8) * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
		const hSin = Math.sin(hueRadians);
		const hCos = Math.cos(hueRadians);
		for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
			const jNormalized = j / 100;
			const alpha = chroma === 0 || j === 0 ? 0 : chroma / Math.sqrt(jNormalized);
			const t = Math.pow(alpha * tInnerCoeff, 1 / .9);
			const p2 = viewingConditions.aw * Math.pow(jNormalized, 1 / viewingConditions.c / viewingConditions.z) / viewingConditions.nbb;
			const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
			const a = gamma * hCos;
			const b = gamma * hSin;
			const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
			const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
			const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
			const linrgb = matrixMultiply([
				HctSolver.inverseChromaticAdaptation(rA),
				HctSolver.inverseChromaticAdaptation(gA),
				HctSolver.inverseChromaticAdaptation(bA)
			], HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
			if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) return 0;
			const kR = HctSolver.Y_FROM_LINRGB[0];
			const kG = HctSolver.Y_FROM_LINRGB[1];
			const kB = HctSolver.Y_FROM_LINRGB[2];
			const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
			if (fnj <= 0) return 0;
			if (iterationRound === 4 || Math.abs(fnj - y) < .002) {
				if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) return 0;
				return argbFromLinrgb(linrgb);
			}
			j = j - (fnj - y) * j / (2 * fnj);
		}
		return 0;
	}
	/**
	* Finds an sRGB color with the given hue, chroma, and L*, if
	* possible.
	*
	* @param hueDegrees The desired hue, in degrees.
	* @param chroma The desired chroma.
	* @param lstar The desired L*.
	* @return A hexadecimal representing the sRGB color. The color
	* has sufficiently close hue, chroma, and L* to the desired
	* values, if possible; otherwise, the hue and L* will be
	* sufficiently close, and chroma will be maximized.
	*/
	static solveToInt(hueDegrees, chroma, lstar) {
		if (chroma < 1e-4 || lstar < 1e-4 || lstar > 99.9999) return argbFromLstar(lstar);
		hueDegrees = sanitizeDegreesDouble(hueDegrees);
		const hueRadians = hueDegrees / 180 * Math.PI;
		const y = yFromLstar(lstar);
		const exactAnswer = HctSolver.findResultByJ(hueRadians, chroma, y);
		if (exactAnswer !== 0) return exactAnswer;
		return argbFromLinrgb(HctSolver.bisectToLimit(y, hueRadians));
	}
	/**
	* Finds an sRGB color with the given hue, chroma, and L*, if
	* possible.
	*
	* @param hueDegrees The desired hue, in degrees.
	* @param chroma The desired chroma.
	* @param lstar The desired L*.
	* @return An CAM16 object representing the sRGB color. The color
	* has sufficiently close hue, chroma, and L* to the desired
	* values, if possible; otherwise, the hue and L* will be
	* sufficiently close, and chroma will be maximized.
	*/
	static solveToCam(hueDegrees, chroma, lstar) {
		return Cam16.fromInt(HctSolver.solveToInt(hueDegrees, chroma, lstar));
	}
};
HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
	[
		.001200833568784504,
		.002389694492170889,
		.0002795742885861124
	],
	[
		.0005891086651375999,
		.0029785502573438758,
		.0003270666104008398
	],
	[
		.00010146692491640572,
		.0005364214359186694,
		.0032979401770712076
	]
];
HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
	[
		1373.2198709594231,
		-1100.4251190754821,
		-7.278681089101213
	],
	[
		-271.815969077903,
		559.6580465940733,
		-32.46047482791194
	],
	[
		1.9622899599665666,
		-57.173814538844006,
		308.7233197812385
	]
];
HctSolver.Y_FROM_LINRGB = [
	.2126,
	.7152,
	.0722
];
HctSolver.CRITICAL_PLANES = [
	.015176349177441876,
	.045529047532325624,
	.07588174588720938,
	.10623444424209313,
	.13658714259697685,
	.16693984095186062,
	.19729253930674434,
	.2276452376616281,
	.2579979360165119,
	.28835063437139563,
	.3188300904430532,
	.350925934958123,
	.3848314933096426,
	.42057480301049466,
	.458183274052838,
	.4976837250274023,
	.5391024159806381,
	.5824650784040898,
	.6277969426914107,
	.6751227633498623,
	.7244668422128921,
	.775853049866786,
	.829304845476233,
	.8848452951698498,
	.942497089126609,
	1.0022825574869039,
	1.0642236851973577,
	1.1283421258858297,
	1.1946592148522128,
	1.2631959812511864,
	1.3339731595349034,
	1.407011200216447,
	1.4823302800086415,
	1.5599503113873272,
	1.6398909516233677,
	1.7221716113234105,
	1.8068114625156377,
	1.8938294463134073,
	1.9832442801866852,
	2.075074464868551,
	2.1693382909216234,
	2.2660538449872063,
	2.36523901573795,
	2.4669114995532007,
	2.5710888059345764,
	2.6777882626779785,
	2.7870270208169257,
	2.898822059350997,
	3.0131901897720907,
	3.1301480604002863,
	3.2497121605402226,
	3.3718988244681087,
	3.4967242352587946,
	3.624204428461639,
	3.754355295633311,
	3.887192587735158,
	4.022731918402185,
	4.160988767090289,
	4.301978482107941,
	4.445716283538092,
	4.592217266055746,
	4.741496401646282,
	4.893568542229298,
	5.048448422192488,
	5.20615066083972,
	5.3666897647573375,
	5.5300801301023865,
	5.696336044816294,
	5.865471690767354,
	6.037501145825082,
	6.212438385869475,
	6.390297286737924,
	6.571091626112461,
	6.7548350853498045,
	6.941541251256611,
	7.131223617812143,
	7.323895587840543,
	7.5195704746346665,
	7.7182615035334345,
	7.919981813454504,
	8.124744458384042,
	8.332562408825165,
	8.543448553206703,
	8.757415699253682,
	8.974476575321063,
	9.194643831691977,
	9.417930041841839,
	9.644347703669503,
	9.873909240696694,
	10.106627003236781,
	10.342513269534024,
	10.58158024687427,
	10.8238400726681,
	11.069304815507364,
	11.317986476196008,
	11.569896988756009,
	11.825048221409341,
	12.083451977536606,
	12.345119996613247,
	12.610063955123938,
	12.878295467455942,
	13.149826086772048,
	13.42466730586372,
	13.702830557985108,
	13.984327217668513,
	14.269168601521828,
	14.55736596900856,
	14.848930523210871,
	15.143873411576273,
	15.44220572664832,
	15.743938506781891,
	16.04908273684337,
	16.35764934889634,
	16.66964922287304,
	16.985093187232053,
	17.30399201960269,
	17.62635644741625,
	17.95219714852476,
	18.281524751807332,
	18.614349837764564,
	18.95068293910138,
	19.290534541298456,
	19.633915083172692,
	19.98083495742689,
	20.331304511189067,
	20.685334046541502,
	21.042933821039977,
	21.404114048223256,
	21.76888489811322,
	22.137256497705877,
	22.50923893145328,
	22.884842241736916,
	23.264076429332462,
	23.6469514538663,
	24.033477234264016,
	24.42366364919083,
	24.817520537484558,
	25.21505769858089,
	25.61628489293138,
	26.021211842414342,
	26.429848230738664,
	26.842203703840827,
	27.258287870275353,
	27.678110301598522,
	28.10168053274597,
	28.529008062403893,
	28.96010235337422,
	29.39497283293396,
	29.83362889318845,
	30.276079891419332,
	30.722335150426627,
	31.172403958865512,
	31.62629557157785,
	32.08401920991837,
	32.54558406207592,
	33.010999283389665,
	33.4802739966603,
	33.953417292456834,
	34.430438229418264,
	34.911345834551085,
	35.39614910352207,
	35.88485700094671,
	36.37747846067349,
	36.87402238606382,
	37.37449765026789,
	37.87891309649659,
	38.38727753828926,
	38.89959975977785,
	39.41588851594697,
	39.93615253289054,
	40.460400508064545,
	40.98864111053629,
	41.520882981230194,
	42.05713473317016,
	42.597404951718396,
	43.141702194811224,
	43.6900349931913,
	44.24241185063697,
	44.798841244188324,
	45.35933162437017,
	45.92389141541209,
	46.49252901546552,
	47.065252796817916,
	47.64207110610409,
	48.22299226451468,
	48.808024568002054,
	49.3971762874833,
	49.9904556690408,
	50.587870934119984,
	51.189430279724725,
	51.79514187861014,
	52.40501387947288,
	53.0190544071392,
	53.637271562750364,
	54.259673423945976,
	54.88626804504493,
	55.517063457223934,
	56.15206766869424,
	56.79128866487574,
	57.43473440856916,
	58.08241284012621,
	58.734331877617365,
	59.39049941699807,
	60.05092333227251,
	60.715611475655585,
	61.38457167773311,
	62.057811747619894,
	62.7353394731159,
	63.417162620860914,
	64.10328893648692,
	64.79372614476921,
	65.48848194977529,
	66.18756403501224,
	66.89098006357258,
	67.59873767827808,
	68.31084450182222,
	69.02730813691093,
	69.74813616640164,
	70.47333615344107,
	71.20291564160104,
	71.93688215501312,
	72.67524319850172,
	73.41800625771542,
	74.16517879925733,
	74.9167682708136,
	75.67278210128072,
	76.43322770089146,
	77.1981124613393,
	77.96744375590167,
	78.74122893956174,
	79.51947534912904,
	80.30219030335869,
	81.08938110306934,
	81.88105503125999,
	82.67721935322541,
	83.4778813166706,
	84.28304815182372,
	85.09272707154808,
	85.90692527145302,
	86.72564993000343,
	87.54890820862819,
	88.3767072518277,
	89.2090541872801,
	90.04595612594655,
	90.88742016217518,
	91.73345337380438,
	92.58406282226491,
	93.43925555268066,
	94.29903859396902,
	95.16341895893969,
	96.03240364439274,
	96.9059996312159,
	97.78421388448044,
	98.6670533535366,
	99.55452497210776
];
// node_modules/@material/material-color-utilities/hct/hct.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A color system built using CAM16 hue and chroma, and L* from
* L*a*b*.
*
* Using L* creates a link between the color system, contrast, and thus
* accessibility. Contrast ratio depends on relative luminance, or Y in the XYZ
* color space. L*, or perceptual luminance can be calculated from Y.
*
* Unlike Y, L* is linear to human perception, allowing trivial creation of
* accurate color tones.
*
* Unlike contrast ratio, measuring contrast in L* is linear, and simple to
* calculate. A difference of 40 in HCT tone guarantees a contrast ratio >= 3.0,
* and a difference of 50 guarantees a contrast ratio >= 4.5.
*/
/**
* HCT, hue, chroma, and tone. A color system that provides a perceptually
* accurate color measurement system that can also accurately render what colors
* will appear as in different lighting environments.
*/
var Hct = class Hct {
	static from(hue, chroma, tone) {
		return new Hct(HctSolver.solveToInt(hue, chroma, tone));
	}
	/**
	* @param argb ARGB representation of a color.
	* @return HCT representation of a color in default viewing conditions
	*/
	static fromInt(argb) {
		return new Hct(argb);
	}
	toInt() {
		return this.argb;
	}
	/**
	* A number, in degrees, representing ex. red, orange, yellow, etc.
	* Ranges from 0 <= hue < 360.
	*/
	get hue() {
		return this.internalHue;
	}
	/**
	* @param newHue 0 <= newHue < 360; invalid values are corrected.
	* Chroma may decrease because chroma has a different maximum for any given
	* hue and tone.
	*/
	set hue(newHue) {
		this.setInternalState(HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
	}
	get chroma() {
		return this.internalChroma;
	}
	/**
	* @param newChroma 0 <= newChroma < ?
	* Chroma may decrease because chroma has a different maximum for any given
	* hue and tone.
	*/
	set chroma(newChroma) {
		this.setInternalState(HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
	}
	/** Lightness. Ranges from 0 to 100. */
	get tone() {
		return this.internalTone;
	}
	/**
	* @param newTone 0 <= newTone <= 100; invalid valids are corrected.
	* Chroma may decrease because chroma has a different maximum for any given
	* hue and tone.
	*/
	set tone(newTone) {
		this.setInternalState(HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
	}
	/** Sets a property of the Hct object. */
	setValue(propertyName, value) {
		this[propertyName] = value;
	}
	toString() {
		return `HCT(${this.hue.toFixed(0)}, ${this.chroma.toFixed(0)}, ${this.tone.toFixed(0)})`;
	}
	static isBlue(hue) {
		return hue >= 250 && hue < 270;
	}
	static isYellow(hue) {
		return hue >= 105 && hue < 125;
	}
	static isCyan(hue) {
		return hue >= 170 && hue < 207;
	}
	constructor(argb) {
		this.argb = argb;
		const cam = Cam16.fromInt(argb);
		this.internalHue = cam.hue;
		this.internalChroma = cam.chroma;
		this.internalTone = lstarFromArgb(argb);
		this.argb = argb;
	}
	setInternalState(argb) {
		const cam = Cam16.fromInt(argb);
		this.internalHue = cam.hue;
		this.internalChroma = cam.chroma;
		this.internalTone = lstarFromArgb(argb);
		this.argb = argb;
	}
	/**
	* Translates a color into different [ViewingConditions].
	*
	* Colors change appearance. They look different with lights on versus off,
	* the same color, as in hex code, on white looks different when on black.
	* This is called color relativity, most famously explicated by Josef Albers
	* in Interaction of Color.
	*
	* In color science, color appearance models can account for this and
	* calculate the appearance of a color in different settings. HCT is based on
	* CAM16, a color appearance model, and uses it to make these calculations.
	*
	* See [ViewingConditions.make] for parameters affecting color appearance.
	*/
	inViewingConditions(vc) {
		const viewedInVc = Cam16.fromInt(this.toInt()).xyzInViewingConditions(vc);
		const recastInVc = Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], ViewingConditions.make());
		return Hct.from(recastInVc.hue, recastInVc.chroma, lstarFromY(viewedInVc[1]));
	}
};
// node_modules/@material/material-color-utilities/blend/blend.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/contrast/contrast.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Utility methods for calculating contrast given two colors, or calculating a
* color given one color and a contrast ratio.
*
* Contrast ratio is calculated using XYZ's Y. When linearized to match human
* perception, Y becomes HCT's tone and L*a*b*'s' L*. Informally, this is the
* lightness of a color.
*
* Methods refer to tone, T in the the HCT color space.
* Tone is equivalent to L* in the L*a*b* color space, or L in the LCH color
* space.
*/
var Contrast = class Contrast {
	/**
	* Returns a contrast ratio, which ranges from 1 to 21.
	*
	* @param toneA Tone between 0 and 100. Values outside will be clamped.
	* @param toneB Tone between 0 and 100. Values outside will be clamped.
	*/
	static ratioOfTones(toneA, toneB) {
		toneA = clampDouble(0, 100, toneA);
		toneB = clampDouble(0, 100, toneB);
		return Contrast.ratioOfYs(yFromLstar(toneA), yFromLstar(toneB));
	}
	static ratioOfYs(y1, y2) {
		const lighter = y1 > y2 ? y1 : y2;
		const darker = lighter === y2 ? y1 : y2;
		return (lighter + 5) / (darker + 5);
	}
	/**
	* Returns a tone >= tone parameter that ensures ratio parameter.
	* Return value is between 0 and 100.
	* Returns -1 if ratio cannot be achieved with tone parameter.
	*
	* @param tone Tone return value must contrast with.
	* Range is 0 to 100. Invalid values will result in -1 being returned.
	* @param ratio Contrast ratio of return value and tone.
	* Range is 1 to 21, invalid values have undefined behavior.
	*/
	static lighter(tone, ratio) {
		if (tone < 0 || tone > 100) return -1;
		const darkY = yFromLstar(tone);
		const lightY = ratio * (darkY + 5) - 5;
		const realContrast = Contrast.ratioOfYs(lightY, darkY);
		const delta = Math.abs(realContrast - ratio);
		if (realContrast < ratio && delta > .04) return -1;
		const returnValue = lstarFromY(lightY) + .4;
		if (returnValue < 0 || returnValue > 100) return -1;
		return returnValue;
	}
	/**
	* Returns a tone <= tone parameter that ensures ratio parameter.
	* Return value is between 0 and 100.
	* Returns -1 if ratio cannot be achieved with tone parameter.
	*
	* @param tone Tone return value must contrast with.
	* Range is 0 to 100. Invalid values will result in -1 being returned.
	* @param ratio Contrast ratio of return value and tone.
	* Range is 1 to 21, invalid values have undefined behavior.
	*/
	static darker(tone, ratio) {
		if (tone < 0 || tone > 100) return -1;
		const lightY = yFromLstar(tone);
		const darkY = (lightY + 5) / ratio - 5;
		const realContrast = Contrast.ratioOfYs(lightY, darkY);
		const delta = Math.abs(realContrast - ratio);
		if (realContrast < ratio && delta > .04) return -1;
		const returnValue = lstarFromY(darkY) - .4;
		if (returnValue < 0 || returnValue > 100) return -1;
		return returnValue;
	}
	/**
	* Returns a tone >= tone parameter that ensures ratio parameter.
	* Return value is between 0 and 100.
	* Returns 100 if ratio cannot be achieved with tone parameter.
	*
	* This method is unsafe because the returned value is guaranteed to be in
	* bounds for tone, i.e. between 0 and 100. However, that value may not reach
	* the ratio with tone. For example, there is no color lighter than T100.
	*
	* @param tone Tone return value must contrast with.
	* Range is 0 to 100. Invalid values will result in 100 being returned.
	* @param ratio Desired contrast ratio of return value and tone parameter.
	* Range is 1 to 21, invalid values have undefined behavior.
	*/
	static lighterUnsafe(tone, ratio) {
		const lighterSafe = Contrast.lighter(tone, ratio);
		return lighterSafe < 0 ? 100 : lighterSafe;
	}
	/**
	* Returns a tone >= tone parameter that ensures ratio parameter.
	* Return value is between 0 and 100.
	* Returns 100 if ratio cannot be achieved with tone parameter.
	*
	* This method is unsafe because the returned value is guaranteed to be in
	* bounds for tone, i.e. between 0 and 100. However, that value may not reach
	* the [ratio with [tone]. For example, there is no color darker than T0.
	*
	* @param tone Tone return value must contrast with.
	* Range is 0 to 100. Invalid values will result in 0 being returned.
	* @param ratio Desired contrast ratio of return value and tone parameter.
	* Range is 1 to 21, invalid values have undefined behavior.
	*/
	static darkerUnsafe(tone, ratio) {
		const darkerSafe = Contrast.darker(tone, ratio);
		return darkerSafe < 0 ? 0 : darkerSafe;
	}
};
// node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Check and/or fix universally disliked colors.
* Color science studies of color preference indicate universal distaste for
* dark yellow-greens, and also show this is correlated to distate for
* biological waste and rotting food.
*
* See Palmer and Schloss, 2010 or Schloss and Palmer's Chapter 21 in Handbook
* of Color Psychology (2015).
*/
var DislikeAnalyzer = class DislikeAnalyzer {
	/**
	* Returns true if a color is disliked.
	*
	* @param hct A color to be judged.
	* @return Whether the color is disliked.
	*
	* Disliked is defined as a dark yellow-green that is not neutral.
	*/
	static isDisliked(hct) {
		const huePasses = Math.round(hct.hue) >= 90 && Math.round(hct.hue) <= 111;
		const chromaPasses = Math.round(hct.chroma) > 16;
		const tonePasses = Math.round(hct.tone) < 65;
		return huePasses && chromaPasses && tonePasses;
	}
	/**
	* If a color is disliked, lighten it to make it likable.
	*
	* @param hct A color to be judged.
	* @return A new color if the original color is disliked, or the original
	*   color if it is acceptable.
	*/
	static fixIfDisliked(hct) {
		if (DislikeAnalyzer.isDisliked(hct)) return Hct.from(hct.hue, hct.chroma, 70);
		return hct;
	}
};
// node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function validateExtendedColor(originalColor, specVersion, extendedColor) {
	if (originalColor.name !== extendedColor.name) throw new Error(`Attempting to extend color ${originalColor.name} with color ${extendedColor.name} of different name for spec version ${specVersion}.`);
	if (originalColor.isBackground !== extendedColor.isBackground) throw new Error(`Attempting to extend color ${originalColor.name} as a ${originalColor.isBackground ? "background" : "foreground"} with color ${extendedColor.name} as a ${extendedColor.isBackground ? "background" : "foreground"} for spec version ${specVersion}.`);
}
/**
* Returns a new DynamicColor that is the same as the original color, but with
* the extended dynamic color's constraints for the given spec version.
*
* @param originlColor The original color.
* @param specVersion The spec version to extend.
* @param extendedColor The color with the values to extend.
*/
function extendSpecVersion(originlColor, specVersion, extendedColor) {
	validateExtendedColor(originlColor, specVersion, extendedColor);
	return DynamicColor.fromPalette({
		name: originlColor.name,
		palette: (s) => s.specVersion === specVersion ? extendedColor.palette(s) : originlColor.palette(s),
		tone: (s) => s.specVersion === specVersion ? extendedColor.tone(s) : originlColor.tone(s),
		isBackground: originlColor.isBackground,
		chromaMultiplier: (s) => {
			const chromaMultiplier = s.specVersion === specVersion ? extendedColor.chromaMultiplier : originlColor.chromaMultiplier;
			return chromaMultiplier !== void 0 ? chromaMultiplier(s) : 1;
		},
		background: (s) => {
			const background = s.specVersion === specVersion ? extendedColor.background : originlColor.background;
			return background !== void 0 ? background(s) : void 0;
		},
		secondBackground: (s) => {
			const secondBackground = s.specVersion === specVersion ? extendedColor.secondBackground : originlColor.secondBackground;
			return secondBackground !== void 0 ? secondBackground(s) : void 0;
		},
		contrastCurve: (s) => {
			const contrastCurve = s.specVersion === specVersion ? extendedColor.contrastCurve : originlColor.contrastCurve;
			return contrastCurve !== void 0 ? contrastCurve(s) : void 0;
		},
		toneDeltaPair: (s) => {
			const toneDeltaPair = s.specVersion === specVersion ? extendedColor.toneDeltaPair : originlColor.toneDeltaPair;
			return toneDeltaPair !== void 0 ? toneDeltaPair(s) : void 0;
		}
	});
}
/**
* A color that adjusts itself based on UI state provided by DynamicScheme.
*
* Colors without backgrounds do not change tone when contrast changes. Colors
* with backgrounds become closer to their background as contrast lowers, and
* further when contrast increases.
*
* Prefer static constructors. They require either a hexcode, a palette and
* tone, or a hue and chroma. Optionally, they can provide a background
* DynamicColor.
*/
var DynamicColor = class DynamicColor {
	/**
	* Create a DynamicColor defined by a TonalPalette and HCT tone.
	*
	* @param args Functions with DynamicScheme as input. Must provide a palette
	*     and tone. May provide a background DynamicColor and ToneDeltaPair.
	*/
	static fromPalette(args) {
		return new DynamicColor(args.name ?? "", args.palette, args.tone ?? DynamicColor.getInitialToneFromBackground(args.background), args.isBackground ?? false, args.chromaMultiplier, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
	}
	static getInitialToneFromBackground(background) {
		if (background === void 0) return (s) => 50;
		return (s) => background(s) ? background(s).getTone(s) : 50;
	}
	/**
	* The base constructor for DynamicColor.
	*
	* _Strongly_ prefer using one of the convenience constructors. This class is
	* arguably too flexible to ensure it can support any scenario. Functional
	* arguments allow  overriding without risks that come with subclasses.
	*
	* For example, the default behavior of adjust tone at max contrast
	* to be at a 7.0 ratio with its background is principled and
	* matches accessibility guidance. That does not mean it's the desired
	* approach for _every_ design system, and every color pairing,
	* always, in every case.
	*
	* @param name The name of the dynamic color. Defaults to empty.
	* @param palette Function that provides a TonalPalette given DynamicScheme. A
	*     TonalPalette is defined by a hue and chroma, so this replaces the need
	*     to specify hue/chroma. By providing a tonal palette, when contrast
	*     adjustments are made, intended chroma can be preserved.
	* @param tone Function that provides a tone, given a DynamicScheme.
	* @param isBackground Whether this dynamic color is a background, with some
	*     other color as the foreground. Defaults to false.
	* @param chromaMultiplier A factor that multiplies the chroma for this color.
	* @param background The background of the dynamic color (as a function of a
	*     `DynamicScheme`), if it exists.
	* @param secondBackground A second background of the dynamic color (as a
	*     function of a `DynamicScheme`), if it exists.
	* @param contrastCurve A `ContrastCurve` object specifying how its contrast
	*     against its background should behave in various contrast levels
	*     options.
	* @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
	*     constraint between two colors. One of them must be the color being
	*     constructed.
	*/
	constructor(name, palette, tone, isBackground, chromaMultiplier, background, secondBackground, contrastCurve, toneDeltaPair) {
		this.name = name;
		this.palette = palette;
		this.tone = tone;
		this.isBackground = isBackground;
		this.chromaMultiplier = chromaMultiplier;
		this.background = background;
		this.secondBackground = secondBackground;
		this.contrastCurve = contrastCurve;
		this.toneDeltaPair = toneDeltaPair;
		this.hctCache = /* @__PURE__ */ new Map();
		if (!background && secondBackground) throw new Error(`Color ${name} has secondBackgrounddefined, but background is not defined.`);
		if (!background && contrastCurve) throw new Error(`Color ${name} has contrastCurvedefined, but background is not defined.`);
		if (background && !contrastCurve) throw new Error(`Color ${name} has backgrounddefined, but contrastCurve is not defined.`);
	}
	/**
	* Returns a deep copy of this DynamicColor.
	*/
	clone() {
		return DynamicColor.fromPalette({
			name: this.name,
			palette: this.palette,
			tone: this.tone,
			isBackground: this.isBackground,
			chromaMultiplier: this.chromaMultiplier,
			background: this.background,
			secondBackground: this.secondBackground,
			contrastCurve: this.contrastCurve,
			toneDeltaPair: this.toneDeltaPair
		});
	}
	/**
	* Clears the cache of HCT values for this color. For testing or debugging
	* purposes.
	*/
	clearCache() {
		this.hctCache.clear();
	}
	/**
	* Returns a ARGB integer (i.e. a hex code).
	*
	* @param scheme Defines the conditions of the user interface, for example,
	*     whether or not it is dark mode or light mode, and what the desired
	*     contrast level is.
	*/
	getArgb(scheme) {
		return this.getHct(scheme).toInt();
	}
	/**
	* Returns a color, expressed in the HCT color space, that this
	* DynamicColor is under the conditions in scheme.
	*
	* @param scheme Defines the conditions of the user interface, for example,
	*     whether or not it is dark mode or light mode, and what the desired
	*     contrast level is.
	*/
	getHct(scheme) {
		const cachedAnswer = this.hctCache.get(scheme);
		if (cachedAnswer != null) return cachedAnswer;
		const answer = getSpec$1(scheme.specVersion).getHct(scheme, this);
		if (this.hctCache.size > 4) this.hctCache.clear();
		this.hctCache.set(scheme, answer);
		return answer;
	}
	/**
	* Returns a tone, T in the HCT color space, that this DynamicColor is under
	* the conditions in scheme.
	*
	* @param scheme Defines the conditions of the user interface, for example,
	*     whether or not it is dark mode or light mode, and what the desired
	*     contrast level is.
	*/
	getTone(scheme) {
		return getSpec$1(scheme.specVersion).getTone(scheme, this);
	}
	/**
	* Given a background tone, finds a foreground tone, while ensuring they reach
	* a contrast ratio that is as close to [ratio] as possible.
	*
	* @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
	*     falls outside that range.
	* @param ratio The contrast ratio desired between bgTone and the return
	*     value.
	*/
	static foregroundTone(bgTone, ratio) {
		const lighterTone = Contrast.lighterUnsafe(bgTone, ratio);
		const darkerTone = Contrast.darkerUnsafe(bgTone, ratio);
		const lighterRatio = Contrast.ratioOfTones(lighterTone, bgTone);
		const darkerRatio = Contrast.ratioOfTones(darkerTone, bgTone);
		if (DynamicColor.tonePrefersLightForeground(bgTone)) {
			const negligibleDifference = Math.abs(lighterRatio - darkerRatio) < .1 && lighterRatio < ratio && darkerRatio < ratio;
			return lighterRatio >= ratio || lighterRatio >= darkerRatio || negligibleDifference ? lighterTone : darkerTone;
		} else return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone : lighterTone;
	}
	/**
	* Returns whether [tone] prefers a light foreground.
	*
	* People prefer white foregrounds on ~T60-70. Observed over time, and also
	* by Andrew Somers during research for APCA.
	*
	* T60 used as to create the smallest discontinuity possible when skipping
	* down to T49 in order to ensure light foregrounds.
	* Since `tertiaryContainer` in dark monochrome scheme requires a tone of
	* 60, it should not be adjusted. Therefore, 60 is excluded here.
	*/
	static tonePrefersLightForeground(tone) {
		return Math.round(tone) < 60;
	}
	/**
	* Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
	* color.
	*/
	static toneAllowsLightForeground(tone) {
		return Math.round(tone) <= 49;
	}
	/**
	* Adjusts a tone such that white has 4.5 contrast, if the tone is
	* reasonably close to supporting it.
	*/
	static enableLightForeground(tone) {
		if (DynamicColor.tonePrefersLightForeground(tone) && !DynamicColor.toneAllowsLightForeground(tone)) return 49;
		return tone;
	}
};
/**
* A delegate for the color calculation of a DynamicScheme in the 2021 spec.
*/
var ColorCalculationDelegateImpl2021 = class {
	getHct(scheme, color) {
		const tone = color.getTone(scheme);
		return color.palette(scheme).getHct(tone);
	}
	getTone(scheme, color) {
		const decreasingContrast = scheme.contrastLevel < 0;
		const toneDeltaPair = color.toneDeltaPair ? color.toneDeltaPair(scheme) : void 0;
		if (toneDeltaPair) {
			const roleA = toneDeltaPair.roleA;
			const roleB = toneDeltaPair.roleB;
			const delta = toneDeltaPair.delta;
			const polarity = toneDeltaPair.polarity;
			const stayTogether = toneDeltaPair.stayTogether;
			const aIsNearer = polarity === "nearer" || polarity === "lighter" && !scheme.isDark || polarity === "darker" && scheme.isDark;
			const nearer = aIsNearer ? roleA : roleB;
			const farther = aIsNearer ? roleB : roleA;
			const amNearer = color.name === nearer.name;
			const expansionDir = scheme.isDark ? 1 : -1;
			let nTone = nearer.tone(scheme);
			let fTone = farther.tone(scheme);
			if (color.background && nearer.contrastCurve && farther.contrastCurve) {
				const bg = color.background(scheme);
				const nContrastCurve = nearer.contrastCurve(scheme);
				const fContrastCurve = farther.contrastCurve(scheme);
				if (bg && nContrastCurve && fContrastCurve) {
					const bgTone = bg.getTone(scheme);
					const nContrast = nContrastCurve.get(scheme.contrastLevel);
					const fContrast = fContrastCurve.get(scheme.contrastLevel);
					if (Contrast.ratioOfTones(bgTone, nTone) < nContrast) nTone = DynamicColor.foregroundTone(bgTone, nContrast);
					if (Contrast.ratioOfTones(bgTone, fTone) < fContrast) fTone = DynamicColor.foregroundTone(bgTone, fContrast);
					if (decreasingContrast) {
						nTone = DynamicColor.foregroundTone(bgTone, nContrast);
						fTone = DynamicColor.foregroundTone(bgTone, fContrast);
					}
				}
			}
			if ((fTone - nTone) * expansionDir < delta) {
				fTone = clampDouble(0, 100, nTone + delta * expansionDir);
				if ((fTone - nTone) * expansionDir >= delta) {} else nTone = clampDouble(0, 100, fTone - delta * expansionDir);
			}
			if (50 <= nTone && nTone < 60) {
				if (expansionDir > 0) {
					nTone = 60;
					fTone = Math.max(fTone, nTone + delta * expansionDir);
				} else {
					nTone = 49;
					fTone = Math.min(fTone, nTone + delta * expansionDir);
				}
			} else if (50 <= fTone && fTone < 60) {
				if (stayTogether) {
					if (expansionDir > 0) {
						nTone = 60;
						fTone = Math.max(fTone, nTone + delta * expansionDir);
					} else {
						nTone = 49;
						fTone = Math.min(fTone, nTone + delta * expansionDir);
					}
				} else if (expansionDir > 0) fTone = 60;
				else fTone = 49;
			}
			return amNearer ? nTone : fTone;
		} else {
			let answer = color.tone(scheme);
			if (color.background == void 0 || color.background(scheme) === void 0 || color.contrastCurve == void 0 || color.contrastCurve(scheme) === void 0) return answer;
			const bgTone = color.background(scheme).getTone(scheme);
			const desiredRatio = color.contrastCurve(scheme).get(scheme.contrastLevel);
			if (Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) {} else answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
			if (decreasingContrast) answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
			if (color.isBackground && 50 <= answer && answer < 60) {
				if (Contrast.ratioOfTones(49, bgTone) >= desiredRatio) answer = 49;
				else answer = 60;
			}
			if (color.secondBackground == void 0 || color.secondBackground(scheme) === void 0) return answer;
			const [bg1, bg2] = [color.background, color.secondBackground];
			const [bgTone1, bgTone2] = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)];
			const [upper, lower] = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)];
			if (Contrast.ratioOfTones(upper, answer) >= desiredRatio && Contrast.ratioOfTones(lower, answer) >= desiredRatio) return answer;
			const lightOption = Contrast.lighter(upper, desiredRatio);
			const darkOption = Contrast.darker(lower, desiredRatio);
			const availables = [];
			if (lightOption !== -1) availables.push(lightOption);
			if (darkOption !== -1) availables.push(darkOption);
			if (DynamicColor.tonePrefersLightForeground(bgTone1) || DynamicColor.tonePrefersLightForeground(bgTone2)) return lightOption < 0 ? 100 : lightOption;
			if (availables.length === 1) return availables[0];
			return darkOption < 0 ? 0 : darkOption;
		}
	}
};
/**
* A delegate for the color calculation of a DynamicScheme in the 2025 spec.
*/
var ColorCalculationDelegateImpl2025 = class {
	getHct(scheme, color) {
		const palette = color.palette(scheme);
		const tone = color.getTone(scheme);
		const hue = palette.hue;
		const chroma = palette.chroma * (color.chromaMultiplier ? color.chromaMultiplier(scheme) : 1);
		return Hct.from(hue, chroma, tone);
	}
	getTone(scheme, color) {
		const toneDeltaPair = color.toneDeltaPair ? color.toneDeltaPair(scheme) : void 0;
		if (toneDeltaPair) {
			const roleA = toneDeltaPair.roleA;
			const roleB = toneDeltaPair.roleB;
			const polarity = toneDeltaPair.polarity;
			const constraint = toneDeltaPair.constraint;
			const absoluteDelta = polarity === "darker" || polarity === "relative_lighter" && scheme.isDark || polarity === "relative_darker" && !scheme.isDark ? -toneDeltaPair.delta : toneDeltaPair.delta;
			const amRoleA = color.name === roleA.name;
			const selfRole = amRoleA ? roleA : roleB;
			const refRole = amRoleA ? roleB : roleA;
			let selfTone = selfRole.tone(scheme);
			let refTone = refRole.getTone(scheme);
			const relativeDelta = absoluteDelta * (amRoleA ? 1 : -1);
			if (constraint === "exact") selfTone = clampDouble(0, 100, refTone + relativeDelta);
			else if (constraint === "nearer") {
				if (relativeDelta > 0) selfTone = clampDouble(0, 100, clampDouble(refTone, refTone + relativeDelta, selfTone));
				else selfTone = clampDouble(0, 100, clampDouble(refTone + relativeDelta, refTone, selfTone));
			} else if (constraint === "farther") {
				if (relativeDelta > 0) selfTone = clampDouble(refTone + relativeDelta, 100, selfTone);
				else selfTone = clampDouble(0, refTone + relativeDelta, selfTone);
			}
			if (color.background && color.contrastCurve) {
				const background = color.background(scheme);
				const contrastCurve = color.contrastCurve(scheme);
				if (background && contrastCurve) {
					const bgTone = background.getTone(scheme);
					const selfContrast = contrastCurve.get(scheme.contrastLevel);
					selfTone = Contrast.ratioOfTones(bgTone, selfTone) >= selfContrast && scheme.contrastLevel >= 0 ? selfTone : DynamicColor.foregroundTone(bgTone, selfContrast);
				}
			}
			if (color.isBackground && !color.name.endsWith("_fixed_dim")) {
				if (selfTone >= 57) selfTone = clampDouble(65, 100, selfTone);
				else selfTone = clampDouble(0, 49, selfTone);
			}
			return selfTone;
		} else {
			let answer = color.tone(scheme);
			if (color.background == void 0 || color.background(scheme) === void 0 || color.contrastCurve == void 0 || color.contrastCurve(scheme) === void 0) return answer;
			const bgTone = color.background(scheme).getTone(scheme);
			const desiredRatio = color.contrastCurve(scheme).get(scheme.contrastLevel);
			answer = Contrast.ratioOfTones(bgTone, answer) >= desiredRatio && scheme.contrastLevel >= 0 ? answer : DynamicColor.foregroundTone(bgTone, desiredRatio);
			if (color.isBackground && !color.name.endsWith("_fixed_dim")) {
				if (answer >= 57) answer = clampDouble(65, 100, answer);
				else answer = clampDouble(0, 49, answer);
			}
			if (color.secondBackground == void 0 || color.secondBackground(scheme) === void 0) return answer;
			const [bg1, bg2] = [color.background, color.secondBackground];
			const [bgTone1, bgTone2] = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)];
			const [upper, lower] = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)];
			if (Contrast.ratioOfTones(upper, answer) >= desiredRatio && Contrast.ratioOfTones(lower, answer) >= desiredRatio) return answer;
			const lightOption = Contrast.lighter(upper, desiredRatio);
			const darkOption = Contrast.darker(lower, desiredRatio);
			const availables = [];
			if (lightOption !== -1) availables.push(lightOption);
			if (darkOption !== -1) availables.push(darkOption);
			if (DynamicColor.tonePrefersLightForeground(bgTone1) || DynamicColor.tonePrefersLightForeground(bgTone2)) return lightOption < 0 ? 100 : lightOption;
			if (availables.length === 1) return availables[0];
			return darkOption < 0 ? 0 : darkOption;
		}
	}
};
var spec2021$1 = new ColorCalculationDelegateImpl2021();
var spec2025$1 = new ColorCalculationDelegateImpl2025();
/**
* Returns the ColorCalculationDelegate for the given spec version.
*/
function getSpec$1(specVersion) {
	return specVersion === "2025" ? spec2025$1 : spec2021$1;
}
// node_modules/@material/material-color-utilities/palettes/tonal_palette.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
*  A convenience class for retrieving colors that are constant in hue and
*  chroma, but vary in tone.
*/
var TonalPalette = class TonalPalette {
	/**
	* @param argb ARGB representation of a color
	* @return Tones matching that color's hue and chroma.
	*/
	static fromInt(argb) {
		const hct = Hct.fromInt(argb);
		return TonalPalette.fromHct(hct);
	}
	/**
	* @param hct Hct
	* @return Tones matching that color's hue and chroma.
	*/
	static fromHct(hct) {
		return new TonalPalette(hct.hue, hct.chroma, hct);
	}
	/**
	* @param hue HCT hue
	* @param chroma HCT chroma
	* @return Tones matching hue and chroma.
	*/
	static fromHueAndChroma(hue, chroma) {
		const keyColor = new KeyColor(hue, chroma).create();
		return new TonalPalette(hue, chroma, keyColor);
	}
	constructor(hue, chroma, keyColor) {
		this.hue = hue;
		this.chroma = chroma;
		this.keyColor = keyColor;
		this.cache = /* @__PURE__ */ new Map();
	}
	/**
	* @param tone HCT tone, measured from 0 to 100.
	* @return ARGB representation of a color with that tone.
	*/
	tone(tone) {
		let argb = this.cache.get(tone);
		if (argb === void 0) {
			if (tone == 99 && Hct.isYellow(this.hue)) argb = this.averageArgb(this.tone(98), this.tone(100));
			else argb = Hct.from(this.hue, this.chroma, tone).toInt();
			this.cache.set(tone, argb);
		}
		return argb;
	}
	/**
	* @param tone HCT tone.
	* @return HCT representation of a color with that tone.
	*/
	getHct(tone) {
		return Hct.fromInt(this.tone(tone));
	}
	averageArgb(argb1, argb2) {
		const red1 = argb1 >>> 16 & 255;
		const green1 = argb1 >>> 8 & 255;
		const blue1 = argb1 & 255;
		const red2 = argb2 >>> 16 & 255;
		const green2 = argb2 >>> 8 & 255;
		const blue2 = argb2 & 255;
		const red = Math.round((red1 + red2) / 2);
		const green = Math.round((green1 + green2) / 2);
		const blue = Math.round((blue1 + blue2) / 2);
		return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
	}
};
/**
* Key color is a color that represents the hue and chroma of a tonal palette
*/
var KeyColor = class {
	constructor(hue, requestedChroma) {
		this.hue = hue;
		this.requestedChroma = requestedChroma;
		this.chromaCache = /* @__PURE__ */ new Map();
		this.maxChromaValue = 200;
	}
	/**
	* Creates a key color from a [hue] and a [chroma].
	* The key color is the first tone, starting from T50, matching the given hue
	* and chroma.
	*
	* @return Key color [Hct]
	*/
	create() {
		const pivotTone = 50;
		const toneStepSize = 1;
		const epsilon = .01;
		let lowerTone = 0;
		let upperTone = 100;
		while (lowerTone < upperTone) {
			const midTone = Math.floor((lowerTone + upperTone) / 2);
			const isAscending = this.maxChroma(midTone) < this.maxChroma(midTone + toneStepSize);
			if (this.maxChroma(midTone) >= this.requestedChroma - epsilon) {
				if (Math.abs(lowerTone - pivotTone) < Math.abs(upperTone - pivotTone)) upperTone = midTone;
				else {
					if (lowerTone === midTone) return Hct.from(this.hue, this.requestedChroma, lowerTone);
					lowerTone = midTone;
				}
			} else if (isAscending) lowerTone = midTone + toneStepSize;
			else upperTone = midTone;
		}
		return Hct.from(this.hue, this.requestedChroma, lowerTone);
	}
	maxChroma(tone) {
		if (this.chromaCache.has(tone)) return this.chromaCache.get(tone);
		const chroma = Hct.from(this.hue, this.maxChromaValue, tone).chroma;
		this.chromaCache.set(tone, chroma);
		return chroma;
	}
};
// node_modules/@material/material-color-utilities/temperature/temperature_cache.js
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Design utilities using color temperature theory.
*
* Analogous colors, complementary color, and cache to efficiently, lazily,
* generate data for calculations when needed.
*/
var TemperatureCache = class TemperatureCache {
	constructor(input) {
		this.input = input;
		this.hctsByTempCache = [];
		this.hctsByHueCache = [];
		this.tempsByHctCache = /* @__PURE__ */ new Map();
		this.inputRelativeTemperatureCache = -1;
		this.complementCache = null;
	}
	get hctsByTemp() {
		if (this.hctsByTempCache.length > 0) return this.hctsByTempCache;
		const hcts = this.hctsByHue.concat([this.input]);
		const temperaturesByHct = this.tempsByHct;
		hcts.sort((a, b) => temperaturesByHct.get(a) - temperaturesByHct.get(b));
		this.hctsByTempCache = hcts;
		return hcts;
	}
	get warmest() {
		return this.hctsByTemp[this.hctsByTemp.length - 1];
	}
	get coldest() {
		return this.hctsByTemp[0];
	}
	/**
	* A set of colors with differing hues, equidistant in temperature.
	*
	* In art, this is usually described as a set of 5 colors on a color wheel
	* divided into 12 sections. This method allows provision of either of those
	* values.
	*
	* Behavior is undefined when [count] or [divisions] is 0.
	* When divisions < count, colors repeat.
	*
	* [count] The number of colors to return, includes the input color.
	* [divisions] The number of divisions on the color wheel.
	*/
	analogous(count = 5, divisions = 12) {
		const startHue = Math.round(this.input.hue);
		const startHct = this.hctsByHue[startHue];
		let lastTemp = this.relativeTemperature(startHct);
		const allColors = [startHct];
		let absoluteTotalTempDelta = 0;
		for (let i = 0; i < 360; i++) {
			const hue = sanitizeDegreesInt(startHue + i);
			const hct = this.hctsByHue[hue];
			const temp = this.relativeTemperature(hct);
			const tempDelta = Math.abs(temp - lastTemp);
			lastTemp = temp;
			absoluteTotalTempDelta += tempDelta;
		}
		let hueAddend = 1;
		const tempStep = absoluteTotalTempDelta / divisions;
		let totalTempDelta = 0;
		lastTemp = this.relativeTemperature(startHct);
		while (allColors.length < divisions) {
			const hue = sanitizeDegreesInt(startHue + hueAddend);
			const hct = this.hctsByHue[hue];
			const temp = this.relativeTemperature(hct);
			const tempDelta = Math.abs(temp - lastTemp);
			totalTempDelta += tempDelta;
			const desiredTotalTempDeltaForIndex = allColors.length * tempStep;
			let indexSatisfied = totalTempDelta >= desiredTotalTempDeltaForIndex;
			let indexAddend = 1;
			while (indexSatisfied && allColors.length < divisions) {
				allColors.push(hct);
				const desiredTotalTempDeltaForIndex = (allColors.length + indexAddend) * tempStep;
				indexSatisfied = totalTempDelta >= desiredTotalTempDeltaForIndex;
				indexAddend++;
			}
			lastTemp = temp;
			hueAddend++;
			if (hueAddend > 360) {
				while (allColors.length < divisions) allColors.push(hct);
				break;
			}
		}
		const answers = [this.input];
		const increaseHueCount = Math.floor((count - 1) / 2);
		for (let i = 1; i < increaseHueCount + 1; i++) {
			let index = 0 - i;
			while (index < 0) index = allColors.length + index;
			if (index >= allColors.length) index = index % allColors.length;
			answers.splice(0, 0, allColors[index]);
		}
		const decreaseHueCount = count - increaseHueCount - 1;
		for (let i = 1; i < decreaseHueCount + 1; i++) {
			let index = i;
			while (index < 0) index = allColors.length + index;
			if (index >= allColors.length) index = index % allColors.length;
			answers.push(allColors[index]);
		}
		return answers;
	}
	/**
	* A color that complements the input color aesthetically.
	*
	* In art, this is usually described as being across the color wheel.
	* History of this shows intent as a color that is just as cool-warm as the
	* input color is warm-cool.
	*/
	get complement() {
		if (this.complementCache != null) return this.complementCache;
		const coldestHue = this.coldest.hue;
		const coldestTemp = this.tempsByHct.get(this.coldest);
		const warmestHue = this.warmest.hue;
		const range = this.tempsByHct.get(this.warmest) - coldestTemp;
		const startHueIsColdestToWarmest = TemperatureCache.isBetween(this.input.hue, coldestHue, warmestHue);
		const startHue = startHueIsColdestToWarmest ? warmestHue : coldestHue;
		const endHue = startHueIsColdestToWarmest ? coldestHue : warmestHue;
		const directionOfRotation = 1;
		let smallestError = 1e3;
		let answer = this.hctsByHue[Math.round(this.input.hue)];
		const complementRelativeTemp = 1 - this.inputRelativeTemperature;
		for (let hueAddend = 0; hueAddend <= 360; hueAddend += 1) {
			const hue = sanitizeDegreesDouble(startHue + directionOfRotation * hueAddend);
			if (!TemperatureCache.isBetween(hue, startHue, endHue)) continue;
			const possibleAnswer = this.hctsByHue[Math.round(hue)];
			const relativeTemp = (this.tempsByHct.get(possibleAnswer) - coldestTemp) / range;
			const error = Math.abs(complementRelativeTemp - relativeTemp);
			if (error < smallestError) {
				smallestError = error;
				answer = possibleAnswer;
			}
		}
		this.complementCache = answer;
		return this.complementCache;
	}
	/**
	* Temperature relative to all colors with the same chroma and tone.
	* Value on a scale from 0 to 1.
	*/
	relativeTemperature(hct) {
		const range = this.tempsByHct.get(this.warmest) - this.tempsByHct.get(this.coldest);
		const differenceFromColdest = this.tempsByHct.get(hct) - this.tempsByHct.get(this.coldest);
		if (range === 0) return .5;
		return differenceFromColdest / range;
	}
	/** Relative temperature of the input color. See [relativeTemperature]. */
	get inputRelativeTemperature() {
		if (this.inputRelativeTemperatureCache >= 0) return this.inputRelativeTemperatureCache;
		this.inputRelativeTemperatureCache = this.relativeTemperature(this.input);
		return this.inputRelativeTemperatureCache;
	}
	/** A Map with keys of HCTs in [hctsByTemp], values of raw temperature. */
	get tempsByHct() {
		if (this.tempsByHctCache.size > 0) return this.tempsByHctCache;
		const allHcts = this.hctsByHue.concat([this.input]);
		const temperaturesByHct = /* @__PURE__ */ new Map();
		for (const e of allHcts) temperaturesByHct.set(e, TemperatureCache.rawTemperature(e));
		this.tempsByHctCache = temperaturesByHct;
		return temperaturesByHct;
	}
	/**
	* HCTs for all hues, with the same chroma/tone as the input.
	* Sorted ascending, hue 0 to 360.
	*/
	get hctsByHue() {
		if (this.hctsByHueCache.length > 0) return this.hctsByHueCache;
		const hcts = [];
		for (let hue = 0; hue <= 360; hue += 1) {
			const colorAtHue = Hct.from(hue, this.input.chroma, this.input.tone);
			hcts.push(colorAtHue);
		}
		this.hctsByHueCache = hcts;
		return this.hctsByHueCache;
	}
	/** Determines if an angle is between two other angles, rotating clockwise. */
	static isBetween(angle, a, b) {
		if (a < b) return a <= angle && angle <= b;
		return a <= angle || angle <= b;
	}
	/**
	* Value representing cool-warm factor of a color.
	* Values below 0 are considered cool, above, warm.
	*
	* Color science has researched emotion and harmony, which art uses to select
	* colors. Warm-cool is the foundation of analogous and complementary colors.
	* See:
	* - Li-Chen Ou's Chapter 19 in Handbook of Color Psychology (2015).
	* - Josef Albers' Interaction of Color chapters 19 and 21.
	*
	* Implementation of Ou, Woodcock and Wright's algorithm, which uses
	* L*a*b* / LCH color space.
	* Return value has these properties:
	* - Values below 0 are cool, above 0 are warm.
	* - Lower bound: -0.52 - (chroma ^ 1.07 / 20). L*a*b* chroma is infinite.
	*   Assuming max of 130 chroma, -9.66.
	* - Upper bound: -0.52 + (chroma ^ 1.07 / 20). L*a*b* chroma is infinite.
	*   Assuming max of 130 chroma, 8.61.
	*/
	static rawTemperature(color) {
		const lab = labFromArgb(color.toInt());
		const hue = sanitizeDegreesDouble(Math.atan2(lab[2], lab[1]) * 180 / Math.PI);
		const chroma = Math.sqrt(lab[1] * lab[1] + lab[2] * lab[2]);
		return -.5 + .02 * Math.pow(chroma, 1.07) * Math.cos(sanitizeDegreesDouble(hue - 50) * Math.PI / 180);
	}
};
// node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A class containing a value that changes with the contrast level.
*
* Usually represents the contrast requirements for a dynamic color on its
* background. The four values correspond to values for contrast levels -1.0,
* 0.0, 0.5, and 1.0, respectively.
*/
var ContrastCurve = class {
	/**
	* Creates a `ContrastCurve` object.
	*
	* @param low Value for contrast level -1.0
	* @param normal Value for contrast level 0.0
	* @param medium Value for contrast level 0.5
	* @param high Value for contrast level 1.0
	*/
	constructor(low, normal, medium, high) {
		this.low = low;
		this.normal = normal;
		this.medium = medium;
		this.high = high;
	}
	/**
	* Returns the value at a given contrast level.
	*
	* @param contrastLevel The contrast level. 0.0 is the default (normal); -1.0
	*     is the lowest; 1.0 is the highest.
	* @return The value. For contrast ratios, a number between 1.0 and 21.0.
	*/
	get(contrastLevel) {
		if (contrastLevel <= -1) return this.low;
		else if (contrastLevel < 0) return lerp(this.low, this.normal, (contrastLevel - -1) / 1);
		else if (contrastLevel < .5) return lerp(this.normal, this.medium, (contrastLevel - 0) / .5);
		else if (contrastLevel < 1) return lerp(this.medium, this.high, (contrastLevel - .5) / .5);
		else return this.high;
	}
};
// node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Documents a constraint between two DynamicColors, in which their tones must
* have a certain distance from each other.
*
* Prefer a DynamicColor with a background, this is for special cases when
* designers want tonal distance, literally contrast, between two colors that
* don't have a background / foreground relationship or a contrast guarantee.
*/
var ToneDeltaPair = class {
	/**
	* Documents a constraint in tone distance between two DynamicColors.
	*
	* The polarity is an adjective that describes "A", compared to "B".
	*
	* For instance, ToneDeltaPair(A, B, 15, 'darker', 'exact') states that
	* A's tone should be exactly 15 darker than B's.
	*
	* 'relative_darker' and 'relative_lighter' describes the tone adjustment
	* relative to the surface color trend (white in light mode; black in dark
	* mode). For instance, ToneDeltaPair(A, B, 10, 'relative_lighter',
	* 'farther') states that A should be at least 10 lighter than B in light
	* mode, and at least 10 darker than B in dark mode.
	*
	* @param roleA The first role in a pair.
	* @param roleB The second role in a pair.
	* @param delta Required difference between tones. Absolute value, negative
	* values have undefined behavior.
	* @param polarity The relative relation between tones of roleA and roleB,
	* as described above.
	* @param constraint How to fulfill the tone delta pair constraint.
	* @param stayTogether Whether these two roles should stay on the same side
	* of the "awkward zone" (T50-59). This is necessary for certain cases where
	* one role has two backgrounds.
	*/
	constructor(roleA, roleB, delta, polarity, stayTogether, constraint) {
		this.roleA = roleA;
		this.roleB = roleB;
		this.delta = delta;
		this.polarity = polarity;
		this.stayTogether = stayTogether;
		this.constraint = constraint;
		this.constraint = constraint ?? "exact";
	}
};
// node_modules/@material/material-color-utilities/dynamiccolor/variant.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Set of themes supported by Dynamic Color.
* Instantiate the corresponding subclass, ex. SchemeTonalSpot, to create
* colors corresponding to the theme.
*/
var Variant;
(function(Variant) {
	Variant[Variant["MONOCHROME"] = 0] = "MONOCHROME";
	Variant[Variant["NEUTRAL"] = 1] = "NEUTRAL";
	Variant[Variant["TONAL_SPOT"] = 2] = "TONAL_SPOT";
	Variant[Variant["VIBRANT"] = 3] = "VIBRANT";
	Variant[Variant["EXPRESSIVE"] = 4] = "EXPRESSIVE";
	Variant[Variant["FIDELITY"] = 5] = "FIDELITY";
	Variant[Variant["CONTENT"] = 6] = "CONTENT";
	Variant[Variant["RAINBOW"] = 7] = "RAINBOW";
	Variant[Variant["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";
})(Variant || (Variant = {}));
// node_modules/@material/material-color-utilities/dynamiccolor/color_spec_2021.js
/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Returns true if the scheme is Fidelity or Content.
*/
function isFidelity(scheme) {
	return scheme.variant === Variant.FIDELITY || scheme.variant === Variant.CONTENT;
}
/**
* Returns true if the scheme is Monochrome.
*/
function isMonochrome(scheme) {
	return scheme.variant === Variant.MONOCHROME;
}
/**
* Returns the desired chroma for a given tone at a specific hue.
*
* @param hue The given hue.
* @param chroma The target chroma.
* @param tone The tone to start with.
* @param byDecreasingTone Whether to search for lower tones.
*/
function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
	let answer = tone;
	let closestToChroma = Hct.from(hue, chroma, tone);
	if (closestToChroma.chroma < chroma) {
		let chromaPeak = closestToChroma.chroma;
		while (closestToChroma.chroma < chroma) {
			answer += byDecreasingTone ? -1 : 1;
			const potentialSolution = Hct.from(hue, chroma, answer);
			if (chromaPeak > potentialSolution.chroma) break;
			if (Math.abs(potentialSolution.chroma - chroma) < .4) break;
			if (Math.abs(potentialSolution.chroma - chroma) < Math.abs(closestToChroma.chroma - chroma)) closestToChroma = potentialSolution;
			chromaPeak = Math.max(chromaPeak, potentialSolution.chroma);
		}
	}
	return answer;
}
/**
* A delegate for the dynamic color spec of a DynamicScheme in the 2021 spec.
*/
var ColorSpecDelegateImpl2021 = class {
	primaryPaletteKeyColor() {
		return DynamicColor.fromPalette({
			name: "primary_palette_key_color",
			palette: (s) => s.primaryPalette,
			tone: (s) => s.primaryPalette.keyColor.tone
		});
	}
	secondaryPaletteKeyColor() {
		return DynamicColor.fromPalette({
			name: "secondary_palette_key_color",
			palette: (s) => s.secondaryPalette,
			tone: (s) => s.secondaryPalette.keyColor.tone
		});
	}
	tertiaryPaletteKeyColor() {
		return DynamicColor.fromPalette({
			name: "tertiary_palette_key_color",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => s.tertiaryPalette.keyColor.tone
		});
	}
	neutralPaletteKeyColor() {
		return DynamicColor.fromPalette({
			name: "neutral_palette_key_color",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.neutralPalette.keyColor.tone
		});
	}
	neutralVariantPaletteKeyColor() {
		return DynamicColor.fromPalette({
			name: "neutral_variant_palette_key_color",
			palette: (s) => s.neutralVariantPalette,
			tone: (s) => s.neutralVariantPalette.keyColor.tone
		});
	}
	errorPaletteKeyColor() {
		return DynamicColor.fromPalette({
			name: "error_palette_key_color",
			palette: (s) => s.errorPalette,
			tone: (s) => s.errorPalette.keyColor.tone
		});
	}
	background() {
		return DynamicColor.fromPalette({
			name: "background",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 6 : 98,
			isBackground: true
		});
	}
	onBackground() {
		return DynamicColor.fromPalette({
			name: "on_background",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 90 : 10,
			background: (s) => this.background(),
			contrastCurve: (s) => new ContrastCurve(3, 3, 4.5, 7)
		});
	}
	surface() {
		return DynamicColor.fromPalette({
			name: "surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 6 : 98,
			isBackground: true
		});
	}
	surfaceDim() {
		return DynamicColor.fromPalette({
			name: "surface_dim",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 6 : new ContrastCurve(87, 87, 80, 75).get(s.contrastLevel),
			isBackground: true
		});
	}
	surfaceBright() {
		return DynamicColor.fromPalette({
			name: "surface_bright",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(24, 24, 29, 34).get(s.contrastLevel) : 98,
			isBackground: true
		});
	}
	surfaceContainerLowest() {
		return DynamicColor.fromPalette({
			name: "surface_container_lowest",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(4, 4, 2, 0).get(s.contrastLevel) : 100,
			isBackground: true
		});
	}
	surfaceContainerLow() {
		return DynamicColor.fromPalette({
			name: "surface_container_low",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(10, 10, 11, 12).get(s.contrastLevel) : new ContrastCurve(96, 96, 96, 95).get(s.contrastLevel),
			isBackground: true
		});
	}
	surfaceContainer() {
		return DynamicColor.fromPalette({
			name: "surface_container",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(12, 12, 16, 20).get(s.contrastLevel) : new ContrastCurve(94, 94, 92, 90).get(s.contrastLevel),
			isBackground: true
		});
	}
	surfaceContainerHigh() {
		return DynamicColor.fromPalette({
			name: "surface_container_high",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(17, 17, 21, 25).get(s.contrastLevel) : new ContrastCurve(92, 92, 88, 85).get(s.contrastLevel),
			isBackground: true
		});
	}
	surfaceContainerHighest() {
		return DynamicColor.fromPalette({
			name: "surface_container_highest",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(22, 22, 26, 30).get(s.contrastLevel) : new ContrastCurve(90, 90, 84, 80).get(s.contrastLevel),
			isBackground: true
		});
	}
	onSurface() {
		return DynamicColor.fromPalette({
			name: "on_surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 90 : 10,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
		});
	}
	surfaceVariant() {
		return DynamicColor.fromPalette({
			name: "surface_variant",
			palette: (s) => s.neutralVariantPalette,
			tone: (s) => s.isDark ? 30 : 90,
			isBackground: true
		});
	}
	onSurfaceVariant() {
		return DynamicColor.fromPalette({
			name: "on_surface_variant",
			palette: (s) => s.neutralVariantPalette,
			tone: (s) => s.isDark ? 80 : 30,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
		});
	}
	inverseSurface() {
		return DynamicColor.fromPalette({
			name: "inverse_surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 90 : 20,
			isBackground: true
		});
	}
	inverseOnSurface() {
		return DynamicColor.fromPalette({
			name: "inverse_on_surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 20 : 95,
			background: (s) => this.inverseSurface(),
			contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
		});
	}
	outline() {
		return DynamicColor.fromPalette({
			name: "outline",
			palette: (s) => s.neutralVariantPalette,
			tone: (s) => s.isDark ? 60 : 50,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1.5, 3, 4.5, 7)
		});
	}
	outlineVariant() {
		return DynamicColor.fromPalette({
			name: "outline_variant",
			palette: (s) => s.neutralVariantPalette,
			tone: (s) => s.isDark ? 30 : 80,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5)
		});
	}
	shadow() {
		return DynamicColor.fromPalette({
			name: "shadow",
			palette: (s) => s.neutralPalette,
			tone: (s) => 0
		});
	}
	scrim() {
		return DynamicColor.fromPalette({
			name: "scrim",
			palette: (s) => s.neutralPalette,
			tone: (s) => 0
		});
	}
	surfaceTint() {
		return DynamicColor.fromPalette({
			name: "surface_tint",
			palette: (s) => s.primaryPalette,
			tone: (s) => s.isDark ? 80 : 40,
			isBackground: true
		});
	}
	primary() {
		return DynamicColor.fromPalette({
			name: "primary",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 100 : 0;
				return s.isDark ? 80 : 40;
			},
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 7),
			toneDeltaPair: (s) => new ToneDeltaPair(this.primaryContainer(), this.primary(), 10, "nearer", false)
		});
	}
	primaryDim() {}
	onPrimary() {
		return DynamicColor.fromPalette({
			name: "on_primary",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 10 : 90;
				return s.isDark ? 20 : 100;
			},
			background: (s) => this.primary(),
			contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
		});
	}
	primaryContainer() {
		return DynamicColor.fromPalette({
			name: "primary_container",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (isFidelity(s)) return s.sourceColorHct.tone;
				if (isMonochrome(s)) return s.isDark ? 85 : 25;
				return s.isDark ? 30 : 90;
			},
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.primaryContainer(), this.primary(), 10, "nearer", false)
		});
	}
	onPrimaryContainer() {
		return DynamicColor.fromPalette({
			name: "on_primary_container",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (isFidelity(s)) return DynamicColor.foregroundTone(this.primaryContainer().tone(s), 4.5);
				if (isMonochrome(s)) return s.isDark ? 0 : 100;
				return s.isDark ? 90 : 30;
			},
			background: (s) => this.primaryContainer(),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
		});
	}
	inversePrimary() {
		return DynamicColor.fromPalette({
			name: "inverse_primary",
			palette: (s) => s.primaryPalette,
			tone: (s) => s.isDark ? 40 : 80,
			background: (s) => this.inverseSurface(),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 7)
		});
	}
	secondary() {
		return DynamicColor.fromPalette({
			name: "secondary",
			palette: (s) => s.secondaryPalette,
			tone: (s) => s.isDark ? 80 : 40,
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 7),
			toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryContainer(), this.secondary(), 10, "nearer", false)
		});
	}
	secondaryDim() {}
	onSecondary() {
		return DynamicColor.fromPalette({
			name: "on_secondary",
			palette: (s) => s.secondaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 10 : 100;
				else return s.isDark ? 20 : 100;
			},
			background: (s) => this.secondary(),
			contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
		});
	}
	secondaryContainer() {
		return DynamicColor.fromPalette({
			name: "secondary_container",
			palette: (s) => s.secondaryPalette,
			tone: (s) => {
				const initialTone = s.isDark ? 30 : 90;
				if (isMonochrome(s)) return s.isDark ? 30 : 85;
				if (!isFidelity(s)) return initialTone;
				return findDesiredChromaByTone(s.secondaryPalette.hue, s.secondaryPalette.chroma, initialTone, s.isDark ? false : true);
			},
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryContainer(), this.secondary(), 10, "nearer", false)
		});
	}
	onSecondaryContainer() {
		return DynamicColor.fromPalette({
			name: "on_secondary_container",
			palette: (s) => s.secondaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 90 : 10;
				if (!isFidelity(s)) return s.isDark ? 90 : 30;
				return DynamicColor.foregroundTone(this.secondaryContainer().tone(s), 4.5);
			},
			background: (s) => this.secondaryContainer(),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
		});
	}
	tertiary() {
		return DynamicColor.fromPalette({
			name: "tertiary",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 90 : 25;
				return s.isDark ? 80 : 40;
			},
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 7),
			toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryContainer(), this.tertiary(), 10, "nearer", false)
		});
	}
	tertiaryDim() {}
	onTertiary() {
		return DynamicColor.fromPalette({
			name: "on_tertiary",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 10 : 90;
				return s.isDark ? 20 : 100;
			},
			background: (s) => this.tertiary(),
			contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
		});
	}
	tertiaryContainer() {
		return DynamicColor.fromPalette({
			name: "tertiary_container",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 60 : 49;
				if (!isFidelity(s)) return s.isDark ? 30 : 90;
				const proposedHct = s.tertiaryPalette.getHct(s.sourceColorHct.tone);
				return DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
			},
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryContainer(), this.tertiary(), 10, "nearer", false)
		});
	}
	onTertiaryContainer() {
		return DynamicColor.fromPalette({
			name: "on_tertiary_container",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 0 : 100;
				if (!isFidelity(s)) return s.isDark ? 90 : 30;
				return DynamicColor.foregroundTone(this.tertiaryContainer().tone(s), 4.5);
			},
			background: (s) => this.tertiaryContainer(),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
		});
	}
	error() {
		return DynamicColor.fromPalette({
			name: "error",
			palette: (s) => s.errorPalette,
			tone: (s) => s.isDark ? 80 : 40,
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 7),
			toneDeltaPair: (s) => new ToneDeltaPair(this.errorContainer(), this.error(), 10, "nearer", false)
		});
	}
	errorDim() {}
	onError() {
		return DynamicColor.fromPalette({
			name: "on_error",
			palette: (s) => s.errorPalette,
			tone: (s) => s.isDark ? 20 : 100,
			background: (s) => this.error(),
			contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
		});
	}
	errorContainer() {
		return DynamicColor.fromPalette({
			name: "error_container",
			palette: (s) => s.errorPalette,
			tone: (s) => s.isDark ? 30 : 90,
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.errorContainer(), this.error(), 10, "nearer", false)
		});
	}
	onErrorContainer() {
		return DynamicColor.fromPalette({
			name: "on_error_container",
			palette: (s) => s.errorPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 90 : 10;
				return s.isDark ? 90 : 30;
			},
			background: (s) => this.errorContainer(),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
		});
	}
	primaryFixed() {
		return DynamicColor.fromPalette({
			name: "primary_fixed",
			palette: (s) => s.primaryPalette,
			tone: (s) => isMonochrome(s) ? 40 : 90,
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.primaryFixed(), this.primaryFixedDim(), 10, "lighter", true)
		});
	}
	primaryFixedDim() {
		return DynamicColor.fromPalette({
			name: "primary_fixed_dim",
			palette: (s) => s.primaryPalette,
			tone: (s) => isMonochrome(s) ? 30 : 80,
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.primaryFixed(), this.primaryFixedDim(), 10, "lighter", true)
		});
	}
	onPrimaryFixed() {
		return DynamicColor.fromPalette({
			name: "on_primary_fixed",
			palette: (s) => s.primaryPalette,
			tone: (s) => isMonochrome(s) ? 100 : 10,
			background: (s) => this.primaryFixedDim(),
			secondBackground: (s) => this.primaryFixed(),
			contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
		});
	}
	onPrimaryFixedVariant() {
		return DynamicColor.fromPalette({
			name: "on_primary_fixed_variant",
			palette: (s) => s.primaryPalette,
			tone: (s) => isMonochrome(s) ? 90 : 30,
			background: (s) => this.primaryFixedDim(),
			secondBackground: (s) => this.primaryFixed(),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
		});
	}
	secondaryFixed() {
		return DynamicColor.fromPalette({
			name: "secondary_fixed",
			palette: (s) => s.secondaryPalette,
			tone: (s) => isMonochrome(s) ? 80 : 90,
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryFixed(), this.secondaryFixedDim(), 10, "lighter", true)
		});
	}
	secondaryFixedDim() {
		return DynamicColor.fromPalette({
			name: "secondary_fixed_dim",
			palette: (s) => s.secondaryPalette,
			tone: (s) => isMonochrome(s) ? 70 : 80,
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryFixed(), this.secondaryFixedDim(), 10, "lighter", true)
		});
	}
	onSecondaryFixed() {
		return DynamicColor.fromPalette({
			name: "on_secondary_fixed",
			palette: (s) => s.secondaryPalette,
			tone: (s) => 10,
			background: (s) => this.secondaryFixedDim(),
			secondBackground: (s) => this.secondaryFixed(),
			contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
		});
	}
	onSecondaryFixedVariant() {
		return DynamicColor.fromPalette({
			name: "on_secondary_fixed_variant",
			palette: (s) => s.secondaryPalette,
			tone: (s) => isMonochrome(s) ? 25 : 30,
			background: (s) => this.secondaryFixedDim(),
			secondBackground: (s) => this.secondaryFixed(),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
		});
	}
	tertiaryFixed() {
		return DynamicColor.fromPalette({
			name: "tertiary_fixed",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => isMonochrome(s) ? 40 : 90,
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryFixed(), this.tertiaryFixedDim(), 10, "lighter", true)
		});
	}
	tertiaryFixedDim() {
		return DynamicColor.fromPalette({
			name: "tertiary_fixed_dim",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => isMonochrome(s) ? 30 : 80,
			isBackground: true,
			background: (s) => this.highestSurface(s),
			contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryFixed(), this.tertiaryFixedDim(), 10, "lighter", true)
		});
	}
	onTertiaryFixed() {
		return DynamicColor.fromPalette({
			name: "on_tertiary_fixed",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => isMonochrome(s) ? 100 : 10,
			background: (s) => this.tertiaryFixedDim(),
			secondBackground: (s) => this.tertiaryFixed(),
			contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
		});
	}
	onTertiaryFixedVariant() {
		return DynamicColor.fromPalette({
			name: "on_tertiary_fixed_variant",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => isMonochrome(s) ? 90 : 30,
			background: (s) => this.tertiaryFixedDim(),
			secondBackground: (s) => this.tertiaryFixed(),
			contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
		});
	}
	highestSurface(s) {
		return s.isDark ? this.surfaceBright() : this.surfaceDim();
	}
};
// node_modules/@material/material-color-utilities/dynamiccolor/color_spec_2025.js
/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Returns the maximum tone for a given chroma in the palette.
*
* @param palette The tonal palette to use.
* @param lowerBound The lower bound of the tone.
* @param upperBound The upper bound of the tone.
*/
function tMaxC(palette, lowerBound = 0, upperBound = 100, chromaMultiplier = 1) {
	return clampDouble(lowerBound, upperBound, findBestToneForChroma(palette.hue, palette.chroma * chromaMultiplier, 100, true));
}
/**
* Returns the minimum tone for a given chroma in the palette.
*
* @param palette The tonal palette to use.
* @param lowerBound The lower bound of the tone.
* @param upperBound The upper bound of the tone.
*/
function tMinC(palette, lowerBound = 0, upperBound = 100) {
	return clampDouble(lowerBound, upperBound, findBestToneForChroma(palette.hue, palette.chroma, 0, false));
}
/**
* Searches for the best tone with a given chroma from a given tone at a
* specific hue.
*
* @param hue The given hue.
* @param chroma The target chroma.
* @param tone The tone to start with.
* @param byDecreasingTone Whether to search for lower tones.
*/
function findBestToneForChroma(hue, chroma, tone, byDecreasingTone) {
	let answer = tone;
	let bestCandidate = Hct.from(hue, chroma, answer);
	while (bestCandidate.chroma < chroma) {
		if (tone < 0 || tone > 100) break;
		tone += byDecreasingTone ? -1 : 1;
		const newCandidate = Hct.from(hue, chroma, tone);
		if (bestCandidate.chroma < newCandidate.chroma) {
			bestCandidate = newCandidate;
			answer = tone;
		}
	}
	return answer;
}
/**
* Returns the contrast curve for a given default contrast.
*
* @param defaultContrast The default contrast to use.
*/
function getCurve(defaultContrast) {
	if (defaultContrast === 1.5) return new ContrastCurve(1.5, 1.5, 3, 5.5);
	else if (defaultContrast === 3) return new ContrastCurve(3, 3, 4.5, 7);
	else if (defaultContrast === 4.5) return new ContrastCurve(4.5, 4.5, 7, 11);
	else if (defaultContrast === 6) return new ContrastCurve(6, 6, 7, 11);
	else if (defaultContrast === 7) return new ContrastCurve(7, 7, 11, 21);
	else if (defaultContrast === 9) return new ContrastCurve(9, 9, 11, 21);
	else if (defaultContrast === 11) return new ContrastCurve(11, 11, 21, 21);
	else if (defaultContrast === 21) return new ContrastCurve(21, 21, 21, 21);
	else return new ContrastCurve(defaultContrast, defaultContrast, 7, 21);
}
/**
* A delegate for the dynamic color spec of a DynamicScheme in the 2025 spec.
*/
var ColorSpecDelegateImpl2025 = class extends ColorSpecDelegateImpl2021 {
	surface() {
		const color2025 = DynamicColor.fromPalette({
			name: "surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => {
				super.surface().tone(s);
				if (s.platform === "phone") {
					if (s.isDark) return 4;
					else if (Hct.isYellow(s.neutralPalette.hue)) return 99;
					else if (s.variant === Variant.VIBRANT) return 97;
					else return 98;
				} else return 0;
			},
			isBackground: true
		});
		return extendSpecVersion(super.surface(), "2025", color2025);
	}
	surfaceDim() {
		const color2025 = DynamicColor.fromPalette({
			name: "surface_dim",
			palette: (s) => s.neutralPalette,
			tone: (s) => {
				if (s.isDark) return 4;
				else if (Hct.isYellow(s.neutralPalette.hue)) return 90;
				else if (s.variant === Variant.VIBRANT) return 85;
				else return 87;
			},
			isBackground: true,
			chromaMultiplier: (s) => {
				if (!s.isDark) {
					if (s.variant === Variant.NEUTRAL) return 2.5;
					else if (s.variant === Variant.TONAL_SPOT) return 1.7;
					else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 2.7 : 1.75;
					else if (s.variant === Variant.VIBRANT) return 1.36;
				}
				return 1;
			}
		});
		return extendSpecVersion(super.surfaceDim(), "2025", color2025);
	}
	surfaceBright() {
		const color2025 = DynamicColor.fromPalette({
			name: "surface_bright",
			palette: (s) => s.neutralPalette,
			tone: (s) => {
				if (s.isDark) return 18;
				else if (Hct.isYellow(s.neutralPalette.hue)) return 99;
				else if (s.variant === Variant.VIBRANT) return 97;
				else return 98;
			},
			isBackground: true,
			chromaMultiplier: (s) => {
				if (s.isDark) {
					if (s.variant === Variant.NEUTRAL) return 2.5;
					else if (s.variant === Variant.TONAL_SPOT) return 1.7;
					else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 2.7 : 1.75;
					else if (s.variant === Variant.VIBRANT) return 1.36;
				}
				return 1;
			}
		});
		return extendSpecVersion(super.surfaceBright(), "2025", color2025);
	}
	surfaceContainerLowest() {
		const color2025 = DynamicColor.fromPalette({
			name: "surface_container_lowest",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 0 : 100,
			isBackground: true
		});
		return extendSpecVersion(super.surfaceContainerLowest(), "2025", color2025);
	}
	surfaceContainerLow() {
		const color2025 = DynamicColor.fromPalette({
			name: "surface_container_low",
			palette: (s) => s.neutralPalette,
			tone: (s) => {
				if (s.platform === "phone") {
					if (s.isDark) return 6;
					else if (Hct.isYellow(s.neutralPalette.hue)) return 98;
					else if (s.variant === Variant.VIBRANT) return 95;
					else return 96;
				} else return 15;
			},
			isBackground: true,
			chromaMultiplier: (s) => {
				if (s.platform === "phone") {
					if (s.variant === Variant.NEUTRAL) return 1.3;
					else if (s.variant === Variant.TONAL_SPOT) return 1.25;
					else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 1.3 : 1.15;
					else if (s.variant === Variant.VIBRANT) return 1.08;
				}
				return 1;
			}
		});
		return extendSpecVersion(super.surfaceContainerLow(), "2025", color2025);
	}
	surfaceContainer() {
		const color2025 = DynamicColor.fromPalette({
			name: "surface_container",
			palette: (s) => s.neutralPalette,
			tone: (s) => {
				if (s.platform === "phone") {
					if (s.isDark) return 9;
					else if (Hct.isYellow(s.neutralPalette.hue)) return 96;
					else if (s.variant === Variant.VIBRANT) return 92;
					else return 94;
				} else return 20;
			},
			isBackground: true,
			chromaMultiplier: (s) => {
				if (s.platform === "phone") {
					if (s.variant === Variant.NEUTRAL) return 1.6;
					else if (s.variant === Variant.TONAL_SPOT) return 1.4;
					else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 1.6 : 1.3;
					else if (s.variant === Variant.VIBRANT) return 1.15;
				}
				return 1;
			}
		});
		return extendSpecVersion(super.surfaceContainer(), "2025", color2025);
	}
	surfaceContainerHigh() {
		const color2025 = DynamicColor.fromPalette({
			name: "surface_container_high",
			palette: (s) => s.neutralPalette,
			tone: (s) => {
				if (s.platform === "phone") {
					if (s.isDark) return 12;
					else if (Hct.isYellow(s.neutralPalette.hue)) return 94;
					else if (s.variant === Variant.VIBRANT) return 90;
					else return 92;
				} else return 25;
			},
			isBackground: true,
			chromaMultiplier: (s) => {
				if (s.platform === "phone") {
					if (s.variant === Variant.NEUTRAL) return 1.9;
					else if (s.variant === Variant.TONAL_SPOT) return 1.5;
					else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 1.95 : 1.45;
					else if (s.variant === Variant.VIBRANT) return 1.22;
				}
				return 1;
			}
		});
		return extendSpecVersion(super.surfaceContainerHigh(), "2025", color2025);
	}
	surfaceContainerHighest() {
		const color2025 = DynamicColor.fromPalette({
			name: "surface_container_highest",
			palette: (s) => s.neutralPalette,
			tone: (s) => {
				if (s.isDark) return 15;
				else if (Hct.isYellow(s.neutralPalette.hue)) return 92;
				else if (s.variant === Variant.VIBRANT) return 88;
				else return 90;
			},
			isBackground: true,
			chromaMultiplier: (s) => {
				if (s.variant === Variant.NEUTRAL) return 2.2;
				else if (s.variant === Variant.TONAL_SPOT) return 1.7;
				else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 2.3 : 1.6;
				else if (s.variant === Variant.VIBRANT) return 1.29;
				else return 1;
			}
		});
		return extendSpecVersion(super.surfaceContainerHighest(), "2025", color2025);
	}
	onSurface() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => {
				if (s.variant === Variant.VIBRANT) return tMaxC(s.neutralPalette, 0, 100, 1.1);
				else return DynamicColor.getInitialToneFromBackground((s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh())(s);
			},
			chromaMultiplier: (s) => {
				if (s.platform === "phone") {
					if (s.variant === Variant.NEUTRAL) return 2.2;
					else if (s.variant === Variant.TONAL_SPOT) return 1.7;
					else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? s.isDark ? 3 : 2.3 : 1.6;
				}
				return 1;
			},
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
			contrastCurve: (s) => s.isDark && s.platform === "phone" ? getCurve(11) : getCurve(9)
		});
		return extendSpecVersion(super.onSurface(), "2025", color2025);
	}
	onSurfaceVariant() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_surface_variant",
			palette: (s) => s.neutralPalette,
			chromaMultiplier: (s) => {
				if (s.platform === "phone") {
					if (s.variant === Variant.NEUTRAL) return 2.2;
					else if (s.variant === Variant.TONAL_SPOT) return 1.7;
					else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? s.isDark ? 3 : 2.3 : 1.6;
				}
				return 1;
			},
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
			contrastCurve: (s) => s.platform === "phone" ? s.isDark ? getCurve(6) : getCurve(4.5) : getCurve(7)
		});
		return extendSpecVersion(super.onSurfaceVariant(), "2025", color2025);
	}
	outline() {
		const color2025 = DynamicColor.fromPalette({
			name: "outline",
			palette: (s) => s.neutralPalette,
			chromaMultiplier: (s) => {
				if (s.platform === "phone") {
					if (s.variant === Variant.NEUTRAL) return 2.2;
					else if (s.variant === Variant.TONAL_SPOT) return 1.7;
					else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? s.isDark ? 3 : 2.3 : 1.6;
				}
				return 1;
			},
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(3) : getCurve(4.5)
		});
		return extendSpecVersion(super.outline(), "2025", color2025);
	}
	outlineVariant() {
		const color2025 = DynamicColor.fromPalette({
			name: "outline_variant",
			palette: (s) => s.neutralPalette,
			chromaMultiplier: (s) => {
				if (s.platform === "phone") {
					if (s.variant === Variant.NEUTRAL) return 2.2;
					else if (s.variant === Variant.TONAL_SPOT) return 1.7;
					else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? s.isDark ? 3 : 2.3 : 1.6;
				}
				return 1;
			},
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(1.5) : getCurve(3)
		});
		return extendSpecVersion(super.outlineVariant(), "2025", color2025);
	}
	inverseSurface() {
		const color2025 = DynamicColor.fromPalette({
			name: "inverse_surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 98 : 4,
			isBackground: true
		});
		return extendSpecVersion(super.inverseSurface(), "2025", color2025);
	}
	inverseOnSurface() {
		const color2025 = DynamicColor.fromPalette({
			name: "inverse_on_surface",
			palette: (s) => s.neutralPalette,
			background: (s) => this.inverseSurface(),
			contrastCurve: (s) => getCurve(7)
		});
		return extendSpecVersion(super.inverseOnSurface(), "2025", color2025);
	}
	primary() {
		const color2025 = DynamicColor.fromPalette({
			name: "primary",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (s.variant === Variant.NEUTRAL) {
					if (s.platform === "phone") return s.isDark ? 80 : 40;
					else return 90;
				} else if (s.variant === Variant.TONAL_SPOT) {
					if (s.platform === "phone") {
						if (s.isDark) return 80;
						else return tMaxC(s.primaryPalette);
					} else return tMaxC(s.primaryPalette, 0, 90);
				} else if (s.variant === Variant.EXPRESSIVE) {
					if (s.platform === "phone") return tMaxC(s.primaryPalette, 0, Hct.isYellow(s.primaryPalette.hue) ? 25 : Hct.isCyan(s.primaryPalette.hue) ? 88 : 98);
					else return tMaxC(s.primaryPalette);
				} else if (s.platform === "phone") return tMaxC(s.primaryPalette, 0, Hct.isCyan(s.primaryPalette.hue) ? 88 : 98);
				else return tMaxC(s.primaryPalette);
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(4.5) : getCurve(7),
			toneDeltaPair: (s) => s.platform === "phone" ? new ToneDeltaPair(this.primaryContainer(), this.primary(), 5, "relative_lighter", true, "farther") : void 0
		});
		return extendSpecVersion(super.primary(), "2025", color2025);
	}
	primaryDim() {
		return DynamicColor.fromPalette({
			name: "primary_dim",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (s.variant === Variant.NEUTRAL) return 85;
				else if (s.variant === Variant.TONAL_SPOT) return tMaxC(s.primaryPalette, 0, 90);
				else return tMaxC(s.primaryPalette);
			},
			isBackground: true,
			background: (s) => this.surfaceContainerHigh(),
			contrastCurve: (s) => getCurve(4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.primaryDim(), this.primary(), 5, "darker", true, "farther")
		});
	}
	onPrimary() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_primary",
			palette: (s) => s.primaryPalette,
			background: (s) => s.platform === "phone" ? this.primary() : this.primaryDim(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
		});
		return extendSpecVersion(super.onPrimary(), "2025", color2025);
	}
	primaryContainer() {
		const color2025 = DynamicColor.fromPalette({
			name: "primary_container",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (s.platform === "watch") return 30;
				else if (s.variant === Variant.NEUTRAL) return s.isDark ? 30 : 90;
				else if (s.variant === Variant.TONAL_SPOT) return s.isDark ? tMinC(s.primaryPalette, 35, 93) : tMaxC(s.primaryPalette, 0, 90);
				else if (s.variant === Variant.EXPRESSIVE) return s.isDark ? tMaxC(s.primaryPalette, 30, 93) : tMaxC(s.primaryPalette, 78, Hct.isCyan(s.primaryPalette.hue) ? 88 : 90);
				else return s.isDark ? tMinC(s.primaryPalette, 66, 93) : tMaxC(s.primaryPalette, 66, Hct.isCyan(s.primaryPalette.hue) ? 88 : 93);
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
			toneDeltaPair: (s) => s.platform === "phone" ? void 0 : new ToneDeltaPair(this.primaryContainer(), this.primaryDim(), 10, "darker", true, "farther"),
			contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
		});
		return extendSpecVersion(super.primaryContainer(), "2025", color2025);
	}
	onPrimaryContainer() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_primary_container",
			palette: (s) => s.primaryPalette,
			background: (s) => this.primaryContainer(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
		});
		return extendSpecVersion(super.onPrimaryContainer(), "2025", color2025);
	}
	primaryFixed() {
		const color2025 = DynamicColor.fromPalette({
			name: "primary_fixed",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				let tempS = Object.assign({}, s, {
					isDark: false,
					contrastLevel: 0
				});
				return this.primaryContainer().getTone(tempS);
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
			contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
		});
		return extendSpecVersion(super.primaryFixed(), "2025", color2025);
	}
	primaryFixedDim() {
		const color2025 = DynamicColor.fromPalette({
			name: "primary_fixed_dim",
			palette: (s) => s.primaryPalette,
			tone: (s) => this.primaryFixed().getTone(s),
			isBackground: true,
			toneDeltaPair: (s) => new ToneDeltaPair(this.primaryFixedDim(), this.primaryFixed(), 5, "darker", true, "exact")
		});
		return extendSpecVersion(super.primaryFixedDim(), "2025", color2025);
	}
	onPrimaryFixed() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_primary_fixed",
			palette: (s) => s.primaryPalette,
			background: (s) => this.primaryFixedDim(),
			contrastCurve: (s) => getCurve(7)
		});
		return extendSpecVersion(super.onPrimaryFixed(), "2025", color2025);
	}
	onPrimaryFixedVariant() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_primary_fixed_variant",
			palette: (s) => s.primaryPalette,
			background: (s) => this.primaryFixedDim(),
			contrastCurve: (s) => getCurve(4.5)
		});
		return extendSpecVersion(super.onPrimaryFixedVariant(), "2025", color2025);
	}
	inversePrimary() {
		const color2025 = DynamicColor.fromPalette({
			name: "inverse_primary",
			palette: (s) => s.primaryPalette,
			tone: (s) => tMaxC(s.primaryPalette),
			background: (s) => this.inverseSurface(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
		});
		return extendSpecVersion(super.inversePrimary(), "2025", color2025);
	}
	secondary() {
		const color2025 = DynamicColor.fromPalette({
			name: "secondary",
			palette: (s) => s.secondaryPalette,
			tone: (s) => {
				if (s.platform === "watch") return s.variant === Variant.NEUTRAL ? 90 : tMaxC(s.secondaryPalette, 0, 90);
				else if (s.variant === Variant.NEUTRAL) return s.isDark ? tMinC(s.secondaryPalette, 0, 98) : tMaxC(s.secondaryPalette);
				else if (s.variant === Variant.VIBRANT) return tMaxC(s.secondaryPalette, 0, s.isDark ? 90 : 98);
				else return s.isDark ? 80 : tMaxC(s.secondaryPalette);
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(4.5) : getCurve(7),
			toneDeltaPair: (s) => s.platform === "phone" ? new ToneDeltaPair(this.secondaryContainer(), this.secondary(), 5, "relative_lighter", true, "farther") : void 0
		});
		return extendSpecVersion(super.secondary(), "2025", color2025);
	}
	secondaryDim() {
		return DynamicColor.fromPalette({
			name: "secondary_dim",
			palette: (s) => s.secondaryPalette,
			tone: (s) => {
				if (s.variant === Variant.NEUTRAL) return 85;
				else return tMaxC(s.secondaryPalette, 0, 90);
			},
			isBackground: true,
			background: (s) => this.surfaceContainerHigh(),
			contrastCurve: (s) => getCurve(4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryDim(), this.secondary(), 5, "darker", true, "farther")
		});
	}
	onSecondary() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_secondary",
			palette: (s) => s.secondaryPalette,
			background: (s) => s.platform === "phone" ? this.secondary() : this.secondaryDim(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
		});
		return extendSpecVersion(super.onSecondary(), "2025", color2025);
	}
	secondaryContainer() {
		const color2025 = DynamicColor.fromPalette({
			name: "secondary_container",
			palette: (s) => s.secondaryPalette,
			tone: (s) => {
				if (s.platform === "watch") return 30;
				else if (s.variant === Variant.VIBRANT) return s.isDark ? tMinC(s.secondaryPalette, 30, 40) : tMaxC(s.secondaryPalette, 84, 90);
				else if (s.variant === Variant.EXPRESSIVE) return s.isDark ? 15 : tMaxC(s.secondaryPalette, 90, 95);
				else return s.isDark ? 25 : 90;
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
			toneDeltaPair: (s) => s.platform === "watch" ? new ToneDeltaPair(this.secondaryContainer(), this.secondaryDim(), 10, "darker", true, "farther") : void 0,
			contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
		});
		return extendSpecVersion(super.secondaryContainer(), "2025", color2025);
	}
	onSecondaryContainer() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_secondary_container",
			palette: (s) => s.secondaryPalette,
			background: (s) => this.secondaryContainer(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
		});
		return extendSpecVersion(super.onSecondaryContainer(), "2025", color2025);
	}
	secondaryFixed() {
		const color2025 = DynamicColor.fromPalette({
			name: "secondary_fixed",
			palette: (s) => s.secondaryPalette,
			tone: (s) => {
				let tempS = Object.assign({}, s, {
					isDark: false,
					contrastLevel: 0
				});
				return this.secondaryContainer().getTone(tempS);
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
			contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
		});
		return extendSpecVersion(super.secondaryFixed(), "2025", color2025);
	}
	secondaryFixedDim() {
		const color2025 = DynamicColor.fromPalette({
			name: "secondary_fixed_dim",
			palette: (s) => s.secondaryPalette,
			tone: (s) => this.secondaryFixed().getTone(s),
			isBackground: true,
			toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryFixedDim(), this.secondaryFixed(), 5, "darker", true, "exact")
		});
		return extendSpecVersion(super.secondaryFixedDim(), "2025", color2025);
	}
	onSecondaryFixed() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_secondary_fixed",
			palette: (s) => s.secondaryPalette,
			background: (s) => this.secondaryFixedDim(),
			contrastCurve: (s) => getCurve(7)
		});
		return extendSpecVersion(super.onSecondaryFixed(), "2025", color2025);
	}
	onSecondaryFixedVariant() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_secondary_fixed_variant",
			palette: (s) => s.secondaryPalette,
			background: (s) => this.secondaryFixedDim(),
			contrastCurve: (s) => getCurve(4.5)
		});
		return extendSpecVersion(super.onSecondaryFixedVariant(), "2025", color2025);
	}
	tertiary() {
		const color2025 = DynamicColor.fromPalette({
			name: "tertiary",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (s.platform === "watch") return s.variant === Variant.TONAL_SPOT ? tMaxC(s.tertiaryPalette, 0, 90) : tMaxC(s.tertiaryPalette);
				else if (s.variant === Variant.EXPRESSIVE || s.variant === Variant.VIBRANT) return tMaxC(s.tertiaryPalette, 0, Hct.isCyan(s.tertiaryPalette.hue) ? 88 : s.isDark ? 98 : 100);
				else return s.isDark ? tMaxC(s.tertiaryPalette, 0, 98) : tMaxC(s.tertiaryPalette);
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(4.5) : getCurve(7),
			toneDeltaPair: (s) => s.platform === "phone" ? new ToneDeltaPair(this.tertiaryContainer(), this.tertiary(), 5, "relative_lighter", true, "farther") : void 0
		});
		return extendSpecVersion(super.tertiary(), "2025", color2025);
	}
	tertiaryDim() {
		return DynamicColor.fromPalette({
			name: "tertiary_dim",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (s.variant === Variant.TONAL_SPOT) return tMaxC(s.tertiaryPalette, 0, 90);
				else return tMaxC(s.tertiaryPalette);
			},
			isBackground: true,
			background: (s) => this.surfaceContainerHigh(),
			contrastCurve: (s) => getCurve(4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryDim(), this.tertiary(), 5, "darker", true, "farther")
		});
	}
	onTertiary() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_tertiary",
			palette: (s) => s.tertiaryPalette,
			background: (s) => s.platform === "phone" ? this.tertiary() : this.tertiaryDim(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
		});
		return extendSpecVersion(super.onTertiary(), "2025", color2025);
	}
	tertiaryContainer() {
		const color2025 = DynamicColor.fromPalette({
			name: "tertiary_container",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (s.platform === "watch") return s.variant === Variant.TONAL_SPOT ? tMaxC(s.tertiaryPalette, 0, 90) : tMaxC(s.tertiaryPalette);
				else if (s.variant === Variant.NEUTRAL) return s.isDark ? tMaxC(s.tertiaryPalette, 0, 93) : tMaxC(s.tertiaryPalette, 0, 96);
				else if (s.variant === Variant.TONAL_SPOT) return tMaxC(s.tertiaryPalette, 0, s.isDark ? 93 : 100);
				else if (s.variant === Variant.EXPRESSIVE) return tMaxC(s.tertiaryPalette, 75, Hct.isCyan(s.tertiaryPalette.hue) ? 88 : s.isDark ? 93 : 100);
				else return s.isDark ? tMaxC(s.tertiaryPalette, 0, 93) : tMaxC(s.tertiaryPalette, 72, 100);
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
			toneDeltaPair: (s) => s.platform === "watch" ? new ToneDeltaPair(this.tertiaryContainer(), this.tertiaryDim(), 10, "darker", true, "farther") : void 0,
			contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
		});
		return extendSpecVersion(super.tertiaryContainer(), "2025", color2025);
	}
	onTertiaryContainer() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_tertiary_container",
			palette: (s) => s.tertiaryPalette,
			background: (s) => this.tertiaryContainer(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
		});
		return extendSpecVersion(super.onTertiaryContainer(), "2025", color2025);
	}
	tertiaryFixed() {
		const color2025 = DynamicColor.fromPalette({
			name: "tertiary_fixed",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				let tempS = Object.assign({}, s, {
					isDark: false,
					contrastLevel: 0
				});
				return this.tertiaryContainer().getTone(tempS);
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
			contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
		});
		return extendSpecVersion(super.tertiaryFixed(), "2025", color2025);
	}
	tertiaryFixedDim() {
		const color2025 = DynamicColor.fromPalette({
			name: "tertiary_fixed_dim",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => this.tertiaryFixed().getTone(s),
			isBackground: true,
			toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryFixedDim(), this.tertiaryFixed(), 5, "darker", true, "exact")
		});
		return extendSpecVersion(super.tertiaryFixedDim(), "2025", color2025);
	}
	onTertiaryFixed() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_tertiary_fixed",
			palette: (s) => s.tertiaryPalette,
			background: (s) => this.tertiaryFixedDim(),
			contrastCurve: (s) => getCurve(7)
		});
		return extendSpecVersion(super.onTertiaryFixed(), "2025", color2025);
	}
	onTertiaryFixedVariant() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_tertiary_fixed_variant",
			palette: (s) => s.tertiaryPalette,
			background: (s) => this.tertiaryFixedDim(),
			contrastCurve: (s) => getCurve(4.5)
		});
		return extendSpecVersion(super.onTertiaryFixedVariant(), "2025", color2025);
	}
	error() {
		const color2025 = DynamicColor.fromPalette({
			name: "error",
			palette: (s) => s.errorPalette,
			tone: (s) => {
				if (s.platform === "phone") return s.isDark ? tMinC(s.errorPalette, 0, 98) : tMaxC(s.errorPalette);
				else return tMinC(s.errorPalette);
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(4.5) : getCurve(7),
			toneDeltaPair: (s) => s.platform === "phone" ? new ToneDeltaPair(this.errorContainer(), this.error(), 5, "relative_lighter", true, "farther") : void 0
		});
		return extendSpecVersion(super.error(), "2025", color2025);
	}
	errorDim() {
		return DynamicColor.fromPalette({
			name: "error_dim",
			palette: (s) => s.errorPalette,
			tone: (s) => tMinC(s.errorPalette),
			isBackground: true,
			background: (s) => this.surfaceContainerHigh(),
			contrastCurve: (s) => getCurve(4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(this.errorDim(), this.error(), 5, "darker", true, "farther")
		});
	}
	onError() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_error",
			palette: (s) => s.errorPalette,
			background: (s) => s.platform === "phone" ? this.error() : this.errorDim(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
		});
		return extendSpecVersion(super.onError(), "2025", color2025);
	}
	errorContainer() {
		const color2025 = DynamicColor.fromPalette({
			name: "error_container",
			palette: (s) => s.errorPalette,
			tone: (s) => {
				if (s.platform === "watch") return 30;
				else return s.isDark ? tMinC(s.errorPalette, 30, 93) : tMaxC(s.errorPalette, 0, 90);
			},
			isBackground: true,
			background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
			toneDeltaPair: (s) => s.platform === "watch" ? new ToneDeltaPair(this.errorContainer(), this.errorDim(), 10, "darker", true, "farther") : void 0,
			contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
		});
		return extendSpecVersion(super.errorContainer(), "2025", color2025);
	}
	onErrorContainer() {
		const color2025 = DynamicColor.fromPalette({
			name: "on_error_container",
			palette: (s) => s.errorPalette,
			background: (s) => this.errorContainer(),
			contrastCurve: (s) => s.platform === "phone" ? getCurve(4.5) : getCurve(7)
		});
		return extendSpecVersion(super.onErrorContainer(), "2025", color2025);
	}
	surfaceVariant() {
		const color2025 = Object.assign(this.surfaceContainerHighest().clone(), { name: "surface_variant" });
		return extendSpecVersion(super.surfaceVariant(), "2025", color2025);
	}
	surfaceTint() {
		const color2025 = Object.assign(this.primary().clone(), { name: "surface_tint" });
		return extendSpecVersion(super.surfaceTint(), "2025", color2025);
	}
	background() {
		const color2025 = Object.assign(this.surface().clone(), { name: "background" });
		return extendSpecVersion(super.background(), "2025", color2025);
	}
	onBackground() {
		const color2025 = Object.assign(this.onSurface().clone(), {
			name: "on_background",
			tone: (s) => {
				return s.platform === "watch" ? 100 : this.onSurface().getTone(s);
			}
		});
		return extendSpecVersion(super.onBackground(), "2025", color2025);
	}
};
// node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* DynamicColors for the colors in the Material Design system.
*/
var MaterialDynamicColors = class MaterialDynamicColors {
	constructor() {
		this.allColors = [
			this.background(),
			this.onBackground(),
			this.surface(),
			this.surfaceDim(),
			this.surfaceBright(),
			this.surfaceContainerLowest(),
			this.surfaceContainerLow(),
			this.surfaceContainer(),
			this.surfaceContainerHigh(),
			this.surfaceContainerHighest(),
			this.onSurface(),
			this.onSurfaceVariant(),
			this.outline(),
			this.outlineVariant(),
			this.inverseSurface(),
			this.inverseOnSurface(),
			this.primary(),
			this.primaryDim(),
			this.onPrimary(),
			this.primaryContainer(),
			this.onPrimaryContainer(),
			this.primaryFixed(),
			this.primaryFixedDim(),
			this.onPrimaryFixed(),
			this.onPrimaryFixedVariant(),
			this.inversePrimary(),
			this.secondary(),
			this.secondaryDim(),
			this.onSecondary(),
			this.secondaryContainer(),
			this.onSecondaryContainer(),
			this.secondaryFixed(),
			this.secondaryFixedDim(),
			this.onSecondaryFixed(),
			this.onSecondaryFixedVariant(),
			this.tertiary(),
			this.tertiaryDim(),
			this.onTertiary(),
			this.tertiaryContainer(),
			this.onTertiaryContainer(),
			this.tertiaryFixed(),
			this.tertiaryFixedDim(),
			this.onTertiaryFixed(),
			this.onTertiaryFixedVariant(),
			this.error(),
			this.errorDim(),
			this.onError(),
			this.errorContainer(),
			this.onErrorContainer()
		].filter((c) => c !== void 0);
	}
	highestSurface(s) {
		return MaterialDynamicColors.colorSpec.highestSurface(s);
	}
	primaryPaletteKeyColor() {
		return MaterialDynamicColors.colorSpec.primaryPaletteKeyColor();
	}
	secondaryPaletteKeyColor() {
		return MaterialDynamicColors.colorSpec.secondaryPaletteKeyColor();
	}
	tertiaryPaletteKeyColor() {
		return MaterialDynamicColors.colorSpec.tertiaryPaletteKeyColor();
	}
	neutralPaletteKeyColor() {
		return MaterialDynamicColors.colorSpec.neutralPaletteKeyColor();
	}
	neutralVariantPaletteKeyColor() {
		return MaterialDynamicColors.colorSpec.neutralVariantPaletteKeyColor();
	}
	errorPaletteKeyColor() {
		return MaterialDynamicColors.colorSpec.errorPaletteKeyColor();
	}
	background() {
		return MaterialDynamicColors.colorSpec.background();
	}
	onBackground() {
		return MaterialDynamicColors.colorSpec.onBackground();
	}
	surface() {
		return MaterialDynamicColors.colorSpec.surface();
	}
	surfaceDim() {
		return MaterialDynamicColors.colorSpec.surfaceDim();
	}
	surfaceBright() {
		return MaterialDynamicColors.colorSpec.surfaceBright();
	}
	surfaceContainerLowest() {
		return MaterialDynamicColors.colorSpec.surfaceContainerLowest();
	}
	surfaceContainerLow() {
		return MaterialDynamicColors.colorSpec.surfaceContainerLow();
	}
	surfaceContainer() {
		return MaterialDynamicColors.colorSpec.surfaceContainer();
	}
	surfaceContainerHigh() {
		return MaterialDynamicColors.colorSpec.surfaceContainerHigh();
	}
	surfaceContainerHighest() {
		return MaterialDynamicColors.colorSpec.surfaceContainerHighest();
	}
	onSurface() {
		return MaterialDynamicColors.colorSpec.onSurface();
	}
	surfaceVariant() {
		return MaterialDynamicColors.colorSpec.surfaceVariant();
	}
	onSurfaceVariant() {
		return MaterialDynamicColors.colorSpec.onSurfaceVariant();
	}
	outline() {
		return MaterialDynamicColors.colorSpec.outline();
	}
	outlineVariant() {
		return MaterialDynamicColors.colorSpec.outlineVariant();
	}
	inverseSurface() {
		return MaterialDynamicColors.colorSpec.inverseSurface();
	}
	inverseOnSurface() {
		return MaterialDynamicColors.colorSpec.inverseOnSurface();
	}
	shadow() {
		return MaterialDynamicColors.colorSpec.shadow();
	}
	scrim() {
		return MaterialDynamicColors.colorSpec.scrim();
	}
	surfaceTint() {
		return MaterialDynamicColors.colorSpec.surfaceTint();
	}
	primary() {
		return MaterialDynamicColors.colorSpec.primary();
	}
	primaryDim() {
		return MaterialDynamicColors.colorSpec.primaryDim();
	}
	onPrimary() {
		return MaterialDynamicColors.colorSpec.onPrimary();
	}
	primaryContainer() {
		return MaterialDynamicColors.colorSpec.primaryContainer();
	}
	onPrimaryContainer() {
		return MaterialDynamicColors.colorSpec.onPrimaryContainer();
	}
	inversePrimary() {
		return MaterialDynamicColors.colorSpec.inversePrimary();
	}
	primaryFixed() {
		return MaterialDynamicColors.colorSpec.primaryFixed();
	}
	primaryFixedDim() {
		return MaterialDynamicColors.colorSpec.primaryFixedDim();
	}
	onPrimaryFixed() {
		return MaterialDynamicColors.colorSpec.onPrimaryFixed();
	}
	onPrimaryFixedVariant() {
		return MaterialDynamicColors.colorSpec.onPrimaryFixedVariant();
	}
	secondary() {
		return MaterialDynamicColors.colorSpec.secondary();
	}
	secondaryDim() {
		return MaterialDynamicColors.colorSpec.secondaryDim();
	}
	onSecondary() {
		return MaterialDynamicColors.colorSpec.onSecondary();
	}
	secondaryContainer() {
		return MaterialDynamicColors.colorSpec.secondaryContainer();
	}
	onSecondaryContainer() {
		return MaterialDynamicColors.colorSpec.onSecondaryContainer();
	}
	secondaryFixed() {
		return MaterialDynamicColors.colorSpec.secondaryFixed();
	}
	secondaryFixedDim() {
		return MaterialDynamicColors.colorSpec.secondaryFixedDim();
	}
	onSecondaryFixed() {
		return MaterialDynamicColors.colorSpec.onSecondaryFixed();
	}
	onSecondaryFixedVariant() {
		return MaterialDynamicColors.colorSpec.onSecondaryFixedVariant();
	}
	tertiary() {
		return MaterialDynamicColors.colorSpec.tertiary();
	}
	tertiaryDim() {
		return MaterialDynamicColors.colorSpec.tertiaryDim();
	}
	onTertiary() {
		return MaterialDynamicColors.colorSpec.onTertiary();
	}
	tertiaryContainer() {
		return MaterialDynamicColors.colorSpec.tertiaryContainer();
	}
	onTertiaryContainer() {
		return MaterialDynamicColors.colorSpec.onTertiaryContainer();
	}
	tertiaryFixed() {
		return MaterialDynamicColors.colorSpec.tertiaryFixed();
	}
	tertiaryFixedDim() {
		return MaterialDynamicColors.colorSpec.tertiaryFixedDim();
	}
	onTertiaryFixed() {
		return MaterialDynamicColors.colorSpec.onTertiaryFixed();
	}
	onTertiaryFixedVariant() {
		return MaterialDynamicColors.colorSpec.onTertiaryFixedVariant();
	}
	error() {
		return MaterialDynamicColors.colorSpec.error();
	}
	errorDim() {
		return MaterialDynamicColors.colorSpec.errorDim();
	}
	onError() {
		return MaterialDynamicColors.colorSpec.onError();
	}
	errorContainer() {
		return MaterialDynamicColors.colorSpec.errorContainer();
	}
	onErrorContainer() {
		return MaterialDynamicColors.colorSpec.onErrorContainer();
	}
	/** @deprecated Use highestSurface() instead. */
	static highestSurface(s) {
		return MaterialDynamicColors.colorSpec.highestSurface(s);
	}
};
MaterialDynamicColors.contentAccentToneDelta = 15;
MaterialDynamicColors.colorSpec = new ColorSpecDelegateImpl2025();
/** @deprecated Use primaryPaletteKeyColor() instead. */
MaterialDynamicColors.primaryPaletteKeyColor = MaterialDynamicColors.colorSpec.primaryPaletteKeyColor();
/** @deprecated Use secondaryPaletteKeyColor() instead. */
MaterialDynamicColors.secondaryPaletteKeyColor = MaterialDynamicColors.colorSpec.secondaryPaletteKeyColor();
/** @deprecated Use tertiaryPaletteKeyColor() instead. */
MaterialDynamicColors.tertiaryPaletteKeyColor = MaterialDynamicColors.colorSpec.tertiaryPaletteKeyColor();
/** @deprecated Use neutralPaletteKeyColor() instead. */
MaterialDynamicColors.neutralPaletteKeyColor = MaterialDynamicColors.colorSpec.neutralPaletteKeyColor();
/** @deprecated Use neutralVariantPaletteKeyColor() instead. */
MaterialDynamicColors.neutralVariantPaletteKeyColor = MaterialDynamicColors.colorSpec.neutralVariantPaletteKeyColor();
/** @deprecated Use background() instead. */
MaterialDynamicColors.background = MaterialDynamicColors.colorSpec.background();
/** @deprecated Use background() instead. */
MaterialDynamicColors.onBackground = MaterialDynamicColors.colorSpec.onBackground();
/** @deprecated Use surface() instead. */
MaterialDynamicColors.surface = MaterialDynamicColors.colorSpec.surface();
/** @deprecated Use surfaceDim() instead. */
MaterialDynamicColors.surfaceDim = MaterialDynamicColors.colorSpec.surfaceDim();
/** @deprecated Use surfaceBright() instead. */
MaterialDynamicColors.surfaceBright = MaterialDynamicColors.colorSpec.surfaceBright();
/** @deprecated Use surfaceContainerLowest() instead. */
MaterialDynamicColors.surfaceContainerLowest = MaterialDynamicColors.colorSpec.surfaceContainerLowest();
/** @deprecated Use surfaceContainerLow() instead. */
MaterialDynamicColors.surfaceContainerLow = MaterialDynamicColors.colorSpec.surfaceContainerLow();
/** @deprecated Use surfaceContainer() instead. */
MaterialDynamicColors.surfaceContainer = MaterialDynamicColors.colorSpec.surfaceContainer();
/** @deprecated Use surfaceContainerHigh() instead. */
MaterialDynamicColors.surfaceContainerHigh = MaterialDynamicColors.colorSpec.surfaceContainerHigh();
/** @deprecated Use surfaceContainerHighest() instead. */
MaterialDynamicColors.surfaceContainerHighest = MaterialDynamicColors.colorSpec.surfaceContainerHighest();
/** @deprecated Use onSurface() instead. */
MaterialDynamicColors.onSurface = MaterialDynamicColors.colorSpec.onSurface();
/** @deprecated Use surfaceVariant() instead. */
MaterialDynamicColors.surfaceVariant = MaterialDynamicColors.colorSpec.surfaceVariant();
/** @deprecated Use onSurfaceVariant() instead. */
MaterialDynamicColors.onSurfaceVariant = MaterialDynamicColors.colorSpec.onSurfaceVariant();
/** @deprecated Use inverseSurface() instead. */
MaterialDynamicColors.inverseSurface = MaterialDynamicColors.colorSpec.inverseSurface();
/** @deprecated Use inverseOnSurface() instead. */
MaterialDynamicColors.inverseOnSurface = MaterialDynamicColors.colorSpec.inverseOnSurface();
/** @deprecated Use outline() instead. */
MaterialDynamicColors.outline = MaterialDynamicColors.colorSpec.outline();
/** @deprecated Use outlineVariant() instead. */
MaterialDynamicColors.outlineVariant = MaterialDynamicColors.colorSpec.outlineVariant();
/** @deprecated Use shadow() instead. */
MaterialDynamicColors.shadow = MaterialDynamicColors.colorSpec.shadow();
/** @deprecated Use scrim() instead. */
MaterialDynamicColors.scrim = MaterialDynamicColors.colorSpec.scrim();
/** @deprecated Use surfaceTint() instead. */
MaterialDynamicColors.surfaceTint = MaterialDynamicColors.colorSpec.surfaceTint();
/** @deprecated Use primary() instead. */
MaterialDynamicColors.primary = MaterialDynamicColors.colorSpec.primary();
/** @deprecated Use onPrimary() instead. */
MaterialDynamicColors.onPrimary = MaterialDynamicColors.colorSpec.onPrimary();
/** @deprecated Use primaryContainer() instead. */
MaterialDynamicColors.primaryContainer = MaterialDynamicColors.colorSpec.primaryContainer();
/** @deprecated Use onPrimaryContainer() instead. */
MaterialDynamicColors.onPrimaryContainer = MaterialDynamicColors.colorSpec.onPrimaryContainer();
/** @deprecated Use inversePrimary() instead. */
MaterialDynamicColors.inversePrimary = MaterialDynamicColors.colorSpec.inversePrimary();
/** @deprecated Use secondary() instead. */
MaterialDynamicColors.secondary = MaterialDynamicColors.colorSpec.secondary();
/** @deprecated Use onSecondary() instead. */
MaterialDynamicColors.onSecondary = MaterialDynamicColors.colorSpec.onSecondary();
/** @deprecated Use secondaryContainer() instead. */
MaterialDynamicColors.secondaryContainer = MaterialDynamicColors.colorSpec.secondaryContainer();
/** @deprecated Use onSecondaryContainer() instead. */
MaterialDynamicColors.onSecondaryContainer = MaterialDynamicColors.colorSpec.onSecondaryContainer();
/** @deprecated Use tertiary() instead. */
MaterialDynamicColors.tertiary = MaterialDynamicColors.colorSpec.tertiary();
/** @deprecated Use onTertiary() instead. */
MaterialDynamicColors.onTertiary = MaterialDynamicColors.colorSpec.onTertiary();
/** @deprecated Use tertiaryContainer() instead. */
MaterialDynamicColors.tertiaryContainer = MaterialDynamicColors.colorSpec.tertiaryContainer();
/** @deprecated Use onTertiaryContainer() instead. */
MaterialDynamicColors.onTertiaryContainer = MaterialDynamicColors.colorSpec.onTertiaryContainer();
/** @deprecated Use error() instead. */
MaterialDynamicColors.error = MaterialDynamicColors.colorSpec.error();
/** @deprecated Use onError() instead. */
MaterialDynamicColors.onError = MaterialDynamicColors.colorSpec.onError();
/** @deprecated Use errorContainer() instead. */
MaterialDynamicColors.errorContainer = MaterialDynamicColors.colorSpec.errorContainer();
/** @deprecated Use onErrorContainer() instead. */
MaterialDynamicColors.onErrorContainer = MaterialDynamicColors.colorSpec.onErrorContainer();
/** @deprecated Use primaryFixed() instead. */
MaterialDynamicColors.primaryFixed = MaterialDynamicColors.colorSpec.primaryFixed();
/** @deprecated Use primaryFixedDim() instead. */
MaterialDynamicColors.primaryFixedDim = MaterialDynamicColors.colorSpec.primaryFixedDim();
/** @deprecated Use onPrimaryFixed() instead. */
MaterialDynamicColors.onPrimaryFixed = MaterialDynamicColors.colorSpec.onPrimaryFixed();
/** @deprecated Use onPrimaryFixedVariant() instead. */
MaterialDynamicColors.onPrimaryFixedVariant = MaterialDynamicColors.colorSpec.onPrimaryFixedVariant();
/** @deprecated Use secondaryFixed() instead. */
MaterialDynamicColors.secondaryFixed = MaterialDynamicColors.colorSpec.secondaryFixed();
/** @deprecated Use secondaryFixedDim() instead. */
MaterialDynamicColors.secondaryFixedDim = MaterialDynamicColors.colorSpec.secondaryFixedDim();
/** @deprecated Use onSecondaryFixed() instead. */
MaterialDynamicColors.onSecondaryFixed = MaterialDynamicColors.colorSpec.onSecondaryFixed();
/** @deprecated Use onSecondaryFixedVariant() instead. */
MaterialDynamicColors.onSecondaryFixedVariant = MaterialDynamicColors.colorSpec.onSecondaryFixedVariant();
/** @deprecated Use tertiaryFixed() instead. */
MaterialDynamicColors.tertiaryFixed = MaterialDynamicColors.colorSpec.tertiaryFixed();
/** @deprecated Use tertiaryFixedDim() instead. */
MaterialDynamicColors.tertiaryFixedDim = MaterialDynamicColors.colorSpec.tertiaryFixedDim();
/** @deprecated Use onTertiaryFixed() instead. */
MaterialDynamicColors.onTertiaryFixed = MaterialDynamicColors.colorSpec.onTertiaryFixed();
/** @deprecated Use onTertiaryFixedVariant() instead. */
MaterialDynamicColors.onTertiaryFixedVariant = MaterialDynamicColors.colorSpec.onTertiaryFixedVariant();
// node_modules/@material/material-color-utilities/dynamiccolor/dynamic_scheme.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Constructed by a set of values representing the current UI state (such as
* whether or not its dark theme, what the theme style is, etc.), and
* provides a set of TonalPalettes that can create colors that fit in
* with the theme style. Used by DynamicColor to resolve into a color.
*/
var DynamicScheme = class DynamicScheme {
	static maybeFallbackSpecVersion(specVersion, variant) {
		switch (variant) {
			case Variant.EXPRESSIVE:
			case Variant.VIBRANT:
			case Variant.TONAL_SPOT:
			case Variant.NEUTRAL: return specVersion;
			default: return "2021";
		}
	}
	constructor(args) {
		this.sourceColorArgb = args.sourceColorHct.toInt();
		this.variant = args.variant;
		this.contrastLevel = args.contrastLevel;
		this.isDark = args.isDark;
		this.platform = args.platform ?? "phone";
		this.specVersion = DynamicScheme.maybeFallbackSpecVersion(args.specVersion ?? "2021", this.variant);
		this.sourceColorHct = args.sourceColorHct;
		this.primaryPalette = args.primaryPalette ?? getSpec(this.specVersion).getPrimaryPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel);
		this.secondaryPalette = args.secondaryPalette ?? getSpec(this.specVersion).getSecondaryPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel);
		this.tertiaryPalette = args.tertiaryPalette ?? getSpec(this.specVersion).getTertiaryPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel);
		this.neutralPalette = args.neutralPalette ?? getSpec(this.specVersion).getNeutralPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel);
		this.neutralVariantPalette = args.neutralVariantPalette ?? getSpec(this.specVersion).getNeutralVariantPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel);
		this.errorPalette = args.errorPalette ?? getSpec(this.specVersion).getErrorPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel) ?? TonalPalette.fromHueAndChroma(25, 84);
		this.colors = new MaterialDynamicColors();
	}
	toString() {
		return `Scheme: variant=${Variant[this.variant]}, mode=${this.isDark ? "dark" : "light"}, platform=${this.platform}, contrastLevel=${this.contrastLevel.toFixed(1)}, seed=${this.sourceColorHct.toString()}, specVersion=${this.specVersion}`;
	}
	/**
	* Returns a new hue based on a piecewise function and input color hue.
	*
	* For example, for the following function:
	* result = 26 if 0 <= hue < 101
	* result = 39 if 101 <= hue < 210
	* result = 28 if 210 <= hue < 360
	*
	* call the function as:
	*
	* const hueBreakpoints = [0, 101, 210, 360];
	* const hues = [26, 39, 28];
	* const result = scheme.piecewise(hue, hueBreakpoints, hues);
	*
	* @param sourceColorHct The input value.
	* @param hueBreakpoints The breakpoints, in sorted order. No default lower or
	*     upper bounds are assumed.
	* @param hues The hues that should be applied when source color's hue is >=
	*     the same index in hueBrakpoints array, and < the hue at the next index
	*     in hueBrakpoints array. Otherwise, the source color's hue is returned.
	*/
	static getPiecewiseHue(sourceColorHct, hueBreakpoints, hues) {
		const size = Math.min(hueBreakpoints.length - 1, hues.length);
		const sourceHue = sourceColorHct.hue;
		for (let i = 0; i < size; i++) if (sourceHue >= hueBreakpoints[i] && sourceHue < hueBreakpoints[i + 1]) return sanitizeDegreesDouble(hues[i]);
		return sourceHue;
	}
	/**
	* Returns a shifted hue based on a piecewise function and input color hue.
	*
	* For example, for the following function:
	* result = hue + 26 if 0 <= hue < 101
	* result = hue - 39 if 101 <= hue < 210
	* result = hue + 28 if 210 <= hue < 360
	*
	* call the function as:
	*
	* const hueBreakpoints = [0, 101, 210, 360];
	* const hues = [26, -39, 28];
	* const result = scheme.getRotatedHue(hue, hueBreakpoints, hues);
	*
	* @param sourceColorHct the source color of the theme, in HCT.
	* @param hueBreakpoints The "breakpoints", i.e. the hues at which a rotation
	*     should be apply. No default lower or upper bounds are assumed.
	* @param rotations The rotation that should be applied when source color's
	*     hue is >= the same index in hues array, and < the hue at the next
	*     index in hues array. Otherwise, the source color's hue is returned.
	*/
	static getRotatedHue(sourceColorHct, hueBreakpoints, rotations) {
		let rotation = DynamicScheme.getPiecewiseHue(sourceColorHct, hueBreakpoints, rotations);
		if (Math.min(hueBreakpoints.length - 1, rotations.length) <= 0) rotation = 0;
		return sanitizeDegreesDouble(sourceColorHct.hue + rotation);
	}
	getArgb(dynamicColor) {
		return dynamicColor.getArgb(this);
	}
	getHct(dynamicColor) {
		return dynamicColor.getHct(this);
	}
	get primaryPaletteKeyColor() {
		return this.getArgb(this.colors.primaryPaletteKeyColor());
	}
	get secondaryPaletteKeyColor() {
		return this.getArgb(this.colors.secondaryPaletteKeyColor());
	}
	get tertiaryPaletteKeyColor() {
		return this.getArgb(this.colors.tertiaryPaletteKeyColor());
	}
	get neutralPaletteKeyColor() {
		return this.getArgb(this.colors.neutralPaletteKeyColor());
	}
	get neutralVariantPaletteKeyColor() {
		return this.getArgb(this.colors.neutralVariantPaletteKeyColor());
	}
	get errorPaletteKeyColor() {
		return this.getArgb(this.colors.errorPaletteKeyColor());
	}
	get background() {
		return this.getArgb(this.colors.background());
	}
	get onBackground() {
		return this.getArgb(this.colors.onBackground());
	}
	get surface() {
		return this.getArgb(this.colors.surface());
	}
	get surfaceDim() {
		return this.getArgb(this.colors.surfaceDim());
	}
	get surfaceBright() {
		return this.getArgb(this.colors.surfaceBright());
	}
	get surfaceContainerLowest() {
		return this.getArgb(this.colors.surfaceContainerLowest());
	}
	get surfaceContainerLow() {
		return this.getArgb(this.colors.surfaceContainerLow());
	}
	get surfaceContainer() {
		return this.getArgb(this.colors.surfaceContainer());
	}
	get surfaceContainerHigh() {
		return this.getArgb(this.colors.surfaceContainerHigh());
	}
	get surfaceContainerHighest() {
		return this.getArgb(this.colors.surfaceContainerHighest());
	}
	get onSurface() {
		return this.getArgb(this.colors.onSurface());
	}
	get surfaceVariant() {
		return this.getArgb(this.colors.surfaceVariant());
	}
	get onSurfaceVariant() {
		return this.getArgb(this.colors.onSurfaceVariant());
	}
	get inverseSurface() {
		return this.getArgb(this.colors.inverseSurface());
	}
	get inverseOnSurface() {
		return this.getArgb(this.colors.inverseOnSurface());
	}
	get outline() {
		return this.getArgb(this.colors.outline());
	}
	get outlineVariant() {
		return this.getArgb(this.colors.outlineVariant());
	}
	get shadow() {
		return this.getArgb(this.colors.shadow());
	}
	get scrim() {
		return this.getArgb(this.colors.scrim());
	}
	get surfaceTint() {
		return this.getArgb(this.colors.surfaceTint());
	}
	get primary() {
		return this.getArgb(this.colors.primary());
	}
	get primaryDim() {
		const primaryDim = this.colors.primaryDim();
		if (primaryDim === void 0) throw new Error("`primaryDim` color is undefined prior to 2025 spec.");
		return this.getArgb(primaryDim);
	}
	get onPrimary() {
		return this.getArgb(this.colors.onPrimary());
	}
	get primaryContainer() {
		return this.getArgb(this.colors.primaryContainer());
	}
	get onPrimaryContainer() {
		return this.getArgb(this.colors.onPrimaryContainer());
	}
	get primaryFixed() {
		return this.getArgb(this.colors.primaryFixed());
	}
	get primaryFixedDim() {
		return this.getArgb(this.colors.primaryFixedDim());
	}
	get onPrimaryFixed() {
		return this.getArgb(this.colors.onPrimaryFixed());
	}
	get onPrimaryFixedVariant() {
		return this.getArgb(this.colors.onPrimaryFixedVariant());
	}
	get inversePrimary() {
		return this.getArgb(this.colors.inversePrimary());
	}
	get secondary() {
		return this.getArgb(this.colors.secondary());
	}
	get secondaryDim() {
		const secondaryDim = this.colors.secondaryDim();
		if (secondaryDim === void 0) throw new Error("`secondaryDim` color is undefined prior to 2025 spec.");
		return this.getArgb(secondaryDim);
	}
	get onSecondary() {
		return this.getArgb(this.colors.onSecondary());
	}
	get secondaryContainer() {
		return this.getArgb(this.colors.secondaryContainer());
	}
	get onSecondaryContainer() {
		return this.getArgb(this.colors.onSecondaryContainer());
	}
	get secondaryFixed() {
		return this.getArgb(this.colors.secondaryFixed());
	}
	get secondaryFixedDim() {
		return this.getArgb(this.colors.secondaryFixedDim());
	}
	get onSecondaryFixed() {
		return this.getArgb(this.colors.onSecondaryFixed());
	}
	get onSecondaryFixedVariant() {
		return this.getArgb(this.colors.onSecondaryFixedVariant());
	}
	get tertiary() {
		return this.getArgb(this.colors.tertiary());
	}
	get tertiaryDim() {
		const tertiaryDim = this.colors.tertiaryDim();
		if (tertiaryDim === void 0) throw new Error("`tertiaryDim` color is undefined prior to 2025 spec.");
		return this.getArgb(tertiaryDim);
	}
	get onTertiary() {
		return this.getArgb(this.colors.onTertiary());
	}
	get tertiaryContainer() {
		return this.getArgb(this.colors.tertiaryContainer());
	}
	get onTertiaryContainer() {
		return this.getArgb(this.colors.onTertiaryContainer());
	}
	get tertiaryFixed() {
		return this.getArgb(this.colors.tertiaryFixed());
	}
	get tertiaryFixedDim() {
		return this.getArgb(this.colors.tertiaryFixedDim());
	}
	get onTertiaryFixed() {
		return this.getArgb(this.colors.onTertiaryFixed());
	}
	get onTertiaryFixedVariant() {
		return this.getArgb(this.colors.onTertiaryFixedVariant());
	}
	get error() {
		return this.getArgb(this.colors.error());
	}
	get errorDim() {
		const errorDim = this.colors.errorDim();
		if (errorDim === void 0) throw new Error("`errorDim` color is undefined prior to 2025 spec.");
		return this.getArgb(errorDim);
	}
	get onError() {
		return this.getArgb(this.colors.onError());
	}
	get errorContainer() {
		return this.getArgb(this.colors.errorContainer());
	}
	get onErrorContainer() {
		return this.getArgb(this.colors.onErrorContainer());
	}
};
DynamicScheme.DEFAULT_SPEC_VERSION = "2021";
DynamicScheme.DEFAULT_PLATFORM = "phone";
/**
* A delegate for the palettes of a DynamicScheme in the 2021 spec.
*/
var DynamicSchemePalettesDelegateImpl2021 = class {
	getPrimaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		switch (variant) {
			case Variant.CONTENT:
			case Variant.FIDELITY: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma);
			case Variant.FRUIT_SALAD: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue - 50), 48);
			case Variant.MONOCHROME: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12);
			case Variant.RAINBOW: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 48);
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 36);
			case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 240), 40);
			case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 200);
			default: throw new Error(`Unsupported variant: ${variant}`);
		}
	}
	getSecondaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		switch (variant) {
			case Variant.CONTENT:
			case Variant.FIDELITY: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, Math.max(sourceColorHct.chroma - 32, sourceColorHct.chroma * .5));
			case Variant.FRUIT_SALAD: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue - 50), 36);
			case Variant.MONOCHROME: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8);
			case Variant.RAINBOW: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16);
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16);
			case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
				0,
				21,
				51,
				121,
				151,
				191,
				271,
				321,
				360
			], [
				45,
				95,
				45,
				20,
				45,
				90,
				45,
				45,
				45
			]), 24);
			case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
				0,
				41,
				61,
				101,
				131,
				181,
				251,
				301,
				360
			], [
				18,
				15,
				10,
				12,
				15,
				18,
				15,
				12,
				12
			]), 24);
			default: throw new Error(`Unsupported variant: ${variant}`);
		}
	}
	getTertiaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		switch (variant) {
			case Variant.CONTENT: return TonalPalette.fromHct(DislikeAnalyzer.fixIfDisliked(new TemperatureCache(sourceColorHct).analogous(3, 6)[2]));
			case Variant.FIDELITY: return TonalPalette.fromHct(DislikeAnalyzer.fixIfDisliked(new TemperatureCache(sourceColorHct).complement));
			case Variant.FRUIT_SALAD: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 36);
			case Variant.MONOCHROME: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16);
			case Variant.RAINBOW:
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 60), 24);
			case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
				0,
				21,
				51,
				121,
				151,
				191,
				271,
				321,
				360
			], [
				120,
				120,
				20,
				45,
				20,
				15,
				20,
				120,
				120
			]), 32);
			case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
				0,
				41,
				61,
				101,
				131,
				181,
				251,
				301,
				360
			], [
				35,
				30,
				20,
				25,
				30,
				35,
				30,
				25,
				25
			]), 32);
			default: throw new Error(`Unsupported variant: ${variant}`);
		}
	}
	getNeutralPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		switch (variant) {
			case Variant.CONTENT:
			case Variant.FIDELITY: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8);
			case Variant.FRUIT_SALAD: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10);
			case Variant.MONOCHROME: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 2);
			case Variant.RAINBOW: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 6);
			case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 15), 8);
			case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10);
			default: throw new Error(`Unsupported variant: ${variant}`);
		}
	}
	getNeutralVariantPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		switch (variant) {
			case Variant.CONTENT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8 + 4);
			case Variant.FIDELITY: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8 + 4);
			case Variant.FRUIT_SALAD: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16);
			case Variant.MONOCHROME: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 2);
			case Variant.RAINBOW: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8);
			case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 15), 12);
			case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12);
			default: throw new Error(`Unsupported variant: ${variant}`);
		}
	}
	getErrorPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {}
};
/**
* A delegate for the palettes of a DynamicScheme in the 2025 spec.
*/
var DynamicSchemePalettesDelegateImpl2025 = class DynamicSchemePalettesDelegateImpl2025 extends DynamicSchemePalettesDelegateImpl2021 {
	getPrimaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		switch (variant) {
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? Hct.isBlue(sourceColorHct.hue) ? 12 : 8 : Hct.isBlue(sourceColorHct.hue) ? 16 : 12);
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" && isDark ? 26 : 32);
			case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? isDark ? 36 : 48 : 40);
			case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? 74 : 56);
			default: return super.getPrimaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
		}
	}
	getSecondaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		switch (variant) {
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? Hct.isBlue(sourceColorHct.hue) ? 6 : 4 : Hct.isBlue(sourceColorHct.hue) ? 10 : 6);
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16);
			case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
				0,
				105,
				140,
				204,
				253,
				278,
				300,
				333,
				360
			], [
				-160,
				155,
				-100,
				96,
				-96,
				-156,
				-165,
				-160
			]), platform === "phone" ? isDark ? 16 : 24 : 24);
			case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
				0,
				38,
				105,
				140,
				333,
				360
			], [
				-14,
				10,
				-14,
				10,
				-14
			]), platform === "phone" ? 56 : 36);
			default: return super.getSecondaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
		}
	}
	getTertiaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		switch (variant) {
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
				0,
				38,
				105,
				161,
				204,
				278,
				333,
				360
			], [
				-32,
				26,
				10,
				-39,
				24,
				-15,
				-32
			]), platform === "phone" ? 20 : 36);
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
				0,
				20,
				71,
				161,
				333,
				360
			], [
				-40,
				48,
				-32,
				40,
				-32
			]), platform === "phone" ? 28 : 32);
			case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
				0,
				105,
				140,
				204,
				253,
				278,
				300,
				333,
				360
			], [
				-165,
				160,
				-105,
				101,
				-101,
				-160,
				-170,
				-165
			]), 48);
			case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
				0,
				38,
				71,
				105,
				140,
				161,
				253,
				333,
				360
			], [
				-72,
				35,
				24,
				-24,
				62,
				50,
				62,
				-72
			]), 56);
			default: return super.getTertiaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
		}
	}
	static getExpressiveNeutralHue(sourceColorHct) {
		return DynamicScheme.getRotatedHue(sourceColorHct, [
			0,
			71,
			124,
			253,
			278,
			300,
			360
		], [
			10,
			0,
			10,
			0,
			10,
			0
		]);
	}
	static getExpressiveNeutralChroma(sourceColorHct, isDark, platform) {
		const neutralHue = DynamicSchemePalettesDelegateImpl2025.getExpressiveNeutralHue(sourceColorHct);
		return platform === "phone" ? isDark ? Hct.isYellow(neutralHue) ? 6 : 14 : 18 : 12;
	}
	static getVibrantNeutralHue(sourceColorHct) {
		return DynamicScheme.getRotatedHue(sourceColorHct, [
			0,
			38,
			105,
			140,
			333,
			360
		], [
			-14,
			10,
			-14,
			10,
			-14
		]);
	}
	static getVibrantNeutralChroma(sourceColorHct, platform) {
		const neutralHue = DynamicSchemePalettesDelegateImpl2025.getVibrantNeutralHue(sourceColorHct);
		return platform === "phone" ? 28 : Hct.isBlue(neutralHue) ? 28 : 20;
	}
	getNeutralPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		switch (variant) {
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? 1.4 : 6);
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? 5 : 10);
			case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(DynamicSchemePalettesDelegateImpl2025.getExpressiveNeutralHue(sourceColorHct), DynamicSchemePalettesDelegateImpl2025.getExpressiveNeutralChroma(sourceColorHct, isDark, platform));
			case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(DynamicSchemePalettesDelegateImpl2025.getVibrantNeutralHue(sourceColorHct), DynamicSchemePalettesDelegateImpl2025.getVibrantNeutralChroma(sourceColorHct, platform));
			default: return super.getNeutralPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
		}
	}
	getNeutralVariantPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		switch (variant) {
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, (platform === "phone" ? 1.4 : 6) * 2.2);
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, (platform === "phone" ? 5 : 10) * 1.7);
			case Variant.EXPRESSIVE:
				const expressiveNeutralHue = DynamicSchemePalettesDelegateImpl2025.getExpressiveNeutralHue(sourceColorHct);
				const expressiveNeutralChroma = DynamicSchemePalettesDelegateImpl2025.getExpressiveNeutralChroma(sourceColorHct, isDark, platform);
				return TonalPalette.fromHueAndChroma(expressiveNeutralHue, expressiveNeutralChroma * (expressiveNeutralHue >= 105 && expressiveNeutralHue < 125 ? 1.6 : 2.3));
			case Variant.VIBRANT:
				const vibrantNeutralHue = DynamicSchemePalettesDelegateImpl2025.getVibrantNeutralHue(sourceColorHct);
				const vibrantNeutralChroma = DynamicSchemePalettesDelegateImpl2025.getVibrantNeutralChroma(sourceColorHct, platform);
				return TonalPalette.fromHueAndChroma(vibrantNeutralHue, vibrantNeutralChroma * 1.29);
			default: return super.getNeutralVariantPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
		}
	}
	getErrorPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
		const errorHue = DynamicScheme.getPiecewiseHue(sourceColorHct, [
			0,
			3,
			13,
			23,
			33,
			43,
			153,
			273,
			360
		], [
			12,
			22,
			32,
			12,
			22,
			32,
			22,
			12
		]);
		switch (variant) {
			case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(errorHue, platform === "phone" ? 50 : 40);
			case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(errorHue, platform === "phone" ? 60 : 48);
			case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(errorHue, platform === "phone" ? 64 : 48);
			case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(errorHue, platform === "phone" ? 80 : 60);
			default: return super.getErrorPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
		}
	}
};
var spec2021 = new DynamicSchemePalettesDelegateImpl2021();
var spec2025 = new DynamicSchemePalettesDelegateImpl2025();
/**
* Returns the DynamicSchemePalettesDelegate for the given spec version.
*/
function getSpec(specVersion) {
	return specVersion === "2025" ? spec2025 : spec2021;
}
// node_modules/@material/material-color-utilities/palettes/core_palette.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/scheme/scheme.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/scheme/scheme_android.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/scheme/scheme_content.js
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/scheme/scheme_expressive.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/scheme/scheme_fruit_salad.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** A Dynamic Color theme that is grayscale. */
var SchemeMonochrome = class extends DynamicScheme {
	constructor(sourceColorHct, isDark, contrastLevel, specVersion = DynamicScheme.DEFAULT_SPEC_VERSION, platform = DynamicScheme.DEFAULT_PLATFORM) {
		super({
			sourceColorHct,
			variant: Variant.MONOCHROME,
			contrastLevel,
			isDark,
			platform,
			specVersion
		});
	}
};
// node_modules/@material/material-color-utilities/scheme/scheme_neutral.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** A Dynamic Color theme that is near grayscale. */
var SchemeNeutral = class extends DynamicScheme {
	constructor(sourceColorHct, isDark, contrastLevel, specVersion = DynamicScheme.DEFAULT_SPEC_VERSION, platform = DynamicScheme.DEFAULT_PLATFORM) {
		super({
			sourceColorHct,
			variant: Variant.NEUTRAL,
			contrastLevel,
			isDark,
			platform,
			specVersion
		});
	}
};
// node_modules/@material/material-color-utilities/scheme/scheme_rainbow.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A Dynamic Color theme with low to medium colorfulness and a Tertiary
* TonalPalette with a hue related to the source color.
*
* The default Material You theme on Android 12 and 13.
*/
var SchemeTonalSpot = class extends DynamicScheme {
	constructor(sourceColorHct, isDark, contrastLevel, specVersion = DynamicScheme.DEFAULT_SPEC_VERSION, platform = DynamicScheme.DEFAULT_PLATFORM) {
		super({
			sourceColorHct,
			variant: Variant.TONAL_SPOT,
			contrastLevel,
			isDark,
			platform,
			specVersion
		});
	}
};
// node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A Dynamic Color theme that maxes out colorfulness at each position in the
* Primary Tonal Palette.
*/
var SchemeVibrant = class extends DynamicScheme {
	constructor(sourceColorHct, isDark, contrastLevel, specVersion = DynamicScheme.DEFAULT_SPEC_VERSION, platform = DynamicScheme.DEFAULT_PLATFORM) {
		super({
			sourceColorHct,
			variant: Variant.VIBRANT,
			contrastLevel,
			isDark,
			platform,
			specVersion
		});
	}
};
// node_modules/@material/material-color-utilities/score/score.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var SCORE_OPTION_DEFAULTS = {
	desired: 4,
	fallbackColorARGB: 4282549748,
	filter: true
};
function compare(a, b) {
	if (a.score > b.score) return -1;
	else if (a.score < b.score) return 1;
	return 0;
}
/**
*  Given a large set of colors, remove colors that are unsuitable for a UI
*  theme, and rank the rest based on suitability.
*
*  Enables use of a high cluster count for image quantization, thus ensuring
*  colors aren't muddied, while curating the high cluster count to a much
*  smaller number of appropriate choices.
*/
var Score = class Score {
	constructor() {}
	/**
	* Given a map with keys of colors and values of how often the color appears,
	* rank the colors based on suitability for being used for a UI theme.
	*
	* @param colorsToPopulation map with keys of colors and values of how often
	*     the color appears, usually from a source image.
	* @param {ScoreOptions} options optional parameters.
	* @return Colors sorted by suitability for a UI theme. The most suitable
	*     color is the first item, the least suitable is the last. There will
	*     always be at least one color returned. If all the input colors
	*     were not suitable for a theme, a default fallback color will be
	*     provided, Google Blue.
	*/
	static score(colorsToPopulation, options) {
		const { desired, fallbackColorARGB, filter } = {
			...SCORE_OPTION_DEFAULTS,
			...options
		};
		const colorsHct = [];
		const huePopulation = new Array(360).fill(0);
		let populationSum = 0;
		for (const [argb, population] of colorsToPopulation.entries()) {
			const hct = Hct.fromInt(argb);
			colorsHct.push(hct);
			const hue = Math.floor(hct.hue);
			huePopulation[hue] += population;
			populationSum += population;
		}
		const hueExcitedProportions = new Array(360).fill(0);
		for (let hue = 0; hue < 360; hue++) {
			const proportion = huePopulation[hue] / populationSum;
			for (let i = hue - 14; i < hue + 16; i++) {
				const neighborHue = sanitizeDegreesInt(i);
				hueExcitedProportions[neighborHue] += proportion;
			}
		}
		const scoredHct = new Array();
		for (const hct of colorsHct) {
			const proportion = hueExcitedProportions[sanitizeDegreesInt(Math.round(hct.hue))];
			if (filter && (hct.chroma < Score.CUTOFF_CHROMA || proportion <= Score.CUTOFF_EXCITED_PROPORTION)) continue;
			const proportionScore = proportion * 100 * Score.WEIGHT_PROPORTION;
			const chromaWeight = hct.chroma < Score.TARGET_CHROMA ? Score.WEIGHT_CHROMA_BELOW : Score.WEIGHT_CHROMA_ABOVE;
			const score = proportionScore + (hct.chroma - Score.TARGET_CHROMA) * chromaWeight;
			scoredHct.push({
				hct,
				score
			});
		}
		scoredHct.sort(compare);
		const chosenColors = [];
		for (let differenceDegrees$1 = 90; differenceDegrees$1 >= 15; differenceDegrees$1--) {
			chosenColors.length = 0;
			for (const { hct } of scoredHct) {
				if (!chosenColors.find((chosenHct) => {
					return differenceDegrees(hct.hue, chosenHct.hue) < differenceDegrees$1;
				})) chosenColors.push(hct);
				if (chosenColors.length >= desired) break;
			}
			if (chosenColors.length >= desired) break;
		}
		const colors = [];
		if (chosenColors.length === 0) colors.push(fallbackColorARGB);
		for (const chosenHct of chosenColors) colors.push(chosenHct.toInt());
		return colors;
	}
};
Score.TARGET_CHROMA = 48;
Score.WEIGHT_PROPORTION = .7;
Score.WEIGHT_CHROMA_ABOVE = .3;
Score.WEIGHT_CHROMA_BELOW = .1;
Score.CUTOFF_CHROMA = 5;
Score.CUTOFF_EXCITED_PROPORTION = .01;
// node_modules/@material/material-color-utilities/utils/string_utils.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Utility methods for hexadecimal representations of colors.
*/
/**
* @param argb ARGB representation of a color.
* @return Hex string representing color, ex. #ff0000 for red.
*/
function hexFromArgb(argb) {
	const r = redFromArgb(argb);
	const g = greenFromArgb(argb);
	const b = blueFromArgb(argb);
	const outParts = [
		r.toString(16),
		g.toString(16),
		b.toString(16)
	];
	for (const [i, part] of outParts.entries()) if (part.length === 1) outParts[i] = "0" + part;
	return "#" + outParts.join("");
}
/**
* @param hex String representing color as hex code. Accepts strings with or
*     without leading #, and string representing the color using 3, 6, or 8
*     hex characters.
* @return ARGB representation of color.
*/
function argbFromHex(hex) {
	hex = hex.replace("#", "");
	const isThree = hex.length === 3;
	const isSix = hex.length === 6;
	const isEight = hex.length === 8;
	if (!isThree && !isSix && !isEight) throw new Error("unexpected hex " + hex);
	let r = 0;
	let g = 0;
	let b = 0;
	if (isThree) {
		r = parseIntHex(hex.slice(0, 1).repeat(2));
		g = parseIntHex(hex.slice(1, 2).repeat(2));
		b = parseIntHex(hex.slice(2, 3).repeat(2));
	} else if (isSix) {
		r = parseIntHex(hex.slice(0, 2));
		g = parseIntHex(hex.slice(2, 4));
		b = parseIntHex(hex.slice(4, 6));
	} else if (isEight) {
		r = parseIntHex(hex.slice(2, 4));
		g = parseIntHex(hex.slice(4, 6));
		b = parseIntHex(hex.slice(6, 8));
	}
	return (255 << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255) >>> 0;
}
function parseIntHex(value) {
	return parseInt(value, 16);
}
// node_modules/@material/material-color-utilities/utils/image_utils.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/utils/theme_utils.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// node_modules/@material/material-color-utilities/index.js
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// src/theme/engine.ts
var COLOR_ROLES = [
	"primary",
	"on-primary",
	"primary-container",
	"on-primary-container",
	"secondary",
	"on-secondary",
	"secondary-container",
	"on-secondary-container",
	"tertiary",
	"on-tertiary",
	"tertiary-container",
	"on-tertiary-container",
	"error",
	"on-error",
	"error-container",
	"on-error-container",
	"surface",
	"surface-dim",
	"surface-bright",
	"surface-container-lowest",
	"surface-container-low",
	"surface-container",
	"surface-container-high",
	"surface-container-highest",
	"on-surface",
	"on-surface-variant",
	"outline",
	"outline-variant",
	"inverse-surface",
	"inverse-on-surface",
	"inverse-primary"
];
/** Roles the scheme also offers, outside the 31 that carry a surface or text colour. */
var EXTRA_ROLES = ["scrim", "shadow"];
var toCamelCase = (role) => role.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
function isValidSeed(text) {
	return /^#[0-9a-fA-F]{6}$/.test(text);
}
function resolveMode(preference, systemPrefersDark) {
	if (preference === "auto") return systemPrefersDark ? "dark" : "light";
	return preference;
}
var SCHEMES = {
	monochrome: SchemeMonochrome,
	neutral: SchemeNeutral,
	tonalSpot: SchemeTonalSpot,
	vibrant: SchemeVibrant
};
function colorTokens(seed, mode, contrast, schemeName = "tonalSpot") {
	const scheme = new SCHEMES[schemeName](Hct.fromInt(argbFromHex(seed)), mode === "dark", contrast);
	const tokens = {};
	for (const role of [...COLOR_ROLES, ...EXTRA_ROLES]) {
		const argb = scheme[toCamelCase(role)];
		tokens[`--c-${role}`] = hexFromArgb(argb).toLowerCase();
	}
	return tokens;
}
// src/theme/values/kinds.ts
/** The colour roles a theme may set and refer to: all but the error roles, which stay the dashboard's. */
var SETTABLE_ROLES = Object.freeze([...COLOR_ROLES, ...EXTRA_ROLES].filter((role) => !/(^|-)error/.test(role)));
var ROLE_SET = new Set(SETTABLE_ROLES);
var SHAPE_SET = /* @__PURE__ */ new Set([
	"shape-xs",
	"shape-sm",
	"shape-md",
	"shape-lg",
	"shape-xl",
	"shape-2xl",
	"shape-full"
]);
/** The curves a time may have, as the built-in styles use them. */
var CURVES = Object.freeze([
	"linear",
	"ease",
	"ease-in",
	"ease-out",
	"ease-in-out",
	"cubic-bezier(.38,1.21,.22,1)",
	"cubic-bezier(.34,.8,.34,1)"
]);
var NUMBER$1 = /^-?(?:\d{1,5}(?:\.\d{1,4})?|\.\d{1,4})$/;
/** A number as CSS writes it: no exponent, no more digits than needed; null when it is no plain number. */
function readNumber(text) {
	if (!NUMBER$1.test(text)) return null;
	const value = Number(text);
	return Number.isFinite(value) ? value : null;
}
var write = (value) => String(Math.round(value * 1e4) / 1e4);
var within = (value, min, max) => value >= min && value <= max;
function hex(text) {
	const lower = text.toLowerCase();
	return /^#[0-9a-f]{6}(?:[0-9a-f]{2})?$/.test(lower) ? lower : null;
}
/** One side of a colour: a hex colour, a role of the theme, transparent or the colour of the text. */
function plainColour(text) {
	const own = hex(text);
	if (own) return own;
	if (text === "transparent") return "transparent";
	if (/^currentcolor$/i.test(text)) return "currentColor";
	const role = /^var\(--c-([a-z-]+)\)$/.exec(text);
	return role && ROLE_SET.has(role[1]) ? `var(--c-${role[1]})` : null;
}
/** A side of a mix with its share, if it has one. */
function mixSide(text) {
	const match = /^(.+?)(?:\s+(-?[\d.]+)%)?$/.exec(text.trim());
	if (!match) return null;
	const colour = plainColour(match[1].trim());
	if (!colour) return null;
	if (match[2] === void 0) return {
		colour,
		share: null
	};
	const share = readNumber(match[2]);
	return share !== null && within(share, 0, 100) ? {
		colour,
		share
	} : null;
}
/** Text split at the commas outside brackets. */
function splitTop(text) {
	const parts = [];
	let depth = 0;
	let start = 0;
	for (let at = 0; at < text.length; at += 1) {
		const char = text[at];
		if (char === "(") depth += 1;
		else if (char === ")") depth -= 1;
		else if (char === "," && depth === 0) {
			parts.push(text.slice(start, at));
			start = at + 1;
		}
		if (depth < 0) return [];
	}
	parts.push(text.slice(start));
	return depth === 0 ? parts : [];
}
function checkColour(text) {
	const plain = plainColour(text);
	if (plain) return plain;
	if (!text.startsWith("color-mix(in srgb,") || !text.endsWith(")")) return null;
	const sides = splitTop(text.slice(18, -1));
	if (sides.length !== 2) return null;
	const mixed = [
		"",
		sides[0],
		sides[1]
	];
	const first = mixSide(mixed[1]);
	const second = mixSide(mixed[2]);
	if (!first || !second) return null;
	const side = (part) => part.share === null ? part.colour : `${part.colour} ${write(part.share)}%`;
	return `color-mix(in srgb, ${side(first)}, ${side(second)})`;
}
function checkSize(text, unit, min, max) {
	if (!text.endsWith(unit)) return null;
	const value = readNumber(text.slice(0, -unit.length));
	if (value === null || !within(value, min, max)) return null;
	return value === 0 ? `0${unit}` : `${write(value)}${unit}`;
}
function checkTime(text, max) {
	const match = /^(\S+?)(ms|s)(?:\s+(.+))?$/.exec(text);
	if (!match) return null;
	const value = readNumber(match[1]);
	if (value === null) return null;
	if (!within(match[2] === "s" ? value * 1e3 : value, 0, max)) return null;
	const curve = match[3];
	if (curve !== void 0 && !CURVES.includes(curve.replace(/\s+/g, ""))) return null;
	const time = `${write(value)}${match[2]}`;
	return curve === void 0 ? time : `${time} ${curve.replace(/\s+/g, "")}`;
}
/** The value as the kind allows it, written anew; null when the kind refuses it. */
function checkValue(kind, raw) {
	if (kind.kind === "fixed") return null;
	const text = raw.trim().replace(/\s+/g, " ");
	if (text.length === 0 || text.length > 200) return null;
	if (kind.also.includes(text)) return text;
	switch (kind.kind) {
		case "colour":
			if (!kind.plain) return checkColour(text);
			return hex(text) ?? (text === "transparent" ? text : null);
		case "size": return checkSize(text, kind.unit, kind.min, kind.max);
		case "sizes": {
			const parts = text.split(" ");
			if (parts.length < 1 || parts.length > 2) return null;
			const both = parts.map((part) => checkSize(part, kind.unit, kind.min, kind.max));
			return both.every((part) => part !== null) ? both.join(" ") : null;
		}
		case "corner": {
			const shape = /^var\(--([a-z0-9-]+)\)$/.exec(text);
			if (shape) return SHAPE_SET.has(shape[1]) ? `var(--${shape[1]})` : null;
			return checkSize(text, "px", kind.min, kind.max);
		}
		case "number": {
			const value = readNumber(text);
			return value !== null && within(value, kind.min, kind.max) ? write(value) : null;
		}
		case "time": return checkTime(text, kind.max);
		case "weight": {
			const value = readNumber(text);
			return value !== null && Number.isInteger(value) && value % 100 === 0 && within(value, 100, 900) ? String(value) : null;
		}
		case "choice": return null;
	}
}
// src/theme/values/catalogue.ts
/** The colour roles as names of values. */
var roleName = (role) => `c-${role}`;
/** Every value of the dashboard and Rustig's own text for it; colour roles are worked out, so they have none. */
function rustigValues() {
	const values = {};
	for (const role of SETTABLE_ROLES) values[roleName(role)] = null;
	Object.assign(values, rustigExpressive.system, rustigExpressive.density.comfortable, rustigExpressive.components);
	for (const name of Object.keys(SHAPE_TOKENS)) values[name.slice(2)] = SHAPE_TOKENS[name];
	return values;
}
/** What the built-in styles and their knobs write for a name, besides Rustig. */
function builtInTexts() {
	const texts = /* @__PURE__ */ new Map();
	const add = (values) => {
		for (const [name, value] of Object.entries(values)) {
			if (!texts.has(name)) texts.set(name, /* @__PURE__ */ new Set());
			texts.get(name).add(value);
		}
	};
	add(rustigExpressive.system);
	add(rustigExpressive.components);
	for (const density of Object.values(rustigExpressive.density)) add(density);
	for (const components of Object.values(BASE_COMPONENTS)) add(components);
	add({ ...LEEG_SYSTEM });
	add({ ...LEEG_COMPONENTS });
	const knobNames = Object.keys(KNOB_VALUES);
	const base = {
		roundness: "round",
		strength: "normal",
		contrast: "normal",
		letter: "sans",
		weight: 600,
		surfaces: "solid",
		background: "plain"
	};
	for (const knob of knobNames) for (const value of KNOB_VALUES[knob]) {
		const knobs = {
			...base,
			[knob]: value
		};
		add(knobSystem(knobs));
		add(knobComponents(knobs));
	}
	return texts;
}
var FIXED = { kind: "fixed" };
var PROTECTED = new Set(PROTECTED_NAMES.map((name) => name.slice(2)));
/** Whether a text is a colour, following references to other values. */
function colourLike(value, values, depth = 0) {
	if (depth > 6) return false;
	if (checkColour(value) !== null || value.startsWith("color-mix(")) return true;
	const reference = /^var\(--([a-z0-9-]+)\)$/.exec(value);
	if (!reference) return false;
	if (reference[1].startsWith("c-")) return true;
	const next = values[reference[1]];
	return typeof next === "string" && colourLike(next, values, depth + 1);
}
function range(name, unit, value) {
	if (unit === "%" || unit === "vw" || unit === "dvh") return [0, 100];
	if (unit === "number") {
		if (name === "hero-wave-scale") return [0, 2];
		if (/scale/.test(name)) return [.8, 1.25];
		if (/opacity|disabled-content|stale/.test(name)) return [.1, 1];
		if (/-line$/.test(name)) return [.6, 2.5];
	}
	const floor = unit === "px" ? 64 : 1;
	const reach = Math.min(Math.max(Math.abs(value) * 4, floor), 4e3);
	return value < 0 ? [-reach, reach] : [0, reach];
}
var SIZE = /^(-?[\d.]+)(px|em|%|vw|dvh)$/;
var NUMBER = /^-?(?:\d+(?:\.\d+)?|\.\d+)$/;
/** The kind of a value, worked out from its name and Rustig's own text. */
function kindOf(name, value, also, values) {
	if (PROTECTED.has(name)) return FIXED;
	if (name.startsWith("c-")) return SETTABLE_ROLES.includes(name.slice(2)) ? {
		kind: "colour",
		also,
		plain: true
	} : FIXED;
	if (value === null || `--${name}` in SHAPE_TOKENS) return FIXED;
	if (/var\(--density-|calc\(|min\(|max\(/.test(value)) return FIXED;
	if (name === "font-family") return {
		kind: "choice",
		also
	};
	if (name.startsWith("easing-")) return {
		kind: "choice",
		also: [.../* @__PURE__ */ new Set([...also, ...CURVES])]
	};
	if (name.startsWith("weight-")) return {
		kind: "weight",
		also
	};
	if (colourLike(value, values)) return {
		kind: "colour",
		also
	};
	if (/gradient\(|^\d+px \d+px /.test(value)) return {
		kind: "choice",
		also
	};
	if (/radius/.test(name) && (/^var\(--shape-/.test(value) || /^\d+px$/.test(value))) return {
		kind: "corner",
		min: 0,
		max: 999,
		also
	};
	if (/^[\d.]+m?s(?:\s|$)/.test(value)) return {
		kind: "time",
		max: 1e4,
		also
	};
	const size = SIZE.exec(value);
	const paired = also.find((text) => text.split(" ").length === 2 && text.split(" ").every((part) => SIZE.test(part)));
	if (size && paired) {
		const [min, max] = range(name, size[2], Math.max(Number(size[1]), ...paired.split(" ").map((part) => Number(SIZE.exec(part)[1]))));
		return {
			kind: "sizes",
			unit: size[2],
			min,
			max,
			also
		};
	}
	if (size) {
		const [min, max] = range(name, size[2], Number(size[1]));
		return {
			kind: "size",
			unit: size[2],
			min,
			max,
			also
		};
	}
	const pair = value.split(" ");
	if (pair.length === 2 && pair.every((part) => SIZE.test(part)) && SIZE.exec(pair[0])[2] === SIZE.exec(pair[1])[2]) {
		const unit = SIZE.exec(pair[0])[2];
		const [min, max] = range(name, unit, Math.max(...pair.map((part) => Number(SIZE.exec(part)[1]))));
		return {
			kind: "sizes",
			unit,
			min,
			max,
			also
		};
	}
	if (NUMBER.test(value)) {
		const [min, max] = range(name, "number", Number(value));
		return {
			kind: "number",
			min,
			max,
			also
		};
	}
	return FIXED;
}
/** The group of a name, by its first part. */
function groupOf(name) {
	return [
		[/^c-/, "colour"],
		[/^shape-/, "shape"],
		[/^(font-|weight-|type-|tracking-)/, "letter"],
		[/^(density-|space-)/, "space"],
		[/^section-hero-|^hero-/, "hero"],
		[/^section-/, "sections"],
		[/^(tile-|tank-|dimmer-|room-card-)/, "tiles"],
		[/^slider-/, "sliders"],
		[/^(page-|rail-|nav-bar-|header-|chip-|edit-bar-)/, "bar"],
		[/^(control-|flow-|button-|icon-button-|field-|switch-|choice-|swatch-|radio-)/, "buttons"],
		[/^(sheet-|dialog-|snackbar-|banner-|note-|top-)/, "sheets"],
		[/^chart-/, "charts"],
		[/^rest-/, "rest"],
		[/^(motion-|easing-|duration-|press-|focus-|state-)/, "motion"]
	].find(([rule]) => rule.test(name))?.[1] ?? "other";
}
/**
* The names a theme of another can count on, with their words: part and role, as keys under `values.part.` and
* `values.role.`. A name on this list stays and keeps its meaning while the list is version 1.
*/
var LISTED = {
	...Object.fromEntries(SETTABLE_ROLES.map((role) => [roleName(role), ["colour", `c-${role}`]])),
	"font-family": ["letter", "family"],
	"weight-regular": ["letter", "regular"],
	"weight-medium": ["letter", "medium"],
	"weight-strong": ["letter", "strong"],
	"type-hero-size": ["letter", "hero"],
	"type-greeting-size": ["letter", "greeting"],
	"type-value-size": ["letter", "value"],
	"type-title-size": ["letter", "title"],
	"type-body-l-size": ["letter", "body"],
	"type-label-m-size": ["letter", "label"],
	"shape-xs": ["shape", "xs"],
	"shape-sm": ["shape", "sm"],
	"shape-md": ["shape", "md"],
	"shape-lg": ["shape", "lg"],
	"shape-xl": ["shape", "xl"],
	"shape-2xl": ["shape", "2xl"],
	"shape-full": ["shape", "full"],
	"motion-spatial": ["motion", "spatial"],
	"motion-effects": ["motion", "effects"],
	"press-scale": ["motion", "press"],
	"focus-width": ["focus", "width"],
	"focus-color": ["focus", "colour"],
	...Object.fromEntries(Object.keys(rustigExpressive.density.comfortable).map((name) => [name, ["space", name.slice(8)]])),
	"page-bg": ["page", "bg"],
	"page-fg": ["page", "fg"],
	"page-max-width": ["page", "max-width"],
	"rail-indicator-bg": ["rail", "indicator"],
	"rail-item-fg": ["rail", "fg"],
	"nav-bar-bg": ["navbar", "bg"],
	"chip-bg": ["chip", "bg"],
	"chip-fg": ["chip", "fg"],
	"chip-radius": ["chip", "radius"],
	"section-bg": ["section", "bg"],
	"section-fg": ["section", "fg"],
	"section-radius": ["section", "radius"],
	"section-outline": ["section", "outline"],
	"section-outline-width": ["section", "outline-width"],
	"section-hero-bg": ["hero", "bg"],
	"section-hero-fg": ["hero", "fg"],
	"hero-wave-fg": ["hero", "line"],
	"hero-wave-track": ["hero", "track"],
	"hero-stat-bg": ["hero-stat", "bg"],
	"hero-stat-radius": ["hero-stat", "radius"],
	"tile-bg": ["tile", "bg"],
	"tile-fg": ["tile", "fg"],
	"tile-state-fg": ["tile", "state"],
	"tile-radius": ["tile", "radius"],
	"tile-outline": ["tile", "outline"],
	"tile-outline-width": ["tile", "outline-width"],
	"tile-on-bg": ["tile-on", "bg"],
	"tile-on-fg": ["tile-on", "fg"],
	"tile-on-slider-fill": ["tile-on", "fill"],
	"tile-on-slider-track": ["tile-on", "track"],
	"tile-icon-bg": ["tile-icon", "bg"],
	"tile-icon-fg": ["tile-icon", "fg"],
	"tile-icon-on-bg": ["tile-icon-on", "bg"],
	"tile-icon-on-fg": ["tile-icon-on", "fg"],
	"tile-cell-bg": ["tile-cell", "bg"],
	"tank-fill": ["tank", "fill"],
	"tank-track": ["tank", "track"],
	"dimmer-bg": ["dimmer", "bg"],
	"dimmer-fill": ["dimmer", "fill"],
	"slider-fill": ["slider", "fill"],
	"slider-track": ["slider", "track"],
	"slider-radius": ["slider", "radius"],
	"slider-off-fill": ["slider-off", "fill"],
	"slider-off-track": ["slider-off", "track"],
	"control-bg": ["control", "bg"],
	"control-radius": ["control", "radius"],
	"control-main-bg": ["control-main", "bg"],
	"control-main-fg": ["control-main", "fg"],
	"flow-bg": ["flow", "bg"],
	"flow-fg": ["flow", "fg"],
	"flow-radius": ["flow", "radius"],
	"button-radius": ["button", "radius"],
	"button-filled-bg": ["button-filled", "bg"],
	"button-filled-fg": ["button-filled", "fg"],
	"button-tonal-bg": ["button-tonal", "bg"],
	"button-tonal-fg": ["button-tonal", "fg"],
	"button-text-fg": ["button-text", "fg"],
	"field-bg": ["field", "bg"],
	"field-fg": ["field", "fg"],
	"field-radius": ["field", "radius"],
	"field-focus": ["field", "focus"],
	"switch-on-bg": ["switch-on", "bg"],
	"switch-on-thumb": ["switch-on", "thumb"],
	"switch-off-bg": ["switch-off", "bg"],
	"switch-off-thumb": ["switch-off", "thumb"],
	"choice-bg": ["choice", "bg"],
	"choice-fg": ["choice", "fg"],
	"choice-on-bg": ["choice-on", "bg"],
	"choice-on-fg": ["choice-on", "fg"],
	"sheet-bg": ["sheet", "bg"],
	"sheet-fg": ["sheet", "fg"],
	"sheet-radius": ["sheet", "radius"],
	"sheet-row-bg": ["sheet-row", "bg"],
	"dialog-bg": ["dialog", "bg"],
	"dialog-radius": ["dialog", "radius"],
	"snackbar-bg": ["snackbar", "bg"],
	"snackbar-fg": ["snackbar", "fg"],
	"banner-ok-bg": ["banner-ok", "bg"],
	"banner-ok-fg": ["banner-ok", "fg"],
	"note-bg": ["note", "bg"],
	"note-fg": ["note", "fg"],
	"chart-line": ["chart", "line"],
	"chart-line-2": ["chart", "line-2"],
	"chart-area": ["chart", "area"],
	"chart-tip-bg": ["chart-tip", "bg"],
	"chart-tip-fg": ["chart-tip", "fg"],
	"rest-bg": ["rest", "bg"],
	"rest-fg": ["rest", "fg"],
	"rest-accent": ["rest", "accent"],
	"edit-bar-bg": ["edit-bar", "bg"],
	"edit-bar-fg": ["edit-bar", "fg"]
};
function build() {
	const values = rustigValues();
	const texts = builtInTexts();
	return Object.freeze(Object.entries(values).map(([name, value]) => {
		const also = Object.freeze([...texts.get(name) ?? []]);
		const words = LISTED[name];
		const kind = kindOf(name, value, also, values);
		const listed = words !== void 0 && kind.kind !== "fixed";
		return Object.freeze({
			name,
			kind,
			group: groupOf(name),
			listed,
			...listed ? { words } : {}
		});
	}));
}
/** Every value of the dashboard, the listed ones first in the order of the list. */
var CATALOGUE = build();
var BY_NAME = new Map(CATALOGUE.map((entry) => [entry.name, entry]));
var entryOf = (name) => BY_NAME.get(name);
var LISTED_NAMES = Object.freeze(Object.keys(LISTED).filter((name) => BY_NAME.get(name)?.listed));
// src/theme/css/allowed.ts
var COLOUR = { pieces: ["colour"] };
var STYLE_WORDS = [
	"none",
	"solid",
	"dashed",
	"dotted",
	"double",
	"groove",
	"ridge",
	"inset",
	"outset"
];
var BORDER_WIDTH = [0, 16];
var BORDER = {
	pieces: [
		"colour",
		"length",
		"keyword"
	],
	keywords: [
		...STYLE_WORDS,
		"thin",
		"medium",
		"thick"
	],
	length: BORDER_WIDTH
};
var RADIUS = {
	pieces: ["length", "percentage"],
	length: [0, 999],
	percentage: [0, 50]
};
var SPACE = {
	pieces: ["length"],
	length: [0, 64]
};
var BACKGROUND = {
	pieces: [
		"colour",
		"gradient",
		"picture",
		"keyword",
		"length",
		"percentage"
	],
	keywords: [
		"none",
		"no-repeat",
		"repeat",
		"repeat-x",
		"repeat-y",
		"round",
		"space",
		"cover",
		"contain",
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"auto",
		"fixed",
		"scroll",
		"local"
	],
	length: [-2e3, 2e3],
	percentage: [-100, 200],
	slash: true
};
var TIMING = [
	"linear",
	"ease",
	"ease-in",
	"ease-out",
	"ease-in-out",
	"step-start",
	"step-end"
];
var SHADOW_BOX = {
	pieces: [
		"colour",
		"length",
		"keyword"
	],
	keywords: ["none", "inset"],
	list: true,
	shadow: "box"
};
var SHADOW_TEXT = {
	pieces: [
		"colour",
		"length",
		"keyword"
	],
	keywords: ["none"],
	list: true,
	shadow: "text"
};
/** The properties whose motion own CSS may animate or move between: colour, background, shadow and border. */
var MOVING = Object.freeze([
	"color",
	"background",
	"background-color",
	"background-image",
	"background-position",
	"box-shadow",
	"text-shadow",
	"border-color",
	"outline-color",
	"border-top-color",
	"border-right-color",
	"border-bottom-color",
	"border-left-color",
	"text-decoration-color"
]);
/** A change of colour may take this long at most, and never wait: a tile that goes into alarm shows it at once. */
var TRANSITION_MS = 2e3;
var WIDE = Object.freeze({
	"color": COLOUR,
	"background-color": COLOUR,
	"caret-color": COLOUR,
	"accent-color": COLOUR,
	"text-decoration-color": COLOUR,
	"outline-color": COLOUR,
	"background": BACKGROUND,
	"background-image": BACKGROUND,
	"background-size": BACKGROUND,
	"background-position": BACKGROUND,
	"background-repeat": BACKGROUND,
	"border": BORDER,
	"border-top": BORDER,
	"border-right": BORDER,
	"border-bottom": BORDER,
	"border-left": BORDER,
	"border-color": COLOUR,
	"border-top-color": COLOUR,
	"border-right-color": COLOUR,
	"border-bottom-color": COLOUR,
	"border-left-color": COLOUR,
	"border-style": {
		pieces: ["keyword"],
		keywords: STYLE_WORDS
	},
	"border-width": {
		pieces: ["length"],
		length: BORDER_WIDTH
	},
	"border-radius": RADIUS,
	"border-top-left-radius": RADIUS,
	"border-top-right-radius": RADIUS,
	"border-bottom-left-radius": RADIUS,
	"border-bottom-right-radius": RADIUS,
	"outline": {
		...BORDER,
		length: [0, 8]
	},
	"outline-style": {
		pieces: ["keyword"],
		keywords: STYLE_WORDS
	},
	"outline-width": {
		pieces: ["length"],
		length: [0, 8]
	},
	"box-shadow": SHADOW_BOX,
	"text-shadow": SHADOW_TEXT,
	"font-family": {
		pieces: ["family"],
		list: true
	},
	"font-weight": {
		pieces: ["number", "keyword"],
		keywords: [
			"normal",
			"bold",
			"lighter",
			"bolder"
		],
		number: [100, 900]
	},
	"font-style": {
		pieces: ["keyword"],
		keywords: [
			"normal",
			"italic",
			"oblique"
		]
	},
	"font-variant": {
		pieces: ["keyword"],
		keywords: [
			"normal",
			"small-caps",
			"all-small-caps",
			"tabular-nums",
			"proportional-nums",
			"oldstyle-nums",
			"lining-nums"
		]
	},
	"font-variant-numeric": {
		pieces: ["keyword"],
		keywords: [
			"normal",
			"tabular-nums",
			"proportional-nums",
			"oldstyle-nums",
			"lining-nums",
			"slashed-zero"
		]
	},
	"font-size": {
		pieces: ["length", "percentage"],
		em: [.75, 2],
		percentage: [75, 200]
	},
	"letter-spacing": {
		pieces: ["length", "keyword"],
		keywords: ["normal"],
		length: [-4, 16]
	},
	"word-spacing": {
		pieces: ["length", "keyword"],
		keywords: ["normal"],
		length: [-4, 32]
	},
	"line-height": {
		pieces: ["number", "keyword"],
		keywords: ["normal"],
		number: [.8, 3]
	},
	"text-transform": {
		pieces: ["keyword"],
		keywords: [
			"none",
			"uppercase",
			"lowercase",
			"capitalize"
		]
	},
	"text-decoration": {
		pieces: [
			"keyword",
			"colour",
			"length"
		],
		keywords: [
			"none",
			"underline",
			"overline",
			"line-through",
			...STYLE_WORDS,
			"wavy"
		],
		length: [0, 8]
	},
	"text-decoration-line": {
		pieces: ["keyword"],
		keywords: [
			"none",
			"underline",
			"overline",
			"line-through"
		]
	},
	"text-decoration-style": {
		pieces: ["keyword"],
		keywords: [...STYLE_WORDS, "wavy"]
	},
	"text-align": {
		pieces: ["keyword"],
		keywords: [
			"left",
			"right",
			"center",
			"start",
			"end",
			"justify"
		]
	},
	"padding": SPACE,
	"padding-top": SPACE,
	"padding-right": SPACE,
	"padding-bottom": SPACE,
	"padding-left": SPACE,
	"padding-inline": SPACE,
	"padding-block": SPACE,
	"gap": SPACE,
	"row-gap": SPACE,
	"column-gap": SPACE,
	"content": { pieces: ["empty-string"] },
	"animation": {
		pieces: [
			"time",
			"number",
			"keyword"
		],
		keywords: [
			...TIMING,
			"infinite",
			"normal",
			"reverse",
			"alternate",
			"alternate-reverse",
			"none",
			"forwards",
			"backwards",
			"both",
			"running",
			"paused"
		],
		number: [0, 1e3],
		animation: true,
		list: true
	},
	"animation-name": {
		pieces: ["keyword"],
		keywords: ["none"],
		animation: true,
		list: true
	},
	"animation-duration": {
		pieces: ["time"],
		list: true
	},
	"animation-delay": {
		pieces: ["time"],
		list: true
	},
	"animation-timing-function": {
		pieces: ["keyword"],
		keywords: TIMING,
		list: true
	},
	"animation-iteration-count": {
		pieces: ["number", "keyword"],
		keywords: ["infinite"],
		number: [0, 1e3],
		list: true
	},
	"animation-direction": {
		pieces: ["keyword"],
		keywords: [
			"normal",
			"reverse",
			"alternate",
			"alternate-reverse"
		],
		list: true
	},
	"transition": {
		pieces: ["time", "keyword"],
		keywords: [...TIMING],
		transition: true,
		list: true,
		maxTime: TRANSITION_MS,
		oneTime: true
	},
	"transition-property": {
		pieces: ["keyword"],
		keywords: [],
		transition: true,
		list: true
	},
	"transition-duration": {
		pieces: ["time"],
		list: true,
		maxTime: TRANSITION_MS,
		oneTime: true
	},
	"transition-timing-function": {
		pieces: ["keyword"],
		keywords: TIMING,
		list: true
	}
});
/** Someone else's CSS, until it is allowed: colours, borders, corners, letters and space. No pictures, shadows or motion. */
var NARROW = Object.freeze(Object.fromEntries([
	"color",
	"background-color",
	"background",
	"background-image",
	"border",
	"border-top",
	"border-right",
	"border-bottom",
	"border-left",
	"border-color",
	"border-style",
	"border-width",
	"border-radius",
	"border-top-left-radius",
	"border-top-right-radius",
	"border-bottom-left-radius",
	"border-bottom-right-radius",
	"font-family",
	"font-weight",
	"letter-spacing",
	"text-transform",
	"padding",
	"padding-top",
	"padding-right",
	"padding-bottom",
	"padding-left",
	"gap"
].map((name) => {
	const spec = WIDE[name];
	return [name, name.startsWith("background") ? {
		...spec,
		pieces: spec.pieces.filter((piece) => piece !== "picture")
	} : spec];
})));
/** Bounds of a shadow, in px: offsets, blur, spread. */
var SHADOW_BOUNDS = {
	offset: 16,
	blur: 64,
	spread: 16
};
// src/theme/css/parts.ts
var PART_NAMES = Object.freeze([
	"page",
	"rail",
	"rail-item",
	"nav-bar",
	"nav-item",
	"header",
	"greeting",
	"date",
	"chip",
	"section",
	"section-title",
	"section-count",
	"hero",
	"hero-title",
	"hero-number",
	"hero-unit",
	"hero-line",
	"hero-stat",
	"tile",
	"tile-icon",
	"tile-name",
	"tile-state",
	"tile-value",
	"slider",
	"slider-fill",
	"slider-track",
	"flow",
	"chart",
	"chart-line",
	"chart-area",
	"rest",
	"rest-clock",
	"rest-date",
	"rest-stat"
]);
var STATE_NAMES = Object.freeze([
	"on",
	"off",
	"alert",
	"unavailable",
	"wide",
	"active",
	"own-colour",
	"night"
]);
/** The parts that hold other parts: no letter sizes and no decoration with ::before/::after, which would add up over or push away what they hold. */
var CONTAINER_PARTS = Object.freeze([
	"page",
	"rail",
	"nav-bar",
	"header",
	"section",
	"hero",
	"tile",
	"slider",
	"chart",
	"rest"
]);
/** The parts a picture (`url(data:…)`) may lie on: large surfaces, never a tile, so a picture cannot pass for a state. */
var PICTURE_PARTS = Object.freeze([
	"page",
	"section",
	"hero",
	"rest"
]);
var PARTS = new Set(PART_NAMES);
var STATES = new Set(STATE_NAMES);
var isPart = (name) => PARTS.has(name);
var isState = (name) => STATES.has(name);
/** A part of the rest screen: its CSS comes from the device and the house, never from a dashboard. */
var isRestPart = (name) => name === "rest" || name.startsWith("rest-");
// src/theme/css/tokens.ts
var isNameStart = (c) => /[a-zA-Z_]/.test(c) || c.charCodeAt(0) >= 128;
var isName = (c) => isNameStart(c) || /[0-9-]/.test(c);
var isDigit = (c) => c !== void 0 && c >= "0" && c <= "9";
var isHex = (c) => c !== void 0 && /[0-9a-fA-F]/.test(c);
var isSpace = (c) => c === " " || c === "	" || c === "\n" || c === "\r" || c === "\f";
var MAX_CODE_POINT = 1114111;
function tokenize(input) {
	const text = input.replace(/\r\n?|\f/g, "\n").replace(/\0/g, "�");
	const tokens = [];
	let at = 0;
	let line = 1;
	const peek = (offset = 0) => text[at + offset];
	const next = () => {
		const c = text[at++];
		if (c === "\n") line += 1;
		return c;
	};
	const validEscape = (a, b) => a === "\\" && b !== "\n" && b !== void 0;
	const startsIdent = (a = peek(), b = peek(1), c = peek(2)) => {
		if (a === "-") return b !== void 0 && (isNameStart(b) || b === "-") || validEscape(b, c);
		if (a !== void 0 && isNameStart(a)) return true;
		return validEscape(a, b);
	};
	const startsNumber = (a = peek(), b = peek(1), c = peek(2)) => {
		if (a === "+" || a === "-") return isDigit(b) || b === "." && isDigit(c);
		if (a === ".") return isDigit(b);
		return isDigit(a);
	};
	const escape = () => {
		const c = next();
		if (!isHex(c)) return c;
		let hex = c;
		while (hex.length < 6 && isHex(peek())) hex += next();
		if (isSpace(peek())) next();
		const code = parseInt(hex, 16);
		return code === 0 || code > MAX_CODE_POINT || code >= 55296 && code <= 57343 ? "�" : String.fromCodePoint(code);
	};
	const name = () => {
		let out = "";
		while (at < text.length) {
			const c = peek();
			if (isName(c)) out += next();
			else if (validEscape(c, peek(1))) {
				next();
				out += escape();
			} else break;
		}
		return out;
	};
	const numeric = (startLine) => {
		let raw = "";
		if (peek() === "+" || peek() === "-") raw += next();
		while (isDigit(peek())) raw += next();
		if (peek() === "." && isDigit(peek(1))) {
			raw += next();
			while (isDigit(peek())) raw += next();
		}
		if ((peek() === "e" || peek() === "E") && (isDigit(peek(1)) || (peek(1) === "+" || peek(1) === "-") && isDigit(peek(2)))) {
			raw += next();
			if (peek() === "+" || peek() === "-") raw += next();
			while (isDigit(peek())) raw += next();
		}
		const number = Number(raw);
		if (startsIdent()) {
			const unit = name().toLowerCase();
			return {
				type: "dimension",
				value: `${raw}${unit}`,
				number,
				unit,
				line: startLine
			};
		}
		if (peek() === "%") {
			next();
			return {
				type: "percentage",
				value: `${raw}%`,
				number,
				line: startLine
			};
		}
		return {
			type: "number",
			value: raw,
			number,
			line: startLine
		};
	};
	const string = (quote, startLine) => {
		let out = "";
		while (at < text.length) {
			const c = next();
			if (c === quote) return {
				type: "string",
				value: out,
				line: startLine
			};
			if (c === "\n") return {
				type: "bad-string",
				value: out,
				line: startLine
			};
			if (c === "\\") {
				if (at >= text.length) break;
				if (peek() === "\n") {
					next();
					continue;
				}
				out += escape();
			} else out += c;
		}
		return {
			type: "string",
			value: out,
			line: startLine
		};
	};
	const url = (startLine) => {
		while (isSpace(peek())) next();
		let out = "";
		while (at < text.length) {
			const c = next();
			if (c === ")") return {
				type: "url",
				value: out,
				line: startLine
			};
			if (isSpace(c)) {
				while (isSpace(peek())) next();
				if (peek() === ")") {
					next();
					return {
						type: "url",
						value: out,
						line: startLine
					};
				}
				break;
			}
			if (c === "\"" || c === "'" || c === "(") break;
			if (c === "\\") {
				if (validEscape(c, peek())) {
					out += escape();
					continue;
				}
				break;
			}
			out += c;
		}
		while (at < text.length && peek() !== ")") {
			if (peek() === "\\" && peek(1) !== void 0) next();
			next();
		}
		if (peek() === ")") next();
		return {
			type: "bad-url",
			value: "",
			line: startLine
		};
	};
	while (at < text.length) {
		const startLine = line;
		const c = peek();
		if (c === "/" && peek(1) === "*") {
			next();
			next();
			while (at < text.length && !(peek() === "*" && peek(1) === "/")) next();
			if (at < text.length) {
				next();
				next();
			}
			continue;
		}
		if (isSpace(c)) {
			while (isSpace(peek())) next();
			tokens.push({
				type: "space",
				value: " ",
				line: startLine
			});
			continue;
		}
		if (c === "\"" || c === "'") {
			next();
			tokens.push(string(c, startLine));
			continue;
		}
		if (c === "#") {
			next();
			if (at < text.length && (isName(peek()) || validEscape(peek(), peek(1)))) tokens.push({
				type: "hash",
				value: name(),
				line: startLine
			});
			else tokens.push({
				type: "delim",
				value: "#",
				line: startLine
			});
			continue;
		}
		if (startsNumber()) {
			tokens.push(numeric(startLine));
			continue;
		}
		if (startsIdent()) {
			const value = name();
			if (peek() === "(") {
				next();
				if (value.toLowerCase() === "url") {
					let look = 0;
					while (isSpace(peek(look))) look += 1;
					if (peek(look) !== "\"" && peek(look) !== "'") {
						tokens.push(url(startLine));
						continue;
					}
				}
				tokens.push({
					type: "function",
					value,
					line: startLine
				});
			} else tokens.push({
				type: "ident",
				value,
				line: startLine
			});
			continue;
		}
		if (c === "@") {
			next();
			if (startsIdent()) tokens.push({
				type: "at",
				value: name(),
				line: startLine
			});
			else tokens.push({
				type: "delim",
				value: "@",
				line: startLine
			});
			continue;
		}
		next();
		tokens.push({
			type: {
				":": "colon",
				";": "semicolon",
				",": "comma",
				"(": "(",
				")": ")",
				"[": "[",
				"]": "]",
				"{": "{",
				"}": "}"
			}[c] ?? "delim",
			value: c,
			line: startLine
		});
	}
	return tokens;
}
// src/theme/css/sanitize.ts
var HOST = "mh-app";
var MAX_RULES = 400;
var MAX_VALUE = 400;
var MAX_PICTURE = 32768;
var PSEUDO_CLASSES = /* @__PURE__ */ new Set([
	"hover",
	"active",
	"focus-visible"
]);
var PSEUDO_ELEMENTS = /* @__PURE__ */ new Set(["before", "after"]);
var SAFE_IDENT = /^-?[a-z_][a-z0-9_-]*$/i;
var FAMILY_STRING = /^[A-Za-z0-9 _-]{1,64}$/;
var PICTURE = /^data:image\/(png|jpeg|gif|webp|avif|svg\+xml)(;base64)?,[A-Za-z0-9+/=%._~-]*$/;
var MEDIA_WORDS = /* @__PURE__ */ new Set([
	"and",
	"not",
	"only",
	"screen",
	"all",
	"prefers-color-scheme",
	"light",
	"dark",
	"min-width",
	"max-width",
	"width",
	"min-height",
	"max-height",
	"height",
	"orientation",
	"portrait",
	"landscape",
	"prefers-contrast",
	"more",
	"less",
	"no-preference",
	"hover",
	"none",
	"pointer",
	"fine",
	"coarse"
]);
var COLOUR_FUNCTIONS = /* @__PURE__ */ new Set([
	"rgb",
	"rgba",
	"hsl",
	"hsla",
	"hwb",
	"lab",
	"lch",
	"oklab",
	"oklch"
]);
var GRADIENTS = /* @__PURE__ */ new Set([
	"linear-gradient",
	"radial-gradient",
	"conic-gradient",
	"repeating-linear-gradient",
	"repeating-radial-gradient",
	"repeating-conic-gradient"
]);
var GRADIENT_WORDS = /* @__PURE__ */ new Set([
	"to",
	"left",
	"right",
	"top",
	"bottom",
	"center",
	"circle",
	"ellipse",
	"at",
	"from",
	"in",
	"closest-side",
	"closest-corner",
	"farthest-side",
	"farthest-corner",
	"srgb",
	"srgb-linear",
	"oklab",
	"oklch",
	"lab",
	"lch",
	"hsl",
	"hwb",
	"display-p3",
	"shorter",
	"longer",
	"increasing",
	"decreasing",
	"hue"
]);
var COLOUR_SPACES = /* @__PURE__ */ new Set([
	"srgb",
	"srgb-linear",
	"oklab",
	"oklch",
	"lab",
	"lch",
	"hsl",
	"hwb",
	"display-p3",
	"xyz",
	"shorter",
	"longer",
	"increasing",
	"decreasing",
	"hue"
]);
var LENGTH_UNITS = {
	px: 1,
	em: 16,
	rem: 16,
	ch: 8,
	ex: 8
};
/** A factor of a unit, only for units of the list: `constructor` is no unit. */
var unitOf = (table, unit) => unit !== void 0 && Object.hasOwn(table, unit) ? table[unit] : void 0;
var TIME_UNITS = {
	s: 1e3,
	ms: 1
};
var ANGLE_UNITS = /* @__PURE__ */ new Set([
	"deg",
	"turn",
	"rad",
	"grad"
]);
var MAX_TIME_MS = 6e4;
var NAMED_COLOURS = /* @__PURE__ */ new Set([
	"transparent",
	"currentcolor",
	"black",
	"white",
	"red",
	"green",
	"blue",
	"yellow",
	"orange",
	"purple",
	"pink",
	"brown",
	"gray",
	"grey",
	"silver",
	"gold",
	"navy",
	"teal",
	"olive",
	"maroon",
	"lime",
	"aqua",
	"cyan",
	"magenta",
	"fuchsia",
	"indigo",
	"violet",
	"coral",
	"salmon",
	"tomato",
	"crimson",
	"khaki",
	"beige",
	"ivory",
	"linen",
	"lavender",
	"plum",
	"orchid",
	"tan",
	"chocolate",
	"sienna",
	"peru",
	"wheat",
	"snow",
	"honeydew",
	"mintcream",
	"azure",
	"aliceblue",
	"ghostwhite",
	"whitesmoke",
	"seashell",
	"oldlace",
	"floralwhite",
	"cornsilk",
	"lemonchiffon",
	"darkgreen",
	"darkblue",
	"darkred",
	"darkgray",
	"darkgrey",
	"lightgray",
	"lightgrey",
	"dimgray",
	"dimgrey",
	"slategray",
	"slategrey",
	"steelblue",
	"skyblue",
	"royalblue",
	"midnightblue",
	"forestgreen",
	"seagreen",
	"limegreen",
	"springgreen",
	"turquoise",
	"firebrick",
	"darkorange",
	"goldenrod",
	"rebeccapurple",
	"hotpink",
	"deeppink"
]);
var closer = {
	"{": "}",
	"(": ")",
	"[": "]",
	function: ")"
};
/** Tokens up to the end of a block that opened before `start`, balanced; returns the tokens and where it ends. */
function blockFrom(tokens, start) {
	const stack = ["}"];
	let at = start;
	while (at < tokens.length) {
		const token = tokens[at];
		const close = closer[token.type];
		if (close) stack.push(close);
		else if (token.type === stack.at(-1)) {
			stack.pop();
			if (stack.length === 0) return {
				inside: tokens.slice(start, at),
				end: at + 1
			};
		}
		at += 1;
	}
	return {
		inside: tokens.slice(start),
		end: at
	};
}
function rulesOf(tokens, messages) {
	const rules = [];
	let at = 0;
	while (at < tokens.length) {
		const token = tokens[at];
		if (token.type === "space" || token.type === "semicolon") {
			at += 1;
			continue;
		}
		if (token.type === "}") {
			messages.push({
				line: token.line,
				kind: "syntax",
				detail: "}"
			});
			at += 1;
			continue;
		}
		const kind = token.type === "at" ? "at" : "qualified";
		const prelude = [];
		let block = null;
		if (kind === "at") at += 1;
		const stack = [];
		while (at < tokens.length) {
			const t = tokens[at];
			if (stack.length === 0 && t.type === "{") {
				const { inside, end } = blockFrom(tokens, at + 1);
				block = inside;
				at = end;
				break;
			}
			if (stack.length === 0 && t.type === "semicolon" && kind === "at") {
				at += 1;
				break;
			}
			const close = closer[t.type];
			if (close) stack.push(close);
			else if (t.type === stack.at(-1)) stack.pop();
			prelude.push(t);
			at += 1;
		}
		rules.push({
			kind,
			name: kind === "at" ? token.value.toLowerCase() : "",
			prelude,
			block,
			line: token.line
		});
	}
	return rules;
}
var trim = (tokens) => {
	let start = 0;
	let end = tokens.length;
	while (start < end && tokens[start].type === "space") start += 1;
	while (end > start && tokens[end - 1].type === "space") end -= 1;
	return tokens.slice(start, end);
};
/** Splits at the commas outside brackets. */
function splitCommas(tokens) {
	const out = [[]];
	let depth = 0;
	for (const token of tokens) {
		if (token.type === "(" || token.type === "function" || token.type === "[") depth += 1;
		else if (token.type === ")" || token.type === "]") depth -= 1;
		if (token.type === "comma" && depth === 0) out.push([]);
		else out.at(-1).push(token);
	}
	return out.map(trim);
}
/** The arguments of a function at `at`: the tokens up to its closing bracket, and where that is. */
function argsOf(tokens, at) {
	let depth = 1;
	for (let i = at + 1; i < tokens.length; i += 1) {
		const type = tokens[i].type;
		if (type === "function" || type === "(") depth += 1;
		else if (type === ")") {
			depth -= 1;
			if (depth === 0) return {
				args: tokens.slice(at + 1, i),
				end: i
			};
		}
	}
	return null;
}
/** A setting of the theme a value may refer to: one that the editor can set, or a colour role it can set. */
function referable(name) {
	const entry = entryOf(name);
	return entry !== void 0 && entry.kind.kind !== "fixed";
}
/** What only a part with text of its own may set: on a part that holds others it would add up over them. */
var TEXT_ONLY = /* @__PURE__ */ new Set(["font-size"]);
/** What takes room inside a part: on a part that holds tiles it would make them smaller, so only a tile itself may. */
var ROOM = /^(padding|gap|row-gap|column-gap|border|border-(top|right|bottom|left)|border-width|border-style|border-(top|right|bottom|left)-(width|style))$/;
var join = (pieces) => pieces.join("").replace(/ {2,}/g, " ").replace(/ ?, ?/g, ",").replace(/\( /g, "(").replace(/ \)/g, ")").trim();
function length(token, bounds) {
	const factor = unitOf(LENGTH_UNITS, token.unit ?? "");
	if (factor === void 0 || bounds === void 0 || token.number === void 0) return null;
	const px = token.number * factor;
	return px >= bounds[0] && px <= bounds[1] ? token.value.toLowerCase() : null;
}
/** A colour on its own: a hex, a name, a role or setting of the theme, or a colour function of plain numbers. */
/** How deep colours may mix within one another. */
var MAX_MIX_DEPTH = 3;
function colour(tokens, ctx, depth = 0) {
	if (depth > MAX_MIX_DEPTH) return null;
	const parts = trim(tokens);
	if (parts.length === 0) return null;
	const first = parts[0];
	if (parts.length === 1) {
		if (first.type === "hash") return [
			3,
			4,
			6,
			8
		].includes(first.value.length) && /^[0-9a-f]+$/i.test(first.value) ? `#${first.value.toLowerCase()}` : null;
		if (first.type === "ident") {
			const lower = first.value.toLowerCase();
			return NAMED_COLOURS.has(lower) ? lower === "currentcolor" ? "currentColor" : lower : null;
		}
	}
	if (first.type !== "function") return null;
	const found = argsOf(parts, 0);
	if (!found || found.end !== parts.length - 1) return null;
	const name = first.value.toLowerCase();
	if (name === "var") return variable(found.args);
	if (COLOUR_FUNCTIONS.has(name)) {
		const out = [];
		for (const token of found.args) if (token.type === "space") out.push(" ");
		else if (token.type === "comma") out.push(",");
		else if (token.type === "delim" && token.value === "/") out.push("/");
		else if (token.type === "number" || token.type === "percentage") out.push(token.value);
		else if (token.type === "dimension" && ANGLE_UNITS.has(token.unit ?? "")) out.push(token.value.toLowerCase());
		else if (token.type === "ident" && token.value.toLowerCase() === "none") out.push("none");
		else return null;
		return `${name}(${join(out)})`;
	}
	if (name === "color-mix") {
		const groups = splitCommas(found.args);
		if (groups.length !== 3) return null;
		const space = groups[0].filter((token) => token.type !== "space");
		if (space[0]?.type !== "ident" || space[0].value.toLowerCase() !== "in" || !space.slice(1).every((token) => token.type === "ident" && COLOUR_SPACES.has(token.value.toLowerCase()))) return null;
		const sides = groups.slice(1).map((group) => {
			const last = group.at(-1);
			if (last?.type === "percentage" && last.number !== void 0 && last.number >= 0 && last.number <= 100) {
				const own = colour(group.slice(0, -1), ctx, depth + 1);
				return own === null ? null : `${own} ${last.value}`;
			}
			return colour(group, ctx, depth + 1);
		});
		if (sides.some((side) => side === null)) return null;
		return `color-mix(in ${space.slice(1).map((token) => token.value.toLowerCase()).join(" ")},${sides.join(",")})`;
	}
	return null;
}
function variable(args) {
	const inside = trim(args);
	if (inside.length !== 1 || inside[0].type !== "ident") return null;
	const name = inside[0].value;
	return name.startsWith("--") && SAFE_IDENT.test(name.slice(2)) && referable(name.slice(2)) ? `var(${name})` : null;
}
function picture(token, tokens, at) {
	if (token.type === "url") return PICTURE.test(token.value) ? {
		text: `url("${token.value}")`,
		end: at
	} : null;
	if (token.type === "function" && token.value.toLowerCase() === "url") {
		const found = argsOf(tokens, at);
		const inside = found ? trim(found.args) : [];
		if (!found || inside.length !== 1 || inside[0].type !== "string" || !PICTURE.test(inside[0].value)) return null;
		return {
			text: `url("${inside[0].value}")`,
			end: found.end
		};
	}
	return null;
}
function gradient(args, ctx) {
	const out = [];
	for (const group of splitCommas(args)) {
		const pieces = [];
		let at = 0;
		while (at < group.length) {
			const token = group[at];
			if (token.type === "space") {
				pieces.push(" ");
				at += 1;
				continue;
			}
			if (token.type === "ident" && GRADIENT_WORDS.has(token.value.toLowerCase())) {
				pieces.push(token.value.toLowerCase());
				at += 1;
				continue;
			}
			if (token.type === "dimension" && ANGLE_UNITS.has(token.unit ?? "")) {
				pieces.push(token.value.toLowerCase());
				at += 1;
				continue;
			}
			if (token.type === "percentage" || token.type === "number" && token.number === 0) {
				pieces.push(token.value);
				at += 1;
				continue;
			}
			if (token.type === "dimension") {
				const own = length(token, [-2e3, 2e3]);
				if (own === null) return null;
				pieces.push(own);
				at += 1;
				continue;
			}
			const end = token.type === "function" ? argsOf(group, at)?.end ?? -1 : at;
			if (end < 0) return null;
			const own = colour(group.slice(at, end + 1), ctx);
			if (own === null) return null;
			pieces.push(own);
			at = end + 1;
		}
		out.push(join(pieces));
	}
	return out.join(",");
}
function shadow(groups, ctx) {
	const out = [];
	const box = ctx.spec.shadow === "box";
	for (const group of groups) {
		if (group.length === 1 && group[0].type === "ident" && group[0].value.toLowerCase() === "none") {
			out.push("none");
			continue;
		}
		const lengths = [];
		const values = [];
		let tint = null;
		let inset = false;
		let at = 0;
		while (at < group.length) {
			const token = group[at];
			if (token.type === "space") {
				at += 1;
				continue;
			}
			if (box && token.type === "ident" && token.value.toLowerCase() === "inset" && !inset) {
				inset = true;
				at += 1;
				continue;
			}
			if (token.type === "dimension" && unitOf(LENGTH_UNITS, token.unit) !== void 0 || token.type === "number" && token.number === 0) {
				values.push((token.number ?? 0) * (unitOf(LENGTH_UNITS, token.unit) ?? 1));
				lengths.push(token.type === "number" ? "0" : token.value.toLowerCase());
				at += 1;
				continue;
			}
			if (tint !== null) return null;
			const end = token.type === "function" ? argsOf(group, at)?.end ?? -1 : at;
			if (end < 0) return null;
			tint = colour(group.slice(at, end + 1), ctx);
			if (tint === null) return null;
			at = end + 1;
		}
		const most = box ? 4 : 3;
		if (lengths.length < 2 || lengths.length > most) return null;
		const [x, y, blur = 0, spread = 0] = values;
		if (Math.abs(x) > SHADOW_BOUNDS.offset || Math.abs(y) > SHADOW_BOUNDS.offset || blur < 0 || blur > SHADOW_BOUNDS.blur || Math.abs(spread) > SHADOW_BOUNDS.spread) return null;
		out.push([
			inset ? "inset" : "",
			...lengths,
			tint ?? ""
		].filter(Boolean).join(" "));
	}
	return out.join(",");
}
/** A value as the property allows it, written anew; null when anything in it is not allowed. */
function value(tokens, ctx) {
	const { spec } = ctx;
	const parts = trim(tokens);
	if (parts.length === 0) return null;
	if (spec.shadow) return shadow(splitCommas(parts), ctx);
	if (spec.pieces.includes("empty-string")) return parts.length === 1 && parts[0].type === "string" && parts[0].value === "" ? "\"\"" : null;
	const out = [];
	let at = 0;
	let times = 0;
	while (at < parts.length) {
		const token = parts[at];
		const has = (piece) => spec.pieces.includes(piece);
		switch (token.type) {
			case "space":
				out.push(" ");
				at += 1;
				continue;
			case "comma":
				if (!spec.list) return null;
				out.push(",");
				times = 0;
				at += 1;
				continue;
			case "delim":
				if (!spec.slash || token.value !== "/") return null;
				out.push(" / ");
				at += 1;
				continue;
			case "hash": {
				const own = has("colour") ? colour([token], ctx) : null;
				if (own === null) return null;
				out.push(own);
				at += 1;
				continue;
			}
			case "ident": {
				const lower = token.value.toLowerCase();
				if (spec.keywords?.includes(lower)) out.push(lower);
				else if (has("colour") && NAMED_COLOURS.has(lower)) out.push(colour([token], ctx));
				else if (has("family") && SAFE_IDENT.test(token.value)) out.push(token.value);
				else if (spec.animation && ctx.keyframes.has(lower)) out.push(`${ctx.prefix}-${lower}`);
				else if (spec.transition && MOVING.includes(lower)) out.push(lower);
				else return null;
				at += 1;
				continue;
			}
			case "string":
				if (!has("family") || !FAMILY_STRING.test(token.value)) return null;
				out.push(`"${token.value}"`);
				at += 1;
				continue;
			case "number": {
				const n = token.number;
				if (has("number") && spec.number && n >= spec.number[0] && n <= spec.number[1]) out.push(token.value);
				else if (n === 0 && has("length") && spec.length && spec.length[0] <= 0 && spec.length[1] >= 0) out.push("0");
				else return null;
				at += 1;
				continue;
			}
			case "percentage": {
				const n = token.number;
				if (!has("percentage") || !spec.percentage || n < spec.percentage[0] || n > spec.percentage[1]) return null;
				out.push(token.value);
				at += 1;
				continue;
			}
			case "dimension": {
				const unit = token.unit ?? "";
				if (has("time") && unitOf(TIME_UNITS, unit) !== void 0) {
					const ms = token.number * unitOf(TIME_UNITS, unit);
					if (ms < 0 || ms > (spec.maxTime ?? MAX_TIME_MS)) return null;
					times += 1;
					if (spec.oneTime && times > 1) return null;
					out.push(token.value.toLowerCase());
				} else if (spec.em) {
					if (unit !== "em" && unit !== "rem" || token.number < spec.em[0] || token.number > spec.em[1]) return null;
					out.push(token.value.toLowerCase());
				} else {
					const own = has("length") ? length(token, spec.length) : null;
					if (own === null) return null;
					out.push(own);
				}
				at += 1;
				continue;
			}
			case "url":
			case "function": {
				if (has("picture") && ctx.picture) {
					const found = picture(token, parts, at);
					if (found) {
						out.push(found.text);
						at = found.end + 1;
						continue;
					}
				}
				if (token.type === "url") return null;
				const name = token.value.toLowerCase();
				const found = argsOf(parts, at);
				if (!found) return null;
				let own = null;
				if (has("gradient") && GRADIENTS.has(name)) {
					const inside = gradient(found.args, ctx);
					own = inside === null ? null : `${name}(${inside})`;
				} else if (has("colour")) own = colour(parts.slice(at, found.end + 1), ctx);
				if (own === null) return null;
				out.push(own);
				at = found.end + 1;
				continue;
			}
			default: return null;
		}
	}
	const text = join(out);
	return text.length <= (text.includes("url(") ? MAX_PICTURE : MAX_VALUE) ? text : null;
}
function selector(tokens) {
	const raw = trim(tokens);
	let at = 0;
	const take = (type, value) => {
		const token = raw[at];
		if (!token || token.type !== type || value !== void 0 && token.value.toLowerCase() !== value) return null;
		at += 1;
		return token;
	};
	if (!take("colon") || !take("colon") || !take("function", "part")) return null;
	const names = [];
	while (at < raw.length && raw[at].type !== ")") {
		const token = raw[at];
		if (token.type === "ident") names.push(token.value.toLowerCase());
		else if (token.type !== "space") return null;
		at += 1;
	}
	if (!take(")")) return null;
	let pseudo = "";
	if (raw[at]?.type === "colon" && raw[at + 1]?.type === "ident") {
		const name = raw[at + 1].value.toLowerCase();
		if (!PSEUDO_CLASSES.has(name)) return null;
		pseudo += `:${name}`;
		at += 2;
	}
	if (raw[at]?.type === "colon" && raw[at + 1]?.type === "colon" && raw[at + 2]?.type === "ident") {
		const name = raw[at + 2].value.toLowerCase();
		if (!PSEUDO_ELEMENTS.has(name)) return null;
		pseudo += `::${name}`;
		at += 3;
	}
	if (at !== raw.length) return null;
	if (names.length === 0 || !names.every((name) => isPart(name) || isState(name))) return null;
	const own = names.filter(isPart);
	if (own.length !== 1) return null;
	const container = CONTAINER_PARTS.includes(own[0]);
	if (container && pseudo.includes("::")) return null;
	return {
		text: `${HOST}::part(${names.join(" ")})${pseudo}`,
		rest: isRestPart(own[0]),
		picture: PICTURE_PARTS.includes(own[0]),
		container,
		holdsTiles: container && own[0] !== "tile"
	};
}
function declarations(block, list, base, messages, only) {
	const written = {
		normal: [],
		motion: []
	};
	const pieces = [[]];
	let depth = 0;
	for (const token of block) {
		if (token.type === "{" || token.type === "(" || token.type === "function" || token.type === "[") depth += 1;
		else if (token.type === "}" || token.type === ")" || token.type === "]") depth -= 1;
		if (token.type === "semicolon" && depth === 0) pieces.push([]);
		else pieces.at(-1).push(token);
	}
	for (const raw of pieces) {
		const tokens = trim(raw);
		if (tokens.length === 0) continue;
		const line = tokens[0].line;
		if (tokens[0].type !== "ident" || trim(tokens.slice(1))[0]?.type !== "colon") {
			messages.push({
				line,
				kind: "syntax",
				detail: tokens[0].value
			});
			continue;
		}
		const name = tokens[0].value.toLowerCase();
		let rest = trim(trim(tokens.slice(1)).slice(1));
		const bang = rest.findIndex((token) => token.type === "delim" && token.value === "!");
		if (bang >= 0) {
			const after = trim(rest.slice(bang + 1));
			if (after.length === 1 && after[0].type === "ident" && after[0].value.toLowerCase() === "important") {
				messages.push({
					line,
					kind: "important",
					detail: name
				});
				rest = trim(rest.slice(0, bang));
			}
		}
		if (rest.some((token) => token.type === "{" || token.type === "}")) {
			messages.push({
				line,
				kind: "syntax",
				detail: name
			});
			continue;
		}
		if (name.startsWith("--") && list === NARROW) {
			messages.push({
				line,
				kind: "not-allowed",
				detail: name
			});
			continue;
		}
		if (name.startsWith("--")) {
			const entry = SAFE_IDENT.test(name.slice(2)) ? entryOf(name.slice(2)) : void 0;
			const text = rest.map((token) => token.type === "hash" ? `#${token.value}` : token.type === "space" ? " " : token.type === "function" ? `${token.value}(` : token.type === "comma" ? "," : token.value).join("");
			const own = entry && entry.kind.kind !== "fixed" && !only ? checkValue(entry.kind, text) : null;
			if (own === null) messages.push({
				line,
				kind: entry && entry.kind.kind !== "fixed" ? "value" : "never",
				detail: name
			});
			else written.normal.push(`${name}:${own}`);
			continue;
		}
		if (only && !only.includes(name)) {
			messages.push({
				line,
				kind: "never",
				detail: name
			});
			continue;
		}
		const spec = base.container && TEXT_ONLY.has(name) || base.holdsTiles && ROOM.test(name) ? void 0 : list[name];
		if (!spec) {
			messages.push({
				line,
				kind: WIDE[name] ? "not-allowed" : "never",
				detail: name
			});
			continue;
		}
		const own = value(rest, {
			...base,
			spec
		});
		if (own === null) {
			messages.push({
				line,
				kind: "value",
				detail: name
			});
			continue;
		}
		(name.startsWith("animation") || name.startsWith("transition") ? written.motion : written.normal).push(`${name}:${own}`);
	}
	return written;
}
function media(prelude) {
	const out = [];
	for (const token of trim(prelude)) if (token.type === "space") out.push(" ");
	else if (token.type === "(" || token.type === ")" || token.type === "colon" || token.type === "comma") out.push(token.type === "colon" ? ":" : token.type === "comma" ? "," : token.type);
	else if (token.type === "ident" && MEDIA_WORDS.has(token.value.toLowerCase())) out.push(token.value.toLowerCase());
	else if (token.type === "dimension" && unitOf(LENGTH_UNITS, token.unit) !== void 0 && token.number >= 0 && token.number <= 1e4) out.push(token.value.toLowerCase());
	else if (token.type === "number" && token.number >= 0 && token.number <= 1e4) out.push(token.value);
	else return null;
	const text = out.join("").replace(/ ?: ?/g, ":").replace(/\( /g, "(").replace(/ \)/g, ")").replace(/ {2,}/g, " ").trim();
	return text.length > 0 ? text : null;
}
/** Own CSS read and written anew: only `::part()` rules with what the list allows; everything else is named and left out. */
function sanitizeCss(text, options) {
	const messages = [];
	const list = options.list === "wide" ? WIDE : NARROW;
	const rules = rulesOf(tokenize(text), messages);
	const keyframes = new Set(rules.filter((rule) => rule.kind === "at" && rule.name === "keyframes").map((rule) => trim(rule.prelude)[0]).filter((token) => token?.type === "ident" && SAFE_IDENT.test(token.value)).map((token) => token.value.toLowerCase()));
	const base = {
		keyframes: options.list === "wide" ? keyframes : /* @__PURE__ */ new Set(),
		prefix: options.keyframes
	};
	const dashboard = [];
	const rest = [];
	let count = 0;
	const styleRule = (rule, wrap) => {
		const out = {
			dashboard: [],
			rest: []
		};
		const selectors = splitCommas(rule.prelude).map((group) => {
			const own = selector(group);
			if (!own) messages.push({
				line: group[0]?.line ?? rule.line,
				kind: "selector",
				detail: group.map((token) => token.value).join("").slice(0, 60)
			});
			return own;
		}).filter((own) => own !== null);
		if (selectors.length === 0 || rule.block === null) return out;
		let told = false;
		for (const place of ["dashboard", "rest"]) {
			const chosen = selectors.filter((own) => own.rest === (place === "rest"));
			if (chosen.length === 0) continue;
			const picture = chosen.every((own) => own.picture);
			const container = chosen.some((own) => own.container);
			const holdsTiles = chosen.some((own) => own.holdsTiles);
			const written = declarations(rule.block, list, {
				...base,
				picture,
				container,
				holdsTiles
			}, told ? [] : messages);
			told = true;
			const names = chosen.map((own) => own.text).join(",");
			if (written.normal.length > 0) out[place].push(wrap(`${names}{${written.normal.join(";")}}`));
			if (written.motion.length > 0) out[place].push(wrap(`@media (prefers-reduced-motion:no-preference){${names}{${written.motion.join(";")}}}`));
		}
		return out;
	};
	for (const rule of rules) {
		count += 1;
		if (count > MAX_RULES) {
			messages.push({
				line: rule.line,
				kind: "too-many",
				detail: String(MAX_RULES)
			});
			break;
		}
		if (rule.kind === "qualified") {
			const out = styleRule(rule, (css) => css);
			dashboard.push(...out.dashboard);
			rest.push(...out.rest);
			continue;
		}
		if (rule.name === "media" && rule.block !== null) {
			const condition = media(rule.prelude);
			if (condition === null) {
				messages.push({
					line: rule.line,
					kind: "at-rule",
					detail: "@media"
				});
				continue;
			}
			const inner = rulesOf(rule.block, messages);
			const inside = {
				dashboard: [],
				rest: []
			};
			for (const child of inner) {
				if (child.kind !== "qualified") {
					messages.push({
						line: child.line,
						kind: "at-rule",
						detail: `@${child.name}`
					});
					continue;
				}
				const out = styleRule(child, (css) => css);
				inside.dashboard.push(...out.dashboard);
				inside.rest.push(...out.rest);
			}
			if (inside.dashboard.length > 0) dashboard.push(`@media ${condition}{${inside.dashboard.join("")}}`);
			if (inside.rest.length > 0) rest.push(`@media ${condition}{${inside.rest.join("")}}`);
			continue;
		}
		if (rule.name === "keyframes" && rule.block !== null && options.list === "wide") {
			const name = trim(rule.prelude);
			if (name.length !== 1 || name[0].type !== "ident" || !SAFE_IDENT.test(name[0].value)) {
				messages.push({
					line: rule.line,
					kind: "at-rule",
					detail: "@keyframes"
				});
				continue;
			}
			const frames = [];
			for (const frame of rulesOf(rule.block, messages)) {
				const stops = splitCommas(frame.prelude).map((stop) => {
					const token = stop.length === 1 ? stop[0] : null;
					if (token?.type === "ident" && ["from", "to"].includes(token.value.toLowerCase())) return token.value.toLowerCase();
					if (token?.type === "percentage" && token.number >= 0 && token.number <= 100) return token.value;
					return null;
				});
				if (frame.kind !== "qualified" || frame.block === null || stops.some((stop) => stop === null)) {
					messages.push({
						line: frame.line,
						kind: "syntax",
						detail: "@keyframes"
					});
					continue;
				}
				const written = declarations(frame.block, list, {
					...base,
					picture: false,
					container: false,
					holdsTiles: false
				}, messages, MOVING);
				if (written.normal.length > 0) frames.push(`${stops.join(",")}{${written.normal.join(";")}}`);
			}
			const css = `@keyframes ${options.keyframes}-${name[0].value.toLowerCase()}{${frames.join("")}}`;
			dashboard.push(css);
			rest.push(css);
			continue;
		}
		messages.push({
			line: rule.line,
			kind: "at-rule",
			detail: `@${rule.name}`
		});
	}
	const moving = (sheet) => sheet.some((css) => !css.startsWith("@keyframes")) ? sheet : [];
	return {
		dashboard: moving(dashboard).join("\n"),
		rest: moving(rest).join("\n"),
		messages
	};
}
// src/theme/css/fake-alarm.ts
var NEAR = .04;
var distance = (a, b) => Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b) / Math.sqrt(3);
/** What paints the face of a tile: its background in every form, and a shadow inside it. */
var PAINTING = /* @__PURE__ */ new Set([
	"background",
	"background-color",
	"background-image",
	"box-shadow"
]);
function hexColour(hex) {
	const full = hex.length <= 4 ? [...hex].map((c) => c + c).join("") : hex;
	return {
		r: parseInt(full.slice(0, 2), 16) / 255,
		g: parseInt(full.slice(2, 4), 16) / 255,
		b: parseInt(full.slice(4, 6), 16) / 255,
		a: 1
	};
}
/** Every colour a written value names: hex colours, rgb() and references to the theme. */
function coloursIn(value, tokens) {
	const found = [];
	for (const match of value.matchAll(/#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})\b/gi)) found.push(hexColour(match[1].toLowerCase()));
	for (const match of value.matchAll(/rgba?\(([^)]*)\)/gi)) {
		const parts = match[1].split(/[\s,/]+/).filter(Boolean).slice(0, 3);
		const channel = (part) => part.endsWith("%") ? Number(part.slice(0, -1)) / 100 : Number(part) / 255;
		if (parts.length === 3 && parts.every((part) => Number.isFinite(channel(part)))) found.push({
			r: channel(parts[0]),
			g: channel(parts[1]),
			b: channel(parts[2]),
			a: 1
		});
	}
	for (const match of value.matchAll(/var\((--[a-z0-9-]+)\)/gi)) found.push(...coloursOf(`var(${match[1]})`, tokens) ?? []);
	return found;
}
/**
* Whether own CSS gives plain tiles the colour of an alarm: then a real alarm no longer stands out. Read from what the
* page would use of it: the rules for tiles that are not an alarm, in any form that paints them, and values of the
* theme that it sets anywhere (they reach the tiles below).
*/
function cssFakesAlarm(text, tokens) {
	const alarm = coloursOf(tokens["--tile-alert-bg"] ?? "", tokens)?.[0];
	if (!alarm || text.trim() === "") return false;
	const { dashboard } = sanitizeCss(text, {
		list: "wide",
		keyframes: "k"
	});
	const near = (value) => coloursIn(value, tokens).some((colour) => distance(colour, alarm) < NEAR);
	for (const rule of dashboard.matchAll(/((?:mh-app::part\([^)]*\)[^,{]*,?)+)\{([^}]*)\}/g)) {
		const plainTile = [...rule[1].matchAll(/::part\(([^)]*)\)/g)].map((match) => match[1].split(" ")).some((names) => (names.includes("tile") || names.includes("tile-icon")) && !names.includes("alert"));
		for (const declaration of rule[2].split(";")) {
			const at = declaration.indexOf(":");
			if (at < 0) continue;
			const property = declaration.slice(0, at);
			const value = declaration.slice(at + 1);
			if (property.startsWith("--") && near(value)) return true;
			if (plainTile && PAINTING.has(property) && near(value)) return true;
		}
	}
	return false;
}
// src/theme/css/lines.ts
function cssLines(text) {
	const lineOf = (list) => new Set(sanitizeCss(text, {
		list,
		keyframes: "k"
	}).messages.filter((message) => message.kind !== "important").map((message) => message.line));
	const never = lineOf("wide");
	return {
		never,
		notYet: new Set([...lineOf("narrow")].filter((line) => !never.has(line)))
	};
}
// src/theme/theme-file.ts
/** The limits of what is kept of themes. */
var LIMITS_LOOKS = {
	themes: 50,
	nameLength: 60,
	fileBytes: 65536,
	valuesPerLayer: 600,
	valueLength: 200,
	totalBytes: 1048576
};
var OWN_ID = /^t-[0-9a-z]{16}$/;
var APP_VERSION = /^\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var ID_LENGTH = 16;
var UNPRINTABLE = /[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g;
var UNPRINTABLE_ONE = /[\u0000-\u001f\u007f-\u009f\u2028\u2029]/;
/** The id of a theme someone made, never that of a built-in style. From getRandomValues: randomUUID only exists on a secure origin. */
function newThemeId() {
	return `t-${[...crypto.getRandomValues(new Uint8Array(ID_LENGTH))].map((byte) => (byte % 36).toString(36)).join("")}`;
}
var isOwnThemeId = (id) => typeof id === "string" && OWN_ID.test(id);
var isRecord = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var own = (record, key) => Object.hasOwn(record, key) ? record[key] : void 0;
function text(value, limit) {
	if (typeof value !== "string") return null;
	return value.replace(UNPRINTABLE, "").replace(/\s+/g, " ").trim().slice(0, limit);
}
var KNOWN = /* @__PURE__ */ new Set([
	"format",
	"id",
	"name",
	"maker",
	"base",
	"seed",
	"userSeed",
	"knobs",
	"app"
]);
var LATEST_FORMAT = 2;
/** A name of a value as a theme writes it: lower case, without the leading dashes. */
var VALUE_NAME = /^[a-z][a-z0-9-]{0,63}$/;
var UNSAFE_KEYS = /* @__PURE__ */ new Set(["__proto__"]);
/** The values of a format-2 theme, layer by layer: names of the right shape with text of a sane length, the rest named. */
function parseValues(raw, dropped) {
	if (raw === void 0) return void 0;
	if (!isRecord(raw)) {
		dropped.push("values");
		return;
	}
	const values = {};
	for (const layer of Object.keys(raw)) {
		if (UNSAFE_KEYS.has(layer)) continue;
		const layerRaw = raw[layer];
		if (!VALUE_LAYERS.includes(layer) || !isRecord(layerRaw)) {
			dropped.push(`values.${layer}`);
			continue;
		}
		const kept = Object.create(null);
		let count = 0;
		for (const name of Object.keys(layerRaw)) {
			if (UNSAFE_KEYS.has(name)) continue;
			const value = layerRaw[name];
			if (!(VALUE_NAME.test(name) && typeof value === "string" && value.length <= LIMITS_LOOKS.valueLength && !UNPRINTABLE_ONE.test(value)) || count >= LIMITS_LOOKS.valuesPerLayer) {
				dropped.push(`values.${layer}.${name}`);
				continue;
			}
			kept[name] = value;
			count += 1;
		}
		if (count > 0) values[layer] = { ...kept };
	}
	return Object.keys(values).length > 0 ? values : void 0;
}
/** CSS of a theme from outside: a version and a text; anything else is named and left out. */
function parseCss(raw, dropped) {
	if (raw === void 0) return void 0;
	if (isRecord(raw) && typeof raw["version"] === "number" && Number.isInteger(raw["version"]) && raw["version"] >= 1 && typeof raw["text"] === "string") return {
		version: raw["version"],
		text: raw["text"]
	};
	dropped.push("css");
}
var hasCss = (file) => file.css !== void 0 && file.css.text.trim() !== "";
/** The format a theme is written in: 2 only when it has values or CSS of its own, or the empty base. */
function fileFormat(file) {
	return file.base === "leeg" || valuesCount(file.values) > 0 || hasCss(file) ? 2 : 1;
}
/** The longest share code the theme gallery takes: a form on GitHub holds 65 536 characters. */
var GALLERY_CODE_LIMIT = 6e4;
/** The oldest version of the app that shows all of a theme: 1.2.0 brought own values and the empty base, 1.3.0 own CSS. */
function minimumApp(file) {
	if (hasCss(file)) return "1.3.0";
	return fileFormat(file) === 2 ? "1.2.0" : "1.1.0";
}
/** A theme as it is written: in the lowest format that holds it. */
function written(file) {
	const format = fileFormat(file);
	const { css, ...rest } = file;
	const kept = hasCss(file) ? {
		...rest,
		css
	} : rest;
	if (format === 2) return {
		...kept,
		format
	};
	const { values: _values, ...plain } = kept;
	return {
		...plain,
		format
	};
}
function valuesCount(values) {
	return values === void 0 ? 0 : VALUE_LAYERS.reduce((sum, layer) => sum + Object.keys(values[layer] ?? {}).length, 0);
}
/**
* A theme from outside (a file, a code, the hub), checked field by field: only known keys with values of their kind
* come through, the rest falls away and is named. A later format or an unknown base is too new. Never throws.
*/
function parseThemeFile(raw) {
	try {
		if (!isRecord(raw)) return {
			ok: false,
			reason: "not-a-theme"
		};
		const format = own(raw, "format");
		if (typeof format === "number" && Number.isInteger(format) && format > LATEST_FORMAT) return {
			ok: false,
			reason: "too-new"
		};
		if (format !== 1 && format !== 2) return {
			ok: false,
			reason: "not-a-theme"
		};
		const base = own(raw, "base");
		if (base === void 0) return {
			ok: false,
			reason: "not-a-theme"
		};
		if (!isBase(base) && !(format === 2 && base === "leeg")) return {
			ok: false,
			reason: "too-new"
		};
		if (new TextEncoder().encode(JSON.stringify(raw)).length > LIMITS_LOOKS.fileBytes) return {
			ok: false,
			reason: "too-big"
		};
		const dropped = Object.keys(raw).filter((key) => !KNOWN.has(key) && !(format === 2 && (key === "values" || key === "css")));
		const take = (key, value, fallback) => {
			if (value !== null) return value;
			if (own(raw, key) !== void 0) dropped.push(key);
			return fallback;
		};
		const id = take("id", isOwnThemeId(own(raw, "id")) ? own(raw, "id") : null, "") || newThemeId();
		const name = take("name", text(own(raw, "name"), LIMITS_LOOKS.nameLength), "");
		const maker = take("maker", text(own(raw, "maker"), LIMITS_LOOKS.nameLength), "");
		const seedRaw = own(raw, "seed");
		const seed = seedRaw === null ? null : take("seed", typeof seedRaw === "string" && isValidSeed(seedRaw) ? seedRaw.toLowerCase() : null, null);
		const userSeedRaw = own(raw, "userSeed");
		const userSeed = take("userSeed", typeof userSeedRaw === "boolean" ? userSeedRaw : null, true);
		const appRaw = own(raw, "app");
		const app = appRaw === "" ? "" : take("app", typeof appRaw === "string" && APP_VERSION.test(appRaw) ? appRaw : null, "");
		const knobs = {};
		const knobsRaw = own(raw, "knobs");
		if (isRecord(knobsRaw)) for (const key of Object.keys(knobsRaw)) if ((Object.hasOwn(KNOB_VALUES, key) ? KNOB_VALUES[key] : null)?.includes(knobsRaw[key])) knobs[key] = knobsRaw[key];
		else dropped.push(`knobs.${key}`);
		else if (knobsRaw !== void 0) dropped.push("knobs");
		const values = format === 2 ? parseValues(own(raw, "values"), dropped) : void 0;
		const css = format === 2 ? parseCss(own(raw, "css"), dropped) : void 0;
		const file = {
			format,
			id,
			name,
			maker,
			base,
			seed,
			userSeed,
			knobs,
			app
		};
		if (values !== void 0) file.values = values;
		if (css !== void 0) file.css = css;
		return {
			ok: true,
			file,
			dropped
		};
	} catch {
		return {
			ok: false,
			reason: "not-a-theme"
		};
	}
}
/** How many values a theme sets of its own: its colour, its knobs and its values. */
function valueCount(file) {
	return (file.seed === null ? 0 : 1) + Object.keys(file.knobs).length + valuesCount(file.values) + (hasCss(file) ? 1 : 0);
}
// src/theme/share-code.ts
var LATEST_CODE = 2;
var CODE = /^EH(\d+)\.([A-Za-z0-9_-]+)\.([0-9a-z]+)$/;
var CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
	let c = n;
	for (let k = 0; k < 8; k += 1) c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
	return c >>> 0;
});
/** The CRC-32 of some bytes, as in zip files: a changed or missing letter is noticed. */
function crc32(bytes) {
	let crc = 4294967295;
	for (const byte of bytes) crc = CRC_TABLE[(crc ^ byte) & 255] ^ crc >>> 8;
	return (crc ^ 4294967295) >>> 0;
}
function toBase64Url(bytes) {
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function fromBase64Url(text) {
	try {
		const binary = atob(text.replace(/-/g, "+").replace(/_/g, "/"));
		return Uint8Array.from(binary, (char) => char.charCodeAt(0));
	} catch {
		return null;
	}
}
/** A theme as a code to paste: its format, the theme in letters and digits, and a check number. */
function toShareCode(file) {
	const shown = written(file);
	const bytes = new TextEncoder().encode(JSON.stringify(shown));
	return `EH${shown.format}.${toBase64Url(bytes)}.${crc32(bytes).toString(36)}`;
}
/** A pasted code back into a theme; spaces and line breaks in it do not matter, a changed or missing letter does. */
function fromShareCode(text) {
	const code = text.replace(/\s+/g, "");
	if (code.length > LIMITS_LOOKS.fileBytes * 2) return {
		ok: false,
		reason: "too-big"
	};
	const match = CODE.exec(code);
	if (!match) return {
		ok: false,
		reason: /^EH\d+\./.test(code) ? "damaged" : "not-a-theme"
	};
	const format = Number(match[1]);
	if (format > LATEST_CODE) return {
		ok: false,
		reason: "too-new"
	};
	if (format !== 1 && format !== 2) return {
		ok: false,
		reason: "not-a-theme"
	};
	const bytes = fromBase64Url(match[2]);
	if (!bytes || crc32(bytes).toString(36) !== match[3] || toBase64Url(bytes) !== match[2]) return {
		ok: false,
		reason: "damaged"
	};
	try {
		const raw = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
		if (typeof raw === "object" && raw !== null && raw["format"] !== format) return {
			ok: false,
			reason: "damaged"
		};
		return parseThemeFile(raw);
	} catch {
		return {
			ok: false,
			reason: "damaged"
		};
	}
}
/** A theme as the text of a file. */
function toFileText(file) {
	return `${JSON.stringify(written(file), null, 2)}\n`;
}
/** The text of a file back into a theme. */
function fromFileText(text) {
	if (text.length > LIMITS_LOOKS.fileBytes * 2) return {
		ok: false,
		reason: "too-big"
	};
	try {
		return parseThemeFile(JSON.parse(text));
	} catch {
		return {
			ok: false,
			reason: "not-a-theme"
		};
	}
}
// src/theme/own-values.ts
var SYSTEM = new Set(Object.keys(rustigExpressive.system));
var empty = () => ({
	roles: {},
	system: {},
	density: {},
	components: {}
});
/**
* The own values for light or dark: that mode's own before both. Only names the catalogue can set, with a value
* their kind writes anew; everything else (unknown names, fixed names, wrong values) stays out.
*/
function ownLayers(values, mode) {
	const layers = empty();
	if (values === void 0) return layers;
	const merged = {
		...values.both,
		...values[mode]
	};
	for (const [name, raw] of Object.entries(merged)) {
		const entry = entryOf(name);
		if (entry === void 0) continue;
		const value = checkValue(entry.kind, raw);
		if (value === null) continue;
		const layer = name.startsWith("c-") ? "roles" : name.startsWith("density-") ? "density" : SYSTEM.has(name) ? "system" : "components";
		layers[layer][`--${name}`] = value;
	}
	return layers;
}
// src/theme/styles.ts
/** Danger is red in every style: the error roles of Rustig's calculation; only a higher contrast makes them stronger. */
function dangerRoles(seed, mode, contrast) {
	return Object.fromEntries(Object.entries(colorTokens(seed, mode, contrast)).filter(([name]) => DASHBOARD_ROLES.has(name)));
}
/** A theme as a style: the knobs of its base, then its own. */
function styleOf(file) {
	if (file.base === "leeg") return {
		base: "leeg",
		knobs: { ...RUSTIG_KNOBS },
		scheme: SCHEMES$1.normal,
		contrast: CONTRASTS.normal,
		system: { ...LEEG_SYSTEM },
		components: { ...LEEG_COMPONENTS },
		...file.values === void 0 ? {} : { values: file.values }
	};
	const knobs = {
		...RUSTIG_KNOBS,
		...BASE_KNOBS[file.base],
		...file.knobs
	};
	return {
		base: file.base,
		knobs,
		scheme: SCHEMES$1[knobs.strength],
		contrast: CONTRASTS[knobs.contrast],
		system: knobSystem(knobs),
		components: {
			...BASE_COMPONENTS[file.base],
			...knobComponents(knobs)
		},
		...file.values === void 0 ? {} : { values: file.values }
	};
}
var withDashes = (values) => Object.fromEntries(Object.entries(values).map(([name, value]) => [`--${name}`, value]));
/** Every CSS custom property of a style: colour roles, the four shapes, then layer 2, density and layer 3. */
function computeLook(style, settings, systemPrefersDark) {
	const seed = isValidSeed(settings.seed) ? settings.seed : rustigExpressive.color.defaultSeed;
	const mode = resolveMode(settings.mode, systemPrefersDark);
	const own = ownLayers(style.values, mode);
	const leeg = style.base === "leeg" ? leegColours(mode, chosenAccent(seed)) : null;
	return {
		...leeg ? leeg.roles : colorTokens(seed, mode, style.contrast, style.scheme),
		...own.roles,
		...dangerRoles(seed, mode, style.contrast),
		...SHAPE_TOKENS,
		...withDashes({
			...rustigExpressive.system,
			...style.system
		}),
		...own.system,
		...withDashes(rustigExpressive.density[settings.density]),
		...own.density,
		...withDashes({
			...rustigExpressive.components,
			...style.components
		}),
		...leeg?.marks,
		...own.components
	};
}
Object.freeze([...[...COLOR_ROLES, ...EXTRA_ROLES].map((role) => `--c-${role}`).filter((name) => !DASHBOARD_ROLES.has(name)), ...Object.keys(rustigExpressive.components).map((name) => `--${name}`)]);
new Map(LISTED_NAMES.map((name, index) => [name, index]));
var tokensOf$1 = (file, seed, mode) => computeLook(styleOf(file), {
	seed,
	mode,
	density: "comfortable"
}, false);
/** Whether danger still stands out from a plain tile, in light and in dark. */
var dangerClear = (file, seed) => ["light", "dark"].every((mode) => dangerStandsOut(tokensOf$1(file, seed, mode)));
// src/ui/model/look-view.ts
/** In how many places text is hard to read with a theme in this colour, light or dark: a place counts once. */
function poorPlaces(file, seed) {
	const style = styleOf(file);
	const poor = /* @__PURE__ */ new Set();
	for (const mode of ["light", "dark"]) for (const result of legibility(computeLook(style, {
		seed,
		mode,
		density: "comfortable"
	}, false))) if (!result.ok) poor.add(result.id);
	return poor.size;
}
// theme-gallery-src/check.ts
/** The version of the app this check was built from: what it writes into a theme, and the newest it knows. */
var CHECK_VERSION = "1.3.0";
/** The colour the findings are given in: that of the app before anyone chose one. */
var REPORT_SEED = rustigExpressive.color.defaultSeed;
/** The colours a viewer may have: a theme that takes the viewer's colour is checked in each. */
var CHECK_SEEDS = Object.freeze([.../* @__PURE__ */ new Set([REPORT_SEED, ...rustigExpressive.color.presets.map((preset) => preset.seed)])]);
var NAME_LENGTH = 40;
var DESCRIPTION_LENGTH = 300;
var GALLERY_URL = "https://github.com/DIMENTS/expressive-home-themes";
var APP_URL = "https://github.com/DIMENTS/expressive-home";
var FORM_URL = `${GALLERY_URL}/issues/new?template=theme.yml`;
/** The labels of the form, as GitHub writes them above each answer. */
var FIELDS = {
	name: "Theme name",
	code: "Share code",
	description: "Short description",
	license: "License"
};
/** The answers of the form, from the Markdown GitHub makes of it; also after it was edited by hand. */
function parseIssueBody(body) {
	const sections = /* @__PURE__ */ new Map();
	let current = null;
	for (const raw of body.replace(/\r\n?/g, "\n").split("\n")) {
		const heading = /^###\s+(.+?)\s*$/.exec(raw);
		if (heading) {
			const label = heading[1].toLowerCase();
			current = sections.has(label) ? null : [];
			if (current) sections.set(label, current);
			continue;
		}
		current?.push(raw);
	}
	const answer = (label) => {
		const text = (sections.get(label.toLowerCase()) ?? []).filter((line) => !/^\s*(?:```|~~~)/.test(line)).join("\n").trim();
		return text === "_No response_" ? "" : text;
	};
	return {
		name: answer(FIELDS.name),
		code: answer(FIELDS.code),
		description: answer(FIELDS.description),
		license: /^\s*-\s*\[[xX]\]/m.test(answer(FIELDS.license))
	};
}
/** A word that is, or holds, an address: a link, a mention, an e-mail address or a bare domain. */
var ADDRESS = /^(?:[a-z][a-z0-9+.-]*:\/\/|www\.)|@|^[\p{L}\p{N}_-]+(?:\.[\p{L}\p{N}_-]+)*\.[a-z]{2,}(?:[/:?#].*)?$/iu;
/** Everything but letters, digits, spaces and a few marks; `@` and `#` are left out on purpose. */
var NOT_ALLOWED = /[^\p{L}\p{M}\p{Nd} .,'\-():!?]/gu;
/** After cleaning: what is still an address, or a reference GitHub links by itself (GH-12, a commit). */
var ADDRESS_AFTER = /^www|[\p{L}\p{N}]\.\p{L}{2,}|^gh-\d+$|^(?=[0-9a-f]*\d)(?=[0-9a-f]*[a-f])[0-9a-f]{7,40}$/iu;
var trailing = (word) => word.replace(/[.,!?:;)\]]+$/, "");
/**
* Text from the form as plain words: no markup, links, mentions, numbers of issues or addresses can survive it. Words
* are looked at before and after the other characters are taken out, so a removed character cannot hide an address.
*/
function cleanText(text, limit) {
	return text.normalize("NFC").replace(/[\u2018\u2019]/g, "'").split(/\s+/).filter((word) => word !== "" && !ADDRESS.test(trailing(word))).map((word) => word.replace(NOT_ALLOWED, "")).filter((word) => word !== "" && !ADDRESS_AFTER.test(trailing(word))).join(" ").trim().slice(0, limit).trim();
}
/** The folder of a theme: its name in plain letters, with the number of the form so two never meet. */
function folderName(name, issue) {
	return `${name.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40).replace(/-+$/, "") || "theme"}-${issue}`;
}
var REASONS = Object.freeze({
	"missing-name": {
		en: "The theme needs a name, in letters or digits.",
		nl: "Het thema heeft een naam nodig, in letters of cijfers."
	},
	"missing-code": {
		en: "There is no share code in the form. In Expressive Home, open Theme, choose your theme and copy its code.",
		nl: "Er staat geen deelcode in het formulier. Open in Expressive Home Thema, kies je thema en kopieer de code."
	},
	"no-license": {
		en: "The box for the license is not ticked. Themes in the gallery are shared under CC BY 4.0.",
		nl: "Het vakje voor de licentie is niet aangevinkt. Thema’s in de galerij worden gedeeld onder CC BY 4.0."
	},
	"damaged": {
		en: "This code is incomplete or changed. Copy it again from Expressive Home.",
		nl: "Deze code is onvolledig of veranderd. Kopieer hem opnieuw uit Expressive Home."
	},
	"not-a-theme": {
		en: "This is not a share code of a theme.",
		nl: "Dit is geen deelcode van een thema."
	},
	"too-new": {
		en: "This theme was made with a newer version of Expressive Home than the gallery knows. It can be sent in again once the gallery has caught up.",
		nl: "Dit thema is gemaakt met een nieuwere versie van Expressive Home dan de galerij kent. Het kan opnieuw worden ingestuurd zodra de galerij is bijgewerkt."
	},
	"too-big": {
		en: `This theme is too large for the gallery: a share code may have ${GALLERY_CODE_LIMIT.toLocaleString("en-GB")} characters at most.`,
		nl: `Dit thema is te groot voor de galerij: een deelcode mag hooguit ${GALLERY_CODE_LIMIT.toLocaleString("nl-NL")} tekens hebben.`
	},
	"fakes-alarm": {
		en: "With this theme, ordinary tiles look like an alarm, so a real alarm no longer stands out. Choose another background for tiles.",
		nl: "Met dit thema lijken gewone tegels op een alarm, zodat een echt alarm niet meer opvalt. Kies een andere achtergrond voor tegels."
	},
	"bad-maker": {
		en: "The name of the sender is not a GitHub name.",
		nl: "De naam van de afzender is geen GitHub-naam."
	},
	"bad-issue": {
		en: "The number of the form is not a number.",
		nl: "Het nummer van het formulier is geen nummer."
	},
	"no-pictures": {
		en: "The previews could not be made: the page did not finish within a minute, or the check stopped.",
		nl: "De voorbeelden konden niet worden gemaakt: de pagina was niet binnen een minuut klaar, of de controle stopte."
	}
});
var refuse = (reason) => ({
	ok: false,
	reason,
	message: REASONS[reason]
});
/** A name on GitHub: letters, digits and single hyphens, at most 39, never starting with a hyphen. */
var GITHUB_NAME = /^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/;
var tokensOf = (file, seed, mode) => computeLook(styleOf(file), {
	seed: shownSeed(file, seed) ?? seed,
	mode,
	density: "comfortable"
}, false);
/** Whether own CSS fakes an alarm for any viewer: light and dark, in every colour a viewer may have. */
function fakesAlarm(file) {
	const text = file.css?.text ?? "";
	if (text.trim() === "") return false;
	return CHECK_SEEDS.some((seed) => ["light", "dark"].some((mode) => cssFakesAlarm(text, tokensOf(file, seed, mode))));
}
function reportOf(file, dropped) {
	const text = file.css?.text ?? "";
	const lines = text.trim() === "" ? null : cssLines(text);
	return {
		values: valueCount(file),
		dropped,
		poor: poorPlaces(file, shownSeed(file, REPORT_SEED) ?? REPORT_SEED),
		dangerClear: dangerClear(file, shownSeed(file, REPORT_SEED) ?? REPORT_SEED),
		css: lines === null ? null : {
			lines: text.split("\n").length,
			never: [...lines.never].sort((a, b) => a - b),
			notYet: [...lines.notYet].sort((a, b) => a - b)
		},
		minimumApp: minimumApp(file)
	};
}
/**
* A submitted form, checked: the theme written anew as the app would write it, or why it was refused. Given the id a
* first check gave it, a second check writes exactly the same theme.
*/
function checkSubmission({ body, maker, issue, id }) {
	if (!Number.isSafeInteger(issue) || issue < 1) return refuse("bad-issue");
	if (!GITHUB_NAME.test(maker)) return refuse("bad-maker");
	const fields = parseIssueBody(body);
	const name = cleanText(fields.name, 40);
	if (!/[\p{L}\p{Nd}]/u.test(name)) return refuse("missing-name");
	const code = fields.code.replace(/\s+/g, "");
	if (code === "") return refuse("missing-code");
	if (!fields.license) return refuse("no-license");
	if (code.length > 6e4) return refuse("too-big");
	const parsed = fromShareCode(code);
	if (!parsed.ok) return refuse(parsed.reason);
	if (parsed.file.css && parsed.file.css.version > 1) return refuse("too-new");
	const file = written({
		...parsed.file,
		id: id !== void 0 && isOwnThemeId(id) ? id : newThemeId(),
		name,
		maker,
		app: CHECK_VERSION
	});
	if (fakesAlarm(file)) return refuse("fakes-alarm");
	const shared = toShareCode(file);
	if (shared.length > 6e4) return refuse("too-big");
	return {
		ok: true,
		folder: folderName(name, issue),
		file,
		code: shared,
		description: cleanText(fields.description, 300),
		report: reportOf(file, parsed.dropped.length)
	};
}
/** The share code of a theme, as the app makes it. */
var codeOf = (file) => toShareCode(file);
/** A theme as it is stored in the gallery. */
var themeJson = (file) => toFileText(file);
function findings(report) {
	const lines = [`- ${report.values} values of its own; ${report.dropped} left out. / ${report.values} eigen waarden; ${report.dropped} weggelaten.`, report.poor === 0 ? "- Easy to read everywhere. / Overal goed leesbaar." : `- Hard to read in ${report.poor} places. / Op ${report.poor} plekken slecht leesbaar.`];
	if (!report.dangerClear) lines.push("- An alarm stands out less than in Rustig. / Een alarm valt minder op dan in Rustig.");
	if (report.css) {
		lines.push(`- Own CSS: ${report.css.lines} lines. / Eigen CSS: ${report.css.lines} regels.`);
		const { notYet, never } = report.css;
		const en = (list) => list.length === 1 ? `Line ${list[0]}` : `Lines ${list.join(", ")}`;
		const nl = (list) => list.length === 1 ? `Regel ${list[0]}` : `Regels ${list.join(", ")}`;
		if (notYet.length > 0) lines.push(`  - ${en(notYet)} ${notYet.length === 1 ? "works" : "work"} only once someone allows everything on their device. / ${nl(notYet)} ${notYet.length === 1 ? "werkt" : "werken"} pas na Alles toestaan op het eigen apparaat.`);
		if (never.length > 0) lines.push(`  - ${en(never)} ${never.length === 1 ? "never works" : "never work"}. / ${nl(never)} ${never.length === 1 ? "werkt" : "werken"} nooit.`);
	}
	return lines;
}
var needs = (report) => `Expressive Home ${report.minimumApp}`;
/** The page of one theme in the gallery: pictures, maker, code and findings. */
function themePage(entry) {
	const { file, report } = entry;
	return [
		`# ${file.name}`,
		"",
		`![${file.name}, light](light.png) ![${file.name}, dark](dark.png)`,
		"",
		`**Made by / Gemaakt door** [${file.maker}](https://github.com/${file.maker}) · **Needs / Nodig** ${needs(report)} or newer / of nieuwer · **Added / Toegevoegd** ${entry.date}`,
		"",
		...entry.description ? [`> ${entry.description}`, ""] : [],
		"## Share code / Deelcode",
		"",
		"Copy the code. In Expressive Home, open Theme → Theme from someone else, and paste it. / Kopieer de code. Open in Expressive Home Thema → Thema van een ander, en plak hem.",
		"",
		"```text",
		entry.code,
		"```",
		"",
		"Or download [theme.json](theme.json) and choose it there as a file. / Of download [theme.json](theme.json) en kies het daar als bestand.",
		"",
		"## What the check found / Wat de controle vond",
		"",
		...findings(report),
		...entry.allowed ? [
			"",
			`After Allow everything / Na Alles toestaan:`,
			"",
			`![${file.name}, after allowing everything](allowed.png)`
		] : [],
		""
	].join("\n");
}
/** The answer under the form. */
function commentText(result) {
	if (!result.ok) return [
		"**The theme was not taken in.** / **Het thema is niet aangenomen.**",
		"",
		result.message.en,
		"",
		result.message.nl,
		"",
		"Edit the form to try again. / Wijzig het formulier om het opnieuw te proberen.",
		""
	].join("\n");
	return [
		`**Checked: ${result.file.name}** · ${needs(result.report)}`,
		"",
		...findings(result.report),
		"",
		`Previews / Voorbeelden: \`themes/${result.folder}/light.png\`, \`dark.png\`${result.allowed ? ", `allowed.png` (after Allow everything / na Alles toestaan)" : ""}. See the pull request. / Zie het pull request.`,
		"",
		"Ready; the owner of the gallery decides. / Klaar; de eigenaar van de galerij beslist.",
		""
	].join("\n");
}
var numberOf = (folder) => Number(/-(\d+)$/.exec(folder)?.[1] ?? 0);
var FRONT = {
	en: {
		other: "[Nederlands](README.nl.md)",
		title: "Expressive Home themes",
		lead: [
			`Themes for [Expressive Home](${APP_URL}), the dashboard for Homey Pro, made by people who use it. Every theme here was checked with the app’s own code before it was added.`,
			"",
			"**To use one:** open the theme, copy its share code, and in Expressive Home open Theme → Theme from someone else and paste it. Own CSS from someone else only works in full once you allow it on your device.",
			"",
			`**To share yours:** [send it in with the form](${FORM_URL}). A check looks it over and makes the previews; the owner of the gallery decides.`
		],
		heading: "Themes",
		none: "There are no themes yet.",
		by: "by",
		css: "own CSS",
		needs: "needs",
		license: "The themes are shared under [CC BY 4.0](LICENSE): use and change them, and name the maker."
	},
	nl: {
		other: "[English](README.md)",
		title: "Thema’s voor Expressive Home",
		lead: [
			`Thema’s voor [Expressive Home](${APP_URL}), het dashboard voor Homey Pro, gemaakt door wie het gebruikt. Elk thema hier is nagekeken met de code van het appje zelf voordat het werd toegevoegd.`,
			"",
			"**Gebruiken:** open het thema, kopieer de deelcode, en open in Expressive Home Thema → Thema van een ander en plak hem. Eigen CSS van een ander werkt pas helemaal als je het op je eigen apparaat toestaat.",
			"",
			`**Zelf delen:** [stuur het in met het formulier](${FORM_URL}). Een controle kijkt het na en maakt de voorbeelden; de eigenaar van de galerij beslist.`
		],
		heading: "Thema’s",
		none: "Er zijn nog geen thema’s.",
		by: "door",
		css: "eigen CSS",
		needs: "nodig",
		license: "De thema’s worden gedeeld onder [CC BY 4.0](LICENSE): gebruik en verander ze, en noem de maker."
	}
};
var COLUMNS = 3;
/** The front page, in English or Dutch: what the gallery is, and every theme as a grid of previews, newest first. */
function frontPage(themes, lang) {
	const words = FRONT[lang];
	const sorted = [...themes].sort((a, b) => numberOf(b.folder) - numberOf(a.folder) || a.file.name.localeCompare(b.file.name));
	const cell = ({ folder, file }) => {
		const css = minimumApp(file) === "1.3.0" ? ` · ${words.css}` : "";
		return `[![${file.name}](themes/${folder}/light.png)](themes/${folder}/)<br>**[${file.name}](themes/${folder}/)**<br>${words.by} ${file.maker}${css} · ${words.needs} ${minimumApp(file)}`;
	};
	const rows = [];
	for (let at = 0; at < sorted.length; at += COLUMNS) {
		const cells = sorted.slice(at, at + COLUMNS).map(cell);
		while (cells.length < COLUMNS) cells.push(" ");
		rows.push(`| ${cells.join(" | ")} |`);
	}
	const grid = sorted.length === 0 ? [words.none] : [
		`|${" |".repeat(COLUMNS)}`,
		`|${":-:|".repeat(COLUMNS)}`,
		...rows
	];
	return [
		words.other,
		"",
		`# ${words.title}`,
		"",
		...words.lead,
		"",
		`## ${words.heading}`,
		"",
		...grid,
		"",
		words.license,
		""
	].join("\n");
}
/**
* A theme as stored in the gallery, read again: it must be what this check writes itself, nothing dropped, made by a
* GitHub name, with a clean name, CSS of a known version and no fake alarm. Null for anything else.
*/
function recheck(text) {
	const parsed = fromFileText(text);
	if (!parsed.ok || parsed.dropped.length > 0) return null;
	const { file } = parsed;
	if (!GITHUB_NAME.test(file.maker) || cleanText(file.name, 40) !== file.name || !/[\p{L}\p{Nd}]/u.test(file.name)) return null;
	if (file.css && file.css.version > 1) return null;
	if (fakesAlarm(file) || toShareCode(file).length > 6e4) return null;
	return file;
}
export { APP_URL, CHECK_SEEDS, CHECK_VERSION, DESCRIPTION_LENGTH, FIELDS, GALLERY_URL, NAME_LENGTH, REASONS, REPORT_SEED, checkSubmission, cleanText, codeOf, commentText, fakesAlarm, folderName, frontPage, parseIssueBody, recheck, themeJson, themePage };
