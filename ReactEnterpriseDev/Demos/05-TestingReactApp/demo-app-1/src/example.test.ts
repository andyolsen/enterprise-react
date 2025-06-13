import { describe, it, expect } from 'vitest'

describe('vitest simple example', () => {
  
    it('shows 2 + 2 is 4', () => {
        expect(2 + 2).toBe(4);
    });

    it('shows 2 + 2 is not 5', () => {
        expect(2 + 2).not.toBe(5);
    });
});