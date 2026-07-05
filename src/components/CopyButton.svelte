<script lang="ts">
  import { Copy, Check } from '@lucide/svelte';
  import { Button } from '$lib/components/ui/button';

  let { text }: { text: string } = $props();
  let copied = $state(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<Button
  variant="ghost"
  size="icon"
  onclick={copy}
  aria-label="Copy to clipboard"
  class="text-muted-foreground"
>
  {#if copied}
    <Check strokeWidth={2} aria-hidden="true" />
  {:else}
    <Copy strokeWidth={2} aria-hidden="true" />
  {/if}
</Button>
