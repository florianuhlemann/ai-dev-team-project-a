import { describe, it, expect } from 'vitest';
import { buildGreeting } from './greeting';

describe('buildGreeting', () => {
	it('should return greeting for Anna', () => {
		expect(buildGreeting('Anna')).toBe('Hello, Anna!');
	});
	it('should trim whitespace for Anna', () => {
		expect(buildGreeting('  Anna  ')).toBe('Hello, Anna!');
	});
	it('should return empty string for empty input', () => {
		expect(buildGreeting('')).toBe('');
	});
	it('should return empty string for whitespace input', () => {
		expect(buildGreeting('   ')).toBe('');
	});
	it('should return greeting for Jean-Luc', () => {
		expect(buildGreeting('Jean-Luc')).toBe('Hello, Jean-Luc!');
	});
});