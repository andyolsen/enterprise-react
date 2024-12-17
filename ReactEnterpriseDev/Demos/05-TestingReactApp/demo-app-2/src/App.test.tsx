// Don't need the following imports, because vite.config.ts configures tests to use "globals:true".
// import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from './App'

describe('App', () => {

    it('renders heading', () => {
        render(<App />)
        const h1Element = screen.getByText(/This is my cool app/i)
        expect(h1Element).toBeInTheDocument()
    });
});