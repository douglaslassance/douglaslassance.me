<script lang="ts">
  const CONTACT_ENDPOINT = 'https://api.douglaslassance.me/contact';

  let email = $state('');
  let subject = $state('');
  let message = $state('');
  let honeypot = $state('');
  let status: 'idle' | 'sending' | 'success' | 'error' = $state('idle');

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (honeypot) return;

    status = 'sending';

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, subject, message, honeypot }),
      });

      if (response.ok) {
        status = 'success';
        email = '';
        subject = '';
        message = '';
      } else {
        status = 'error';
      }
    } catch {
      status = 'error';
    }
  }
</script>

{#if status === 'success'}
  <div class="rounded-lg border border-border bg-card shadow-sm p-4 desktop:p-6 flex flex-col gap-4 items-start">
    <p class="text-sm text-foreground/70">Thanks! I'll get back to you soon.</p>
    <a
      href="/"
      class="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
    >
      Back to home
    </a>
  </div>
{:else}
  <form onsubmit={handleSubmit} class="rounded-lg border border-border bg-card shadow-sm p-4 desktop:p-6 flex flex-col gap-4">
    <div class="flex flex-col gap-1.5">
      <label for="contact-email" class="text-sm font-medium text-foreground/70">Email</label>
      <input
        id="contact-email"
        type="email"
        bind:value={email}
        required
        class="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
      />
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="contact-subject" class="text-sm font-medium text-foreground/70">Subject</label>
      <input
        id="contact-subject"
        type="text"
        bind:value={subject}
        required
        class="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
      />
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="contact-message" class="text-sm font-medium text-foreground/70">Message</label>
      <textarea
        id="contact-message"
        bind:value={message}
        required
        rows="5"
        class="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-foreground/20"
      ></textarea>
    </div>

    <input
      type="text"
      name="honeypot"
      bind:value={honeypot}
      tabindex="-1"
      autocomplete="off"
      class="hidden"
      aria-hidden="true"
    />

    <button
      type="submit"
      disabled={status === 'sending'}
      class="self-start inline-flex items-center justify-center gap-2 px-5 h-11 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
    >
      {status === 'sending' ? 'Sending…' : 'Send message'}
    </button>

    {#if status === 'error'}
      <p class="text-sm text-red-500">Something went wrong. Please try again.</p>
    {/if}
  </form>
{/if}
