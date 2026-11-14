import { TestBed } from '@angular/core/testing';

import { FormSubmission } from './form-submission';

describe('FormSubmission', () => {
  afterEach(() => vi.restoreAllMocks());

  it('posts the fields URL-encoded with the form name', async () => {
    const fetch = vi.spyOn(window, 'fetch').mockResolvedValue(new Response(null, { status: 200 }));
    await TestBed.inject(FormSubmission).send('contact', { name: 'Léa Dubois', message: 'a&b' });

    expect(fetch).toHaveBeenCalledOnce();
    const [url, init] = fetch.mock.calls[0];
    expect(url).toBe('/');
    expect(init?.method).toBe('POST');
    expect(init?.headers).toEqual({ 'Content-Type': 'application/x-www-form-urlencoded' });
    expect(Object.fromEntries(new URLSearchParams(init?.body as string))).toEqual({
      'form-name': 'contact',
      name: 'Léa Dubois',
      message: 'a&b',
    });
  });

  it('fails when the server rejects the form', async () => {
    vi.spyOn(window, 'fetch').mockResolvedValue(new Response(null, { status: 404 }));
    await expect(TestBed.inject(FormSubmission).send('newsletter', {})).rejects.toThrow('404');
  });
});
