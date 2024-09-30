import globals from "globals";
import pluginJs from "@eslint/js";


export default [
	{ 
		ignores: ["webpack.config.js", "dist/", "coverage/", "app.js"]
	},
	{ 
		files: ["**/*.js"], languageOptions: { sourceType: "module" }, 
	},
	{ 
		languageOptions: { globals: globals.browser}
	},
	{ 
		languageOptions: { globals: globals.jest}
	},
	
	pluginJs.configs.recommended,
];