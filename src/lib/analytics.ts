/**
 * Analytics utilities for publication interactions
 *
 * Since we're using Vercel's free plan, we rely on automatic page view tracking
 * rather than custom events. The PDF proxy routes will show up in analytics
 * as page views for /api/publications/[filename] routes.
 */

// No custom tracking functions needed - Vercel automatically tracks all page views
// including API route access at /api/publications/[filename]
