import type { Preview } from '@storybook/react';
import '../src/styles/global.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: { expanded: true },
		a11y: { element: '#root', manual: false },
	},
};

export default preview;