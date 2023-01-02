//HelloWorld.test.js

import { render, screen } from '@testing-library/react';

import HelloWorld from './HelloWorld';

// We will describe a block of tests
test('It should render Zoe when Zoe is passed as the name', () => {
	// First render the component under test
	render(<HelloWorld name={'Zoe'} />);

	// Then create an assertion within the test that checks if our component renders our name prop
	expect(screen.getByText('Zoe')).toBeVisible();
	expect(screen.getByText('Zoe').tagName).toBe('H1');
});

// We will describe a block of tests
test('It should render Adam when Adam is passed as the name', () => {
	// First render the component under test
	render(<HelloWorld name={'Adam'} />);

	// Then create an assertion within the test that checks if our component renders our name prop
	expect(screen.getByText('Adam')).toBeVisible();
	expect(screen.getByText('Adam').tagName).toBe('H1');
});
