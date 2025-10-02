import { injectAxe, checkA11y } from 'axe-playwright';
import type { Page } from 'playwright';

export const preRender = async (page: Page) => {
	await injectAxe(page);
};

export const postRender = async (page: Page) => {
	const rootSel = '#storybook-root, #root';
	await checkA11y(page, rootSel, {
		detailedReport: true,
		detailedReportOptions: { html: true },
	});
};