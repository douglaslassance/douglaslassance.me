<script lang="ts">
  import { Copy, Check } from '@lucide/svelte';

  let { text }: { text: string } = $props();
  let copied = $state(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<button
  type="button"
  onclick={copy}
  aria-label="Copy to clipboard"
  class="inline-flex items-center justify-center w-8 h-8 rounded-md text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
>
  {#if copied}
    <Check size={15} strokeWidth={2} aria-hidden="true" />
  {:else}
    <Copy size={15} strokeWidth={2} aria-hidden="true" />
  {/if}
</button>
