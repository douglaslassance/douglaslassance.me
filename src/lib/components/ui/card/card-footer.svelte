<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let { class: className = '', children }: { class?: string; children?: Snippet } = $props();
</script>

<div class={cn('flex items-center p-6 pt-0', className)}>
  {@render children?.()}
</div>
