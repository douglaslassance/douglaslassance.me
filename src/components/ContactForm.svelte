<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Label } from '$lib/components/ui/label';

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
    <p class="text-sm text-muted-foreground">Thanks! I'll get back to you soon.</p>
    <Button href="/">Back to home</Button>
  </div>
{:else}
  <form onsubmit={handleSubmit} class="rounded-lg border border-border bg-card shadow-sm p-4 desktop:p-6 flex flex-col gap-4">
    <div class="flex flex-col gap-1.5">
      <Label for="contact-email">Email</Label>
      <Input id="contact-email" type="email" bind:value={email} required />
    </div>

    <div class="flex flex-col gap-1.5">
      <Label for="contact-subject">Subject</Label>
      <Input id="contact-subject" type="text" bind:value={subject} required />
    </div>

    <div class="flex flex-col gap-1.5">
      <Label for="contact-message">Message</Label>
      <Textarea id="contact-message" bind:value={message} required rows={5} />
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

    <Button type="submit" disabled={status === 'sending'} class="self-start">
      {status === 'sending' ? 'Sending…' : 'Send message'}
    </Button>

    {#if status === 'error'}
      <p class="text-sm text-destructive">Something went wrong. Please try again.</p>
    {/if}
  </form>
{/if}
